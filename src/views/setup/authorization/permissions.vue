<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col>
        <b-card
          no-body
          class="w-100 card-accent-info"
        >
          <pageheader
            :title="$t('dic.permission')"
            :breadcrumbs="breadcrumbs"
            :help="$t('dic.permission_help')"
          > </pageheader>

          <div v-show="hasPermission">

            <gridv2
              ref="grid"
              :fields="fields"
              :name="'administrator'"
              :o_nav_visible="true"
              :btnDefault="true"
              :permissiongrid="permissiongrid"
              :btnAdd="superadmin"
              :btnClone="false"
              :btnView="false"
              :btnEdit="superadmin"
              :btnDelete="superadmin"
              :o_col_checkbox="superadmin"
              :o_select_single="false"
              :o_mode_multiEdit="false"
              :data="data"
              :trackBy="'admin_code'"
              @grid:btnClick="OnClick"
              @grid:rowClicked="LoadData2"
              :title="$t('dic.administrator') + ' :: ' + administrator_label"
            ></gridv2>

            <br />

            <gridv2
              ref="grid"
              :fields="fields2"
              :name="'workprocess'"
              :o_nav_visible="true"
              :btnDefault="true"
              :permissiongrid="permissiongrid"
              :btnAdd="superadmin"
              :btnClone="false"
              :btnView="false"
              :btnEdit="superadmin"
              :btnDelete="superadmin"
              :o_col_checkbox="superadmin"
              :o_select_single="false"
              :o_mode_multiEdit="false"
              :data="data2"
              :trackBy="'wp_code'"
              @grid:btnClick="OnClick"
              @grid:rowClicked="LoadData3"
              :o_grid_visible="form.admin_seq > 0 "
              :title="$t('dic.workprocess')  + ' :: ' + workprocess_label"
            ></gridv2>

            <br />

            <gridv2
              ref="grid"
              :fields="fields3"
              :name="'workprocessadmin'"
              :o_nav_visible="true"
              :btnDefault="true"
              :permissiongrid="permissiongrid"
              :btnAdd="true"
              :btnClone="false"
              :btnView="false"
              :btnEdit="false"
              :btnDelete="true"
              :o_col_checkbox="true"
              :o_select_single="false"
              :o_mode_multiEdit="false"
              :data="data3"
              :trackBy="'wpa_code'"
              @grid:btnClick="OnClick"
              :o_grid_visible="form2.wp_seq > 0 "
              :title="$t('dic.workprocessadmin')  + ' :: ' + workprocessadmin_label"
            ></gridv2>

          </div>

        </b-card>
      </b-col>
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
      :ok-disabled="gridname == 'administrator' ? $v.form.$invalid : gridname == 'workprocess' ? $v.form2.$invalid : $v.form3.$invalid && mode != 'Delete'"
      @ok="OkClick"
    >
      <template v-if="mode != 'Delete'">
        <template v-if="gridname == 'administrator'">
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
        <template v-if="gridname == 'workprocess'">
          <input
            type="hidden"
            name="admin_seq"
            class="form-control"
            :value="form2.admin_seq"
          >
          <b-form-group
            :label="$t('dic.administrator')"
            label-for="administratorform2"
          >
            <b-form-input
              id="administratorform2"
              type="text"
              disabled
              :value="administrator_label"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            :label="$t('dic.code')"
            label-for="wp_code"
            :invalid-feedback="$t('dic.codevalid', [4])"
            :state="$v.form2.wp_code.required ? !$v.form2.wp_code.$invalid : null"
          >
            <b-form-input
              id="wp_code"
              type="text"
              maxlength="50"
              trim
              :disabled="mode == 'Edit'"
              autocomplete="off"
              v-upper
              v-model="form2.wp_code"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            :label="$t('dic.description')"
            label-for="wp_desc"
            :state="$v.form2.wp_desc.required ? !$v.form2.wp_desc.$invalid : null"
          >
            <b-form-input
              id="wp_desc"
              type="text"
              trim
              :disabled="saveData.length > 1"
              autocomplete="off"
              v-model="form2.wp_desc"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            :label="$t('dic.remark')"
            label-for="wp_grp_desc"
            :state="$v.form2.wp_grp_desc.required ? !$v.form2.wp_grp_desc.$invalid : null"
          >
            <b-form-input
              id="wp_grp_desc"
              type="text"
              trim
              :disabled="saveData.length > 1"
              autocomplete="off"
              v-model="form2.wp_grp_desc"
            ></b-form-input>
          </b-form-group>

        </template>
        <template v-if="gridname == 'workprocessadmin'">
          <input
            type="hidden"
            name="wp_seq"
            class="form-control"
            :value="form3.wp_seq"
          >
          <b-form-group
            :label="$t('dic.administrator')"
            label-for="administratorform3"
          >
            <b-form-input
              id="administratorform3"
              type="text"
              disabled
              :value="administrator_label"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            :label="$t('dic.workprocess')"
            label-for="workprocessform3"
          >
            <b-form-input
              id="workprocessform3"
              type="text"
              disabled
              :value="workprocess_label"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            :label="$t('dic.code')"
            label-for="wpa_code"
            :invalid-feedback="$t('dic.codevalid', [4])"
            :state="$v.form3.wpa_code.required ? !$v.form3.wpa_code.$invalid : null"
          >
            <b-form-input
              id="wpa_code"
              type="text"
              maxlength="50"
              trim
              :disabled="mode == 'Edit'"
              autocomplete="off"
              v-upper
              v-model="form3.wpa_code"
              @input="getUser()"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            :label="$t('dic.description')"
            label-for="wpa_desc"
            :state="$v.form3.wpa_desc.required ? !$v.form3.wpa_desc.$invalid : null"
          >
            <b-form-input
              id="wpa_desc"
              type="text"
              trim
              :disabled="true"
              autocomplete="off"
              v-model="form3.wpa_desc"
            ></b-form-input>
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
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetIdDes, GetCodeDes, GetObjArr, GetObjVal, GetArrObj, GetLastUpdate, GetDateTimeFormat } from "@/shared/utils";
import { status, configMode, multivalue, yes_no } from "@/shared/define";
import { required, maxLength, integer } from "vuelidate/lib/validators";
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
    },
    administrator_label () {
      return GetObjVal(this.form, "admin_desc", "");
    },
    workprocess_label () {
      return GetObjVal(this.form2, "wp_desc", "");
    },
    workprocessadmin_label () {
      return GetObjVal(this.form3, "wpa_desc", "");

    },

    isAdmin () {
      return this.superadmin;
    }
  },
  mounted () {
    this.checkPermission();
    this.isSuperAdmin();

    this.LoadData();

  },

  data () {
    return {
      name: "Permissions",
      breadcrumbs: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Permissions',
          href: '#',
          active: true
        }
      ],
      hasPermission: false,
      superadmin: false,
      permissiongrid: { isAdd: true, isEdit: true, isDelete: true, isExport: true },
      gridname: "administrator",
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
      form2: {
        wp_code: null,
        wp_desc: null,
        wp_grp_desc: null,
        Edit_userid: this.$localStorage.get("UserID"),
        wp_seq: null,
        admin_seq: null,
      },
      form3: {
        wpa_code: null,
        wpa_desc: null,
        Edit_userid: this.$localStorage.get("UserID"),
        wpa_seq: null,
        wp_seq: null,
      },
      data: [],
      data2: [],
      data3: [],
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
    async LoadData (e) {
      ObjResetValue(this.form);
      ObjResetValue(this.form2);
      ObjResetValue(this.form3);
      this.data = [];
      this.data2 = [];
      this.data3 = [];
      this.data = await this.getAdministrator();

    },

    getAdministrator () {
      return new Promise((resolve, reject) => {
        API.Administrator({
          data: {
            search: this.txtSearch,
            DBMode: this.$localStorage.get("DBMode"),
          },
          callback: res => {
            var obj = res != null ? res.administratorLst : null;
            resolve(obj);

          }
        });

      });

    },

    async LoadData2 (row) {
      ObjResetValue(this.form2);
      ObjResetValue(this.form3);
      this.data2 = [];
      this.data3 = [];
      this.form = ObjCopy(row);
      this.data2 = await this.getWorkprocess(row.admin_seq);


    },

    getWorkprocess (admin_seq) {
      return new Promise((resolve, reject) => {
        API.Workprocess({
          data: {
            admin_seq: admin_seq,
            DBMode: this.$localStorage.get("DBMode"),
            Mode: "getall"
          },
          callback: res => {

            var obj = res != null ? res.workprocessList : null;
            resolve(obj);

          }
        });

      });

    },

    async LoadData3 (row) {
      this.data3 = [];
      this.form2 = ObjCopy(row);

      this.data3 = await this.getWorkprocessAdmin(row.wp_seq);



    },

    getWorkprocessAdmin (wp_seq) {
      return new Promise((resolve, reject) => {
        API.WorkprocessAdmin({
          data: {
            wp_seq: wp_seq,
            DBMode: this.$localStorage.get("DBMode"),
            Mode: "getall"
          },
          callback: res => {
            var obj = res != null ? res.workprocessAdminLst : null;
            resolve(obj);


          }
        });

      });

    },

    OnClick (mode, data, evt, name) {
      /*console.log('mode', mode);
      console.log('data', data);
      console.log('evt', evt);
      console.log('name', name);*/
      this.gridname = name != null ? name : evt;
      this.mode = mode;
      this.modal = true;
      this.saveData = [];

      switch (this.gridname) {
        case "administrator":
          this.doAdministrator(mode, data, evt);
          break;

        case "workprocess":
          this.doWorkProcess(mode, data, evt);
          break;

        case "workprocessadmin":
          this.doWorkProcessAddmin(mode, data, evt);
          break;

        default:
          break;
      }

    },

    doAdministrator (mode, data, evt) {
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
        this.form = ObjCopy(this.saveData[this.saveData.length - 1]);
        if (this.saveData.length >= 1) {
          //reset id
          this.saveData[0].id = mode == 'Clone' ? null : this.saveData[0].id;

          if (this.saveData.length > 1) {
            this.saveData.forEach(d => {
              if (this.form.admin_code != d.admin_code) this.form.admin_code = this.MultipleValue;
              if (this.form.admin_desc != d.admin_desc) this.form.admin_desc = this.MultipleValue;
            });
          }

        }
      }

    },

    doWorkProcess (mode, data, evt) {
      if (mode == "Add") {
        ObjResetValue(this.form2);
        this.saveData.push(this.form2);
      } else if (mode == 'Delete') {
        this.errMsg = '';
        data.forEach((d, index) => {
          this.errMsg = this.errMsg.concat(d.wp_code, ' | ', d.wp_desc, "<br>");
        });
        this.saveData = data;
      } else {
        this.saveData = ObjCopy(data);
        this.form2 = ObjCopy(this.saveData[this.saveData.length - 1]);

        if (this.saveData.length >= 1) {
          //reset id
          this.saveData[0].id = mode == 'Clone' ? null : this.saveData[0].id;

          if (this.saveData.length > 1) {
            this.saveData.forEach(d => {
              if (this.form2.wp_code != d.wp_code) this.form2.wp_code = this.MultipleValue;
              if (this.form2.wp_desc != d.wp_desc) this.form2.wp_desc = this.MultipleValue;
              if (this.form2.wp_grp_desc != d.wp_grp_desc) this.form2.wp_grp_desc = this.MultipleValue;
            });
          }

        }
      }
      console.log('this.form', this.form)
      this.form2.admin_seq = this.form.admin_seq;

    },

    doWorkProcessAddmin (mode, data, evt) {
      //CAN-SETUP
      if (!this.superadmin && this.form.admin_code == "CAN-SETUP") {
        AlertMessage("error", "ไม่มีสิทธิใช้งาน");
        this.modal = false;
        return;

      }

      if (mode == "Add") {
        ObjResetValue(this.form3);
        this.saveData.push(this.form3);
      } else if (mode == 'Delete') {
        this.errMsg = '';
        data.forEach((d, index) => {
          this.errMsg = this.errMsg.concat(d.wpa_code, ' | ', d.wpa_desc, "<br>");
        });
        this.saveData = data;
      } else {
        this.saveData = ObjCopy(data);
        this.form3 = ObjCopy(this.saveData[this.saveData.length - 1]);

        if (this.saveData.length >= 1) {
          //reset id
          this.saveData[0].id = mode == 'Clone' ? null : this.saveData[0].id;

          if (this.saveData.length > 1) {
            this.saveData.forEach(d => {
              if (this.form3.wpa_code != d.wpa_code) this.form3.wpa_code = this.MultipleValue;
              if (this.form3.wpa_desc != d.wpa_desc) this.form3.wpa_desc = this.MultipleValue;
              if (this.form3.wp_seq != d.wp_seq) this.form3.wp_seq = this.MultipleValue;
            });
          }

        }
      }

      this.form3.wp_seq = this.form2.wp_seq;

    },

    OkClick (e) {
      switch (this.gridname) {
        case "administrator":
          this.saveAdministrator(e);
          break;

        case "workprocess":
          this.saveWorkProcess(e);
          break;

        case "workprocessadmin":
          this.saveWorkProcessAddmin(e);
          break;

        default:
          break;
      }

    },

    async saveAdministrator (e) {
      if (this.mode == "Delete") {
        var err = await this.deleteAdministrator();
        AlertMessage(err ? "error" : "success", err);
        //this.LoadData(e);
        this.data = await this.getAdministrator();

      } else {
        //this.onSave();
        if (this.saveData) {
          let err = "";
          err = await this.saveAdministrator1();

          if (err != "") {
            AlertMessage(err ? "error" : "success", err);
            this.modal = err != "";
            return;
          }
          AlertMessage('success');
          //this.LoadData(e);
          this.data = await this.getAdministrator();


        }

      }

    },



    async saveWorkProcess (e) {
      if (this.mode == "Delete") {
        var err = await this.deleteWorkProcess();
        AlertMessage(err ? "error" : "success", err);
        //this.LoadData2(e);
        this.data2 = await this.getWorkprocess(this.form.admin_seq);

      } else {
        //this.onSave();
        if (this.saveData) {
          let err = "";
          err = await this.saveWorkprocess1();

          if (err != "") {
            AlertMessage(err ? "error" : "success", err);
            this.modal = err != "";
            return;
          }
          AlertMessage('success');
          //this.LoadData2(e);
          this.data2 = await this.getWorkprocess(this.form.admin_seq);


        }

      }

    },



    async saveWorkProcessAddmin (e) {
      if (this.mode == "Delete") {
        var err = await this.deleteWorkProcessAdmin();
        AlertMessage(err ? "error" : "success", err);
        //this.LoadData3(e);
        this.data3 = await this.getWorkprocessAdmin(this.form2.wp_seq);

      } else {

        if (this.saveData) {
          let err = "";
          err = await this.saveWorkprocessAdmin1();


          if (err != "") {
            AlertMessage(err ? "error" : "success", err);
            this.modal = err != "";
            return;
          }
          AlertMessage('success');
          //this.LoadData3(e);
          this.data3 = await this.getWorkprocessAdmin(this.form2.wp_seq);



        }

      }

    },

    //-----------Delete --------------
    deleteAdministrator () {
      return new Promise((resolve, reject) => {
        API.Administrator({
          data: {
            id: this.saveData.map(x => x.admin_seq),
            mode: this.mode,
            DBMode: this.$localStorage.get("DBMode"),
          },
          callblack: res => {
            let err = res != null && res._result != null ? res._result._message : null;
            resolve(err);

          }
        });

      });

    },

    deleteWorkProcess () {
      return new Promise((resolve, reject) => {
        API.Workprocess({
          data: {
            id: this.saveData.map(x => x.wp_seq),
            mode: this.mode,
            DBMode: this.$localStorage.get("DBMode"),
          },
          callblack: res => {
            let err = res != null && res._result != null ? res._result._message : null;
            resolve(err);

          }
        });

      });

    },

    deleteWorkProcessAdmin () {
      return new Promise((resolve, reject) => {
        API.WorkprocessAdmin({
          data: {
            id: this.saveData.map(x => x.wpa_seq),
            mode: this.mode,
            DBMode: this.$localStorage.get("DBMode"),
          },
          callblack: res => {
            let err = res != null && res._result != null ? res._result._message : null;
            resolve(err);

          }
        });

      });

    },


    //------- Save Administrator --------------
    saveAdministrator1 () {
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
            promisedEvents.push(this.saveAdministrator2(d, i, err));
          });
        }
        resolve(Promise.all(promisedEvents));

      });

    },

    saveAdministrator2 (data, i, err) {
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

    //------- Save Workprocess --------------
    saveWorkprocess1 () {
      return new Promise((resolve, reject) => {
        let promisedEvents = [];
        let err = "";

        if (this.saveData != null) {
          this.saveData.forEach((d, i) => {
            if (this.form2.wp_code !== this.MultipleValue) d.wp_code = this.form2.wp_code;
            if (this.form2.wp_desc !== this.MultipleValue) d.wp_desc = this.form2.wp_desc;
            if (this.form2.wp_grp_desc !== this.MultipleValue) d.wp_grp_desc = this.form2.wp_grp_desc;
            d.mode = this.mode;
            d.dbmode = this.$localStorage.get("DBMode");
            d.Edit_userid = this.$localStorage.get("UserID");
            promisedEvents.push(this.saveWorkprocess2(d, i, err));
          });
        }
        resolve(Promise.all(promisedEvents));

      });

    },

    saveWorkprocess2 (data, i, err) {
      return new Promise((resolve, reject) => {
        API.Workprocess({
          data: data,
          callback: res => {
            console.log(res)
            if (res) {
              var obj = res.workprocess;
              if (res._result._status == "F")
                err = err.concat("#", i, " ", obj.wp_code, " | ", obj.wp_desc, " : ", res._result._message, '<br>');

            }


            resolve(err);
          }
        });

      });

    },

    //------- Save WorkprocessAdmin --------------
    saveWorkprocessAdmin1 () {
      return new Promise((resolve, reject) => {
        let promisedEvents = [];
        let err = "";

        if (this.saveData != null) {
          this.saveData.forEach((d, i) => {
            if (this.form3.wpa_code !== this.MultipleValue) d.wpa_code = this.form3.wpa_code;
            if (this.form3.wpa_desc !== this.MultipleValue) d.wpa_desc = this.form3.wpa_desc;
            if (this.form3.wp_seq !== this.MultipleValue) d.wp_seq = this.form3.wp_seq;
            d.mode = this.mode;
            d.dbmode = this.$localStorage.get("DBMode");
            d.Edit_userid = this.$localStorage.get("UserID");
            promisedEvents.push(this.saveWorkprocessAdmin2(d, i, err));
          });
        }
        resolve(Promise.all(promisedEvents));

      });

    },

    saveWorkprocessAdmin2 (data, i, err) {
      return new Promise((resolve, reject) => {
        API.WorkprocessAdmin({
          data: data,
          callback: res => {
            console.log(res)
            if (res) {
              var obj = res.workprocess;
              if (res._result._status == "F")
                err = err.concat("#", i, " ", obj.wp_code, " | ", obj.wp_desc, " : ", res._result._message, '<br>');

            }


            resolve(err);
          }
        });

      });

    },

    //-------Get User -----
    getUser () {
      if (this.form3.wpa_code.trim().length == 0) {
        this.form3.wpa_desc = "";

      } else {
        API.zUser({
          data: {
            USER_ID: this.form3.wpa_code,
            DBMode: this.$localStorage.get("DBMode"),
            Mode: "view"
          },
          callback: res => {
            if (res) {
              var obj = res.user;
              this.form3.wpa_desc = obj != null ? obj.detail : "";

            }

          }
        });

      }


    },

    isSuperAdmin () {
      API.SuperAdmin
        ({
          data: {
            usercode: this.$localStorage.get("UserID"),
            username: this.$localStorage.get("UserID"),
            DBMode: this.$localStorage.get("DBMode"),
          },
          callback: res => {
            if (res) {
              this.superadmin = (res._result._status == "F") ? false : true;

            } else {
              this.superadmin = false;
            }

            this.fields = this.fields.map(x => (x.name == "admin_code") ? x.visible = this.superadmin : x)
            this.fields = this.fields.map(x => (x.name == "edit_userdetail") ? x.visible = this.superadmin : x)
            this.fields = this.fields.map(x => (x.name == "edit_datetime") ? x.visible = this.superadmin : x)
            this.fields2 = this.fields2.map(x => (x.name == "wp_code") ? x.visible = this.superadmin : x)
            this.fields2 = this.fields2.map(x => (x.name == "edit_userdetail") ? x.visible = this.superadmin : x)
            this.fields2 = this.fields2.map(x => (x.name == "edit_datetime") ? x.visible = this.superadmin : x)

          }
        });
    },

    checkPermission () {
      API.zUser
        ({
          data: {
            USER_ID: this.$localStorage.get("UserID"),
            DBMode: this.$localStorage.get("DBMode"),
            Mode: "permission",
            admin_code: "CAN-SETUP",
            wp_code: "CAN-SETUP-USERAMIN",
          },
          callback: res => {
            if (res) {
              this.hasPermission = res.permission;
              if (!res.permission) {
                AlertMessage("error", "ไม่มีสิทธิ์ใช้งาน");
                window.location = '/';
              }

            } else {
              AlertMessage("error", "ไม่มีสิทธิ์ใช้งาน");
              window.location = '/';
            }

          }
        });

    },



  },

  validations: {
    form: {
      admin_code: { required, maxLength: maxLength(50) },
      admin_desc: { required, maxLength: maxLength(100) },
    },
    form2: {
      wp_code: { required, maxLength: maxLength(50) },
      wp_desc: { required, maxLength: maxLength(100) },
      wp_grp_desc: { required, maxLength: maxLength(100) },
      admin_seq: { required },
    },
    form3: {
      wpa_code: { required, integer, maxLength: maxLength(50) },
      wpa_desc: { required, maxLength: maxLength(100) },
      wp_seq: { required },
    }
  }

}
</script>