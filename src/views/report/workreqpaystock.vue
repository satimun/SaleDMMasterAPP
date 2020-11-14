<template>
<div class="animated fadeIn">







<!-- 

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



               
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
  </b-row> -->






















<!-- 
 
 
   
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" > Dashboard-1 :  {{this.showdate_con()}} 
 

              <div class="card-header-actions">
      
      
                            <b-link class="card-header-action btn-minimize" >
                            <i class="fa fa-search fa-lg" style="color:#c8ced3" v-b-modal.modal-multi-F1></i>
                            <b-modal id="modal-multi-F1" 
                                     ref="modal"
                                     size="lg" 
                                     title="เงื่อนไขการแสดงข้อมูล"
                            

                                     @ok="handleOk"
                            >

                            <br>


    <form ref="form" @submit.stop.prevent="handleSubmit">

     <b-row>

        <b-col sm="6">
       
        <b-form-group
          :state="stdate_value_temp"
          label="ระหว่างวันที่"
          label-for="stdate_value_temp"
          invalid-feedback="Value is required"
        >

         <b-form-datepicker id="stdate_value_temp" v-model="stdate_value_temp" class="mb-6"></b-form-datepicker>

        </b-form-group>
         </b-col>




        <b-col sm="6">
        <b-form-group
          :state="enddate_value_temp"
          label="ถึงวันที่"
          label-for="enddate_value_temp"
          invalid-feedback="Value is required"
        >

         <b-form-datepicker id="enddate_value_temp" v-model="enddate_value_temp" class="mb-6"></b-form-datepicker>

        </b-form-group>
        </b-col>

                                
        </b-row>


      </form>                  
     </b-modal>



                </b-link>

                 <b-link class="card-header-action btn-minimize"  @click="QueryData">
                  <i class="fa fa-refresh fa-lg" style="color:#c8ced3"></i>
                </b-link>
                
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up fa-lg" style="color:#c8ced3"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body >








   <div class="row mb-4" >
      <div class="col-xl-4 col-md-6 col-12 mb-3">
         <div class="card-ds1 p-3 " style=" background-color: rgba(40, 116, 166 , 0.2) ;">
            <div class="c-left" style=" background-color: rgba(212, 230, 241 , 0.4) ;">
               <i class="fa fa fa-cubes" style="color:#21618C"></i> 
            </div>
              
            <div class="c-right">
               <div><p style="font-size:12px; color:#ABB2B9">จำนวนบาร์โค๊ดสินค้าที่เบิกจากชั้นวาง</p> </div>
               <div ><span style="color:#7FB3D5; font-size:32px;" >{{dataDashboardobj.f1}}</span></div>


              
               <p style="font-size:12px; color:#F2F3F4">ลูกค้า: <span class="badge badge-pill badge-01" style="font-size:12px;"> {{dataDashboardobj5.f2}} </span>
                 หน่วยงาน <span class="badge badge-pill badge-02" style="font-size:12px;"> {{dataDashboardobj5.f3}} </span>
              
               
                &nbsp;&nbsp;|&nbsp;&nbsp;กระสอบ <span class="badge badge-pill badge-03" style="font-size:12px;"> {{dataDashboardobj.f2}} </span>
                 เศษ <span class="badge badge-pill badge-04" style="font-size:12px;"> {{dataDashboardobj.f3}} </span></p> 
                 


            </div>
            
         </div>
      </div>


      <div class="col-xl-4 col-md-6 col-12 mb-3">
         <div class="card-ds1 p-3"  style=" background-color: rgba(120, 40, 31, 0.2) ;">
            <div class="c-left" style=" background-color: rgba(250, 219, 216, 0.4) ;">
               <i class="fa fa-tachometer"  style="color:#78281F" ></i>
            </div>
            <div class="c-right">
               <div><p style="font-size:12px; color:#ABB2B9">Peak งานเบิกสินค้าลงจากชั้นวาง (top 3)</p> </div>
               <div > <span style="color:#D98880; font-size:32px;" >{{dataDashboardobj2.f1}}</span></div>

               
                 
                     <p style="font-size:12px; color:#F2F3F4">2 &nbsp;&nbsp;<span class="badge badge-pill badge-01" style="font-size:12px;"> {{dataDashboardobj2.f2}} </span>
                      &nbsp;&nbsp;|&nbsp;&nbsp;3&nbsp;&nbsp;<span class="badge badge-pill badge-02" style="font-size:12px;"> {{dataDashboardobj2.f3}} </span></p> 
                
                     
                     
            </div>

         </div>
      </div>
      <div class="col-xl-4 col-md-6 col-12 mb-3">
         <div class="card-ds1 p-3"  style=" background-color: rgba(17, 122, 101 , 0.2) ;">
            <div class="c-left" style=" background-color: rgba(208, 236, 231   , 0.4);">
               <i class="fa fa-hourglass-half" style="color:#196F3D" ></i>
            </div>
            <div class="c-right">

               <div><p style="font-size:12px; color:#ABB2B9">เวลาที่ใช้ในการเบิกลงจากชั้นวางต่อใบเบิก (top 3)</p> </div>
               <div > <span style="color:#A2D9CE; font-size:32px;" >{{dataDashboardobj3.f1}} </span></div>

               
                 
                     <p style="font-size:12px; color:#F2F3F4">2 &nbsp;&nbsp;<span class="badge badge-pill badge-01" style="font-size:12px;"> {{dataDashboardobj3.f2}} </span>
                      &nbsp;&nbsp;|&nbsp;&nbsp;3&nbsp;&nbsp;<span class="badge badge-pill badge-02" style="font-size:12px;"> {{dataDashboardobj3.f3}} </span></p> 
                
                     

            </div>
         </div>
      </div>

   
   </div>




        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>

 -->



 
 
   
    <b-row>




      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" > Dashboard-1 :  {{this.showdate_con()}} 
 

              <div class="card-header-actions">
      
      
                            <b-link class="card-header-action btn-minimize" >
                             


                            <i class="fa fa-search fa-sm" style="color:#c8ced3" v-b-modal.modal-multi-F1></i>
                            <b-modal id="modal-multi-F1" 
                                     ref="modal"
                                     size="lg" 
                                     title="เงื่อนไขการแสดงข้อมูล"
                                     @ok="handleOk"

                                     centered
                            
                                      no-close-on-backdrop
                                      

                                      okVariant="success"
                                      cancelVariant="danger"
                            


                            >

                            <br>


    <form ref="form" @submit.stop.prevent="handleSubmit">

     <b-row>

        <b-col sm="6">
       
        <b-form-group
          :state="stdate_value_temp"
          label="ระหว่างวันที่"
          label-for="stdate_value_temp"
          invalid-feedback="Value is required"
        >

         <b-form-datepicker id="stdate_value_temp" v-model="stdate_value_temp" class="mb-6"></b-form-datepicker>

        </b-form-group>
         </b-col>




        <b-col sm="6">
        <b-form-group
          :state="enddate_value_temp"
          label="ถึงวันที่"
          label-for="enddate_value_temp"
          invalid-feedback="Value is required"
        >

         <b-form-datepicker id="enddate_value_temp" v-model="enddate_value_temp" class="mb-6"></b-form-datepicker>

        </b-form-group>
        </b-col>

                                
        </b-row>


      </form>                  
     </b-modal>



                </b-link>

                 <b-link class="card-header-action btn-minimize"  @click="QueryData">
                  <i class="fa fa-refresh fa-sm" style="color:#c8ced3"></i>
                </b-link>
                
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body >









<!-- <div class="p-1"> -->



  
   <div class="row mb-4" >
      <div class="col-xl-4 col-md-6 col-12 mb-3">
    
         <div class="card-ds1 p-3 " style=" background-color: rgba(128, 139, 150, 0.2) ;">
            
            

           
                      
            <div class="c-left-chart" style="background-color: rgba(128, 139, 150, 0.0)">

                 <div class="XXX2" >
                 <canvas id="graph3"  width="180" height="100"></canvas>


              </div>



<!-- 
               <i class="fa fa-shopping-cart" style="color:#21618C"></i>  -->




            </div>
              
            <div class="c-right">

<!--               
               <div><p style="font-size:12px; color:#ABB2B9">จำนวนบาร์โค๊ดที่เบิกจากชั้นวางเสร็จแล้ว</p>  </div>
               <div ><span style="color:#7FB3D5; font-size: calc(12px + (18-14)*(100vw - 325px)/(1600 - 50));" >{{dataDashboardobj.f1}} </span>  </div>



               <div class="row mb-12" style="font-size:12px; color:#F2F3F4; display: block; argin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;" >
               
               เบิกแบบกระสอบ: <span class="badge badge-pill badge-01" style="font-size:12px;"> 12{{dataDashboardobj.f2}}</span>
               </div>

                <div class="row mb-12" style="font-size:12px; color:#F2F3F4 ; display: block; argin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;" >


               เบิกแบบเศษ:<span class="badge badge-pill badge-02" style="font-size:12px;"> 33 {{dataDashboardobj.f3}} </span>
               </div> 

              
rgba(55, 173, 221, 0.5)','rgba(217, 136, 128   , 0.5)
 -->
   



    
   <div class="analytics-metrics">
     <p style="font-size:12px; color:#ABB2B9"><i class="fa fa-shopping-cart" >&nbsp;&nbsp;</i> จำนวนรายการที่ส่งให้คลังเบิกสินค้า</p>  

     
 
                             

 
                           
     <b-link @click="cdsBCshow"><p class="analytics-count"  style="color:#cad6eb  ; font-size:32px;">{{dataDashboardobj.f1| number(0)}}</p></b-link>
     <!-- <p class="analytics-metric" style="font-size:12px; color:#F2F3F4;">แบบกระสอบ<span> {{(dataDashboardobj.f2/dataDashboardobj.f1)*100| number(2)}} % </span></p>
     <p class="analytics-metric" style="font-size:12px; color:#F2F3F4;">แบบเศษ<span> {{(dataDashboardobj.f3/dataDashboardobj.f1)*100| number(2)}} %</span></p> -->

     <b-link @click="cdsBCPACKshow"><p class="analytics-metric" style="font-size:12px; color:#A2D9CE;" ><span style="font-size:12px; color:rgba(55, 173, 221, 0.8)">เบิกขายลูกค้า</span><span> {{dataDashboardobj.f2| number(0)}}  </span></p></b-link>
     <b-link @click="cdsBCPIECEshow"><p class="analytics-metric" style="font-size:12px; color:#F2D7D5; " ><span style="font-size:12px; color:rgba(217, 136, 128   , 0.8)">เบิกให้หน่วยงานภายใน</span><span> {{dataDashboardobj.f3| number(0)}} </span></p></b-link>



  </div>



            </div>

         

            
            
         </div>
      </div>


      <div class="col-xl-4 col-md-6 col-12 mb-3">
         <div class="card-ds1 p-3"  style=" background-color: rgba(128, 139, 150, 0.2) ;">


                 <div class="XXX2" >
                  
                 <canvas id="graph4"  width="400" height="120"></canvas>


              </div>



<!--            
            <div class="c-left" style=" background-color: rgba(250, 219, 216, 0.4) ;">
               <i class="fa fa-tachometer"  style="color:#78281F" ></i>
            </div>
            <div class="c-right">
               <div><p style="font-size:12px; color:#ABB2B9">สรุปจำนวนการเบิกสินบาร์โค๊ดสินค้าสูงสุดตามช่วงเวลา (top 3)</p> </div>
               <div > <span style="color:#D98880; font-size: calc(12px + (18-14)*(100vw - 325px)/(1600 - 50));" >{{dataDashboardobj2.f1}}</span></div>

               
                 
                     <p style="font-size:12px; color:#F2F3F4">2&nbsp;&nbsp;<span class="badge badge-pill badge-01" style="font-size:12px;"> {{dataDashboardobj2.f2}} </span>
                      &nbsp;&nbsp;|&nbsp;&nbsp;3&nbsp;&nbsp;<span class="badge badge-pill badge-02" style="font-size:12px;"> {{dataDashboardobj2.f3}} </span></p> 
                
                     
                     
            </div> -->

         </div>
      </div>

        <div class="col-xl-4 col-md-6 col-12 mb-3">
    
            <div class="card-ds1 p-3 " style=" background-color: rgba(128, 139, 150, 0.2) ;">
          
             
              
                  <div class="c-row">


    
   <div class="analytics-metrics">
     <p style="font-size:12px; color:#ABB2B9"><i class="fa fa-eye-slash" >&nbsp;&nbsp;</i> จำนวนรายการที่อนุมัติปิดการค้นหา</p>  
       

 
                           
      <b-link @click="cdsBCstopshow"><p class="analytics-count"  style="color:#cad6eb  ; font-size:32px;" >{{dataDashboardobj3.f1| number(0)}}</p></b-link>
     <b-link @click="cdsBCPACKstopshow"><p class="analytics-metric" style="font-size:12px; color:#A2D9CE;" ><span style="font-size:12px; color:rgba(55, 173, 221, 0.8)">เบิกขายลูกค้า</span><span> {{dataDashboardobj3.f2| number(0)}}  </span></p></b-link>
     <b-link @click="cdsBCPIECEstopshow"><p class="analytics-metric" style="font-size:12px; color:#F2D7D5; " ><span style="font-size:12px; color:rgba(217, 136, 128   , 0.8)">เบิกให้หน่วยงานภายใน</span><span> {{dataDashboardobj3.f3| number(0)}} </span></p></b-link>



  </div>




                 </div>
         </div>
        </div>


      

   
   </div>
<!-- </div> -->





<!-- 
   
    <b-row>
      <b-col lg="12">

 
      
      <div class="progress-group-bars" >
                    <b-progress height={} class="progress-xs" :value=98.09 ></b-progress>
                  </div>

      </b-col>            
      </b-row> 
      
      
      -->














        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>














    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" > กราฟแสดงข้อมูลปริมาณการขอเบิกสินค้าตามช่วงเวลา (นับตามใบเบิก+รายการสินค้าที่ส่งคลัง) &nbsp;&nbsp;|&nbsp;&nbsp;
              
              <i class="fa fa-line-chart" style="color:#c8ced3; cursor: pointer; " @click="updateChartType('line')"></i>
            &nbsp;&nbsp;<i class="fa fa-bar-chart" style="color:#c8ced3; cursor: pointer;"  @click="updateChartType('bar')"> </i>&nbsp;&nbsp;

            <span class="badge badge-pill badge-05" style="font-size:10px;">คลิ๊กเปลี่ยนประเภทกราฟ </span>


              <div class="card-header-actions">
      
<!--       
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse2>
                  <i class="fa fa-th-list fa-lg"></i>
                </b-link>

      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse2>
                  <i class="fa fa-th-large fa-lg"></i>
                </b-link> -->

                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>





        

    <b-row>
      
            <b-col sm="12">

                <div class="XXX" >
                <canvas id="graph1"  width="400" height="400"></canvas>


              </div>
             
            </b-col>


 
 

    </b-row>    

 

       
    <b-row>
      <b-col lg="12" style="color: rgba(229, 231, 233 , 1.0)">

 
      

                     <i class="fa fa-shopping-cart" style="color: rgba(55, 173, 221,  0.5) " > </i>
                     &nbsp;&nbsp; Start-time:&nbsp;&nbsp;  {{dataDashboardobjs2.desc1}} 
                     &nbsp;&nbsp;|&nbsp;&nbsp;
                     <i class="fa fa-cubes" style="color:rgba(217, 136, 128   ,  0.5) " > </i>
                     &nbsp;&nbsp; Start-time: &nbsp;&nbsp;  {{dataDashboardobjs3.desc1}}




  

                   
  


      </b-col>            
      </b-row> 



  
        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>









   
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" > Dashboard-2 :  {{this.showdate_con()}} 
 

              <div class="card-header-actions">

             
                            <b-link class="card-header-action btn-minimize" >



                           



                            <i class="fa fa-search fa-sm" style="color:#c8ced3" v-b-modal.modal-multi-F2></i>
                            <b-modal id="modal-multi-F2" 
                                     ref="modal"
                                     size="lg" 
                                     title="เงื่อนไขการแสดงข้อมูล"
                                     centered
                            
                                      no-close-on-backdrop
                                      @ok="handleOk" 

                                      okVariant="success"
                                      cancelVariant="danger"
                            
             

                                     
                            >

                            <br>


    <form ref="form" @submit.stop.prevent="handleSubmit">

     <b-row>

        <b-col sm="6">
       
        <b-form-group
          :state="stdate_value_temp"
          label="ระหว่างวันที่"
          label-for="stdate_value_temp"
          invalid-feedback="Value is required"
        >

         <b-form-datepicker id="stdate_value_temp" v-model="stdate_value_temp" class="mb-6"></b-form-datepicker>

        </b-form-group>
         </b-col>




        <b-col sm="6">
        <b-form-group
          :state="enddate_value_temp"
          label="ถึงวันที่"
          label-for="enddate_value_temp"
          invalid-feedback="Value is required"
        >

         <b-form-datepicker id="enddate_value_temp" v-model="enddate_value_temp" class="mb-6"></b-form-datepicker>

        </b-form-group>
        </b-col>

                                
        </b-row>


      </form>      


     


     </b-modal>



                </b-link>

                 <b-link class="card-header-action btn-minimize"  @click="QueryData">
                  <i class="fa fa-refresh fa-sm" style="color:#c8ced3"></i>
                </b-link>
                
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body >









<!-- <div class="p-1"> -->
   <div class="row mb-4" >


      <div class="col-xl-4 col-md-6 col-12 mb-4">
         <div class="card-ds1 p-3 " style=" background-color: rgba(128, 139, 150, 0.2) ;">


           
            <div class="c-left" style=" background-color: rgba(237, 187, 153   , 0.4) ;">
               <i class="fa fa-fighter-jet" style="color:#6E2C00"></i> 
            </div>
              
            <div class="c-right">
               <div>
                   <p style="font-size:12px; color:#ABB2B9">
                 
                 จำนวนรายการที่ส่งให้คลังเบิกแบบเร่งด่วน (เวลาที่ขายส่งใบเบิก-รอบการจัดส่งไม่ถึง 1 ชม.)</p> 
               </div>
               <div ><b-link @click="cdsBCSPEEDshow"><span style="color:#EDBB99; font-size: calc(12px + (18-14)*(100vw - 325px)/(1600 - 50));" 
               
                >{{dataDashboardobj4.f1| number(0)}} </span> 
               
               </b-link> </div>



               
               <p style="font-size:12px; color:#F2F3F4">เบิกขายลูกค้า <b-link @click="cdsBCSPEEDPACKshow"> <span class="badge badge-pill badge-01" style="font-size:12px;" 
               > {{dataDashboardobj4.f2| number(0)}} </span></b-link>
                 เบิกภายในหน่วยงาน  <b-link @click="cdsBCSPEEDPIECEshow"><span class="badge badge-pill badge-02" style="font-size:12px;"
                 > {{dataDashboardobj4.f3| number(0)}} </span></b-link></p>
              
               
            


            </div>      






            
         </div>
      </div>


      <div class="col-xl-4 col-md-6 col-12 mb-4">
         <div class="card-ds1 p-3"  style=" background-color: rgba(128, 139, 150, 0.2) ;">
            <div class="c-left" style=" background-color: rgba(195, 155, 211, 0.4) ;">
               <i class="fa fa-trash-o"  style="color:#633974" ></i>
            </div>
            <div class="c-right">
               <div><p style="font-size:12px; color:#ABB2B9">สร้างรายการขอเบิกแล้วมียกเลิก (ยังไม่ส่งคลัง)</p> </div>
               <div ><b-link @click="cdsBCCUSshow"> <span style="color:#AF7AC5; font-size: calc(12px + (18-14)*(100vw - 325px)/(1600 - 50));" 
               >{{dataDashboardobj5.f1| number(0)}}</span></b-link></div>

              
               <p style="font-size:12px; color:#F2F3F4">เบิกขายลูกค้า:  <b-link @click="cdsBCCUSPACKshow"><span class="badge badge-pill badge-01" style="font-size:12px;"
               > {{dataDashboardobj5.f2| number(0)}} </span></b-link>
                 เบิกภายในหน่วยงาน:<b-link @click="cdsBCCUSPIECEshow"><span class="badge badge-pill badge-02" style="font-size:12px;"
                > {{dataDashboardobj5.f3| number(0)}} 
                   </span></b-link></p>
               <!-- <p style="font-size:12px; color:#F2F3F4">จำนวนบาร์โค๊ดสินค้าที่เบิกจากชั้นวาง</p> -->
                     
                     
            </div>

         </div>
      </div>


      <div class="col-xl-4 col-md-6 col-12 mb-4">
         <div class="card-ds1 p-3"  style=" background-color: rgba(128, 139, 150 , 0.2) ;">
            <div class="c-left" style=" background-color: rgba(247, 220, 111     , 0.4);">
               <i class="fa fa-trash" style="color:#7D6608  " ></i>
            </div>
            <div class="c-right">

               <div><p style="font-size:12px; color:#ABB2B9">สร้างรายการขอเบิกแล้วมียกเลิก (ส่งคลังเบิกแล้ว)</p> </div>
               <div >
                 <b-link @click="cdsBCDEPshow"> 
                  <span style="color:#F7DC6F; font-size: calc(12px + (18-14)*(100vw - 325px)/(1600 - 50));" 
                  >{{dataDashboardobj6.f1| number(0)}} </span>
                  </b-link></div>

                   
                 
                     <p style="font-size:12px; color:#F2F3F4">เบิกขายลูกค้า: 
                        <b-link @click="cdsBCDEPPACKshow"> 
                       <span class="badge badge-pill badge-01" style="font-size:12px;"
                        > {{dataDashboardobj6.f2| number(0)}} </span></b-link>
                      เบิกภายในหน่วยงาน:
                        <b-link @click="cdsBCDEPPIECEshow"> 
                      <span class="badge badge-pill badge-02" style="font-size:12px;"
                       > {{dataDashboardobj6.f3| number(0)}} </span>
                      </b-link></p> 
                
                     

            </div>
         </div>
      </div>

      <!-- <div class="col-xl-3 col-md-6 col-12 mb-3">
         <div class="card-ds1 p-3"  style=" background-color: rgba(128, 139, 150 , 0.2) ;">
            <div class="c-left" style=" background-color: rgba(229, 231, 233  , 0.4);">
               <i class="fa fa-chain-broken" style="color:#424949  " ></i>
            </div>
            <div class="c-right">

               <div><p style="font-size:12px; color:#ABB2B9">จำนวนบาร์โค๊ดที่เบิกจากชั้นวางเสร็จแล้วและมีการยกเลิก</p> </div>
               <div > 

                 <b-link @click="cdsBCDELshow"> 
                 
                 <span style="color:#E5E7E9 ; font-size: calc(12px + (18-14)*(100vw - 325px)/(1600 - 50));" 
                  v-b-modal.modal-multi-data>{{dataDashboardobj7.f1| number(0)}} </span></b-link></div>

               
                 
                     <p style="font-size:12px; color:#F2F3F4">เบิกแบบกระสอบ:<span class="badge badge-pill badge-01" style="font-size:12px;"> {{dataDashboardobj7.f2| number(0)}} </span>
                     เบิกแบบเศษ:<span class="badge badge-pill badge-02" style="font-size:12px;"> {{dataDashboardobj7.f3| number(0)}} </span></p> 
                
                     

            </div>
         </div>
      </div> -->
   
   </div>
<!-- </div> -->






















        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>



     


                            <b-modal id="modal-multi-data" 
                                     ref="modal"
                                   
                                     title="Table : แสดงข้อมูล"
                                

                                      centered
                            
                                      no-close-on-backdrop
                                      

                                      okVariant="success"
                                      ok-only

                                      size="xl" 

                            


                            >

                            <br>
<!-- 


 <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" > Table : ข้อมูลการเบิกสินค้าลงจากชั้นวาง {{this.showdate_con()}} 
 

              <div class="card-header-actions">

             
                           
     
              </div>


            </div>
              <b-collapse id="collapse44" visible>


              <b-card-body > -->

        <!-- <b-row style="background:#293949;" >
            <br />  -->
        <gridv2
                ref="gridDrawing"
                
                :fields="fieldData"
                :name="name"
                :btnGrid="true"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"

        
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawing"
                :o_navfooter_visible="true"

                :o_grid_responsive="true"

                
              
                    
            >


        <template v-slot:col2string="{item, itemIndex}">


             <span v-if="item.col14string=='เร่งด่วน'" class="badge badge-pill badge-danger">{{item.col2string}} </span>
             <span v-else> {{item.col2string}}  </span>


     
        </template>





            </gridv2>

            <!-- </b-row> -->

            
<!-- 


               
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
  </b-row>  -->




  


</b-modal>





 </div>





  
</template>

<script>




import Vue from 'vue'
 
import Chart from 'chart.js'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels';

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

var myChart1 = null;


var myChart2 = null;



var myChart3 = null;



var myChart4 = null;
 

export default {  




  name: 'forms',

  
 
  mounted () {
   // this.QueryData();




    this.FSidebarToggler=false; 
    

      myChart1 = null;

      myChart2 = null;

      
      myChart3 = null;


      myChart4 = null;

      this.stdate_value= new Date();
      this.enddate_value=new Date();



      this.stdate_value_temp= new Date();
      this.enddate_value_temp=new Date();

      this.QueryData();

      

  

  



    
  },
 data: {
    date: '2017-07-04',

  


  },

components: {
    ChartJsPluginDataLabels,
  },

  data () {



     
    return {
      selected: [], // Must be an array reference!
      show: true,
      name : 'myAsset',
      icon_visible:true,
      file_visible: false,




      Roudtop1 : "",
       Roudtop2 : "",
       Roudtop3 : "",

    dataDrawing :[],
    dataDrawingdel:[],




    fieldDatastoppay :[


       {
        name: "col1datetime",
        title: "วันที่อนุมัติ",
        sortField: "col1datetime",
        class: "text-center",
        visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYYY");
                    
                    return tmp ? tmp  : "";
                   }

        }, 
        
        {
        name: "col2string",
        title: "เลขที่ใบเบิก",
        sortField: "col2string",
        class: "text-center",
        visible: true,
       
        },  

        {
        name: "col3string",
        title: "รหัสสินค้า",
        sortField: "col3string",
        class: "text-left",
        visible: true,
       
        },  


        {
        name: "col4string",
        title: "รหัสสินค้า",
        sortField: "col4string",
        class: "text-left",
        visible: true,
       
        },  


        {
         name: "col5float",
         title: "จน.เบิก",
         sortField: "col5float",
         class: "text-center",
         visible: true,

       callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }



         },  



        {
         name: "col6float",
         title: "จน.ที่คลังเบิกแล้ว",
         sortField: "col6float",
         class: "text-center",
         visible: true,

       callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }




         },  

        {
         name: "col7float",
         title: "จน.ที่ขอปิดการค้นหา",
         sortField: "col7float",
         class: "text-center",
         visible: true,

       callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }



         },  


       {
         name: "col8float",
         title: "เวลาขายที่อนุมัติ",
         sortField: "col8float",
         class: "text-center",
         visible: true,


                callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }


         },  


        {
        name: "col9string",
        title: "ประเภทการเบิก",
        sortField: "col9string",
        class: "text-center",
        visible: true,


       
        },  

        {
        name: "col10string",
        title: "รหัสคลัง",
        sortField: "col10string",
        class: "text-center",
        visible: true,
       
        },  

       {
        name: "col11string",
        title: "รอบการจัดส่ง",
        sortField: "col11string",
        class: "text-center",
        visible: true,
       
        },  
      {
        name: "col12string",
        title: "รหัสผู้อนุมัติ",
        sortField: "col12string",
        class: "text-center",
        visible: true,
       
        },  
      {
        name: "col13string",
        title: "ชื่อผู้อนุมัติ",
        sortField: "col13string",
        class: "text-center",
        visible: true,
       
        },  

    ],



    fieldData:[
      
     
      
       {
        name: "col1datetime",
        title: "วันที่ส่งคลัง",
        sortField: "col1datetime",
        class: "text-center",
        visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYYY");
                    
                    return tmp ? tmp  : "";
                   }

        },  


        {
        name: "col2string",
        title: "เลขที่ใบเบิก",
        sortField: "col2string",
        class: "text-center",
        visible: true,
       
        },  


        
        {
        name: "col3string",
        title: "รหัสสินค้า",
        sortField: "col3string",
        class: "text-left",
        visible: true,

        
        },
       

         {
        name: "col4string",
        title: "ชื่อสินค้า",
        sortField: "col4string",
        class: "text-left",
        visible: true,
       

         }
         ,

 
 
         {
         name: "col5float",
         title: "จน.เบิก",
         sortField: "col5float",
         class: "text-center",
         visible: true,

                callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }


         },


 
        {
        name: "col6string",
        title: "รหัสลูกค้า",
        sortField: "col6string",
        class: "text-center",
       

        },
       {
        name: "col7string",
        title: "ชื่อลูกค้า",
        sortField: "col7string",
        class: "text-center",
       

        },
 
        {
         name: "col8float",
         title: "เวลาที่ส่งคลัง",
         sortField: "col8float",
        class: "text-center",
         visible: true,

                callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }




         } ,

    
 
        {
        name: "col9string",
        title: "ประเภทใบเบิก",
        sortField: "col9string",
        class: "text-center",
        visible: true,



        } ,


        {
        name: "col10string",
        title: "รหัสคลัง",
        sortField: "col10string",
        class: "text-center",
        visible: true,



        } ,


        {
        name: "col11string",
        title: "รอบจัดส่งสินค้า",
        sortField: "col11string",
        class: "text-center",
        visible: true,



        } ,

        // {
        // name: "col12float",
        // title: "เวลาที่ส่งให้คลัง",
        // sortField: "col12float",
        // class: "text-center",
        // visible: true,


        // } ,

        {
        name: "col13string",
        title: "มีเวลาในการจัดเบิก",
        sortField: "col13string",
        class: "text-center",
        visible: true,



        } ,


        {
        name: "col14string",
        title: "หมายเหตุ",
        sortField: "col14string",
        class: "text-center",
        visible: true,



        } ,





    ],


    

    fieldDatamain:[
      
     
      
       {
        name: "col1datetime",
        title: "วันที่ส่งคลัง",
        sortField: "col1datetime",
        class: "text-center",
        visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYYY");
                    
                    return tmp ? tmp  : "";
                   }

        },  


        {
        name: "col2string",
        title: "เลขที่ใบเบิก",
        sortField: "col2string",
        class: "text-center",
        visible: true,






        
        },  


        
        {
        name: "col3string",
        title: "รหัสสินค้า",
        sortField: "col3string",
        class: "text-left",
        visible: true,

        
        },
       

         {
        name: "col4string",
        title: "ชื่อสินค้า",
        sortField: "col4string",
        class: "text-left",
        visible: true,
       

         }
         ,

 
 
         {
         name: "col5float",
         title: "จน.เบิก",
         sortField: "col5float",
         class: "text-center",
         visible: true,

                callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }


         },


 
        {
        name: "col6string",
        title: "รหัสลูกค้า",
        sortField: "col6string",
        class: "text-center",
       

        },
       {
        name: "col7string",
        title: "ชื่อลูกค้า",
        sortField: "col7string",
        class: "text-center",
       

        },
 
        {
         name: "col8float",
         title: "เวลาที่ส่งคลัง",
         sortField: "col8float",
        class: "text-center",
         visible: true,
       callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }



         } ,

    
 
        {
        name: "col9string",
        title: "ประเภทใบเบิก",
        sortField: "col9string",
        class: "text-center",
        visible: true,



        } ,


        {
        name: "col10string",
        title: "รหัสคลัง",
        sortField: "col10string",
        class: "text-center",
        visible: true,



        } ,


        {
        name: "col11string",
        title: "รอบจัดส่งสินค้า",
        sortField: "col11string",
        class: "text-center",
        visible: true,



        } ,

        // {
        // name: "col12float",
        // title: "เวลาที่ส่งให้คลัง",
        // sortField: "col12float",
        // class: "text-center",
        // visible: true,


        // } ,

        {
        name: "col13string",
        title: "มีเวลาในการจัดเบิก",
        sortField: "col13string",
        class: "text-center",
        visible: true,



        } ,


        {
        name: "col14string",
        title: "หมายเหตุ",
        sortField: "col14string",
        class: "text-center",
        visible: true,



        } ,





    ],

     
    fieldDatadel:[
      
     
      
       {
        name: "col1datetime",
        title: "วันที่ยกเลิก",
        sortField: "col1datetime",
        class: "text-center",
        visible: true,
                callback: value => {
                    
                    let tmp =  GetDateTimeFormat(value,"DDMMYYYY");
                    
                    return tmp ? tmp  : "";
                   }

        },  


        {
        name: "col2string",
        title: "Barcode",
        sortField: "col2string",
        class: "text-center",
        visible: true,






        
        },  


        
        {
        name: "col3float",
        title: "จำนวน",
        sortField: "col3float",
        class: "text-center",
        visible: true,

          callback:(v) => {
          if (this.$root.$options.filters.number(v,2) != 0) {

          return '<spen> '+this.$root.$options.filters.number(v,2)+' </span> ';   
          } else{
              '<spen>/span> '
          } 
 
           }


        
        },
       

         {
        name: "col4float",
        title: "นน.สุทธิ",
        sortField: "col4float",
        class: "text-center",
        visible: true,
       

         }
         ,

 
 
        {
        name: "col6string",
        title: "ประเภทงานเบิก",
        sortField: "col6string",
        class: "text-center",
       

        },
       {
        name: "col7string",
        title: "เวลาที่ยกเลิก",
        sortField: "col7string",
        class: "text-center",
       

        },
 
        {
        name: "col8string",
        title: "ใบเบิก",
        sortField: "col8string",
        class: "text-center",
        visible: true,



        } ,

    
 
        {
        name: "col9string",
        title: "ประเภทใบเบิก",
        sortField: "col9string",
        class: "text-center",
        visible: true,



        } ,


        {
        name: "col10string",
        title: "รหัสคลัง",
        sortField: "col10string",
        class: "text-center",
        visible: true,



        } ,


        {
        name: "col11string",
        title: "รอบจัดส่งสินค้า",
        sortField: "col11string",
        class: "text-center",
        visible: true,



        } ,

        {
        name: "col12float",
        title: "เวลาที่ส่งให้คลัง",
        sortField: "col12float",
        class: "text-center",
        visible: true,


        } ,

        {
        name: "col13string",
        title: "มีเวลาในการจัดเบิก",
        sortField: "col13string",
        class: "text-center",
        visible: true,



        } 


    ],



    cdsBC :[],

    cdsBCstop :[],


    cdsBCPACK :[],
    cdsBCPIECE:[],


    cdsBCPACKstop :[],
    cdsBCPIECEstop:[],



     cdsBCSENDROUND :[],

     cdsBCSPEED :[],
     cdsBCSPEEDPACK :[],
     cdsBCSPEEDPIECE:[],


     cdsBCCUS :[],
     cdsBCCUSPACK :[],
     cdsBCCUSPIECE:[],


     cdsBCDEP :[],
     cdsBCDEPPACK :[],
     cdsBCDEPPIECE:[],

















      
      FSidebarToggler:false,

      stdate_value: null,
      enddate_value:null,
      stdate_value_temp: null,
      enddate_value_temp:null,


      dataDashboardobj:{},
      setdataDashboardobj:[],


      dataDashboardobj2:{},
      setdataDashboardobj2:[],



      dataDashboardobj22:{},
      setdataDashboardobj22:[],


      dataDashboardobj3:{},
      setdataDashboardobj3:[],
      

      dataDashboardobj4:{},
      setdataDashboardobj4:[],


      dataDashboardobj5:{},
      setdataDashboardobj5:[],


      dataDashboardobj6:{},
      setdataDashboardobj6:[],

      dataDashboardobj7:{},
      setdataDashboardobj7:[],
      

      dataDashboardobj8:{},
      setdataDashboardobj8:[],


      dataDashboardobjs1:{},
      setdataDashboardobjs1:[],


      dataDashboardobjs2:{},
      setdataDashboardobjs2:[],
 
      dataDashboardobjs3:{},
      setdataDashboardobjs3:[],

            dataDashboardobjs4:{},
      setdataDashboardobjs4:[],



        fieldDrawing :[
    
       {
        name: "COMPANY",
        title: "รหัสบริษัท",
        sortField: "mnt",
        class: "text-rig",
        visible: true
        },
       {
        name: "ASSETNO",
        title: "รหัสทรัพย์สิน",
        sortField: "mnt",
        class: "text-rig",
        visible: true
        },
       {
        name: "ASSETNAME",
        title: "ชื่อทรัพย์สิน",
        sortField: "mnt",
        class: "text-rig",
        visible: true
        },
       {
        name: "ASSETDATE",
        title: "วันที่ซื้อ",
        sortField: "mnt",
        class: "text-rig",
        visible: true
        },


       {
        name: "POSITNAME",
        title: "ตำแหน่งที่จัดเก็บ",
        sortField: "mnt",
        class: "text-rig",
        visible: true
        },


        ],
        dataDrawingAssetAll:[],

        

        dataDrawingAssetValueDom : {},

        

    }
    
  },
  methods: {

	async deleteSuccess() {
			if (
				await this.$root.$confirm(
					'Delete?',
					'Are you sure you want to delete with success?',
					{ color: 'red' }
				)
			) {
				this.$root.$dialogLoader.start(
					'Deleting...',
					{},
					() => {
						return new Promise((resolve, reject) => {
							setTimeout(() => {
								resolve();
								// reject( 'Unable to remove client!' )
							}, 3000);
						});
					},
					true
				);
			}
		},
    handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },

   handleSubmit() {


 
        this.stdate_value  = this.stdate_value_temp;
        this.enddate_value = this.enddate_value_temp;

     

           this.QueryData();


        this.$nextTick(() => {
          this.$bvModal.hide('modal-multi-F1')
        })

        this.$nextTick(() => {
          this.$bvModal.hide('modal-multi-F2')
        })



      },


showdate_con() {
   

       
   if ( this.formatDate(this.stdate_value) == this.formatDate( this.enddate_value))
   {
        return   this.formatDate(this.stdate_value);
   } else  {
        return   this.formatDate(this.stdate_value) +'-'+ this.formatDate( this.enddate_value);
   }

    
   
}
,

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
     

formatDateCon(date) {
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

        return monthNum[monthIndex] + '/' + day  + '/' + year;

        
    }, 


   updateChartType(chartType) {
  // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild


  var options  =  myChart1.options;
  var data    =  myChart1.data;
  var plugins =  myChart1.plugins;




   myChart1.destroy();
     var ctx = document.getElementById("graph1").getContext("2d");
   myChart1 = new Chart(ctx, {
     type: chartType,
     data: data,
     options:options
   });





},

cdsBCshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBC ;


   this.fieldData   = this.fieldDatamain;


   this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBC OK");


},



cdsBCstopshow()
{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCstop ;

   this.fieldData=[];
   this.fieldData   = this.fieldDatastoppay;


   this.$bvModal.show('modal-multi-data');

  
   console.log("cdsBCstopshow OK");


},






cdsBCSENDROUNDshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCSENDROUND ;

    this.fieldData   = this.fieldDatamain;

    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCSENDROUND OK");


},





cdsBCPACKshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCPACK ;

    this.fieldData   = this.fieldDatamain;

    this.$bvModal.show('modal-multi-data');
  
   console.log(this.cdsBCPACK);


},




cdsBCPACKstopshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCPACKstop ;

    this.fieldData   = this.fieldDatastoppay;
    this.$bvModal.show('modal-multi-data');
  
   console.log(this.cdsBCPACK);


},



cdsBCPIECEshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCPIECE ;
    this.fieldData   = this.fieldDatamain;

    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCPIECE OK");


},



cdsBCPIECEstopshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCPIECEstop ;
    this.fieldData   = this.fieldDatastoppay;
    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCPIECE OK");


},





cdsBCSPEEDshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCSPEED ;
    this.fieldData   = this.fieldDatamain;
    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCSPEED OK");


},


cdsBCSPEEDPACKshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCSPEEDPACK ;

    this.fieldData   = this.fieldDatamain;
  this.$bvModal.show('modal-multi-data');
   console.log("cdsBCSPEEDPACK OK");


},

cdsBCSPEEDPIECEshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCSPEEDPIECE ;
    this.fieldData   = this.fieldDatamain;

    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCSPEEDPIECE OK");


},


cdsBCCUSshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCCUS ;
    this.fieldData   = this.fieldDatamain;

    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCCUS OK");


},


cdsBCCUSPACKshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCCUSPACK ;
    this.fieldData   = this.fieldDatamain;

    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCCUSPACK OK");


},

cdsBCCUSPIECEshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCCUSPIECE ;
    this.fieldData   = this.fieldDatamain;
  this.$bvModal.show('modal-multi-data');
   console.log("cdsBCCUSPIECE OK");


},


cdsBCDEPshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCDEP ;
    this.fieldData   = this.fieldDatamain;
    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCDEP OK");


},


cdsBCDEPPACKshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCDEPPACK ;
    this.fieldData   = this.fieldDatamain;

    this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCDEPPACK OK");


},

cdsBCDEPPIECEshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.cdsBCDEPPIECE ;
  this.fieldData   = this.fieldDatamain;

  this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCDEPPIECE OK");


},

cdsBCDELshow()

{

   this.dataDrawing = [] ;
   this.dataDrawing = this.dataDrawingdel ;


   this.fieldData   = this.fieldDatadel;


   this.$bvModal.show('modal-multi-data');
  
   console.log("cdsBCDELshow OK");


},








        QueryData(){



        var graph1_pay=[];
        var graph1_rec=[];

        var graph1_cus=[];
        var graph1_kkf=[];


        var graph1_pack=[];
        var graph1_car=[];



        var dataDrawingGraph_pay=[];
        var dataDrawingGraph_rec=[];


        var dataDrawingGraph_pack=[];
        var dataDrawingGraph_car=[];



        var dataDrawingGraph_cus=[];
        var dataDrawingGraph_kkf=[];


        // this.graph1_rec=null;
        //     this.dataDrawingGraph_rec=null;
        // this.graph1_pay=null;
        //     this.dataDrawingGraph_pay=null;


        // this.graph1_pack=null;
        //     this.dataDrawingGraph_pack=null;

        // this.graph1_car=null;
        //     this.dataDrawingGraph_car=null;



        // this.graph1_cus=null;
        //     this.dataDrawingGraph_cus=null;
        // this.graph1_kkf=null;
        //     this.dataDrawingGraph_kkf=null;



      var rec_amt = 0;
      var pay_amt = 0;

      var max1 = 0;
      var max2 = 0 ;



                  var num1 = [];
                  var num4 = [];

                  
                  var label4 = [];



      API.DashboardWorkReqPay({
   
      data: {
                
        stdate: GetDateTimeFormat(this.stdate_value,'MMDDYYYY') ,
        enddate: GetDateTimeFormat(this.enddate_value,'MMDDYYYY'),
        storeno: "",
        docno: ""

      },

            callblack: res => {

            let errA = "";
            let _statusA = ""; 

            
            this.num1=[];
             this.num4=[];

            this.label4 = [];

          
            this.setdataDashboardobj=[]; 
            this.setdataDashboardobj2=[]; 
             this.setdataDashboardobj22=[]; 
            this.setdataDashboardobj3=[]; 
            this.setdataDashboardobjs3=[];
            
            this.setdataDashboardobj4=[]; 
            this.setdataDashboardobj5=[]; 
            this.setdataDashboardobj6=[]; 
            this.setdataDashboardobj7=[]; 
            this.setdataDashboardobj8=[]; 




            this.setdataDashboardobjs1=[];
                        this.setdataDashboardobjs2=[];
                                    this.setdataDashboardobjs3=[];
                                                this.setdataDashboardobjs4=[];


            res.forEach((d,i) => {

            if (res[i].code.toString()  == "01")
            {
 
            this.setdataDashboardobj.push(d);
            this.dataDashboardobj = this.setdataDashboardobj[0];    
            
            
                    var num2 = 0.00;
                    num2 = Number((this.dataDashboardobj.f2/this.dataDashboardobj.f1)*100.00);

                    this.num1.push(num2.toFixed(2));

                    num2 = Number((this.dataDashboardobj.f3/this.dataDashboardobj.f1)*100.00);



                    this.num1.push(num2.toFixed(2));


 

                  

            }

            else if (res[i].code.toString()  == "02")
            {

            this.setdataDashboardobj2.push(d);




            this.dataDashboardobj2 = this.setdataDashboardobj2[0];              

              this.label4.push(this.dataDashboardobj2.f1);

              this.label4.push(this.dataDashboardobj2.f2);

               this.label4.push(this.dataDashboardobj2.f3);

               this.Roudtop1 = this.dataDashboardobj2.f1;
               this.Roudtop2 = this.dataDashboardobj2.f1;
               this.Roudtop3 = this.dataDashboardobj2.f1;

               
             console.log(this.label4);


            }

            else if (res[i].code.toString()  == "22")
            {

            this.setdataDashboardobj22.push(d);
            this.dataDashboardobj22 = this.setdataDashboardobj22[0];              

              this.num4.push(this.dataDashboardobj22.f1);

              this.num4.push(this.dataDashboardobj22.f2);

               this.num4.push(this.dataDashboardobj22.f3);

  


            }


            else if (res[i].code.toString()  == "03")
            {




            this.setdataDashboardobj3.push(d);
            this.dataDashboardobj3 = this.setdataDashboardobj3[0];   
            
            



            }

            else if (res[i].code.toString()  == "04")
            {

            this.setdataDashboardobj4.push(d);
            this.dataDashboardobj4 = this.setdataDashboardobj4[0];              

            }

            else if (res[i].code.toString()  == "05")
            {

            this.setdataDashboardobj5.push(d);
            this.dataDashboardobj5 = this.setdataDashboardobj5[0];              

            }

            else if (res[i].code.toString()  == "06")
            {

            this.setdataDashboardobj6.push(d);
            this.dataDashboardobj6 = this.setdataDashboardobj6[0];              

            }



            else if (res[i].code.toString()  == "07")
            {

            this.setdataDashboardobj7.push(d);

            if (this.setdataDashboardobj7[0]=="")
            {}
            this.dataDashboardobj7 = this.setdataDashboardobj7[0];              

            }

            else if (res[i].code.toString()  == "08")
            {

            this.setdataDashboardobj8.push(d);
            this.dataDashboardobj8 = this.setdataDashboardobj8[0];              

            }



            else if (res[i].code.toString()  == "S1")
            {

            this.setdataDashboardobjs1.push(d);
            this.dataDashboardobjs1 = this.setdataDashboardobjs1[0];              

            }



            else if (res[i].code.toString()  == "S2")
            {

            this.setdataDashboardobjs2.push(d);
            this.dataDashboardobjs2 = this.setdataDashboardobjs2[0];              

            }





            else if (res[i].code.toString()  == "S3")
            {

            this.setdataDashboardobjs3.push(d);
            this.dataDashboardobjs3 = this.setdataDashboardobjs3[0];              

            }


  

            else if (res[i].code.toString()  == "S4")
            {

            this.setdataDashboardobjs4.push(d);
            this.dataDashboardobjs4 = this.setdataDashboardobjs4[0];              

            }

        


            });













                   

       var data3= {
        labels: ['ห่อ','เศษ'],

  
        datasets: [
          
          {
               backgroundColor: ['rgba(55, 173, 221, 0.5)','rgba(217, 136, 128   , 0.5)'],
               borderColor:     ['rgba(55, 173, 221, 0.5)','rgba(217, 136, 128   , 0.5)'],
               borderWidth: 1,
                         
               data:this.num1
          }



          
          
          ]
      };



  
var option3 = {

    responsive: true,
    maintainAspectRatio: false,
    tooltips: {enabled: true},


  legend: {
            display: false
         },
         tooltips: {
            enabled: false
         },



    plugins: {


       
           			datalabels: {

          display: function(context) {
          return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
       },

        

         position: 'outside',
     
        formatter: Math.round,
        font: {
          weight: 'bold',
          size:10
        },

                 color: function(context) {
      
                 return context.hovered ? "blue" : "gray";
         },

 				 backgroundColor: function(context) {
 					return context.dataset.backgroundColor;
 				  },
 			  	borderRadius: 4,
 			  	clip: true,
          color: 'white',
 				font: {
 					weight: 'bold'
 				},
 				formatter: function(value) {
 					return value.y;
         }
        
 			}
     }



};










     if(myChart3 !== null)
                          {
                          
                                  myChart3.data =  data3;
                                  myChart3.update();
                          }else
                          {

                var ctx3 = document.getElementById("graph3").getContext("2d");
                myChart3 = new Chart(ctx3, {
                                      type: 'pie',
                                      data:  data3,
                                      options: option3
                                    });
            
                          }





               var data4 = {
                             labels: this.label4,
                             datasets: [{
                             label: "Data",
                             borderColor:  ['rgba(230, 176, 170 , 0.7)','rgba(245, 203, 167 , 0.7)','rgba(249, 231, 159    , 0.7)'],
			                        borderWidth: 1,
                               fill: true,
                               backgroundColor:  ['rgba(230, 176, 170 , 0.7)','rgba(245, 203, 167   , 0.7)','rgba(249, 231, 159    , 0.7)'],
			                 
                                   data:this.num4
                                 }]
                              };



    var option4 =   {
        animation: {
            easing: "easeOutQuart"
        },
        legend: {
            position: "bottom",
		      	display: false
        },

        	title: {
      display: true,
       fontColor: "rgb(171, 178, 185)",
               fontStyle: "normal",
			text: 'สรุปจำนวนการเบิกสินบาร์โค๊ดสินค้าสูงสุดตามช่วงเวลา (top 3)'
    },
    
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#fafafa",
             
                    beginAtZero: true,
                    padding: 15,


                  
					//display: false - remove this and commenting to display: false
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					color: "transparent",
					zeroLineColor: "transparent"
                }
            }],
            xAxes: [{
                gridLines: {
					display: false,
          color: "transparent",
           
					zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 15,
                     display : false,
					beginAtZero: true,
                    fontColor: "#fafafa",
                    fontStyle: "bold",
					maxTicksLimit: 20,
					//display: false - remove this and commenting to display: false
                }
            }]
        }
    };


                if(myChart4 !== null)
                          {
                          
                                  myChart4.data =  data4;
                                  myChart4.update();
                          }else
                          {

                var ctx4 = document.getElementById("graph4").getContext("2d");
                myChart4 = new Chart(ctx4, {
                                      type: 'horizontalBar',
                                      data:  data4,
                                      options: option4
                                    });
            
                          }
















  


            }



            

            
     
        });






      API.DashboardWorkTimeSendround({
      data: {
                
        stdate:  GetDateTimeFormat(this.stdate_value,'MMDDYYYY') ,
        enddate: GetDateTimeFormat(this.enddate_value,'MMDDYYYY'),
        storeno: "",
        docno:   "",
        showdetail:0,
        showtotal:2

      },
        callblack: res => {



             let errA = "";
             let _statusA = ""; 
           
           
           
           
             this.graph1_pay=[];
             this.dataDrawingGraph_pay=[];




            this.graph1_rec=[];
            this.dataDrawingGraph_rec=[];

           
           
           this.graph1_pack=[];
             this.dataDrawingGraph_pack=[];




            this.graph1_car=[];
            this.dataDrawingGraph_car=[];






            res.forEach((d,i) => {

    


            
                if (res[i].sendround.toString() == "REQPAY" ) 
                {

                 this.graph1_rec.push(0);



                 this.graph1_rec.push(Number(res[i].bC_AMT_08));

            
            
               this.graph1_rec.push(Number(res[i].bC_AMT_09));


            
                this.graph1_rec.push(Number(res[i].bC_AMT_10));

      
            
               this.graph1_rec.push(Number(res[i].bC_AMT_11));
            
                this.graph1_rec.push(Number(res[i].bC_AMT_12));

               this.graph1_rec.push(Number(res[i].bC_AMT_13));
            
                this.graph1_rec.push(Number(res[i].bC_AMT_14));
         


                this.graph1_rec.push(Number(res[i].bC_AMT_15));

               this.graph1_rec.push(Number(res[i].bC_AMT_16));
            
                this.graph1_rec.push(Number(res[i].bC_AMT_17));
         

                this.graph1_rec.push(Number(res[i].bC_AMT_18));

               this.graph1_rec.push(Number(res[i].bC_AMT_19));
            
                this.graph1_rec.push(Number(res[i].bC_AMT_20));

                this.graph1_rec.push(Number(res[i].bC_AMT_21));

               this.graph1_rec.push(Number(res[i].bC_AMT_22));
            
                this.graph1_rec.push(Number(res[i].bC_AMT_23));

                this.graph1_rec.push(Number(res[i].bC_AMT_24));


                  this.graph1_rec.push(Number(res[i].bC_AMT_25));
                  



                  this.rec_amt = Number(res[i].bcstD_AT)+Number(res[i].bcnstD_AT);


                } else if (res[i].sendround.toString() == "CUS" ) 

                {
     
              this.graph1_pay.push(0);
               this.graph1_pay.push(Number(res[i].bC_AMT_08));
            
               this.graph1_pay.push(Number(res[i].bC_AMT_09));
            
                this.graph1_pay.push(Number(res[i].bC_AMT_10));


            
               this.graph1_pay.push(Number(res[i].bC_AMT_11));
            
               this.graph1_pay.push(Number(res[i].bC_AMT_12));

               this.graph1_pay.push(Number(res[i].bC_AMT_13));
            
                this.graph1_pay.push(Number(res[i].bC_AMT_14));
         


                this.graph1_pay.push(Number(res[i].bC_AMT_15));

               this.graph1_pay.push(Number(res[i].bC_AMT_16));
            
                this.graph1_pay.push(Number(res[i].bC_AMT_17));
         

                this.graph1_pay.push(Number(res[i].bC_AMT_18));

               this.graph1_pay.push(Number(res[i].bC_AMT_19));
            
                this.graph1_pay.push(Number(res[i].bC_AMT_20));

                this.graph1_pay.push(Number(res[i].bC_AMT_21));

               this.graph1_pay.push(Number(res[i].bC_AMT_22));
            
                this.graph1_pay.push(Number(res[i].bC_AMT_23));

                this.graph1_pay.push(Number(res[i].bC_AMT_24));


                this.graph1_pay.push(Number(res[i].bC_AMT_25));

                 this.pay_amt = Number(res[i].bcstD_AT)+Number(res[i].bcnstD_AT);

                }
                else if (res[i].sendround.toString() == "KKF" ) 

                {
     
             this.graph1_pack.push(0);
               this.graph1_pack.push(Number(res[i].bC_AMT_08));
            
               this.graph1_pack.push(Number(res[i].bC_AMT_09));
            
                this.graph1_pack.push(Number(res[i].bC_AMT_10));


            
               this.graph1_pack.push(Number(res[i].bC_AMT_11));
            
               this.graph1_pack.push(Number(res[i].bC_AMT_12));

               this.graph1_pack.push(Number(res[i].bC_AMT_13));
            
                this.graph1_pack.push(Number(res[i].bC_AMT_14));
         


                this.graph1_pack.push(Number(res[i].bC_AMT_15));

               this.graph1_pack.push(Number(res[i].bC_AMT_16));
            
                this.graph1_pack.push(Number(res[i].bC_AMT_17));
         

                this.graph1_pack.push(Number(res[i].bC_AMT_18));

               this.graph1_pack.push(Number(res[i].bC_AMT_19));
            
                this.graph1_pack.push(Number(res[i].bC_AMT_20));

                this.graph1_pack.push(Number(res[i].bC_AMT_21));

               this.graph1_pack.push(Number(res[i].bC_AMT_22));
            
                this.graph1_pack.push(Number(res[i].bC_AMT_23));

                this.graph1_pack.push(Number(res[i].bC_AMT_24));


                this.graph1_pack.push(Number(res[i].bC_AMT_25));


                }

              else if (res[i].sendround.toString() == "CAR" ) 

                {
     
             this.graph1_car.push(0);
               this.graph1_car.push(Number(res[i].bC_AMT_08));
            
               this.graph1_car.push(Number(res[i].bC_AMT_09));
            
                this.graph1_car.push(Number(res[i].bC_AMT_10));


            
               this.graph1_car.push(Number(res[i].bC_AMT_11));
            
               this.graph1_car.push(Number(res[i].bC_AMT_12));

               this.graph1_car.push(Number(res[i].bC_AMT_13));
            
                this.graph1_car.push(Number(res[i].bC_AMT_14));
         


                this.graph1_car.push(Number(res[i].bC_AMT_15));

               this.graph1_car.push(Number(res[i].bC_AMT_16));
            
                this.graph1_car.push(Number(res[i].bC_AMT_17));
         

                this.graph1_car.push(Number(res[i].bC_AMT_18));

               this.graph1_car.push(Number(res[i].bC_AMT_19));
            
                this.graph1_car.push(Number(res[i].bC_AMT_20));

                this.graph1_car.push(Number(res[i].bC_AMT_21));

               this.graph1_car.push(Number(res[i].bC_AMT_22));
            
                this.graph1_car.push(Number(res[i].bC_AMT_23));

                this.graph1_car.push(Number(res[i].bC_AMT_24));


                this.graph1_car.push(Number(res[i].bC_AMT_25));


                }




                

                    this.dataDrawingGraph_pay = this.graph1_pay;
                    this.dataDrawingGraph_rec = this.graph1_rec;

                   

                    this.dataDrawingGraph_pack = this.graph1_pack;
                    this.dataDrawingGraph_car = this.graph1_car;

       var max_Y = 0


       var maxrec = Math.max.apply(Math,this.dataDrawingGraph_rec);
        var maxpay = Math.max.apply(Math,this.dataDrawingGraph_pay);
         var maxpack = Math.max.apply(Math,this.dataDrawingGraph_pack);
          var maxcar = Math.max.apply(Math,this.dataDrawingGraph_car);



          max_Y = maxrec;

          if ( Number(max_Y) < Number(maxpay))
          {

            max_Y = 0; 
            max_Y = Number(maxpay)
          };


          if ( Number(max_Y)<  Number(maxpack))
          {
             max_Y = 0;  
            max_Y =  Number(maxpack)
          };



          if (  Number(max_Y) <  Number(maxcar))
          {
              max_Y = 0;
            max_Y =  Number(maxcar)
          }


         


          if( Number(max_Y) <100 )
          {
           max_Y =    Number(max_Y)+10 

          }

          else if( Number(max_Y) <1000 )
          {
           max_Y =    Number(max_Y)+100 

          }

          else if( Number(max_Y) <10000 )   
          {
           max_Y =    Number(max_Y)+500

          }
            
         
          else if( Number(max_Y) <100000 )
          {
           max_Y =    Number(max_Y)+5000

          };
            
       var data= {
        labels: ['','8.00-8.59.', '9.00-9.59', '10.00-10.59','11.00-11.59','12.00-12.59','13.00-13.59','14.00-14.59','15.00-15.59','16.00-16.59','17.00-17.59','18.00-18.59'
        ,'19.00-19.59','20.00-20.59','21.00-21.59','22.00-22.59','23.00-23.59','00.00-07.59'],
        datasets: [



          {

             backgroundColor: 'rgba(115, 198, 182   ,  0.8)',
             borderColor:     'rgba(115, 198, 182,  0.8)', 
             borderWidth: 2,

             label: 'จำนวนรายการเบิกทั้งหมด',

                         fill: false,
                       
              data: this.dataDrawingGraph_rec
              
          
          },
 


          
          {
               backgroundColor: 'rgba(55, 173, 221,  0.8)',
               borderColor:     'rgba(55, 173, 221,  0.8)',
               label: 'จำนวนรายการเบิกขายลูกค้า',
                           borderWidth: 2,

                                       fill: false,

               data:this.dataDrawingGraph_pay
          },


          {

            
            backgroundColor: 'rgba(217, 136, 128   ,  0.8)',
            borderColor:     'rgba(217, 136, 128   ,  0.8)', 

              borderWidth: 2,
            fill: false,

            label: 'จำนวนรายการเบิกให้หน่วยงานภายใน',
                       
              data: this.dataDrawingGraph_pack
          
          }



          
          
          ]
      };



  
var option = {

    responsive: true,
    maintainAspectRatio: false,
    tooltips: {enabled: true},

    // legend: {
    //         display: true,
    //       position: 'bottom',
    //         labels: {
    //             fontColor: '#333',
    //         }
    //     }
   

    
scales: {
                      yAxes: [{
                            display: true,
                            ticks: {
       
                                max: max_Y,
                                 fontColor: '#D0D3D4'
                            }
                        }],
                      xAxes: [{
                            ticks: {
       
                                 fontColor: '#D0D3D4'
                            }
                        }]



        },
 

    plugins: {
           			datalabels: {

                 display: function(context) {
                 return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...

                          },
                 color: function(context) {
      
                 return context.hovered ? "blue" : "gray";
         },

 				 backgroundColor: function(context) {
 					return context.dataset.backgroundColor;
           },
           
                  anchor: 'end',
        align: 'top',
 			  	borderRadius: 4,
 			  	clip: true,
          color: '#F2F4F4',
 				font: {
 					weight: 'bold'
 				},
 				formatter: function(value) {
 					return value.y;
         }
        
 			}
     }



};






                        if(myChart1 !== null)
                          {
                                  myChart1.options =  option;
                                  myChart1.data =  data;
                                  myChart1.update();
                          }else
                          {

     

                var ctx = document.getElementById("graph1").getContext("2d");
                myChart1 = new Chart(ctx, {
                                      type: 'line',
                                      data:  data,
                                      options: option
                                    });




                                     }






                });

           




       }
     });




    
    API.SearchDatagrid({
      data: {
        CODE :"REQPAY",        
        stdate: GetDateTimeFormat(this.stdate_value,'MMDDYYYY') ,
        enddate: GetDateTimeFormat(this.enddate_value,'MMDDYYYY'),
        storeno: "",
        docno: ""
  

      },
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
           
              return ;
            }






            
            this.dataDrawing=[]; 


            

            this.cdsBCPACK=[]; 

            this.cdsBCPIECE=[]; 

            this.cdsBCSENDROUND=[];


        
          

           res.forEach((d,i) => {



             

           
               this.dataDrawing.push(d);

               this.cdsBC.push(d);





            if (res[i].col9string  == "เบิกภายในหน่วยงาน")
            {
                this.cdsBCPIECE.push(d);

            }
            else if (res[i].col9string  == "เบิกขายให้ลูกค้า")
            {
                this.cdsBCPACK.push(d);
            }



            if (res[i].col14string  == "เร่งด่วน")
            {
                this.cdsBCSPEED.push(d);


                  if (res[i].col9string  == "เบิกภายในหน่วยงาน")
                  {
                        this.cdsBCSPEEDPIECE.push(d);

                   }
                   else if (res[i].col9string  == "เบิกขายให้ลูกค้า")
                   {
                       this.cdsBCSPEEDPACK.push(d);
                    }


            }


    












            });


  


            }

            


   





      
        });






    API.SearchDatagrid({
      data: {
        CODE :"DELBC",        
        stdate: GetDateTimeFormat(this.stdate_value,'MMDDYYYY') ,
        enddate: GetDateTimeFormat(this.enddate_value,'MMDDYYYY'),
        storeno: "",
        docno: ""
  

      },
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
           
              return ;
            }






            
            this.dataDrawingdel=[]; 


            
            res.forEach((d,i) => {



             

           
               this.dataDrawingdel.push(d);





            });


  


            }

            


   





      
        });




            this.cdsBCPACKstop=[]; 

            this.cdsBCPIECEstop=[]; 






    API.SearchDatagrid({
      data: {
        CODE :"STOPPAY",        
        stdate: GetDateTimeFormat(this.stdate_value,'MMDDYYYY') ,
        enddate: GetDateTimeFormat(this.enddate_value,'MMDDYYYY'),
        storeno: "",
        docno: ""
  

      },
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
           
              return ;
            }






            
            this.cdsBCstop=[]; 


            
            res.forEach((d,i) => {



             

           
               this.cdsBCstop.push(d);


            if (res[i].col9string  == "เบิกภายในหน่วยงาน")
            {
                this.cdsBCPIECEstop.push(d);

            }
            else if (res[i].col9string  == "เบิกขายให้ลูกค้า")
            {
                this.cdsBCPACKstop.push(d);
            }






            });


  


            }

            


   





      
        });





    API.SearchDatagrid({
      data: {
        CODE :"CANREQ",        
        stdate: GetDateTimeFormat(this.stdate_value,'MMDDYYYY') ,
        enddate: GetDateTimeFormat(this.enddate_value,'MMDDYYYY'),
        storeno: "",
        docno: ""
  

      },
   

            callblack: res => {

            let errA = "";
            let _statusA = ""; 
            if (res.length <= 0)                            
            {   
           
              return ;
            }






            
            this.cdsBCCUS=[]; 

             this.cdsBCCUSPACK=[]; 
              this.cdsBCCUSPIECE=[]; 


              
            
            this.cdsBCDEP=[]; 

             this.cdsBCDEPPACK=[]; 
              this.cdsBCDEPPIECE=[];


            
            res.forEach((d,i) => {




                if (res[i].col12string =="N" )
                {



                this.cdsBCCUS.push(d);


                  if (res[i].col9string  == "เบิกภายในหน่วยงาน")
                  {
                        this.cdsBCCUSPIECE.push(d);

                   }
                   else if (res[i].col9string  == "เบิกขายให้ลูกค้า")
                   {
                       this.cdsBCCUSPACK.push(d);
                    }


                }


      
                if (res[i].col12string =="Y" )
                {




       
                this.cdsBCDEP.push(d);


                  if (res[i].col9string  == "เบิกภายในหน่วยงาน")
                  {
                        this.cdsBCDEPPIECE.push(d);

                   }
                   else if (res[i].col9string  == "เบิกขายให้ลูกค้า")
                   {
                       this.cdsBCDEPPACK.push(d);
                    }


        


                }  







            });


  


            }

            


   





      
        });







    },
    GetCompanyName(code){
      switch (code) {
        case "KIG":
          return this.$i18n.messages[this.$i18n.locale]['app']['KIG'];
          break;

        case "AMW":
          return this.$i18n.messages[this.$i18n.locale]['app']['AMW'];
          break;

        case "KKE":
          return this.$i18n.messages[this.$i18n.locale]['app']['KKE'];
          break;
      
        default:
          return this.$i18n.messages[this.$i18n.locale]['app']['KKF'];
          break;
      }

    },
    formatDate(strdate) {
      var date = new Date(strdate);
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
  }
}
</script>

<style scoped>


.fa-navicon:before, .fa-reorder:before, .fa-bars:before {
    content: "";
}

.fa-unsorted:before, .fa-sort:before {
    content: "";
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}




section.color-left {
	width: 64px;
	height: 50px;
	background-color: #000;
	border-top-left-radius: 5px;
	display: block;
	float: left;
}

section.color-right {
	width: auto;
	height: 50px;
  background-color: #000;
  
	border-top-right-radius: 5px;
	display: block;
	float: left;
}



/* Medium Gray */
section.color-left.mediumGray-light {background-color:rgb(217, 204, 208);}
section.color-right.mediumGray-dark {background-color:rgb(189, 170, 176);}


.card1 {

  display: inline-block;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  background: #fff;
  position: relative;
  overflow: hidden;
  width: 100%;
 



  
}


.card1:hover, .card1.hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
}
.card1:hover .card1-content, .card1.hover .card1-content {
  box-shadow: inset 0 3px 0 0 rgb(233, 133, 141);
  border-color: rgb(233, 133, 150);
}
.card1:hover .card1-img .overlay, .card1.hover .card1-img .overlay {
  background-color: rgba(38, 25, 26, 0.85);
  transition: opacity 0.2s ease;
  opacity: 1;
}
.card1-img {
  position: relative;
  height: 224px;
  width: 100%;
  background-color: #fff;
  transition: opacity 0.2s ease;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;


  
}
.card1-img .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0;
}
.card1-img .overlay .overlay-content {
  line-height: 224px;
  width: 100%;
  text-align: center;
  color: #fff;
}
.card1-img .overlay .overlay-content div {
  color: #fff;
  padding: 0 2rem;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.4);
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
}
.card1-img .overlay .overlay-content div:hover, .card1-img .overlay .overlay-content div.hover {
  background: rgb(118, 26, 57);
  border-color: rgb(118, 26, 49);
  color:#A9CCE3;
}
.card1-content {
  width: 100%;
  /* min-height: 104px; */
  background-color: rgb(249, 248, 248);
  
  font-weight: 600;
  border-top: 1px solid rgb(235, 233, 234);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 1rem 2rem;
  transition: all 0.2s ease;
}
.card1-content div {
  text-decoration: none;
  color: #292023;
}
.card1-content h2, .card1-content div h2 {
 
  font-weight: 500;
}
.card1-content p, .card1-content div p {
  
  font-weight: 400;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(41, 28, 32, 0.8);
}


/* @media screen and (min-width: 601px) {
  i.fa {
    font-size: 80px;
  }
}

@media screen and (max-width: 600px) {
  i.fa {
    font-size: 30px;
  }
} */



/* STRUCTURE */
.wrapper {
  padding: 5px;
  max-width: 960px;
  width: 95%;
  margin: 20px auto;
}
header {
  padding: 0 15px;
}
.columns {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 5px 0;
}
.column {
  flex: 1;
  border: 1px solid gray;
  margin: 2px;
  padding: 10px;
}
.column:first-child {
  margin-left: 0;
}
.column:last-child {
  margin-right: 0;
}
footer {
  padding: 0 15px;
}
@media screen and (max-width: 980px) {
  .columns .column {
    margin-bottom: 5px;
    flex-basis: 40%;
  }
  .columns .column:nth-last-child(2) {
    margin-right: 0;
  }
  .columns .column:last-child {
    flex-basis: 100%;
    margin: 0;
  }
}
@media screen and (max-width: 680px) {
  .columns .column {
    flex-basis: 100%;
    margin: 0 0 5px 0;
  }
}

.pointer {
  cursor: pointer;
}




.thumbnail{


  display:block;
  padding:4px;
  margin-bottom:20px;
  line-height:1.42857143;
  background-color:#fff;
  border:1px solid #ddd;
  border-radius:4px;
  -webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out;
  color: rgb(133, 146, 158);

   color:rgb(86, 101, 115 );
 
   border: 0px;
    /* box-shadow: 0px 1px 16px rgba(235, 245, 251, 0.45); */


     background-color: rgba(0, 0, 0, 0.1);




  }





.thumbnail_table{
  display:block;
  padding:4px;
  margin-bottom:20px;
  line-height:1.42857143;
  background-color:#fff;
  border:1px solid #ddd;
  border-radius:4px;
  -webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out;
  color: rgb(133, 146, 158);

   color:rgb(86, 101, 115 );
 
   border: 0px;
    /* box-shadow: 0px 1px 16px rgba(235, 245, 251, 0.45); */


     background-color: rgba(0, 0, 0, 0.1);

    opacity: 0.7;
    filter: alpha(opacity=70); /* For IE8 and earlier */


  }

.thumbnail a>img,.thumbnail>img{
  margin-right:auto;
  margin-left:auto
  }
  
  a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{
    border-color:#b7336a;

    
    
    }
    .thumbnail .caption
    {

    padding:9px;color:rgb(126, 93, 101);
    height: 50px;

 
/*  
    background-color: rgba(255, 255, 255, 0.4); */
  

      border-radius:2px;

      color:rgb(86, 101, 115 );

      
  }



.thumbnail:hover, .thumbnail.hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
    background-color: rgba(235, 245, 251, 0.4); 
/*   
  background: linear-gradient(to bottom right, #D4E6F1, #D6EAF8); */
  /* border-top-width: 3px;
  border-top-color: #1A5276; */
  /* background-color: rgba(214, 234, 248   , 0.5); */

}



.thumbnail_dis{
  display:block;
  padding:4px;
  margin-bottom:20px;
  line-height:1.42857143;
  background-color:#fff;
  border:1px solid #ddd;
  border-radius:4px;
  -webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out;
  color: rgb(126, 93, 107);

  


box-shadow: 0px 1px 16px rgba(158, 133, 139, 0.45);

   

  }

.thumbnail_dis a>img,.thumbnail_dis>img{
  margin-right:auto;
  margin-left:auto
  }

    .thumbnail_dis .caption{

      padding:9px;color:rgb(126, 93, 106)
      
      }






.line-chart-block, .bar-chart-block {
				height: 80%;
			}
				.line-chart {
					height: 200px;
					background: #ab1144;
				}
				.time-lenght {
					padding-top: 22px;
					padding-left: 38px;
          overflow: hidden;
				}
					.time-lenght-btn {
						display: block;
						width: 70px;
						line-height: 32px;
						background: #7b5060;
						border-radius: 5px;
						font-size: 14px;
						text-align: center;
						margin-right: 5px;
						-webkit-transition: background .3s;
						transition: background .3s;
					}
						.time-lenght-btn:hover {
							text-decoration: none;
							background: #e64c65;
						}
				.month-data {
					padding-top: 28px;
				}
					.month-data p {
						display: inline-block;
						margin: 0;
						padding: 0 25px 15px;            
						font-size: 16px;
					}
						.month-data p:last-child {
							padding: 0 25px;
              float: right;
							font-size: 15px;
						}
						.increment {
							color: #e64c65;
						}












/* Bar Graph Vertical */
.bar-graph .year {
  -webkit-animation: fade-in-text 2.2s 0.1s forwards;
  -moz-animation: fade-in-text 2.2s 0.1s forwards;
  animation: fade-in-text 2.2s 0.1s forwards;
}

.bar-graph-vertical {
  margin-top: 2px;
  max-width: 680px;
}

.bar-graph-vertical .bar-container {
  float: left;
  height: 150px;
  margin-right: 8px;
  position: relative;
  text-align: center;
  width: 40px;
}

.bar-graph-vertical .bar {
  border-radius: 3px;
  bottom: 40px;
  position: absolute;
  width: 40px;
}

.bar-graph-vertical .year {
  bottom: 0;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  /* -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg); */
}

.bar-graph-two .bar::after {
  -webkit-animation: fade-in-text 2.2s 0.1s forwards;
  -moz-animation: fade-in-text 2.2s 0.1s forwards;
  animation: fade-in-text 2.2s 0.1s forwards;
  color: #fff;
  content: attr(data-percentage);
  font-weight: 700;
  left: 0;
  margin: 0 auto;
  position: relative;
  right: 0;
  text-align: left;
  top: 24px;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.bar-graph-two .bar-one .bar {
  background-color: #d16497;
  -webkit-animation: show-bar-one-vertical 1.2s 0.1s forwards;
  -moz-animation: show-bar-one-vertical 1.2s 0.1s forwards;
  animation: show-bar-one-vertical 1.2s 0.1s forwards;
}

.bar-graph-two .bar-two .bar {
  background-color: #ac5270;
  -webkit-animation: show-bar-two-vertical 1.2s 0.2s forwards;
  -moz-animation: show-bar-two-vertical 1.2s 0.2s forwards;
  animation: show-bar-two-vertical 1.2s 0.2s forwards;
}

.bar-graph-two .bar-three .bar {
  background-color: #864046;
  -webkit-animation: show-bar-three-vertical 1.2s 0.3s forwards;
  -moz-animation: show-bar-three-vertical 1.2s 0.3s forwards;
  animation: show-bar-three-vertical 1.2s 0.3s forwards;
}

.bar-graph-two .bar-four .bar {
  background-color: #5f2e35;
  -webkit-animation: show-bar-four-vertical 1.2s 0.4s forwards;
  -moz-animation: show-bar-four-vertical 1.2s 0.4s forwards;
  animation: show-bar-four-vertical 1.2s 0.4s forwards;
}




.fa-folder:before {
    content: "\f07b";
}

.card-folders .card-body > .breadcrumb {
	margin-left: -1.25em;
	margin-right: -1.25em;
	margin-top: -1.25em;
  border-radius: 0;



  
  
}

.folder-container {
	text-align: center;
	margin-left: 1rem;
	margin-right: 1rem;
	margin-bottom: 1.5rem;
	width: 100px;
	padding: 0;
	align-self: start;
	background: none;
	border: none;
	outline-color: transparent !important;
  cursor: pointer;
  
  
}

.folder-icon {
	font-size: 3em;
	line-height: 1.25em;
}

.icon-color {
	color: #5D6D7E;
	text-shadow: 1px 1px 0px #85929E;
}

.folder-icon-color {
	color: #FFC107;
	text-shadow: 1px 1px 0px #e0a800;
}


.folder-name {
	overflow-wrap: break-word;
	word-wrap: break-word;
	hyphens: auto;
}

.flex-column .folder-container {
	display: flex;
	width: auto;
	min-width: 100px;
	text-align: left;
	margin: 0;
  margin-bottom: 1rem;

}

.flex-column .folder-icon, .flex-column .folder-name {
	display: inline-flex;
}

.flex-column .folder-icon {
	font-size: 1.4em;
	margin-right: 1rem;
}

.file-icon-color {
	color: #999;
}





.breadcrumbx {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    /* border-radius: .25rem; */
    padding-left: 0.5rem !important;

        opacity: 1;
    filter: alpha(opacity=100); /* For IE8 and earlier */

}




.breadcrumb {
 
    border-bottom: 0px solid #c8ced3; 
    background-color: rgba(123, 125, 125 , 0.0);
}



















.col-lg-1 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 7.22892%; }
  .col-lg-1:last-child {
    margin-right: 0; }

.col-lg-2 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 15.66265%; }
  .col-lg-2:last-child {
    margin-right: 0; }

.col-lg-3 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 24.09639%; }
  .col-lg-3:last-child {
    margin-right: 0; }

.col-lg-4 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 32.53012%; }
  .col-lg-4:last-child {
    margin-right: 0; }

.col-lg-5 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 40.96386%; }
  .col-lg-5:last-child {
    margin-right: 0; }

.col-lg-6 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 49.39759%; }
  .col-lg-6:last-child {
    margin-right: 0; }

.col-lg-7 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 57.83133%; }
  .col-lg-7:last-child {
    margin-right: 0; }

.col-lg-8 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 66.26506%; }
  .col-lg-8:last-child {
    margin-right: 0; }

.col-lg-9 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 74.6988%; }
  .col-lg-9:last-child {
    margin-right: 0; }

.col-lg-10 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 83.13253%; }
  .col-lg-10:last-child {
    margin-right: 0; }

.col-lg-11 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 91.56627%; }
  .col-lg-11:last-child {
    margin-right: 0; }

.col-lg-12 {
  display: block;
  float: left;
  margin-right: 1.20482%;
  width: 100%; }
  .col-lg-12:last-child {
    margin-right: 0; }

@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-1 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 7.22892%; }
    .col-md-1:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-2 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 15.66265%; }
    .col-md-2:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-3 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 24.09639%; }
    .col-md-3:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-4 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 32.53012%; }
    .col-md-4:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-5 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 40.96386%; }
    .col-md-5:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-6 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 49.39759%; }
    .col-md-6:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-7 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 57.83133%; }
    .col-md-7:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-8 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 66.26506%; }
    .col-md-8:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-9 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 74.6988%; }
    .col-md-9:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-10 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 83.13253%; }
    .col-md-10:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-11 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 91.56627%; }
    .col-md-11:last-child {
      margin-right: 0; } }
@media only screen and (min-width: 641px) and (max-width: 959px) {
  .col-md-12 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 100%; }
    .col-md-12:last-child {
      margin-right: 0; } }
@media only screen and (max-width: 640px) {
  .col-sm-1 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 7.22892%; }
    .col-sm-1:last-child {
      margin-right: 0; } }
.col-offset-1 {
  margin-left: 8.43373%; }

@media only screen and (max-width: 640px) {
  .col-sm-2 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 15.66265%; }
    .col-sm-2:last-child {
      margin-right: 0; } }
.col-offset-2 {
  margin-left: 16.86747%; }

@media only screen and (max-width: 640px) {
  .col-sm-3 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 24.09639%; }
    .col-sm-3:last-child {
      margin-right: 0; } }
.col-offset-3 {
  margin-left: 25.3012%; }

@media only screen and (max-width: 640px) {
  .col-sm-4 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 32.53012%; }
    .col-sm-4:last-child {
      margin-right: 0; } }
.col-offset-4 {
  margin-left: 33.73494%; }

@media only screen and (max-width: 640px) {
  .col-sm-5 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 40.96386%; }
    .col-sm-5:last-child {
      margin-right: 0; } }
.col-offset-5 {
  margin-left: 42.16867%; }

@media only screen and (max-width: 640px) {
  .col-sm-6 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 49.39759%; }
    .col-sm-6:last-child {
      margin-right: 0; } }
.col-offset-6 {
  margin-left: 50.60241%; }

@media only screen and (max-width: 640px) {
  .col-sm-7 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 57.83133%; }
    .col-sm-7:last-child {
      margin-right: 0; } }
.col-offset-7 {
  margin-left: 59.03614%; }

@media only screen and (max-width: 640px) {
  .col-sm-8 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 66.26506%; }
    .col-sm-8:last-child {
      margin-right: 0; } }
.col-offset-8 {
  margin-left: 67.46988%; }

@media only screen and (max-width: 640px) {
  .col-sm-9 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 74.6988%; }
    .col-sm-9:last-child {
      margin-right: 0; } }
.col-offset-9 {
  margin-left: 75.90361%; }

@media only screen and (max-width: 640px) {
  .col-sm-10 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 83.13253%; }
    .col-sm-10:last-child {
      margin-right: 0; } }
.col-offset-10 {
  margin-left: 84.33735%; }

@media only screen and (max-width: 640px) {
  .col-sm-11 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 91.56627%; }
    .col-sm-11:last-child {
      margin-right: 0; } }
.col-offset-11 {
  margin-left: 92.77108%; }

@media only screen and (max-width: 640px) {
  .col-sm-12 {
    display: block;
    float: left;
    margin-right: 1.20482%;
    width: 100%; }
    .col-sm-12:last-child {
      margin-right: 0; } }
.col-offset-12 {
  margin-left: 101.20482%; }

.premium header {
  background: #1d2122;
  padding: 1.5em 1em;
  padding-right: 40%;
  position: relative;
  border-radius: 0.3rem; }
  .premium header h1 {
    color: #c5c5c5;
    margin: 0; }
    .premium header h1 span {
      color: #f9f9f9; }
  .premium header p {
    color: #bfc5c8;
    margin: 0; }
.premium .ui-kit {
  background: #e76049;
  height: 100%;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 1.5em;
  text-transform: uppercase;
  color: white;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem; }
  .premium .ui-kit:before {
    content: "";
    height: 100%;
    vertical-align: middle;
    display: inline-block; }
  .premium .ui-kit span {
    font-size: 2em;
    font-weight: 600;
    vertical-align: middle; }



.user-card .user-avatar {
  text-align: center; }
  .user-card .user-avatar .user-bg {
    width: 100%;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem; }
    .user-card .user-avatar .user-bg:after {
      content: "";
      width: 100%;
      height: 100%;
      background: red; }
  .user-card .user-avatar .user-pic {
    background: white;
    padding: 0.25em;
    border-radius: 0.3rem;
    margin-top: -10em;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.35); }
.user-card header, .user-card .status {
  text-align: center;
  padding: 0 1.5em; }
.user-card header h1 {
  margin-top: 0.35em;
  margin-bottom: 0; }
.user-card header p {
  color: #717a7e;
  font-size: 1.2em;
  margin-top: 0;
  margin-bottom: 0.5em; }
.user-card .status {
  color: #75787b;
  font-size: 0.98em; }
.user-card .stats {
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  display: table;
  width: 100.15%; }
  .user-card .stats li {
    margin: 0;
    padding: 0;
    width: 33.33334%;
    display: table-cell;
    text-align: center;
    border-left: 0.1em solid transparent; }
    .user-card .stats li:first-child {
      border-left: 0; }
      .user-card .stats li:first-child a {
        border-bottom-left-radius: 0.3rem; }
    .user-card .stats li:last-child a {
      border-bottom-right-radius: 0.3rem; }
    .user-card .stats li a, .user-card .stats li strong {
      display: block; }
    .user-card .stats li a {
      background: #f7f7f7;
      padding: 1em 0;
      color: #46494c; }
      .user-card .stats li a strong, .user-card .stats li a span {
        font-weight: 600;
        line-height: 1; }
      .user-card .stats li a strong {
        font-size: 2em; }
      .user-card .stats li a span {
        color: #717a7e; }
      .user-card .stats li a:hover {
        background: rgba(0, 0, 0, 0.05);
        color: #1c84d4; }
        .user-card .stats li a:hover span {
          color: #1d8cdf; }

.stock .stock-chart {
  background: #00c5de;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem; }
  .stock .stock-chart #chart {
    height: 10.7em;
    background: url(http://i.imgbox.com/abmuNQx2) center bottom no-repeat; }
.stock .current-price {
  background: #1d2122;
  padding: 1em; }
  .stock .current-price .info abbr {
    display: block;
    color: #f8f8f8;
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 0.18em; }
  .stock .current-price .changes {
    text-align: right; }
    .stock .current-price .changes .value {
      font-size: 1.8em;
      font-weight: 600; }
      .stock .current-price .changes .value:before {
        content: "";
        height: 0;
        width: 0;
        border-color: transparent;
        border-style: solid;
        border-width: 0.25em;
        border-bottom-color: #4fd98b;
        display: inline-block;
        vertical-align: middle;
        margin-top: -0.5em;
        margin-right: 0.4em; }
      .stock .current-price .changes .value.up {
        color: #4fd98b; }
      .stock .current-price .changes .value.down {
        color: #e76646; }
        .stock .current-price .changes .value.down:before {
          border-color: #e76646 transparent transparent; }
  .stock .current-price .info time, .stock .current-price .info .change, .stock .current-price .changes time, .stock .current-price .changes .change {
    color: #c8c8c8;
    font-weight: 300;
    font-size: 0.9em; }
.stock .yearly-changes 
  {
  /* height:  6em; */
  padding: 0.5px; 
  
  }




  .stock .yearly-changes:after {
    content: "";
    height: 100%;
    display: inline-block;
    vertical-align: middle; }
  .stock .yearly-changes .year-all, .stock .yearly-changes .year-chart {
    display: inline-block;
    vertical-align: middle; }
  .stock .yearly-changes .year-chart, .stock .yearly-changes .chart-bars {
    height: 100%; }
.stock .year-all, .stock .summary {
  text-align: center; }
  .stock .year-all strong, .stock .summary strong {
    display: block;
    font-weight: 600;
    font-size: 1.4em; }
  .stock .year-all span, .stock .summary span {
    color: #a1a5a8;
    font-size: 0.9em;
    font-weight: 300;
    text-transform: uppercase; }
.stock .year-all strong {
  font-size: 2.1em; }
.stock .year-chart .chart-bars {
  list-style: none;
  padding: 0;
  padding-bottom: 1.5em;
  margin: 0;
  text-align: justify; }
  .stock .year-chart .chart-bars:after {
    content: "";
    display: inline-block;
    width: 100%; }
  .stock .year-chart .chart-bars li {
    position: relative;
    font-size: 0.9em;
    width: 5.5%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    display: inline-block;
    border-radius: 0.3rem; }
    .stock .year-chart .chart-bars li .value {
      position: absolute;
      display: block;
      width: 100%;
      height: 50%;
      left: 0;
      bottom: 0;
      background: #1c84d4;
      border-radius: 0.3rem; }
    .stock .year-chart .chart-bars li label {
      color: #a1a5a8;
      width: 100%;
      display: block;
      text-align: center;
      position: absolute;
      bottom: -1.6em; }
.stock .summary {
  padding: 1em 1em 1em 1em; }
  .stock .summary a {
    color: #46494c;
    display: block;
    background: rgba(0, 0, 0, 0.05);
    padding: 0.2em 0.2em;
    border-radius: 0.3rem; }
    .stock .summary a:hover {
      color: #1c84d4; }
      .stock .summary a:hover span {
        color: #1d8cdf; }

.messages {
  margin-bottom: 1em; }

.message {
  background: #91c76f;
  margin-bottom: 0.5em;
  border-radius: 0.3em;
  position: relative;
  opacity: 1;
  -webkit-transition: transform 0.2s, opacity 0.1s;
  -moz-transition: transform 0.2s, opacity 0.1s;
  transition: transform 0.2s, opacity 0.1s; }
  @media only screen and (max-width: 640px) {
    .message {
      border-radius: 0;
      margin-bottom: 0; } }
  .message.notice {
    background: #f3ce0c; }
    .message.notice .close {
      background: #e4c20b; }
      .message.notice .close:hover {
        background: #dbb90b; }
  .message.success {
    background: #91c76f; }
    .message.success .close {
      background: #7bbc52; }
      .message.success .close:hover {
        background: #70b346; }
  .message.error {
    background: #fb8973; }
    .message.error .close {
      background: #fa745a; }
      .message.error .close:hover {
        background: #fa684b; }
  .message.notice, .message.success, .message.error, .message .close {
    color: white;
    text-shadow: 0 0.1em 0 rgba(0, 0, 0, 0.2); }
  .message.hide {
    opacity: 0;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0); }
  .message .message-text {
    padding: 0.75em;
    margin-right: 1.5em; }
    @media only screen and (max-width: 640px) {
      .message .message-text {
        margin-right: 3em; } }
  .message .close {
    right: 0;
    top: 0;
    bottom: 0;
    border: 0;
    padding: 0;
    margin: 0;
    width: 1.5em;
    position: absolute;
    background: rgba(0, 0, 0, 0.15);
    text-align: center;
    box-shadow: inset 0.1em 0 rgba(0, 0, 0, 0.04);
    cursor: pointer;
    border-top-right-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
    -webkit-transition: background-color 0.2s;
    -moz-transition: background-color 0.2s;
    transition: background-color 0.2s; }
    @media only screen and (max-width: 640px) {
      .message .close {
        top: 0.5em;
        right: 0.5em;
        bottom: 0.5em;
        border-radius: 0;
        box-shadow: none; } }
    .message .close:hover {
      background: rgba(0, 0, 0, 0.2); }
    .message .close:before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      height: 100%; }
    .message .close:after {
      font-family: "FontAwesome";
      content: "\f00d";
      vertical-align: middle;
      display: inline-block; }

.video-player {
  background: #1d2122; }
  .video-player .vbox {
    position: relative; }
    .video-player .vbox .thumbnail {
      height: 20em;
      background: #fdd005 url(//i.imgbox.com/acfTG4CJ) center center no-repeat; }
    .video-player .vbox .play-btn {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 4em;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      text-align: center;
      padding-left: 0.37em;
      opacity: 0.8;
      width: 2em;
      height: 2em;
      border: 0.3rem solid white;
      text-shadow: 0 0.1rem rgba(0, 0, 0, 0.1);
      box-shadow: 0 0.1rem rgba(0, 0, 0, 0.1);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%); }
      .video-player .vbox .play-btn:hover {
        opacity: 1; }
  .video-player .controls {
    list-style: none;
    margin: 0;
    padding: 0;
    display: table;
    width: 100.2%; }
    .video-player .controls button {
      color: white;
      margin: 0;
      padding: 0;
      border: 0;
      padding: 0.75em 1em;
      background: none;
      font-size: 1.2em;
      text-shadow: 0 0.1em 0.1em black;
      text-align: center; }
    .video-player .controls > li {
      vertical-align: middle;
      border-left: 0.1em solid #242728;
      border-right: 0.1em solid #111315; }
      .video-player .controls > li:first-child {
        border-left: 0; }
      .video-player .controls > li:last-child {
        border-right: 0; }
      .video-player .controls > li:hover {
        background: rgba(255, 255, 255, 0.05); }
      .video-player .controls > li.timeline {
        width: 70%;
        padding: 0 1em; }
      .video-player .controls > li.volume-ctl {
        width: 30%; }
        .video-player .controls > li.volume-ctl .table {
          width: 100%; }
        .video-player .controls > li.volume-ctl .volume-bar {
          width: 100%;
          padding-right: 1em;
          vertical-align: middle; }
      @media only screen and (min-width: 641px) and (max-width: 959px) {
        .video-player .controls > li.timeline {
          width: 90%; }
        .video-player .controls > li.volume-ctl {
          display: none; } }
      @media only screen and (max-width: 640px) {
        .video-player .controls > li.timeline {
          width: 90%; }
        .video-player .controls > li.volume-ctl {
          display: none; } }

.sidebar .links li {
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  background: #f7f7f7;
  border-left: 0.1em solid #e6e6e6;
  border-bottom: 0.1em solid #e6e6e6; }
  .sidebar .links li.active {
    background: white;
    border-bottom-color: white; }
  .sidebar .links li:first-child {
    border-top-left-radius: 0.3rem;
    border-left: 0; }
  .sidebar .links li:last-child {
    border-top-right-radius: 0.3rem; }
.sidebar .links a {
  display: block;
  padding: 1.9em 0 1.5em;
  color: #1d2121; }
  .sidebar .links a:hover {
    background: rgba(255, 255, 255, 0.5); }
.sidebar .content li:last-child figure {
  border-bottom: none;
  *zoom: 1; }
  .sidebar .content li:last-child figure:before, .sidebar .content li:last-child figure:after {
    content: " ";
    display: table; }
  .sidebar .content li:last-child figure:after {
    clear: both; }
.sidebar .content figure {
  margin: 0 1.2em;
  padding: 1.2em 0;
  border-bottom: 0.1em solid #ebebeb; }
  .sidebar .content figure img {
    float: left;
    margin-right: 1.2em;
    border-radius: 0.3em; }
  .sidebar .content figure .description p {
    margin: 0;
    margin-bottom: 0.5em; }
  .sidebar .content figure .description a {
    color: #46494c;
    font-size: 0.9em; }
    .sidebar .content figure .description a:hover {
      color: #e76049; }
    .sidebar .content figure .description a span {
      margin-right: 0.35em; }

.user-menu {
  background: #1d2122;
  text-shadow: 0 0.1em 0.1em black;
  margin-top: 0.3em; }
  .user-menu li {
    position: relative;
    width: 20%;
    box-shadow: inset 0.1em 0 rgba(59, 64, 66, 0.3); }
    .user-menu li:hover {
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 -0.3em #1c84d4, inset 0.1em 0 rgba(255, 255, 255, 0.05), inset -0.1em 0 rgba(255, 255, 255, 0.05); }
      .user-menu li:hover.activity:after {
        box-shadow: inset 0 0.1em rgba(255, 255, 255, 0.2), 0 0 0 0.25em rgba(255, 255, 255, 0.2), 0 0 0 0.25em #1d2122; }
    .user-menu li:first-child {
      border-top-left-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem; }
    .user-menu li:last-child {
      border-top-right-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem; }
    .user-menu li.activity:after {
      content: "";
      display: block;
      width: 0.5em;
      height: 0.5em;
      background: #e76049;
      border-radius: 100%;
      box-shadow: inset 0 0.1em rgba(255, 255, 255, 0.2), 0 0 0 0.25em #1d2122;
      position: absolute;
      top: 30%;
      right: 30%; }
  .user-menu a {
    color: #8f989c;
    display: block;
    padding: 1rem 0;
    font-size: 2em;
    text-align: center; }
    .user-menu a:hover {
      color: white; }

.login-form {
  padding: 1.5em; }
  .login-form .input-field {
    position: relative; }
    .login-form .input-field span {
      position: absolute;
      top: 0.7em;
      left: 0.95em;
      font-size: 1.5em;
      color: white; }
  .login-form input {
    margin-bottom: 0.5em;
    border-width: 0.1em 0.1em 0.1em 4em;
    border-style: solid;
    border-color: #dcdddd;
    width: 100%;
    padding: 1em;
    border-radius: 0.2em;
    color: #46494c;
    font-size: 1em;
    font-weight: 700; }
    .login-form input:focus {
      border-color: #27b9d6;
      box-shadow: 0 0 0.1em rgba(39, 185, 214, 0.6);
      outline: none; }
    .login-form input.password {
      margin-bottom: 1em; }
  .login-form .login-btn {
    background: #535658;
    color: white;
    text-transform: uppercase;
    text-align: center;
    padding: 1em;
    margin-bottom: 1em;
    border: 0;
    border-radius: 0.3rem;
    display: block;
    width: 100%;
    font-size: 1em; }
  .login-form p {
    text-align: center;
    margin: 0; }
    .login-form p a {
      font-weight: 700; }

.main-menu ul li {
  border-bottom: 0.1em solid #ebebeb; }
  .main-menu ul li .icon {
    display: block;
    float: left;
    font-size: 1.36em;
    width: 1em;
    height: 1em;
    margin-right: 1em;
    text-align: center; }
  .main-menu ul li:first-child a {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem; }
  .main-menu ul li:last-child {
    border-bottom: 0; }
    .main-menu ul li:last-child a {
      border-bottom-left-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem; }
  .main-menu ul li a {
    display: block;
    padding: 1em;
    color: #46494c; }
    .main-menu ul li a:hover {
      color: #1c84d4; }
    .main-menu ul li a .badge {
      color: white;
      min-width: 3em;
      padding: 0.4em 0.8em 0.3em;
      border-radius: 2em;
      font-size: 0.8em;
      text-align: center;
      display: block;
      float: right;
      vertical-align: middle;
      background: rgba(0, 0, 0, 0.2); }
      .main-menu ul li a .badge.green {
        background: #2eb398; }
    .main-menu ul li a .title {
      font-weight: 600;
      font-size: 1.2em;
      margin-top: 0.1em; }
  .main-menu ul li.orange {
    background: #ee775b; }
    .main-menu ul li.orange > a {
      background: #e76049;
      border-bottom: 0.1em solid #ed8776; }
    .main-menu ul li.orange a {
      color: white; }
  .main-menu ul li > ul {
    padding: 0.5em 0; }
    .main-menu ul li > ul li {
      border-bottom: 0; }
    .main-menu ul li > ul a {
      opacity: 0.75;
      padding: 0.5em 1em; }
      .main-menu ul li > ul a:hover {
        opacity: 1; }
    .main-menu ul li > ul .title {
      font-size: 1em;
      font-weight: 400; }

.weather .current {
  text-align: center;
  background: #ffcf00;
  padding: 2em 0 0;
  color: white; }
  .weather .current .icon {
    font-size: 9em; }
  .weather .current .temperature {
    font-size: 5em;
    font-weight: 700;
    margin-top: -0.3em; }
.weather .info {
  padding: 1.4rem 1.4rem 0.9rem;
  font-size: 1.4em;
  font-weight: 700; }
  .weather .info .city {
    text-transform: uppercase;
    margin-bottom: 0.6rem; }
  .weather .info .indicators {
    color: #66696c; }
    .weather .info .indicators .icon {
      margin-right: 0.5em; }
    .weather .info .indicators .wind small {
      text-transform: uppercase;
      font-size: 0.6em;
      margin-left: 0.1em; }
  .weather .info .refresh {
    font-size: 1.5em;
    width: 1.85em;
    height: 1.85em;
    background: #dcdddd;
    border: 0;
    border-radius: 0.3rem;
    color: white; }

.location {
  background: #5691b1; }
  .location .map {
    height: 15em;
    background: url(//i.imgbox.com/adlFId14) center center;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem; }
  .location .decription {
    padding: 1em;
    font-weight: 600; }
    .location .decription .loc {
      color: #225773;
      font-size: 1em;
      text-transform: uppercase;
      margin-bottom: 0.2rem; }
    .location .decription .city, .location .decription .photos {
      color: white;
      text-transform: uppercase; }
    .location .decription .city {
      font-size: 1.4em; }
    .location .decription .photos {
      font-size: 1.2em;
      padding: 0.59em 0.4em 0.4em;
      display: block;
      border: 0.2rem solid rgba(255, 255, 255, 0.2);
      border-radius: 0.3rem;
      text-align: center; }
      .location .decription .photos:hover {
        background: rgba(0, 0, 0, 0.05); }
    @media only screen and (min-width: 641px) and (max-width: 959px) {
      .location .decription .photos {
        font-size: 0.75em;
        padding: 0.6em 0.2em 0.7em; } }
    @media only screen and (max-width: 640px) {
      .location .decription .photos {
        font-size: 0.8em;
        padding: 0.4em; }
      .location .decription .city {
        font-size: 1.1em; } }

.progress-bar .bar {
  border-radius: 0.5rem;
  padding: 0.1em;
  background: black;
  box-shadow: 0 0.1em rgba(255, 255, 255, 0.1);
  position: relative; }
  .progress-bar .bar .progress {
    background: rgba(255, 255, 255, 0.15);
    width: 60%;
    border-radius: 0.3rem; }
  .progress-bar .bar .value {
    width: 40%;
    height: 0.6em;
    background: #e76049;
    border-radius: 0.3rem;
    box-shadow: inset 0 0.1em rgba(255, 255, 255, 0.2); }

.fullwidth {
  width: 100%; }

.middle {
  vertical-align: middle; }



a {
  cursor: pointer;
  color: #46494c; }
  a:hover { color: #1c84d4; }

#controls-container {
  color: white;
  position: fixed;
  top: 5px;
  left: 5px;
  font: 13px/1.1 "Helvetica Neue", Tahoma, Verdana;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px;
  z-index: 1000;
  opacity: 0.2; }
  #controls-container:hover {
    opacity: 1; }
  #controls-container input {
    display: block; }

.fr {
  float: right; }

.fl {
  float: left; }

.unstyled {
  margin: 0;
  padding: 0;
  list-style: none; }

ul.table > li {
  display: table-cell; }

.illustration {
  padding: 0.1em 1em; }


  #cardX {
  border-radius: 0.3rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 1em; 

  }

/*# sourceMappingURL=style.css.map */
.xxx {

   width:350px;
   color:#fff;

   border-radius: 5px;
}


input[type="date"], input[type="time"], input[type="datetime-local"], input[type="month"] {
    -webkit-appearance: listbox;
    width: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #BDC3C7;
    border: 0px;
    padding: 5px;
    color: #212F3C;


}













.card-set {
	padding: 8px 0;
	margin-bottom: 30px;
}

.card-set .card {
	margin-bottom: 32px;
	color: rgba(0, 0, 0, 0.87);
	box-shadow: 0 3px 14px -4px rgba(0, 0, 0, 0.15);
	border-radius: 12px;
	border: 0;
	min-height: 126px;
}

.card-set .card .card-title {
	display: flex;
	justify-content: flex-end;
	padding: 15px;
	font-weight: 600;
	font-size: 0.925rem;
	color: #434343;
	text-transform: capitalize;
}

.card-set .card .card-data {
	display: flex;
	justify-content: flex-end;
	padding: 15px;
	font-size: 1.3rem;
	font-weight: 600;
	color: #333333;
}

.card-set .card hr {
	width: 90%;
}

.card-set .card .card-hint {
	display: flex;
	padding: 0 0 8px 8px;
	font-size: 0.9rem;
	font-weight: 300;
}

.card-set .card .card-hint i {
	font-size: 1.3rem;
	color: red;
	margin-right: 8px;
}

.card-set .card .card-icon {
	display: flex;
	position: absolute;
	top: 23px;
	left: 12px;
	background: linear-gradient(60deg, #ffa726, #ef6c00);
	color: white;
	width: 75px;
	height: 75px;
	box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.15);
	align-items: center;
	justify-content: center;
	border-radius: 25%;
}

.card-set .card .card-icon i,
      .card-set .card .card-icon span {
	font-size: 2.5rem;
}

.card-set #storageCard .card-icon {
	background: #f50000;
}

.card-set #storageCard .card-hint i {
	color: red;
}

.card-set #loveCard .card-icon {
	background: #5e35b1;
}

.card-set #loveCard .card-hint i {
	color: blue;
}

.card-set #pizzaCard .card-icon {
	background: #fb8c00;
}

.card-set #pizzaCard .card-hint i {
	color: red;
}







.badge {
    display: inline-block;
    /* padding: 0.25em 0.4em;
     */
    /* font-weight: 700; */

    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}



.badge-01 {
    color: #34495E;
    background-color: #D5F5E3;
    
}

.badge-02 {
    color: #34495E;
    background-color: #FCF3CF;
}

.badge-03 {
    color: #34495E;
    background-color: #EBDEF0;
}

.badge-04 {
    color: #34495E;
    background-color: #FADBD8;
}




.badge-05 {
    color: #34495E;
    background-color:rgba(229, 231, 233 , 0.5);
}

.badge-GL1 {
    color: #34495E;
    background-color:rgba(55, 173, 221, 0.5);



}

.badge-GL1 {
    color: #34495E;
    background-color:rgba(217, 136, 128   , 0.5);
}


.mb-4, .my-4 {
    margin-bottom: 0px !important;
}



.analytics-metrics {
  float: right;
  width: 100%;
  text-align: center;
}

.analytics-count {
  margin-bottom: 15px;
  line-height: 50px;
  font-size: 48px;
  color: #242831;
  font-weight: bold;
  letter-spacing: -1px;
  -webkit-font-smoothing: antialiased;
}

.analytics-metric {
  float: left;
  width: 50%;
  line-height: 15px;
  font-size: 11px;
  font-weight: bold;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.analytics-metric > span {
  display: block;
  margin-top: 0px;
 
  font-size: 20px;
  font-weight: normal;
  color: #cad6eb;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.2);
}

.analytics-metric + .analytics-metric {
  border-left: 1px solid #5e6876;
  border-left-color: rgba(40, 44, 52, 0.25);
  -webkit-box-shadow: inset 1px 0 rgba(255, 255, 255, 0.05), -1px 0 rgba(255, 255, 255, 0.05);
  box-shadow: inset 1px 0 rgba(255, 255, 255, 0.05), -1px 0 rgba(255, 255, 255, 0.05);
}





</style>
