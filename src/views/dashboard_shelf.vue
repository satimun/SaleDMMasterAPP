<template>
  <div class="animated fadeIn">
    <div class="page-header">
      <b-row>
        <b-col lg="12">
          <div class="onPC">
            <span style="color: hsla(205, 25%, 50%, 0.95);">
              <h1>
                <i class="fa fa-desktop" aria-hidden="true" style="font-size:50px"></i> Dash Board
              </h1>
            </span>
            <span style="color: hsla(205, 25%, 50%, 0.95);">
              <h4>สถานะงานจัดเก็บสินค้าขึ้นชั้นวาง</h4>
            </span>
          </div>

          <div class="onPhone">
            <center>
              <span style="color: hsla(205, 25%, 50%, 0.95);">
                <h1>
                  <i class="fa fa-desktop" aria-hidden="true" style="font-size:50px"></i> Dash Board
                </h1>
              </span>
              <span style="color: hsla(205, 25%, 50%, 0.95);">
                <h4>สถานะงานจัดเก็บสินค้าขึ้นชั้นวาง</h4>
              </span>
            </center>
          </div>
        </b-col>
      </b-row>
    </div>

    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              แสดงจำนวน BC สินค้ารอจัดเก็บ ตามกิจกรรมงาน {{this.showdate_con()}}



              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize">
                  <i class="fa fa-search fa-sm" style="color:#c8ced3" v-b-modal.modal-multi-F1></i>
                  <b-modal
                    id="modal-multi-F1"
                    ref="modal"
                    size="lg"
                    title="เงื่อนไขการแสดงข้อมูล"
                    @ok="handleOk"
                    centered
                    no-close-on-backdrop
                    okVariant="success"
                    cancelVariant="danger"
                  >
                    <br />

                    <form ref="form" @submit.stop.prevent="handleSubmit">
                      <b-row>
                        <b-col sm="12">
                          <b-form-group
                            :state="stdate_value_temp"
                            label="วันที่"
                            label-for="stdate_value_temp"
                            invalid-feedback="Value is required"
                          >
                            <b-form-datepicker
                              id="stdate_value_temp"
                              v-model="stdate_value_temp"
                              class="mb-12"
                            ></b-form-datepicker>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </form>
                  </b-modal>
                </b-link>

                <b-link class="card-header-action btn-minimize" @click="QueryData">
                  <i class="fa fa-refresh fa-sm" style="color:#c8ced3"></i>
                </b-link>

                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1A>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1A" visible>
              <b-card-body class="DS2">
                <div class="box">
                  <!-- /.box-header -->

                  <div class="box-footer">
                    <div class="row">
                      <!-- <div class="col-6 col-sm-2"> -->

                      <b-col lg="6" xl="3" md="6" sm="6">
                        <div class="description-block border-right-ln">
                          <!-- <i class="fa fa-star" style="color:#F4D03F; " :style="{visibility:datawork1.col14string}" </i> -->

                          <!-- <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdsrecbcsum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdsrecbcsum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                          ></i>-->
                          <!-- 
                          <i
                            class="fa fa-file-text"
                            style="font-size:20px; color:#F1C40F"
                            aria-hidden="true"
                            :style="{color:cdsrecbcsum.col14string}"
                          ></i>&nbsp;
                          <i
                            class="fa fa-clock-o"
                            style="font-size:20px; color:#A93226"
                            aria-hidden="true"
                            :style="{color:cdsrecbcsum.col15string}"
                          ></i>-->

                          <i
                            class="fa fa-male"
                            style="font-size:20px; color:#2E86C1;"
                            aria-hidden="true"
                          ></i>
                          &nbsp;
                          <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                          ></i>

                          <div class="drag">
                            <i
                              class="fa fa-file-text"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdsrecbcsum.col14string}"
                            ></i>&nbsp;
                            <i
                              class="fa fa-clock-o"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdsrecbcsum.col15string}"
                            ></i>
                          </div>

                          <!-- &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdsrecbcsum.col5string}} -->

                          <br />
                          <h2 class="description-header">
                            {{cdsrecbcsum.col9float|number(0)}}
                            <small
                              style="font-size:15px;"
                            >บาร์โค๊ด</small>
                          </h2>
                          <b-link @click="cdsrecbcshow()">
                            <span
                              class="description-text"
                              style="color:#D0D3D4;"
                            >1.รับเข้าจากฝ่ายผลิตและคลังต่างประเทศ</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>

                      <!-- /.col -->
                      <b-col lg="6" xl="3" md="6" sm="6">
                        <div class="description-block border-right-ln">
                          <!-- <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdsrecshelfbcsum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdsrecshelfbcsum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdsrecshelfbcsum.col5string}}
                          </span>-->

                          <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                          ></i>

                          <div class="drag">
                            <i
                              class="fa fa-file-text"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdsrecshelfbcsum.col14string}"
                            ></i>&nbsp;
                            <i
                              class="fa fa-clock-o"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdsrecshelfbcsum.col15string}"
                            ></i>
                          </div>

                          <!--                         
                          <i
                            class="fa fa-file-text"
                            style="font-size:20px; color:#F1C40F"
                            aria-hidden="true"
                            :style="{color:cdsrecshelfbcsum.col14string}"
                          ></i>&nbsp;
                          <i
                            class="fa fa-clock-o"
                            style="font-size:20px; color:#A93226"
                            aria-hidden="true"
                            :style="{color:cdsrecshelfbcsum.col15string}"
                          ></i>-->

                          <h2 class="description-header">
                            {{cdsrecshelfbcsum.col9float|number(0)}}
                            <small
                              style="font-size:15px;"
                            >บาร์โค๊ด</small>
                          </h2>
                          <b-link @click="cdsrecshelfbcshow()">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >2.สินค้าเบิกลงมาแตกห่อ</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>
                      <!-- /.col -->
                      <b-col lg="6" xl="3" md="6" sm="6">
                        <div class="description-block border-right-ln">
                          <!-- <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdspay0sum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdspay0sum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdspay0sum.col5string}}
                          </span>-->

                          <!-- <i
                            class="fa fa-file-text"
                            style="font-size:20px; color:#F1C40F"
                            aria-hidden="true"
                            :style="{color:cdspay0sum.col14string}"
                          ></i>&nbsp;
                          <i
                            class="fa fa-clock-o"
                            style="font-size:20px; color:#A93226"
                            aria-hidden="true"
                            :style="{color:cdspay0sum.col15string}"
                          ></i>-->

                          <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                          ></i>

                          <div class="drag">
                            <i
                              class="fa fa-file-text"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay0sum.col14string}"
                            ></i>&nbsp;
                            <i
                              class="fa fa-clock-o"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay0sum.col15string}"
                            ></i>
                          </div>

                          <h2 class="description-header">
                            {{cdspay0sum.col9float|number(0)}}
                            <small
                              style="font-size:15px;"
                            >บาร์โค๊ด</small>
                          </h2>
                          <b-link @click="cdspay0sumshow()">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >3.สินค้าเบิกลงมารวมห่อ</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>
                      <!-- /.col -->
                      <b-col lg="6" xl="3" md="6" sm="6">
                        <div class="description-block border-right-ln">
                          <!-- <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdspay1sum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdspay1sum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdspay1sum.col5string}}
                          </span>-->

                          <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                          ></i>

                          <div class="drag">
                            <i
                              class="fa fa-file-text"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay1sum.col14string}"
                            ></i>&nbsp;
                            <i
                              class="fa fa-clock-o"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay1sum.col15string}"
                            ></i>
                          </div>

                          <h2 class="description-header">
                            {{cdspay1sum.col9float|number(0)}}
                            <small
                              style="font-size:15px;"
                            >บาร์โค๊ด</small>
                          </h2>
                          <b-link @click="cdspay1sumshow()">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >4.สินค้าที่ลงจากชั้นวาง(เบิกหมดและบางส่วน)</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>
                    </div>

                    <hr style="border-bottom: 1px solid rgba(93, 109, 126, 0.2);" />
                    <div class="row">
                      <b-col lg="6" xl="3" md="6" sm="6">
                        <div class="description-block border-right-ln">
                          <!-- <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdspayBsum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdspayBsum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdspayBsum.col5string}}
                          </span>-->

                          <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                          ></i>

                          <div class="drag">
                            <i
                              class="fa fa-file-text"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspayBsum.col14string}"
                            ></i>&nbsp;
                            <i
                              class="fa fa-clock-o"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspayBsum.col15string}"
                            ></i>
                          </div>

                          <h2 class="description-header">
                            {{cdspayBsum.col9float|number(0)}}
                            <small
                              style="font-size:15px;"
                            >บาร์โค๊ด</small>
                          </h2>
                          <b-link @click="cdspayBsumshow()">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >5.กระสอบที่ล้าง Pallet แล้วยังไม่จัดเก็บ</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>

                      <b-col lg="6" xl="3" md="6" sm="6">
                        <div class="description-block border-right-ln">
                          <!-- <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdspay5sum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdspay5sum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdspay5sum.col5string}}
                          </span>-->

                          <i
                            class="fa fa-male"
                            style="font-size:20px; color:#2E86C1;"
                            aria-hidden="true"
                          ></i>
                          &nbsp;
                          <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                          ></i>

                          <div class="drag">
                            <i
                              class="fa fa-file-text"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay5sum.col14string}"
                            ></i>&nbsp;
                            <i
                              class="fa fa-clock-o"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay5sum.col15string}"
                            ></i>
                          </div>

                          <h2 class="description-header">
                            {{cdspay5sum.col9float|number(0)}}
                            <small
                              style="font-size:15px;"
                            >บาร์โค๊ด</small>
                          </h2>
                          <b-link @click="cdspay5sumshow()">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >6.สินค้าที่เบิกขายแบบเข้าคลังฝาก</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>

                      <b-col lg="6" xl="3" md="6" sm="6">
                        <div class="description-block border-right-ln">
                          <i
                            class="fa fa-male"
                            style="font-size:20px; color:#2E86C1;"
                            aria-hidden="true"
                          ></i>
                          &nbsp;
                          <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                          ></i>

                          <div class="drag">
                            <i
                              class="fa fa-file-text"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay6sum.col14string}"
                            ></i>&nbsp;
                            <i
                              class="fa fa-clock-o"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay6sum.col15string}"
                            ></i>
                          </div>

                          <h2 class="description-header">
                            {{cdspay6sum.col9float|number(0)}}
                            <small
                              style="font-size:15px;"
                            >บาร์โค๊ด</small>
                          </h2>
                          <b-link @click="cdspay6sumshow()">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >7.สินค้ารับคืนจากลูกค้า</span>
                          </b-link>
                        </div>
                      </b-col>

                      <b-col lg="6" xl="3" md="6" sm="6">
                        <div class="description-block border-right-ln">
                          <i
                            class="fa fa-male"
                            style="font-size:20px; color:#2E86C1;"
                            aria-hidden="true"
                          ></i>
                          &nbsp;
                          <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                          ></i>

                          <div class="drag">
                            <i
                              class="fa fa-file-text"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay7sum.col14string}"
                            ></i>&nbsp;
                            <i
                              class="fa fa-clock-o"
                              style="font-size:20px; color:rgba(93, 109, 126,0.6)"
                              aria-hidden="true"
                              :style="{color:cdspay7sum.col15string}"
                            ></i>
                          </div>

                          <h2 class="description-header">
                            {{cdspay7sum.col9float|number(0)}}
                            <small
                              style="font-size:15px;"
                            >บาร์โค๊ด</small>
                          </h2>
                          <b-link @click="cdspay7sumshow()">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >8.สินค้าจากการยกเลิกการเบิกสินค้า</span>
                          </b-link>
                        </div>
                      </b-col>
                    </div>
                    <!-- /.row -->
                    <!-- <div class="row">
                        <b-col lg="6" xl="3" md="6" sm="6">
                     <hr style="border-bottom: 1px solid rgba(93, 109, 126, 0.2);" />
                      <i
                            class="fa fa-male"
                            style="font-size:20px; color:#2E86C1;"
                            aria-hidden="true"
                         
                          ></i>&nbsp;= คลังพื้น (K)
                           &nbsp;&nbsp;
                           <i
                            class="fa fa-android"
                            style="font-size:20px; color:#17A589;"
                            aria-hidden="true"
                         
                          ></i>&nbsp; = คลังอัตโนมัติ (W)


                         </b-col>
                    </div>-->
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
      <b-col xl="4" lg="12" md="12" sm="12">
        <transition name="fade">
          <b-card no-body>
            <div slot="header">
              จำนวนสินค้าคงคลังแยกตามสถานะ รอจัดเก็บและจัดเก็บแล้ว
              <span
                style="color:#D4AC0D"
              >(จำนวนบาร์โค๊ด)</span>
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse0A>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse0A" visible>
              <b-card-body class="DS001">
                <div class="card-graph">
                  <center>
                    <canvas id="graph11" width="420px" height="200px"></canvas>
                  </center>
                </div>

                <i class="fa fa-square" style="color: rgba(36, 113, 163 ,0.5 )"></i>
                จัดเก็บบนชั้นวาง : {{this.inshelfQty|number(0)}} บาร์โค๊ด &nbsp;&nbsp;
                <i
                  class="fa fa-square"
                  style="color:rgba(144, 148, 151   , 0.5)"
                ></i>
                รอจัดเก็บ : {{this.ninshelfQty|number(0)}} บาร์โค๊ด
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>

      <b-col xl="4" lg="12" md="12" sm="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              แสดงปริมาณสินค้าที่รอจัดเก็บแยกตามประเภทชั้นวาง
              <span
                style="color:#D4AC0D"
              >(จำนวนบาร์โค๊ด)</span>
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse0A>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse0A" visible>
              <b-card-body class="DS001">
                <div class="card-graph">
                  <center>
                    <canvas id="graph22" width="420px" height="200px"></canvas>
                  </center>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
      <b-col xl="4" lg="12" md="12" sm="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              แสดงปริมาณสินค้าที่รอจัดเก็บตามสถานะสินค้า
              <span style="color:#D4AC0D">(จำนวนบาร์โค๊ด)</span>
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse0A>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse0A" visible>
              <b-card-body class="DS001">
                <b-row>
                  <b-col lg="6" md="12" sm="12">
                    <center>
                      <i class="fa fa-cubes fa-5x" style="color:#2874A6"></i>
                      <br />
                      <span>กระสอบ</span>
                      <br />
                      <b-row
                        style="border: 1px solid rgba(93, 109, 126, 0.2); margin-left:3px;margin-right:3px;"
                      >
                        <b-col cols="12">
                          <h1>{{this.KpackQty+this.WpackQty|number(0)}}</h1>
                        </b-col>
                      </b-row>

                      <b-row
                        style="border: 1px solid rgba(93, 109, 126, 0.2); margin-left:3px;margin-right:3px;"
                      >
                        <b-col
                          cols="6"
                          style="border: 1px solid rgba(93, 109, 126, 0.2); border-top: 0px solid; padding:2px;"
                        >
                          <center>
                            <h5>K</h5>
                            <br />
                            <h3>{{this.KpackQty|number(0)}}</h3>
                          </center>
                        </b-col>
                        <b-col
                          cols="6"
                          style="border: 1px solid rgba(93, 109, 126, 0.2); border-top: 0px solid; padding:2px;"
                        >
                          <center>
                            <h5>W</h5>
                            <br />
                            <h3>{{this.WpackQty|number(0)}}</h3>
                          </center>
                        </b-col>
                      </b-row>
                    </center>
                  </b-col>

                  <b-col lg="6" md="12" sm="12">
                    <center>
                      <i class="fa fa-dropbox fa-5x" style="color:#B7950B"></i>
                      <br />
                      <span>เศษ</span>
                      <br />

                      <b-row
                        style="border: 1px solid rgba(93, 109, 126, 0.2);  margin-left:3px;margin-right:3px;"
                      >
                        <b-col cols="12">
                          <h1>{{this.KpieceQty+this.WpieceQty|number(0)}}</h1>
                        </b-col>
                      </b-row>
                      <b-row
                        style="border: 1px solid rgba(93, 109, 126, 0.2); margin-left:3px;margin-right:3px;"
                      >
                        <b-col
                          cols="6"
                          style="border: 1px solid rgba(93, 109, 126, 0.2); border-top: 0px solid; padding:2px;"
                        >
                          <center>
                            <h5>K</h5>
                            <br />
                            <h3>{{this.KpieceQty|number(0)}}</h3>
                          </center>
                        </b-col>
                        <b-col
                          cols="6"
                          style="border: 1px solid rgba(93, 109, 126, 0.2); border-top: 0px solid; padding:2px;"
                        >
                          <center>
                            <h5>W</h5>
                            <br />
                         <h3>{{this.WpieceQty|number(0)}}</h3>
                          </center>
                        </b-col>
                      </b-row>
                    </center>
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
            <div slot="header">
              table : แสดงจำนวน BC และปริมาณสินค้ารอจัดเก็บ ตามกิจกรรมงาน
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3A>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse3A" visible>
              <b-card-body>
                <b-row>
                  <div class="col-12 col-sm-6">
                    <gridv2
                      ref="gridDrawing3"
                      :o_showtitle="true"
                      :fields="fieldNShelf"
                      :name="name"
                      :btnGrid="true"
                      :btnAdd="false"
                      :btnClone="false"
                      :btnView="false"
                      :btnEdit="false"
                      :btnDelete="false"
                      :o_col_checkbox="false"
                      :trackBy="'col2string'"
                      :data="cdsex"
                      :o_navfooter_visible="false"
                      :o_nav_visible="false"
                      :o_grid_responsive="true"
                    ></gridv2>
                  </div>

                  <div class="col-12 col-sm-6">
                    <b-card no-body v-if="show">
                      <div slot="header">
                        graph : % สัดส่วนปริมาณงานที่ "รอดำเนินการ" ในแต่ละกระบวนการ
                        <div class="card-header-actions"></div>
                      </div>
                      <b-collapse id="collapse2A" visible>
                        <b-card-body>
                          <canvas id="graph33" width="180" height="240"></canvas>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </b-row>
                <br />
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>

    <b-modal
      id="modal-multi-data"
      ref="modal"
      title="Table : แสดงข้อมูล"
      centered
      no-close-on-backdrop
      okVariant="success"
      ok-only
      size="xl"
    >
      <span style="color:#D4AC0D">{{titledetail}}</span>
      <gridv2
        ref="gridDrawingAll"
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
        :o_nav_visible="false"
      ></gridv2>

      <template v-slot:modal-footer="{ ok }">
        <b-button size="xl" variant="success" @click="ok()">ปิดหน้าจอ</b-button>
      </template>
    </b-modal>
  </div>
</template>


<script>
import Vue from "vue";
import Chart from "chart.js";
import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";

import AnimatedNumber from "animated-number-vue";



import { API } from "@/shared/core";
import {
  GetDateView,
  AlertMessage,
  ObjCopy,
  ObjResetValue,
  GetLastUpdate,
  GetDateTimeFormat,
  ObjArrSort
} from "@/shared/utils";
import { status, configMode } from "@/shared/define";
import { required, minLength } from "vuelidate/lib/validators";
import dic from "@/shared/dic";

import { aggregationTypes } from "@/shared/define";
import "webrtc-adapter";
var myChart1 = null;
var myChart2 = null;
var myChart3 = null;
var myChart4 = null;


export default {
  name: "forms",

  mounted() {

    this.FSidebarToggler = false;

    myChart1 = null;
    myChart2 = null;
    myChart3 = null;
    myChart4 = null;



    this.stdate_value = new Date();
    this.stdate_value_temp = new Date();



    this.QueryData();






  },









  data() {
    return {
      selected: [], // Must be an array reference!
      show: true,
      name: "tpaysH",
      icon_visible: true,
      file_visible: false,
      duration: 1000,

      fieldData: [],
      dataDrawing: [],

      inshelfQty: 0,
      ninshelfQty: 0,

      iconcar6: false,
      iconcar12: false,
      iconcar18: false,
      iconcar24: false,
      iconcar30: false,
      iconcar36: false,
      iconcar42: false,


      KQty : 0 ,
      WQty : 0 , 
      KpackQty:  0,
      KpieceQty: 0,
      WpackQty:  0,
      WpieceQty: 0,




      stdate_value: null,

      stdate_value_temp: null,

      titledetail: "",

      totalpaycode: 0.00,

      dataDS1: [],

      arrcdsWip: {},

      datawork1: {},
      setwork1: [],
      datawork2: {},
      setwork2: [],

      datawork3: {},
      setwork3: [],

      datawork4: {},
      setwork4: [],

      datawork5: {},
      setwork5: [],

      datawork6: {},
      setwork6: [],

      dataDashboardobj: {},

      cdsrecshelfbc: [],
      cdsrecshelfbcsum: {},
      setcdsrecshelfbcsum: [],

      cdsrecbc: [],
      cdsrecbcsum: {},
      setcdsrecbcsum: [],


      cdsWip: [],



      cdspay0: [],
      cdspay0sum: {},
      setcdspay0sum: [],

      cdspay1: [],
      cdspay1sum: {},
      setcdspay1sum: [],

      cdspayB: [],
      cdspayBsum: {},
      setcdspayBsum: [],

      cdspay5: [],
      cdspay5sum: {},
      setcdspay5sum: [],


      cdspay6: [],
      cdspay6sum: {},
      setcdspay6sum: [],

      cdspay7: [],
      cdspay7sum: {},
      setcdspay7sum: [],


      cdsex: [],

      cdsexsumrec: {},
      cdsexsumpay: {},
      cdsexsumkou: {},

      setcdsexsumrec: [],
      setcdsexsumpay: [],
      setcdsexsumkou: [],


      cdspayall: [],
      cdspayallsum: {},
      setcdspayallsum: [],

      cdssendcodeex: [],

      cdssendcode: [],
      cdssendcodesum: {},
      setcdssendcodesum: [],


      cdssendcode01: [],
      cdssendcode01sum: {},
      setcdssendcode01sum: [],


      cdssendcode97: [],
      cdssendcode97sum: {},
      setcdssendcode97sum: [],

      cdssendcodePC: [],
      cdssendcodePCsum: {},
      setcdssendcodePCsum: [],



      cdssendcode2: [],
      cdssendcodesum2: {},
      setcdssendcodesum2: [],



      setGraph1: [],
      cdsGraph1: [],


      setGraph2: [],
      cdsGraph2: [],

      fieldNShelf: [

        {
          name: "col3string",
          title: "สถานะ",
          sortField: "col3string",
          class: "text-center",
          visible: true,

          callback: v => {


            if (v == "fa fa-star") {

              return " <i class='" + v + "' aria-hidden='true' style='color:#F1C40F'></i>";

            }
            else {


              return "<i class='" + v + "' aria-hidden='true' style='color:#CD6155' ></i>";



            }





          }
        },

        {
          name: "col1string",
          title: "ลำดับ",
          sortField: "col1string",
          class: "text-left",
          visible: true,
          footer: { type: null, value: 'รวม' },
        },

        {
          name: "col2string",
          title: "กิจกรรมงาน",
          sortField: "col2string",
          class: "text-left",
          visible: true,
        },

        {
          name: "col3float",
          title: "ภายในวัน",
          sortField: "col3float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
            } else {
              '<span></span> '
            }
          }

        },
        {
          name: "col6float",
          title: "ย้อนหลัง",
          sortField: "col6float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
            } else {
              '<span></span> '
            }
          }

        },
        {
          name: "col9float",
          title: "ทั้งหมด",
          sortField: "col9float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
            } else {
              '<span></span> '
            }
          }

        },

      ],


      fieldData: [
        {
          name: "col1string",
          title: "รหัส",
          sortField: "col1string",
          class: "text-left",
          visible: true,

        },

        {
          name: "col2string",
          title: "รายละเอียด",
          sortField: "col2string",
          class: "text-left",
          width: 100,
          visible: true,
          footer: { type: null, value: 'รวม' },

        },


        {
          name: "col5float",
          title: "ทั้งหมด",
          sortField: "col5float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }

        },

        {
          name: "col8float",
          title: "ดำเนินการแล้ว",
          sortField: "col8float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },

          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }

        },

        {
          name: "col11float",
          title: "รอดำเนินการ",
          sortField: "col11float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },

          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }

        },
        {
          name: "col5string",
          title: "ดำเนินการล่าสุด",
          sortField: "col5string",
          class: "text-center",
          visible: true,

          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }


        },


        {
          name: "col1float",
          title: "ความคืบหน้า",
          sortField: "col1float",
          class: "text-center",
          visible: true,



          callback: v => {
            if (this.$root.$options.filters.number(v, 2) <= 0.0) {
              return (
                ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                this.$root.$options.filters.number(v, 2) +
                '</span>  <div class="status-fill-good" style="width:' +
                this.$root.$options.filters.number(v, 2) +
                '%"></div>  </div> </div>  </div> '
              );
            } else {
              if (this.$root.$options.filters.number(v, 2) >= 100) {
                return (
                  ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                  this.$root.$options.filters.number(v, 2) +
                  '</span>  <div class="status-fill-good" style="width:' +
                  this.$root.$options.filters.number(v, 2) +
                  '%"></div>  </div> </div>  </div> '
                );
              } else {
                if (this.$root.$options.filters.number(v, 2) <= 70) {
                  if (this.$root.$options.filters.number(v, 2) <= 40) {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  } else {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad2good" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  }
                } else {
                  return (
                    ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                    this.$root.$options.filters.number(v, 2) +
                    '</span>  <div class="status-fill" style="width: ' +
                    this.$root.$options.filters.number(v, 2) +
                    '%"></div>  </div> </div>  </div> '
                  );
                }
              }
            }
          }
        }
      ],




      fieldPaynoamt: [
        {
          name: "col1string",
          title: "รหัส",
          sortField: "col1string",
          class: "text-left",
          visible: true,



          // callback: v => {
          //   return "&nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp;  " + v;
          // }
        },

        {
          name: "col2string",
          title: "รายละเอียด",
          sortField: "col2string",
          class: "text-left",
          width: 100,
          visible: true,
          footer: { type: null, value: 'รวม' },

        },


        {
          name: "col3float",
          title: "ทั้งหมด",
          sortField: "col3float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col6float",
          title: "ดำเนินการแล้ว",
          sortField: "col6float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col9float",
          title: "รอดำเนินการ",
          sortField: "col9float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },
        {
          name: "col5string",
          title: "ดำเนินการล่าสุด",
          sortField: "col5string",
          class: "text-center",
          visible: true,


        },


        {
          name: "col1float",
          title: "ความคืบหน้า",
          sortField: "col1float",
          class: "text-center",
          visible: true,



          callback: v => {
            if (this.$root.$options.filters.number(v, 2) <= 0.0) {
              return (
                ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                this.$root.$options.filters.number(v, 2) +
                '</span>  <div class="status-fill-good" style="width:' +
                this.$root.$options.filters.number(v, 2) +
                '%"></div>  </div> </div>  </div> '
              );
            } else {
              if (this.$root.$options.filters.number(v, 2) >= 100) {
                return (
                  ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                  this.$root.$options.filters.number(v, 2) +
                  '</span>  <div class="status-fill-good" style="width:' +
                  this.$root.$options.filters.number(v, 2) +
                  '%"></div>  </div> </div>  </div> '
                );
              } else {
                if (this.$root.$options.filters.number(v, 2) <= 70) {
                  if (this.$root.$options.filters.number(v, 2) <= 40) {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  } else {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad2good" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  }
                } else {
                  return (
                    ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                    this.$root.$options.filters.number(v, 2) +
                    '</span>  <div class="status-fill" style="width: ' +
                    this.$root.$options.filters.number(v, 2) +
                    '%"></div>  </div> </div>  </div> '
                  );
                }
              }
            }
          }
        }
      ],








      fieldwip: [


        {
          name: "col1string",
          title: "รหัส",
          sortField: "col1string",
          class: "text-left",
          visible: true,

          footer: { type: null, value: 'รวม' },



        },





        {
          name: "col2string",
          title: "รายละเอียดเพิ่มเติม",
          sortField: "col2string",
          class: "text-left",
          visible: true,




          //   callback: v => {

          //     if (v == 'รวม') {
          //       return v;

          //     } else {
          //       return "&nbsp;&nbsp; <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp; " + v;

          //     }

          //   }


        },



        {
          name: "col5float",
          title: "ทั้งหมด",
          sortField: "col5float",
          class: "text-center",
          visible: true,

          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col8float",
          title: "ดำเนินการแล้ว",
          sortField: "col8float",
          class: "text-center",
          visible: true,


          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col11float",
          title: "รอดำเนินการ",
          sortField: "col11float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },


          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },
        {
          name: "col5string",
          title: "ดำเนินการล่าสุด",
          sortField: "col5string",
          class: "text-center",
          visible: true,


        },


        {
          name: "col1float",
          title: "ความคืบหน้า",
          sortField: "col1float",
          class: "text-center",
          visible: true,



          callback: v => {
            if (this.$root.$options.filters.number(v, 2) <= 0.0) {
              return (
                ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                this.$root.$options.filters.number(v, 2) +
                '</span>  <div class="status-fill-good" style="width:' +
                this.$root.$options.filters.number(v, 2) +
                '%"></div>  </div> </div>  </div> '
              );
            } else {
              if (this.$root.$options.filters.number(v, 2) >= 100) {
                return (
                  ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                  this.$root.$options.filters.number(v, 2) +
                  '</span>  <div class="status-fill-good" style="width:' +
                  this.$root.$options.filters.number(v, 2) +
                  '%"></div>  </div> </div>  </div> '
                );
              } else {
                if (this.$root.$options.filters.number(v, 2) <= 70) {
                  if (this.$root.$options.filters.number(v, 2) <= 40) {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  } else {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad2good" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  }
                } else {
                  return (
                    ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                    this.$root.$options.filters.number(v, 2) +
                    '</span>  <div class="status-fill" style="width: ' +
                    this.$root.$options.filters.number(v, 2) +
                    '%"></div>  </div> </div>  </div> '
                  );
                }
              }
            }
          }
        }
      ],


      fieldrecbc: [
        {
          name: "col1string",
          title: "รหัส",
          sortField: "col1string",
          class: "text-center",
          visible: true,
        },

        {
          name: "col6string",
          title: "color",
          sortField: "col6string",
          class: "text-center",
          visible: false,

        },

        {
          name: "col2string",
          title: "รายละเอียด",
          sortField: "col2string",
          class: "text-left",
          width: 100,
          visible: true,
          footer: { type: null, value: 'รวม' },

        },


        {
          name: "col5float",
          title: "ทั้งหมด",
          sortField: "col5float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col8float",
          title: "ดำเนินการแล้ว",
          sortField: "col8float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col11float",
          title: "รอดำเนินการ",
          sortField: "col11float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },
        {
          name: "col5string",
          title: "ดำเนินการล่าสุด",
          sortField: "col5string",
          class: "text-center",
          visible: true,


        },


        {
          name: "col1float",
          title: "ความคืบหน้า",
          sortField: "col1float",
          class: "text-center",
          visible: true,



          callback: v => {
            if (this.$root.$options.filters.number(v, 2) <= 0.0) {
              return (
                ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                this.$root.$options.filters.number(v, 2) +
                '</span>  <div class="status-fill-good" style="width:' +
                this.$root.$options.filters.number(v, 2) +
                '%"></div>  </div> </div>  </div> '
              );
            } else {
              if (this.$root.$options.filters.number(v, 2) >= 100) {
                return (
                  ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                  this.$root.$options.filters.number(v, 2) +
                  '</span>  <div class="status-fill-good" style="width:' +
                  this.$root.$options.filters.number(v, 2) +
                  '%"></div>  </div> </div>  </div> '
                );
              } else {
                if (this.$root.$options.filters.number(v, 2) <= 70) {
                  if (this.$root.$options.filters.number(v, 2) <= 40) {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  } else {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad2good" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  }
                } else {
                  return (
                    ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                    this.$root.$options.filters.number(v, 2) +
                    '</span>  <div class="status-fill" style="width: ' +
                    this.$root.$options.filters.number(v, 2) +
                    '%"></div>  </div> </div>  </div> '
                  );
                }
              }
            }
          }
        }
      ],




      fieldgrid1: [
        {
          name: "col1string",
          title: "รหัส",
          sortField: "col1string",
          class: "text-left",
          visible: true,



          // callback: v => {



          //   return "&nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp;  " + v;




          // }
        },

        {
          name: "col2string",
          title: "รายละเอียด",
          sortField: "col2string",
          class: "text-left",
          width: 100,
          visible: true,
          footer: { type: null, value: 'รวม' },

        },


        {
          name: "col5float",
          title: "ทั้งหมด",
          sortField: "col5float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col8float",
          title: "ดำเนินการแล้ว",
          sortField: "col8float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col11float",
          title: "รอดำเนินการ",
          sortField: "col11float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 2) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },
        {
          name: "col5string",
          title: "ดำเนินการล่าสุด",
          sortField: "col5string",
          class: "text-center",
          visible: true,


        },


        {
          name: "col1float",
          title: "ความคืบหน้า",
          sortField: "col1float",
          class: "text-center",
          visible: true,



          callback: v => {
            if (this.$root.$options.filters.number(v, 2) <= 0.0) {
              return (
                ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                this.$root.$options.filters.number(v, 2) +
                '</span>  <div class="status-fill-good" style="width:' +
                this.$root.$options.filters.number(v, 2) +
                '%"></div>  </div> </div>  </div> '
              );
            } else {
              if (this.$root.$options.filters.number(v, 2) >= 100) {
                return (
                  ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                  this.$root.$options.filters.number(v, 2) +
                  '</span>  <div class="status-fill-good" style="width:' +
                  this.$root.$options.filters.number(v, 2) +
                  '%"></div>  </div> </div>  </div> '
                );
              } else {
                if (this.$root.$options.filters.number(v, 2) <= 70) {
                  if (this.$root.$options.filters.number(v, 2) <= 40) {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  } else {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad2good" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  }
                } else {
                  return (
                    ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                    this.$root.$options.filters.number(v, 2) +
                    '</span>  <div class="status-fill" style="width: ' +
                    this.$root.$options.filters.number(v, 2) +
                    '%"></div>  </div> </div>  </div> '
                  );
                }
              }
            }
          }
        }
      ],



      dataDrawingTask: [],


      fieldDataTask: [
        {
          name: "codedesc",
          title: "ประเภทใบเบิก",
          sortField: "codedesc",
          class: "text-left",
          width: 100,
          visible: true,

          footer: { type: null, value: 'รวม' },

          callback: v => {

            if (v == "1.ลูกค้ามารับเอง") {
              return " &nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true' style='color:#5b9bd5;'></i> &nbsp;&nbsp;  " + v;
            }
            else if (v == "2.ส่งเอง") {
              return " &nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true' style='color:#a5a5a5'></i> &nbsp;&nbsp;  " + v;
            }

            else if (v == "3.รถ บขส.") {
              return " &nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true' style='color:#4472c4'></i> &nbsp;&nbsp;  " + v;
            }

            else if (v == "4.คลังฝาก") {
              return " &nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true' style='color:#636363'></i> &nbsp;&nbsp;  " + v;
            }

            else if (v == "5.รถบริษัทขนส่ง") {
              return " &nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true' style='color:#255e91 '></i> &nbsp;&nbsp;  " + v;
            }

            else if (v == "6.ออนไล์") {
              return " &nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true' style='color:#76448A '></i> &nbsp;&nbsp;  " + v;
            }



            else if (v == "รวม") {
              return v;
            }

            else {
              return v;

            }
          }
        },
        {
          name: "plan_amt",
          title: "ทั้งหมด",
          sortField: "plan_amt",
          class: "text-center",
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          visible: true
        },

        {
          name: "action_amt",
          title: "ดำเนินการแล้ว",
          sortField: "action_amt",
          class: "text-center",
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          visible: true
        },

        {
          name: "wip_amt",
          title: "รอดำเนินการ",
          sortField: "wip_amt",
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          class: "text-center",
          visible: true
        },
        {
          name: "last_date",
          title: "ดำเนินการล่าสุด",
          sortField: "last_date",
          class: "text-center",
          visible: true
        },
        {
          name: "complete",
          title: "ความคืบหน้า",
          sortField: "complete",
          class: "text-center",
          visible: true,

          callback: v => {
            if (this.$root.$options.filters.number(v, 2) <= 0.0) {
              return (
                ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                this.$root.$options.filters.number(v, 2) +
                '</span>  <div class="status-fill-good" style="width:' +
                this.$root.$options.filters.number(v, 2) +
                '%"></div>  </div> </div>  </div> '
              );
            } else {
              if (this.$root.$options.filters.number(v, 2) >= 90) {
                return (
                  ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text"> ' +
                  this.$root.$options.filters.number(v, 2) +
                  '</span>  <div class="status-fill-good" style="width:' +
                  this.$root.$options.filters.number(v, 2) +
                  '%"></div>  </div> </div>  </div> '
                );
              } else {
                if (this.$root.$options.filters.number(v, 2) <= 70) {
                  if (this.$root.$options.filters.number(v, 2) <= 40) {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  } else {
                    return (
                      ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                      this.$root.$options.filters.number(v, 2) +
                      '</span>  <div class="status-fill-bad2good" style="width:' +
                      this.$root.$options.filters.number(v, 2) +
                      '%"></div>  </div> </div>  </div> '
                    );
                  }
                } else {
                  return (
                    ' <div class="task-status"><div class="status-bar"><div class="status-track">   <span class="status-text">' +
                    this.$root.$options.filters.number(v, 2) +
                    '</span>  <div class="status-fill" style="width: ' +
                    this.$root.$options.filters.number(v, 2) +
                    '%"></div>  </div> </div>  </div> '
                  );
                }
              }
            }
          }
        }
      ],


      fieldDataWip: [


        {
          name: "col1string",
          title: "คลัง",
          sortField: "col1string",
          class: "text-left",
          width: 50,
          visible: true,




          footer: { type: null, value: 'รวม' },


        },



        {
          name: "col2string",
          title: "รายละเอียด",
          sortField: "col2string",
          class: "text-left",
          width: 100,
          visible: true,

          // callback: v => {

          //   // if (v == "รวม") {
          //   //   return v;
          //   // } else {
          //   //   return " &nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true' style='color:#5b9bd5;'></i> &nbsp;&nbsp;  " + v;
          //   // }


          // },




        },
        {
          name: "col9float",
          title: "จำนวนบาร์โค๊ด",
          sortField: "col9float",
          class: "text-center",
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          visible: true
        },

        {
          name: "col10float",
          title: "จำนวนผืน/ชิ้น",
          sortField: "col10float",
          class: "text-center",
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          visible: true
        },

        {
          name: "col11float",
          title: "นน.สุทธิ (กก.)",
          sortField: "col11float",
          footer: { type: aggregationTypes.sum, value: 0, decimal: 2 },
          class: "text-center",
          visible: true
        }

      ],








    };
  },
  methods: {


    formatTofloat(value) {
      return ` ${Number(value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    },
    formatToint(value) {
      // return  ` ${Number(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

      return ` ${Number(value).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;


    },


    increase() {
      this.value = Number(this.value) + 500;
    },
    decrease() {
      this.value = Number(this.value) - 500;
    },




    columnSort: function (sortBy, sortOrder, item) {
      var elem = document.getElementById(item);

      this.sortBy = sortBy;
      this.sortOrder = sortOrder;

      var elems = document.querySelectorAll("th");
      [].forEach.call(elems, function (el) {
        el.classList.remove("descending");
        el.classList.remove("ascending");
      });
      if (this.sortOrder == 'desc') {
        elem.className = 'descending';
      } else {
        elem.className = 'ascending';
      }
    },

    click() {
      // do nothing
    },



    showgraph1() {

      this.setGraph1 = [];
      this.cdsGraph1 = [];
      this.num1 = [];

      API.SearchDatagrid({
        data: {
          CODE: "INSTK", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {

          this.setGraph1 = [];
          this.cdsGraph1 = [];
          this.num1 = [];


          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {

              this.setGraph1.push(d);
              this.cdsGraph1 = this.setGraph1[0];

              this.num1 = [];


              var num2 = 0.00;
              var num3 = 0.00;
              var num4 = 0.00;

              num2 = ((parseFloat(this.cdsGraph1.col9float) - (parseFloat(this.cdsrecbcsum.col9float) + parseFloat(this.cdsrecshelfbcsum.col9float)
                + parseFloat(this.cdspay0sum.col9float) + parseFloat(this.cdspay1sum.col9float) + parseFloat(this.cdspayBsum.col9float)
                + parseFloat(this.cdspay5sum.col9float) + parseFloat(this.cdspay6sum.col9float) + parseFloat(this.cdspay7sum.col9float))) / parseFloat(this.cdsGraph1.col9float)) * 100;


              this.inshelfQty = parseFloat(this.cdsGraph1.col9float) - (parseFloat(this.cdsrecbcsum.col9float) + parseFloat(this.cdsrecshelfbcsum.col9float)
                + parseFloat(this.cdspay0sum.col9float) + parseFloat(this.cdspay1sum.col9float) + parseFloat(this.cdspayBsum.col9float)
                + parseFloat(this.cdspay5sum.col9float) + parseFloat(this.cdspay6sum.col9float) + parseFloat(this.cdspay7sum.col9float));


              this.num1.push(num2.toFixed(2));

              num2 = ((parseFloat(this.cdsrecbcsum.col9float) + parseFloat(this.cdsrecshelfbcsum.col9float)
                + parseFloat(this.cdspay0sum.col9float) + parseFloat(this.cdspay1sum.col9float) + parseFloat(this.cdspayBsum.col9float)
                + parseFloat(this.cdspay5sum.col9float) + parseFloat(this.cdspay6sum.col9float) + parseFloat(this.cdspay7sum.col9float)) / parseFloat(this.cdsGraph1.col9float)) * 100;


              this.num1.push(num2.toFixed(2));

              this.ninshelfQty = (parseFloat(this.cdsrecbcsum.col9float) + parseFloat(this.cdsrecshelfbcsum.col9float)
                + parseFloat(this.cdspay0sum.col9float) + parseFloat(this.cdspay1sum.col9float) + parseFloat(this.cdspayBsum.col9float)
                + parseFloat(this.cdspay5sum.col9float) + parseFloat(this.cdspay6sum.col9float) + parseFloat(this.cdspay7sum.col9float));



            };

          });




          var data1 = {
            labels: ['จัดเก็บบนชั้นวาง', 'รอจัดเก็บ'],
            datasets: [

              {
                backgroundColor: ['rgba(36, 113, 163 ,0.5 )', 'rgba(144, 148, 151   , 0.5)'],
                borderColor: ['rgba(36, 113, 163 ,0.5 )', 'rgba(144, 148, 151  , 0.5)'],
                borderWidth: 1,

                data: this.num1
              }
            ]
          };

          var option1 = {

            responsive: true,
            maintainAspectRatio: false,
            tooltips: { enabled: true },


            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            },



            plugins: {

              datalabels: {

                display: function (context) {
                  return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
                },

                position: 'outside',

                formatter: Math.round,
                font: {
                  weight: 'bold',
                  size: 10
                },

                color: function (context) {

                  return context.hovered ? "blue" : "gray";
                },

                backgroundColor: function (context) {
                  return context.dataset.backgroundColor;
                },
                borderRadius: 4,
                clip: true,
                color: 'white',
                font: {
                  weight: 'bold'
                },
                formatter: function (value) {
                  return value.y;
                }

              }
            }



          };


          if (myChart1 !== null) {

            myChart1.data = data1;
            myChart1.update();
          } else {

            var ctx1 = document.getElementById("graph11").getContext("2d");
            myChart1 = new Chart(ctx1, {
              type: 'pie',
              data: data1,
              options: option1
            });

          }
        }

      });


      if (this.ninshelfQty >= 0 ) {



      this.labelGraph2= [];
      this.bgGraph2 = [];
      this.dataGraph2 = [];

      API.SearchDatagrid({
        data: {
          CODE: "PROCESSNSHELF_KW", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },



        callblack: res => {
          

          this.labelGraph2 = [];
          this.bgGraph2 = [];
          this.dataGraph2 = [];

          res.forEach((d, i) => {


            this.KQty  = parseFloat(res[i].col9float); 
            this.dataGraph2.push(res[i].col9float);
            this.labelGraph2.push(res[i].col1string);

                this.ShowTableGK();

             this.WQty  = parseFloat(this.ninshelfQty-res[i].col9float);  
            this.dataGraph2.push( this.ninshelfQty-res[i].col9float);
            this.labelGraph2.push('W');

             this.ShowTableGW();

         

           



          });



          var data2 = {
            labels: this.labelGraph2,
            datasets: [
              {
              //backgroundColor: this.bgGraph3,

                backgroundColor: ['RGBA(40, 116, 166  ,1)', 'RGBA(20, 143, 119 ,1)'],


                //borderColor: ['rgba(192, 57, 43, 0.5)', 'rgba(212, 172, 13   , 0.5)', 'rgba(155, 89, 182 , 0.5)', 'rgba(23, 165, 137 , 0.5)', 'rgba(41, 128, 185  , 0.5)'],
                borderWidth: 0,
                data: this.dataGraph2,
                // data: this.dataDrawingGraph3,
              }
            ]
          };







          var option2 = {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: { enabled: true },

            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 30,
                bottom: 0
              }
            },

            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            },

            scales: {
              yAxes: [
                {
                  display: true,
                  ticks: {
                    beginAtZero: true,

                  },
                  gridLines: {
                    display: false,

                  }

                }
              ],
              xAxes: [
                {


                  ticks: {
                    fontColor: '#fff',



                    callback: function (label, index, labels) {
                      if (/\s/.test(label)) {
                        return label.split(" ");
                      } else {
                        return label;
                      }

                    }



                  },



                }
              ]
            },
            plugins: {

              display: function (context) {
                return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...

              },


              datalabels: {
                display: true,


                align: 'top',

                formatter: Math.round,
                font: {
                  weight: 'bold',
                  size: 10
                },

                color: 'white',

                backgroundColor: "rgba(33, 47, 61 , 0.8)",
                borderColor: "#99A3A4", // Border color of Label
                borderRadius: 4,
                clip: true,


                font: {
                  weight: 'bold'
                },

                formatter: function (value) {
                  //return value.y;

                  let percentage = (value).toFixed(0);
                  return percentage;
                }

       

              }
            }



          };





          if (myChart2 !== null) {

            myChart2.data = data2;
            myChart2.update();
          } else {

            var ctx2 = document.getElementById("graph22").getContext("2d");
            myChart2 = new Chart(ctx2, {
              type: 'bar',
              data: data2,
              options: option2,

            });


          }









        }

      });


      }









    },


    ShowTableGK()
    {




 API.SearchDatagrid({
        data: {
          CODE: "PROCESSNSHELF_K_BCTYPE_PACK",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },

          callblack: res => {

          res.forEach((d, i) => {


          var setGraph4 = [];
          var cdsGraph4 = [];



              setGraph4.push(d);
              cdsGraph4 = setGraph4[0];

              this.KpackQty  =  parseFloat(cdsGraph4.col9float) ;

              this.KpieceQty =   parseFloat(this.KQty) - parseFloat(cdsGraph4.col9float);
          

          });


        }
      });






    },

    ShowTableGW()
    {




 API.SearchDatagrid({
        data: {
          CODE: "PROCESSNSHELF_W_BCTYPE_PACK",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },

          callblack: res => {

          res.forEach((d, i) => {


          var setGraph42 = [];
          var cdsGraph42 = [];



              setGraph42.push(d);
              cdsGraph42 = setGraph42[0];

              this.WpackQty  =  parseFloat(cdsGraph42.col9float) ;

              this.WpieceQty =   parseFloat(this.WQty) - parseFloat(cdsGraph42.col9float);


          

          });


        }
      });






    },

  //  showgraph2() {

  //     this.setGraph2 = [];
  //     this.cdsGraph2 = [];
  //     var datanum    = [];

      
  //   },

    QueryData() {

      this.cdsrecbc = [];
      this.cdsrecbcsum = {};
      this.setcdsrecbcsum = [];

      this.cdsrecshelfbc = [];
      this.cdsrecshelfbcsum = {};
      this.setcdsrecshelfbcsum = [];

      this.myChart1 = null;
      this.myChart2 = null;


      API.SearchDatagrid({
        data: {
          CODE: "RECPRDNSHELF",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },

        callblack: res => {



          this.cdsrecbc = [];
          this.cdsrecbcsum = {};
          this.setcdsrecbcsum = [];

          let sumvalue = 0;


          res.forEach((d, i) => {

            this.sumvalue += res[i].col5float;
            if (res[i].col1string == "ZZ") {
              this.setcdsrecbcsum.push(d);
              this.cdsrecbcsum = this.setcdsrecbcsum[0];
              this.showgraph1();
            } else {
              this.cdsrecbc.push(d);
            }

          });


        }
      });


      API.SearchDatagrid({
        data: {

          CODE: "RECSPTSHELF",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },
        callblack: res => {



          this.cdsrecshelfbc = [];
          this.cdsrecshelfbcsum = {};
          this.setcdsrecshelfbcsum = [];
          res.forEach((d, i) => {



            if (res[i].col1string == "ZZ") {
              this.setcdsrecshelfbcsum.push(d);
              this.cdsrecshelfbcsum = this.setcdsrecshelfbcsum[0];

              this.showgraph1();
            } else {
              this.cdsrecshelfbc.push(d);
            }
          });
        }
      });





      this.cdspay0 = [];
      this.cdspay0sum = {};
      this.setcdspay0sum = [];


      API.SearchDatagrid({
        data: {
          CODE: "RECADDSHELF",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },
        callblack: res => {

          this.cdspay0 = [];
          this.cdspay0sum = {};
          this.setcdspay0sum = [];

          res.forEach((d, i) => {

            if (res[i].col1string == "ZZ") {
              this.setcdspay0sum.push(d);
              this.cdspay0sum = this.setcdspay0sum[0];


              this.showgraph1();
            } else {
              this.cdspay0.push(d);
            }
          });
        }
      });








      this.cdspay1 = [];
      this.cdspay1sum = {};
      this.setcdspay1sum = [];


      API.SearchDatagrid({
        data: {
          CODE: "PAYSOME",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },
        callblack: res => {


          this.cdspay1 = [];
          this.cdspay1sum = {};
          this.setcdspay1sum = [];
          res.forEach((d, i) => {

            if (res[i].col1string == "ZZ") {
              this.setcdspay1sum.push(d);
              this.cdspay1sum = this.setcdspay1sum[0];

              this.showgraph1();

            } else {
              this.cdspay1.push(d);
            }
          });
        }
      });




      this.cdspayB = [];
      this.cdspayBsum = {};
      this.setcdspayBsum = [];


      API.SearchDatagrid({
        data: {
          CODE: "CLEARPALLET", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {


          this.cdspayB = [];
          this.cdspayBsum = {};
          this.setcdspayBsum = [];



          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {
              this.setcdspayBsum.push(d);
              this.cdspayBsum = this.setcdspayBsum[0];

              this.showgraph1();



            } else {
              this.cdspayB.push(d);
            }
          });
        }

      });




      this.cdspay5 = [];
      this.cdspay5sum = {};
      this.setcdspay5sum = [];

      API.SearchDatagrid({
        data: {
          CODE: "RECSTKCUSNSHELF", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {


          this.cdspay5 = [];
          this.cdspay5sum = {};
          this.setcdspay5sum = [];


          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {


              this.setcdspay5sum.push(d);
              this.cdspay5sum = this.setcdspay5sum[0];


              this.showgraph1();





            } else {
              this.cdspay5.push(d);
            }
          });
        }

      });



      this.cdspay6 = [];
      this.cdspay6sum = {};
      this.setcdspay6sum = [];

      API.SearchDatagrid({
        data: {
          CODE: "RECRDCUSNSHELF", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {



          this.cdspay6 = [];
          this.cdspay6sum = {};
          this.setcdspay6sum = [];


          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {


              this.setcdspay6sum.push(d);
              this.cdspay6sum = this.setcdspay6sum[0];





            } else {
              this.cdspay6.push(d);
            }
          });
        }

      });



      this.cdspay7 = [];
      this.cdspay7sum = {};
      this.setcdspay7sum = [];

      API.SearchDatagrid({
        data: {
          CODE: "RECCANPAYNSHELF", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {



          this.cdspay7 = [];
          this.cdspay7sum = {};
          this.setcdspay7sum = [];


          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {


              this.setcdspay7sum.push(d);
              this.cdspay7sum = this.setcdspay7sum[0];

              this.showgraph1();





            } else {
              this.cdspay7.push(d);
            }
          });
        }

      });





      this.labelGraph3 = [];
      this.bgGraph3 = [];
      this.dataGraph3 = [];

      API.SearchDatagrid({
        data: {
          CODE: "PROCESSNSHELF", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },



        callblack: res => {
          this.cdsex = [];

          this.labelGraph3 = [];
          this.bgGraph3 = [];
          this.dataGraph3 = [];

          res.forEach((d, i) => {

            this.cdsex.push(d);
            this.dataGraph3.push(res[i].col9float);
            this.labelGraph3.push(res[i].coldescstring);


            // this.dataGraph3.push(parseFloat(((parseFloat(res[i].col5float) / sumvalue3) * 100).toFixed(2)));
            // this.labelGraph3.push(res[i].col2string);
            // this.bgGraph3.push(res[i].col6string);



          });



          var data3 = {
            labels: this.labelGraph3,
            datasets: [
              {
                backgroundColor: this.bgGraph3,

                backgroundColor: ['RGBA(23, 165, 137 ,1)', 'RGBA(133, 193, 233  ,1)', 'RGBA(244, 208, 63 ,1)', 'RGBA(235, 152, 78,1)', 'RGBA(192, 57, 43,1)'

                  , 'RGBA(189, 195, 199,1)', 'RGBA(155, 89, 182,1)', 'RGBA(128, 70, 27,1)'],


                //borderColor: ['rgba(192, 57, 43, 0.5)', 'rgba(212, 172, 13   , 0.5)', 'rgba(155, 89, 182 , 0.5)', 'rgba(23, 165, 137 , 0.5)', 'rgba(41, 128, 185  , 0.5)'],
                borderWidth: 0,
                data: this.dataGraph3,
                // data: this.dataDrawingGraph3,
              }
            ]
          };







          var option3 = {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: { enabled: true },

            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 30,
                bottom: 0
              }
            },

            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            },

            scales: {
              yAxes: [
                {
                  display: true,
                  ticks: {
                    beginAtZero: true,

                  },
                  gridLines: {
                    display: false,

                  }

                }
              ],
              xAxes: [
                {


                  ticks: {
                    fontColor: '#fff',



                    callback: function (label, index, labels) {
                      if (/\s/.test(label)) {
                        return label.split(" ");
                      } else {
                        return label;
                      }

                    }



                  },







                  // gridLines: {
                  //   display: false
                  // }




                }
              ]
            },
            plugins: {

              display: function (context) {
                return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...

              },


              datalabels: {
                display: true,


                align: 'top',

                formatter: Math.round,
                font: {
                  weight: 'bold',
                  size: 10
                },

                color: 'white',

                backgroundColor: "rgba(33, 47, 61 , 0.8)",
                borderColor: "#99A3A4", // Border color of Label
                borderRadius: 4,
                clip: true,


                font: {
                  weight: 'bold'
                },

                formatter: function (value) {
                  //return value.y;

                  let percentage = (value).toFixed(0);
                  return percentage;
                }

                // formatter: (value, ctx) => {
                //   let sum = 0;
                //   let dataArr = ctx.chart.data.datasets[0].data;
                //   dataArr.map(data => {
                //     sum += data;
                //   });
                //   let percentage = (value * 100 / sum).toFixed(2) + "%";
                //   return percentage;
                // },

              }
            }



          };





          if (myChart3 !== null) {

            myChart3.data = data3;
            myChart3.update();
          } else {

            var ctx3 = document.getElementById("graph33").getContext("2d");
            myChart3 = new Chart(ctx3, {
              type: 'bar',
              data: data3,
              options: option3,

            });


          }









        }

      });




     











      // API.DashboardWorkPay({

      //   data: {

      //     stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
      //     enddate: GetDateTimeFormat(this.enddate_value, 'MMDDYYYY'),
      //     storeno: "",
      //     docno: ""

      //   },

      //   callblack: res => {

      //     let errA = "";
      //     let _statusA = "";


      //     this.num1 = [];

      //     this.setdataDashboardobj = [];


      //     res.forEach((d, i) => {



      //       this.setdataDashboardobj.push(d);
      //       this.dataDashboardobj = this.setdataDashboardobj[0];

      //       if (res[i].code.toString() == "01") {
      //         var num2 = 0.00;
      //         num2 = Number((this.dataDashboardobj.f2 / this.dataDashboardobj.f1) * 100.00);

      //         this.num1.push(num2.toFixed(2));

      //         num2 = Number((this.dataDashboardobj.f3 / this.dataDashboardobj.f1) * 100.00);
      //         this.num1.push(num2.toFixed(2));
      //       }

      //     });







      //     var data2 = {
      //       labels: ['K', 'W'],


      //       datasets: [

      //         {
      //           backgroundColor: ['rgba(40, 116, 166, 0.5)', 'rgba(26, 188, 156  , 0.5)'],
      //           borderColor: ['rgba(40, 116, 166, 0.5)', 'rgba(26, 188, 156   , 0.5)'],
      //           borderWidth: 1,

      //           data: this.num1
      //         }
      //       ]
      //     };




      //     var option2 = {

      //       responsive: true,
      //       maintainAspectRatio: false,
      //       tooltips: { enabled: true },


      //       legend: {
      //         display: false
      //       },
      //       tooltips: {
      //         enabled: false
      //       },



      //       plugins: {



      //         datalabels: {

      //           display: function (context) {
      //             return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
      //           },



      //           position: 'outside',

      //           formatter: Math.round,
      //           font: {
      //             weight: 'bold',
      //             size: 10
      //           },

      //           color: function (context) {

      //             return context.hovered ? "blue" : "gray";
      //           },

      //           backgroundColor: function (context) {
      //             return context.dataset.backgroundColor;
      //           },
      //           borderRadius: 4,
      //           clip: true,
      //           color: 'white',
      //           font: {
      //             weight: 'bold'
      //           },
      //           formatter: function (value) {
      //             return value.y;
      //           }

      //         }
      //       }



      //     };


      //     if (myChart2 !== null) {

      //       myChart2.data = data2;
      //       myChart2.update();
      //     } else {

      //       var ctx2 = document.getElementById("graph2").getContext("2d");
      //       myChart2 = new Chart(ctx2, {
      //         type: 'bar',
      //         data: data2,
      //         options: option2
      //       });

      //     }











      //   }







      // });






    },


    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },

    handleSubmit() {


      this.stdate_value = this.stdate_value_temp;



      this.QueryData();



      this.$nextTick(() => {
        this.$bvModal.hide('modal-multi-F1')
      })


    },


    showdate_con() {

      return this.formatDate(this.stdate_value);

    },



    cdsrecbcshow() {

      this.titledetail = "ติดตามงานจัดเก็บสินค้าขึ้นชั้นวางจากสินค้ารับเข้าจากฝ่ายผลิตและคลังต่างประเทศ";

      this.dataDrawing = [];
      this.fieldData = this.fieldDataWip;


      this.dataDrawing = this.cdsrecbc;

      this.$bvModal.show('modal-multi-data');


    },




    cdsrecshelfbcshow() {

      this.titledetail = "ติดตามการงานการเบิกสินค้าลงมาแตกห่อ - คลังอัตโนมัติ (W)";
      this.dataDrawing = [];
      this.fieldData = this.fieldDataWip;
      this.dataDrawing = this.cdsrecshelfbc;

      this.$bvModal.show('modal-multi-data');


    },



    cdspay0sumshow() {

      this.titledetail = "ติดตามการงานการเบิกสินค้าลงมารวมห่อ - คลังอัตโนมัติ (W)";
      this.dataDrawing = [];
      this.fieldData = this.fieldDataWip;


      this.dataDrawing = this.cdspay0;

      this.$bvModal.show('modal-multi-data');


    },




    cdspay1sumshow() {

      this.titledetail = "ติดตามการงานสินค้าที่ลงจากชั้นวาง W (เบิกหมดและบางส่วน)";

      this.dataDrawing = [];

      this.fieldData = this.fieldDataWip;


      this.dataDrawing = this.cdspay1;

      this.$bvModal.show('modal-multi-data');


    },





    cdspayBsumshow() {
      this.titledetail = "ติดตามการงาน การล้าง Pallet สินค้าคลัง W";
      this.dataDrawing = [];

      this.fieldData = this.fieldDataWip;


      this.dataDrawing = this.cdspayB;

      this.$bvModal.show('modal-multi-data');


    },




    cdspay5sumshow() {
      this.titledetail = "ติดตามการงานจัดเก็บสินค้าขึ้นชั้นวาง คลังฝากลูกค้า";
      this.dataDrawing = [];

      this.fieldData = this.fieldDataWip;


      this.dataDrawing = this.cdspay5;

      this.$bvModal.show('modal-multi-data');


    },





    cdspay6sumshow() {
      this.titledetail = "ติดตามการงานจัดเก็บสินค้าขึ้นชั้นวาง จากการรับคืนสินค้าจากลูกค้า";
      this.dataDrawing = [];

      this.fieldData = this.fieldDataWip;


      this.dataDrawing = this.cdspay6;

      this.$bvModal.show('modal-multi-data');


    },




    cdspay7sumshow() {
      this.titledetail = "ติดตามการงานจัดเก็บสินค้าขึ้นชั้นวาง กรณียกเลิกการเบิกสินค้า (ยิงรับเข้าจากยกเลิกแล้ว)";
      this.dataDrawing = [];

      this.fieldData = this.fieldDataWip;


      this.dataDrawing = this.cdspay7;

      this.$bvModal.show('modal-multi-data');


    },






    formatDate(strdate) {
      var date = new Date(strdate);
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      var monthNum = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "11"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + "/" + monthNum[monthIndex] + "/" + year;
    }
  }
};
</script>

<style scoped>
.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
  content: "";
}

.fa-unsorted:before,
.fa-sort:before {
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
section.color-left.mediumGray-light {
  background-color: rgb(217, 204, 208);
}
section.color-right.mediumGray-dark {
  background-color: rgb(189, 170, 176);
}

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

.card1:hover,
.card1.hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
}
.card1:hover .card1-content,
.card1.hover .card1-content {
  box-shadow: inset 0 3px 0 0 rgb(233, 133, 141);
  border-color: rgb(233, 133, 150);
}
.card1:hover .card1-img .overlay,
.card1.hover .card1-img .overlay {
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
.card1-img .overlay .overlay-content div:hover,
.card1-img .overlay .overlay-content div.hover {
  background: rgb(118, 26, 57);
  border-color: rgb(118, 26, 49);
  color: #a9cce3;
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
.card1-content h2,
.card1-content div h2 {
  font-weight: 500;
}
.card1-content p,
.card1-content div p {
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

.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
  color: rgb(133, 146, 158);

  color: rgb(86, 101, 115);

  border: 0px;
  /* box-shadow: 0px 1px 16px rgba(235, 245, 251, 0.45); */

  background-color: rgba(0, 0, 0, 0.1);
}

.thumbnail_table {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
  color: rgb(133, 146, 158);

  color: rgb(86, 101, 115);

  border: 0px;
  /* box-shadow: 0px 1px 16px rgba(235, 245, 251, 0.45); */

  background-color: rgba(0, 0, 0, 0.1);

  opacity: 0.7;
  filter: alpha(opacity=70); /* For IE8 and earlier */
}

.thumbnail a > img,
.thumbnail > img {
  margin-right: auto;
  margin-left: auto;
}

a.thumbnail.active,
a.thumbnail:focus,
a.thumbnail:hover {
  border-color: #b7336a;
}
.thumbnail .caption {
  padding: 9px;
  color: rgb(126, 93, 101);
  height: 50px;

  /*  
    background-color: rgba(255, 255, 255, 0.4); */

  border-radius: 2px;

  color: rgb(86, 101, 115);
}

.thumbnail:hover,
.thumbnail.hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);
  background-color: rgba(235, 245, 251, 0.4);
  /*   
  background: linear-gradient(to bottom right, #D4E6F1, #D6EAF8); */
  /* border-top-width: 3px;
  border-top-color: #1A5276; */
  /* background-color: rgba(214, 234, 248   , 0.5); */
}

.thumbnail_dis {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
  color: rgb(126, 93, 107);

  box-shadow: 0px 1px 16px rgba(158, 133, 139, 0.45);
}

.thumbnail_dis a > img,
.thumbnail_dis > img {
  margin-right: auto;
  margin-left: auto;
}

.thumbnail_dis .caption {
  padding: 9px;
  color: rgb(126, 93, 106);
}

.line-chart-block,
.bar-chart-block {
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
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
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

.flex-column .folder-container {
  display: flex;
  width: auto;
  min-width: 100px;
  text-align: left;
  margin: 0;
  margin-bottom: 1rem;
}

.flex-column .folder-icon,
.flex-column .folder-name {
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
  padding: 0.75rem 1rem;
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
  background-color: rgba(123, 125, 125, 0);
}

.space {
  height: 20px;
}

/* for small metrics on top */

.row-dashboard:not(.row-dashboard-normal) > [class^="col-"] {
  padding-left: 5px;
  padding-right: 5px;
}

.row-dashboard > [class^="col-"]:first-child {
  padding-left: 15px;
}

.row-dashboard > [class^="col-"]:last-child {
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

.dashboard-card:before,
.dashboard-card:after {
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

.row-dashboard [class^="col-"] .panel {
  color: #fefefe;
}

.row-dashboard [class^="col-"] .panel .dashboard-card {
  color: #fefefe;
}

.row-dashboard [class^="col-"] .panel .dashboard-card > .right > .content {
  background-color: rgba(0, 0, 0, 0.15);
}

.row-dashboard [class^="col-"]:nth-child(1) .panel .dashboard-card {
  background-color: #72c367;
  border: 1px solid #61a658;
}

.row-dashboard [class^="col-"]:nth-child(2) .panel .dashboard-card {
  background-color: #18ace0;
  border: 1px solid #1492bf;
}

.row-dashboard [class^="col-"]:nth-child(3) .panel .dashboard-card {
  background-color: #ff9045;
  border: 1px solid #d97b3b;
}

.row-dashboard [class^="col-"]:nth-child(4) .panel .dashboard-card {
  background-color: #b141a9;
  border: 1px solid #973790;
}

.row-dashboard [class^="col-"]:nth-child(5) .panel .dashboard-card {
  background-color: #2e7c98;
  border: 1px solid #276a81;
}

.row-dashboard [class^="col-"]:nth-child(6) .panel .dashboard-card {
  background-color: #e83c37;
  border: 1px solid #c6332f;
  /*background-color: #e4221b;*/
}

.col-sm-2 > .panel > .dashboard-card > .right > .content,
.col-sm-1 > .panel > .dashboard-card > .right > .content {
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
  border-color: rgba(44, 62, 80, 0);
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

.list-group-stats-item::after,
.list-group-stats-item::before {
  content: "";
  display: table;
  clear: both;
}

.list-group-stats-item span.pull-right {
  font-size: 12px;
}

.list-group-stats-item .list-group-stats-item-pic,
.list-group-stats-item .list-group-stats-item-content {
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
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
}

.list-group-stats-item .list-group-stats-item-pic > .fa {
  width: 38px;
  height: 38px;
  border-radius: 100%;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0);
}

.list-group-stats-item .list-group-stats-item-content {
  margin-left: 12px;
  width: calc(100% - 50px);
}

/* for mini progress bars */
.stats-progress {
  margin-bottom: 10px;
  z-index: 10;
  background-color: rgba(174, 182, 191, 0.2);
  display: table;
  width: 100%;
  border: 1px solid rgba(174, 182, 191, 0.2);
}

.stats-progress::before,
.stats-progress::after {
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
  color: rgba(174, 182, 191, 0.8);
  padding: 5px;
  float: left;
  border-right: 1px solid rgba(174, 182, 191, 0.5);
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
  background-color: #ea8a49;
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
  background-color: #72c367;
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
  background-color: #e83c37;
}

.stats-progress .stats:nth-child(6) .stats-fill {
  background-color: #2e7c98;
}

.circle {
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 98%;
  background: rgba(39, 174, 96, 0.2);
  height: 20%;
  transition: height 600ms;
  z-index: 1;
  margin: 2px;
}

.text {
  z-index: 3;
}
.circle:hover .fill {
  height: 40%;
}

progress,
progress[role] {
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
  padding: 0;
}
.skill {
  margin-bottom: 1em;
  position: relative;
}
.skill h6 {
  color: #000;
  left: 2px;
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

.border-right-ln {
  border-right: 1px solid rgba(93, 109, 126, 0.2);
}

@media screen and (max-width: 800px) {
  .main .container-fluid {
    padding: 0;
  }
}

@media screen and (min-width: 800px) {
  .main .container-fluid {
    padding: 0 30px;
  }
}
</style>
