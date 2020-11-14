<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col>
        <b-card
          no-body
          class="w-100 card-accent-info"
        >
          <pageheader
            :title="$t('dic.administrator')"
            :breadcrumbs="breadcrumbs"
          > </pageheader>

          <div
            class="navbar navbar-light bg-default"
            v-show="avSearch"
          >
            <form
              class="form-search form-inline col-sm-12 col-md-11"
              @submit.prevent="Search"
            >
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
                  v-model="txtSearch"
                  class="w-100"
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <b-button
                  variant="outline-primary"
                  type="submit"
                >{{$t('dic.search')}}</b-button>
              </b-form-group>
            </form>

            <div class="d-flex justify-content-end col-sm-12 col-md-1 pr-sm-0">
              <button
                class="navbar-toggler pt-2 pb-2"
                @click="avSearch = !avSearch"
                type="button"
              >
                <span :class="['icons', { 'icon-magnifier-add': !avSearch, 'icon-magnifier-remove': avSearch}]"></span>
              </button>
            </div>
          </div>

          <gridv2
            ref="grid"
            :fields="fields"
            :name="name"
            :o_nav_visible="true"
            :btnDefault="true"
            :permissiongrid="permissiongrid"
            :btnAdd="true"
            :btnClone="false"
            :btnView="true"
            :btnEdit="true"
            :btnDelete="true"
            :o_col_checkbox="true"
            :o_select_single="false"
            :o_mode_multiEdit="false"
            :data="data"
            :trackBy="'admin_code'"
            @grid:btnClick="OnClick"
          ></gridv2>

        </b-card>
      </b-col>
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
      :ok-disabled="($v.form.$invalid && mode != 'Delete') || mode == 'View'"
      @ok="OkClick"
    >
      <template v-if="mode != 'Delete'">
        <b-form-group
          :label="$t('dic.code')"
          label-for="code"
          :invalid-feedback="$t('dic.codevalid', [4])"
          :state="$v.form.admin_code.required ? !$v.form.admin_code.$invalid : null"
        >
          <b-form-input
            id="code"
            type="text"
            maxlength="50"
            trim
            :disabled="mode == 'Edit'"
            autocomplete="off"
            v-upper
            v-model="form.admin_code"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :label="$t('dic.description')"
          label-for="description"
          :state="$v.form.admin_desc.required ? !$v.form.admin_desc.$invalid : null"
        >
          <b-form-input
            id="admin_desc"
            type="text"
            trim
            :disabled="saveData.length > 1"
            autocomplete="off"
            v-model="form.admin_desc"
          ></b-form-input>
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
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate, GetDateTimeFormat } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

export default {
  i18n: {
    messages: {
      en: { dic: { codevalid: "This is a required field and must have {0} characters." } },
      th: { dic: { codevalid: "จำเป็นต้องมี {0} ตัวอักษร" } }
    },
    sharedMessages: dic
  },
  computed: {
    config () {
      return configMode[this.mode].class;
    }
  },
  mounted () {
    this.Search();

  },
  data () {
    return {
      name: "Administrator",
      breadcrumbs: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Function การทำงาน',
          href: '#',
          active: true
        }
      ],
      permissiongrid: { isAdd: true, isEdit: true, isDelete: true, isExport: true },
      avSearch: false,
      txtSearch: "",
      modal: false,
      mode: "Add",
      errMsg: "",
      MultipleValue: "[Multiple values]",
      status: { lists: status, current: status.filter(v => { return v.value != 'C' }), selected: [status[0]] },
      form: {
        admin_code: null,
        admin_desc: null,
        Edit_userid: this.$localStorage.get("UserID"),
        admin_seq: null,
      },
      data: [],
      saveData: [],
      fields: [
        {
          name: "admin_seq",
          title: "dic.sequence",
          sortField: "admin_seq",
          class: "text-center",
          visible: false
        },
        {
          name: "admin_code",
          title: "dic.code",
          sortField: "admin_code",
          class: "text-center",
          visible: true
        },
        {
          name: "admin_desc",
          title: "dic.description",
          sortField: "admin_desc",
          class: "text-left",
          visible: true
        },

        {
          name: "edit_userdetail",
          title: "dic.updateid",
          sortField: "edit_userid",
          class: "text-left",
          visible: true
        },

        {
          name: "edit_datetime",
          title: "dic.lastupdate",
          sortField: "edit_datetime",
          class: "text-center",
          visible: true,
          callback: value => {
            return value ? GetDateTimeFormat(value, "DDMMYYHHMMSS") : "";
          },
        },
        {
          name: "mode",
          title: "'mode'",
          sortField: "mode",
          class: "text-center",
          visible: false
        },
        {
          name: "dbmode",
          title: "'dbmode'",
          sortField: "dbmode",
          class: "text-center",
          visible: false
        },
      ],

      fields2: [
        {
          name: "admin_seq",
          title: "dic.sequence",
          sortField: "admin_seq",
          class: "text-center",
          visible: false
        },
        {
          name: "wp_seq",
          title: "dic.sequence",
          sortField: "wp_seq",
          class: "text-center",
          visible: false
        },
        {
          name: "wp_code",
          title: "dic.code",
          sortField: "wp_code",
          class: "text-center",
          visible: true
        },
        {
          name: "wp_desc",
          title: "dic.description",
          sortField: "wp_desc",
          class: "text-left",
          visible: true
        },
        {
          name: "wp_grp_desc",
          title: "dic.remark",
          sortField: "wp_grp_desc",
          class: "text-left",
          visible: true
        },

        {
          name: "edit_userdetail",
          title: "dic.updateid",
          sortField: "edit_userid",
          class: "text-left",
          visible: true
        },

        {
          name: "edit_datetime",
          title: "dic.lastupdate",
          sortField: "edit_datetime",
          class: "text-center",
          visible: true,
          callback: value => {
            return value ? GetDateTimeFormat(value, "DDMMYYHHMMSS") : "";
          },
        },
        {
          name: "mode",
          title: "'mode'",
          sortField: "mode",
          class: "text-center",
          visible: false
        },
        {
          name: "dbmode",
          title: "'dbmode'",
          sortField: "dbmode",
          class: "text-center",
          visible: false
        },
      ],

      fields3: [
        {
          name: "wpa_seq",
          title: "dic.sequence",
          sortField: "admin_seq",
          class: "text-center",
          visible: false
        },
        {
          name: "wp_seq",
          title: "dic.sequence",
          sortField: "wp_seq",
          class: "text-center",
          visible: false
        },
        {
          name: "wpa_code",
          title: "dic.code",
          sortField: "wp_code",
          class: "text-center",
          visible: true
        },
        {
          name: "wpa_desc",
          title: "dic.description",
          sortField: "wp_desc",
          class: "text-left",
          visible: true
        },

        {
          name: "edit_userdetail",
          title: "dic.updateid",
          sortField: "edit_userid",
          class: "text-left",
          visible: true
        },

        {
          name: "edit_datetime",
          title: "dic.lastupdate",
          sortField: "edit_datetime",
          class: "text-center",
          visible: true,
          callback: value => {
            return value ? GetDateTimeFormat(value, "DDMMYYHHMMSS") : "";
          },
        },
        {
          name: "mode",
          title: "'mode'",
          sortField: "mode",
          class: "text-center",
          visible: false
        },
        {
          name: "dbmode",
          title: "'dbmode'",
          sortField: "dbmode",
          class: "text-center",
          visible: false
        },
      ],



    }

  },
  methods: {
    Search (e) {
      API.Administrator({
        data: {
          search: this.txtSearch,
          DBMode: this.$localStorage.get("DBMode"),
        },
        callback: res => {
          if (res) {
            this.data = res.administratorLst;

          }

        }
      });
    },

    OnClick (mode, data, evt) {
      console.log('mode', mode);
      console.log('data', data);
      this.mode = mode;
      this.modal = true;
      this.saveData = [];
      if (mode == "Add") {
        ObjResetValue(this.form);
        this.saveData.push(this.form);
      } else if (mode == 'Delete') {
        this.errMsg = '';
        data.forEach((d, index) => {
          this.errMsg = this.errMsg.concat(d.admin_code, ' | ', d.admin_desc, "<br>");
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
              if (this.form.admin_code != d.admin_code) this.form.admin_code = this.MultipleValue;
              if (this.form.admin_desc != d.admin_desc) this.form.admin_desc = this.MultipleValue;
            });
          }

        }
      }
    },
    async OkClick (e) {
      if (this.mode == "Delete") {
        API.Administrator({
          data: {
            id: this.saveData.map(x => x.admin_seq),
            mode: this.mode,
            DBMode: this.$localStorage.get("DBMode"),
          },
          callblack: res => {
            AlertMessage('success');
            this.Search(e);
          }
        });
      } else {
        //this.onSave();
        if (this.saveData) {
          let err = "";
          err = await this.save1();

          if (err != "") {
            AlertMessage(err ? "error" : "success", err);
            this.modal = err != "";
            return;
          }
          AlertMessage('success');
          this.Search(e);


        }

      }
    },

    async onSave () {
      if (this.saveData) {
        let err = "";
        err = await this.save1();

        if (err != "") {
          AlertMessage(err ? "error" : "success", err);
          this.modal = err != "";
          return;
        }
        this.Search(e);


      }


    },

    save1 () {
      return new Promise((resolve, reject) => {
        let promisedEvents = [];
        let err = "";

        if (this.saveData != null) {
          this.saveData.forEach((d, i) => {
            if (this.form.admin_code !== this.MultipleValue) d.admin_code = this.form.admin_code;
            if (this.form.admin_desc !== this.MultipleValue) d.admin_desc = this.form.admin_desc;
            d.mode = this.mode;
            d.dbmode = this.$localStorage.get("DBMode");
            d.Edit_userid = this.$localStorage.get("UserID");
            promisedEvents.push(this.save2(d, i, err));
          });
        }
        resolve(Promise.all(promisedEvents));

      });

    },

    save2 (data, i, err) {
      return new Promise((resolve, reject) => {
        API.Administrator({
          data: data,
          callback: res => {
            console.log(res)
            if (res) {
              var obj = res.administrator;
              if (res._result._status == "F")
                err = err.concat("#", i, " ", obj.admin_code, " | ", obj.admin_desc, " : ", res._result._message, '<br>');

            }


            resolve(err);
          }
        });

      });

    },

  },
  validations: {
    form: {
      admin_code: { required, maxLength: maxLength(50) },
      admin_desc: { required, maxLength: maxLength(100) },
    }
  }

}
</script>