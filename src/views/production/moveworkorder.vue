<template>
  <div class="animated fadeIn">
    <b-form  @submit="onSubmit" >
        <!--<b-card class="mt-1" >  </b-card>-->
  
    <label margin="0 8px;"><b>วันที่ : {{formatDate(formdate)}} &nbsp;&nbsp;&nbsp;&nbsp;เวลา : {{time}}</b></label>
    
    <hr>  
      
   
    <span>  
      <label><b>พนักงาน : </b>&ensp;</label>
      <label><font color="blue">{{objEmp.titleName}} {{objEmp.firstName}} {{objEmp.lastName}}</font></label>
    </span>  
    <b-input-group>   
      <b-form-input
        id="EmpCode"
        v-model="form.EmpCode"           
        placeholder="Enter"
        ref="EmpCode"
         v-upper
        @keydown.enter ="chkEmpCode" 
        @keydown.tab   ="chkEmpCode" 
        
      ></b-form-input>  
      <b-button variant="outline-primary"  v-on:click="onEmpcodeScanner"   >
       <i class="fa fa-barcode"></i>
       </b-button>  
    </b-input-group>
    <span>  
      <label><b>ใบสั่งผลิต : </b>&ensp;  </label>
      <label><font color="blue">{{objNextGrp.workOrderDesc}}</font></label>

    </span>     
    <b-input-group>
      <b-form-input
      id="OrderNO"
      v-model="form.OrderNO"           
      placeholder="Enter"
      ref="OrderNO"
       v-upper
      @keydown.enter ="chkOrderNo" 
      @keydown.tab ="chkOrderNo" 
      > 
      </b-form-input>
       <b-button variant="outline-primary"  v-on:click="onOrdernoScanner"   >
       <i class="fa fa-barcode"></i>
       </b-button>
    </b-input-group>
    
    <div>
    <span>  
     
      <label><font color="blue">{{objNextGrp.message}}</font></label>
    </span>
    </div>
     <span>  
      <label><b>กลุ่มเครื่องจักรรับเข้า : </b>&ensp;  </label>
      <label><font color="blue">{{objMacGrp.workStationGrpNm}}</font ></label>
    </span>
    <b-input-group>
      <b-form-input
        id="MacGrp"
        v-model="form.RecvMacGrp"  
        v-upper         
        placeholder="Enter"
        @keydown.enter ="chkMacGrp" 
        @keydown.tab ="chkMacGrp" 
        
      ></b-form-input>
       <b-button variant="outline-primary"  v-on:click="onStationScanner"   >
       <i class="fa fa-barcode"></i>
       </b-button>      
    </b-input-group>

    <div class="card">
      <div class="card-header">
          <div   class="control">
              <b>โครงการ : </b><font color="blue"><span>{{status}} </span></font>
          </div>
      </div>
      <div class="card-body"   > 
            
        <p class="card-text">
          <b>ใบสั่งผลิต : </b> <font color="blue"><span> {{objMtMoveSeq.workOrderId}}</span></font> <br> 
          <b>ชื่อใบสั่งผลิต : </b> <font color="blue"><span> {{objMtMoveSeq.workOrderDesc}}</span></font>  <br>   
          <b>กลุ่มเครื่องจักรที่ผลิตเสร็จ : </b> <font color="blue"><span>{{objMtMoveSeq.workStationGrpCdDesc_FR}} </span></font>  <br>   
          <b>วันเวลาปิดการผลิต : : </b>  <font color="blue"><span>{{objMtMoveSeq.endTime}} </span></font>  <br>
          <b>กลุ่มเครื่องจักรที่ต้องรับเข้า STD : </b> <font color="blue"><span> {{objMtMoveSeq.workStationGrpCdDesc_STD}}</span></font>  <br>
          <b>กลุ่มเครื่องจักรที่ต้องรับเข้า จริง : </b>   <font color="blue"><span> {{objMtMoveSeq.workStationGrpCdDesc_TO}}</span></font>  <br>     
          <b>ผู้ย้ายชิ้นงาน : </b> <font color="blue"><span>{{objMtMoveSeq.employeeId}} {{objMtMoveSeq.employeeName}} </span></font>  <br>
          <b>วันเวลาย้ายชิ้นงาน : </b> <font color="blue"><span>{{objMtMoveSeq.moveTime}} </span></font>  <br>
        </p>


                      

      <!-- <a href="#" class="btn btn-primary" v-o>Go somewhere</a>-->
      </div>
    </div>
     <!-- @keydown.tab ="chkMacGrp" ->

    <hr> 

      <label><b>ใบสั่งผลิตที่รอย้ายชิ้นงาน : </b></label>
     -->
     
<!--
    <grid
        ref="grid"
        :fields="fields"
        :name="name"
        :btnClone="false"
        :btnAdd="false"
        :btnView="false"
        :btnEdit="false"
        :btnDelete="false"
        :data="data"
        @grid:btnClick="OnClick"
    >
    </grid>

-->
    
       

      
     
    </b-form>

    <b-modal
          v-model="modal"
          :title=" $t('dic.approve')"
          :header-bg-variant="config"
          no-close-on-backdrop
          :ok-title="mode == 'Delete' ? $t('dic.confirm') : $t('dic.save')"
          :cancel-title="$t('dic.cancel')"
          centered
          :ok-variant="config"
          :ok-disabled="$v.formApprov.$invalid && mode != 'Delete'"
          @ok="OkApprov"
        >
        <template v-if="mode != 'Delete'">

                <b-form-group                  
                  label-for="username"                
                 :state="$v.formApprov.username.required ? !$v.formApprov.username.$invalid : null"
                >
                    <span>  
                      <label><b>ผู้อนุมัติ : </b>&ensp; {{objUserApprove.titleName}} {{objUserApprove.firstName}} {{objUserApprove.lastName}} </label>
                      <label><font color="blue"> </font></label>
                    </span>
                    <b-form-input
                     id="username"
                     type="text"                     
                     trim      

                     autocomplete="off"
                     v-upper
                     v-model="formApprov.username"

                     @keydown.enter ="checkUserApprove" 
                     @keydown.tab ="checkUserApprove" 
                     
                    >
                    </b-form-input>
                </b-form-group>

                <b-form-group                  
                  label-for="password"                
                 :state="$v.formApprov.password.required ? !$v.formApprov.password.$invalid : null"
                
                >
                    <span>  
                      <label><b>รหัสผ่าน : </b>&ensp;  </label>
                      <label><font color="blue"> </font></label>
                    </span>
                    <b-form-input
                     id="password"
                     type="password"                    
                     trim                    
                     autocomplete="off"
                     v-upper
                     v-model="formApprov.password"
                    >
                    </b-form-input>
                </b-form-group>

                <b-form-group                  
                  label-for="causecode"                
                
                >
                    <span>  
                      <label><b>สาเหตุ : </b>&ensp; {{formApprov.causecode}} </label>
                      <label><font color="blue"> </font></label>
                    </span>
                    <!--
                    <b-form-input
                     id="causecode"
                     type="text"                     
                     trim                    
                     autocomplete="off"
                     v-upper
                     v-model="formApprov.causecode"
                    >
                    </b-form-input>
                    -->
                <select v-model="formApprov.causecode">
                  <option disabled>กรุณาเลือก สาเหตุ</option>
                  <option v-bind:value="option.causeID" v-for="option in CauseAppv" :key="option.causeID">
                    {{ option.causeID }} : {{ option.causeName }}
                  </option>
                </select>
  
  
                </b-form-group>
                <b-form-group                  
                  label-for="causecomment"          
                
                >
                    <span>  
                      <label><b>หมายเหตุ : </b>&ensp;  </label>
                      <label><font color="blue"> </font></label>
                    </span>
                    
                    <b-form-textarea
                      id="comments"
                      v-model="formApprov.comments"
                      placeholder="Enter something..."
                      rows="3"
                      trim
                      max-rows="6"                      
                    ></b-form-textarea>
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
          id="orderno_scanner"
          v-model="modal_orderno_scanner"
          :title="'Barcode Scanner' + ' : ' + 'ใบสั่งผลิต'"
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



  </div>
</template>

<script>
import { API } from "@/shared/core";
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate,GetDateTimeFormat } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

export default {
  name: "moveworkorder",
  
  
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
      formtime:"",  
      time: "",
      date: "",
      chk:"",
      status:"",
      modal: false,
      modal_empcode_scanner: false,
      modal_orderno_scanner: false,
      modal_station_scanner: false,
      mode: "Add",
      errMsg: "",
      name:"movesworkorder",  
      form: {
        MacGrp: "",
        MacGrpDec: "",
        EmpCode: "",
        EmpDesc: "",
        OrderNO: "",
        OrderDesc: "",
        RecvMacGrp: "",
        RecvMacGrpDesc : "",
        User_Id :"",
        empcode_scanner:"",
        orderno_scanner:"",
        station_scanner:"",
        
      },
      formApprov: {
        username:"",
        password:"",
        causecode:"",
        comments:"",
        approveflag:""
    },

    formsave:{
              employeeId: "",
              workOrderID: "",
              workStationGrpCd: "",
              workStationGrpCd: "",
              addEmployeeId: "",
              user_Id: "",
              userapp: "",
              closeChoose: "",
              endSequence: "",
              dateSelect: "",
              timeSelect: "",
              dateSelectFull: "",
     },    
    fields: [
                {
                name: "code",
                title: "dic.code",
                sortField: "code",
                class: "text-center",
                visible: true
                },
             
            ],
            data: [],
            dataEmp: [],
            dataOrderH: [],
            dataOrderL: [],
            dataNextGrp: [],
            dataMacGrp: [],
            
            objEmp:{
               employeeID : "",
               titleName : "",
               firstName : "",
               lastName: "",
            },
            objOrderH: {
               WorkOrderID : "",
               WorkOrderDesc : "",
               workStationGrp_STD : "",
                
            },
            objOrderL: {  
            },
            objNextGrp:{            
            },
            objMacGrp:{
               workStationGrpCd : "",
               workStationGrpNm : "",
            },
            objUserApprove:{
               employeeID : "",
               titleName : "",
               firstName : "",
               lastName: "",
            },
            objUserSequence:{

            },
            objOauthApprove:{

            },
            objMtMoveSeq:{
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
            CauseAppv:[{ causecode:"",causename:""}],
            saveData: []
    };
  },
  validations: {
    formApprov: {
      username: {
        required
      },
      password: {
        required
      } 
    }
  },
  

  methods: {
    onEmpcodeScanner(e){
      this.modal_empcode_scanner = true;
      this.form.empcode_scanner ="";
    },
    onDecodeEmpcode(result){
        let _result="";    

        try {
              _result = result;
              _result =  _result.substring(0,(_result.length-1));

            //console.log(_result);
        } catch (err) {
            //console.error(err);
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
      this.form.station_scanner = "";
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

                              this.form.RecvMacGrp =_result.trim(); 
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
            this.form.OrderNO =_result.trim(); 
           
             API.mtWorkOrderHGetData({
              data:{ WorkOrderID:this.form.OrderNO,WorkOrderStatus :"O"},              
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
    chkEmpCode(e)
    {
      let values =this.form.EmpCode.trim() 
      values = values.toUpperCase() ;
      this.form.EmpCode = values.toUpperCase() ;
      
      // Note, you need to add a ref="search" attribute to your input.
      if (this.form.EmpCode.trim() != "")
      {          
        API.rmEmployeeGetData({
              data:{ EmployeeID:  this.form.EmpCode},              
                callblack: res => {  
                let err = "";
                let _status = "";
                res.forEach((d, i) => {
                  if (d._result._status == "F")
                  {
                    _status = d._result._status
                    err = err.concat("#", (i + 1), " ", d.employeeID, d._result._message, '<br>');
                 
                  }
                });                
                
                AlertMessage(err ? "error" : "success", err);
                    
                this.dataEmp= res;                    
                this.objEmp =  this.dataEmp[0]; 
                this.setFocus(e);
                //  console.log(this.objEmp);
                //  console.log(Object.keys(this.data).length);
              }
        });    
        
         
      } 
      
       
    },
    chkOrderNo(e)
    {
      let values =this.form.OrderNO.trim() 
      values = values.toUpperCase() ;
      this.form.OrderNO = values.toUpperCase() ;
      // Note, you need to add a ref="search" attribute to your input.
      if (this.form.OrderNO.trim() != "")
      {          
        this.chk ="N";
        let err = "";
        let _status = "";
         
        if(this.form.OrderNO.trim() != "")
        { 
  
          API.MtMoveOrderSequenceGetNextWorkStationGrp({
            data:{ WorkOrderID:this.form.OrderNO,Move_Flag :"N"},              
              callblack: res => {     
                 
                    res.forEach((d, i) => {
                   
                      if (d._result._status == "F")
                        err = err.concat("#", (i + 1), " ", d.workOrderID,  " : ", d._result._message, '<br>');
                    });

                   AlertMessage(err ? "error" : "success", err);
                  this.dataNextGrp = res;    
                 // console.log(this.dataNextGrp)                
                  this.objNextGrp = res[0];  
                  
                //  console.log(this.objNextGrp)
                this.setFocus(e);
                  
            }
          });
  
        }

         
         
        
      }  
      
    },
    chkMacGrp(e)
    {        
      let values =this.form.RecvMacGrp.trim() 
      values = values.toUpperCase() ;
      this.form.RecvMacGrp = values.toUpperCase() ;
      // Note, you need to add a ref="search" attribute to your input.
      if (this.form.RecvMacGrp.trim() != "")
      {

        this.form.User_Id =  this.$localStorage.get("UserCode" );
        this.formsave.employeeId = this.form.EmpCode;                 
        this.formsave.workOrderId = this.form.OrderNO;
        this.formsave.workStationGrpCd_TO = this.form.RecvMacGrp;
        this.formsave.moveDate =this.formdate;
        this.formsave.EndTime = "";
        this.formsave.user_Id = this.form.User_Id;
        this.formsave.appvCauseId = this.formApprov.username;
        this.formsave.remarkCause = this.formApprov.comments;
        this.formsave.causeStatus = this.formApprov.causecode;

        this.chk ="N";

        API.msWorkStationGrpGetData({
              data:{ WorkStationGrpCd:this.form.RecvMacGrp },              
                callblack: res => {           

                    this.dataMacGrp= res;                    
                    this.objMacGrp  =  res[0]; 

                    //console.log(this.objMacGrp);
                    // console.log(Object.keys(this.objMacGrp).length);
              }
        });
        
      API.MtMoveOrderSequenceInsertMove({       
            data: this.formsave,  

                callblack: res => {  
                  let err = "";
                  let _status = "";    
                  let _code = ""; 
                  res.forEach((d, i) => {
                  
                    if (d._result._status == "F")
                    {
                      _code = d._result._code;
                        err = err.concat("#", (i + 1), " ", this.formsave.workOrderId ,  " : ", d._result._message, '<br>');
                    }
                  });

                  AlertMessage(err ? "error" : "success", err);        
                  //  this.data = res;                    
                  this.objMtMoveSeq  =  res[0]; 
                  if(this.objMtMoveSeq._result._code.trim()  == "F0900")
                  {
                      this.onApprov(e);
                  }
                    
                  if (this.objMtMoveSeq._result._status=='S')
                  {
                    this.status = "ผ่าน";
                    this.SetForm(e);
                  }
                // console.log(this.objMtMoveSeq);
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

    } ,
    onSubmit(evt) {     
      
           
    },
    onApprov(e){
        this.mode = 'Add';
        this.modal = true;
        API.MsCauseAppvListActive({
              data:null,              
                callblack: res => {  
                let err = "";
                let _status = "";
                /*
                res.forEach((d, i) => {
                  if (d._result._status == "F")
                  {
                    _status = d._result._status
                    err = err.concat("#", (i + 1), " ", d.employeeID, d._result._message, '<br>');
                  }
                });
                
                  AlertMessage(err ? "error" : "success", err);
                
               */
                   this.CauseAppv= res;                    
                   
                   // console.log(this.CauseAppv);
                   //  console.log(Object.keys(this.data).length);
              }
        });  
        
    },
    checkUserApprove(e){
      API.rmEmployeeGetData({
              data:{ EmployeeID:  this.formApprov.username},              
                callblack: res => {  
                let err = "";
                let _status = "";
                res.forEach((d, i) => {
                  if (d._result._status == "F")
                  {
                    _status = d._result._status
                    err = err.concat("#", (i + 1), " ", d.employeeID, d._result._message, '<br>');
                  }
                });
                
                 // AlertMessage(err ? "error" : "success", err);
                
                                      
                    this.objUserApprove = res[0]; 
                  //  console.log(this.objUserApprove);
                   //  console.log(Object.keys(this.data).length);
              }
        });  

        API.msUserSequenceGetData({
          
              data:{ USERCODE:  this.formApprov.username},              
                callblack: res => {  
                let err = "";
                let _status = "";
                res.forEach((d, i) => {

                  if (d._result._status == "F")
                  {
                    _status = d._result._status
                    err = err.concat("#", (i + 1), " ", this.formApprov.username, d._result._message, '<br>');
                  }
                });
                
                AlertMessage(err ? "error" : "success", err);
                
                                      
                this.objUserSequence = res[0]; 
               // console.log(this.objUserSequence);
                   //  console.log(Object.keys(this.data).length);
              }
        });  

        
  
    },
    confirmApprove(e){
      
      API.OauthApprove({
              data:{ usercode:  this.formApprov.username,password:this.formApprov.password},              
                callblack: res => {  
                let err = "";
                let _status = "";
             
                  if (res._result._status == "F")
                  {
                    
                    _status = res._result._status
                    err = err.concat("#", (1), " ", this.formApprov.username, res._result._message, '<br>');
                  }
               
                
                AlertMessage(err ? "error" : "success", err);
                if (err != "") {
                this.modal = err != "";
                this.modal = true;
                return;
                }
                                      
                this.objOauthApprove = res; 
                //console.log(this.objOauthApprove);
                   //  console.log(Object.keys(this.data).length);
              }
        });  
  
    },
    OkApprov(e){
      this.approveflag = "Y";
      this.confirmApprove(e);
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
    SetForm(e){
      e.preventDefault();
       
       
      this.form.MacGrp = "";
      this.form.MacGrpDec = "";
      this.form.EmpCode = "";
      this.form.EmpDesc = "";
      this.form.OrderNO = "";
      this.form.OrderDesc = "";
      this.form.RecvMacGrp = "";
      this.form.RecvMacGrpDesc  = "";
      this.form.User_Id  = "";

      this.formApprov.username = "";
      this.formApprov.password = "";
      this.formApprov.causecode = "";
      this.formApprov.comments = "";
      this.formApprov.approveflag = "";  
        
      this.formsave.employeeId = "";
      this.formsave. workOrderId= "";
      this.formsave.workStationGrpCd_TO= "";
      this.formsave.moveDate= "";
      this.formsave.EndTime= "";
      this.formsave.user_Id= "";
      this.formsave.appvCauseId= "";
      this.formsave.remarkCause= "";
      this.formsave.causeStatus = "";

       
      this.objEmp.employeeID = "";
      this.objEmp.titleName = "";
      this.objEmp.firstName = "";
      this.objEmp.lastName = "";
            
            
      this.objOrderH.WorkOrderID = "";            
      this.objOrderH.WorkOrderDesc = "";            
      this.objOrderH.workStationGrp_STD = "";
            
                
            
            this.objOrderL= { };
            this.objNextGrp={ };         
           
            this.objMacGrp.workStationGrpCd = "";
              this.objMacGrp.workStationGrpNm = "";

              
                this.formsave.employeeId = "";
                this.formsave.workOrderId = "";
                this.formsave.workStationGrpCd_TO = "";
                this.formsave.moveDate = "";
                this.formsave.EndTime = "";
                this.formsave.user_Id = "";
                this.formsave.appvCauseId = "";
                this.formsave.remarkCause = "";
                this.formsave.causeStatus = "";
            

      
       
    },
    



 

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

select {
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

textarea{
    border: 1px solid #ccc;
    
}
</style>