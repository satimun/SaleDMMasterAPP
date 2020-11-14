<template>
    <div class="animated fadeIn">
 
         <template v-if="formMode == 'follow'"> 
            <b-form  @submit.prevent="searchFw">
                <span>  
                    <label><b>ใบสั่งผลิต : </b></label>
                    <label><span>{{dataHead.WorkOrderDesc}}</span></label>
                </span> 

                <span>    
                     
                    
                        <b-input-group>
                            <b-form-input
                             
                            id="fworderno"
                            v-model="workorderid" 
                            v-upper          
                            placeholder="Enter"
                            @keydown.enter ="searchFw" 
                            @keydown.tab ="searchFw" 
                             
                            ></b-form-input>

                            
                            
                            <b-button variant="outline-primary"  v-on:click="onOrdernoScanner"   >
                            <i class="fa fa-barcode"></i>
                            </b-button>
                           
                            <b-button variant="outline-primary" type="submit">{{$t('dic.search')}}</b-button>
                            <b-button variant="outline-primary"  v-on:click="SetFormFollows"   >
                              <i class="fa fa-undo"></i>
                              
                            </b-button>
                            
                        </b-input-group>
                
                        
                    
                </span>   

                <div class="card">
                    <div class="card-header">
                        <div  v-on:click="showProject = !showProject" class="control">
                            <b>โครงการ : </b><font color="blue"><span>{{dataHead.mchProjectID}}  {{dataHead.mchProjectNm}}</span></font>
                        </div>
                    </div>
                    <div class="card-body" v-if="showProject" >                             
                        <p class="card-text">
                        <b>ลูกค้า : </b> <font color="blue"><span>{{dataHead.cuscod}} {{dataHead.cusName}}</span></font> &ensp;   
                        <b>รหัสแบบ : </b> <font color="blue"><span>{{dataHead.drawingCd}}</span></font> &ensp;   
                        <b>จน. ชิ้นงาน : </b> <font color="blue"><span>{{dataHead.qtyAmt}}</span></font> &ensp;   
                        <b>ประเภทงาน : </b>  <font color="blue"><span>{{dataHead.jobTypeCd}}  {{dataHead.jobTypeNm}}</span></font> &ensp;
                        <b>ความเร่งด่วน : </b> <font color="blue"><span>{{dataHead.JobPriorityCd}}  {{dataHead.jobPriorityNm}}</span></font> &ensp;
                        <b>สถานะใบสั่ง : </b>   <font color="blue"><span>{{dataHead.workOrderStatus}}</span></font> &ensp;      
                        <b>สถานีปลายทาง : </b> <font color="blue"><span>{{dataHead.MchProjectID}}</span></font> &ensp;
                        <b>รายละเอียด : </b><font color="blue"><span>{{dataHead.workOrderID}}&ensp; : &ensp;{{dataHead.workOrderDesc}}</span></font> &ensp; 
   
                        </p>   
                    <!-- <a href="#" class="btn btn-primary" v-o>Go somewhere</a>-->
                    </div>
                </div>

                <gridmodify 
                      ref="griditems"
                      :title="'แสดงรายการสินค้า'"
                      :fields="fieldItems"
                      :name="'griditems'"
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
                    :name="'gridd'"
                    :btnGrid="false"
                    :btnAdd="false"
                    :btnClone="false"
                    :btnView="false"
                    :btnEdit="false"
                    :btnDelete="false"
                    :o_col_checkbox="false"
                    :data="dataDetail"
                    :trackBy="'seqNo'"

                    @grid:btnSelect="onGridClick"
                     
                >
                </gridmodify>
            
                <grid ref="gridl"
                    :title="'แสดงข้อมูลกลุ่มเครื่องจักร มตฐ.'"
                    :fields="fieldLast"
                    :name="'gridl'"
                    :btnGrid="false"
                    :btnAdd="false"
                    :btnClone="false"
                    :btnView="false"
                    :btnEdit="false"
                    :btnDelete="false"         
                    :o_col_checkbox="false"
                    :data="dataLast"
                     
                >
                </grid>

            </b-form>
        </template> 

        <template v-if="formMode != 'follow'">

            <template v-if="formMode == 'close'">
              <div class="card">
                <div class="card-header  ">
                   <div class="row" >
                      <div>
                        <b-button   variant="outline-primary" v-on:click="onComeBack"   >
                            <i class="fa fa-reply"></i>
                        </b-button> 
                      </div  >                  
                      &ensp;
                      <p class="card-text" >
                        <b>คีย์ลัด ยิงปิดใบสั่งผลิต : </b>&ensp;  <font color="blue"><span>{{objSelect.workOrderID}}&ensp; : &ensp;{{objSelect.workOrderDesc}}</span></font>
                        <b>กลุ่มเครื่องจักร : </b> <font color="blue"><span>{{objSelect.zWorkStationGrp_Next}} </span></font> &ensp;   
                      </p>
                       
                      
                    </div>
                   
                      
                         
                   
                </div>
                
              </div>
               
              <b-form  @submit="onSubmit" >
                <label margin="0 8px;"><b>วันที่ : {{formatDate(formdate,"DD/MM/YYYY")}} &nbsp;&nbsp;&nbsp;&nbsp;เวลา : {{time}}</b></label>
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
                    id="MacGrpClose"
                    v-model="form.MacGrp" 
                    ref="MacGrpClose"  
                    autocomplete="off"        
                    placeholder="Enter"
                    v-upper
                    autofocus
                    @keydown.enter ="chkMacGrp" 
                    @keydown.tab   ="chkMacGrp" 
                    
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
                    id="EmpCodeClose"
                    
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
                  id="OrderNoClose"
                  ref="OrderNoClose"
                  v-model="form.OrderNo"   
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
                <div>
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
                     :o_col_checkbox="false"
                    :data="dataCloseMch"
                    
                >
                </grid>   
                </div>
                <div>
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
                     :o_col_checkbox="false"
                    :data="dataCloseEmp"
                    
                >
                </grid>   
                </div>

              

              </b-form>

              


            </template>

            <template v-if="formMode == 'move'">
               
              <div class="card">
                <div class="card-header  ">
                   <div class="row" >
                      <div class="float: right" >
                        <b-button    variant="outline-primary" v-on:click="onComeBack"   >
                          <i class="fa fa-reply"></i>
                        </b-button> 
                      </div  >                  
                      &ensp; 
                    

                      <p class="card-text" >
                       <b>คีย์ลัด ยิงย้ายใบสั่งผลิต : </b>&ensp;  <font color="blue"><span>{{objSelect.workOrderID}}&ensp; : &ensp;{{objSelect.workOrderDesc}}</span></font>
                        <b>กลุ่มเครื่องจักร : </b> <font color="blue"><span>{{objSelect.zWorkStationGrp_Next}} </span></font> &ensp;   
                      </p>
                     
                      
                    </div>
                   
                      
                         
                   
                </div>
                
              </div>

              <b-form  >         
  
                <label margin="0 8px;"><b>วันที่ :{{formatDate(formdate,"DD/MM/YYYY")}} &nbsp;&nbsp;&nbsp;&nbsp;เวลา : {{time}}</b></label>
                <hr>  

                <span>  
                  <label><b>พนักงาน : </b>&ensp;</label>
                  <label><font color="blue">{{objEmp.titleName}} {{objEmp.firstName}} {{objEmp.lastName}}</font></label>
                </span>  
                <b-input-group>   
                  <b-form-input
                  
                    id="empcodemove"
                    v-model="form.EmpCode"           
                    placeholder="Enter"
                    ref="empcodemove"
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
                  id="OrderNoMove"
                  v-model="form.OrderNo"           
                  placeholder="Enter"
                  ref="OrderNoMove"
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
                    id="MacGrpMove"
                    v-model="form.RecvMacGrp"           
                    placeholder="Enter"
                    @keydown.enter ="chkMacGrp" 
                    @keydown.tab ="chkMacGrp" 
                     v-upper
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
                      <b>วันเวลาปิดการผลิต : : </b>  <font color="blue"><span>{{ objMtMoveSeq.endTime}} </span></font>  <br>
                      <b>กลุ่มเครื่องจักรที่ต้องรับเข้า STD : </b> <font color="blue"><span> {{objMtMoveSeq.workStationGrpCdDesc_STD}}</span></font>  <br>
                      <b>กลุ่มเครื่องจักรที่ต้องรับเข้า จริง : </b>   <font color="blue"><span> {{objMtMoveSeq.workStationGrpCdDesc_TO}}</span></font>  <br>     
                      <b>ผู้ย้ายชิ้นงาน : </b> <font color="blue"><span>{{objMtMoveSeq.employeeId}} {{objMtMoveSeq.employeeName}} </span></font>  <br>
                      <b>วันเวลาย้ายชิ้นงาน : </b> <font color="blue"><span>{{objMtMoveSeq.moveTime}} </span></font>  <br>
                    </p>

                  </div>
              </div>



              </b-form>

            </template>

        </template>

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
                    
                      max-rows="6"                      
                    ></b-form-textarea>
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
import { GetDateView, AlertMessage, ObjCopy, ObjResetValue, GetLastUpdate,GetDateTimeFormat } from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

import 'webrtc-adapter';

    Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    },
    update: function (el) {
        Vue.nextTick(function() {
              el.focus();
        })
    }
})
     



export default {
  

  i18n: {
    messages: {
      en: { dic: { codevalid: "This is a required field and must have {0} characters." } },
      th: { dic: { codevalid: "จำเป็นต้องมี {0} ตัวอักษร" } }    

    },
    sharedMessages: dic
  },
  name: "shortcutworkorder", 
  mounted() {

  },
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
      showProject: true,
      token: null,
      formdate:new Date(),  
      formtime:"",  
      time: "",
      date: "",
      formMode:"follow",
      mode: "Add",
      modal: false,
      avSearch: false,
      txtSearch: "",            
      errMsg: "",
      status:"",
      modalConfirm: false,
      modalConfirmClose: false,
      modalAddUser: false,
      modal_empcode_scanner: false,
      modal_empcode_scanner_add: false,
      modal_orderno_scanner: false,
      modal_station_scanner: false,
      modal_confirm_scanner: false,
      modal_confirmclose_scanner: false,

      errMsg: "",

      name:"rptfollowsworkorder",
      workorderid:"",
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
        workOrderStatus : [
          { text: "ยกเลิก", value: "X" },
          { text: "รอปิด", value: "C" },
          { text: "รอย้าย", value: "M" },
          { text: "เรียบร้อย", value: "P" },
          { text: "ปิดใบสั่ง", value: "F" },
          { text: "รอปิดสุดท้าย", value: "L" },
          { text: "อยู่สุดท้าย", value: "E" }
      ],
      form: {
        code:"",
        MacGrp: "",
        MacGrpDec: "",
        EmpCode: "",
        EmpDesc: "",
        OrderNo: "",
        OrderDesc: "",
        RecvMacGrp: "",
        RecvMacGrpDesc : "",

        confirmAddUser:"N",
        confirmClose:"N",
        user_Id :"",
        empcode_scanner:"",
        orderno_scanner:"",
        station_scanner:"",
        empcode_scanner_add:"",

      },
       formsave:{
              EmployeeId: "",
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

     formsaveclose:{
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

  
     formApprov: {
        username:"",
        password:"",
        causecode:"",
        comments:"",
        approveflag:""
    },
     

    formAddUser: {
      addflag:"",
      usercode:"",
      users:[]
      // users:[{ usercode:"",username:""}]  
    },     
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
                title: "No",
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
                visible: true
                },
                {
                name: "workStationGrpNm",
                title: "ชื่อกลุ่ม คจ.ผลิต",
                sortField: "workStationGrpNm",
                class: "text-center",
                visible: true
                },
                {
                name: "startTime",
                title: "เวลาเปิด",
                sortField: "startTime",
                class: "text-left",
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
      data: [],
      dataItems: [],
      dataDetail: [],
      dataLast: [],
      saveData: [],
      rptFollowsWorkOrder:[],
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
      dataEmp: [],
      objEmp:{
          employeeID : "",
          titleName : "",
          firstName : "",
          lastName: "",
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
      dataOrderL: [],
      dataNextGrp: [],
  
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
      dataSelect:[],
      objSelect:{},


      
       
    };
  },
   validations: {
   form: {
      code: { required, minLength: minLength(1) },
      
    },
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
    },
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
    formatDate(date,format) {
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

        if (format.trim() == "YYYY-MM-DD")
        {
            return year + '/' + monthNum[monthIndex] + '/' + day;
        } else
        {
            return day + '/' + monthNum[monthIndex] + '/' + year;
        }
        
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
    onComeBack(){
      this.formMode = "follow";
      this.queryDataFw();
      document.getElementById('app').scrollIntoView();
      
    },
    
    queryDataFw(){
        if (this.workorderid.trim() !="")  
        {
            API.RptFollowsWorkOrderHeadReport({
              data:{ MchProjectID :"",WorkOrderID :this.workorderid },              
                callblack: res => {                 
                  res.forEach(x => {
                    this.dataHead  =  x;
                    
                   //console.log(this.dataHead);
                  }); 
              }
            });

            API.ViewWorkOrderDGetData({
              data:{  WorkOrderID :this.workorderid},              
                callblack: res => {
                   res.forEach(x => {
                           x.status = "A";
                           });
                   this.dataItems =  res ;
                    // console.log(this.dataItems);
              }
            });
          
            API.RptFollowsWorkOrderDetailReport({
              data:{ MchProjectID :"",WorkOrderID :this.workorderid},              
                callblack: res => {
                   this.dataDetail =  res ;
 
                   this.dataDetail.forEach((d, i) => {
                     /*
console.log(this.dataDetail);
                    let tmp = "";
                    tmp =  GetDateTimeFormat(d.startTime,"DDMMYYHHMM");
                    console.log(tmp);
*/
                     GetDateTimeFormat()
                   /* 
                   if (d.workOrderStatus.trim() == "C")
                                {
                                     d.workOrderStatus = "C : รอปิด";
                                }
                                else if (d.workOrderStatus.trim() == "M")
                                {
                                     d.workOrderStatus = "C :รอย้าย";
                                }
                                else if (d.workOrderStatus.trim() == "P")
                                {
                                      d.workOrderStatus = "P :ผ่าน";
                                }
                                else if (d.workOrderStatus.trim() == "F")
                                {
                                     d.workOrderStatus = "F :ปิดใบสั่ง";
                                }
                                else if (d.WorkOrderStatus.trim() == "E")
                                {
                                     d.workOrderStatus = "E :ปิดสุดท้าย";
                                }
                                  */
                   }
                
                  ); 

                   //workOrderStatus
                    console.log(this.dataDetail);
              }
            });

            API.RptFollowsWorkOrderLastReport({
              data:{ MchProjectID :"",WorkOrderID :this.workorderid},              
                callblack: res => {
                   this.dataLast =  res ;
                    // console.log(this.dataLast);
              }
            });
        } else{
          this.SetFormFollows(event);
        }
    },
    searchFw(e) {
     
      //  this.onDecodeOrderno(this.workorderid);
       this.queryDataFw();
    },
    onOrdernoScanner(){
        this.mode = "Add";
        this.form.orderno_scanner = "";
        this.modal_orderno_scanner = true;

    },
    focusInput ( inputRef ) {
      // $refs is an object that holds the DOM references to your inputs
      this.$refs[inputRef].focus();
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

                    this.form.OrderNo  =_result.trim();   
                    this.workorderid =_result.trim();    
                           
                    this.dataOrderH = res;                    
                    this.objOrder   =  this.dataOrderH[0]; 
                    this.modal_orderno_scanner = false; 

                    this.chkOrderNo();


                    AlertMessage(errA ? "error" : "success", errA);

                }
          }); 
        }

    },
    toFormClose(){
      this.SetFormClose(event);
      this.dataCloseMch =[];
      this.dataCloseEmp =[];
      this.formMode = "close";  
      document.getElementById('app').scrollIntoView();  

                               
    },
    toFormMove(){ 
      this.SetFormMove(event);             
      this.objMtMoveSeq={};
      this.formMode = "move"; 

      document.getElementById('app').scrollIntoView();                         
                                    
    },

    onGridClick(mode, data, evt) {
    
      this.mode = mode;
      this.dataSelect = ObjCopy(data);
      this.objSelect  = ObjCopy(this.dataSelect[0]);

      API.mtWorkOrderHGetData({
              data:{ WorkOrderID:this.objSelect.workOrderID,WorkOrderStatus :"O"},              
                callblack: res => {     
                    let errA = "";
                    let _statusA = ""; 
                    if (res.length <= 0)                            
                    {   
                      AlertMessage("error", ' ใบสั่งผลิต สถานะไม่ได้อยู่ระหว่างดำเนินการ');
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
                        AlertMessage(errA ? "error" : "success", " ใบสั่งผลิต สถานะไม่ได้อยู่ระหว่างดำเนินการ");
                        //this.form.orderno_scanner ="";
                        return ;
                    } 

                    //AlertMessage(errA ? "error" : "success", errA);

                    this.dataOrderH = res;                    
                    this.objOrderH   =  this.dataOrderH[0]; 
                  //  console.log(this.objSelect);
                    
                    API.RptFollowsWorkOrderDetailReport({
                      data:{ MchProjectID :"",WorkOrderID :this.objSelect.workOrderID},              
                        callblack: res => {
                            this.dataDetail =  res ;
                            let tmp={};

                            for (let i in this.dataDetail) {       
                              // Extract the title 
                              tmp = this.dataDetail[i] ; 
//console.log(this.objSelect);
                              if (tmp.seqNo  == this.objSelect.seqNo  )
                              { 
                                if (tmp.workOrderStatus.trim() == "C")
                                {
                                    this.toFormClose();

                                   
                              
                                }
                                else if (tmp.workOrderStatus.trim() == "M")
                                {
                                    this.toFormMove();
                                }
                                else if (tmp.workOrderStatus.trim() == "P")
                                {
                                    AlertMessage("error", 'ใบสั่งผลิต ลำดับที่ '+tmp.seqNo +' สถานะ  ยิงปิด/ย้ายแล้ว');                     
                                    return ;
                                }
                                else if (tmp.workOrderStatus.trim() == "F")
                                {
                                    AlertMessage("error", 'ใบสั่งผลิต ลำดับที่ '+tmp.seqNo +' สถานะปิดใบสั่งผลิตแล้ว');                     
                                    return ;
                                }
                                else if (tmp.WorkOrderStatus.trim() == "E")
                                {
                                    AlertMessage("error", 'ใบสั่งผลิต ลำดับที่ '+tmp.seqNo +' สถานะปิดสถานีงานสุดท้ายแล้ว ');                     
                                    return ;
                                }
                              }
       
                            } 
                            // console.log(this.dataDetail);
                      }
                    });

                    
                }
          });




      
     //var focusableElements = document.querySelectorAll('input');
     //console.log(focusableElements);

      

    },
    onStationScanner(){
      this.mode = "Add";
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
                              this.form.RecvMacGrp=_result.trim(); 
                              this.dataMacGrp= res;                    
                              this.objMacGrp  =  res[0]; 
                              this.modal_station_scanner  = false;    
                              
                              this.chkMacGrp();

                        }
                  });                        
        }
    },

    chkMacGrp()
    {
    //  e.preventDefault();
      let values =this.form.MacGrp.trim() 
      values = values.toUpperCase() ;
      this.form.MacGrp = values.toUpperCase() ;

      if (this.formMode =="close")
      {
        this.chkMacGrpClose();
        this.setFocus(event);
      }else if(this.formMode =="move")
      {
        this.chkMacGrpMove();   
        this.setFocus(event);
      }
        
      // Note, you need to add a ref="search" attribute to your input.
      
    },
    chkMacGrpClose()
    {
      if (this.form.MacGrp.trim() != "")
      {  
        this.chk ="N";

        API.msWorkStationGrpGetData({
              data:{ WorkStationGrpCd:this.form.MacGrp,ExtGrp_Flag:"Y" },              
                callblack: res => {        
                  if (res.length > 0)                            
                  {
                    AlertMessage("error", 'ไม่สามารถบันทึกกลุ่มเครื่องจักรภายนอกได้');
                   // this.$refs.MacGrp.focus();
                    return ;
                  }

                   API.msWorkStationGrpGetData({
                        data:{ WorkStationGrpCd:this.form.MacGrp },              
                          callblack: res => {    
                              if (res.length <= 0)                            
                              {   
                                AlertMessage("error", 'ไม่พบข้อมูล กลุ่มเครื่องจักร ที่ระบุ');
                                this.clearObjMacGrp();
                              //  this.$refs.MacGrp.focus();
                               return ;
                              }

                              this.dataMacGrp= res;                    
                              this.objMacGrp  =  res[0]; 

                              if (this.form.MacGrp.trim() == 'DAF00') 
                              this.form.EmpCode = this.$localStorage.get("UserCode" );
             
                             // this.$refs.EmpCode.setFocus(e);                           
                             
                             //this.setFocus(event);
                              //console.log(this.objMacGrp);
                              // console.log(Object.keys(this.objMacGrp).length);
                        }
                  });                           
              }
        });       
      }
    },
    chkMacGrpMove()
    {
      if (this.form.RecvMacGrp.trim() != "")
      {

        this.form.User_Id =  this.$localStorage.get("UserCode" );
        this.formsave.EmployeeId = this.form.EmpCode;                 
        this.formsave.workOrderId = this.form.OrderNo;
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

                 // AlertMessage(err ? "error" : "success", err);        
                  //  this.data = res;                    
                  this.objMtMoveSeq  =  res[0]; 
                //  this.objMtMoveSeq.endTime = GetDateTimeFormat(objMtMoveSeq.endTime,'DDMMYYYY')

                  if(this.objMtMoveSeq._result._code.trim()  == "F0900")
                  {
                      this.onApprov(event);
                  }
                    
                  if (this.objMtMoveSeq._result._status=='S')
                  {
                    this.status = "ผ่าน";
                    this.SetFormMove(event);
                  }
                
                 console.log(this.objMtMoveSeq);
              }                           
           
        }); 

      }
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
    ClearObjEmp(e){
      e.preventDefault();
      this.objEmp.employeeID  = "";
      this.objEmp.titleName  = "";
      this.objEmp.firstName  = "";
      this.objEmp.lastName = "";
    },
    chkEmpCode(e){
      e.preventDefault();
      let values =this.form.EmpCode.trim() 
      values = values.toUpperCase() ;
      this.form.EmpCode = values.toUpperCase() ;

      if (this.formMode =="close")
      {
        this.chkEmpCodeClose();
        this.setFocus(e);
      }else if(this.formMode =="move")
      {
        this.chkEmpCodeMove(); 
        this.setFocus(e);  
      }

    },
    chkEmpCodeClose(){
      if (this.form.EmpCode.trim() != "")
      {          
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
                              // this.setFocus(event); 
                               return ;
                              }

                              this.dataMacGrp= res;                    
                              this.objMacGrp  =  res[0]; 
                              this.onConfirm(event);

                              //this.$refs.orderNo.focus();
                              //this.setFocus(event);
                              //console.log(this.objMacGrp);
                              // console.log(Object.keys(this.objMacGrp).length);
                        }
                  });      
              }
        });    
      } 

    },
    chkEmpCodeMove(){
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

              

                //  this.setFocus(event);
                //  console.log(this.objEmp);
                //  console.log(Object.keys(this.data).length);
              }
        });             
      } 
    },
    onEmpcodeScanner(e){
      this.mode = "Add";
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

    chkOrderNo(){
     // e.preventDefault();
      let values =this.form.OrderNo.trim() 
      values = values.toUpperCase() ;
      this.form.OrderNo = values.toUpperCase() ;
 
      if (this.formMode =="close")
      {
        this.chkOrderNoClose();
        this.setFocus(event);
      }else if(this.formMode =="move")
      {
        
        this.chkOrderNoMove();    
          
        this.setFocus(event);  
      }else{
         this.queryDataFw();
      }
    },
    chkOrderNoClose(){
      let values =this.form.OrderNo.trim() 
      values = values.toUpperCase() ;
      this.form.OrderNo = values.toUpperCase() ;
      if (this.form.OrderNo.trim() != "")
      { 
        this.chk ="N";        
        
        this.formsaveclose.EmployeeId = this.form.EmpCode;                 
        this.formsaveclose.workOrderID = this.form.OrderNo;
        this.formsaveclose.workStationGrpCd = this.form.MacGrp;
        this.form.user_Id =  this.$localStorage.get("UserCode" );
        this.formsaveclose.addEmployeeId = "";

        if(this.formAddUser.users.length > 0){
              this.formAddUser.users.forEach((d, i) => {
                  if (d.usercode.trim() =="")
                  {
                    this.formsaveclose.addEmployeeId = this.formsaveclose.addEmployeeId  + d.usercode.trim()+","
                  }
              });  
          }   

        this.formsaveclose.user_Id = this.form.user_Id ;
        this.formsaveclose.userapp = "";
        this.formsaveclose.closeChoose = this.selected_save;
        this.formsaveclose.dateSelectFull =  GetDateTimeFormat(null,'YYYY-MM-DD');
 
        this.formsaveclose.endSequence = this.form.confirmClose.trim();
        this.formsaveclose.dateSelect  = this.formdate;
        this.formsaveclose.timeSelect  = this.time;        

        API.mtWorkOrderHGetData({
              data:{ WorkOrderID:this.formsaveclose.workOrderID,WorkOrderStatus :"O"},              
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

                    console.log(this.formsaveclose);

                    API.MtWorkOrderSequence_EmpCloseOrder({
                    data: this.formsaveclose    ,              
                          callblack: res => {    
                              let errB = "";
                              let _statusB = "";
                              let _code = "";
                             // this.onConfirm(e);
                              if (res.length <= 0)                            
                              {   
                               this.setFocus(event); 
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
                                  this.onConfirmClose(event);
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
                                    EmployeeId:this.formsaveclose.EmployeeId,
                                    workStationGrpCd:this.formsaveclose.workStationGrpCd,
                                    WorkOrderId:this.formsaveclose.workOrderID
                                  } ,              
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
                                      //    this.$refs.OrderNo.focus();
                                          return ;
                                      }                  
                                      this.dataCloseMch= res; 
                                      console.log(this.dataCloseMch);
                                   }
                              });   

                              API.MtWorkOrderSequence_EmpGetDataViwe({
                                 data: {
                                    workDate : this.formdate,       
                                    EmployeeId:this.formsaveclose.EmployeeId,
                                    workStationGrpCd:this.formsaveclose.workStationGrpCd,
                                    WorkOrderId:this.formsaveclose.workOrderID
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
                                         // this.$refs.orderNo.focus();
                                          return ;
                                      }                  
                                      this.dataCloseEmp= res; 

                                      console.log(this.dataCloseEmp);
                                   }
                              });
                              this.form.status = "ผ่าน";
                              this.SetFormClose(event);
                              
                              // console.log(Object.keys(this.objMacGrp).length);
                        }
                  });


  
                     

                   // console.log(this.dataEmp);
                   //  console.log(Object.keys(this.data).length);
              }
        });
      }
    },
    chkOrderNoMove(){
        AlertMessage( "success", "IN chkOrderNoMove");
      if (this.form.OrderNo.trim() != "")
      {          
        this.chk ="N";
        let err = "";
        let _status = "";
         
        if(this.form.OrderNo.trim() != "")
        { 
  
          API.MtMoveOrderSequenceGetNextWorkStationGrp({
            data:{ WorkOrderID:this.form.OrderNo,Move_Flag :"N"},              
              callblack: res => {     
                 
                    res.forEach((d, i) => {
                   
                      if (d._result._status == "F")
                        err = err.concat("#", (i + 1), " ", d.workOrderID,  " : ", d._result._message, '<br>');
                    });

                   AlertMessage(err ? "error" : "success", err);
                  this.dataNextGrp = res;    
                 // console.log(this.dataNextGrp)                
                  this.objNextGrp = res[0];  

          
                // console.log(this.objNextGrp)
               // this.setFocus(e);
                  
            }
          });
  
        }

         
         
        
      }

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
         this.chkOrderNoClose();
       } else  if (values.toUpperCase() == "NO")
       {
         this.form.confirmClose = "";
         this.formConfirmClose.confirm ="";
         this.modalConfirmClose = false;
         this.chkOrderNoClose();
       } else
       {
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
                    console.log(this.objUserApprove);
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
    SetFormFollows(e){
      e.preventDefault(); 
      this.workorderid ="";           
      this.dataHead    = [];
      this.dataDetail  = [];
      this.dataItems   = [];
      this.dataLast    = [];

    },

    SetFormMove(e){
      e.preventDefault();      
       
      this.form.MacGrp = "";
      this.form.MacGrpDec = "";
      this.form.EmpCode = "";
      this.form.EmpDesc = "";
      this.form.OrderNo = "";
      this.form.OrderDesc = "";
      this.form.RecvMacGrp = "";
      this.form.RecvMacGrpDesc  = "";
      this.form.User_Id  = "";

      this.formApprov.username = "";
      this.formApprov.password = "";
      this.formApprov.causecode = "";
      this.formApprov.comments = "";
      this.formApprov.approveflag = "";  
        
      this.formsave.EmployeeId = "";
      this.formsave.workOrderId= "";
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

      this.formsave.EmployeeId = "";
      this.formsave.workOrderId = "";
      this.formsave.workStationGrpCd_TO = "";
      this.formsave.moveDate = "";
      this.formsave.EndTime = "";
      this.formsave.user_Id = "";
      this.formsave.appvCauseId = "";
      this.formsave.remarkCause = "";
      this.formsave.causeStatus = "";
            

      
       
    },
   clearObjMacGrp(e){
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
    ,SetFormClose(e){
      e.preventDefault();
      
      this.form.EmpCode = "";

      
      this.form.OrderNo= "";
      this.form.MacGrp = "";
      this.formsave.addEmployeeId = "";
      this.formAddUser.users =[];
      this.form.confirmClose ="";

      this.clearObjMacGrp(e);
      this.ClearObjEmp(e);
      this.ClearObjOrder(e);
 
         
    },

    onSubmit(evt) {
      
           
    },

  },

};

</script>

<style>
hr {  
  margin-bottom: 10px;
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