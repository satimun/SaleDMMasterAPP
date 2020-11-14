<template>
  <div class="animated fadeIn">
    <b-row>
      <b-card no-body class="w-100 card-accent-info">
        <pageheader :title="$t('dic.' + name.toLowerCase())"></pageheader>
        <div class="navbar navbar-light bg-default">
          <form class="form-search form-inline col-sm-12 col-md-11" @submit.prevent="LoadData">
            <b-form-group
              :label="$t('dic.approval') + ' : '"
              label-for="approval"
              label-class="mr-1 ml-1"
            >
              <b-form-select
                id="approval"
                v-model="table.selected"
                value-field="id"
                text-field="description"
                required
                :options="table.lists"
              ></b-form-select>
            </b-form-group>
            <table class="multiselection" v-show="avSearch">
              <tr>
                <td>
                  <label class="mr-1 ml-1" for="statusfilter">{{$t('dic.status')}} :</label>
                </td>
                <td>
                  <multiselect
                    id="statusfilter"
                    :multiple="true"
                    :show-labels="false"
                    v-model="status.selected"
                    :options="status.lists"
                    label="text"
                    track-by="value"
                  ></multiselect>
                </td>
              </tr>
            </table>
            <b-form-group>
              <b-button variant="outline-primary" type="submit">{{$t('dic.search')}}</b-button>
            </b-form-group>
          </form>
          <div class="d-flex justify-content-end col-sm-12 col-md-1 pr-sm-0">
            <button class="navbar-toggler pt-2 pb-2" type="button" @click="avSearch = !avSearch">
              <span
                :class="['icons', { 'icon-magnifier-add': !avSearch, 'icon-magnifier-remove': avSearch}]"
              ></span>
            </button>
          </div>
        </div>
        <grid
          :fields="fields"
          name="approval"          
          :btnView="false"
          :btnClone="false"
          :data="data"
          @grid:btnClick="OnClick"
          @grid:rowClicked="LoadData2"
        ></grid>
        <grid
          :fields="fields2"
          name="approvalstep"
          :title="$t('dic.approvalstep')"
          :o_col_no="false"
          :o_grid_visible="form.id > 0 && form.status == 'A'"
          :btnView="false"
          :btnClone="false"
          :data="data2"
          @grid:btnClick="OnClick"
          @grid:rowClicked="LoadData3"
        ></grid>
        <grid
          :fields="fields3"
          :name="'approvalstepstatusflag'"
          :title="$t('dic.approvalstepstatusflag')"
          :o_grid_visible="form2.id > 0 && form2.status == 'A'"
          :btnView="false"
          :btnClone="false"
          :data="data3"
          @grid:btnClick="OnClick"
        ></grid>
      </b-card>
    </b-row>
    <b-modal
      v-model="modal"
      :title="$t('dic.'+gridname) + ' : ' + $t('dic.'+mode.toLowerCase())"
      :header-bg-variant="config"
      no-close-on-backdrop
      :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
      :cancel-title="$t('dic.cancel')"
      centered
      :ok-variant="config"
      :ok-disabled="gridname == 'approval' ? $v.form.$invalid : gridname == 'approvalstep' ? $v.form2.$invalid : $v.form3.$invalid && mode != 'Delete'"
      @ok="OkClick"
    >
      <template v-if="mode != 'Delete'">
        <template v-if="gridname == 'approval'">
          <b-form-group :label="$t('dic.approval')" label-for="approvalform">
            <b-form-input id="approvalform" type="text" disabled :value="table_label"></b-form-input>
          </b-form-group>
          <b-form-group
            :label="$t('dic.updateflag')"
            label-for="updateFlag"
            :state="!$v.form.updateFlag.$invalid"
          >
            <b-form-select
              id="updateFlag"
              v-model="form.updateFlag"
              value-field="id"
              text-field="_label"
              :options="updateFlag.lists"
              :disabled="mode != 'Add'"
              @change="UpdateFlagChange"
            >
              <option
                value="[Multiple values]"
                :class="{'d-none': saveData.length < 2}"
              >[Multiple values]</option>
            </b-form-select>
          </b-form-group>
          <b-form-group :label="$t('dic.description')" label-for="description">
            <b-form-input id="description" type="text" disabled v-model="form.description"></b-form-input>
          </b-form-group>
          <b-form-group
            :label="$t('dic.status')"
            label-for="status"
            :state="$v.form.status.required ? !$v.form.status.$invalid : null"
          >
            <b-form-select id="status" v-model="form.status" :options="status.current">
              <option
                value="[Multiple values]"
                :class="{'d-none': saveData.length < 2}"
              >[Multiple values]</option>
            </b-form-select>
          </b-form-group>
        </template>

        <template v-else-if="gridname == 'approvalstep'">
          <b-form-group :label="$t('dic.approval')" label-for="approvalform2">
            <b-form-input id="approvalform2" type="text" disabled :value="approval_label"></b-form-input>
          </b-form-group>
          <b-form-group :label="$t('dic.step')" label-for="step">
            <b-form-input id="step" type="text" v-model="form2.step" disabled @change="StepChange"></b-form-input>
          </b-form-group>
          <b-form-group :label="$t('dic.description')" label-for="description2">
            <b-form-input id="description2" type="text" disabled :value="form2.description"></b-form-input>
          </b-form-group>
          <b-form-group :label="$t('dic.status')" label-for="status2">
            <b-form-select id="status2" v-model="form2.status" :options="status.current">
              <option
                value="[Multiple values]"
                :class="{'d-none': saveData.length < 2}"
              >[Multiple values]</option>
            </b-form-select>
          </b-form-group>
        </template>

        <template v-else>
          <b-form-group :label="$t('dic.approvalstep')" label-for="approvalform3">
            <b-form-input id="approvalform3" type="text" disabled :value="approvalStep_label"></b-form-input>
          </b-form-group>
          <b-form-group :label="$t('dic.actionflag')" label-for="actionflag">
            <b-form-select
              id="actionflag"
              v-model="form3.actionFlag"
              @change="ActionChange"
              value-field="id"
              text-field="_label"
              :disabled="mode != 'Add'"
              :options="actionFlag.lists"
            >
              <option
                value="[Multiple values]"
                :class="{'d-none': saveData.length < 2}"
              >[Multiple values]</option>
            </b-form-select>
          </b-form-group>
          <b-form-group :label="$t('dic.statusflag')" label-for="statusflag">
            <multiselect
              id="statusflag"
              v-model="form3.statusFlag"
              :multiple="false"
              :allow-empty="false"
              :options="statusFlag.lists"
              :show-labels="false"
              :disabled="saveData.length > 1"
              @input="StatusFlagChange"
              label="_label"
              track-by="id"
            ></multiselect>
          </b-form-group>
          <b-form-group :label="$t('dic.isapproved')" label-for="isapproved">
            <Toggle-Button
              v-if="saveData.length <= 1"
              v-model="form3.isApproved"
              :disabled="form3.actionFlag == 'N'"
              :labels="{checked: 'Yes', unchecked: 'No'}"
            />
            <b-form-select v-else id="isapproved" v-model="form3.isApproved" :options="yesNo">
              <option
                value="[Multiple values]"
                :disabled="saveData.length > 1"
                :class="{'d-none': saveData.length < 2}"
              >[Multiple values]</option>
            </b-form-select>
          </b-form-group>
          <b-form-group :label="$t('dic.status')" label-for="status3">
            <b-form-select id="status3" v-model="form3.status" :options="status.current">
              <option
                value="[Multiple values]"
                :class="{'d-none': saveData.length < 2}"
              >[Multiple values]</option>
            </b-form-select>
          </b-form-group>
        </template>
      </template>
      <template v-else>
        <delete-detail :msg="errMsg"></delete-detail>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetIdDes, GetCodeDes, GetObjArr, GetObjVal, GetArrObj, GetLastUpdate } from "@/shared/utils";
import { status, configMode, multivalue, yes_no } from "@/shared/define";
import { required, maxLength, integer } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

export default {
  i18n: {
    messages: {
      en: {
        dic: {
          updateflagvalid: "Must be at least 1 character.",
          approvalstepstatusflag: 'Approval Step & Status Flag'
        }
      },
      th: {
        dic: {
          updateflagvalid: "จำเป็นต้องมีอย่างน้อย 1 ตัวอักษร",
          approvalstepstatusflag: 'ขั้นตอนการอนุมัติและการตั้งค่าสถานะ'
        }
      }
    },
    sharedMessages: dic
  },
  computed: {
    config() {
      return configMode[this.mode].class;
    },
    table_label() {
      return GetObjVal(this.table.lists.find(x => { return x.id == this.table.selected }), "description");
    },
    updateFlag_label() {
      return GetObjVal(this.updateFlag.lists.find(x => { return x.id == this.form.updateFlag }), "description");
    },
    approval_label() {
      return GetObjVal(this.form, "description");
    },
    approvalStep_label() {
      return GetObjVal(this.form2, "description");
    },
    actionFlagLists() {
      let tmp = [];
      this.actionFlag.lists.forEach(y => {
        if (!this.data3.find(d => { return d.actionFlag == y.id })) {
          tmp.push(y);
        }
      });
      return tmp;
    }
  },
  mounted() {
    API.ConstantTableList({
      callblack: res => {
        this.table.lists = res;
        this.table.selected = this.table.lists[0].id;
      }
    });
    API.ConstantUpdateFlagList({
      callblack: res => {
        res.forEach(x => {
          x._label = GetIdDes(x);
        });
        this.updateFlag.lists = res;
      }
    });
    API.ConstantActionFlagList({
      callblack: res => {
        res.forEach(x => {
          x._label = GetIdDes(x);
        });
        this.actionFlag.lists = res;
      }
    });
    API.StatusFlagSearch({
      data: { groupType: ['A'], status: ['A'] },
      callblack: res => {
        res.forEach(x => {
          x._label = GetCodeDes(x);
        });
        this.statusFlag.lists = res;
      }
    });
  },
  data() {
    return {
      name: "Approval",
      gridname: "approval",
      avSearch: false,
      txtSearch: "",
      modal: false,
      mode: "Add",
      errMsg: "",
      yesNo: yes_no,
      status: { lists: status, current: status.filter(v => v.value != 'C'), selected: [status[0]] },
      table: {
        lists: [],
        selected: null
      },
      statusFlag: {
        lists: [],
        selected: null
      },
      updateFlag: {
        lists: [],
        selected: null
      },
      actionFlag: {
        lists: [],
        selected: null
      },
      filter: {
        table: null,
        status: null
      },
      form: {
        id: null,
        table: null,
        description: null,
        updateFlag: null,
        status: null
      },
      form2: {
        id: null,
        description: null,
        step: null,
        status: null
      },
      form3: {
        approvalStep: { id: null },
        statusFlag: { id: null },
        actionFlag: null,
        isApproved: null,
        status: null
      },
      /*----------------------------------------------------------- field -----------------------------------------------------------*/
      fields: [
        {
          name: "updateFlag",
          title: "dic.updateflag",
          sortField: "updateFlag",
          class: "",
          callback: value => {
            let tmp = this.updateFlag.lists.find(v => {
              return v.id == value;
            });
            return tmp ? tmp._label : "";
          },
          visible: true
        },
        {
          name: "description",
          title: "dic.description",
          sortField: "description",
          visible: true
        },
        {
          name: "status",
          title: "dic.status",
          sortField: "status",
          class: "text-center",
          callback: value => {
            let tmp = status.find(v => {
              return v.value == value;
            });
            return tmp ? tmp.text : "";
          },
          visible: true
        },
        {
          name: "lastupdate",
          title: "dic.lastupdate",
          sortField: "lastupdate",
          class: "text-center",
          visible: true
        }
      ],
      /*----------------------------------------------------------- field 2 -----------------------------------------------------------*/
      fields2: [
        {
          name: "step",
          title: "dic.step",
          sortField: "step",
          class: "text-center",
          visible: true
        },
        {
          name: "description",
          title: "dic.description",
          sortField: "description",
          visible: true
        },
        {
          name: "status",
          title: "dic.status",
          sortField: "status",
          class: "text-center",
          callback: value => {
            let tmp = status.find(v => {
              return v.value == value;
            });
            return tmp ? tmp.text : "";
          },
          visible: true
        },
        {
          name: "lastupdate",
          title: "dic.lastupdate",
          sortField: "lastupdate",
          class: "text-center",
          visible: true
        }
      ],
      /*----------------------------------------------------------- field 3 -----------------------------------------------------------*/
      fields3: [
        {
          name: "actionFlag",
          title: "dic.actionflag",
          sortField: "actionFlag",
          class: "",
          callback: value => {
            let tmp = this.actionFlag.lists.find(v => {
              return v.id == value;
            });
            return tmp ? tmp._label : "";
          },
          visible: true
        },
        {
          name: "statusFlag._label",
          title: "dic.statusflag",
          sortField: "statusFlag._label",
          class: "",
          /* callback: value => {
            let tmp = this.statusFlag.lists.find(v => {
              return v.id == value;
            });
            return tmp ? tmp._label : "";
          }, */
          visible: true
        },
        {
          name: "isApproved",
          title: "dic.isapproved",
          sortField: "isApproved",
          class: "text-center",
          callback: value => {
            return value ? '<i class="fa fa-check-square fa-lg"></i>' : '<i class="fa fa-square-o fa-lg"></i>';
          },
          visible: true
        },
        {
          name: "status",
          title: "dic.status",
          sortField: "status",
          class: "text-center",
          callback: value => {
            let tmp = status.find(v => {
              return v.value == value;
            });
            return tmp ? tmp.text : "";
          },
          visible: true
        },
        {
          name: "lastupdate",
          title: "dic.lastupdate",
          sortField: "lastupdate",
          class: "text-center",
          visible: true
        }
      ],
      data: [],
      data2: [],
      data3: [],
      saveData: []
    };
  },
  methods: {
    OnClick(mode, data, evt, name) {
      this.gridname = name;
      this.mode = mode;
      this.modal = true;
      this.saveData = [];
      if (name == 'approval') {
        if (mode == "Add") {
          ObjResetValue(this.form);
          this.form.status = "A";
          this.saveData.push(this.form);
        } else if (mode == 'Delete') {
          this.errMsg = '';
          data.forEach((d, index) => {
            this.errMsg = this.errMsg.concat(d.description, "<br>");
          });
          this.saveData = data;
        } else {
          this.saveData = ObjCopy(data);
          this.form = ObjCopy(this.saveData[this.saveData.length - 1]);
          if (this.saveData.length > 1) {
            this.saveData.forEach(d => {
              if (this.form.updateFlag != d.updateFlag) this.form.updateFlag = "[Multiple values]";
              if (this.form.description != d.description) this.form.description = "[Multiple values]";
              if (this.form.status != d.status) this.form.status = "[Multiple values]";
            });
          }
        }
        this.form.table = this.table.selected;

      } else if (name == 'approvalstep') {
        if (mode == "Add") {
          ObjResetValue(this.form2);
          this.form2.status = "A";
          this.form2.step = this.data2.length ? this.data2.map(v => v.step).reduce((a, b) => { return Math.max(a, b) }) : this.data2.length;
          this.form2.step = !this.form2.step ? 1 : this.form2.step + 1;
          this.saveData.push(this.form2);
          this.StepChange();
        } else if (mode == 'Delete') {
          this.errMsg = '';
          data.forEach((d, index) => {
            this.errMsg = this.errMsg.concat(d.description, "<br>");
          });
          this.saveData = data;
        } else {
          this.saveData = ObjCopy(data);
          this.form2 = ObjCopy(this.saveData[this.saveData.length - 1]);
          if (this.saveData.length > 1) {
            this.saveData.forEach(d => {
              if (this.form2.step != d.step) this.form2.step = "[Multiple values]";
              if (this.form2.description != d.description) this.form2.description = "[Multiple values]";
              if (this.form2.status != d.status) this.form2.status = "[Multiple values]";
            });
          }
        }
        this.form2.approval_ID = this.form.id;
      } else {

        //clear multivalue
        let idxm = this.statusFlag.lists.indexOf(multivalue);
        if (idxm != -1) this.statusFlag.lists.splice(idxm, 1);

        if (mode == "Add") {
          ObjResetValue(this.form3);
          this.form3.status = "A";
          this.form3.isApproved = false;
          this.saveData.push(this.form3);
          this.StepChange();
        } else if (mode == 'Delete') {
          this.errMsg = '';
          data.forEach((d, index) => {
            this.errMsg = this.errMsg.concat(GetObjVal(this.actionFlag.lists.find(v => { return v.id == d.actionFlag; }), "_label"), ' | ', GetCodeDes(d.statusFlag), "<br>");
          });
          this.saveData = data;
        } else {
          this.saveData = ObjCopy(data);
          this.form3 = ObjCopy(this.saveData[this.saveData.length - 1]);
          this.form3.statusFlag = this.statusFlag.lists.find(item => { return item.id === this.form3.statusFlag.id; });

          if (this.saveData.length > 1) {
            this.saveData.forEach(d => {
              if (this.form3.statusFlag.id != d.statusFlag.id) this.form3.statusFlag = multivalue;
              if (this.form3.actionFlag != d.actionFlag) this.form3.actionFlag = "[Multiple values]";
              if (this.form3.isApproved != d.isApproved) this.form3.isApproved = "[Multiple values]";
              if (this.form3.status != d.status) this.form3.status = "[Multiple values]";
            });
            if (this.form3.statusFlag.id == 0) this.statusFlag.lists.push(multivalue);
          }
        }
        this.form3.approvalStep.id = this.form2.id;
      }
    },
    OkClick(e) {
      if (this.gridname == 'approval') {
        if (this.mode == "Delete") {
          API.ApprovalDelete({
            data: { ID: this.saveData.map(x => x.id) },
            callblack: res => {
              AlertMessage('success');
              this.LoadData(e);
            }
          });
        } else {
          this.saveData.forEach(d => {
            if (this.form.updateFlag !== "[Multiple values]") d.updateFlag = this.form.updateFlag;
            if (this.form.description !== "[Multiple values]") d.description = this.form.description;
            if (this.form.status !== "[Multiple values]") d.status = this.form.status;
          });
          API.ApprovalSave({
            data: this.saveData,
            callback: res => {
              let err = "";
              res.forEach((d, i) => {
                if (d._result._status == "F")
                  err = err.concat("# ", d.description, " : ", d._result._message, '<br>');
              });
              AlertMessage(err ? "error" : "success", err);
              if (err != "") {
                this.modal = err != "";
                return;
              }
              this.LoadData(e);
            }
          });
        }
      } else if (this.gridname == 'approvalstep') {
        if (this.mode == "Delete") {
          API.ApprovalStepDelete({
            data: { ID: this.saveData.map(x => x.id) },
            callblack: res => {
              AlertMessage('success');
              this.LoadData2(this.form);
            }
          });
        } else {
          this.saveData.forEach(d => {
            if (this.form2.step !== "[Multiple values]") d.step = this.form2.step;
            if (this.form2.description !== "[Multiple values]") d.description = this.form2.description;
            if (this.form2.status !== "[Multiple values]") d.status = this.form2.status;
          });
          API.ApprovalStepSave({
            data: this.saveData,
            callback: res => {
              let err = "";
              res.forEach((d, i) => {
                if (d._result._status == "F")
                  err = err.concat("# ", d.description, " : ", d._result._message, '<br>');
              });
              AlertMessage(err ? "error" : "success", err);
              if (err != "") {
                this.modal = err != "";
                return;
              }
              this.LoadData2(this.form);
            }
          });
        }
      } else {
        if (this.mode == "Delete") {
          let tmp = [];
          this.saveData.forEach(x => {
            tmp.push({ ApprovalStep_ID: x.approvalStep.id, ActionFlag: x.actionFlag });
          });
          API.ApprovalStepStatusFlagDelete({
            data: tmp,
            callblack: res => {
              AlertMessage('success');
              this.LoadData3(this.form2);
            }
          });
        } else {
          /* if(this.mode == 'Add') {
            let last = this.saveData.length - 1;
            if(this.data.find(x => x.actionFlag == this.saveData[last].actionFlag && x.approvalStep.id == this.saveData[last].approvalStep.id)) {
              
              return;
            }
          } */
          this.saveData.forEach(d => {
            if (this.form3.statusFlag.id !== 0) d.statusFlag = this.form3.statusFlag;
            if (this.form3.actionFlag !== "[Multiple values]") d.actionFlag = this.form3.actionFlag;
            if (this.form3.isApproved !== "[Multiple values]") d.isApproved = this.form3.isApproved;
            if (this.form3.status !== "[Multiple values]") d.status = this.form3.status;
          });
          API.ApprovalStepStatusFlagSave({
            data: this.saveData,
            callback: res => {
              let err = "";
              res.forEach((d, i) => {
                if (d._result._status == "F")
                  err = err.concat("# ", GetObjVal(this.actionFlag.lists.find(v => { return v.id == d.actionFlag; }), "_label"), ' | ', GetCodeDes(d.statusFlag), " : ", d._result._message, '<br>');
              });
              AlertMessage(err ? "error" : "success", err);
              if (err != "") {
                this.modal = err != "";
                return;
              }
              this.LoadData3(this.form2);
            }
          });
        }
      }
    },
    LoadData(e) {
      this.filter.table = [this.table.selected];
      this.filter.status = this.status.selected.map(x => x.value);
      ObjResetValue(this.form);
      ObjResetValue(this.form2);
      API.ApprovalSearch({
        data: this.filter,
        callback: res => {

          res.forEach(x => {
            x.lastupdate = GetLastUpdate(x);
          });
          this.data = res;
        }
      });
    },
    LoadData2(row) {
      this.form = ObjCopy(row);
      ObjResetValue(this.form2);
      API.ApprovalStepSearch({
        data: { approval_ID: [row.id], status: this.status.selected.map(x => x.value) },
        callback: res => {
          res.forEach(x => {
            x.lastupdate = GetLastUpdate(x);
          });
          this.data2 = res;
        }
      });
    },
    LoadData3(row) {
      this.form2 = ObjCopy(row);
      API.ApprovalStepStatusFlagSearch({
        data: { ApprovalStep_ID: [row.id], status: this.status.selected.map(x => x.value) },
        callback: res => {
          res.forEach(x => {
            x.statusFlag._label = GetCodeDes(x.statusFlag);
            x.lastupdate = GetLastUpdate(x);
          });
          this.data3 = res;
        }
      });
    },
    UpdateFlagChange() {
      this.form.description = this.table_label.concat(' -> ', this.updateFlag_label);
    },
    StepChange() {
      this.form2.description = this.approval_label.concat(' -> Step ', this.form2.step);
    },
    StatusFlagChange(value) {
      this.form3.statusFlag.id = value.id;
    },
    ActionChange(e) {
      if (this.form3.actionFlag === 'N') {
        this.form3.isApproved = false;
      };
    }
  },
  validations: {
    form: {
      updateFlag: {
        required,
      },
      status: { required }
    },
    form2: {
      step: { required },
      status: { required }
    },
    form3: {
      statusFlag: { required },
      actionFlag: { required },
      isApproved: { required },
      status: { required }
    }
  }
};
</script>