<template>
  <div class="animated fadeIn"> 
  
    <b-form  @submit.prevent="Search">
        <!--<b-card class="mt-1" >  </b-card>-->      
    
    <span>  
      
      <label><b>ใบสั่งผลิต : </b></label>
      <label><span>{{dataHead.WorkOrderDesc}}</span></label>
      
     
    </span>  

    <span>    
     
    <b-input-group>
    <b-form-input
      id="OrderNO"
      v-model="WorkOrderID"           
      placeholder="Enter"
      @keydown.enter ="Search" 
      @keydown.tab ="Search" 
    ></b-form-input>
       <b-button variant="outline-primary"  v-on:click="onBarcode"   >
       <i class="fa fa-barcode"></i>
       </b-button>
     <b-button variant="outline-primary" type="submit">{{$t('dic.search')}}</b-button>
 
      <b-button variant="outline-primary"  v-on:click="setForm"   >
          <i class="fa fa-undo"></i>
          
      </b-button>
    
     
         
    </b-input-group>

    </span>   

  

 

 <div class="card">
  <div class="card-header">
    
      <div  v-on:click="seen = !seen" class="control">
          <b>โครงการ : </b><font color="blue"><span>{{dataHead.mchProjectID}}  {{dataHead.mchProjectNm}}</span></font>
      </div>
     
     
  </div>
  <div class="card-body" v-if="seen" > 
        
    <p class="card-text">
        <b>ลูกค้า : </b> <font color="blue"><span>{{dataHead.cuscod}} {{dataHead.cusName}}</span></font> &ensp;   
      <b>รหัสแบบ : </b> <font color="blue"><span>{{dataHead.drawingCd}}</span></font> &ensp;   
      <b>จน. ชิ้นงาน : </b><font color="blue"><span>{{dataHead.qtyAmt}}</span></font> &ensp;    
        
      <b>ประเภทงาน : </b>  <font color="blue"><span>{{dataHead.jobTypeCd}}  {{dataHead.jobTypeNm}}</span></font> &ensp;
      <b>ความเร่งด่วน : </b> <font color="blue"><span>{{dataHead.JobPriorityCd}}  {{dataHead.jobPriorityNm}}</span></font> &ensp;
      <b>สถานะใบสั่ง : </b>   <font color="blue"><span>{{dataHead.workOrderStatus}}</span></font> &ensp;      
      <b>สถานีปลายทาง : </b> <font color="blue"><span>{{dataHead.MchProjectID}}</span></font> &ensp;<br>
      <b>รายละเอียด : </b><font color="blue"><span>{{dataHead.workOrderID}}&ensp; : &ensp;{{dataHead.workOrderDesc}}</span></font> &ensp; 
   
    </p>
<!--
    <div>
      
    <table class="table table-striped table-bordered table-responsive table-hover ">
      <tr>
         
        <th style="width:50px">ป/ภ</th> 
        <th style="width:120px">รหัสสินค้า</th>
        <th style="width:180px">รายการ</th>
        <th style="width:75px">ขนาด1</th>
        <th style="width:80px">ขนาด2</th>
        <th style="width:80px">หน่วยนับ</th>
        <th style="width:80px">จน.แบบ</th>
        <th style="width:80px">รวม</th>
      </tr>

      
       
      <tr v-for="item in dataItems" :key="item.itemCode" >
        
        <td style="width:60px">{{item.matType}}</td> 
        <td style="width:100px">{{item.itemCode}}</td>
        <td style="width:255px">{{item.itemName}}</td>
        <td style="width:80px">{{item.matSize1}}</td>
        <td style="width:80px">{{item.matSize2}}</td>
        <td style="width:80px">{{item.matUnitCd}}</td>
        <td style="width:80px">{{item.matQty}}</td>
        <td style="width:80px">{{item.sumQty}}</td>  
      </tr>

      

       
    </table> 
  </div>
  -->

            	 		

   <!-- <a href="#" class="btn btn-primary" v-o>Go somewhere</a>-->
  </div>
  
</div>   

<gridmodify 
           ref="griditems"
           :title="'แสดงรายการสินค้า'"
          :fields="fieldItems"
          :name="name"
          :btnGrid="false"
          :btnAdd="false"
          :btnClone="false"
          :btnView="false"
          :btnEdit="false"
          :btnDelete="false"         
          :o_col_checkbox="false"
          :o_col_select="false"
           
          :trackBy="'itemCode'"
          :data="dataItems"
        
           
    >
    </gridmodify>
 
    <gridmodify ref="gridd"
          :title="'แสดงสถานะใบสั่งผลิต'"
          :fields="fieldDetail"
          :name="name"
          :btnGrid="false"
          :btnAdd="false"
          :btnClone="false"
          :btnView="false"
          :btnEdit="false"
          :btnDelete="false"         
          :o_col_checkbox="false"
          :o_col_select="false"
           
          :trackBy="'seqNo'"
       
           
          
          :data="dataDetail"
        
          @grid:btnSelect="onGridClick"
    >
    </gridmodify>
 
    <grid ref="gridl"
          :title="'แสดงข้อมูลกลุ่มเครื่องจักร มตฐ.'"
          :fields="fieldLast"
          :name="name"
          :btnGrid="false"
          :btnAdd="false"
          :btnClone="false"
          :btnView="false"
          :btnEdit="false"
          :btnDelete="false"         
          :o_col_checkbox="false"
          :data="dataLast"
          @grid:btnClick="OnClick"
          
    >
    </grid>
   

    </b-form>
   
  

    <b-modal
          id="livestream_scanner"
          v-model="modal"
          :title="'Barcode Scanner' + ' : ' + 'ใบสั่งผลิต'"
          :header-bg-variant="config"
          no-close-on-backdrop
          :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
          :cancel-title="$t('dic.cancel')"
          centered
          :ok-only="true"             
          :ok-variant="config"
          :ok-disabled="false"
          @ok="closeBarcode"
          
          
        >
      <template v-if="mode != 'Delete'">
        <b-form-group
                  
                  label-for="code"
         
                 :state="$v.form.code.required ? !$v.form.code.$invalid : null"
        >
          <b-form-input
                     id="barcode"
                     type="text"                     
                     trim                                     
                     autocomplete="off"
                     v-upper   
                     v-model="form.code"                   
                    >
          </b-form-input>
          <StreamBarcodeReader @decode="onDecode">
          </StreamBarcodeReader>  
        </b-form-group>
      </template>
      <template v-else>
                <delete-detail :msg="errMsg"></delete-detail>
      </template>
    </b-modal>

    
  </div>
</template>

<script>
import Vue from 'vue'
 
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate, GetDateTimeFormat  } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

import 'webrtc-adapter';

 
/*  
&thinsp;Thin space<br> 1
&ensp;En space<br> 2
&emsp;Em space<br> 4
 */
export default {
  
  i18n: {
    messages: {
      en: { dic: { codevalid: "This is a required field and must have {0} characters." } },
      th: { dic: { codevalid: "จำเป็นต้องมี {0} ตัวอักษร" } }    

    },
    sharedMessages: dic
  },
  name: "followsworkorder",
  
  
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
      
            

      name:"rptfollowsworkorder",
      WorkOrderID:"",
      selected_save: 'A',
        options_save: [
          { text: 'บันทึกผลิตเสร็จ', value: 'A' },
          { text: 'หยุดชั่วคราวทั้ง คนและเครื่อง', value: 'B' },
          { text: 'หยุดชั่วคราว เฉพาะคน', value: 'C' }
        ],
      selected_search: 'A',
        options_search: [
          { text: 'แสดงเวลากลุ่มเครื่องจักร', value: 'A' },
          { text: 'แสดงเวลาตามพนักงาน', value: 'B' },
         
        ],
      workOrderStatus : [
          { text: "ยกเลิก", value: "X" },
          { text: "รอปิด", value: "C" },
          { text: "รอย้าย", value: "M" },
          { text: "เรียบร้อย", value: "P" },
          { text: "ปิดใบสั่ง", value: "F" },
          { text: "รอปิด นง.สุดท้าย", value: "L" },
          { text: "อยู่ นง.สุดท้าย", value: "E" }
      ],
      form: {
        code:"",
        MacGrp: "",
        MacGrpDec: "",
        EmpCode: "",
        EmpDesc: "",
        OrderNO: "",
        OrderDesc: "",
        RecvMacGrp: "",
        RecvMacGrpDesc : ""
      },
           
        status: { lists: status, current: status.filter(v => {return v.value != 'C' }) , selected: [status[0]] },
       fieldItems: [
                {
                name: "matType",
                title: "ป/ภ",
                sortField: "matType",
                class: "text-center",
                visible: true
                },

                {
                name: "itemCode",
                title: "รหัสสินค้า",
                sortField: "itemCode",
                class: "text-center",
                visible: true
                },
                {
                name: "itemName",
                title: "รายการ",
                sortField: "itemName",
                class: "text-center",
                visible: true
                },
                {
                name: "matSize1",
                title: "ขนาด1",
                sortField: "matSize1",
                class: "text-center",
                visible: true
                },
                {
                name: "matSize2",
                title: "ขนาด2",
                sortField: "matSize2",
                class: "text-center",
                visible: true
                },

                {
                name: "matUnitCd",
                title: "หน่วยนับ",
                sortField: "matUnitCd",
                class: "text-center",
                visible: true
                },

                {
                name: "matQty",
                title: "จน.แบบ",
                sortField: "matQty",
                class: "text-center",
                visible: true
                },
                {
                name: "sumQty",
                title: "รวม",
                sortField: "sumQty",
                class: "text-center",
                visible: true
                },
                ],
      fieldDetail: [
              
                {
                name: "seqNo",
                title: "no",
                sortField: "seqNo",
                class: "text-center",
                visible: true
                },
                {
                name: "workOrderStatus",
                title: "สถานะ",
            //    sortField: "workOrderStatus",
                class: "text-left",
                callback: value => {
                    let tmp = {};
                    for (let i in this.workOrderStatus) {
                      if (this.workOrderStatus[i].value == value)
                      {
                        tmp = this.workOrderStatus[i];
                        break;
                      }
                    }
                    return tmp ? tmp.text : "";
                },
                visible: true
                }, 
                {
                name: "workStationGrp",
                title: "รหัสกลุ่ม",
                sortField: "workStationGrp",
                class: "text-center",
                visible: true,
               
                },
                {
                name: "workStationGrpNm",
                title: "ชื่อกลุ่ม คจ.ผลิต",
                sortField: "workStationGrpNm",
                class: "text-center",
                visible: true
                },
                {
                name: "zWorkStationGrp_Next",
                title: "กลุ่ม คจ.ที่รับ",
                sortField: "zWorkStationGrp_Next",
                class: "text-center",
                visible: true
                },
                
                {
                name: "startTime",
                title: "เวลาเปิด",
                sortField: "startTime",
                class: "text-center",
                visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYHHMM");
                   
                    return tmp ? tmp  : "";
                   }
                },
                {
                name: "endTime",
                title: "เวลาปิด",
                sortField: "endTime",
                class: "text-center",
                visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYHHMM");
                    
                    return tmp ? tmp  : "";
                   }
                },
                {
                name: "noOfMinStd",
                title: "เวลา มตฐ.",
                sortField: "noOfMinStd",
                class: "text-center",
                visible: true
                },
                {
                name: "noOfMinsAct",
                title: "เวลาใช้จริง",
                sortField: "noOfMinsAct",
                class: "text-center",
                visible: true
                },
                {
                name: "zDiffTime",
                title: "เวลาต่าง",
                sortField: "zDiffTime",
                class: "text-center",
                visible: true
                },
                
                {
                name: "moveTime",
                title: "วันเวลาย้าย",
                sortField: "moveTime",
                class: "text-center",
                visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYHHMM");
                    
                    return tmp ? tmp  : "";
                   }
                },
                {
                name: "moveEmpNm",
                title: "ผู้ยิงย้าย",
                sortField: "moveEmpNm",
                class: "text-center",
                visible: true,
               
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
                }
                },
               
                
            ],
      fieldLast: [
                {
                name: "seqno",
                title: "No",
                sortField: "seqno",
                class: "text-center",
                visible: true
                },
                 {
                name: "workstationgrpcd",
                title: "รหัสกลุ่ม",
                sortField: "workstationgrpcd",
                class: "text-center",
                visible: true
                },
                 {
                name: "workstationgrpnm",
                title: "ชื่อกลุ่ม คจ.ผลิต",
                sortField: "workstationgrpnm",
                class: "text-center",
                visible: true
                },
                 {
                name: "setupTime",
                title: "เวลา Set ค.(นาที)",
                sortField: "setupTime",
                class: "text-center",
                visible: true
                },
                 {
                name: "noofmins",
                title: "เวลา ผลิต(น./ชิ้น) (นาที)",
                sortField: "noofmins",
                class: "text-center",
                visible: true
                },
                 {
                name: "noOfMinStd",
                title: "เวลา รวม (Set ค.+(ผลิต*ชิ้น))",
                sortField: "noOfMinStd",
                class: "text-center",
                visible: true
                },
                
                 
                
            ],
      data: [],
      saveData: [],
      dataHead: {
              WorkOrderDesc:"",
              MchProjectID:"",
              MchProjectNm:"",
              DrawingCd:"",
              Cuscod:"",
              CusName:"",
              JobTypeCd:"",
              JobTypeNm:"",
              JobPriorityCd:"",
              JobPriorityNm:"",
              WorkOrderStatus:"",
              QTYAmt:"0",              
              WorkStationGrpNm:"",
            },
      dataItems: [],
      dataDetail: [],
      dataLast: [],
  
      rptFollowsWorkOrder:[],

       readerSize: {
          width: 240,
          height: 240
        },
        aspectRatio: { min: 1, max: 2 },
        detecteds: [],
       
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
   onClick(e){
      console.log(e);
   },
   onGridClick(mode, data, evt) {
    
     this.mode = mode;
     this.saveData = ObjCopy(data);
      console.log(mode);

       if (mode == "Add") {
        ObjResetValue(this.form);
        this.form.status = "A";
        this.saveData.push(this.form);
      }
   },
   
  onDecode (result) {

    let _result="";
   

    try {
          _result = result;
    } catch (err) {
        console.error(err);
    }

    if (_result.trim() != this.form.code.trim())
    {
         this.form.code =_result.trim(); 

         API.RptFollowsWorkOrderHeadReport({
              data:{ MchProjectID :"",WorkOrderID :this.form.code.trim()},              
                callblack: res => {                 
                  res.forEach(x => {

                    this.dataHead  =  x;                   
                    console.log(this.dataHead);
                  }); 

                  if (res.length > 0) 
                  {
                    this.WorkOrderID = this.form.code.trim(); 
                    
                    API.RptFollowsWorkOrderDetailReport({
                      data:{ MchProjectID :"",WorkOrderID :this.WorkOrderID},              
                        callblack: res => {

                         

                          this.dataDetail =  res ;

                        
                             console.log(this.dataDetail);
                      }
                    });

                    API.RptFollowsWorkOrderLastReport({
                      data:{ MchProjectID :"",WorkOrderID :this.WorkOrderID},              
                        callblack: res => {
                          this.dataLast =  res ;
                            console.log(this.dataLast);
                      }
                    });
                    this.form.code = ""; 
                    this.modal = false;
                  } else{
                      this.modal = true;
                      this.form.code = "";
                  }      
              }
            });
    }
    console.log(result);
  },
  
    Search(e) {
       let values =this.WorkOrderID.trim() 
      values = values.toUpperCase() ;
      this.WorkOrderID = values.toUpperCase() ;

       if (this.WorkOrderID.trim() !="")  
       {
            API.RptFollowsWorkOrderHeadReport({
              data:{ MchProjectID :"",WorkOrderID :this.WorkOrderID},              
                callblack: res => {                 
                  res.forEach(x => {
                    this.dataHead  =  x;
                    
                  // console.log(this.dataHead);
                  }); 
              }
            });

          
          API.ViewWorkOrderDGetData({
              data:{  WorkOrderID :this.WorkOrderID},              
                callblack: res => {
                   res.forEach(x => {
                           x.status = "A";
                           });
                   this.dataItems =  res ;
                    // console.log(this.dataItems);
              }
            });

            API.RptFollowsWorkOrderDetailReport({
              data:{ MchProjectID :"",WorkOrderID :this.WorkOrderID},              
                callblack: res => {
                   res.forEach(x => {
                           x.status = "A";
                           });
                   this.dataDetail =  res ;
                    // console.log(this.dataDetail);
              }
            });

            API.RptFollowsWorkOrderLastReport({
              data:{ MchProjectID :"",WorkOrderID :this.WorkOrderID},              
                callblack: res => {
                   this.dataLast =  res ;
                    // console.log(this.dataLast);
              }
            });
          
          

          } else{
            this.WorkOrderID ="";           
            this.dataHead    = [];
            this.dataDetail  = [];
            this.dataItems   = [];
            this.dataLast    = [];
          }




    },
    OnClick(e){

    },
    formatDate(date) {
        var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
        ];
  
        var monthNum = [
        "01", "02", "03",
        "04", "05", "06", "07",
        "08", "09", "10",
        "11", "11"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + '/' + monthNum[monthIndex] + '/' + year;
    },
     

    timer() {
            const self = this;
            let t = new Date();

            

            let h = self.zeroPadding(t.getHours(), 2);
            let m = self.zeroPadding(t.getMinutes(), 2);
            let s = self.zeroPadding(t.getSeconds(), 2); 
 
            
            self.time = h + " : " + m + " : " + s;
            
    },
    zeroPadding (num, digit) {
            let zero = '';
            for (let i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
    },
    
    onBarcode(e){
        this.mode = "Add"; 
        this.modal = true;
    },
    closeBarcode(e){
        this.mode ="";
        this.modal = false;
    },
    setForm(e){
            this.WorkOrderID ="";           
            this.dataHead    = [];
            this.dataDetail  = [];
            this.dataItems   = [];
            this.dataLast    = [];
    }


    


  },
  validations: {
    form: {
      code: { required, minLength: minLength(1) },
      
    }
  }
};
</script>

<style>
hr {
  /*border: 1px solid #f1f1f1;*/
  margin-bottom: 10px;
}

label{
  margin-bottom: 0px;
}
.input-group{
height: 48px;
}

.card-header{
   padding: 0.25rem 0.25rem;
}
.card-body{
   padding: 0.25rem 0.25rem;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 1px solid #ccc;
  background: #f1f1f1; 
  
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}
button{
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 1px solid #ccc;
  
  
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;  
}
canvas.drawing, canvas.drawingBuffer {position: absolute; left: 0; top: 0;}
</style>