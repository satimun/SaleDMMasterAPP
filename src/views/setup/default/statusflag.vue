<template>
  <div class="animated fadeIn">
    <b-row>
      <b-card no-body class="w-100 card-accent-info">
        <pageheader :title="$t('dic.statusflag')"></pageheader>
        <div class="navbar navbar-light bg-default">
          <form class="form-search form-inline col-sm-12 col-md-11" @submit.prevent="Search">
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
            <b-form-group
              :label="$t('dic.grouptype') + ' : '"
              label-for="grouptype"
              label-class="mr-1 ml-1"
            >
              <b-form-select
                id="grouptype"
                v-model="groupType.selected"
                value-field="id"
                text-field="description"
                required
                :options="groupType.lists"
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
        <grid ref="grid" :fields="fields" :name="name" :data="data" @grid:btnClick="OnClick"></grid>
      </b-card>
    </b-row>
    <b-modal
      v-model="modal"
      :title="$t('dic.'+name.toLowerCase()) + ' : ' + $t('dic.'+mode.toLowerCase())"
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
        <b-form-group :label="$t('dic.grouptype')" label-for="grouptypeform">
          <b-form-input id="grouptypeform" type="text" disabled :value="groupType_label"></b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('dic.code')"
          label-for="code"
          :invalid-feedback="$t('dic.codevalid', [codeRequire])"
          :state="!$v.form.code.$invalid"
        >
          <b-form-input
            id="code"
            type="text"
            maxlength="2"
            trim
            :disabled="mode != 'Add'"
            autocomplete="off"
            v-upper
            v-model="form.code"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('dic.description')"
          label-for="description"
          :state="$v.form.description.$invalid"
        >
          <b-form-input
            id="description"
            type="text"
            trim
            :disabled="saveData.length > 1"
            autocomplete="off"
            v-model="form.description"
          ></b-form-input>
        </b-form-group>
        <b-form-group :label="$t('dic.textcolor')" label-for="textcolor">
          <b-form-select id="textcolor" :class="['text-'+ form.textColor]" v-model="form.textColor">
            <option v-for="c in textColorLists" :key="c" :value="c" :class="['text-'+ c]">{{c}}</option>
            <option
              value="[Multiple values]"
              :class="{'d-none': saveData.length < 2}"
            >[Multiple values]</option>
          </b-form-select>
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
import { GetDateView, GetObjVal, AlertMessage, ObjCopy, ObjResetValue, GetIdDes, GetObjArr, GetArrObj, GetLastUpdate } from "@/shared/utils";
import { status, configMode, textColor } from "@/shared/define";
import { required, maxLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

export default {
  i18n: {
    messages: {
      en: { dic: { codevalid: 'Must have {0} character.' } },
      th: { dic: { codevalid: 'จำเป็นต้องมี {0} ตัวอักษร'} }
    },
    sharedMessages: dic
  },
  computed: {
    config() {
      return configMode[this.mode].class;
    },
    groupType_label() {
      return GetObjVal(this.groupType.lists.find(v => v.id == this.groupType.selected), "_label");
    },
    textColorLists() {
      return textColor;
    },
    codeRequire() {
      return GetObjVal(this.groupType.lists.find(v => v.id == this.groupType.selected), "codeRequire");
    }
  },
  asyncComputed: {
    /* codeCount: {
      get() {
        return this.GetLength().then(count => count);
      },
      /* shouldUpdate () {
        return this.data.length == 1;
      } 
    } */
  },
  mounted() {
    API.ConstantStatusFlagGroupTypeList({
      data: {},
      callblack: res => {
        res.forEach(x => {
          x._label = GetIdDes(x);
        });
        this.groupType.lists = res;
        this.groupType.selected = GetObjVal(this.groupType.lists[0], 'id');
      }
    });
  },
  data() {
    return {
      name: "StatusFlag",
      avSearch: false,
      txtSearch: "",
      modal: false,
      mode: "Add",
      errMsg: "",
      status: { lists: status, current: status.filter(v => { return v.value != 'C' }), selected: [status[0]] },
      groupType: {
        lists: [],
        selected: null
      },
      filter: {
        txtSearch: null,
        groupType: null,
        status: null,
      },
      form: {
        id: null,
        code: null,
        description: null,
        groupType: null,
        textColor: null,
        status: null
      },
      fields: [
        {
          name: "code",
          title: "dic.code",
          sortField: "code",
          class: "text-center",
          visible: true
        },
        {
          name: "description",
          title: "dic.description",
          sortField: "description",
          class: "",
          visible: true
        },
        {
          name: "textColor",
          title: "dic.textcolor",
          sortField: "textColor",
          class: "text-center",
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
      saveData: []
    };
  },
  methods: {
    OnClick(mode, data, evt) {
      this.mode = mode;
      this.modal = true;
      this.saveData = [];
      if (mode == "Add") {
        ObjResetValue(this.form);
        this.form.status = "A";
        this.saveData.push(this.form);
      } else if (mode == 'Delete') {
        this.errMsg = '';
        data.forEach((d, index) => {
          this.errMsg = this.errMsg.concat(d.code, ' | ', d.description, "<br>");
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
              if (this.form.code != d.code) this.form.code = "[Multiple values]";
              if (this.form.description != d.description) this.form.description = "[Multiple values]";
              if (this.form.textColor != d.textColor) this.form.textColor = "[Multiple values]";
              if (this.form.status != d.status) this.form.status = "[Multiple values]";
            });
          }
        }
      }

      this.form.groupType = this.groupType.selected;
    },
    OkClick(e) {
      if (this.mode == "Delete") {
        API[this.name + 'Delete']({
          data: { ID: this.saveData.map(x => x.id) },
          callblack: res => {
            AlertMessage('success');
            this.Search(e);
          }
        });
      } else {
        this.saveData.forEach(d => {
          if (this.form.code !== "[Multiple values]") d.code = this.form.code;
          if (this.form.groupType !== "[Multiple values]") d.groupType = this.form.groupType;
          if (this.form.description !== "[Multiple values]") d.description = this.form.description;
          if (this.form.textColor !== "[Multiple values]") d.textColor = this.form.textColor;
          if (this.form.status !== "[Multiple values]") d.status = this.form.status;
        });

        API[this.name + 'Save']({
          data: this.saveData,
          callback: res => {
            let err = "";
            res.forEach((d, i) => {
              if (d._result._status == "F")
                err = err.concat("#", (i + 1), " ", d.code, " | ", d.description, " : ", d._result._message, '<br>');
            });
            AlertMessage(err ? "error" : "success", err);
            if (err != "") {
              this.modal = err != "";
              return;
            }
            this.Search(e);
          }
        });
      }
    },
    Search(e) {
      this.filter.groupType = [this.groupType.selected];
      this.filter.status = this.status.selected.map(x => x.value);
      API[this.name + 'Search']({
        data: this.filter,
        callback: res => {
          res.forEach(x => {
            x.lastupdate = GetLastUpdate(x);
          });
          this.data = res;
          //reset codeCount
          // if (this.data.length <= 1) this.$asyncComputed.codeCount.update();
        }
      });
    },
    /* GetLength() {
      return new Promise((resolve, reject) => {
        API.StatusFlagSearch({
          data: { groupType: [this.groupType.selected], status: this.status.current.map(v => v.value) },
          callback: res => {
            let count = 0;
            res.forEach(x => {
              if (x.code.length > count) {
                count = x.code.length;
              }
            });
            resolve(count);
          }
        });
      });
    } */
  },
  validations: {
    form: {
      code: {
        required,
        codevalid(val) {
          return this.form.code != "[Multiple values]" ? this.form.code.length == this.codeRequire : true;
        }
      },
      textColor: { required },
      description: { required },
      status: { required }
    }
  }
};
</script>