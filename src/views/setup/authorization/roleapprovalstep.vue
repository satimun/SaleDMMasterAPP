<template>
  <div class="animated fadeIn">
    <b-row>
      <b-card no-body class="w-100 card-accent-info">
        <pageheader :title="$t('dic.roleapprovalstep')"></pageheader>
        <div class="navbar navbar-light bg-default">
          <form class="form-search form-inline col-sm-12 col-md-11" @submit.prevent="LoadData">
            <b-form-group
              :label="$t('dic.filter') + ' : '"
              label-for="filter"
              label-class="mr-1 ml-1"
            >
              <b-form-input
                id="filter"
                type="search"
                :placeholder="$t('dic.search')"
                trim
                v-model="filter.txtSearch"
              ></b-form-input>
            </b-form-group>

            <table class="multiselection" v-show="avSearch">
              <tr>
                <td>
                  <label class="mr-1 ml-1" for="rolefilter">{{$t('dic.role')}} :</label>
                </td>
                <td>
                  <multiselect
                    id="rolefilter"
                    :multiple="true"
                    :show-labels="false"
                    v-model="role.selected"
                    :options="role.lists"
                    label="_label"
                    track-by="id"
                  ></multiselect>
                </td>
              </tr>
            </table>

            <table class="multiselection" v-show="avSearch">
              <tr>
                <td>
                  <label class="mr-1 ml-1" for="Approvalfilter">{{$t('dic.approval')}} :</label>
                </td>
                <td>
                  <multiselect
                    id="Approvalfilter"
                    :multiple="true"
                    :show-labels="false"
                    v-model="table.selected"
                    :options="table.lists"
                    label="description"
                    track-by="id"
                  ></multiselect>
                </td>
              </tr>
            </table>

            <table class="multiselection" v-show="avSearch">
              <tr>
                <td>
                  <label class="mr-1 ml-1" for="updateflagfilter">{{$t('dic.updateflag')}} :</label>
                </td>
                <td>
                  <multiselect
                    id="updateflagfilter"
                    :multiple="true"
                    :show-labels="false"
                    v-model="updateFlag.selected"
                    :options="updateFlag.lists"
                    label="_label"
                    track-by="id"
                  ></multiselect>
                </td>
              </tr>
            </table>

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
            <button class="navbar-toggler pt-2 pb-2" @click="avSearch = !avSearch" type="button">
              <span
                :class="['icons', { 'icon-magnifier-add': !avSearch, 'icon-magnifier-remove': avSearch}]"
              ></span>
            </button>
          </div>
        </div>

        <grid
          ref="grid"
          :fields="fields"
          :name="name"
          :btnClone="true"
          :data="data"
          @grid:btnClick="OnClick"
        ></grid>
      </b-card>
    </b-row>
    <!-------------------------------------------- modal ----------------------------------------------->
    <b-modal
      v-model="modal"
      :title="$t('dic.' + name.toLowerCase()) + ' : ' + $t('dic.' + mode.toLowerCase())"
      :header-bg-variant="config"
      no-close-on-backdrop
      :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
      :cancel-title="$t('dic.cancel')"
      centered
      :ok-variant="config"
      :ok-disabled="$v.form.$invalid && mode != 'Delete'"
      @ok="OkClick"
    >
      <template v-if="mode != 'Delete'">
        <b-form-group :label="$t('dic.role')" label-for="role">
          <multiselect
            id="role"
            v-model="form.role"
            :multiple="false"
            :allow-empty="false"
            :options="role.lists"
            :show-labels="false"
            :disabled="saveData.length > 1"
            label="_label"
            track-by="id"
          ></multiselect>
        </b-form-group>

        <b-form-group :label="$t('dic.approvalstep')" label-for="approvalstep">
          <multiselect
            id="approvalstep"
            v-model="form.approvalStep"
            :multiple="false"
            :allow-empty="false"
            :options="approvalStep.lists"
            :disabled="saveData.length > 1"
            :show-labels="false"
            label="description"
            track-by="id"
          ></multiselect>
        </b-form-group>

        <b-form-group :label="$t('dic.status')" label-for="status">
          <b-form-select id="status" v-model="form.status" :options="status.current">
            <option
              value="[Multiple values]"
              :class="{'d-none': saveData.length < 2}"
            >[Multiple values]</option>
          </b-form-select>
        </b-form-group>
      </template>

      <template v-else>
        <delete-detail :msg="errMsg"></delete-detail>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, GetIdDes, GetCodeDes, GetObjArr, ObjResetValue, GetLastUpdate } from "@/shared/utils";
import { status, configMode, multivalue } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

export default {
  i18n: {
    messages: {
      en: {
        dic: {
          codevalid: "This is a required field and must have {0} characters."
        }
      },
      th: { 
        dic: { 
          codevalid: "จำเป็นต้องมี {0} ตัวอักษร"
        } 
      }
    },
    sharedMessages: dic
  },
  computed: {
    config() {
      return configMode[this.mode].class;
    },
    approval_label() {
      return GetObjVal(this.form, "description");
    },
    approvalStep_label() {
      return GetObjVal(this.form2, "description");
    },
  },
  mounted() {
    API.ConstantTableList({
      callblack: res => {
        this.table.lists = res;
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
    API.RoleSearch({
      data: { status: ['A'] },
      callblack: res => {
        res.forEach(x => {
          x._label = GetCodeDes(x);
        });
        this.role.lists = res;
      }
    });
    API.ApprovalStepSearch({
      data: { status: ['A'] },
      callblack: res => {
        this.approvalStep.lists = res;
      }
    });
  },
  data() {
    return {
      name: "RoleApprovalStep",
      avSearch: false,
      txtSearch: "",
      modal: false,
      mode: "Add",
      errMsg: "",
      status: { lists: status, current: status.filter(v => { return v.value != 'C' }), selected: [status[0]] },
      table: {
        lists: [],
        selected: null
      },
      role: {
        lists: [],
        selected: null
      },
      updateFlag: {
        lists: [],
        selected: null
      },
      approvalStep: {
        lists: [],
        selected: null
      },
      filter: {
        txtSearch: null,
        Role_ID: null,
        Table: null,
        UpdateFlag: null,
        Status: null
      },
      form: {
        role: { id: null },
        approvalStep: { id: null },
        status: null
      },
      fields: [
        {
          name: "role._label",
          title: "dic.role",
          sortField: "role._label",
          class: "",
          visible: true
        },
        {
          name: "approvalStep.description",
          title: "dic.approvaldetail",
          sortField: "approvalStep.description",
          class: "",
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
          name: "lastUpdate",
          title: "dic.lastupdate",
          sortField: "lastUpdate",
          class: "text-center",
          visible: true
        }
      ],
      data: [],
      saveData: []
    };
  },
  methods: {
    OnClick(mode, data, evt) {
      this.mode = mode;
      this.modal = true;
      this.saveData = [];

      //clear multivalue
      let idxm = this.role.lists.indexOf(multivalue);
      if (idxm != -1) this.role.lists.splice(idxm, 1);
      idxm = this.approvalStep.lists.indexOf(multivalue);
      if (idxm != -1) this.approvalStep.lists.splice(idxm, 1);

      if (mode == "Add") {
        ObjResetValue(this.form);
        this.form.status = "A";
        this.saveData.push(this.form);
      } else if (mode == 'Delete') {
        this.errMsg = '';
        data.forEach((d, index) => {
          this.errMsg = this.errMsg.concat(GetCodeDes(d.role), " | ", d.approvalStep.description, "<br>");
        });
        this.saveData = data;
      } else {
        this.saveData = ObjCopy(data);
        if (this.saveData.length >= 1) {
          //reset id
          this.saveData[0].id = mode == 'Clone' ? null : this.saveData[0].id;
          this.form = ObjCopy(this.saveData[0]);

          if (this.saveData.length > 1) {
            this.saveData.forEach(d => {
              if (this.form.role.id != d.role.id) this.form.role = multivalue;
              if (this.form.approvalStep.id != d.approvalStep.id) this.form.approvalStep = multivalue;
              if (this.form.status != d.status) this.form.status = "[Multiple values]";
            });
            if (this.form.role.id == 0) this.role.lists.push(multivalue);
            if (this.form.approvalStep.id == 0) this.approvalStep.lists.push(multivalue);
          }
        }
        if (mode == 'Clone') this.form.status = "A";
      }
    },
    OkClick(e) {
      if (this.mode == "Delete") {
        let tmp = [];
        this.saveData.forEach(x => {
          tmp.push({ ApprovalStep_ID: x.approvalStep.id, Role_ID: x.role.id });
        });
        API.RoleApprovalStepDelete({
          data: tmp,
          callblack: res => {
            AlertMessage('success');
            this.LoadData(e);
          }
        });
      } else {
        let tmp = [];
        this.saveData.forEach(d => {
          if (this.form.role.id !== 0 && this.form.approvalStep.id !== 0) {
            if (this.form.approvalStep.id !== d.approvalStep.id || this.form.role.id !== d.role.id) {
              tmp.push(ObjCopy(d));
              d.id = null;
            }
            d.approvalStep = this.form.approvalStep;
            d.role = this.form.role;
          }
          if (this.form.status !== "[Multiple values]") d.status = this.form.status;
        });
        tmp.forEach(t => { t.status = 'C'; this.saveData.push(t) });

        API.RoleApprovalStepSave({
          data: this.saveData,
          callback: res => {
            let err = "";
            res.forEach((d, i) => {
              if (d._result._status == "F")
                err = err.concat("#", (i + 1), " ", GetCodeDes(d.role), " | ", d.approvalStep.description, " : ", d._result._message, '<br>');
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
    },
    LoadData(e) {
      this.filter.Role_ID = GetObjArr(this.role.selected, 'id');
      this.filter.Table = GetObjArr(this.table.selected, 'id');
      this.filter.UpdateFlag = GetObjArr(this.updateFlag.selected, 'id');
      this.filter.Status = GetObjArr(this.status.selected, 'value');
      API.RoleApprovalStepSearch({
        data: this.filter,
        callback: res => {
          res.forEach(x => {
            x.role._label = GetCodeDes(x.role);
            x.lastUpdate = GetLastUpdate(x);
          });
          this.data = res;
        }
      });
    }
  },
  validations: {
    form: {
      role: { required },
      approvalStep: { required },
      status: { required }
    }
  }
}
</script>