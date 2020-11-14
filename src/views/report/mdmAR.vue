<template>
  <!-- <WidgetsBrand/> -->

  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              <i class="fa fa-bar-chart" aria-hidden="true"></i> สรุปงบลูกหนี้ภาพรวม
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <div class="dashboard">
                  <div class="all-card">
                    <div class="row">
                      <div class="col-lg-4 col-md-12">
                        <div class="card">
                          <div class="card-body border-left-1">
                            <div class="row">
                              <div class="col">
                                <p class="card-title text-title"><h3>ลูกหนี้รวม (ลบ.)</h3></p>
                                <h2
                                  class="card-text text-amount"
                                >{{dataDashboardARAllObj.balance_amt| number(2)}}</h2>
                              </div>
                              <div class="col-auto">
                                <div class="icon-shape icon-area">                                                         
                                  <i class="fa fa-money" aria-hidden="true"></i> 
                                </div>
                              </div>
                            </div>
                            <div class="progress-group">
                              <div class="progress-group-header">                                
                                &nbsp;
                              </div>
                              <div class="progress-group-bars">                                                                
                              </div>
                            </div>                           
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-4 col-md-12">
                        <div class="card">
                          <div class="card-body border-left-2">
                            <div class="row">
                              <div class="col">
                                <p class="card-title text-title"><h2>ไม่ครบกำหนด (ลบ.)</h2></p>
                                <h2
                                  class="card-text text-amount"
                                >{{dataDashboardARAllObj.balance_amt_indue| number(2)}}</h2>
                              </div>
                              <div class="col-auto">
                                <div class="icon-shape icon-pie">
                                  <i class="fa fa-chain" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                            <div class="progress-group">
                              <div class="progress-group-header">                                
                                <span class="title">%</span>
                                <span
                                  class="ml-auto font-weight-bold"
                                >{{dataDashboardARAllObj.balance_amt_indue_percen| number(2)}}%</span>
                              </div>
                              <div class="progress-group-bars">
                                <b-progress
                                  height="{}"
                                  class="progress-xs"
                                  :value="this.dataDashboardARAllObj.balance_amt_indue_percen"
                                  variant="success"
                                ></b-progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12">
                        <div class="card">
                          <div class="card-body border-left-3">
                            <div class="row">
                              <div class="col">
                                <p class="card-title text-title"><h2>เกินกำหนด (ลบ.)</h2></p>
                                <h2
                                  class="card-text text-amount"
                                >{{dataDashboardARAllObj.balance_amt_outdue| number(2)}}</h2>
                              </div>
                              <div class="col-auto">
                                <div class="icon-shape icon-pie">
                                  <i class="fa fa-chain-broken" aria-hidden="true"></i>
                                </div>
                              </div>
                            </div>
                            <div class="progress-group">
                              <div class="progress-group-header">                                
                                <span class="title">%</span>
                                <span
                                  class="ml-auto font-weight-bold"
                                >{{dataDashboardARAllObj.balance_amt_outdue_percen| number(2)}}%</span>
                              </div>
                              <div class="progress-group-bars">
                                <b-progress
                                  height="{}"
                                  class="progress-xs"
                                  :value="this.dataDashboardARAllObj.balance_amt_outdue_percen"
                                  variant="success"
                                ></b-progress>
                              </div>
                            </div>                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-panels">
                  <section id="rauchbier" class="tab-panel">
                    <b-row>
                      <b-col md="6">
                        <b-card style="border: 0px solid;">
                          <div
                            class="knob_data"
                            style="background-image: url('img/brand/Flagex.png'); background-repeat: no-repeat;
                              background-size: contain; background-position: left;  color:#1A5276; text-align: center; "
                          >
                            ลูกหนี้ต่างประเทศ
                            <span class="txt_smaller"></span>
                          </div>
                          <b-row>
                            <b-col sm="4">
                              <div class="callout callout-info">
                                <small class="text-muted">ลูกหนี้คงเหลือ (ลบ.)</small>
                                <br />
                                <strong class="h2">{{dataDashboardAROvsObj.balance_amt| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}">
                                  <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                                </div>
                              </div>
                            </b-col>

                            <b-col sm="4">
                              <div class="callout callout-successdanger">
                                <small class="text-muted">ยังไม่ครบกำหนด (ลบ.)</small>
                                <br />
                                <strong class="h2">{{dataDashboardAROvsObj.balance_amt_indue| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">                                  
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{dataDashboardAROvsObj.balance_amt_indue_percen| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDashboardAROvsObj.balance_amt_indue_percen"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>
                            <b-col sm="4">
                              <div class="callout callout-warning">
                                <small class="text-muted">เกินกำหนด (ลบ.)</small>
                                <br />
                                <strong class="h2">{{dataDashboardAROvsObj.balance_amt_outdue| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">                                  
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{dataDashboardAROvsObj.balance_amt_outdue_percen| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDashboardAROvsObj.balance_amt_outdue_percen"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-card>
                      </b-col>

                      <b-col md="6">
                        <b-card style="border: 0px solid;">
                          <div
                            class="knob_data"
                            style="background-image: url('img/brand/thai2.png'); background-repeat: no-repeat;
                              background-size: contain; background-position: left;  color:#641E16; text-align: center;"
                          >
                            ลูกหนี้ในประเทศ
                            <span class="txt_smaller"></span>
                          </div>

                          <b-row>
                            <b-col sm="4">
                              <div class="callout callout-info">
                                <small class="text-muted">ลูกหนี้คงเหลือ (ลบ.)</small>
                                <br />
                                <strong class="h2">{{dataDashboardARDomObj.balance_amt| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}">
                                  <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                                </div>
                              </div>
                            </b-col>

                            <b-col sm="4">
                              <div class="callout callout-danger">
                                <small class="text-muted">ยังไม่ครบกำหนด (ลบ.)</small>
                                <br />
                                <strong class="h2">{{dataDashboardARDomObj.balance_amt_indue| number(2)}}</strong>
                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">                                  
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{dataDashboardARDomObj.balance_amt_indue_percen| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDashboardARDomObj.balance_amt_indue_percen"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>
                            <b-col sm="4">
                              <div class="callout callout-warning">
                                <small class="text-muted">เกินกำหนด (ลบ.)</small>
                                <br />
                                <strong class="h2">{{dataDashboardARDomObj.balance_amt_outdue| number(2)}}</strong>

                                <div class="chart-wrapper" :style="{ top: '-10px'}"></div>
                              </div>
                              <div class="progress-group">
                                <div class="progress-group-header">                                 
                                  <span class="title">%</span>
                                  <span
                                    class="ml-auto font-weight-bold"
                                  >{{dataDashboardARDomObj.balance_amt_outdue_percen| number(2)}}%</span>
                                </div>
                                <div class="progress-group-bars">
                                  <b-progress
                                    height="{}"
                                    class="progress-xs"
                                    :value="this.dataDashboardARDomObj.balance_amt_outdue_percen"
                                    variant="success"
                                  ></b-progress>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-card>
                      </b-col>
                    </b-row>
                  </section>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>


    <div class="animated fadeIn">
      <b-row>
        <b-col lg="12">
          <transition name="fade">
            <b-card no-body v-if="show">
              <div slot="header">
                <i class="fa fa-bar-chart" aria-hidden="true"></i> รายละเอียดงบลูกหนี้ตามอายุหนี้
                <div class="card-header-actions">
                  <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                    <i class="icon-arrow-up"></i>
                  </b-link>
                </div>
              </div>
              <b-collapse id="collapse3" visible>
                <b-card-body>
                  <grid
                    ref="gridDrawing"
                    :fields="fieldDataAR"
                    :name="name"
                    :btnGrid="false"
                    :btnAdd="false"
                    :btnClone="false"
                    :btnView="false"
                    :btnEdit="false"
                    :btnDelete="false"
                    :o_col_checkbox="false"
                    :trackBy="'rowID'"
                    :data="dataDrawingARAll"
                    :o_navfooter_visible="false"                                        
                  ></grid>
                <p>(หน่วย : ล้านบาท)</p>
                </b-card-body>
              </b-collapse>
            </b-card>
          </transition>
        </b-col>
      </b-row>
    </div>
  </div>
</template>






<script>


import Vue from "vue";

import { API } from "@/shared/core";
import {
  GetDateView,
  AlertMessage,
  ObjCopy,
  ObjResetValue,
  GetLastUpdate,
  GetDateTimeFormat
} from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

import "webrtc-adapter";




export default {
      i18n: {
        messages: {
          en: {
            dic: {
              codevalid: "This is a required field and must have {0} characters."
            }
          },
          th: { dic: { codevalid: "จำเป็นต้องมี {0} ตัวอักษร" } }
        },
        sharedMessages: dic
      },

      name: "rptDrawing",    

  
      created: function() {
        const self = this;  
      },


        data() {
                return {
                  selected: [], 
                  show: true,
                  horizontal: { label: "col-3", input: "col-6" },
                  options: ["Option 1", "Option 2", "Option 3"],
                  selectOptions: [
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    {
                      value: ["some value", "another value"],
                      label: "Selected option"
                    }
                  ],
                  selectedOption: ["some value", "another value"],
                  chktyperept: false,
                  formCollapsed: true,
                  formCollapsed2: true,
                  formCollapsed3: true,
                  formCollapsed4: true,
                  checkboxNames: [
                    "Checkboxes",
                    "Inline Checkboxes",
                    "Checkboxes - custom",
                    "Inline Checkboxes - custom"
                  ],
                  radioNames: [
                    "Radios",
                    "Inline Radios",
                    "Radios - custom",
                    "Inline Radios - custom"
                  ],

                  seen: true,
                  token: null,
                  formdate: new Date(),
                  formtime: "",
                  time: "",
                  date: "",
                  modal: false,
                  mode: "Add",
                  errMsg: "",
                  avSearch: false,
                  txtSearch: "",
                  name: "rptDrawing",
                  drawingCd: "",
                  perPage: 25,

                  startRow: 0,
                  stopRow: 25,

      
                  dataDrawingARAll:[],    
                  dataDrawingARValueDom : {},
                  dataDrawingARPercenDom : {},   
                  dataDrawingARValueOvs : {},           
                  dataDrawingARPercenOvs : {},      

                  dataDrawingARValueAll : {},      

                 

                  dataDrawing: [],
                  dataDrawingEX: [],
                  dataDrawingDM: [],

                  fieldDataAR: [    
                     {
                        name: "tsale",
                        title: "ประเภทการขาย",
                        sortField: "tsale_idx",
                        class: "text-left",
                        visible: true
                      },  
                      {
                        name: "balance_amt_indue",
                        title: "ยังไม่ครบกำหนด",
                        sortField: "balance_amt_indue",
                        class: "text-right",
                        visible: true                        
                      },

                      {
                        name: "balance_out_1",
                        title: "เกิน 1-30 วัน",
                        sortField: "balance_out_1",
                        class: "text-right",
                        visible: true                        
                      },
                      {
                        name: "balance_out_2",
                        title: "เกิน 31-60 วัน",
                        sortField: "balance_out_2",
                        class: "text-right",
                        visible: true                        
                      },

                      {
                        name: "balance_out_3",
                        title: "เกิน 61-90 วัน",
                        sortField: "balance_out_3",
                        class: "text-right",
                        visible: true                        
                      },

                      {
                        name: "balance_out_4",
                        title: "เกิน 91-120 วัน",
                        sortField: "balance_out_4",
                        class: "text-right",
                        visible: true                        
                      },

                      {
                        name: "balance_out_5",
                        title: "เกิน 120 วัน",
                        sortField: "balance_out_5",
                        class: "text-right",
                        visible: true                        
                      },

                      {
                        name: "balance_amt_outdue",
                        title: "เกินกำหนดรวม",
                        sortField: "balance_amt_outdue",
                        class: "text-right",
                        visible: true
                      },
                      {
                        name: "balance_amt",
                        title: "รวมยอดลูกหนี้",
                        sortField: "balance_amt",
                        class: "text-right",
                        visible: true
                      },
                      {
                        name: "tsale_idx",
                        title: "tsaleidex",
                        sortField: "tsale_idx",
                        class: "text-right",
                        visible: false
                      }

                    ],
                      

                    iframe: {
                      src: "", //DIV HERE #EDITOR
                      loaded: false
                    },


                    dataSelect: [],
                    objSelect: {},                   


                    dataDashboardARAll:[],
                    dataDashboardAROvs:[],
                    dataDashboardARDom:[],

                    dataDashboardARAllObj : {},
                    dataDashboardAROvsObj : {},
                    dataDashboardARDomObj : {}


                  };
        },
  
    methods: {
                Search(e) {
                  this.QueryData();
                },

                
                QueryData() {






                                API.GetDataARSummary({
                                  data: {tsale:""},
                                  callblack: res => {
                                                      let errA = "";
                                                      let _statusA = "";
                                                      if (res.length <=0){
                                                        AlertMessage("error", "ไม่พบข้อมูลลูกหนี้");
                                                          return;
                                                      }

                                                      this.dataDashboardARAll = res;       
                                                      this.dataDashboardARAllObj = res[0]; 
                                                      

                                  }
                                });

                                API.GetDataARSummary({
                                  data: {tsale:"1"},
                                  callblack: res => {
                                                      let errA = "";
                                                      let _statusA = "";
                                                      if (res.length <=0){
                                                        AlertMessage("error", "ไม่พบข้อมูลลูกหนี้ต่างประเทศ");
                                                          return;
                                                      }

                                                      this.dataDashboardAROvs = res; 
                                                      this.dataDashboardAROvsObj = res[0];


                                  }
                                });

                                API.GetDataARSummary({
                                  data: {tsale:"0"},
                                  callblack: res => {
                                                      let errA = "";
                                                      let _statusA = "";
                                                      if (res.length <=0){
                                                        AlertMessage("error", "ไม่พบข้อมูลลูกหนี้ในประเทศ");
                                                          return;
                                                      }

                                                      this.dataDashboardARDom = res;                            
                                                      this.dataDashboardARDomObj = res[0];

                                  }
                                });  


                                this.dataDrawingARAll = [];


                                API.GetDataARDetail({
                                  data:{tsale:"0"},
                                  callblack: res => {
                                                      let errA = "";
                                                      let _statusA = "";
                                                      if (res.length <=0){
                                                        AlertMessage("error", "ไม่พบข้อมูลลูกหนี้ในประเทศ");
                                                          return;
                                                      }

                                                      res.forEach((d, i) => {
                                                        //this.dataDrawingARAll.push(d);   
                                                        //console.log(d.balance_amt);           
                                                        this.dataDrawingARValueDom.tsale_idx = d.tsale+"0";
                                                        this.dataDrawingARValueDom.tsale = "ในประเทศ";                                              
                                                        this.dataDrawingARValueDom.balance_amt_indue = d.balance_amt_indue;
                                                        this.dataDrawingARValueDom.balance_out_1 = d.balance_out_1;
                                                        this.dataDrawingARValueDom.balance_out_2 = d.balance_out_2;
                                                        this.dataDrawingARValueDom.balance_out_3 = d.balance_out_3;
                                                        this.dataDrawingARValueDom.balance_out_4 = d.balance_out_4;
                                                        this.dataDrawingARValueDom.balance_out_5 = d.balance_out_5;
                                                        this.dataDrawingARValueDom.balance_amt_outdue = d.balance_amt_outdue;
                                                        this.dataDrawingARValueDom.balance_amt = d.balance_amt;

                                                        this.dataDrawingARAll.push(this.dataDrawingARValueDom);
                                                        this.dataDrawingARPercenDom.tsale_idx = d.tsale+"Z";
                                                        this.dataDrawingARPercenDom.tsale = "";                                              
                                                        this.dataDrawingARPercenDom.balance_amt_indue = d.balance_amt_indue_percen + "%";
                                                        this.dataDrawingARPercenDom.balance_out_1 = d.balance_out_1_percen + "%";
                                                        this.dataDrawingARPercenDom.balance_out_2 = d.balance_out_2_percen + "%";
                                                        this.dataDrawingARPercenDom.balance_out_3 = d.balance_out_3_percen + "%";
                                                        this.dataDrawingARPercenDom.balance_out_4 = d.balance_out_4_percen + "%";
                                                        this.dataDrawingARPercenDom.balance_out_5 = d.balance_out_5_percen + "%";
                                                        this.dataDrawingARPercenDom.balance_amt_outdue = d.balance_amt_outdue_percen + "%";
                                                        
                                                        this.dataDrawingARAll.push(this.dataDrawingARPercenDom);                                                  
                                                      });                                                                             

                                  
                                                      API.GetDataARDetail({
                                                      data:{tsale:"1"},
                                                      callblack: res => {
                                                                          let errA = "";
                                                                          let _statusA = "";
                                                                          if (res.length <=0){
                                                                            AlertMessage("error", "ไม่พบข้อมูลลูกหนี้ในประเทศ");
                                                                              return;
                                                                          }

                                                                          res.forEach((d, i) => {
                                                                            this.dataDrawingARValueOvs.tsale_idx = d.tsale+"0";
                                                                            this.dataDrawingARValueOvs.tsale = "ต่างประเทศ";                                              
                                                                            this.dataDrawingARValueOvs.balance_amt_indue = d.balance_amt_indue;
                                                                            this.dataDrawingARValueOvs.balance_out_1 = d.balance_out_1;
                                                                            this.dataDrawingARValueOvs.balance_out_2 = d.balance_out_2;
                                                                            this.dataDrawingARValueOvs.balance_out_3 = d.balance_out_3;
                                                                            this.dataDrawingARValueOvs.balance_out_4 = d.balance_out_4;
                                                                            this.dataDrawingARValueOvs.balance_out_5 = d.balance_out_5;
                                                                            this.dataDrawingARValueOvs.balance_amt_outdue = d.balance_amt_outdue;
                                                                            this.dataDrawingARValueOvs.balance_amt = d.balance_amt;

                                                                            this.dataDrawingARAll.push(this.dataDrawingARValueOvs);
                                                                            this.dataDrawingARPercenOvs.tsale_idx = d.tsale+"Z";
                                                                            this.dataDrawingARPercenOvs.tsale = "";                                              
                                                                            this.dataDrawingARPercenOvs.balance_amt_indue = d.balance_amt_indue_percen + "%";
                                                                            this.dataDrawingARPercenOvs.balance_out_1 = d.balance_out_1_percen + "%";
                                                                            this.dataDrawingARPercenOvs.balance_out_2 = d.balance_out_2_percen + "%";
                                                                            this.dataDrawingARPercenOvs.balance_out_3 = d.balance_out_3_percen + "%";
                                                                            this.dataDrawingARPercenOvs.balance_out_4 = d.balance_out_4_percen + "%";
                                                                            this.dataDrawingARPercenOvs.balance_out_5 = d.balance_out_5_percen + "%";
                                                                            this.dataDrawingARPercenOvs.balance_amt_outdue = d.balance_amt_outdue_percen + "%";
                                                                            
                                                                            this.dataDrawingARAll.push(this.dataDrawingARPercenOvs);                                              
                                                                          });   
                                                                          
                                                                          API.GetDataARDetail({
                                                                          data:{tsale:""},
                                                                          callblack: res => {
                                                                                              let errA = "";
                                                                                              let _statusA = "";
                                                                                              if (res.length <=0){
                                                                                                AlertMessage("error", "ไม่พบข้อมูลลูกหนี้ในประเทศ");
                                                                                                  return;
                                                                                              }

                                                                                              res.forEach((d, i) => {
                                                                                                //this.dataDrawingARAll.push(d);   
                                                                                                //console.log(d.balance_amt);           
                                                                                                this.dataDrawingARValueAll.tsale_idx = d.tsale;
                                                                                                this.dataDrawingARValueAll.tsale = "รวม";                                              
                                                                                                this.dataDrawingARValueAll.balance_amt_indue = d.balance_amt_indue;
                                                                                                this.dataDrawingARValueAll.balance_out_1 = d.balance_out_1;
                                                                                                this.dataDrawingARValueAll.balance_out_2 = d.balance_out_2;
                                                                                                this.dataDrawingARValueAll.balance_out_3 = d.balance_out_3;
                                                                                                this.dataDrawingARValueAll.balance_out_4 = d.balance_out_4;
                                                                                                this.dataDrawingARValueAll.balance_out_5 = d.balance_out_5;
                                                                                                this.dataDrawingARValueAll.balance_amt_outdue = d.balance_amt_outdue;
                                                                                                this.dataDrawingARValueAll.balance_amt = d.balance_amt;

                                                                                                
                                                                                                this.dataDrawingARAll.push(this.dataDrawingARValueAll);                                                  
                                                                                              });                                                                                    

                                                                          }
                                                                        });

                                                      }
                                                    });                                                  
 

                                  
                                  
                                  
                                  }



                                });

                                

                                
                                /*
                                API.reptsummarysaleGetDataGrid({
                                  data: { yr: this.txtSearch, tsale: "" },

                                  callblack: res => {
                                    let errA = "";
                                    let _statusA = "";
                                    if (res.length <= 0) {
                                      AlertMessage("error", "ไม่พบข้อมูลยอดขายประจำเดือน");
                                      return;
                                    }

                                    

                                    this.dataDrawingMM = [];
                                    this.dataDrawingYY = [];
                                    this.dataDrawing = [];

                                    let date = new Date();

                                    let numA = 0;
                                    let numYY = 0;
                                    let numYYchk = 0;

                                    numYYchk = this.txtSearch;

                                    numA = GetDateTimeFormat(date, "MM");
                                    numYY = GetDateTimeFormat(date, "YYYY");

                                    if (numYY > numYYchk) {
                                      numA = 12;
                                    }

                                    res.forEach((d, i) => {
                                      this.dataDrawingYY.push(d);
                                    });

                                    if (this.chktyperept) {
                                      res.forEach((d, i) => {
                                        this.dataDrawing.push(d);
                                      });
                                    } else {
                                      res.forEach((d, i) => {
                                        if (i < numA) {
                                          this.dataDrawing.push(d);
                                        }
                                      });
                                    }

                                    res.forEach((d, i) => {
                                      if (i < numA) {
                                        this.dataDrawingMM.push(d);

                                        this.setdataDashboardobj = [];

                                        this.setdataDashboardobj.push(d);

                                        this.dataDashboardobj = this.setdataDashboardobj[0];
                                      }
                                    });
                                  }
                                });

                                API.reptsummarysaleGetDataGrid({
                                  data: { yr: this.txtSearch, tsale: "1" },

                                  callblack: res => {
                                    let errA = "";
                                    let _statusA = "";
                                    if (res.length <= 0) {
                                      return;
                                    }

                                    this.dataDrawingEXMM = [];
                                    this.dataDrawingEXYY = [];
                                    this.dataDrawingEX = [];

                                    let date = new Date();

                                    let numA = 0;

                                    let numYY = 0;
                                    let numYYchk = 0;

                                    numYYchk = this.txtSearch;

                                    numA = GetDateTimeFormat(date, "MM");
                                    numYY = GetDateTimeFormat(date, "YYYY");

                                    if (numYY > numYYchk) {
                                      numA = 12;
                                    }

                                    res.forEach((d, i) => {
                                      this.dataDrawingEXYY.push(d);
                                    });

                                    this.dataDrawingEX = [];

                                    if (this.chktyperept) {
                                      res.forEach((d, i) => {
                                        this.dataDrawingEX.push(d);
                                      });
                                    } else {
                                      res.forEach((d, i) => {
                                        if (i < numA) {
                                          this.dataDrawingEX.push(d);
                                        }
                                      });
                                    }

                                    res.forEach((d, i) => {
                                      if (i < numA) {
                                        this.dataDrawingEXMM.push(d);

                                        this.setdataDashboardEXobj = [];

                                        this.setdataDashboardEXobj.push(d);

                                        this.dataDashboardEXobj = this.setdataDashboardEXobj[0];
                                      }
                                    });
                                  }
                                });

                                API.reptsummarysaleGetDataGrid({
                                  data: { yr: this.txtSearch, tsale: "0" },

                                  callblack: res => {
                                    let errA = "";
                                    let _statusA = "";
                                    if (res.length <= 0) {
                                      return;
                                    }

                                    this.dataDrawingDMYY = [];
                                    this.dataDrawingDMMM = [];
                                    this.dataDrawingDM = [];

                                    let date = new Date();

                                    let numA = 0;

                                    let numYY = 0;
                                    let numYYchk = 0;

                                    numYYchk = this.txtSearch;

                                    numA = GetDateTimeFormat(date, "MM");
                                    numYY = GetDateTimeFormat(date, "YYYY");

                                    if (numYY > numYYchk) {
                                      numA = 12;
                                    }

                                    res.forEach((d, i) => {
                                      this.dataDrawingDMYY.push(d);
                                    });

                                    if (this.chktyperept) {
                                      res.forEach((d, i) => {
                                        this.dataDrawingDM.push(d);
                                      });
                                    } else {
                                      res.forEach((d, i) => {
                                        if (i < numA) {
                                          this.dataDrawingDM.push(d);
                                        }
                                      });
                                    }

                                    res.forEach((d, i) => {
                                      if (i < numA) {
                                        this.dataDrawingDMMM.push(d);

                                        this.setdataDashboardDMobj = [];

                                        this.setdataDashboardDMobj.push(d);

                                        this.dataDashboardDMobj = this.setdataDashboardDMobj[0];
                                      }
                                    });
                                  }
                                });

                                API.reptsummarysaleGetDataDashboardAll({
                                  data: { yr: this.txtSearch, tsale: "" },
                                  callblack: res => {
                                    this.dataDashboardAll = res;
                                    this.dataDashboardobjYY = res[0];
                                  }
                                });

                                API.reptsummarysaleGetDataDashboardAll({
                                  data: { yr: this.txtSearch, tsale: "1" },
                                  callblack: res => {
                                    this.dataDashboardEX = res;
                                    this.dataDashboardEXobjYY = res[0];
                                  }
                                });

                                API.reptsummarysaleGetDataDashboardAll({
                                  data: { yr: this.txtSearch, tsale: "0" },
                                  callblack: res => {
                                    this.dataDashboardDM = res;
                                    this.dataDashboardDMobjYY = res[0];
                                  }
                                });

                                */
                      },
    
              ongridclick(mode, data, evt) {
                this.mode = mode;

                this.dataSelect = ObjCopy(data);
                this.objSelect = ObjCopy(this.dataSelect[0]);

                this.iframe.loaded = false;

                let reader = new FileReader();
                reader.onload = function() {
                  var dataURL = reader.result;
                  var output = document.getElementById("output");
                  output.src = dataURL;
                };
                reader.readAsDataURL(file);
              },

              load() {
                
              }

  },

  mounted() {
                          console.log("555555");
                          this.QueryData();
                      
              }
};
</script>



















<!-- <script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'



import Vue from 'vue'
 
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate,GetDateTimeFormat } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

import 'webrtc-adapter';


export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'activity' },
      ]
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>  -->








<style>
.app-body .main {
  background-image: linear-gradient(rgba(234, 242, 248, 0.8), #f2f3f4);
}

.card_body {
  background: linear-gradient(
    to bottom right,
    rgba(232, 246, 243, 1),
    rgba(234, 250, 241, 1)
  );
  border: 1px solid rgb(214, 219, 223);
}

.card_body2 {
  background: linear-gradient(
    to bottom right,
    rgba(253, 237, 236, 1),
    rgba(253, 237, 236, 1)
  );

  border: 1px solid rgb(214, 219, 223);
}

.form-row > .col,
.form-row > [class*="col-"] {
  padding-right: 0px;
  padding-left: 5 px;
  text-align: right;
}
.btn-block {
  display: block;
  width: 100%;
  height: 50px;
  color: #154360;

  background: linear-gradient(
    to bottom right,
    rgba(214, 234, 248, 1),
    rgba(235, 245, 251, 1)
  );
  border-color: rgba(233, 247, 239, 1);
}

.wrapper {
  padding: 3rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
.st0 {
  fill: #d7dde5;
}
.st1,
.knob_data {
  fill: #2eab6f;
  color: #2eab6f;
}

.graph {
  width: 80%;
  display: table;
  margin: 0 auto 0;
  position: relative;
  text-align: center;
}

.graph_media {
  max-height: 12rem;
}

.graph_data,
.knob_data {
  font-size: 2rem;
}

.graph_data {
  display: table-cell;
  vertical-align: middle;
}

.card_division {
  border-top: 1px solid #d7dde5;
  padding: 0;
}

.card_full {
  max-height: none;
  height: auto;
}

.card_more_button {
  display: block;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.1;
  transition: transform 0.12s ease-out;
}

.card_more_button {
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  border-bottom-color: #d7dde5;
  border-top-color: #d7dde5;
  background-color: #fff;
}

.card_more_button:after {
  content: "\e629";
}

.card_more_content {
  display: none;
  font-size: 0.865rem;
  line-height: 1.5;
  padding: 0.75rem;
}

.stats {
  width: 100%;
  margin-bottom: -2px;
  height: 5.75rem;
  display: table;
}

.stats_row > .stats_item {
  border-left: 1px solid #d7dde5;
  padding: 0.75rem 1.5rem;
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  height: 100%;
}

.stats_row > .stats_item:first-child {
  border-left: 0;
}

.stats_row:after {
  content: " ";
  display: table;
  clear: both;
}

.stats_item_number {
  white-space: nowrap;
  font-size: 2.25rem;
  line-height: 2.5rem;

  /* &:before {
    display: none;
  } */
}

.txt_success {
  color: #000;
  /* font-size: 40px; */
  font-weight: bold;
}

.txt_error {
  color: #000;
  /* font-size: 40px; */
  font-weight: bold;
}

.txt_warn {
  color: #ddc728;
}

.txt_smaller {
  font-size: 0.75em;
}

.flipY {
  transform: scaleY(-1);
  border-bottom-color: #fff;
}

.txt_faded {
  opacity: 0.65;
}

.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
  content: "";
}

.fa-unsorted:before,
.fa-sort:before {
  content: "";
}

.panel:nth-child(n) {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 280px;
  height: 160px;
  margin: 5px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  border-radius: 5px;
}

.panel {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 280px;
  height: 160px;
  margin: 5px;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  border-radius: 8px;
}

.panel a {
  position: relative;
  display: block;
  padding: 12px 25px 25px 25px;
  color: #fff;
  text-decoration: none;
  z-index: 2;
}
.panel a span {
  display: block;
  font-size: 96px;
  font-weight: 700;
  line-height: 96px;
}

.panel a span:nth-child(n) {
  font-size: 40px;
  font-weight: 700;
}

.panel:after {
  position: absolute;
  font-family: FontAwesome;
  color: #0b5345;
  z-index: 1;
  transition: all 0.5s;
  line-height: normal;
}
.panel.post {
  background-color: #0b5345;
  width: 100%;
}
.panel.post:after {
  content: "\f024";
  font-size: 100px;
  color: #117a65;
  top: 30px;
  right: 35px;
  /* -webkit-transform: rotate(45deg);
  transform: rotate(45deg); */
}
.panel.post:hover:after {
  top: 8px;
}
.panel.comment {
  background-color: #1b4f72;
  width: 100%;
}
.panel.comment:after {
  content: "\f155";
  font-size: 100px;
  color: #1f618d;
  top: 30px;
  right: 35px;
}
.panel.comment:hover:after {
  top: -5px;
}
.panel.page {
  background-color: #641e16;
  width: 100%;
}
.panel.page:after {
  content: "\f080";
  font-size: 90px;
  color: #922b21;
  top: 30px;
  right: 35px;
}
.panel.page:hover:after {
  top: 24px;
}

.panel.user {
  background-color: #7d6608;
  width: 100%;
}

.panel.user:after {
  content: "\f091";
  font-size: 100px;
  color: #9c640c;
  top: 30px;
  right: 35px;
}
.panel.user:hover:after {
  top: 7px;
}
.panel:hover:after {
  transition: all 0.5s;
}

.callout-info {
  border-left-color: #63c2de;
}
.callout {
  position: relative;
  padding: 0 1rem;
  margin: 1rem 0;
  /* border-left: 4px solid #c8ced3; */
  border-radius: 0.25rem;
}

.callout-danger {
  border-left-color: #f86c6b;
}
.callout-warning {
  border-left-color: #ffc107;
}
.callout-success {
  border-left-color: #4dbd74;
}

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
  border: 0px solid;
}



.dashboard {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  color: #566573;
}
.dashboard .all-card {
  padding: 30px;
}
.dashboard .card {
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin-bottom: 30px;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
}

.dashboard .card .border-left-1 {
  border-left: 4px solid #2980b9;
}

.dashboard .card .border-left-2 {
  border-left: 4px solid #c0392b;
}

.dashboard .card .border-left-3 {
  border-left: 4px solid #16a085;
}

.dashboard .card .border-left-4 {
  border-left: 4px solid #884ea0;
}

.dashboard .card .border-left-pink {
  border-left: 4px solid #f5365c;
}
.dashboard .card .border-left-orange {
  border-left: 4px solid #fb6340;
}
.dashboard .card .border-left-yellow {
  border-left: 4px solid #ffd600;
}
.dashboard .card .border-left-blue {
  border-left: 4px solid #11cdef;
}
.dashboard .card .text-title {
  color: #8898aa;
  font-weight: 500;
  font-size: 14px;
}
.dashboard .card .text-amount {
  font-weight: 600;
}
.dashboard .card .icon-shape {
  border-radius: 50%;
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
}
.dashboard .card .icon-area {
  background: #f5365c;
}
.dashboard .card .icon-pie {
  background: #fb6340;
}
.dashboard .card .icon-user {
  background: #ffd600;
}
.dashboard .card .icon-percent {
  background: #11cdef;
}
.dashboard .chart {
  padding: 30px;
}
@media (min-width: 992px) and (max-width: 1300px) {
  .dashboard .card .text-title {
    font-size: 12px;
  }
  .dashboard .card .text-amount {
    font-size: 18px;
  }
  .dashboard .card .icon-shape {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
@media (max-width: 360px) {
  .icon-shape {
    display: none !important;
  }
}

.task-row {
  border-bottom: 1px solid #ddd;
}
.task-row:last-child {
  border-bottom: 1px solid transparent;
}
.priority {
  width: 15%;
  float: left;
  line-height: 34px;
}
.priority a {
  padding: 5px;
}
.priority.High a {
  background: #f88;
}
.priority.Normal a {
  background: #8f8;
}
.priority.Low a {
  background: #88f;
}
.task-title {
  width: 45%;
  float: left;
}
.task-title h4 {
  color: #555;
  font-weight: bold;
}
.task-title h5 {
  color: #999;
}
.task-status {
  width: 100%;
  float: left;
}
.status-bar {
  float: left;
  height: 20px;
  width: 90%;
}
.status-track {
  position: relative;
  width: 100%;
  height: 20px;
  background: #ebebeb;
  border-radius: 3px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.status-fill {
  position: relative;
  background: #85c1e9;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.status-fill-bad {
  position: relative;
  background: #fadbd8;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}
.status-fill-bad2good {
  position: relative;
  background: #fad7a0;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.status-fill-good {
  position: relative;
  background: #d5f5e3;
  border-radius: 3px;
  height: 20px;
  width: 50%;
  /*default*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.status-text {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  /* sketchy center-it: 50% -->  then 1/2 width <--  */
  color: #656565;
  text-align: center;
  font-family: "Lato", "Verdana", sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  z-index: 100;
  display: inline-block;
  width: 50px;
}
.task-time {
  width: 20%;
  float: left;
  height: 34px;
  line-height: 34px;
}
.task-time a {
  font-size: 12px;
  color: #555;
  font-weight: bold;
}
.task-time small {
  color: #999;
  font-weight: normal;
}
/* Tooltips */
.tooltip {
  display: inline;
  position: relative;
}
.tooltip:hover:after {
  background: #333;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  bottom: 26px;
  color: #fff;
  content: attr(tooltip);
  left: 20%;
  padding: 5px 15px;
  position: absolute;
  z-index: 98;
  width: 220px;
}
.tooltip:hover:before {
  border: solid;
  border-color: #333 transparent;
  border-width: 6px 6px 0 6px;
  bottom: 20px;
  content: "";
  left: 50%;
  position: absolute;
  z-index: 99;
}

.tabset > input[type="radio"] {
  position: absolute;
  left: -200vw;
}

.tabset .tab-panel {
  display: none;
}

.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
  display: block;
}

/*
 Styling
*/

.tabset > label {
  position: relative;
  display: inline-block;
  padding: 15px 15px 25px;
  border: 1px solid transparent;
  border-bottom: 0;
  cursor: pointer;
  font-weight: 600;
}

.tabset > label::after {
  content: "";
  position: absolute;
  left: 15px;
  bottom: 10px;
  width: 22px;
  height: 4px;
  background: #8d8d8d;
}

.tabset > label:hover,
.tabset > input:focus + label {
  color: #06c;
}

.tabset > label:hover::after,
.tabset > input:focus + label::after,
.tabset > input:checked + label::after {
  background: #06c;
}

.tabset > input:checked + label {
  border-color: #ccc;
  border-bottom: 1px solid #fff;
  margin-bottom: -1px;
}

.tab-panel {
  /* padding: 30px 0; */
  border-top: 1px solid #ccc;
}

/*
 Demo purposes only
*/
*,
*:before,
*:after {
  box-sizing: border-box;
}

.tabset {
  max-width: 100%;
}

.switch-input {
  display: none;
  width: 100px;
  position: absolute;
}
.switch-label {
  position: relative;
  display: inline-block;

  cursor: pointer;
  font-weight: 500;
  text-align: left;
  margin: 16px;
  padding: 16px 0 16px 44px;
}
.switch-label:before,
.switch-label:after {
  content: "";
  position: absolute;
  margin: 0;
  outline: 0;
  top: 50%;
  -ms-transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.switch-label:before {
  left: 1px;
  width: 34px;
  height: 14px;
  background-color: #3498db;
  border-radius: 8px;
}
.switch-label:after {
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #3498db;

  border-radius: 50%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14),
    0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
}
.switch-label .toggle--on {
  display: none;
  width: 100px;
}
.switch-label .toggle--off {
  display: inline-block;
  width: 100px;
}

.switch-input:checked + .switch-label:before {
  background-color: #a5d6a7;
}
.switch-input:checked + .switch-label:after {
  background-color: #4caf50;
  -ms-transform: translate(80%, -50%);
  -webkit-transform: translate(80%, -50%);
  transform: translate(80%, -50%);
}
.switch-input:checked + .switch-label .toggle--on {
  display: inline-block;
}
.switch-input:checked + .switch-label .toggle--off {
  display: none;
}

.fixed-bottom-bar {
  height: 40px;
  z-index: 1020;
  position: fixed;

  width: 250px;
  bottom: 10px;
  right: 10px;

  border-radius: 5px;

  padding-top: 5px;
  background-color: #fff;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14),
    0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
}

.fixed-bottom-bar-in {
  position: absolute;
  top: 130%;
  left: 75%;
  height: 100px;
  margin-top: -50px;
  width: 250px;
  margin-left: -125px;
}

@media screen and (max-width: 600px) {
  .fixed-bottom-bar {
    height: 40px;
    z-index: 1020;
    position: fixed;

    width: 100%;
    bottom: 0;
    right: 0;

    padding-top: 5px;
    background-color: #fff;
  }

  .fixed-bottom-bar-in {
    position: absolute;
    top: 130%;
    left: 35%;
    height: 100px;
    margin-top: -50px;
    width: 250px;
    margin-left: -125px;
  }

  .card-header {
    margin-bottom: 0;
    border-bottom: 0px solid;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(#f4f6f6),
      to(#e5e8e8)
    );
    background: linear-gradient(to bottom right, #f4f6f6, #e5e8e8);
    border-color: #d8dbe0;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background: #a9cce3;
    border-top: 2px solid #aeb6bf;
  }
}

.switch input {
  display: none;
}
.switch {
  display: inline-block;
  width: 50px;
  height: 14px;
  margin: 5px;
  margin-left: 25px;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
  position: relative;
}

.slider {
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 20px;
  background: #b7b7b7;
  cursor: pointer;
  border: 4px solid transparent;
  overflow: visible;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  width: 22px;
  height: 22px;
  background: #2980b9;
  border-radius: 100px;
  top: -8px;
  -webkit-transform: translateX(-0px);
  transform: translateX(-0px);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.23);
}

.switch input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
  background: #2980b9;
}
.off {
  position: absolute;
  left: -60px;
  top: -5px;
  color: #154360;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
}
.on {
  position: absolute;
  right: -100px;
  top: -5px;
  color: #d3d3d3;
  font-family: "roboto_light", sans-serif;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
}
.switch input:checked ~ .off {
  color: #d3d3d3;

  top: -5px;
}

.switch input:checked ~ .on {
  color: #154360;
}

.card-header {
  margin-bottom: 0;
  border-bottom: 0 solid;
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#f4f6f6),
    to(#e5e8e8)
  );
  background: linear-gradient(to bottom right, #f4f6f6, #e5e8e8);
  border-color: #d8dbe0;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background: #fff;
}
</style>





