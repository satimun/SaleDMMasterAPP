<template>
    <div class="animated fadeIn">

        <b-form  @submit.prevent="Search">
        <!--<b-card class="mt-1" >  </b-card>-->      
    
            <span>  
                <label><b>รหัสแบบการผลิต : </b></label>
                <label><span>{{drawingCd}}</span></label>
            </span>  

            <span>    
     
                <b-input-group>
                    <b-form-input 
                    id="OrderNO"
                    v-model="txtSearch"           
                    placeholder="Enter"
                    @keydown.enter ="Search" 
                    @keydown.tab ="Search" 
                    ></b-form-input>
                    <!--
                    <b-button variant="outline-primary"  v-on:click="onBarcode"   >
                        <i class="fa fa-barcode"></i>
                    </b-button>
                    -->
                    <b-button variant="outline-primary" type="submit">{{$t('dic.search')}}</b-button>
                
                </b-input-group> 
         
  

            </span>   

 
            <gridmodify 
                ref="gridDrawing"
                :title="'แสดงแบบการผลิต'"
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
                @grid:btnSelect="ongridclick"
                
                
            >
            </gridmodify>

          <!--  
        <iframe :src="iframe.src"  type="application/pdf"  style="width:600px; height:500px;">
          </iframe>
          -->
           <iframe id='output' v-bind:src="iframe.src" type="application/pdf" width="100%" height="650" 
             frameborder="0" style="position:relative;z-index:999" ref="frame" @load="load" 
             v-show="iframe.loaded"></iframe>
        </b-form>
    </div>
</template>

<script>


import Vue from 'vue'
 
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
  name: "rptdrawing", 
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
  data() {
    return {
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
    dataDrawing:[],
    fieldDrawing:[
      
      {
         
        name: "rowID",
        title: "No",
      //  sortField: "rowID",
        class: "text-left",
        visible: true
      },
       
       {
        name: "drawingCd",
        title: "รหัสแบบ",
        sortField: "drawingCd",
        class: "text-left",
        visible: true
        },
        {
        name: "drawingNmTh",
        title: "รายละเอียด",
        sortField: "drawingNmTh",
        class: "text-left",
        visible: true
        },   

        {
        name: "editUser",
        title: "ผู้บันทึก",
        sortField: "editUser",
        class: "text-left",
        visible: true
        },

         {
        name: "editDate",
        title: "วันที่บันทึก",
        sortField: "editDate",
        class: "text-left",
        visible: true,
        callback: value => {
          let tmp =  GetDateTimeFormat(value,"DDMMYYHHMM");                    
          return tmp ? tmp : ""; 
        }
        },

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
  validations: {
    form: {
      code: { required, minLength: minLength(1) },
      
    }
  },
  methods: {
    Search(e) {
       this.QueryData();
/*       this.iframe.loaded = false;
      let path =  "https://localhost:44329/v1/MsDrawingPath/DownloadFile";

    //  var input = event.target;
    // console.log(event.target);

   //var file = new File(path);

   let blob = null;
      blob = new Blob([path], { type: 'application/pdf' });
  var url = URL.createObjectURL(blob);

  let reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
     reader.readAsDataURL(file);
*/

    },
    QueryData(){
      API.MsDrawingPathSearch({
        data:{ drawingCd :this.txtSearch.trim() },              
        callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
              AlertMessage("error", 'ไม่พบข้อมูลแบบการผลิต');
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
    //  console.log(this.objSelect);
      this.iframe.loaded = false;
     // let path =  "https://localhost:44329/v1/MsDrawingPath/GetFile";

    //  var input = event.target;
    // console.log(event.target);

   //var file = new File(path);

 //  let blob = null;
//      blob = new Blob([path], { type: 'application/pdf' });
//  var url = URL.createObjectURL(blob);
/*
  let xhr = createCORSRequest('GET', path);


  this.$http.get(path,
      {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
            'Content-Type': 'application/pdf',
            'Accept': 'application/pdf'
          }
        }
        ).then(function (response) {
          // Success
        }, function (response) {
          // Error
        })
*/
/*
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,application/pdf');
xhr.setRequestHeader('Access-Control-Allow-Credentials', true); 
xhr.open('GET', path);

 
xhr.responseType = 'application/pdf';

 xhr.send();
  */


    let reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
     reader.readAsDataURL(file);


    
      
   },

   load(){
    this.iframe.loaded = true;
   },
    



  }
 

};
</script>