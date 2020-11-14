<template>




<div class="animated fadeIn">





 <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" > Progress : Warehouse 
 

              <div class="card-header-actions">


                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
     
              </div>
            </div>
              <b-collapse id="collapse1" visible>


              <b-card-body>

    
          <div class="box">
          
            <!-- /.box-header -->
            <div class="box-body">
              <div class="row">
                <div class="col-md-12 col-lg-4"> 

               <div style="width: 100%; display: inline-block; vertical-align: top; ">

                    <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center"  class="hover truck" lang="x-truck">
                        <tr>
                            <td align="center" style="display:none;width:0;height:0;font-size:0;line-height:0;float:left;overflow:hidden;" class="icon">
                              <i class="fa fa-truck fa-5x"></i></td>
                        </tr>
              
                        <tr>
                            <td align="center" class="noWebkit">
                              <i class="fa fa-truck" aria-hidden="true" style="font-size:80px; color:rgba(127, 179, 213,0.5)"></i>
                              <i class="fa fa-truck" aria-hidden="true" style="font-size:40px; color:rgba(241, 148, 138,0.5)"></i>
                            <!-- <sup>  <span class="badge badge-pill badge-success">2</span></sup> -->
                            
                            </td>
                        </tr>
                
                        <tr>
                            <td style=";font-size:18px;font-weight:bold; text-align:center;">
                              รถ.บริษัทขนส่ง 96/96 </td>
                        </tr>
                  
                     
            
                        <tr>
                            <td align="center">
                               <b-button  variant="secondary" ><i class="fa fa-flag" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;P:13,000&nbsp;&nbsp;</b-button>&nbsp;
                               <b-button  variant="success" ><i class="fa fa-shopping-basket" aria-hidden="true"></i>&nbsp;&nbsp;A:&nbsp;5,000&nbsp;&nbsp;</b-button>&nbsp;
                               <b-button  variant="danger" ><i class="fa fa-spinner" aria-hidden="true"></i>&nbsp;&nbsp;WIP:&nbsp;8,000&nbsp;&nbsp;</b-button>
                            
                            </td>
                        </tr>
                        <tr>
                            <td align="center">   


          

                <div class="XXX" >
                <canvas id="graph2"  width="80%" height="120"></canvas>


                 </div>
             
         


                            </td>        



                        </tr>


                 
                 
                    </table>
                

                    </div> 



              
                </div>  





                <div class="col-md-12 col-lg-4">
       
<div class="list-group-stats">

            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                  <i class="fa fa-university" style="color:#ABB2B9; font-size:20px"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading" style="color:#7FB3D5" >
                  รับสินค้าเข้าคลัง    
                  <span class="pull-right">
                    
                    <i class="fa fa-star" style="color:#F4D03F;">&nbsp;&nbsp;</i> 100%</span>
                </div>
                  <div class="list-group-stats-item-bar" style="background:rgba(255,255,255, 0.3)">
                  <div class="list-group-stats-item-progress" style="width:100% ;  background:rgba(34, 126, 201, 0.8)"></div>
                </div>

                
              </div>

              <div class="list-group-item-hover "  style="background-color:#293949" >
                <div class="row row-min">



                  <div class="col-sm-4 text-center">
                    PLAN<br>16,921.46
                  </div>
                  <div class="col-sm-4 text-center">
                    ACTION<br>16,921.46
                  </div>
                  <div class="col-sm-4 text-center">
                    WIP<br>0
                  </div> 





                </div>   
              </div>
            </div>



            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                  <i class="fa fa-shopping-cart" style="color:#ABB2B9; font-size:20px"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading" style="color:#7FB3D5" >
                  จัดเก็บสินค้า
                  <span class="pull-right">60.40%</span>
                </div>
                <div class="list-group-stats-item-bar" style="background:rgba(255,255,255, 0.3)">
                  <div class="list-group-stats-item-progress" style="width:60.40% ;  background:rgba(34, 126, 201, 0.8)"></div>
                </div>
              </div>

              <div class="list-group-item-hover "  style="background-color:#293949" >
                <div class="row row-min">



                  <div class="col-sm-4 text-center">
                    PLAN<br>16,921.46
                  </div>
                  <div class="col-sm-4 text-center">
                    ACTION<br>10,221.12
                  </div>
                  <div class="col-sm-4 text-center">
                    WIP<br>6,700.34
                  </div> 

                </div>   
              </div>
            </div>

<!-- 

            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
              <i class="fa fa-male" style="color:#ABB2B9;"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading"  style="color:#7FB3D5">
                  สินค้าที่ต้องจัดเบิก
                  <span class="pull-right">50%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(255,255,255, 0.3)">
                  <div class="list-group-stats-item-progress" style="width:50%;  background-color:rgba(34, 126, 201, 0.8)"></div>
                </div>
              </div>


              <div class="list-group-item-hover "  style="background-color:#293949" >
                <div class="row row-min">



                  <div class="col-sm-4 text-center">
                    PLAN<br>28
                  </div>
                  <div class="col-sm-4 text-center">
                    ACTION<br>25
                  </div>
                  <div class="col-sm-4 text-center">
                    IN-PROGRESS<br>25
                  </div> 





                </div>   
              </div>



            </div> -->


            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <i class="fa fa-search" style="color:#ABB2B9"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading"  style="color:#7FB3D5">
                  จัดเบิกสินค้า
                  <span class="pull-right"><i class="fa fa-star" style="color:#F4D03F;">&nbsp;&nbsp;</i> 100%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(255,255,255, 0.3)">
                  <div class="list-group-stats-item-progress" style="width:100%;  background-color:rgba(34, 126, 201, 0.8)"></div>
                </div>
              </div>


              <div class="list-group-item-hover "  style="background-color:#293949" >
                <div class="row row-min">



                  <div class="col-sm-4 text-center">
                    PLAN<br>20,373.34
                  </div>
                  <div class="col-sm-4 text-center">
                    ACTION<br>20,373.34
                  </div>
                  <div class="col-sm-4 text-center">
                    WIP<br>0
                  </div> 





                </div>   
              </div>


            </div>





            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <i class="fa fa-cubes" style="color:#ABB2B9 ; font-size:18px"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading"  style="color:#7FB3D5">
                  บรรจุสินค้า
                  <span class="pull-right">90.93%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(255,255,255, 0.3)">
                  <div class="list-group-stats-item-progress" style="width:90.93%;  background-color:rgba(34, 126, 201, 0.8)"></div>
                </div>
              </div>


              <div class="list-group-item-hover "  style="background-color:#293949" >
                <div class="row row-min">



                  <div class="col-sm-4 text-center">
                    PLAN<br>20,373.34
                  </div>
                  <div class="col-sm-4 text-center">
                    ACTION<br>18,524.74
                  </div>
                  <div class="col-sm-4 text-center">
                    WIP<br>1,848.60
                  </div> 





                </div>   
              </div>


            </div>

           <hr style="text-align:left;margin-left:0;color:gray;background-color:gray" >


            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                  <i class="fa fa-file-text-o" style="color:#ABB2B9;"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading" style="color:#7FB3D5" >
                  ขอเบิกสินค้า (ฝ่ายขายในฯ)
                  <span class="pull-right">84.58%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(255,255,255, 0.3)">
                  <div class="list-group-stats-item-progress" style="width:84.58%;  background-color:rgba(34, 126, 201, 0.8)"></div>
                </div>
              </div>

              <div class="list-group-item-hover "  style="background-color:#293949" >
                <div class="row row-min">
                  <div class="col-sm-4 text-center">
                    PLAN<br>17,658.57
                  </div>
                  <div class="col-sm-4 text-center">
                    ACTION<br>14,936.46
                  </div>
                  <div class="col-sm-4 text-center">
                    WIP<br>2,722.11
                  </div> 





                </div>   
              </div>
            </div> 


 





          </div>



<!-- 
<ul class="skill-list">
  <li class="skill">

    <h6> 
    <i class="fa fa-university" aria-hidden="true"></i> รับสินค้าเข้าคลัง </h6>
   

      <b-progress class="skill-1" :value="10" :max="100" variant="#2980B9" style="height:20px; background:rgba(34, 126, 201, 0.1)"> </b-progress>

   
  </li>


  <li class="skill">
    <i class="fa fa-university" aria-hidden="true"></i> เก็บสินค้าขึ้นชั้นวาง
    <progress class="skill-2" max="100" value="75"  style="height:10px;">
      
    </progress>
  </li>
  <li class="skill">
    <i class="fa fa-university" aria-hidden="true"></i> ส่งรายการให้คลังจัดเบิก
    <progress class="skill-3" max="100" value="25" style="height:10px;">

    </progress>
  </li>
</ul>






 -->




                </div>
                <!-- /.col -->




                <div class="col-md-12 col-lg-4">
             



     <b-row>



   
     <b-col sm="12" md="6"  lg="6">
        <b-card class="text-white" style="background-color: rgba(93, 173, 226, 0.5);">
       
          <div class="h4 mb-0">765.70</div>
          <small class="text-muted text-uppercase font-weight-bold">เบิกขายเข้าคลังฝาก</small>
           <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25" style="background-color: rgba(93, 173, 226, 0.2)"/>


            

        </b-card>
      </b-col>




      <b-col sm="12" md="6" lg="6">
        <b-card class="text-white"  style="background-color: rgba(115, 198, 182 , 0.5);">
    
          <div class="h4 mb-0">5,321.42</div>
          <small class="text-muted text-uppercase font-weight-bold" >จัดเก็บสินค้าเข้าคลังฝาก</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>

    </b-row>
    <b-row>

      <b-col sm="12" md="6"  lg="6" >    
        <b-card class="text-white"   style="background-color: rgba(249, 231, 159, 0.5)">

          <div class="h4 mb-0">1,549.15</div>
          <small class="text-muted text-uppercase font-weight-bold">เบิกสินค้าจากคลังฝาก</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>

      <b-col sm="12" md="6"  lg="6">
        <b-card class="text-white"  style="background-color: rgba(241, 148, 138 , 0.5)">
    
          <div class="h4 mb-0">6,690.67</div>
          <small class="text-muted text-uppercase font-weight-bold">บรรจุสินค้าจากคลังฝาก</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col> 











<!-- 
       
     <b-col sm="12" md="6"  lg="6">
        <b-card class="text-white" style="background-color: rgba(93, 173, 226, 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"></i>
          </div>
          <div class="h4 mb-0">765.70</div>
          <small class="text-muted text-uppercase font-weight-bold">เบิกขายเข้าคลังฝาก</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>




      <b-col sm="12" md="6" lg="6">
        <b-card class="text-white"  style="background-color: rgba(115, 198, 182 , 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"></i>
          </div>
          <div class="h4 mb-0">5,321.42</div>
          <small class="text-muted text-uppercase font-weight-bold">จัดเก็บสินค้าเข้าคลังฝาก</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>

    </b-row>
    <b-row>

      <b-col sm="12" md="6"  lg="6">
        <b-card class="text-white"   style="background-color: rgba(249, 231, 159, 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"></i>
          </div>
          <div class="h4 mb-0">1,549.15</div>
          <small class="text-muted text-uppercase font-weight-bold">เบิกสินค้าจากคลังฝาก</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>

      <b-col sm="12" md="6"  lg="6">
        <b-card class="text-white"  style="background-color: rgba(241, 148, 138 , 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"></i>
          </div>
          <div class="h4 mb-0">6,690.67</div>
          <small class="text-muted text-uppercase font-weight-bold">บรรจุสินค้าจากคลังฝาก</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col> -->


</b-row>
                
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
            <!-- ./box-body -->
            <div class="box-footer" style="border-top: 1px solid #666666;padding-top:10px; color:#D0D3D4">
              <div class="row">


                <div class="col-6 col-sm-2">
                  <div class="description-block border-right">
                    <span class="description-percentage text-success"><i class="fa fa-star" style="color:#F4D03F;"></i>&nbsp;&nbsp;Last action : 16.45 </span>
                    <h5 class="description-header">0</h5>
                    <span class="description-text">รอรับเข้าคลัง</span>
                  </div>
                  <!-- /.description-block -->
                </div>



                <!-- /.col -->
                <div class="col-6 col-sm-2">
                  <div class="description-block border-right">
                    <span class="description-percentage text-red"><i class="fa fa-pause"></i>&nbsp;&nbsp;Last action : 13.45</span>
                    <h5 class="description-header">6,700.34</h5>
                    <span class="description-text">รอจัดเก็บ</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-6 col-sm-2">
                  <div class="description-block border-right">
                    <span class="description-percentage text-red"><i class="fa fa-pause"></i>&nbsp;&nbsp;Last action : 12.45</span>
                    <h5 class="description-header">2,722.11</h5>
                    <span class="description-text">รอส่งคลัง</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-6 col-sm-2">
                  <div class="description-block  border-right">
                    <span class="description-percentage text-success"><i class="fa fa-star" style="color:#F4D03F;"></i>&nbsp;&nbsp;Last action : 17.45</span>
                    <h5 class="description-header">0</h5>
                    <span class="description-text">รอจัดเบิก</span>
                  </div>
                  <!-- /.description-block -->
                </div>

                
                <div class="col-6 col-sm-2">
                  <div class="description-block border-right">
                    <span class="description-percentage text-success"><i class="fa fa-star" style="color:#F4D03F;"></i>&nbsp;&nbsp;Last action : 17.45</span>
                    <h5 class="description-header">0</h5>
                    <span class="description-text">รอยิงเบิก</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                
                <div class="col-6 col-sm-2">
                  <div class="description-block border-right">
                    <span class="description-percentage text-green"><i class="fa fa-forward"></i>&nbsp;&nbsp;Last action : 17.45</span>
                    <h5 class="description-header">1,848.60</h5>
                    <span class="description-text">รอบรรจุ</span>
                  </div>
                  <!-- /.description-block -->
                </div>



              </div>
              <!-- /.row -->
            </div>
            <!-- /.box-footer -->
          </div>
          <!-- /.box -->


               
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
  </b-row> 



 <b-row> 
 <b-col lg="2">



        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" style="font-size:12px">จัดเก็บสินค้า
              <div class="card-header-actions">
      
      
        

                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up fa-lg"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body>



          
<b-row>
  
<b-col sm="12">

<div class="progress-cycle" >

<div class='flx'>

    <div class="flx-item">
    <svg class="circle-progress" viewBox="0 0 36 36">
      
      <path class='circle-path-rec' d="M18 2a16 16 0 010 32 16 16 0 010-32" stroke-dasharray="75, 100"></path>
      
      <text class='circle-text' x="50%" y="65%" style="font-size:4px">รับเข้า</text>
      <text class='circle-text' x="50%" y="40%">75%</text>
    </svg>


  </div>

 </div>
 
 </div>
  
 </b-col>

<!--  
  <b-col sm="6">
<div class="progress-cycle" >


<div class='flx'>

  <div class="flx-item">

    <svg class="circle-progress" viewBox="0 0 36 36">
      <path class='circle-path-pay' d="M18 2a16 16 0 010 32 16 16 0 010-32" stroke-dasharray="33.5, 100"></path>
      <text class='circle-text' x="50%" y="65%">จัดเบิก</text>
      <text class='circle-text' x="50%" y="40%">33.5%</text>
    </svg>


  </div>
 </div>



 </div>

      </b-col> -->
 </b-row>
<!-- 

<b-row>

  <b-col sm="6">

<div class="progress-cycle" >

<div class='flx'>

  <div class="flx-item">
    <svg class="circle-progress" viewBox="0 0 36 36">
      <path class='circle-path-pack' d="M18 2a16 16 0 010 32 16 16 0 010-32" stroke-dasharray="33.5, 100"></path>
      <text class='circle-text' x="50%" y="65%">บรรจุ</text>
      <text class='circle-text' x="50%" y="40%">33.5%</text>
    </svg>

  </div>
 </div>
 </div>
  
 </b-col>


<b-col sm="6">

<div class="progress-cycle" >

<div class='flx'>

  <div class="flx-item">
    <svg class="circle-progress" viewBox="0 0 36 36">
      <path class='circle-path-car' d="M18 2a16 16 0 010 32 16 16 0 010-32" stroke-dasharray="33.5, 100"></path>
      <text class='circle-text' x="50%" y="65%">ขึ้นรถ</text>
      <text class='circle-text' x="50%" y="40%">33.5%</text>
    </svg>
   
  </div>
 </div>
 </div>

 </b-col>  
 
  
 </b-row> -->






<!-- 
<b-row>

  <b-col sm="12">
    <b-row>   
           <div style="padding-top:5px; padding-left:5px; "><i class="fa fa-university" style="color:rgba(115, 198, 182   ,  0.8); font-size:13px"></i>

           &nbsp;&nbsp;|&nbsp;&nbsp;Start-time
            </div>
   </b-row>
   <b-row>
          <div style="padding-top:5px; padding-left:5px;">  <i class="fa fa-cube" style="color:rgba(55, 173, 221,  0.8); font-size:16px"></i> 
          &nbsp;&nbsp;|&nbsp;&nbsp;Start-time
          </div>
   </b-row>
   <b-row>
         <div style="padding-top:5px; padding-left:5px;">  <i class="fa fa-cubes" style="color:rgba(217, 136, 128   ,  0.8); font-size:12.5px"></i>
         &nbsp;&nbsp;|&nbsp;&nbsp;Start-time
         </div>
  </b-row>
  <b-row>
         <div style="padding-top:5px; padding-left:5px;">  <i class="fa fa-truck" style="color:rgba(247, 220, 111, 0.8); font-size:16px"></i>
         &nbsp;&nbsp;|&nbsp;&nbsp;Start-time
         </div>
  </b-row>

  </b-col>


</b-row>    -->

<b-row>
  
  <b-col lg="12">



  <div class="panel panel-default card panel-dark" data-db-identifier="contractGoals" style="padding-top:10px;">
        <div class="panel-body">
        
          <small>1.รับสินค้าเข้าคลัง</small> 
          
          <div class="list-group-stats">

            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <!-- <img src="img/brand/saleAll.png"> -->
                 <i class="fa fa-android" style="color:rgba(115, 198, 182   ,  0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังอัตโนมัติ (W)
                  <span class="pull-right">100%</span>
                </div>
                <div class="list-group-stats-item-bar" style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:89% ;  background-color:rgba(115, 198, 182, 0.8)"></div>
                </div>
              </div>

              <div class="list-group-item-hover "  style="background-color:#293949" >
                <div class="row row-min">



                  <div class="col-sm-4 text-center">
                    ทั้งหมด<br>28
                  </div>
                  <div class="col-sm-4 text-center">
                    รับเข้า<br>25
                  </div>
                  <div class="col-sm-4 text-center">
                    ค้างรับ<br>25
                  </div> 





                </div>   
              </div>
            </div>
            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
              <i class="fa fa-male" style="color:rgba(115, 198, 182   ,  0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังพื้น (K)
                  <span class="pull-right">50%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:50%;  background-color:rgba(115, 198, 182, 0.8)"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">   
                    Total Leads<br> 2
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 1
                  </div>
                </div>
              </div>
            </div>
            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <i class="fa fa-users" style="color:rgba(115, 198, 182   ,  0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังฝาก (W&K)
                  <span class="pull-right">6%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:6%;  background-color:rgba(115, 198, 182, 0.8)"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 15
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 1
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <img src="http://files.softicons.com/download/internet-icons/user-icons-by-2shi/png/256/user1.png">
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  Juturu VJ
                  <span class="pull-right">0%</span>
                </div>
                <div class="list-group-stats-item-bar">
                  <div class="list-group-stats-item-progress" style="width:52%"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 15
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 0
                  </div>
                </div>
              </div>
            </div> -->
























            
          </div>
        </div>
      </div>
       













  </b-col>
</b-row>  

<b-row>


<b-col sm="12">

<div class="progress-cycle" >

<div class='flx'>

    <div class="flx-item">
    <svg class="circle-progress" viewBox="0 0 36 36">
      
      <path class='circle-path-pay' d="M18 2a16 16 0 010 32 16 16 0 010-32" stroke-dasharray="75, 100"></path>
      
      <text class='circle-text' x="50%" y="65%" style="font-size:4px">จับเก็บขึ้นชั้นวาง</text>
      <text class='circle-text' x="50%" y="40%">75%</text>
    </svg>


  </div>

 </div>
 
 </div>
  
 </b-col>


  
  <b-col lg="12">









  <div class="panel panel-default card panel-dark" data-db-identifier="contractGoals" style="padding-top:10px;">
        <div class="panel-body">
       
          <small>2.จัดเก็บสินค้าขึ้นชั้นวาง</small> 
          
          <div class="list-group-stats">

            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <!-- <img src="img/brand/saleAll.png"> -->
                 <i class="fa fa-android" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังอัตโนมัติ (W)
                  <span class="pull-right">89%</span> 
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:89%; background-color: rgba(82, 157, 183,1);"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-4 text-center ">
                    ทั้งหมด<br>28
                  </div>
                  <div class="col-sm-4 text-center left-separator">
                    รับเข้า<br> 25
                  </div>
                  <div class="col-sm-4 text-center left-separator">
                    ค้างรับ<br> 25
                  </div>

                </div>
              </div>
            </div>
            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
              <i class="fa fa-male" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังพื้น (K)
                  <span class="pull-right">50%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:50%;  background-color: rgba(82, 157, 183,1);"></div>
                </div> 
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 2
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 1
                  </div>
                </div>
              </div>
            </div>
            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                 <i class="fa fa-users" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังฝาก (W&K)
                  <span class="pull-right">6%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:36% ;  background-color: rgba(82, 157, 183,1);"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 15
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 1
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <img src="http://files.softicons.com/download/internet-icons/user-icons-by-2shi/png/256/user1.png">
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  Juturu VJ
                  <span class="pull-right">0%</span>
                </div>
                <div class="list-group-stats-item-bar">
                  <div class="list-group-stats-item-progress" style="width:52%"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 15
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 0
                  </div>
                </div>
              </div>
            </div> -->
























            
          </div>
        </div>
      </div>
       













  </b-col>
</b-row>  
        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>









      </b-col>



</b-row> 




      <b-col lg="8">



        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" style="font-size:12px"> จัดเบิกสินค้า 
              <div class="card-header-actions">
      
      
          

                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up fa-lg"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body>

        <b-row>

     


     <b-col sm="6" md="2">
        <b-card class="text-white" style="background-color: rgba(93, 173, 226, 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"></i>
          </div>
          <div class="h4 mb-0">765.70</div>
          <small class="text-muted text-uppercase font-weight-bold">รอส่งให้คลังจัดเบิก</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white"  style="background-color: rgba(115, 198, 182 , 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"></i>
          </div>
          <div class="h4 mb-0">5,321.42</div>
          <small class="text-muted text-uppercase font-weight-bold">รอค้นหาสินค้า</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white"   style="background-color: rgba(249, 231, 159, 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"></i>
          </div>
          <div class="h4 mb-0">1,549.15</div>
          <small class="text-muted text-uppercase font-weight-bold">ระหว่างค้นหาสินค้า</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>

      <b-col sm="6" md="2">
        <b-card class="text-white"  style="background-color: rgba(241, 148, 138 , 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"></i>
          </div>
          <div class="h4 mb-0">6,690.67</div>
          <small class="text-muted text-uppercase font-weight-bold">รอบรรจุสินค้า</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>

        <b-col sm="6" md="2">
        <b-card class="text-white"  style="background-color: rgba(187, 143, 206 , 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"></i>
          </div>
          <div class="h4 mb-0">16,334.12</div>
          <small class="text-muted text-uppercase font-weight-bold">รอจัดลำดับ</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>


        <b-col sm="6" md="2">
        <b-card class="text-white" style="background-color: rgba(229, 152, 102, 0.5);">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"></i>
          </div>
          <div class="h4 mb-0">16,334.12</div>
          <small class="text-muted text-uppercase font-weight-bold">รอยิงขึ้นรถ</small>
          <b-progress height="10px" class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </b-col>






































        <b-col lg="12">




<!-- 

<b-card-group class="mb-4">
      <b-card style="background-color: rgba(93, 173, 226, 0.3);">
        <div class="h1 text-muted text-right mb-4">
          <i class="fa fa-file-text-o" aria-hidden="true"  style="color:#AED6F1 "></i>
        </div>

        <small class="text-muted text-uppercase font-weight-bold"><div style="color:#fff">รอส่งให้คลังจัดเบิก</div></small>
        <div class="h6 mb-0"  style="color:#fff">765.7 (kg)</div>
               
    
        <b-progress height="10px" class="progress-xs mt-3 mb-0" variant="info" :value="97.50"/>
      </b-card>
      <b-card  style="background-color: rgba(115, 198, 182 , 0.3);">
        <div class="h1 text-muted text-right mb-4">
          <i class="fa fa-hourglass-half" aria-hidden="true"  style="color:#73C6B6  "></i>
        </div>
      

        <small class="text-muted text-uppercase font-weight-bold"><div style="color:#fff">รอจัดเบิก</div></small>
        <div class="h6 mb-0" style="color:#fff">5,321.42  (kg)</div>





        <b-progress height="10px" class="progress-xs mt-3 mb-0" variant="success" :value="82.20"/>
      </b-card>
      <b-card  style="background-color: rgba(249, 231, 159, 0.3);">
        <div class="h1 text-muted text-right mb-4">
          <i class="fa fa-shopping-basket" aria-hidden="true" style="color:#FAE5D3 "></i>
        </div>

        <small class="text-muted text-uppercase font-weight-bold"><div style="color:#fff">ระหว่างค้นหาสินค้า</div></small>
         <div class="h6 mb-0" style="color:#fff">1,549.15  (kg)</div>




        <b-progress height="10px" class="progress-xs mt-3 mb-0" variant="warning" :value="93.70"/>
      </b-card>
      <b-card style="background-color: rgba(230, 176, 170, 0.3);">
        <div class="h1 text-muted text-right mb-4">
          <i class="fa fa-cubes" aria-hidden="true" style="color:#E6B0AA "></i>
        </div>
      



        <small class="text-muted text-uppercase font-weight-bold"><div style="color:#fff">รอบรรจุสินค้า</div></small>
       <div class="h6 mb-0" style="color:#fff">6,690.67  (kg)</div>



 



        <b-progress height="10px" class="progress-xs mt-3 mb-0" variant="danger"  :value="70.94"/>


      </b-card>
      <b-card style="background-color: rgba(215, 189, 226 , 0.3);">
        <div class="h1 text-muted text-right mb-4">
          <i class="fa fa-truck" aria-hidden="true" style="color:#D7BDE2 "></i>
        </div>


        


        <small class="text-muted text-uppercase font-weight-bold"><div style="color:#fff">รอยิงขึ้นรถ</div></small>
        <div class="h6 mb-0" style="color:#fff">16,334.12  (kg)</div>




        <b-progress height="10px" class="progress-xs mt-3 mb-0" variant="danger" :value="0"/>
      </b-card>
    </b-card-group> -->



        <b-row>
        <b-col lg="6">  
       
        <gridv2 
                ref="gridDrawing"
                :o_showtitle="true"
                :fields="fieldDataTaskPay"
                :name="name"
                :btnGrid="true"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawingTaskPay"
                :o_navfooter_visible="false"
                :o_nav_visible="false"
                :o_grid_responsive="true"
               
            >
            </gridv2>



        </b-col>



  <b-col lg="3">


  <div class="panel panel-default card panel-dark" data-db-identifier="contractGoals" >
        <div class="panel-body">
       
          <small>งานค้นหาสินค้า</small> 
          
          <div class="list-group-stats">

            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <!-- <img src="img/brand/saleAll.png"> -->
                 <i class="fa fa-android" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังอัตโนมัติ (W)
                  <span class="pull-right">89%</span> 
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:89%; background-color: rgba(82, 157, 183,1);"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-4 text-center ">
                    ทั้งหมด<br>28
                  </div>
                  <div class="col-sm-4 text-center left-separator">
                    รับเข้า<br> 25
                  </div>
                  <div class="col-sm-4 text-center left-separator">
                    ค้างรับ<br> 25
                  </div>

                </div>
              </div>
            </div>
            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
              <i class="fa fa-male" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังพื้น (K)
                  <span class="pull-right">50%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:50%;  background-color: rgba(82, 157, 183,1);"></div>
                </div> 
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 2
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 1
                  </div>
                </div>
              </div>
            </div>
            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                 <i class="fa fa-users" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังฝาก (W&K)
                  <span class="pull-right">6%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:36% ;  background-color: rgba(82, 157, 183,1);"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 15
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 1
                  </div>
                </div>
              </div>
            </div>

         


            
          </div>
        </div>
      </div>

  </b-col>




  
  <b-col lg="3">


  <div class="panel panel-default card panel-dark" data-db-identifier="contractGoals" style="padding-top:10px;">
        <div class="panel-body">
       
          <small>งานจัดเบิกสินค้า</small> 
          
          <div class="list-group-stats">

            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                <!-- <img src="img/brand/saleAll.png"> -->
                 <i class="fa fa-android" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังอัตโนมัติ (W)
                  <span class="pull-right">89%</span> 
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:89%; background-color: rgba(82, 157, 183,1);"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-4 text-center ">
                    ทั้งหมด<br>28
                  </div>
                  <div class="col-sm-4 text-center left-separator">
                    รับเข้า<br> 25
                  </div>
                  <div class="col-sm-4 text-center left-separator">
                    ค้างรับ<br> 25
                  </div>

                </div>
              </div>
            </div>
            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
              <i class="fa fa-male" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังพื้น (K)
                  <span class="pull-right">50%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:50%;  background-color: rgba(82, 157, 183,1);"></div>
                </div> 
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 2
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 1
                  </div>
                </div>
              </div>
            </div>
            <div class="list-group-stats-item">

              <div class="list-group-stats-item-pic">
                 <i class="fa fa-users" style="color:rgba(55, 173, 221, 0.8);"></i>
              </div>

              <div class="list-group-stats-item-content">
                <div class="list-group-stats-item-heading">
                  คลังฝาก (W&K)
                  <span class="pull-right">6%</span>
                </div>
                <div class="list-group-stats-item-bar"  style="background-color:rgba(93, 109, 126, 1)">
                  <div class="list-group-stats-item-progress" style="width:36% ;  background-color: rgba(82, 157, 183,1);"></div>
                </div>
              </div>

              <div class="list-group-item-hover">
                <div class="row row-min">
                  <div class="col-sm-6 text-center">
                    Total Leads<br> 15
                  </div>
                  <div class="col-sm-6 text-center left-separator">
                    Leads Won<br> 1
                  </div>
                </div>
              </div>
            </div>

         


            
          </div>
        </div>
      </div>

  </b-col>







        </b-row>  
















<!-- 


<b-row>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="fa fa-file-text-o" aria-hidden="true"></i>
          </div>
          <div class="h4 mb-0">87.500</div>
          <small class="text-muted text-uppercase font-weight-bold">ขายขอเบิกสินค้า</small>
          <b-progress height={} class="progress-white progress-xs mt-3" :value="25" show-progress animated/>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-success">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"></i>
          </div>
          <div class="h4 mb-0">385</div>
          <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
          <b-progress height={} class="progress-white progress-xs mt-3" :value="25" show-progress animated/>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-warning">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"></i>
          </div>
          <div class="h4 mb-0">1238</div>
          <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
          <b-progress height={} class="progress-white progress-xs mt-3" :value="25" show-progress animated/>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-primary">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"></i>
          </div>
          <div class="h4 mb-0">28%</div>
          <small class="text-muted text-uppercase font-weight-bold">Returning </small>
          <b-progress height={} class="progress-white progress-xs mt-3" :value="25" show-progress animated/>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-danger">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"></i>
          </div>
          <div class="h4 mb-0">5:34:11</div>
          <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
          <b-progress height={} class="progress-white progress-xs mt-3" :value="25" show-progress animated/>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech"></i>
          </div>
          <div class="h4 mb-0">972</div>
          <small class="text-muted text-uppercase font-weight-bold">Comments</small>
          <b-progress height={} class="progress-white progress-xs mt-3" :value="25" show-progress animated/>
        </b-card>
      </b-col>
    </b-row> -->






 
  <div class="stats-progress">
              

        


                <div class="stats" data-db-identifier="Requests" style="width: 20%;">
                    <div class="stats-title" style="font-size:12px;">
                       <i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;&nbsp; ขายส่งใบเบิก
                    </div>
                    <div class="stats-bar">
                        
                        <div class="stats-fill" style="width:97.50%;background-color: rgba(20, 143, 119  , 0.7) ;">
                        
                        </div>
                    </div>
                </div>

                <div class="stats" data-db-identifier="Inspections" style="width: 20%;">
                    <div class="stats-title"  style="font-size:12px;">
                        <i class="fa fa-hourglass-half" aria-hidden="true"></i>&nbsp;&nbsp; รอเบิกสินค้า
                    </div>
                    <div class="stats-bar">
                      
                        <div class="stats-fill" style="width:82.20%; background-color: rgba(40, 116, 166 , 0.7) ;">
                       
                        </div>
                    </div>
                </div> 

                

                <div class="stats" data-db-identifier="Complaints" style="width: 20%;">
                    <div class="stats-title"  style="font-size:12px;">
                       <i class="fa fa-shopping-basket" aria-hidden="true"></i>&nbsp;&nbsp; เบิกสินค้า
                    </div>
                    <div class="stats-bar">
                  
                        <div class="stats-fill" style="width:2%; background-color: rgba(176, 58, 46, 0.7) ;">
                     
                        </div>
                    </div>
                </div>



                <div class="stats" data-db-identifier="SalesVisit" style="width: 20%;">
                    <div class="stats-title"  style="font-size:12px;">
                       <i class="fa fa-cube" aria-hidden="true"></i>&nbsp;&nbsp; รอบรรจุ
                    </div>
                    <div class="stats-bar">
                        <!-- <span class="text">24</span> -->
                        <div class="stats-fill" style="width:40%">
                            <!-- <span class="text">1</span> -->
                        </div>
                    </div>
                </div>



    

                <div class="stats" data-db-identifier="ExtraJobs" style="width: 20%;">
                    <div class="stats-title"  style="font-size:12px;">
                        <i class="fa fa-cubes" aria-hidden="true"></i>&nbsp;&nbsp; บรรจุสินค้า	
                    </div>
                    <div class="stats-bar">
                        <!-- <span class="text">0</span> -->
                        <div class="stats-fill" style="width:2%">
                            <!-- <span class="text">0</span> -->
                        </div>
                    </div>
                </div>

            </div>   










        </b-col>
        </b-row>



        
















        <b-row>
        <b-col lg="8">  
       
        <gridv2 
                ref="gridDrawing"
                :o_showtitle="true"
                :fields="fieldDataTask"
                :name="name"
                :btnGrid="true"
                :btnAdd="false"
                :btnClone="false"
                :btnView="false"
                :btnEdit="false"
              
                :btnDelete="false"
                :o_col_checkbox="false"
                :trackBy="'rowID'"
                :data="dataDrawingTask"
                :o_navfooter_visible="false"
                :o_nav_visible="false"
                :o_grid_responsive="true"
               
            >
            </gridv2>



        </b-col>




        </b-row>  

        
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>






      </b-col>




      <b-col lg="2">



        <transition name="fade">
          <b-card no-body v-if="show">
            
            <div slot="header" > Transport volume 
              <div class="card-header-actions">
      
      

                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up fa-lg"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body>



        <b-row>
        <b-col lg="12">  






















            weight : P:1,000 kg. A:500.91 kg.

            <div class="circle">
  <span class="fill" style="height:55.5%">55%</span>
</div>
    
     

        </b-col>
        </b-row>  

        <b-row>
        <b-col lg="12">  
          






            



        <gridv2 
                ref="gridDrawing"
                :o_showtitle="false"
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
                :o_navfooter_visible="false"
                :o_nav_visible="false"
                :o_grid_responsive="true"
               
            >
            </gridv2>
            <br>
            <i class="fa fa-truck" aria-hidden="true" style="font-size:15px; color:#2471A3"></i>&nbsp;|รถ10ล้อ &nbsp;<i class="fa fa-truck" aria-hidden="true" style="font-size:10px; color:#D98880"></i>&nbsp;|รถ6ล้อ 

        </b-col>






        </b-row>    





              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>






      </b-col>







    </b-row>


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

var myChart2 = null;

export default {  




  name: 'forms',

  
 
  mounted () {



    
      myChart2 = null;


   this.QueryData();

  
    
  },




  data () {


    return {
      selected: [], // Must be an array reference!
      show: true,
      name : 'myAsset',
      icon_visible:true,
      file_visible: false,











       dataDrawingTaskPay : [{processdesc:"สั่งเบิกสินค้า",p_amt:30661.060000,a_amt:29895.360000,remain:765.70000,complete:97.50},
                      {processdesc:"รอเบิกสินค้าจากชั้นวาง",p_amt:29895.360000,a_amt:24573.940000,remain:5321.420000,complete:82.20},
                      {processdesc:"เบิกสินค้าจากชั้นวาง",p_amt:24573.940000,a_amt:23024.790000,remain:1549.150000,complete:93.70},
                      {processdesc:"เบิกเสร็จรอบรรจุ",p_amt:23024.790000,a_amt:16334.120000,remain:6690.670000,complete:70.94},
                      {processdesc:"บรรจุสินค้าเสร็จ",p_amt:16334.120000,a_amt:0.000000,remain:16334.120000,complete:0.00}









                     ],



       fieldDataTaskPay:[
      
      
       {
        name: "processdesc",
        title: "process",
        sortField: "processdesc",
        class: "text-left",
        visible: true, 
         width:30,
          callback:(v) => {
               return '&nbsp;&nbsp;'+v;  
        } 



       },
     
       {
         name: "p_amt",
         title: "Plan",
         sortField: "p_amt",
         class: "text-center",
         visible: true,
        
    


       }  ,
      
       {
         name: "a_amt",
         title: "Action",
         sortField: "a_amt",
         class: "text-center",
         visible: true,
         
    


       }  , 
       
       {
         name: "remain",
         title: "In-Progress",
         sortField: "remain",
         class: "text-center",
         visible: true,
    
    


       }  

 , 
       
       
  //       {
  //        name: "complete",
  //        title: "Complete",
  //        sortField: "complete",
  //        class: "text-center",
  //        visible: true,

  // callback:(v) => {
  //           if (this.$root.$options.filters.number(v,2) <= 0.00 ) 
  //           {
               
  //           } else {
              
              
  //           if (this.$root.$options.filters.number(v,2) >= 90 )
  //           {
  //               return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> '+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-good" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';

  //           } else {
  //              if (this.$root.$options.filters.number(v,2) <=70  )
  //              {


  //               if (this.$root.$options.filters.number(v,2) <=40  ) 
  //               {
  //              return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-bad" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
  //               }
  //               else
  //               {
  //                 return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-bad2good" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';

  //               }
             
             
  //             } 
              
              
  //              else 
            
  //              {
  //                return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill" style="width: '+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
  //              }
         
         
  //        }

  //        }



  //       }

   


  //       } 



       ],










    


       dataDrawingTask : [{doctypedesc:"ลูกค้ามารับเอง",paytot:5,payshelf:3,paypack:2,remain:3,netwei:33.45,complete:45.44},
                      {doctypedesc:"ส่งเอง",paytot:5,payshelf:3,paypack:2,remain:3,netwei:44.65,complete:78.44},
                      {doctypedesc:"รถ บขส.",paytot:5,payshelf:3,paypack:2,remain:3,netwei:44.65,complete:78.44},
                      {doctypedesc:"คลังฝาก",paytot:5,payshelf:3,paypack:2,remain:3,netwei:44.65,complete:78.44},
                      {doctypedesc:"รถบริษัทขนส่ง",paytot:5,payshelf:3,paypack:2,remain:3,netwei:44.65,complete:78.44}









                     ],
                     






       fieldDataTask:[
      
      
       {
        name: "doctypedesc",
        title: "ประเภทใบเบิก",
        sortField: "doctypedesc",
        class: "text-left",
        visible: true, 
        width:30,
          callback:(v) => {
               return '&nbsp;&nbsp;'+v;  
        } 
        
       }
        ,

     
       {
         name: "paytot",
         title: "จน.ใบเบิก",
         sortField: "paytot",
         class: "text-center",
         visible: true,
    


       }  ,
      
       {
         name: "payshelf",
         title: "เบิกเสร็จ",
         sortField: "payshelf",
         class: "text-center",
         visible: true,
    


       }  ,  
       
 
      
       {
         name: "paypack",
         title: "บรรจุเสร็จ",
         sortField: "paypack",
         class: "text-center",
         visible: true,
    


       }  ,  


       {
         name: "netwei",
         title: "นน.สุทธิ",
         sortField: "netwei",
         class: "text-center",
         visible: true,
    


       }  ,
       {
         name: "remain",
         title: "ค้างดำเนินการ",
         sortField: "remain",
         class: "text-center",
         visible: true,
    


       }  ,
        {
         name: "complete",
         title: "ความคืบหน้า",
         sortField: "complete",
         class: "text-center",
         visible: true,

  callback:(v) => {
            if (this.$root.$options.filters.number(v,2) <= 0 ) 
            {
               

            } else {
              
              
            if (this.$root.$options.filters.number(v,2) > 100 )
            {
                return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> '+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-good" style="width:100%"></div>  </div> </div>  </div> ';

            } else {
               if (this.$root.$options.filters.number(v,2) <=70  )
               {


                if (this.$root.$options.filters.number(v,2) <=40  ) 
                {
               return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-bad" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
                }
                else
                {
                  return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-bad2good" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';

                }
             
             
              } 
              
              
               else 
            
               {
                 return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill" style="width: '+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
               }
         
         
         }

         }



        }

   


        } 










        
       
       ],








       fieldData:[
      
      
       {
        name: "task",
        title: "P/A",
        sortField: "doctypedesc",
        class: "text-center",
        visible: true,
          callback:(v) => {
               if (v=="P")
               {
                    return '  <span class="badge badge-pill badge-success"  style="color:#000" >'+v+'</span>';
               }
               else{
                              
                    return '  <span class="badge badge-pill badge-warning"  style="color:#000" >'+v+'</span>';
               }     
        } 

       }
        ,

      
       {
         name: "netwei",
         title: "จน.รถขนส่ง",
         sortField: "netwei",
         class: "text-left",
         visible: true,

          callback:(v) => {
               if (this.$root.$options.filters.number(v,2) <= 10 ) 
               {
               return '<i class="fa fa-truck" aria-hidden="true" style="font-size:20px; color:#2471A3";></i>';

               }
               else if (this.$root.$options.filters.number(v,2) <= 20 )   {

                 return '<i class="fa fa-truck" aria-hidden="true" style="font-size:20px; color:#2471A3";></i>&nbsp;&nbsp;<i class="fa fa-truck" aria-hidden="true" style="font-size:15px; color:#D98880";></i>';

               }
       
               else{

                 return '<i class="fa fa-truck" aria-hidden="true" style="font-size:20px; color:#2471A3";></i>&nbsp;&nbsp;<i class="fa fa-truck" aria-hidden="true" style="font-size:20px; color:#2471A3";></i>';

               }
        }



//        }  ,

        
//        {
//         name: "complete",
//         title: "ความคืบหน้า",
//         sortField: "complete",
//         class: "text-center",
//         visible: true,

//  callback:(v) => {
//            if (this.$root.$options.filters.number(v,2) <= 0 ) 
//            {
               

//            } else {
              
              
//            if (this.$root.$options.filters.number(v,2) > 100 )
//            {
//                return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> '+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-good" style="width:100%"></div>  </div> </div>  </div> ';

//            } else {
//               if (this.$root.$options.filters.number(v,2) <=70  )

//               {


//                if (this.$root.$options.filters.number(v,2) <=40  ) 
//                {
//                 return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-bad" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
//                }
//                else
//                {
//                  return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill-bad2good" style="width:'+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';

//                }
             
             
//              } 
              
              
//               else 
              
//               {
//                 return     ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">'+this.$root.$options.filters.number(v,2)+'</span>  <div class="status-fill" style="width: '+this.$root.$options.filters.number(v,2)+'%"></div>  </div> </div>  </div> ';
//               }
         
         
//          }

//         }



//         }

   


        } 










        
       
       ],


       dataDrawing : [{task:"P",netwei:15},
                      {task:"A",netwei:5},

                     ],



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
    click () {
      // do nothing
    },

   to_workloadstock()
    {
        this.$router.push("/report/workloadstock")
    },


   to_waitcreatebill()
    {
        this.$router.push("/report/waitcreatebill")
    },

   to_workreqpaystock()
    {
        this.$router.push("/report/workreqpaystock")
    },

    to_saleall()
    {
        this.$router.push("/report/reptsummarysale")
    },
 
    to_dashboard()
    {
      this.$router.push("/dashboard")
      //this.$router.push("/report/mdmAR/mdmAR")
    },
    to_Check()
    {
      this.$router.push("/asset/record")
    },
    to_rptCheck()
    {
      this.$router.push("/report/rptAssetChk")
    },
    to_rptSummary()
    {
      this.$router.push("/report/rptAssetChkSummary")
    },
    onSubmit(evt) {
      evt.preventDefault();
       window.location.href = "/member/signin";

    },


    QueryData(){












       var data2= {
        labels: ['ลูกค้ามารับเอง','บริษัทส่งเอง','รถ.บขส.','คลังฝาก'],
        datasets: [
          



         





          {
   

            
            backgroundColor: 'rgba(34, 126, 201, 0.5)',
            borderColor:     'rgba(34, 126, 201, 0.5)', 

            label: 'P',
                       
              data: [5,11,14,0]
          
          },

          
          {
               backgroundColor: 'rgba(255,255,255, 0.3)',
               borderColor:     'rgba(255,255,255, 0.3)',
               label: 'A',
                         
               data:[5,11,12,0]
          }




          
          
          ]
      };



  
var option2 = {

    responsive: true,
    maintainAspectRatio: false,
    tooltips: {enabled: true},

        legend: {
                display: false
            },


    
scales: {
                      yAxes: [{
                            display: true,
                            ticks: {
       
                                beginAtZero: true,
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

    
        formatter: Math.round,
        font: {
          weight: 'bold'
        },

                 color: function(context) {
      
                 return context.hovered ? "blue" : "gray";
         },


 	
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









                        if(myChart2 !== null)
                          {
                          
                                  myChart2.data =  data2;
                                  myChart2.update();
                          }else
                          {

                var ctx2 = document.getElementById("graph2").getContext("2d");
                myChart2 = new Chart(ctx2, {
                                      type: 'bar',
                                      data:  data2,
                                      options: option2
                                    });
            
                          }

       
















var marksCanvas = document.getElementById("marksChart").getContext("2d");



var marksData = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [{
    label: "Student A",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "Student B",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75]
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData
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
  color: #c8ced3;
  font-size: 13px;
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






.space{
height:20px;  
}

/* for small metrics on top */

.row-dashboard:not(.row-dashboard-normal) > [class^=col-] {
    padding-left: 5px;
    padding-right: 5px;
}

.row-dashboard > [class^=col-]:first-child {
    padding-left: 15px;
}

.row-dashboard > [class^=col-]:last-child {
    padding-right: 15px;
}

.row-dashboard .panel {
    border-width: 0px;
}

.dashboard-card {
    padding: 0px;
    color: #fefefe;
    overflow: hidden;
}

    .dashboard-card:before, .dashboard-card:after {
        width: 100%;
        display: table;
        clear: both;
    }

    .dashboard-card > .left {
        float: left;
        width: 60%;
        font-size: 12px;
    }

    .dashboard-card > .right {
        text-align: right;
        float: left;
        width: 40%;
        font-size: 24px;
    }

    .dashboard-card > .left > .content {
        display: inline-block;
        padding: 14px 15px;
    }

    .dashboard-card > .right > .content {
        display: inline-block;
        padding: 6px 15px;
    }

.row-dashboard [class^=col-] .panel {
    color: #fefefe;
}

    .row-dashboard [class^=col-] .panel .dashboard-card {
        color: #fefefe;
    }

        .row-dashboard [class^=col-] .panel .dashboard-card > .right > .content {
            background-color: rgba(0, 0, 0, 0.15);
        }

.row-dashboard [class^=col-]:nth-child(1) .panel .dashboard-card {
    background-color: #72C367;
    border: 1px solid #61A658;
}

.row-dashboard [class^=col-]:nth-child(2) .panel .dashboard-card {
    background-color: #18ace0;
    border: 1px solid #1492BF;
}

.row-dashboard [class^=col-]:nth-child(3) .panel .dashboard-card {
    background-color: #ff9045;
    border: 1px solid #D97B3B;
}

.row-dashboard [class^=col-]:nth-child(4) .panel .dashboard-card {
    background-color: #b141a9;
    border: 1px solid #973790;
}

.row-dashboard [class^=col-]:nth-child(5) .panel .dashboard-card {
    background-color: #2e7c98;
    border: 1px solid #276A81;
}

.row-dashboard [class^=col-]:nth-child(6) .panel .dashboard-card {
    background-color: #E83C37;
    border: 1px solid #C6332F;
    /*background-color: #e4221b;*/
}

.col-sm-2 > .panel > .dashboard-card > .right > .content, .col-sm-1 > .panel > .dashboard-card > .right > .content {
    padding: 6px 12px;
}


/* for chart js */

.panel.card {
    border-radius: 0px;
    box-shadow: none;
    border-color: #dfdfdf;
    margin-bottom: 10px;
}

/* for contract goals */
.panel-body h4 small {
    display: block;
    text-align: center;
    margin-top: 5px;
}
.panel.panel-dark.card {
    background-color: transparent;
    border-color: rgba(44, 62, 80,0);
}

.panel.panel-dark.card * {
    color: #eee;
}

.list-group-stats {
    height: auto;
    position: relative;
}

    .list-group-stats .list-empty {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
        font-style: italic;
        opacity: 0.4;
    }



.list-group-stats-item {
    margin-bottom: 18px;
    font-size: 13px;
    position: relative;
    overflow: hidden;
}

    .list-group-stats-item::after, .list-group-stats-item::before {
        content: '';
        display: table;
        clear: both;
    }

    .list-group-stats-item span.pull-right {
        font-size: 12px;
    }

    .list-group-stats-item .list-group-stats-item-pic, .list-group-stats-item .list-group-stats-item-content {
        float: left;
    }

    .list-group-stats-item .list-group-stats-item-pic {
        width: 32px;
    }

        .list-group-stats-item .list-group-stats-item-pic > img {
            width: 38px;
            height: 38px;
            border-radius: 100%;
            /*border:1px solid rgb(44, 62, 80);*/
            background-color: white;
            box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.2);
        }

        .list-group-stats-item .list-group-stats-item-pic > .fa {
            width: 38px;
            height: 38px;
            border-radius: 100%;
            font-size: 24px;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: rgba(255,255,255,0.2);
            box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.0);
        }


    .list-group-stats-item .list-group-stats-item-content {
        margin-left: 12px;
        width: calc(100% - 50px);
    }

    .list-group-stats-item .list-group-item-hover {
        position: absolute;
        background-color: rgba(255,255,255,0.95);
        color: #444;
        width: calc(100% - 50px);
        height: 38px;
        left: 44px;
        transition: all 0.4s ease;
        transform: scaleY(0);
        -ms-transform-origin-y: 26px;
        -webkit-transform-origin-y: 26px;
        font-size: 11px;
    }

        .list-group-stats-item .list-group-item-hover .left-separator {
            border-left: 1px solid #dedede;
        }

        .list-group-stats-item .list-group-item-hover * {
            color: #fff !important;
        }

    .list-group-stats-item:hover .list-group-item-hover {
        transform: scaleY(1);
    }

.list-group-stats-item-bar {
    height: 8px;
    border-radius: 1px;
    background-color: #eee;
    overflow: hidden;
    margin-top: 4px;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.2);
}

    .list-group-stats-item-bar .list-group-stats-item-progress {
        height: 100%;
        transition: all 0.4s ease-out;
    }

.list-group-stats-item:nth-child(1) .list-group-item-hover {
    background-color: rgba(123, 211, 111,1);
}


.list-group-stats-item:nth-child(2) .list-group-item-hover {
    background-color: rgba(70, 195, 239,1);
}

.list-group-stats-item:nth-child(3) .list-group-item-hover {
    background-color: rgba(252, 175, 122,1);
}

.list-group-stats-item:nth-child(4) .list-group-item-hover {
    background-color: rgba(200, 104, 193,1);
}

.list-group-stats-item:nth-child(5) .list-group-item-hover {
    background-color: rgba(82, 157, 183,1);
}

.list-group-stats-item:nth-child(1) .list-group-stats-item-progress {
    background-color: rgba(123, 211, 111,0.8);
}


.list-group-stats-item:nth-child(2) .list-group-stats-item-progress {
    background-color: rgba(70, 195, 239,0.8);
}

.list-group-stats-item:nth-child(3) .list-group-stats-item-progress {
    background-color:rgba(252, 175, 122,0.8);
}

.list-group-stats-item:nth-child(4) .list-group-stats-item-progress {
    background-color:  rgba(200, 104, 193,0.8);
}

.list-group-stats-item:nth-child(5) .list-group-stats-item-progress {
    background-color:  rgba(82, 157, 183,0.8);
} 

/* for mini progress bars */
.stats-progress {
    margin-bottom: 10px;
    z-index: 10;
    background-color: rgba(174, 182, 191 ,0.2)  ;
    display: table;
    width: 100%;
    border: 1px solid rgba(174, 182, 191 ,0.2) ;
}

    .stats-progress::before, .stats-progress::after {
        content: " ";
        display: table;
    }

    .stats-progress .stats {
        /* width: 20%;
        padding-left: 5px;
        padding-right: 5px;
        height: 65px;
        color: rgba(174, 182, 191 ,0.8) ;
        padding: 0px 5px;
        float: left;
        border-right: 1px solid rgba(174, 182, 191 ,0.5) ; */


        width: 20%;
   
        height: 100%;
        color: rgba(174, 182, 191 ,0.8) ;
        padding: 5px;
        float: left;
        border-right: 1px solid rgba(174, 182, 191 ,0.5) ;
        

    }

        .stats-progress .stats:first-child {
            padding-left: 10px;
        }

        .stats-progress .stats:last-child {
            border-right: none;
            padding-right: 10px;
        }

        .stats-progress .stats .stats-title {
            text-align: center;
            margin-top: 5px;
        }


        .stats-progress .stats .stats-bar {
            height: 20px;
            width: 100%;
            margin-top: 5px;
         
            border-radius: 1px;
            background-color: rgb(93, 109, 126);
        }

        .stats-progress .stats .stats-fill {
            height: 100%;
            background-color: #EA8A49;
            border-radius: 1px;
            transition: all 0.4s ease;
        }

        .stats-progress .stats .stats-bar > .text {
            margin-top: 10px;
            float: right;
            font-size: 13px;
        }

        .stats-progress .stats .stats-fill > .text {
            margin-top: 10px;
            float: left;
            font-size: 13px;
        }

        .stats-progress .stats:nth-child(1) .stats-fill {
            background-color: #72C367;
        }


        .stats-progress .stats:nth-child(2) .stats-fill {
            background-color: #18ace0;
        }

        .stats-progress .stats:nth-child(3) .stats-fill {
            background-color: #ff9045;
        }

        .stats-progress .stats:nth-child(4) .stats-fill {
            background-color: #b141a9;
        }

        .stats-progress .stats:nth-child(5) .stats-fill {
            background-color: #E83C37;
        }

        .stats-progress .stats:nth-child(6) .stats-fill {
            background-color: #2e7c98;
        }





.circle{
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  height: 200px;

  text-align: center;
  border: 1px solid white;
  color: white;
  z-index: 2;
}
.fill {
    position:absolute;
    bottom:0; left:0;
    width:98%;
    background: rgba(39, 174, 96 ,0.2);
    height: 20%;
    transition:height 600ms;
    z-index: 1;
    margin:2px;
}

.text {
  z-index: 3;
}
.circle:hover .fill{
    height: 40%;
}


  
 progress, progress[role] {
	 -webkit-appearance: none;
	 -moz-appearance: none;
	 appearance: none;
	 border: none;
   background-size: auto;
  

	 width: 100%;
}
 .skill-list {
	 list-style: none;
   margin: 0;
   padding:0;
	 
}
 .skill {
	 margin-bottom: 1em;
	 position: relative;
}
 .skill h6 {
	 color: #000;
	 left:  2px;
	 line-height: 1;
   position: absolute;
   font-size: 12px;
	 top: 3px;
}
 .skill ::-webkit-progress-value {
	 -webkit-animation: bar-fill 2s;
	 width: 0px;
}
 .skill-1::-webkit-progress-value {
	 background: rgba(34, 126, 201, 0.5);
}
 .skill-1::-moz-progress-bar {
	 background: rgba(34, 126, 201, 0.5);
}
 .skill-2::-webkit-progress-value {
	 background: #4ecdc4;
}
 .skill-2::-moz-progress-bar {
	 background: #4ecdc4;
}
 .skill-3::-webkit-progress-value {
	 background: #ff6b6b;
}
 .skill-3::-moz-progress-bar {
	 background: #ff6b6b;
}
 @-webkit-keyframes bar-fill {
	 0% {
		 width: 0;
	}
}
 @keyframes bar-fill {
	 0% {
		 width: 0;
	}
} 
  

</style>
