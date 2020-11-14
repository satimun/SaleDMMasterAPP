<template>
  <div class="animated fadeIn">
    <b-row>
      <b-card no-body header="Country - Test Grid" class="w-100 card-accent-info">
        <b-card-body class="p-0">
          <!--search-->
          <div class="navbar navbar-light bg-default">
            <form class="form-search form-inline col-sm-12 col-md-11" @submit="loadData">
              <div class="form-group">
                <label class="mr-1 ml-1">{{ $t('dic.filter') }} :</label>
                <input
                  class="form-control"
                  v-model="search.txtSearch"
                  type="search"
                  :placeholder="$t('dic.search')"
                />
              </div>
              <div class="form-group" v-show="avSearch">
                <table class="multiselection">
                  <tr>
                    <td>
                      <label class="mr-1 ml-1">{{$t('dic.zone')}} :</label>
                    </td>
                    <td>
                      <multiselect
                        v-model="zones.value"
                        :multiple="true"
                        :options="zones.list"
                        label="view"
                        track-by="id"
                      ></multiselect>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="form-group">
                <label></label>
                <button class="btn btn-outline-primary" type="submit">{{ $t('dic.search') }}</button>
              </div>
            </form>
            <div class="d-flex justify-content-end col-sm-12 col-md-1 pr-sm-0">
              <button class="navbar-toggler pt-2 pb-2" @click="avSearch = !avSearch" type="button">
                <span
                  :class="['icons', { 'icon-magnifier-add': !avSearch, 'icon-magnifier-remove': avSearch}]"
                ></span>
              </button>
            </div>
          </div>
          <!--grid-->
          <grid
            ref="grid"
            :o_col_no="true"
            :data="data"
            :fields="fields"
            :name="name"
            @grid:btnClick="onClick"
          ></grid>
        </b-card-body>
      </b-card>
    </b-row>
    <b-modal
      :title="$t('dic.' + name.toLowerCase()) + ' : ' + $t('dic.' + mode.toLowerCase())"
      :header-bg-variant="configMode[mode].class"
      no-close-on-backdrop
      :ok-title="mode == 'View' ? $t('dic.ok') : $t('dic.save')"
      :cancel-title="$t('dic.cancel')"
      v-model="modal"
      centered
      :ok-only="mode == 'View'"
      :ok-variant="configMode[mode].class"
      @ok="okClick"
      :ok-disabled="$v.form.$invalid"
    >
      <b-form-group
        :label="$t('dic.code')"
        label-for="code"
        :invalid-feedback="$t('dic.codevalid')"
        :state="$v.form.code.required ? !$v.form.code.$invalid : null"
      >
        <b-form-input
          id="code"
          type="text"
          v-model="form.code"
          maxlength="2"
          :disabled="mode == 'View' || form.code == 'Multiple values'"
          autocomplete="off"
          required
          trim
          v-upper
        />
      </b-form-group>
      <b-form-group :label="$t('dic.description')" label-for="description">
        <b-form-input
          id="description"
          type="text"
          v-model="form.description"
          :disabled="mode == 'View'"
          autocomplete="off"
          required
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
          :options="zones.list"
          :allow-empty="false"
          label="view"
          track-by="id"
        ></multiselect>
      </b-form-group>
      <!--<b-form-group label="Date" label-for>
        <datepicker format="dd/MM/yyyy" :clear-button="true" :bootstrap-styling="true"></datepicker>
      </b-form-group>-->
      <b-form-group
        :label="$t('dic.status')"
        label-for="status"
        :state="$v.form.status.required ? !$v.form.status.$invalid : null"
      >
        <b-form-select
          id="status"
          :disabled="mode === 'View'"
          v-model="form.status"
          :options="status"
          required
        >
          <option
            value="Multiple values"
            :class="{'d-none': multiData.length == 0}"
            disabled
          >Multiple values</option>
        </b-form-select>
      </b-form-group>
    </b-modal>
    <b-row>
      <button @click="exportPDF">Export PDF Test</button>
      <button @click="exportExcel">Export Excel Test</button>
    </b-row>
  </div>
</template>

<script>
import { required, minLength, integer } from "vuelidate/lib/validators";
import {
  GetObjVal,
  AlertMessage,
  ConfirmDialog,
  SetObjVal,
  GetCodeDes,
  GetObjArr,
  GetArrObj,
  ObjCopy,
  GetDateView
} from "@/shared/utils";
import dic from '@/shared/dic'
import { status, configMode } from "@/shared/define";
import { API } from "@/shared/core";
import jsPDF from "jspdf";
import ExcelJS from "exceljs";

const multivalue = { id: 0, view: "Multiple values" };

export default {
  i18n: {
    messages: {
      en: { dic: { codevalid: 'This is a required field and must be at least 2 characters.' } },
      th: { dic: { codevalid: 'จำเป็นต้องมี 2 ตัวอักษร' } }
    },
    sharedMessages: dic
  },
  computed: {
  },
  data: function () {
    return {
      name: "Country",
      avSearch: false,
      mode: "Add",
      modal: false,
      configMode: configMode,
      status: status,
      zones: {
        list: [],
        value: null
      },
      search: {
        txtSearch: null,
        zone_ID: null,
        status: ["A", "I"]
      },
      form: {
        id: null,
        code: null,
        description: null,
        zone: null,
        status: null
      },
      multiData: [],
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
          visible: true,
          filter: false
        },
        {
          name: "zone.view",
          title: "dic.zone",
          sortField: "zone.view",
          visible: true
        },
        {
          name: "status",
          title: "dic.status",
          sortField: "status",
          class: "text-center",
          callback: (v) => {
            let tmp = status.find((d) => { return d.value == v });
            return tmp ? tmp.text : '';
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
      data: []
    };
  },
  mounted() {
    // API.ZoneSearch({
    //   data: { Status: ["A"] },
    //   callblack: res => {
    //     res.forEach(x => {
    //       x.view = GetCodeDes(x);
    //     });
    //     this.zones.list = res;
    //   }
    // });
    // this.loadData();
    // this.$i18n.locale = 'en';
  },
  methods: {
    onClick(mode, data, evt) {
      let self = this;
      self.multiData = [];
      for (let i = self.zones.list.length - 1; i >= 0; i--) {
        if (self.zones.list[i].id == 0) {
          self.zones.list.splice(i, 1);
          break;
        }
      }
      if (mode === "Delete") {
        let tmp = "";
        data.forEach(r => {
          self.fields.forEach((f, i) => {
            if (i < 3) {
              tmp += " | " + GetObjVal(r, f.name);
            }
          });
          tmp += "\n";
        });
        ConfirmDialog(this.$i18n.messages[this.$i18n.locale]['dic']['msgdel'], tmp, true).then(ok => {
          if (ok) {
            API[self.name + "Delete"]({
              data: { ID: data.map(x => x.id) },
              callblack: res => {
                AlertMessage('success');
                self.loadData(evt);
              }
            });
          }
        });
      } else {
        this.mode = mode;
        this.modal = true;
        if (mode === "Add") {
          this.form.id = null;
          this.form.code = null;
          this.form.zone = null;
          this.form.description = null;
          this.form.status = "A";
        } else {
          data.forEach(d => {
            self.form.id = mode === "Clone" ? null : d.id;
            self.form.code = d.code;
            self.form.zone = GetArrObj(
              self.zones.list.filter(item => {
                return item.id === d.zone.id;
              })
            );
            self.form.description = d.description;
            self.form.status = d.status;
          });

          if (data.length > 1) {
            self.multiData = ObjCopy(data);
            data.forEach(d => {
              if (self.form.code !== d.code) self.form.code = "Multiple values";
              if (self.form.zone.id !== d.zone.id) self.form.zone = multivalue;
              if (self.form.description !== d.description)
                self.form.description = "Multiple values";
              if (self.form.status !== d.status)
                self.form.status = "Multiple values";
            });
            if (self.form.zone.id == 0) {
              self.zones.list.push(multivalue);
            }
          }
        }
      }
    },
    okClick(e) {
      let self = this;
      if (this.mode === "View") {
        return;
      }

      if (this.multiData.length) {
        this.multiData.forEach(d => {
          if (self.form.description !== "Multiple values")
            d.description = self.form.description;
          if (self.form.zone.id !== 0) d.zone = GetArrObj(self.form.zone);
          if (self.form.status !== "Multiple values")
            d.status = self.form.status;
        });
      }

      let err = "";
      API[this.name + "Save"]({
        data: this.multiData.length ? this.multiData : GetObjArr(this.form),
        callblack: res => {
          res.forEach((d, i) => {
            if (d._result._status === "F")
              err += "#" + (i + 1) + " " + d.code + " | " + d.description + " : " + d._result._message + "\n";
          });
          AlertMessage(err ? "error" : "success", err);
          if (err != "") {
            self.modal = err != "";
            return;
          }
          self.loadData();
        }
      });
    },
    loadData(e) {
      if (e) e.preventDefault();
      if (this.avSearch) {
        this.search.Zone_ID = GetObjArr(this.zones.value, "id");
      } else {
        this.search.Zone_ID = null;
      }

      API[this.name + "Search"]({
        data: this.search,
        callblack: res => {
          res.forEach(d => {
            SetObjVal(d.zone, "view", GetCodeDes(d.zone));
            d.lastupdate = d.updateBy + " : " + GetDateView(d.timestamp);
          });
          this.data = res;
          //this.$refs.grid.refresh();
        }
      });
    },
    exportPDF() {
      let doc = new jsPDF();
      let contentHtml = "<h1>test header</h1>";
      doc.fromHTML(contentHtml, 15, 15, {
        width: 170
      });
      doc.save("sample.pdf");
    },
    exportExcel() {
      /*let workbook = new Excel.Workbook();
      workbook.creator = "Me";
      workbook.lastModifiedBy = "Her";
      workbook.created = new Date(1985, 8, 30);
      workbook.modified = new Date();
      workbook.lastPrinted = new Date(2016, 9, 27);

      let sheet = workbook.addWorksheet('My Sheet');

      var buff = workbook.xlsx.writeBuffer().then(function (data) {
        var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
        //saveAs(blob, "publications.xlsx");
      });*/
      var workbook = new ExcelJS.Workbook();

      workbook.creator = "Paul Leger";
      workbook.lastModifiedBy = "Paul Leger";
      workbook.created = new Date();
      workbook.modified = new Date();
      workbook.lastPrinted = new Date();

      var worksheet = workbook.addWorksheet("Publications");
      worksheet.views = [{ state: "frozen", xSplit: 0, ySplit: 1 }];

      worksheet.autoFilter = {
        from: "A1",
        to: "M1"
      };

      worksheet.columns = [
        { header: "Index", key: "Index", width: 15 },
        {
          header: "Title",
          key: "title",
          width: 25,
          style: { alignment: { wrapText: true } }
        },
        {
          header: "Authors",
          key: "authors",
          width: 20,
          style: { alignment: { wrapText: true } }
        },
        {
          header: "Journal/Conference",
          key: "jc",
          width: 25,
          style: { alignment: { wrapText: true } }
        },
        {
          header: "Type",
          key: "type",
          width: 12,
          style: { alignment: { wrapText: true } }
        },
        { header: "Year", key: "year", width: 12, style: { numFmt: "0000" } },
        { header: "Month", key: "month", width: 12 },
        { header: "volume", key: "volume", width: 12 },
        { header: "number", key: "number", width: 12 },
        { header: "Pages", key: "pages", width: 12 },
        {
          header: "Location",
          key: "location",
          width: 20,
          style: { alignment: { wrapText: true } }
        },
        {
          header: "doi",
          key: "doi",
          width: 22,
          style: { alignment: { wrapText: true } }
        },
        {
          header: "affiliation",
          key: "affiliation",
          width: 20,
          style: { alignment: { wrapText: true } }
        }
      ];

      var firstRow = worksheet.getRow(1);
      firstRow.font = {
        name: "New Times Roman",
        family: 4,
        size: 10,
        bold: true,
        color: { argb: "80EF1C1C" }
      };
      firstRow.alignment = { vertical: "middle", horizontal: "center" };
      firstRow.height = 20;

      /*csv.shift();
      worksheet.addRows(csv);*/

      var buff = workbook.xlsx.writeBuffer().then(function (csvContent) {
        /*var blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        //saveAs(blob, "publications.xlsx");*/

        var D = document;
        var a = D.createElement('a');
        var strMimeType = 'application/octet-stream;charset=utf-8'; //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        var rawFile;
        var fileName = "Simple.xlsx";

        //html5 A[download]
        if ("download" in a) {
          var blob = new Blob(["", csvContent], { type: strMimeType });
          rawFile = URL.createObjectURL(blob);
          a.setAttribute("download", fileName);
        } else {
          rawFile =
            "data:" + strMimeType + "," + encodeURIComponent(csvContent);
          a.setAttribute("target", "_blank");
        }
        a.href = rawFile;
        a.setAttribute("style", "display:none;");
        D.body.appendChild(a);
        setTimeout(function () {
          if (a.click) {
            a.click();
            // Workaround for Safari 5
          } else if (document.createEvent) {
            var eventObj = document.createEvent("MouseEvents");
            eventObj.initEvent("click", true, true);
            a.dispatchEvent(eventObj);
          }
          D.body.removeChild(a);
        }, 100);
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
