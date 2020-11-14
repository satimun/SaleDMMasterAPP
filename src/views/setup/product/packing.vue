<template>
  <div class="animated fadeIn">
    <b-row>
      <b-card no-body class="w-100 card-accent-info">
        <pageheader :title="$t('dic.packing')"></pageheader>
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
                text-field="_label"
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
          <b-input-group>
            <b-form-input
              id="code"
              type="text"
              v-model="form.code"
              maxlength="2"
              :disabled="saveData.length > 1"
              autocomplete="off"
              trim
              v-upper
            />
            <b-input-group-append v-show="mode != 'Add'">
              <b-button
                v-b-toggle.more
                variant="outline-info"
              >{{ isCodeOld ? $t('dic.hide') : $t('dic.more')}}</b-button>
            </b-input-group-append>
          </b-input-group>
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
        <b-form-group
          :label="$t('dic.descriptionth')"
          label-for="descriptionth"
          :state="$v.form.description.$invalid"
        >
          <b-form-input
            id="descriptionth"
            type="text"
            trim
            :disabled="saveData.length > 1"
            autocomplete="off"
            v-model="form.descriptionTH"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :label="$t('dic.picturefile')"
          label-for="picturefile"
          :state="$v.form.description.$invalid"
        >
          <b-form-file
            id="picturefile"
            v-model="file"
            :placeholder="$t('dic.fileholder')"
            :drop-placeholder="$t('dic.dropholder')"
          ></b-form-file>
          <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
        </b-form-group>
        <b-form-group :label="$t('dic.status')" label-for="status">
          <b-form-select id="status" v-model="form.status" :options="status.current"></b-form-select>
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
      en: {
        dic: {
          codevalid: 'Must have {0} character.',
          fileholder: 'Choose a file or drop it here.',
          dropholder: 'Drop file here.'
        }
      },
      th: {
        dic: {
          codevalid: 'จำเป็นต้องมี {0} ตัวอักษร',
          fileholder: 'เลือกไฟล์หรือวางที่นี่',
          dropholder: 'วางไฟล์ที่นี่'
        }
      }
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
    API.ConstantPackingGroupTypeList({
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
      name: "Packing",
      avSearch: false,
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
        codeOld: null,
        description: null,
        descriptionTH: null,
        groupType: null,
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
          name: "codeOld",
          title: "dic.codeold",
          sortField: "codeOld",
          class: "text-center",
          visible: false
        },
        {
          name: "description",
          title: "dic.description",
          sortField: "description",
          class: "",
          visible: true
        },
        {
          name: "descriptionTH",
          title: "dic.descriptionth",
          sortField: "descriptionTH",
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
      saveData: [],
      file: null
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
        this.form = this.saveData = ObjCopy(data);
        // this.saveData;
        // if (this.saveData.length >= 1) {
        //   //reset id
        //   this.form = this.saveData[this.saveData - 1];
        // }
      }

      this.form.groupType = this.groupType.selected;
    },
    OkClick(e) {
      if (this.mode == "Delete") {
        API.PackingDelete({
          data: { ID: this.saveData.map(x => x.id) },
          callblack: res => {
            AlertMessage('success');
            this.Search(e);
          }
        });
      } else {
        this.saveData.forEach(d => {
          d.code = this.form.code;
          d.groupType = this.form.groupType;
          d.description = this.form.description;
          d.textColor = this.form.textColor;
          d.status = this.form.status;
        });

        API.PackingSave({
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
      API.PackingSearch({
        data: this.filter,
        callback: res => {
          res.forEach(x => {
            x.lastupdate = GetLastUpdate(x);
          });
          this.data = res;
        }
      });
    }
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