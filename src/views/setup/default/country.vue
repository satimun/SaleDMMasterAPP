<template>
  <div class="animated fadeIn">
    <b-row>
      <b-card no-body class="w-100 card-accent-info">
        <pageheader :title="$t('dic.country')"></pageheader>
        <!--search-->
        <div class="navbar navbar-light bg-default">
          <form class="form-search form-inline col-sm-12 col-md-11" @submit.prevent="LoadData">
            <div class="form-group">
              <label class="mr-1 ml-1">Filter :</label>
              <input
                class="form-control"
                v-model="search.txtSearch"
                type="search"
                placeholder="Search"
              />
            </div>
            <table class="multiselection" v-show="avSearch">
              <tr>
                <td>
                  <label class="mr-1 ml-1">Zones :</label>
                </td>
                <td>
                  <multiselect
                    v-model="zone.selected"
                    :multiple="true"
                    :options="zone.lists"
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

            <div class="form-group">
              <label></label>
              <button class="btn btn-outline-primary" type="submit">Search</button>
            </div>
          </form>
          <div class="d-flex justify-content-end col-sm-12 col-md-1 pr-sm-0">
            <button class="navbar-toggler pt-2 pb-2" type="button" @click="avSearch = !avSearch">
              <span
                :class="['icons', { 'icon-magnifier-add': !avSearch, 'icon-magnifier-remove': avSearch}]"
              ></span>
            </button>
          </div>
        </div>
        <!--grid-->
        <grid ref="grid" :data="data" :fields="fields" :name="name" @grid:btnClick="OnClick"></grid>
      </b-card>
    </b-row>
    <b-modal
      :title="$t('dic.'+name.toLowerCase()) + ' : ' + $t('dic.'+mode.toLowerCase())"
      :header-bg-variant="config"
      no-close-on-backdrop
      :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
      :cancel-title="$t('dic.cancel')"
      v-model="modal"
      centered
      :ok-variant="config"
      @ok="OkClick"
      :ok-disabled="$v.form.$invalid && mode != 'Delete'"
    >
      <template v-if="mode != 'Delete'">
        <b-form-group
          :label="$t('dic.code')"
          label-for="code"
          :invalid-feedback="$t('dic.codevalid')"
          :state="$v.form.code.required ? !$v.form.code.$invalid : null"
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
          <b-collapse id="more">
            <b-card>
              <b-form-group :label="$t('dic.codeold')" label-for="codeold">
                <b-form-input id="codeold" v-model="form.codeOld" type="text" readonly />
              </b-form-group>
            </b-card>
          </b-collapse>
        </b-form-group>
        <b-form-group :label="$t('dic.description')" label-for="description">
          <b-form-input
            id="description"
            type="text"
            v-model="form.description"
            :disabled="saveData.length > 1"
            autocomplete="off"
            trim
          />
        </b-form-group>
        <b-form-group
          :label="$t('dic.zone')"
          label-for="zone"
          :state="$v.form.zone.required ? !$v.form.zone.$invalid : null"
        >
          <multiselect
            id="zone"
            :disabled="mode == 'View'"
            v-model="form.zone"
            :options="zone.lists"
            :allow-empty="false"
            label="_label"
            track-by="id"
          ></multiselect>
        </b-form-group>
        <b-form-group
          :label="$t('dic.status')"
          label-for="status"
          :state="$v.form.status.required ? !$v.form.status.$invalid : null"
        >
          <b-form-select
            id="status"
            :disabled="mode == 'View'"
            v-model="form.status"
            :options="status.current"
            required
          >
            <option
              value="Multiple values"
              :class="{'d-none': saveData.length == 0}"
              disabled
            >Multiple values</option>
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
import { required, minLength, integer } from "vuelidate/lib/validators";
import {
  GetObjVal,
  SetObjVal,
  GetCodeDes,
  GetObjArr,
  GetArrObj,
  ObjCopy,
  GetDateView,
  ObjResetValue,
  AlertMessage
} from "@/shared/utils";
import { API } from "@/shared/core";
import { status, configMode, multivalue } from "@/shared/define";
import dic from "@/shared/dic";

export default {
  i18n: {
    messages: {
      en: {
        dic: {
          codevalid: "Must have 2 characte.r"
        }
      },
      th: {
        dic: {
          codevalid: "จำเป็นต้องมี 2 ตัวอักษร"
        }
      }
    },
    sharedMessages: dic
  },
  computed: {
    config() {
      return configMode[this.mode].class;
    },
  },
  data: function () {
    return {
      name: "Country",
      avSearch: false,
      mode: "Add",
      modal: false,
      isCodeOld: false,
      status: { lists: status, current: status.filter(v => v.value != 'C'), selected: [status[0]] },
      zone: {
        lists: [],
        selected: null
      },
      search: {
        txtSearch: null,
        zone_ID: null,
        status: null
      },
      form: {
        id: null,
        code: null,
        codeOld: null,
        description: null,
        zone: null,
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
          visible: true,
          filter: false
        },
        {
          name: "zone._label",
          title: "dic.zone",
          sortField: "zone._label",
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
      errMsg: ''
    }
  },
  mounted() {
    API.ZoneSearch({
      data: { Status: ["A"] },
      callblack: res => {
        res.forEach(x => {
          x._label = GetCodeDes(x);
        });
        this.zone.lists = res;
      }
    });

    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      this.isCodeOld = isJustShown;
    })
  },
  methods: {
    OnClick(mode, data, evt) {
      this.mode = mode;
      this.saveData = [];
      this.modal = true;

      //clear multivalue
      let idxm = this.zone.lists.indexOf(multivalue);
      if (idxm != -1) this.zone.lists.splice(idxm, 1);

      if (mode == "Add") {
        ObjResetValue(this.form);
        this.form.status = "A";
        this.saveData.push(this.form);
      } else if (mode === "Delete") {
        this.errMsg = '';
        data.forEach((d, index) => {
          this.errMsg = this.errMsg.concat(d.code, ' | ', d.description, "<br>");
        });
        this.saveData = data;
      } else {

        this.saveData = ObjCopy(data);
        this.form = ObjCopy(this.saveData[this.saveData.length - 1]);
        this.form.zone = this.zone.lists.find(item => { return item.id === this.form.zone.id; });

        if (this.saveData.length > 1) {
          this.saveData.forEach(d => {
            if (this.form.zone.id != d.zone.id) this.form.zone = multivalue;
            if (this.form.code != d.code) this.form.code = "[Multiple values]";
            if (this.form.codeOld != d.codeOld) this.form.codeOld = "[Multiple values]";
            if (this.form.description != d.description) this.form.description = "[Multiple values]";
            if (this.form.status != d.status) this.form.status = "[Multiple values]";
          });
          if (this.form.zone.id == 0) this.zone.lists.push(multivalue);
        }
      }
    },
    OkClick(e) {
      if (this.mode == "Delete") {
        API.CountryDelete({
          data: { ID: this.saveData.map(x => x.id) },
          callblack: res => {
            AlertMessage('success');
            this.LoadData();
          }
        });
      } else {
        this.saveData.forEach(d => {
          if (this.form.zone.id !== 0) d.zone = this.form.zone;
          if (this.form.code !== "[Multiple values]") d.code = this.form.code;
          if (this.form.codeOld !== "[Multiple values]") d.codeOld = this.form.codeOld;
          if (this.form.description !== "[Multiple values]") d.description = this.form.description;
          if (this.form.status !== "[Multiple values]") d.status = this.form.status;
        });
        API.CountrySave({
          data: this.saveData,
          callback: res => {
            let err = "";
            res.forEach((d, i) => {
              if (d._result._status == "F")
                err = err.concat("# ", d.code, ' | ', d.description, " : ", d._result._message, '<br>');
            });
            AlertMessage(err ? "error" : "success", err);
            if (err != "") {
              this.modal = err != "";
              return;
            }
            this.LoadData();
          }
        });
      }
    },
    LoadData(e) {
      this.search.zone_ID = GetObjArr(this.zone.selected, 'id');
      this.search.status = GetObjArr(this.status.selected, 'value');

      API.CountrySearch({
        data: this.search,
        callblack: res => {
          res.forEach(d => {
            d.zone._label = GetCodeDes(d.zone);
            d.lastupdate = d.updateBy + " : " + GetDateView(d.timestamp);
          });
          this.data = res;
          //this.$refs.grid.refresh();
        }
      });
    }
  },
  validations: {
    form: {
      code: { required, minLength: minLength(2) },
      description: { required },
      zone: { required },
      status: { required }
    }
  }
};
</script>

<style scoped>
</style>
