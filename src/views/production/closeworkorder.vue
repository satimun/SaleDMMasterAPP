<template>
  <div class="animated fadeIn">
    <b-form  @submit="onSubmit" >
        <!--<b-card class="mt-1" >  </b-card>-->
 
    <label margin="0 8px;"><b>วันที่ : {{formatDate(formdate)}} &nbsp;&nbsp;&nbsp;&nbsp;เวลา : {{time}}</b></label>
 
       

    <hr>  
    <b-form-radio-group 
      v-model="selected_save"
      :options="options_save"
      name="radio-save"
    ></b-form-radio-group>
     
    <hr>
   
    <span>  
      <label><b>กลุ่มเครื่องจักร : </b>&nbsp;</label>
       <label><font color="blue">{{objMacGrp.workStationGrpNm}}</font ></label>
    </span>
    
    
    <b-input-group> 
    <b-form-input
      id="MacGrp"
      v-model="form.MacGrp" 
      ref="MacGrp"  
      autocomplete="off"        
      placeholder="Enter"
      v-upper
      autofocus
        @keydown.enter ="chkMacGrp" 
      @keydown.tab ="chkMacGrp" 
      
    ></b-form-input>  
       <b-button variant="outline-primary"  v-on:click="onStationScanner"   >
       <i class="fa fa-barcode"></i>
       </b-button>
   </b-input-group>   

    <span>  
      <label><b>พนักงาน : </b>&nbsp;</label>
       <label><font color="blue">{{objEmp.titleName}} {{objEmp.firstName}} {{objEmp.lastName}}</font></label>
    </span> 

    
    <b-input-group>   
    <b-form-input
      id="EmpCode"
      ref="EmpCode"
      v-model="form.EmpCode" 
      autocomplete="off"
      v-upper          
      placeholder="Enter"
      @keydown.enter ="chkEmpCode" 
      @keydown.tab ="chkEmpCode" 
      
    ></b-form-input>  
       <b-button variant="outline-primary"  v-on:click="onEmpcodeScanner"   >
       <i class="fa fa-barcode"></i>
       </b-button>
    </b-input-group>  

    <span>  
      <label><b>ใบสั่งผลิต : </b>&nbsp;</label>
      <label><font color="blue">{{objOrder.workOrderDesc}}</font></label>
    </span>  

    <b-input-group>   
      <b-form-input
      id="OrderNO"
      ref="OrderNo"
      v-model="form.OrderNO"   
      autocomplete="off"        
      placeholder="Enter"
      v-upper
      @keydown.enter ="chkOrderNo" 
      @keydown.tab ="chkOrderNo" 
      >
      </b-form-input>
       <b-button variant="outline-primary"  v-on:click="onOrdernoScanner"   >
       <i class="fa fa-barcode"></i>
       </b-button>
     </b-input-group>  
    
     <label><b>ผลการตรวจสอบ : </b>&nbsp;<font color="blue"><span>{{formsave.status}}</span></font></label>

    

 
    <!--
    <div class="card">
      <div class="card-header">
          <div   class="control">
              <b>แสดงข้อมูล : </b><font color="blue"><span>{{status}} </span></font>
          </div>
      </div>
      <div class="card-body"   > 
            
        <p class="card-text">
          <b>ใบสั่งผลิต : </b> <font color="blue"><span> {{objMtWorkOrderSeqEmp.workOrderId}}</span></font> <br> 
          <b>ชื่อใบสั่งผลิต : </b> <font color="blue"><span> {{objMtWorkOrderSeqEmp.workOrderDesc}}</span></font>  <br>   
          <b>ลูกค้า :</b> <font color="blue"><span>{{objMtWorkOrderSeqEmp.workStationGrpCdDesc_FR}} </span></font>  <br>   
          <b>กลุ่มเครื่องจักร : </b>  <font color="blue"><span>{{objMtWorkOrderSeqEmp.endTime}} </span></font>  <br>
          <b>พนักงาน : </b> <font color="blue"><span> {{objMtWorkOrderSeqEmp.workStationGrpCdDesc_STD}}</span></font>  <br>
          <b>วันเวลา เริ่ม : </b>   <font color="blue"><span> {{objMtWorkOrderSeqEmp.workStationGrpCdDesc_TO}}</span></font>    &ensp; &ensp;     
          <b> ปิด : </b> <font color="blue"><span>{{objMtWorkOrderSeqEmp.employeeId}} {{objMtWorkOrderSeqEmp.employeeName}} </span></font>  <br>
          <b>เวลา มตฐ. : </b> <font color="blue"><span>{{objMtWorkOrderSeqEmp.moveTime}} </span></font>&ensp;&ensp;  
          <b> จริง. : </b> <font color="blue"><span>{{objMtWorkOrderSeqEmp.moveTime}} </span></font>&ensp;&ensp; 
          <b> ผลต่าง : </b> <font color="blue"><span>{{objMtWorkOrderSeqEmp.moveTime}} </span></font>&ensp;&ensp;  
        </p>


                      

      
      </div>
    </div>
    -->


       <!--
      <b-form-radio-group
        v-model="selected_search"
        :options="options_search"
        name="radio-search"
      ></b-form-radio-group>
     -->
    
    <grid
        :title="'แสดงข้อมูลตามกลุ่มเครื่องจักร'"
        :fields="fieldsCloseMch"
        :name="'gridMch'"
        :btnGrid="false"
        :btnClone="false"
        :btnAdd="false"
        :btnView="false"
        :btnEdit="false"
        :btnDelete="false"
        :data="dataCloseMch"
        @grid:btnClick="OnClick"
    >
    </grid>   
  
 
     
    <grid
        :title="'แสดงข้อมูลตามพนักงาน'" 
        :fields="fieldsCloseEmp"
        :name="'gridEmp'"
        :btnGrid="false"
        :btnClone="false"
        :btnAdd="false"
        :btnView="false"
        :btnEdit="false"
        :btnDelete="false"
        :data="dataCloseEmp"
        @grid:btnClick="OnClick"
    >
    </grid>   
  
  
      
     
    </b-form>

    <b-modal
          v-model="modalConfirm"
          :title="$t('dic.confirm')"
          :header-bg-variant="config"
          no-close-on-backdrop
          :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
          :cancel-title="$t('dic.cancel')"
          centered
          :ok-only="true"
          :ok-variant="config"
          :ok-disabled="false"
          @before-close="okConfirm"
          @ok="okConfirm"
        >
        <template v-if="mode != 'Delete'">
        <b-form-group                  
                  label-for="username"                
                 :state="$v.formConfirm.confirm.required ? !$v.formConfirm.confirm.$invalid : null"
                >
             
                    <p><b>{{formConfirm.confirmName}}</b><br>       
                    <b>เลือก&nbsp;:&nbsp;{{formConfirm.confirmChoose1}}  </b><br>      
                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{formConfirm.confirmChoose2}}  </b><br>       
                    </p>

                    <div  class="input-group mb-3">
                    <b-form-input
                     id="confirmtxt"
                     type="text"                     
                     trim                      
                     autocomplete="off"
                     v-upper
                     v-model="formConfirm.confirm"
                     @keydown.enter ="okConfirm" 
                     @keydown.tab ="okConfirm" 
                    >
                    </b-form-input>
                    <div class="input-group-append">
                    <b-button variant="outline-primary"  v-on:click="onScanConfirm"   >
                      <i class="fa fa-barcode"></i>
                    </b-button>  
                    </div>
                    </div>

                    <div  v-if="modal_confirm_scanner">
                    <StreamBarcodeReader @decode="onDecodeConfirm">
                    </StreamBarcodeReader>
                    </div >
                </b-form-group>

          
        </template>

        <template v-else>
            <delete-detail :msg="errMsg"></delete-detail>
        </template>
    </b-modal>

    <b-modal
          v-model="modalConfirmClose"
          :title="$t('dic.approve')+' : ปิดใบสั่งผลิต'"
          :header-bg-variant="config"
          no-close-on-backdrop
          :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
          :cancel-title="$t('dic.cancel')"
          centered
          :shown="setFocus"
          :ok-only="true"  
          :ok-variant="config"
          :ok-disabled="false"
          @before-close="okConfirmClose"
           @ok="okConfirmClose"
        >
        <template v-if="mode != 'Delete'">
        <b-form-group                  
                  label-for="username"                
                 :state="$v.formConfirmClose.confirm.required ? !$v.formConfirmClose.confirm.$invalid : null"
                >
             
                    <p><b>{{formConfirmClose.confirmName}}</b><br>       
                    <b>เลือก&nbsp;:&nbsp;{{formConfirmClose.confirmChoose1}}  </b><br>      
                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{formConfirmClose.confirmChoose2}}  </b><br>       
                    </p>
                    <div  class="input-group mb-3">
                    <b-form-input
                     id="confirmsClose"
                     type="text"                     
                     trim      
                     
                     
                     autocomplete="off"
                     v-upper
                     v-model="formConfirmClose.confirm"
                      @keydown.enter ="okConfirmClose" 
                      @keydown.tab   ="okConfirmClose" 
                    >
                    </b-form-input>
                    <div class="input-group-append">
                    <b-button variant="outline-primary"  v-on:click="onScanConfirmClose"   >
                      <i class="fa fa-barcode"></i>
                    </b-button>  
                    </div>
                    </div>

                    <div  v-if="modal_confirmclose_scanner">
                    <StreamBarcodeReader @decode="onDecodeConfirmClose">
                    </StreamBarcodeReader>
                    </div >

                </b-form-group>

          
        </template>

        <template v-else>
            <delete-detail :msg="errMsg"></delete-detail>
        </template>
    </b-modal>

    <b-modal
          v-model="modalAddUser"
          :title="$t('dic.add')+' : พนักงาน'"
          :header-bg-variant="config"
          no-close-on-backdrop
          :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
          :cancel-title="$t('dic.cancel')"
          centered
           
          :ok-variant="config"
          :ok-disabled="false"
           @before-close="okAddEmp"
           @ok="okAddEmp"     

        >
        <template v-if="mode != 'Delete'">
        <b-form-group                  
                  label-for="usercode"                
                 :state="$v.formAddUser.addflag.required ? !$v.formAddUser.addflag.$invalid : null"
                >
             
                     <span>  
                      <label><b>พนักงาน : </b>&ensp;  </label>
                      <label><font color="blue">{{form.empcode_scanner_add}} </font></label>
                    </span>

                    <div  v-if="modal_empcode_scanner_add">
                    <StreamBarcodeReader @decode="onDecodeEmpcodeAdd">
                    </StreamBarcodeReader>
                    </div >

                    <div  class="input-group mb-3">
                    <b-form-input
                     id="usercode"
                     type="text"                     
                     trim    
                     autocomplete="off"
                     v-upper
                     v-model="formAddUser.usercode"
                      @keydown.enter ="pushAddEmp" 
                      @keydown.tab   ="pushAddEmp"
                    >
                    </b-form-input>
                    

                    <div class="input-group-append">
                    <b-button variant="outline-primary"  v-on:click="onEmpcodeAdd"   >
                      <i class="fa fa-barcode"></i>
                    </b-button>  
                    </div>

                    </div>

                    <div class="card">
                    <div class="card-header">
                        <div   class="control">
                            <b>แสดงข้อมูล : </b><font color="blue"><span>{{form.status}} </span></font>
                        </div>
                    </div>
                    <div class="card-body"  >                     
  
                      
                      <ul id="userview">
                        <li  v-for="user in formAddUser.users"  :key="user.usercode">
                          <font color="blue"><span> {{user.usercode}}</span></font>  :<b>{{user.username}} </b>
                        </li>
                      </ul>
                    <!-- <a href="#" class="btn btn-primary" v-o>Go somewhere</a>-->
                    </div>
                  </div>
                  
                </b-form-group>

          
        </template>

        <template v-else>
            <delete-detail :msg="errMsg"></delete-detail>
        </template>
    </b-modal>

    <b-modal
          id="Empcode_scanner"
          v-model="modal_empcode_scanner"
          :title="'Barcode Scanner' + ' : ' + 'พนักงาน'"
          :header-bg-variant="config"
          no-close-on-backdrop
          :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
          :cancel-title="$t('dic.cancel')"
          centered
          
          :ok-only="true"  
          :ok-variant="config"
          :ok-disabled="true"
          @ok="onDecodeEmpcode"
          
          
        >
      <template v-if="mode != 'Delete'">
        <b-form-group
                  
                  label-for="empcode_scanner"
         
                 :state="true"
        >
          <b-form-input
                     id="empcode_scanner"
                     type="text"                     
                     trim                                     
                     autocomplete="off"
                     v-upper   
                     v-model="form.empcode_scanner"                   
                    >
          </b-form-input>
          <StreamBarcodeReader @decode="onDecodeEmpcode">
          </StreamBarcodeReader>  
        </b-form-group>
      </template>
      <template v-else>
                <delete-detail :msg="errMsg"></delete-detail>
      </template>
    </b-modal>


    <b-modal
          id="station_scanner"
          v-model="modal_station_scanner"
          :title="'Barcode Scanner' + ' : ' + 'กลุ่มเครื่องจักร'"
          :header-bg-variant="config"
          no-close-on-backdrop
          :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
          :cancel-title="$t('dic.cancel')"
          centered
          
          :ok-only="true"  
          :ok-variant="config"
          :ok-disabled="true"
          @ok="onDecodeStation"
          
          
        >
      <template v-if="mode != 'Delete'">
        <b-form-group                  
                  label-for="station_scanner"         
                 :state="true"
        >
          <b-form-input
                     id="station_scanner"
                     type="text"                     
                     trim                                     
                     autocomplete="off"
                     v-upper   
                     v-model="form.station_scanner"                   
                    >
          </b-form-input>
          <StreamBarcodeReader @decode="onDecodeStation">
          </StreamBarcodeReader>  
        </b-form-group>
      </template>
      <template v-else>
                <delete-detail :msg="errMsg"></delete-detail>
      </template>
    </b-modal>


    <b-modal
          id="orderno_scanner"
          v-model="modal_orderno_scanner"
          :title="'Barcode Scanner'+ ' : ' + 'ใบสั่งผลิต'"
          :header-bg-variant="config"
          no-close-on-backdrop
          :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
          :cancel-title="$t('dic.cancel')"
          centered
          
          :ok-only="true"  
          :ok-variant="config"
          :ok-disabled="true"
          @ok="onDecodeOrderno"
          
          
        >
      <template v-if="mode != 'Delete'">
        <b-form-group                  
                  label-for="orderno_scanner"         
                 :state="true"
        >
          <b-form-input
                     id="orderno_scanner"
                     type="text"                     
                     trim                                     
                     autocomplete="off"
                     v-upper   
                     v-model="form.orderno_scanner"                   
                    >
          </b-form-input>
          <StreamBarcodeReader @decode="onDecodeOrderno">
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
 
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate,GetDateTimeFormat } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

export default {
  name: "closeworkorder",
  
  
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
      token: null,
      formdate:new Date(),  
      chk:"",
      formtime:'',  
      time: '',
      date: '',
      modalConfirm: false,
      modalConfirmClose: false,
      modalAddUser: false,
      modal_empcode_scanner: false,
      modal_empcode_scanner_add: false,
      modal_orderno_scanner: false,
      modal_station_scanner: false,
      modal_confirm_scanner: false,
      modal_confirmclose_scanner: false,

      mode: "Add",
      errMsg: "",
     
      selected_save: '1',
        options_save: [
          { text: 'บันทึกผลิตเสร็จ', value: '1' },
          { text: 'หยุดชั่วคราวทั้ง คนและเครื่อง', value: '2' },
          { text: 'หยุดชั่วคราว เฉพาะคน', value: '3' }
        ],
      selected_search: '1',
        options_search: [
          { text: 'แสดงเวลากลุ่มเครื่องจักร', value: '1' },
          { text: 'แสดงเวลาตามพนักงาน' , value: '2' },
         
        ],
      form: {
        MacGrp: "",
        MacGrpDec: "",
        EmpCode: "",
        EmpDesc: "",
        OrderNO: "",
        OrderDesc: "",
        confirmAddUser: "N",
        confirmClose:"",
        user_Id :"",
        empcode_scanner:"",
        orderno_scanner:"",
        station_scanner:"",
        empcode_scanner_add:"",

         
      },
      formsave:{
        EmployeeId:"",
        workOrderID: "",
        workStationGrpCd: "",
        addEmployeeId: "",
        user_Id: "",
        userapp: "",
        closeChoose: "",
        endSequence: "",
        dateSelect: "",
        timeSelect: "",
        dateSelectFull: "",
        status:"",
      },
    
      formConfirm: {
        confirmCode:"01",
        confirmName:"ต้องการบันทึกเพิ่มพนักงานเพิ่ม?",
        confirmChoose1:"YES : เพิ่มพนักงาน",
        confirmChoose2:"NO : ไม่เพิ่มพนักงาน",
        confirm: "",        
      },

      formConfirmClose: {
        confirmCode:"02",
        confirmName:"เป็นสถานีงานสุดท้ายของใบสั่ง",
        confirmChoose1:"YES : ยืนยันการปิดใบสั่ง",
        confirmChoose2:"No  : ยังไม่ปิดใบสั่ง",
        confirm: "",        
      },

      formAddUser: {
        addflag:"",
        usercode:"",
        users:[]
       // users:[{ usercode:"",username:""}]  
      },
      dataCloseMch:[],
      dataCloseEmp:[],
      fieldsCloseMch: [
                {
                name: "workOrderId",
                title: "ใบสั่งผลิต",
                sortField: "workOrderId",
                class: "text-center",
                visible: true
                },
                {
                name: "workOrderDesc",
                title: "รายละเอียด",
                sortField: "workOrderDesc",
                class: "",
                visible: true
                },
          

                {
                name: "customer_name",
                title: "ลูกค้า",
                sortField: "customer_name",
                class: "",
                visible: true
                },

                {
                name: "groupname",
                title: "กลุ่มเครื่องจักร",
                sortField: "groupname",
                class: "",
                visible: true
                },
                {
                name: "emp_name",
                title: "พนักงาน",
                sortField: "emp_name",
                class: "",
                visible: true
                },

                 {
                name: "startTime",
                title: "วันเวลา เริ่ม",              
                sortField: "startTime",
                class: "",
                visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYHHMM");
                    
                    return tmp ? tmp  : "";
                   }
                },
                 {
                name: "endTime",
                title: "วันเวลา ปิด ",
                sortField: "endTime",
                class: "",
                visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYHHMM");
                    
                    return tmp ? tmp  : "";
                   }
                },
                 {
                name: "stdTime",
                title: "เวลา มตฐ. (นาที)",
                sortField: "stdTime",
                class: "",
                visible: true
                },
                 {
                name: "actTime",
                title: "เวลา จริง. (นาที)",
                sortField: "ActTime",
                class: "",
                visible: true
                },
                 {
                name: "diffTime",
                title: "เวลา ผลต่าง (นาที)",
                sortField: "diffTime",
                class: "",
                visible: true
                },
            
               


                 
            ],

            fieldsCloseEmp: [
                {
                name: "workOrderId",
                title: "ใบสั่งผลิต",
                sortField: "workOrderId",
                class: "text-center",
                visible: true
                },
                {
                name: "workOrderDesc",
                title: "รายละเอียด",
                sortField: "workOrderDesc",
                class: "",
                visible: true
                },
          

                {
                name: "customer_name",
                title: "ลูกค้า",
                sortField: "customer_name",
                class: "",
                visible: true
                },

                {
                name: "groupname",
                title: "กลุ่มเครื่องจักร",
                sortField: "groupname",
                class: "",
                visible: true
                },
                {
                name: "emp_name",
                title: "พนักงาน",
                sortField: "emp_name",
                class: "",
                visible: true
                },

                 {
                name: "startTime",
                title: "วันเวลา เริ่ม",                 
                sortField: "startTime",
                class: "",
                visible: true,
                 callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYHHMM");
                    
                    return tmp ? tmp  : "";
                   }
                },
                 {
                name: "endTime",
                title: "วันเวลา ปิด ",
                sortField: "endTime",
                class: "",
                visible: true,
                 callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYHHMM");
                    
                    return tmp ? tmp  : "";
                   }
                },
                 {
                name: "stdTime",
                title: "เวลา มตฐ. (นาที)",
                sortField: "stdTime",
                class: "",
                visible: true
                },
                 {
                name: "actTime",
                title: "เวลา จริง. (นาที)",
                sortField: "ActTime",
                class: "",
                visible: true
                },
                 {
                name: "diffTime",
                title: "เวลา ผลต่าง (นาที)",
                sortField: "diffTime",
                class: "",
                visible: true
                },
            
               


                 
            ],

            data: [],
            dataEmp: [],
            objEmp:{
               employeeID : "",
               titleName : "",
               firstName : "",
               lastName: "",
            },
            dataMacGrp: [],
            objMacGrp:{
               workStationGrpCd : "",
               workStationGrpNm : "",
            },
            dataOrderH: [],
            objOrderH: {
               WorkOrderID : "",
               WorkOrderDesc : "",
               workStationGrp_STD : "",
                
            },
            objOrder:{},
            objMtWorkOrderSeqEmp:{
              appvCauseDt:"",
              appvCauseId:"",
              causeStatus: "",
              drawingCd: "",
              employeeId: "",
              employeeName: "",
              endTime: "",
              moveDate: "",
              moveTime: "",
              process_Flag:"",
              remarkCause:"",
              seqNo_NEXT: "",
              sequence: "",
              user_Id: "",
              user_date: "",
              workOrderDesc: "",
              workOrderId: "",
              workStationGrpCdDesc_FR: "",
              workStationGrpCdDesc_STD: "",
              workStationGrpCdDesc_TO: "",
              workStationGrpCd_FR: "",
              workStationGrpCd_STD: "",
              workStationGrpCd_TO: "",
              _result:{_code:"",_status:"",_message:""}
            },
            
            saveData:[]
    };
  },
  validations: {
    formConfirm: {
      confirm: {
        required
      } 
    },
    formConfirmClose: {
      confirm: {
        required
      } 
    },
    formAddUser:{
      addflag:{
        required
      }
    }
  },
  methods: {
    onEmpcodeAdd(e){
      if (this.modal_empcode_scanner_add )
      {
        this.modal_empcode_scanner_add = false;
      }else{
        this.modal_empcode_scanner_add = true;
      }
    },
    onDecodeEmpcodeAdd(result){
      let _result="";    

        try {
              _result = result;
              if (result.length > 5)
              {
              _result =  _result.substring(0,(_result.length-1));
              }

            //  console.log(_result);
        } catch (err) {
            console.error(err);
        }

        if (_result.trim() != this.form.empcode_scanner_add.trim())
        {
            this.form.empcode_scanner_add =_result.trim(); 
            this.formAddUser.usercode =this.form.empcode_scanner_add;

            let values =this.formAddUser.usercode.trim();
       values = values.toUpperCase() ;
       this.formAddUser.usercode = values.toUpperCase();

       if (values.toUpperCase() == "YES")
       {
         this.modalAddUser = false; 
       }

        if (values.toUpperCase() == "NO")
       {
          this.formAddUser.users = [];
          this.modalAddUser = false;
       }

       if(this.formAddUser.users.some(person => person.usercode === values ))
       {
         
         this.formAddUser.usercode ="";
    
       } else{
        API.rmEmployeeGetData({
              data:{ EmployeeID: values},              
                callblack: res => {  
                
                if (res.length <= 0)                            
                {   
                  AlertMessage("error", 'ไม่พบข้อมูล พนักงาน ที่ระบุ');
                  this.formAddUser.usercod ="";
                
                  return ;
                }

                let err = "";
                let _status = "";
                res.forEach((d, i) => {
                  if (d._result._status == "F")
                  {
                    _status = d._result._status
                    err = err.concat("#", (i + 1), " ", d.employeeID, d._result._message, '<br>');
                 
                  } else{
                    this.formAddUser.users.push({ usercode:values,
                                                  username:d.titleName+' '+d.firstName+' '+d.lastName }  )
                    this.formAddUser.usercode ="";
                  }
                });
                
                if (_status = 'F')
                AlertMessage(err ? "error" : "success", err);
                   

                      
              }
          });    
        

         }
        }

    },
    onEmpcodeScanner(e){
      this.modal_empcode_scanner = true;
      this.form.empcode_scanner ="";
    },
    onDecodeEmpcode(result){
        let _result="";    

        try {
              _result = result;
              _result =  _result.substring(0,(_result.length-1));

              console.log(_result);
        } catch (err) {
            console.error(err);
        }

        if (_result.trim() != this.form.empcode_scanner.trim())
        {
            this.form.empcode_scanner =_result.trim(); 

            API.rmEmployeeGetData({
              data:{ EmployeeID:  this.form.empcode_scanner},              
                callblack: res => {  
                
                if (res.length <= 0)                            
                {   
                  AlertMessage("error", 'ไม่พบข้อมูล พนักงาน ที่ระบุ');                   
                  return ;
                }

                let err = "";
                let _status = "";
                res.forEach((d, i) => {
                  if (d._result._status == "F")
                  {
                    _status = d._result._status
                    err = err.concat("#", (i + 1), " ", d.employeeID, d._result._message, '<br>');
                 
                  }
                });
                 
                if (_status == 'F')
                {
                  AlertMessage(err ? "error" : "success", err);
                  this.form.empcode_scanner ="";
                  return ;
                } 
                AlertMessage(err ? "error" : "success", err);  

                this.dataEmp= res;                    
                this.objEmp =  this.dataEmp[0]; 

                this.modal_empcode_scanner = false;   
                this.form.EmpCode = _result.trim();   
                
                this.chkEmpCode(event);
              }
        });   

        }
    },

    onStationScanner(){
      this.modal_station_scanner  = true;      
      this.form.station_scanner ="";
    },
    onDecodeStation(result){
        let _result="";    

        try {
              _result = result;
              
        } catch (err) {
            console.error(err);
        }

        if (_result.trim() != this.form.station_scanner.trim())
        {
            this.form.station_scanner =_result.trim();       

                   API.msWorkStationGrpGetData({
                        data:{ WorkStationGrpCd:this.form.station_scanner },              
                          callblack: res => {    
                             let err = "";
                             let _status = "";
                              if (res.length <= 0)                            
                              {   
                                AlertMessage("error", 'ไม่พบข้อมูล กลุ่มเครื่องจักร ที่ระบุ');
                                this.form.station_scanner ="";
                                return ;
                              }

                              AlertMessage(err ? "error" : "success", err);   

                              this.form.MacGrp =_result.trim(); 
                              this.dataMacGrp= res;                    
                              this.objMacGrp  =  res[0]; 
                              this.modal_station_scanner  = false;    
                              
                              this.chkMacGrp(event);
                             
                        }
                  });                           
             
        }
    },

    onOrdernoScanner(){
      this.modal_orderno_scanner = true;
      this.form.orderno_scanner  = "";
    },
    onDecodeOrderno(result){
        let _result="";    

        try {
              _result = result;
        } catch (err) {
            console.error(err);
        }

        if (_result.trim() != this.form.orderno_scanner.trim())
        {
            //this.form.OrderNO =_result.trim(); 
            this.form.orderno_scanner =_result.trim(); 

             API.mtWorkOrderHGetData({
              data:{ WorkOrderID:this.form.orderno_scanner,WorkOrderStatus :"O"},              
                callblack: res => {     
                    let errA = "";
                    let _statusA = ""; 
                    if (res.length <= 0)                            
                    {   
                      AlertMessage("error", 'ไม่พบข้อมูล ใบสั่งผลิต รอปิดงาน');
                      this.form.orderno_scanner ="";
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
                        this.form.orderno_scanner ="";
                        return ;
                    } 

                    AlertMessage(errA ? "error" : "success", errA);

                    this.form.OrderNO =_result.trim();               
                    this.dataOrderH = res;                    
                    this.objOrder   =  this.dataOrderH[0]; 
                    this.modal_orderno_scanner = false; 

                    this.chkOrderNo(event);
                }
          }); 
        }
    },

    chkMacGrp(e)
    {
      e.preventDefault();
      let values =this.form.MacGrp.trim() 
      values = values.toUpperCase() ;
      this.form.MacGrp = values.toUpperCase() ;
        
      // Note, you need to add a ref="search" attribute to your input.
      if (this.form.MacGrp.trim() != "")
      {  
        this.chk ="N";

        API.msWorkStationGrpGetData({
              data:{ WorkStationGrpCd:this.form.MacGrp,ExtGrp_Flag:"Y" },              
                callblack: res => {        
                  if (res.length > 0)                            
                  {
                    AlertMessage("error", 'ไม่สามารถบันทึกกลุ่มเครื่องจักรภายนอกได้');
                    this.$refs.MacGrp.focus();
                    return ;
                  }

                   API.msWorkStationGrpGetData({
                        data:{ WorkStationGrpCd:this.form.MacGrp },              
                          callblack: res => {    
                              if (res.length <= 0)                            
                              {   
                                AlertMessage("error", 'ไม่พบข้อมูล กลุ่มเครื่องจักร ที่ระบุ');
                                this.clearObjMacGrp();
                                this.$refs.MacGrp.focus();
                               return ;
                              }

                              this.dataMacGrp= res;                    
                              this.objMacGrp  =  res[0]; 

                              if (this.form.MacGrp.trim() == 'DAF00') 
                              this.form.EmpCode = this.$localStorage.get("UserCode" );
             
                             // this.$refs.EmpCode.setFocus(e);                           
                             
                             this.setFocus(e);
                              //console.log(this.objMacGrp);
                              // console.log(Object.keys(this.objMacGrp).length);
                        }
                  });                           
              }
        });       
      }
    }, 
    chkEmpCode(e)
    {      
      e.preventDefault();
      let values =this.form.EmpCode.trim() 
      values = values.toUpperCase() ;
      this.form.EmpCode = values.toUpperCase() ;
      // Note, you need to add a ref="search" attribute to your input.
      if (this.form.EmpCode.trim() != "")
      {          
        /*
         API.MtWorkOrderSequence_MchGetDataViwe({
                                  data: {
                                    workDate : "2019-11-18 ",       
                                    EmployeeId: "POOK",
                                    workStationGrpCd:"DAFW2",
                                    WorkOrderId:"620051400"
                                  }    ,              
                                    callblack: res => { 
                                      let errC = "";
                                      let _statusC = "";
                                   

                                                     
                                      this.dataCloseEmp= res; 
                                      console.log(this.dataCloseMch);
                                   }
                              });  
                              */
           
        API.rmEmployeeGetData({
              data:{ EmployeeID:  this.form.EmpCode},              
                callblack: res => {  
                
                if (res.length <= 0)                            
                {   
                  AlertMessage("error", 'ไม่พบข้อมูล พนักงาน ที่ระบุ');
                  this.ClearObjEmp();
                  //this.$refs.MacGrp.focus();
                  return ;
                }

                let err = "";
                let _status = "";
                res.forEach((d, i) => {
                  if (d._result._status == "F")
                  {
                    _status = d._result._status
                    err = err.concat("#", (i + 1), " ", d.employeeID, d._result._message, '<br>');
                 
                  }
                });
                
                if (_status == 'F')
                AlertMessage(err ? "error" : "success", err);
                    
                this.dataEmp= res;                    
                this.objEmp =  this.dataEmp[0]; 

                API.msWorkStationGrpGetData({
                    data:{ WorkStationGrpCd:this.form.MacGrp,MulEmp_flag:"Y"  },              
                          callblack: res => {    

                             // this.onConfirm(e);
                              if (res.length <= 0)                            
                              {   
                               this.setFocus(e); 
                               return ;
                              }

                              this.dataMacGrp= res;                    
                              this.objMacGrp  =  res[0]; 
                              this.onConfirm(e);

                              //this.$refs.orderNo.focus();
                              this.setFocus(e);
                              //console.log(this.objMacGrp);
                              // console.log(Object.keys(this.objMacGrp).length);
                        }
                  });      
              }
        });    
      } 
      
      
    },
    OnClick(e){},
    chkOrderNo(e)
    {
      e.preventDefault();
      let values =this.form.OrderNO.trim() 
      values = values.toUpperCase() ;
      this.form.OrderNO = values.toUpperCase() ;
      // Note, you need to add a ref="search" attribute to your input.
      if (this.form.OrderNO.trim() != "")
      { 
        this.chk ="N";        
        
        this.formsave.EmployeeId = this.form.EmpCode;                 
        this.formsave.workOrderID = this.form.OrderNO;
        this.formsave.workStationGrpCd = this.form.MacGrp;
        this.form.user_Id =  this.$localStorage.get("UserCode" );
        this.formsave.addEmployeeId = "";

        if(this.formAddUser.users.length > 0){
              this.formAddUser.users.forEach((d, i) => {
                  if (d.usercode.trim() =="")
                  {
                    this.formsave.addEmployeeId = this.formsave.addEmployeeId  + d.usercode.trim()+","
                  }
              });  
          }   

        this.formsave.user_Id = this.form.user_Id ;
        this.formsave.userapp = "";
        this.formsave.closeChoose = this.selected_save;
        this.formsave.dateSelectFull =  GetDateTimeFormat(null,'YYYYMMDD');
 
        this.formsave.endSequence = this.form.confirmClose.trim();
        this.formsave.dateSelect  = this.formdate;
        this.formsave.timeSelect  = this.time;        

        API.mtWorkOrderHGetData({
              data:{ WorkOrderID:values,WorkOrderStatus :"O"},              
                callblack: res => {     
                 let errA = "";
                let _statusA = ""; 
                    if (res.length <= 0)                            
                    {   
                      AlertMessage("error", 'ไม่พบข้อมูล ใบสั่งผลิต รอปิดงาน');
                      this.ClearObjOrder ();
                     // this.$refs.orderNo.focus();
                      return ;
                    }
                  
                    res.forEach((d, i) => {
                    if (d._result._status == "F")
                    {
                      _statusA = d._result._status
                      errA = errA.concat("#", (i + 1), " ", d.workOrderID,  " : ", d._result._message, '<br>');
                    }
                    });       
                    
                    if (_statusA == "F")
                    {
                        AlertMessage(errA ? "error" : "success", errA);
                       // this.$refs.orderNo.focus();
                        return ;
                    }     
                    this.dataOrderH= res;                    
                    this.objOrder  =  this.dataOrderH[0]; 

                  //  console.log(this.formsave);

                    API.MtWorkOrderSequence_EmpCloseOrder({
                    data: this.formsave    ,              
                          callblack: res => {    
                              let errB = "";
                              let _statusB = "";
                              let _code = "";
                             // this.onConfirm(e);
                              if (res.length <= 0)                            
                              {   
                               this.setFocus(e); 
                               return ;
                              }

                              res.forEach((d, i) => {
                              if (d._result._status == "F")
                              {
                                _statusB = d._result._status;
                                _code = d._result._code;
                                errB = errB.concat("#", (i + 1), " ", d.workOrderID,  " : ", d._result._message, '<br>');
                              }
                              });

                              if (_statusB == "F")
                              {
                                if ( _code.trim()  == "F0901")
                                {
                                 // this.$refs.orderNo.focus();
                                  this.onConfirmClose(e);
                                }else{
                                 // this.$refs.orderNo.focus();
                                  AlertMessage(errB ? "error" : "success", errB);
                                  
                                }
                                this.form.status = "ไม่ผ่าน";
                                return ;
                              }
              


                              this.saveData= res;   
                              
                              
                              API.MtWorkOrderSequence_MchGetDataViwe({
                                  data: {
                                    workDate : this.formdate,       
                                    EmployeeId:this.formsave.EmployeeId,
                                    workStationGrpCd:this.formsave.workStationGrpCd,
                                    WorkOrderId:this.formsave.workOrderID
                                  }    ,              
                                    callblack: res => { 
                                      let errC = "";
                                      let _statusC = "";
                                     res.forEach((d, i) => {
                                      if (d._result._status == "F")
                                      {
                                        _statusC = d._result._status
                                        errC = errC.concat("#", (i + 1), " ", d.workOrderID,  " : ", d._result._message, '<br>');
                                      }
                                      });

                                      if (_statusC == 'F')
                                      {
                                        AlertMessage(errC ? "error" : "success", errC);
                                          this.$refs.orderNo.focus();
                                          return ;
                                      }                  
                                      this.dataCloseMch= res; 
                                      
                                      //console.log(this.dataCloseMch);
                                   }
                              });   

                              API.MtWorkOrderSequence_EmpGetDataViwe({
                                 data: {
                                    workDate : this.formdate,       
                                    EmployeeId:this.formsave.EmployeeId,
                                    workStationGrpCd:this.formsave.workStationGrpCd,
                                    WorkOrderId:this.formsave.workOrderID
                                  }  ,              
                                    callblack: res => { 
                                    let errD = "";
                                    let _statusD = "";
                                     res.forEach((d, i) => {                                      
                                      if (d._result._status == "F")
                                      {
                                        _statusD = d._result._status;
                                        errD = errD.concat("#", (i + 1), " ", d.workOrderID,  " : ", d._result._message, '<br>');
                                      }
                                      });

                                      if (_statusD == 'F')
                                      {
                                        AlertMessage(errD ? "error" : "success", errD);
                                          this.$refs.orderNo.focus();
                                          return ;
                                      }                  
                                      this.dataCloseEmp= res; 

                                   //   console.log(this.dataCloseEmp);
                                   }
                              });
                              this.form.status = "ผ่าน";
                               this.SetForm(e);
                              
                              // console.log(Object.keys(this.objMacGrp).length);
                        }
                  });


  
                     

                   // console.log(this.dataEmp);
                   //  console.log(Object.keys(this.data).length);
              }
        });
      }




    },
    onSubmit(evt) {
      
           
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

    onScanConfirm(){

      if (this.modal_confirm_scanner )
      {
        this.modal_confirm_scanner = false;
      }else{
        this.modal_confirm_scanner = true;
      }

       
     
    },
    onDecodeConfirm(result){
      let _result="";    

        try {
              _result = result;
              if (result.length > 5)
              {
              _result =  _result.substring(0,(_result.length-1));
              }

            //  console.log(_result);
        } catch (err) {
            console.error(err);
        }
   
        let values =_result.trim();
        values = values.toUpperCase() ;
        this.formConfirm.confirm = values.toUpperCase() ;

      

        if (values  == "YES")
        {        
          this.form.confirmAddUser = "Y";
          this.formConfirm.confirm ="";
          this.modalConfirm = false;
          this.onAddEmp(e); 
        } else
        {
          this.form.confirmAddUser = "N";
          this.formConfirm.confirm ="";
          this.modalConfirm = false;
          //this.$refs.EmpCode.setFocus();
          
        }

    },
    onConfirm(e){
      
       this.modalConfirm = true;
     //  this.$refs.confirm.setFocus();
    },
    okConfirm(e){
       e.preventDefault();
       let values =this.formConfirm.confirm.trim();
       values = values.toUpperCase() ;
       this.formConfirm.confirm = values.toUpperCase() ;
       if (values  == "YES")
       {        
         this.form.confirmAddUser = "Y";
         this.formConfirm.confirm ="";
         this.modalConfirm = false;
         this.onAddEmp(e); 
       } else
       {
        this.form.confirmAddUser = "N";
        this.formConfirm.confirm ="";
        this.modalConfirm = false;
        //this.$refs.EmpCode.setFocus();
        this.setFocus(e);
       }
    },
    onConfirmClose(e){
      this.modalConfirmClose = true;
    //  this.$refs.confirmClose.setFocus();
    },

    onScanConfirmClose(){
     
      if (this.modal_confirmclose_scanner )
      {
        this.modal_confirmclose_scanner = false;
      }else{
        this.modal_confirmclose_scanner = true;
      }

    },
    onDecodeConfirmClose(result){
      let _result="";    

        try {
              _result = result;
              if (result.length > 5)
              {
              _result =  _result.substring(0,(_result.length-1));
              }

            //  console.log(_result);
        } catch (err) {
            console.error(err);
        }
   
        let values =_result.trim();
        values = values.toUpperCase() ;
        this.formConfirmClose.confirm = values.toUpperCase() ;

       if (values.toUpperCase() == "YES")
       {
         
         this.form.confirmClose = "Y";
         this.formConfirmClose.confirm ="";
         this.modalConfirmClose = false;
       } else  if (values.toUpperCase() == "NO")
       {
         this.form.confirmClose = "";
         this.formConfirmClose.confirm ="";
         this.modalConfirmClose = false;
       } else
       {
        //this.$refs.EmpCode.setFocus();
        
       }

    },
     okConfirmClose(e){
       e.preventDefault();
   
       let values =this.formConfirmClose.confirm.trim();
       values = values.toUpperCase() ;
       this.formConfirmClose.confirm = values.toUpperCase() ;

       if (values.toUpperCase() == "YES")
       {
         
         this.form.confirmClose = "Y";
         this.formConfirmClose.confirm ="";
         this.modalConfirmClose = false;
         this.chkOrderNo(e);
       } else  if (values.toUpperCase() == "NO")
       {
         this.form.confirmClose = "N";
         this.formConfirmClose.confirm ="";
         this.modalConfirmClose = false;
          this.chkOrderNo(e);
       } else
       {
         this.form.confirmClose = "N";
       // this.$refs.EmpCode.setFocus();
        this.setFocus(e);
       }
    },
    onAddEmp(e){
      this.modalAddUser = true;
    },
    noAddEmp(e){
      e.preventDefault();
      this.formAddUser.users = [];
      this.modalAddUser = false;

    },
    okAddEmp(e){
       e.preventDefault();
       this.modalAddUser = false; 

    },
    pushAddEmp(e){
       e.preventDefault();
   
       let values =this.formAddUser.usercode.trim();
       values = values.toUpperCase() ;
       this.formAddUser.usercode = values.toUpperCase();

       if (values.toUpperCase() == "YES")
       {
          this.okAddEmp(e);
       }

        if (values.toUpperCase() == "NO")
       {
          this.noAddEmp(e);
       }

       if(this.formAddUser.users.some(person => person.usercode === values ))
       {
         
         this.formAddUser.usercode ="";
    
       } else{
        API.rmEmployeeGetData({
              data:{ EmployeeID: values},              
                callblack: res => {  
                
                if (res.length <= 0)                            
                {   
                  AlertMessage("error", 'ไม่พบข้อมูล พนักงาน ที่ระบุ');
                  this.formAddUser.usercod ="";
                
                  return ;
                }

                let err = "";
                let _status = "";
                res.forEach((d, i) => {
                  if (d._result._status == "F")
                  {
                    _status = d._result._status
                    err = err.concat("#", (i + 1), " ", d.employeeID, d._result._message, '<br>');
                 
                  } else{
                    this.formAddUser.users.push({ usercode:values,
                                                  username:d.titleName+' '+d.firstName+' '+d.lastName }  )
                    this.formAddUser.usercode ="";
                  }
                });
                
                if (_status = 'F')
                AlertMessage(err ? "error" : "success", err);
                   

                      
              }
          });    
       }

      
      
       
    },
    setFocus(e){
      switch (e.keyCode) {
        case 13: //Enter
          //var focusableElements = document.querySelectorAll('input, button')
          var focusableElements = document.querySelectorAll('input');
          var index = Array.prototype.indexOf.call(focusableElements, document.activeElement);
          if(e.shiftKey)
            focus(focusableElements, index - 1)
          else
            focus(focusableElements, index + 1)

          e.preventDefault();
          break;
        }
        function focus(elements, index) {
          if(elements[index])
            elements[index].focus();
        } 

    } ,clearObjMacGrp(e){
      e.preventDefault();
      this.objMacGrp.workStationGrpCd = "";
      this.objMacGrp.workStationGrpNm = "";
    },
    ClearObjEmp(e){
      e.preventDefault();
      this.objEmp.employeeID  = "";
      this.objEmp.titleName  = "";
      this.objEmp.firstName  = "";
      this.objEmp.lastName = "";
    },
    ClearObjOrder(e){
       e.preventDefault();
       this.objOrder.workOrderDesc = "";
       this.objOrder = {};
    }
    ,SetForm(e){
      e.preventDefault();
      
      this.form.EmpCode = "";

       this.$refs.MacGrp.focus();

      this.form.OrderNO= "";
      this.form.MacGrp = "";
      this.formsave.addEmployeeId = "";
      this.formAddUser.users =[];
      this.form.confirmClose ="";

      this.clearObjMacGrp(e);
      this.ClearObjEmp(e);
      this.ClearObjOrder(e);
 
         
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
</style>