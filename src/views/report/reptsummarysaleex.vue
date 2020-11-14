<template> <!-- <WidgetsBrand/> -->

<div class="animated fadeIn">

   
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header"><i class="fa fa-television" aria-hidden="true"></i> สรุปยอดขายภาพรวม 
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>

              <b-collapse id="collapse1" visible>


              <b-card-body>

             

<b-row>
      <b-col md="12">
        <b-card>
  <b-row>
  <div class="panel post">
    <a href="javascript:void();"><span color="#0B5345">5,000 </span>เป้าหมาย (ลบ.)</a>
  </div>
  <div class="panel comment">
    <a href="javascript:void();"><span>4,246 </span>ยอดขาย (ลบ.)</a>
  </div>
  <div class="panel page">
    <a href="javascript:void();"><span>754</span>ต่างจากเป้าหมาย (ลบ.)</a>
  </div>
  <div class="panel user">
    <a href="javascript:void();"><span>84.92%</span>% เทียบเป้าหมาย</a>
  </div>
</b-row>

       </b-card>
      </b-col>

    </b-row>



<b-row>
      <b-col md="6">
        <b-card>
       
            <div class="knob_data" style= "background-image: url('img/brand/Flagex.png'); background-repeat: no-repeat;
            background-size: contain; background-position: left;  color:#1A5276; text-align: center; " >ขายต่างประเทศ<span class="txt_smaller"></span></div>
              <b-row>


                
                <b-col sm="4">
                  <div class="callout callout-info">
                    <small class="text-muted">เป้าหมาย (ลบ.)</small><br>
                    <strong class="h1">4,000</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                    
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                    <div class="callout callout-danger">
                    <small class="text-muted">ยอดขาย (ลบ.)</small><br>
                    <strong class="h1">3,520</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                    
                    </div>
                 </div>
                </b-col>
                <b-col sm="4">
                  <div class="callout callout-warning">
                    <small class="text-muted">เทียบเป้าหมาย</small><br>
                    <strong class="h1">88%</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
               
                    </div>
                  </div>
                </b-col>


              </b-row>

          
          
        </b-card>
      </b-col>


      <b-col md="6">
        <b-card  >   
            
                  <div class="knob_data" style= "background-image: url('img/brand/thai2.png'); background-repeat: no-repeat;
                  background-size: contain; background-position: left;  color:#641E16; text-align: center;" >ขายในประเทศ<span class="txt_smaller"></span></div>
             
               <b-row>
                <b-col sm="4">
                  <div class="callout callout-info">
                    <small class="text-muted">เป้าหมาย (ลบ.)</small><br>
                    <strong class="h1">1,000</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <!--<callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />-->
                      
                    </div>
                  </div>
                </b-col>

                <b-col sm="4">
                    <div class="callout callout-danger">
                    <small class="text-muted">ยอดขาย (ลบ.)</small><br>
                    <strong class="h1">726</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
               
                    </div>
                 </div>
                </b-col>
                <b-col sm="4">
                  <div class="callout callout-warning">
                    <small class="text-muted">เทียบเป้าหมาย</small><br>
                    <strong class="h1">72.60%</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                     
                    </div>
                  </div>
                </b-col>


              </b-row>

          
          
        </b-card>
      </b-col>

    </b-row>

















               
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
            <div slot="header"><i class="fa fa-bar-chart" aria-hidden="true"></i> รายงานสรุปยอดขายในประเทศ-แยกเดือน 
              <div class="card-header-actions">
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse2>
                  <i class="icon-arrow-up"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse2" visible>
              <b-card-body>


   
 

              
      <b-row>
            <b-col sm="4">
              <b-form-group
            label="ยอดขายปี"
            label-for="basicSelect"
            :label-cols="3"
            :horizontal="true">
              
                <b-form-select id="year1"
                  :plain="true"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]" value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
                  <b-form-group
            label="ถึงปี"
            label-for="basicSelect"
            :label-cols="3"
            :horizontal="true">
                
                <b-form-select id="year2"
                  :plain="true"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
          
                  <b-button size="lg" variant="info" block>แสดงข้อมูล</b-button>
              </b-form-group>
            </b-col>
          </b-row>


       
           <grid
                ref="gridDrawing"
       
                :fields="fieldDrawing"
                :name="name"
                :btnGrid="false"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawing"
              
                
                
            >
            </grid>







        
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


 //import Vue from 'vue'
 
 import { API } from "@/shared/core";
 import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate,GetDateTimeFormat } from "@/shared/utils";
 import { status, configMode } from "@/shared/define";
 import { required, minLength } from "vuelidate/lib/validators";
 import dic from "@/shared/dic";
 import 'webrtc-adapter';



export default {







  
  i18n: {
    messages: {
      en: { dic: { codevalid: "This is a required field and must have {0} characters." } },
      th: { dic: { codevalid: "จำเป็นต้องมี {0} ตัวอักษร" } }    

    },
    sharedMessages: dic
  },


  name: "rptDrawing", 
  mounted() {},
  computed: {    
     config() {
      return configMode[this.mode].class;
    }
    
  },
  created: function() {
        const self = this;                   
        setInterval(self.timer, 1000);   
  },

  // form //
  data() {
    return {


      
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-6' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        { 
          value: ['some value', 'another value'], 
          label: 'Selected option'
        }
      ],
      selectedOption: ['some value', 'another value'],

      formCollapsed: true,
      formCollapsed2: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
                      'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
                    'Radios - custom', 'Inline Radios - custom'],



    seen: true,
    token: null,
    formdate:new Date(),  
    formtime:"",  
    time: "",
    date: "",
    modal: false,
    mode: "Add",
    errMsg: "",
    avSearch: false,
    txtSearch: "",
    name:"rptDrawing",
    drawingCd:"",
    perPage: 25,

      startRow: 0,
      stopRow: 25,

    dataDrawing:[
     {rowID:1,mnt:"1/2019",fcValue:420,poValue:380,saleValue:350,diffValue:70,percTarget:83.33}
    ,{rowID:2,mnt:"2/2019",fcValue:420,poValue:400,saleValue:390,diffValue:30,percTarget:92.86}
    ,{rowID:3,mnt:"3/2019",fcValue:420,poValue:370,saleValue:366,diffValue:54,percTarget:87.14}
    ,{rowID:4,mnt:"4/2019",fcValue:420,poValue:405,saleValue:400,diffValue:20,percTarget:95.24}
    ,{rowID:5,mnt:"5/2019",fcValue:420,poValue:400,saleValue:382,diffValue:38,percTarget:90.95}
    ,{rowID:6,mnt:"6/2019",fcValue:420,poValue:410,saleValue:390,diffValue:30,percTarget:92.86}
    ,{rowID:7,mnt:"7/2019",fcValue:420,poValue:420,saleValue:398,diffValue:22,percTarget:94.76}
    ,{rowID:8,mnt:"8/2019",fcValue:420,poValue:420,saleValue:406,diffValue:14,percTarget:96.67}
    ,{rowID:9,mnt:"9/2019",fcValue:420,poValue:440,saleValue:414,diffValue:6,percTarget:98.57}
    ,{rowID:10,mnt:"10/2019",fcValue:420,poValue:430,saleValue:400,diffValue:20,percTarget:95.24}
    ,{rowID:11,mnt:"11/2019",fcValue:400,poValue:375,saleValue:350,diffValue:50,percTarget:87.50}
    ,{rowID:12,mnt:"12/2019",fcValue:400,poValue:0,saleValue:0,diffValue:400,percTarget:0}
    ],




    fieldDrawing:[
      
      {
         
        name: "rowID",
        title: "No",
          class: "text-left",
        visible: true
      },
       
       {
        name: "mnt",
        title: "เดือน",
        sortField: "mnt",
        class: "text-rig",
        visible: true
        },
        {
        name: "fcValue",
        title: "Forecast (ลบ.)",
        sortField: "fcValue",
        class: "text-right",
        visible: true
        },   

        {
        name: "poValue",
        title: "รับคำสั่งซื้อ (ลบ.)",
        sortField: "poValue",
        class: "text-right",
        visible: true
        },

         {
        name: "saleValue",
        title: "ยอดขาย (ลบ.)",
        sortField: "saleValue",
        class: "text-right",
        visible: true,

        },
        
         {
        name: "diffValue",
        title: "ส่วนต่างจาก Forecast (ลบ.)",
        sortField: "diffValue",
        class: "text-right",
        visible: true,

        },
        
         {
        name: "percTarget",
        title: "% เทียบเป้าหมาย",
        sortField: "percTarget",
        class: "text-right",
        visible: true,

        }

    ],
     
      
    

    iframe: {
    src: "", //DIV HERE #EDITOR
    loaded: false
    },
    dataSelect:[],
    objSelect:{},
    datazValue:[],

    };
  },
  // validations: {
  //   form: {
  //     code: { required, minLength: minLength(1) },
      
  //   }
  // },
  methods: {
    Search(e) {
        this.QueryData();

    },

   validator (val) {
      return val ? val.length >= 4 : false
    },



    QueryData(){
      API.MsDrawingPathSearch({
        data:{ drawingCd :this.txtSearch.trim() },              
        callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
              AlertMessage("error", 'ไม่พบข้อมูลยอดขายประจำเดือน');
            // this.form.orderno_scanner ="";
              return ;
            }
          
            res.forEach((d, i) => {
              if (d._result._status == "F")
              {
                _statusA = d._result._status;
                errA = errA.concat("#", (i + 1), " ", d.workOrderID,  " : ", d._result._message, '<br>');
              }
            });       
            
            if (_statusA == "F")
            {
                AlertMessage(errA ? "error" : "success", errA);               
                return ;
            } 
            
            this.dataDrawing =  res ;
            console.log(this.dataDrawing);

            API.zValueGetData({
              data:{ valueName :"PixPathDir" },              
              callblack: res => {
                  this.datazValue =  res ;
                    console.log(this.datazValue);
              }
            });

        }
      });
    },
   ongridclick(mode, data, evt){
      this.mode = mode;


      this.dataSelect = ObjCopy(data);
      this.objSelect  = ObjCopy(this.dataSelect[0]);
   
      this.iframe.loaded = false;


  

    let reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
     reader.readAsDataURL(file);


    
      
   },

   load(){
    // this.iframe.loaded = true;
   },
    



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

.card_body {
  
   background: linear-gradient(to bottom right, rgba(232, 246, 243    , 1), rgba(234, 250, 241    , 1)); 
    border: 1px solid rgb(214, 219, 223   ) ;

}

.card_body2 {
  
   background: linear-gradient(to bottom right, rgba(253, 237, 236     , 1), rgba(253, 237, 236     , 1)); 
   
   border: 1px solid rgb(214, 219, 223  );
   
}


.form-row > .col, .form-row > [class*="col-"] {

    padding-right: 0px;
    padding-left: 5 px;
    text-align: right;


}
.btn-block {
    display: block;
    width: 100%;
    height: 50px;
   color: #154360;
    font-size: 24px;
   background: linear-gradient(to bottom right, rgba(214, 234, 248      , 1), rgba(235, 245, 251   , 1));
   border-color: rgba(233, 247, 239    , 1);
}


.wrapper {
  padding: 3rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
.st0{fill:#D7DDE5;}
.st1, .knob_data {fill:#2EAB6F; color:#2EAB6F;}

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

.graph_data, .knob_data {
  font-size: 3rem;
}

.graph_data {
  display: table-cell;
  vertical-align: middle;
}

.card_division {
  border-top: 1px solid #D7DDE5;
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
  transition: transform .12s ease-out;
}

.card_more_button {
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  border-bottom-color: #D7DDE5;
  border-top-color: #D7DDE5;
  background-color: #fff;
}

.card_more_button:after {
  	content: '\e629';
}

.card_more_content {
  display: none;
  font-size: .865rem;
  line-height: 1.5;
  padding: .75rem;
}

.stats {
  width: 100%;
  margin-bottom: -2px;
  height: 5.75rem;
  display: table;
}

.stats_row > .stats_item {
  border-left: 1px solid #D7DDE5;
  padding: .75rem 1.5rem;
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  height: 100%;
}

.stats_row > .stats_item:first-child {
  border-left: 0;
}

.stats_row:after {
  content: ' ';
  display: table;
  clear: both;
}

.stats_item_number {
  white-space: nowrap;
  font-size: 2.25rem;
  line-height: 2.5rem;
  
  &:before {
    display: none;
  }
}

.txt_success {
  color: #000 ;
  font-size: 40px;
font-weight:bold;
}

.txt_error {
  color: #000 ;
  font-size: 40px;
  font-weight:bold;
}

.txt_warn {
  color: #DDC728;
}

.txt_smaller {
  font-size: .75em;      
}

.flipY {
  transform: scaleY(-1);
  border-bottom-color: #fff;
}

.txt_faded {
  opacity: .65;
}

.fa-navicon:before, .fa-reorder:before, .fa-bars:before {
    content: "";
}

.fa-unsorted:before, .fa-sort:before {
    content: "";
}




.panel:nth-child(n){
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
  border-radius: 8px;

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

.panel a span:nth-child(n)  {

    font-size: 56px;
    font-weight: 700;

 
}


.panel:after {
  position: absolute;
  font-family: FontAwesome;
  color:#0B5345;
  z-index: 1;
  transition: all .5s;
  line-height: normal;
}
.panel.post {
  background-color: #0B5345;
  
}
.panel.post:after {
  content: "\f024";
  font-size: 100px;
  color: #117A65;
  top: 30px;
  right: 35px;
  /* -webkit-transform: rotate(45deg);
  transform: rotate(45deg); */

  
}
.panel.post:hover:after {
  top: 8px;
}
.panel.comment {
  background-color: #1B4F72;
}
.panel.comment:after {
  content: "\f155";
  font-size: 100px;
  color: #1F618D;
  top: 30px;
  right: 35px;
}
.panel.comment:hover:after {
  top: -5px;
}
.panel.page {
  background-color: #641E16;
}
.panel.page:after {
  content: "\f080";
  font-size:90px;
  color: #922B21;
  top: 30px;
  right: 35px;
}
.panel.page:hover:after {
  top: 24px;
}


.panel.user {
  background-color: #7D6608;
}


.panel.user:after {
  content: "\f091";
  font-size: 100px;
  color: #9C640C;
  top: 30px;
  right: 35px;
}
.panel.user:hover:after {
  top: 7px;
}
.panel:hover:after {
  transition: all .5s;
}


.callout-info {
    border-left-color: #63c2de;
}
.callout {
    position: relative;
    padding: 0 1rem;
    margin: 1rem 0;
    /* border-left: 4px solid #c8ced3; */
    border-radius: .25rem;
}

.callout-danger {
    border-left-color: #f86c6b;
}
.callout-warning {
    border-left-color: #ffc107;
}.callout-success {
    border-left-color: #4dbd74;
}






</style>