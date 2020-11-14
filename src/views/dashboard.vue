<template>
  <div class="animated fadeIn">

    <div class="page-header">
      <b-row>
        <b-col lg="12">
          <div class="onPC">

            <span style="color: hsla(205, 25%, 50%, 0.95);">
              <h1><i
                  class="fa fa-desktop"
                  aria-hidden="true"
                  style="font-size:50px"
                ></i> Dash Board</h1>
            </span>
            <span style="color: hsla(205, 25%, 50%, 0.95);">
              <h4>สถานะงานรับเข้า-จ่ายออกสินค้าประจำวัน </h4>
            </span>
          </div>

          <div class="onPhone">
            <center>
              <span style="color: hsla(205, 25%, 50%, 0.95);">
                <h1><i
                    class="fa fa-desktop"
                    aria-hidden="true"
                    style="font-size:50px"
                  ></i> Dash Board </h1>
              </span>
              <span style="color: hsla(205, 25%, 50%, 0.95);">
                <h4>สถานะงานรับเข้า-จ่ายออกสินค้าประจำวัน </h4>
              </span>
            </center>
          </div>

        </b-col>
      </b-row>
    </div>

    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card
            no-body
            v-if="show"
          >
            <div slot="header">
              ปริมาณ นน.สินค้าในระหว่างรอ "จัดเก็บ-จัดเบิก" {{this.showdate_con()}}
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize">
                  <i
                    class="fa fa-search fa-sm"
                    style="color:#c8ced3"
                    v-b-modal.modal-multi-F1
                  ></i>
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

                    <form
                      ref="form"
                      @submit.stop.prevent="handleSubmit"
                    >
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

                <b-link
                  class="card-header-action btn-minimize"
                  @click="QueryData"
                >
                  <i
                    class="fa fa-refresh fa-sm"
                    style="color:#c8ced3"
                  ></i>
                </b-link>

                <b-link
                  class="card-header-action btn-minimize"
                  v-b-toggle.collapse1A
                >
                  <i
                    class="icon-arrow-up fa-sm"
                    style="color:#c8ced3"
                  ></i>
                </b-link>
              </div>
            </div>
            <b-collapse
              id="collapse1A"
              visible
            >
              <b-card-body class="DS2">
                <div class="box">
                  <!-- /.box-header -->

                  <div class="box-footer">
                    <div class="row">
                      <!-- <div class="col-6 col-sm-2"> -->

                      <b-col
                        lg="6"
                        xl="2"
                        md="6"
                        sm="6"
                      >
                        <div class="description-block border-right-ln">
                          <!-- <i class="fa fa-star" style="color:#F4D03F; " :style="{visibility:datawork1.col14string}" </i> -->

                          <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdsrecbcsum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdsrecbcsum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdsrecbcsum.col5string}}
                          </span>
                          <br />
                          <h2 class="description-header">
                            {{cdsrecbcsum.col11float|number(0)}}
                            <small style="font-size:15px;">กก.</small>
                          </h2>
                          <b-link @click="cdsrecbcshow">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >1.รอรับเข้าคลัง : {{cdsrecbcsum.col9float| number(0)}} บาร์โค๊ด</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>

                      <!-- /.col -->
                      <b-col
                        lg="6"
                        xl="2"
                        md="6"
                        sm="6"
                      >
                        <div class="description-block border-right-ln">
                          <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdsrecshelfbcsum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdsrecshelfbcsum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdsrecshelfbcsum.col5string}}
                          </span>

                          <h2 class="description-header">
                            {{cdsrecshelfbcsum.col11float|number(0)}}
                            <small style="font-size:15px;">กก.</small>
                          </h2>
                          <b-link @click="cdsrecshelfbcshow">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >2.รอจัดเก็บขึ้นชั้นวาง : {{cdsrecshelfbcsum.col9float| number(0)}} บาร์โค๊ด</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>
                      <!-- /.col -->
                      <b-col
                        lg="6"
                        xl="2"
                        md="6"
                        sm="6"
                      >
                        <div class="description-block border-right-ln">
                          <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdspay0sum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdspay0sum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdspay0sum.col5string}}
                          </span>

                          <h2 class="description-header">
                            {{cdspay0sum.col11float|number(0)}}
                            <small style="font-size:15px;">กก.</small>
                          </h2>
                          <b-link @click="cdspay0sumshow">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >3.รอส่งคลังจัดเบิก : {{cdspay0sum.col2float| number(0)}} ใบ {{cdspay0sum.col9float| number(0)}} รายการ</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>
                      <!-- /.col -->
                      <b-col
                        lg="6"
                        xl="2"
                        md="6"
                        sm="6"
                      >
                        <div class="description-block border-right-ln">
                          <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdspay1sum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdspay1sum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdspay1sum.col5string}}
                          </span>

                          <h2 class="description-header">
                            {{cdspay1sum.col11float|number(0)}}
                            <small style="font-size:15px;">กก.</small>
                          </h2>
                          <b-link @click="cdspay1sumshow">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >4.รอจัดเบิกสินค้า : {{cdspay1sum.col2float| number(0)}} ใบ {{cdspay1sum.col9float| number(0)}} รายการ</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>

                      <b-col
                        lg="6"
                        xl="2"
                        md="6"
                        sm="6"
                      >
                        <div class="description-block border-right-ln">
                          <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdspayBsum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdspayBsum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdspayBsum.col5string}}
                          </span>

                          <h2 class="description-header">
                            {{cdspayBsum.col11float|number(0)}}
                            <small style="font-size:15px;">กก.</small>
                          </h2>
                          <b-link @click="cdspayBsumshow">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >5.รอยิงเบิกสินค้า : {{cdspayBsum.col2float| number(0)}} ใบ {{cdspayBsum.col9float| number(0)}} รายการ</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>

                      <b-col
                        lg="6"
                        xl="2"
                        md="6"
                        sm="6"
                      >
                        <div class="description-block border-right-ln">
                          <span
                            class="description-percentage text-success-ds"
                            :style="{color:this.cdspay5sum.col4string}"
                          >
                            <i
                              v-bind="{class:this.cdspay5sum.col3string}"
                              aria-hidden="true"
                              style="font-size:12px"
                            ></i>
                            &nbsp;ดำเนินการล่าสุด&nbsp;&nbsp;{{cdspay5sum.col5string}}
                          </span>

                          <h2 class="description-header">
                            {{cdspay5sum.col11float|number(0)}}
                            <small style="font-size:15px;">กก.</small>
                          </h2>
                          <b-link @click="cdspay5sumshow">
                            <span
                              class="description-text"
                              style="color:#D0D3D4"
                            >6.รอบรรจุสินค้า : {{cdspay5sum.col2float| number(0)}} ใบ {{cdspay5sum.col9float| number(0)}} รายการ</span>
                          </b-link>
                        </div>
                        <!-- /.description-block -->
                      </b-col>
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
      <b-col
        lg="4"
        md="12"
        sm="12"
      >
        <transition name="fade">
          <b-card
            no-body
            v-if="show"
          >
            <div slot="header">
              ติดตามงานจัดเบิกตามประเภทจัดส่ง (ใบเบิก)
              <div class="card-header-actions">
                <b-link
                  class="card-header-action btn-minimize"
                  v-b-toggle.collapse0A
                >
                  <i
                    class="icon-arrow-up fa-sm"
                    style="color:#c8ced3"
                  ></i>
                </b-link>
              </div>
            </div>
            <b-collapse
              id="collapse0A"
              visible
            >
              <b-card-body style="height: 380px; padding-left: 1px; padding-right: 1px;">
                <div style="width: 100%; display: inline-block; vertical-align: top; ">
                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    align="center"
                    class="truck"
                    lang="x-truck"
                    style="border:0px"
                  >
                    <tr style="border:0px">
                      <td
                        align="center"
                        style="display:none;width:0;height:0;font-size:0;line-height:0;float:left;overflow:hidden;border:0px"
                        class="icon"
                      >
                        <i class="fa fa-truck fa-5x"></i>
                      </td>
                    </tr>

                    <tr style="border:0px">
                      <td
                        align="center"
                        class="noWebkit"
                        style="border:0px"
                      >
                        <!-- 
                        <i class="fa fa-truck truck6" aria-hidden="true" v-if="this.iconcar6"></i>-->

                        <i
                          class="fa fa-truck truck6"
                          aria-hidden="true"
                          v-if="this.iconcar6"
                        ></i>

                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar12"
                        ></i>

                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar18"
                        ></i>
                        <i
                          class="fa fa-truck truck6"
                          aria-hidden="true"
                          v-if="this.iconcar18"
                        ></i>

                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar24"
                        ></i>
                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar24"
                        ></i>

                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar30"
                        ></i>
                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar30"
                        ></i>
                        <i
                          class="fa fa-truck truck6"
                          aria-hidden="true"
                          v-if="this.iconcar30"
                        ></i>

                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar36"
                        ></i>
                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar36"
                        ></i>
                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar36"
                        ></i>

                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar42"
                        ></i>
                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar42"
                        ></i>
                        <i
                          class="fa fa-truck truck10"
                          aria-hidden="true"
                          v-if="this.iconcar42"
                        ></i>
                        <i
                          class="fa fa-truck truck6"
                          aria-hidden="true"
                          v-if="this.iconcar42"
                        ></i>

                        <!-- 

                       


                        <i class="fa fa-truck truck10" aria-hidden="true"></i>
                        <i class="fa fa-truck truck6"  aria-hidden="true"></i>-->
                      </td>
                    </tr>

                    <tr>
                      <td style="font-size:18px;font-weight:bold; text-align:center;border:0px">
                        <div>
                          <b-link @click="cdssendcode01show">
                            <span style="color:#D6DBDF">5.รถ.บริษัทขนส่ง&nbsp;</span>
                          </b-link>
                          <span
                            class="badge"
                            style="background-color:rgba(67, 103, 140,1);color:#fff; border-radius: 1px"
                          >{{cdssendcodesum.col3float|number(0)}}</span>&nbsp;
                          <span
                            class="badge"
                            style="background-color:rgba(166, 172, 175 , 1);color:#fff; border-radius: 1px"
                          >{{cdssendcodesum.col6float|number(0)}}</span>&nbsp;
                          <span
                            class="badge"
                            style="background-color:rgba(217, 136, 128  , 1);color:#fff; border-radius: 1px"
                          >{{cdssendcodesum.col9float|number(0)}}</span>
                        </div>
                        <br />
                      </td>
                    </tr>

                    <tr style="border:0px">
                      <td
                        align="center"
                        style="border:0px"
                      >
                        <b-button variant="secondary">
                          {{cdssendcodesum.col5float|number(0)}}&nbsp;
                          <small style="font-size:11px;">กก.</small>
                          <br />
                          <small style="font-size:11px;">(ปริมาณเบิกทั้งหมด)</small>
                        </b-button>&nbsp;
                        <b-button variant="success">
                          {{cdssendcodesum.col8float|number(0)}}&nbsp;
                          <small style="font-size:11px;">กก.</small>
                          <br />
                          <small style="font-size:11px;">(ดำเนินการแล้ว)</small>
                        </b-button>&nbsp;
                        <b-button variant="danger">
                          {{cdssendcodesum.col11float|number(0)}}&nbsp;
                          <small style="font-size:11px;">กก.</small>
                          <br />
                          <small style="font-size:11px;">(รอดำเนินการ)</small>
                        </b-button>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="border:0px;"
                      >
                        <br />

                        <div
                          class="XXX"
                          style="width:80%;"
                        >
                          <canvas
                            id="graph2"
                            width="100%"
                            height="120"
                          ></canvas>
                        </div>
                      </td>
                    </tr>
                  </table>&nbsp;&nbsp;
                  <i
                    class="fa fa-stop"
                    aria-hidden="true"
                    style="color:rgba(67,103,140,1)"
                  ></i>&nbsp;ใบทั้งหมด&nbsp;
                  <i
                    class="fa fa-stop"
                    aria-hidden="true"
                    style="color:rgba(166, 172, 175 , 1)"
                  ></i>&nbsp;ดำเนินการแล้ว&nbsp;
                  <i
                    class="fa fa-stop"
                    aria-hidden="true"
                    style="color:rgba(217,136,128,1)"
                  ></i>&nbsp;คงเหลือ
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <i
                    class="fa fa-truck truck6-icon"
                    aria-hidden="true"
                  >6ล้อ</i>
                  &nbsp;&nbsp;
                  <i
                    class="fa fa-truck truck10-icon"
                    aria-hidden="true"
                  >10ล้อ</i>

                  <br />
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>

      <b-col
        lg="4"
        md="12"
        sm="12"
      >
        <transition name="fade">
          <b-card
            no-body
            v-if="show"
          >
            <div slot="header">
              %ความคืบหน้างานจัดเก็บ-จัดเบิก
              <div class="card-header-actions">
                <b-link
                  class="card-header-action btn-minimize"
                  v-b-toggle.collapse0A
                >
                  <i
                    class="icon-arrow-up fa-sm"
                    style="color:#c8ced3"
                  ></i>
                </b-link>
              </div>
            </div>
            <b-collapse
              id="collapse0A"
              visible
            >
              <b-card-body style="height: 380px;">
                <div class="list-group-stats">
                  <div class="list-group-stats-item">
                    <div class="list-group-stats-item-pic">
                      <i
                        class="fa fa-university"
                        style="font-size:20px"
                      ></i>
                    </div>

                    <div class="list-group-stats-item-content">
                      <div class="list-group-stats-item-heading">
                        รับสินค้าเข้าคลัง
                        <span class="pull-right">
                          <i
                            class="fa fa-star"
                            style="color:#F4D03F; "
                            :style="{visibility:cdsrecbcsum.col14string}"
                          >&nbsp;&nbsp;</i>
                          <!-- {{cdsrecbcsum.col1float|number(0)}} % -->
                          {{this.showpercsaledm(cdsrecbcsum.col3float,cdsrecbcsum.col1float,'สินค้ารับเข้า')}}
                        </span>
                      </div>
                      <div class="list-group-stats-item-bar">
                        <div
                          class="list-group-stats-item-progress"
                          :style="{width:cdsrecbcsum.col13string,background:cdsrecbcsum.col15string}"
                        ></div>
                      </div>
                    </div>

                    <div class="list-group-item-hover">
                      <div class="row row-min">
                        <div class="col-4 col-sm-4 text-center">
                          BC ทั้งหมด
                          <br />
                          {{cdsrecbcsum.col3float|number(0)}}
                        </div>
                        <div class="col-4 col-sm-4 text-center">
                          ดำเนินการแล้ว
                          <br />
                          {{cdsrecbcsum.col6float|number(0)}}
                        </div>
                        <div class="col-4 text-center">
                          รอดำเนินการ
                          <br />
                          {{cdsrecbcsum.col9float|number(0)}}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-stats-item">
                    <div class="list-group-stats-item-pic">
                      <i
                        class="fa fa-shopping-cart"
                        style="font-size:20px"
                      ></i>
                    </div>

                    <div class="list-group-stats-item-content">
                      <div class="list-group-stats-item-heading">
                        จัดเก็บสินค้า
                        <span class="pull-right">
                          <i
                            class="fa fa-star"
                            style="color:#F4D03F; "
                            :style="{visibility:cdsrecshelfbcsum.col14string}"
                          >&nbsp;&nbsp;</i>
                          <!-- {{cdsrecshelfbcsum.col1float|number(0)}} % -->
                          {{this.showpercsaledm(cdsrecshelfbcsum.col3float,cdsrecshelfbcsum.col1float,'สินค้ารอเก็บขึ้นชั้นในวัน')}}
                        </span>
                      </div>
                      <div class="list-group-stats-item-bar">
                        <div
                          class="list-group-stats-item-progress"
                          :style="{width:cdsrecshelfbcsum.col13string,background:cdsrecshelfbcsum.col15string}"
                        ></div>
                      </div>
                    </div>

                    <div class="list-group-item-hover">
                      <div class="row row-min">
                        <div class="col-4 col-sm-4 text-center">
                          BC ทั้งหมด
                          <br />
                          {{cdsrecshelfbcsum.col3float|number(0)}}
                        </div>
                        <div class="col-4 col-sm-4 text-center">
                          ดำเนินการแล้ว
                          <br />
                          {{cdsrecshelfbcsum.col6float|number(0)}}
                        </div>
                        <div class="col-4 text-center">
                          รอดำเนินการ
                          <br />
                          {{cdsrecshelfbcsum.col9float|number(0)}}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-stats-item">
                    <div class="list-group-stats-item-pic">
                      <i
                        class="fa fa-cube"
                        style="font-size:20px"
                      ></i>
                    </div>

                    <div class="list-group-stats-item-content">
                      <div class="list-group-stats-item-heading">
                        จัดเบิกสินค้า
                        <span class="pull-right">
                          <i
                            class="fa fa-star"
                            style="color:#F4D03F; "
                            :style="{visibility:cdspayallsum.col14string}"
                          >&nbsp;&nbsp;</i>
                          <!-- {{cdspayallsum.col1float|number(0)}} % -->
                          {{this.showpercsaledm(cdspayallsum.col3float,cdspayallsum.col1float,'สินค้ารอจัดเบิก')}}
                        </span>
                      </div>
                      <div class="list-group-stats-item-bar">
                        <div
                          class="list-group-stats-item-progress"
                          :style="{width:cdspayallsum.col13string,background:cdspayallsum.col15string}"
                        ></div>
                      </div>
                    </div>

                    <div class="list-group-item-hover">
                      <div class="row row-min">
                        <div class="col-4 col-sm-4 text-center">
                          รายการทั้งหมด
                          <br />
                          {{cdspayallsum.col3float|number(0)}}
                        </div>
                        <div class="col-4 col-sm-4 text-center">
                          ดำเนินการแล้ว
                          <br />
                          {{cdspayallsum.col6float|number(0)}}
                        </div>
                        <div class="col-4 text-center">
                          รอดำเนินการ
                          <br />
                          {{cdspayallsum.col9float|number(0)}}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-stats-item">
                    <div class="list-group-stats-item-pic">
                      <i
                        class="fa fa-cubes"
                        style="font-size:20px"
                      ></i>
                    </div>

                    <div class="list-group-stats-item-content">
                      <div class="list-group-stats-item-heading">
                        บรรจุสินค้า
                        <span class="pull-right">
                          <i
                            class="fa fa-star"
                            style="color:#F4D03F; "
                            :style="{visibility:cdspay5sum.col14string}"
                          >&nbsp;&nbsp;</i>
                          <!-- {{cdspay5sum.col1float|number(0)}} % -->
                          {{this.showpercsaledm(cdspay5sum.col3float,cdspay5sum.col1float,'สินค้ารอบรรจุ')}}
                        </span>
                      </div>
                      <div class="list-group-stats-item-bar">
                        <div
                          class="list-group-stats-item-progress"
                          :style="{width:cdspay5sum.col13string,background:cdspay5sum.col15string}"
                        ></div>
                      </div>
                    </div>

                    <div class="list-group-item-hover">
                      <div class="row row-min">
                        <div class="col-4 col-sm-4 text-center">
                          BC ทั้งหมด
                          <br />
                          {{cdspay5sum.col3float|number(0)}}
                        </div>
                        <div class="col-4 col-sm-4 text-center">
                          ดำเนินการแล้ว
                          <br />
                          {{cdspay5sum.col6float|number(0)}}
                        </div>
                        <div class="col-4 text-center">
                          รอดำเนินการ
                          <br />
                          {{cdspay5sum.col9float|number(0)}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr style="text-align:left;margin-left:0;color:gray;background-color:gray" />

                <div class="list-group-stats-item">
                  <div class="list-group-stats-item-pic">
                    <i
                      class="fa fa-file-text-o"
                      style="font-size:20px"
                    ></i>
                  </div>

                  <div class="list-group-stats-item-content">
                    <div class="list-group-stats-item-heading">
                      เบิกขายเข้าคลังฝาก
                      <span class="pull-right">
                        <i
                          class="fa fa-star"
                          style="color:#F4D03F; "
                          :style="{visibility:cdssendcode97sum.col14string}"
                        >&nbsp;&nbsp;</i>
                        <!-- {{cdssendcode97sum.col1float|number(0)}} % -->
                        {{this.showpercsaledm(cdssendcode97sum.col3float,cdssendcode97sum.col1float,'ใบเบิก')}}
                      </span>
                    </div>
                    <div class="list-group-stats-item-bar">
                      <div
                        class="list-group-stats-item-progress"
                        :style="{width:cdssendcode97sum.col13string,background:cdssendcode97sum.col15string}"
                      ></div>
                    </div>
                  </div>

                  <div class="list-group-item-hover">
                    <div class="row row-min">
                      <div class="col-4 col-sm-4 text-center">
                        ใบเบิกทั้งหมด
                        <br />
                        {{cdssendcode97sum.col3float|number(0)}}
                      </div>
                      <div class="col-4 col-sm-4 text-center">
                        ดำเนินการแล้ว
                        <br />
                        {{cdssendcode97sum.col6float|number(0)}}
                      </div>
                      <div class="col-4 text-center">
                        รอดำเนินการ
                        <br />
                        {{cdssendcode97sum.col9float|number(0)}}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="list-group-stats-item">
                  <div class="list-group-stats-item-pic">
                    <i
                      class="fa fa-file-text"
                      style="font-size:20px"
                    ></i>
                  </div>

                  <div class="list-group-stats-item-content">
                    <div class="list-group-stats-item-heading">
                      เบิกเรียกคืนสินค้า
                      <span class="pull-right">
                        <i
                          class="fa fa-star"
                          style="color:#F4D03F; "
                          :style="{visibility:cdssendcodePCsum.col14string}"
                        >&nbsp;&nbsp;</i>

                        {{this.showpercsaledm(cdssendcodePCsum.col3float,cdssendcodePCsum.col1float,'ใบเบิก')}}
                      </span>
                    </div>
                    <div class="list-group-stats-item-bar">
                      <div
                        class="list-group-stats-item-progress"
                        :style="{width:cdssendcodePCsum.col13string,background:cdssendcodePCsum.col15string}"
                      ></div>
                    </div>
                  </div>

                  <div class="list-group-item-hover">
                    <div class="row row-min">
                      <div class="col-4 col-sm-4 text-center">
                        ใบเบิกทั้งหมด
                        <br />
                        {{cdssendcodePCsum.col3float|number(0)}}
                      </div>
                      <div class="col-4 col-sm-4 text-center">
                        ดำเนินการแล้ว
                        <br />
                        {{cdssendcodePCsum.col6float|number(0)}}
                      </div>
                      <div class="col-4 text-center">
                        รอดำเนินการ
                        <br />
                        {{cdssendcodePCsum.col9float|number(0)}}
                      </div>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>

      <b-col
        lg="4"
        md="12"
        sm="12"
      >
        <transition name="fade">
          <b-card
            no-body
            v-if="show"
          >
            <div slot="header">
              ติดตามงานจัดเก็บ-จัดเบิกสินค้า
              <span style="color:#D4AC0D">คลังต่างประเทศ</span>
              <div class="card-header-actions">
                <b-link
                  class="card-header-action btn-minimize"
                  v-b-toggle.collapse0A
                >
                  <i
                    class="icon-arrow-up fa-sm"
                    style="color:#c8ced3"
                  ></i>
                </b-link>
              </div>
            </div>
            <b-collapse
              id="collapse0A"
              visible
            >
              <b-card-body style="height: 380px;">
                <b-row>
                  <div class="col-4 col-sm-4">
                    <div class="progress-cycle">
                      <div class="flx">
                        <div class="flx-item">
                          <svg
                            class="circle-progress"
                            viewBox="0 0 36 36"
                          >

                            <path
                              class="circle-path-rec"
                              d="M18 2a16 16 0 010 32 16 16 0 010-32"
                              :stroke-dasharray="this.cdsexsumrec.col13string+' 100'"
                            />

                            <text
                              class="circle-text"
                              x="50%"
                              y="50%"
                            >{{this.showcdsexsumrec()}}</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <center>1.รับสินค้าเข้าคลัง</center>
                  </div>

                  <div class="col-4 col-sm-4">
                    <div class="progress-cycle">
                      <div class="flx">
                        <div class="flx-item">
                          <svg
                            class="circle-progress"
                            viewBox="0 0 36 36"
                          >
                            <path
                              class="circle-path-pay"
                              d="M18 2a16 16 0 010 32 16 16 0 010-32"
                              :stroke-dasharray="this.cdsexsumpay.col13string+' 100'"
                            />

                            <text
                              class="circle-text"
                              x="50%"
                              y="50%"
                            >{{this.showcdsexsumpay()}}</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <center>2.เบิกให้ลูกค้า (ส่งออก)</center>
                  </div>

                  <div class="col-4 col-sm-4">
                    <div class="progress-cycle">
                      <div class="flx">
                        <div class="flx-item">
                          <svg
                            class="circle-progress"
                            viewBox="0 0 36 36"
                          >
                            <path
                              class="circle-path-pack"
                              d="M18 2a16 16 0 010 32 16 16 0 010-32"
                              :stroke-dasharray="this.cdsexsumkou.col13string+' 100'"
                            />

                            <text
                              class="circle-text"
                              x="50%"
                              y="50%"
                            >{{this.showcdsexsumkou()}}</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <center>3.ปรับปรุงออก (KOU)</center>
                  </div>
                </b-row>

                <b-row>
                  <b-col sm="12">
                    <br />
                    <gridv2
                      ref="gridDrawingEx"
                      :o_showtitle="true"
                      :fields="fieldgridExall"
                      :name="name"
                      :btnGrid="true"
                      :btnAdd="false"
                      :btnClone="false"
                      :btnView="false"
                      :btnEdit="false"
                      :btnDelete="false"
                      :o_col_checkbox="false"
                      :trackBy="'rowID'"
                      :data="cdsex"
                      :o_navfooter_visible="false"
                      :o_nav_visible="false"
                      :o_grid_responsive="true"
                    ></gridv2>
                  </b-col>
                </b-row>

                <b-link @click="cdssendcodeexshow()">
                  <span
                    class="description-text"
                    style="color:#D4AC0D"
                  >ข้อมูลการเบิกสินค้า</span>
                </b-link>

              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card
            no-body
            v-if="show"
          >
            <div slot="header">
              table : ติดตามการจัดเบิกสินค้าตามประเภทการจัดส่งสินค้า
              <div class="card-header-actions">
                <b-link
                  class="card-header-action btn-minimize"
                  v-b-toggle.collapse2A
                >
                  <i
                    class="icon-arrow-up fa-sm"
                    style="color:#c8ced3"
                  ></i>
                </b-link>
              </div>
            </div>
            <b-collapse
              id="collapse2A"
              visible
            >
              <b-card-body>
                <b-row>
                  <b-col
                    xl="8"
                    lg="12"
                    md="12"
                    sm="12"
                  >

                    <div class="tabbed">
                      <input
                        type="radio"
                        name="tabs"
                        id="tab-nav-1"
                        checked
                      />
                      <label
                        for="tab-nav-1"
                        class="hover"
                      >แสดงปริมาณน้ำหนัก</label>
                      <input
                        type="radio"
                        name="tabs"
                        id="tab-nav-2"
                      />
                      <label
                        for="tab-nav-2"
                        class="hover"
                      >แสดงจำนวนใบเบิก</label>

                      <div class="tabs">
                        <div>

                          <gridv2
                            ref="gridDrawing1"
                            :o_showtitle="true"
                            :fields="fieldrecbc"
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
                            <template v-slot:col1string="{item}">
                              <div v-if="item.col1string=='01'">
                                <b-link
                                  @click="cdssendcode01show"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#6497b1;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='02'">
                                <b-link
                                  @click="cdssendcode02show"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#b3cde0;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='04'">
                                <b-link
                                  @click="cdssendcode04show"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#035b96;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='06'">
                                <b-link
                                  @click="cdssendcode06show"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#04396c;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='97'">
                                <b-link
                                  @click="cdssendcode97zoneshow"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#031f4b;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='10'">
                                <b-link
                                  @click="cdssendcode97zoneshow"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#76448A;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                            </template>
                          </gridv2>
                        </div>
                        <div>

                          <gridv2
                            ref="gridDrawing1"
                            :o_showtitle="true"
                            :fields="fieldPaynoamt"
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
                            <template v-slot:col1string="{item,itemIndex}">
                              <div v-if="item.col1string=='01'">
                                <b-link
                                  @click="cdssendcode01show"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#255e91;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='02'">
                                <b-link
                                  @click="cdssendcode02show"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#a5a5a5;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='04'">
                                <b-link
                                  @click="cdssendcode04show"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#4472c4;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='06'">
                                <b-link
                                  @click="cdssendcode06show"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#636363;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='97'">
                                <b-link
                                  @click="cdssendcode97zoneshow"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#5b9bd5;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                              <div v-if="item.col1string=='10'">
                                <b-link
                                  @click="cdssendcode97zoneshow"
                                  style="color:#CACFD2;text-decoration: none;"
                                >
                                  &nbsp;&nbsp;
                                  <i
                                    class="fa fa-stop"
                                    aria-hidden="true"
                                    style="color:#76448A;"
                                  ></i>
                                  &nbsp;&nbsp;{{item.col1string}}
                                </b-link>
                              </div>

                            </template>
                          </gridv2>
                        </div>
                      </div>
                    </div>
                  </b-col>

                  <b-col
                    b-col
                    xl="4"
                    lg="12"
                    md="12"
                    sm="12"
                  >
                    <b-card
                      no-body
                      v-if="show"
                    >
                      <div slot="header">
                        graph : % สัดส่วนการเบิกสินค้าตามประเภทการสัดส่งสินค้า
                        <div class="card-header-actions"></div>
                      </div>
                      <b-collapse
                        id="collapse2A"
                        visible
                      >
                        <b-card-body>
                          <canvas
                            id="graph3"
                            width="180"
                            height="240"
                          ></canvas>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
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
          <b-card
            no-body
            v-if="show"
          >
            <div slot="header">
              table : ติดตามการจัดเบิกขั้นตอนการทำงาน
              <div class="card-header-actions">
                <b-link
                  class="card-header-action btn-minimize"
                  v-b-toggle.collapse3A
                >
                  <i
                    class="icon-arrow-up fa-sm"
                    style="color:#c8ced3"
                  ></i>
                </b-link>
              </div>
            </div>
            <b-collapse
              id="collapse3A"
              visible
            >
              <b-card-body>
                <b-row>
                  <div class="col-12 col-sm-8">
                    <div class="tabbed2">
                      <input
                        type="radio"
                        name="tabs2"
                        id="tab2-nav-1"
                        checked
                      />
                      <label
                        for="tab2-nav-1"
                        class="hover"
                      >แสดงปริมาณน้ำหนัก</label>
                      <!-- <input type="radio" name="tabs2" id="tab2-nav-2" />
                      <label for="tab2-nav-2">แสดงจำนวนใบเบิก</label>-->

                      <div class="tabs2">
                        <div>
                          <gridv2
                            ref="gridDrawing3"
                            :o_showtitle="true"
                            :fields="fieldwip"
                            :name="name"
                            :btnGrid="true"
                            :btnAdd="false"
                            :btnClone="false"
                            :btnView="false"
                            :btnEdit="false"
                            :btnDelete="false"
                            :o_col_checkbox="false"
                            :trackBy="'col2string'"
                            :data="cdsWip"
                            :o_navfooter_visible="false"
                            :o_nav_visible="false"
                            :o_grid_responsive="true"
                          ></gridv2>
                        </div>
                        <div>
                          <gridv2
                            ref="gridDrawing4"
                            :o_showtitle="true"
                            :fields="fieldPaynoamt"
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
                          ></gridv2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-sm-4">
                    <b-card
                      no-body
                      v-if="show"
                    >
                      <div slot="header">
                        graph : % สัดส่วนปริมาณงานที่ "รอดำเนินการ" ในแต่ละกระบวนการ
                        <div class="card-header-actions"></div>
                      </div>
                      <b-collapse
                        id="collapse2A"
                        visible
                      >
                        <b-card-body>
                          <canvas
                            id="graph4"
                            width="180"
                            height="240"
                          ></canvas>
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
    <!-- 
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              table : ติดตามการจัดเบิกขั้นตอนการทำงาน
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse2A>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse2A" visible>
              <b-card-body>
                <b-row>
                  <div class="col-12 col-sm-8">
                    <b-card-body style="padding-top:0px; padding-bottom:0px;">
                      <b-row>
                        <div>
                          <input type="radio" name="con2" value="1" id="laravel2" />
                          <label class="labelx" for="laravel2">แสดงจำนวนใบเบิก</label>
                        </div>&nbsp;&nbsp;
                        <div>
                          <input type="radio" name="con2" value="2" id="yii1" checked="checked" />
                          <label class="labelx" for="yii1">แสดงปริมาณน้ำหนัก</label>
                        </div>&nbsp;&nbsp;
                        <div>
                          <input type="radio" name="con2" value="3" id="laravel3" />
                          <label class="labelx" for="laravel3">แสดงปริมาณตามหน่วยคลัง PC</label>
                        </div>&nbsp;&nbsp;
                        <div>
                          <input type="radio" name="con2" value="4" id="laravel4" />
                          <label class="labelx" for="laravel4">แสดงปริมาณตามหน่วยคลัง KG</label>
                        </div>&nbsp;&nbsp;
                      </b-row>
                    </b-card-body>

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
                      :o_footer_visible="false"
                    ></gridv2>
                  </div>

                  <div class="col-12 col-sm-4">
                    <b-card no-body v-if="show">
                      <div slot="header">
                        graph : % สัดส่วนที่รอดำเนินการตาม ขั้นตอนการทำงาน
                        <div class="card-header-actions"></div>
                      </div>
                      <b-collapse id="collapse2A" visible>
                        <b-card-body>
                          <canvas id="graph4" width="180" height="205"></canvas>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </b-row>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>-->

    <!-- <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              Table : ติดตามการจัดเบิกขั้นตอนการทำงาน
              <div class="card-header-actions">
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse3>
                  <i class="icon-arrow-up fa-sm" style="color:#c8ced3"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse3" visible>
              <b-card-body></b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row> -->

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
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import Chart from "chart.js";
import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";
//import 'chartjs-plugin-piechart-outlabels';
// import 'chartjs-plugin-labels';
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

var myChart2 = null;
var myChart3 = null;
var myChart4 = null;


export default {
  name: "forms",

  mounted () {

    this.FSidebarToggler = false;


    myChart2 = null;
    myChart3 = null;
    myChart4 = null;



    this.stdate_value = new Date();
    this.stdate_value_temp = new Date();




    this.QueryData();
  },









  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      name: "tpaysH",
      icon_visible: true,
      file_visible: false,


      fieldData: [],
      dataDrawing: [],

      iconcar6: false,
      iconcar12: false,
      iconcar18: false,
      iconcar24: false,
      iconcar30: false,
      iconcar36: false,
      iconcar42: false,




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




      fieldData: [
        {
          name: "col1string",
          title: "รหัส",
          sortField: "col1string",
          class: "text-left",
          visible: true,





          callback: v => {



            return "&nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp;  " + v;





          }
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



          callback: v => {
            return "&nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp;  " + v;
          }
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
          name: "col2string",
          title: "รายละเอียด",
          sortField: "col2string",
          class: "text-left",
          visible: true,

          footer: { type: null, value: 'รวม' },


          callback: v => {

            if (v == 'รวม') {
              return v;

            } else {
              return "&nbsp;&nbsp; <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp; " + v;

            }

          }


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


      fieldgridExall: [
        {
          name: "col2string",
          title: "กระบวนการ",
          sortField: "col2string",
          class: "text-left",
          width: 100,
          visible: true,
          footer: { type: null, value: 'รวม' },


          callback: v => {

            if (v == '1.รับเข้า') {
              return "<span style='color:rgba(115, 198, 182, 0.8)'>" + v + "</span>";
            } else if (v == '2.เบิกให้ลูกค้า') {
              return "<span style='color:rgba(55, 173, 221, 0.8)'>" + v + "</span>";
            } else if (v == '3.เบิกปรับปรุงออก') {
              return "<span style='color:rgba(217, 136, 128, 0.8)'>" + v + "</span>";


            } else {
              return v;

            }

          }



        },


        {
          name: "col3float",
          title: "ทั้งหมด (ห่อ)",
          sortField: "col5float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 0) != 0) {
              return '<span" > ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        },

        {
          name: "col6float",
          title: "ดำเนินการแล้ว",
          sortField: "col8float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
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
          sortField: "col11float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 2) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
            } else {
              '<span></span> '
            }
          }
        }

      ],






      fielddatapayex: [
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
          name: "col3float",
          title: "ทั้งหมด (ห่อ)",
          sortField: "col3float",
          class: "text-center",
          visible: true,
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 0) != 0) {
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
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 0) != 0) {
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
          footer: { type: aggregationTypes.sum, value: 0, decimal: 0 },
          callback: v => {
            if (this.$root.$options.filters.number(v, 0) != 0) {
              return '<span> ' + this.$root.$options.filters.number(v, 0) + ' </span> ';
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






      fieldgrid1: [
        {
          name: "col1string",
          title: "รหัส",
          sortField: "col1string",
          class: "text-left",
          visible: true,



          callback: v => {
            return "&nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp;  " + v;
          }
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

      dataDrawingTaskExall: [
        { col2string: "รับเข้า", col5float: 0, col8float: 0, col11float: 0 },
        { col2string: "เบิกให้ลูกค้า", col5float: 0, col8float: 0, col11float: 0 },
        { col2string: "เบิกปรับปรุงออก", col5float: 0, col8float: 0, col11float: 0 },


      ],

      dataDrawingTaskPay: [
        {
          processdesc: "ขอเบิกสินค้า",
          plan_amt: 30661.06,
          action_amt: 29895.36,
          wip_amt: 765.7,
          last_date: 14.23,
          complete: 97.5
        },
        {
          processdesc: "รอจัดเบิกสินค้า",
          plan_amt: 29895.36,
          action_amt: 24573.94,
          wip_amt: 5321.42,
          last_date: 16.23,
          complete: 82.2
        },
        {
          processdesc: "ระหว่างจัดเบิก",
          plan_amt: 24573.94,
          action_amt: 23024.79,
          wip_amt: 1549.15,
          last_date: 16.23,
          complete: 93.7
        },
        {
          processdesc: "เบิกเสร็จรอบรรจุ",
          plan_amt: 23024.79,
          action_amt: 16334.12,
          wip_amt: 6690.67,
          last_date: 16.23,
          complete: 70.94
        },
        {
          processdesc: "ระหว่างบรรจุ",
          plan_amt: 16334.12,
          action_amt: 0.0,
          wip_amt: 16334.12,
          last_date: 16.23,
          complete: 0.0
        }
      ],

      fieldDataTaskPay: [
        {
          name: "processdesc",
          title: "ขั้นตอนการทำงาน",
          sortField: "processdesc",
          class: "text-left",
          visible: true,
          width: 100,
          callback: v => {
            return "&nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp;  " + v;
          }
        },

        {
          name: "plan_amt",
          title: "ทั้งหมด",
          sortField: "plan_amt",
          class: "text-center",
          visible: true
        },

        {
          name: "action_amt",
          title: "ดำเนินการแล้ว",
          sortField: "action_amt",
          class: "text-center",
          visible: true
        },

        {
          name: "wip_amt",
          title: "รอดำเนินการ",
          sortField: "wip_amt",
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



      fieldDataTaskPayEx: [
        {
          name: "processdesc",
          title: "ลูกค้า",
          sortField: "processdesc",
          class: "text-left",
          visible: true,
          width: 100,
          callback: v => {
            return "&nbsp;&nbsp;  <i class='fa fa-stop' aria-hidden='true'></i> &nbsp;&nbsp;  " + v;
          }
        },

        {
          name: "plan_amt",
          title: "จำนวนทั้งหมด",
          sortField: "plan_amt",
          class: "text-center",
          visible: true,
          callback: v => {
            return this.$root.$options.filters.number(v, 2)
          }



        },

        {
          name: "action_amt",
          title: "ดำเนินการแล้ว",
          sortField: "action_amt",
          class: "text-center",
          visible: true
        },

        {
          name: "wip_amt",
          title: "ระหว่างดำเนินการ",
          sortField: "wip_amt",
          class: "text-center",
          visible: true
        },

        {
          name: "last_date",
          title: "ดำเนินการล่าสุด (เวลา)",
          sortField: "last_date",
          class: "text-center",
          visible: true
        },





        {
          name: "complete",
          title: "Complete",
          sortField: "complete",
          class: "text-center",
          visible: false,

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




      dataDrawingTask: [],


      // dataDrawingTask: [],

      //   {
      //     codedesc: "1.ลูกค้ามารับเอง",
      //     plan_amt: 1314.1,
      //     action_amt: 581.43,
      //     wip_amt: 732.67,
      //     last_date: "17.12",
      //     complete: 44.25,

      //   },
      //   {
      //     codedesc: "2.ส่งเอง",
      //     plan_amt: 779.3,
      //     action_amt: 400.22,
      //     wip_amt: 379.08,
      //     last_date: "17.22",
      //     complete: 51.36,

      //   },
      //   {
      //     codedesc: "3.รถ บขส.",
      //     plan_amt: 587.24,
      //     action_amt: 534.82,
      //     wip_amt: 52.42,
      //     last_date: "17.32",
      //     complete: 91.07,

      //   },
      //   {
      //     codedesc: "4.คลังฝาก",
      //     plan_amt: 0,
      //     action_amt: 0,
      //     wip_amt: 0,
      //     last_date: "17.34",
      //     complete: 0,

      //   },
      //   {
      //     codedesc: "5.รถบริษัทขนส่ง",
      //     plan_amt: 18539.92,
      //     action_amt: 11869.58,
      //     wip_amt: 6670.34,
      //     last_date: "17.43",
      //     complete: 66.53,

      //   }
      // ],


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



      fieldDrawing: [
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
        }
      ],
      dataDrawingAssetAll: [],
      dataDrawingAssetValueDom: {}
    };
  },
  methods: {

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



    click () {
      // do nothing
    },

    to_workloadstock () {
      this.$router.push("/report/workloadstock");
    },

    to_waitcreatebill () {
      this.$router.push("/report/waitcreatebill");
    },

    to_workreqpaystock () {
      this.$router.push("/report/workreqpaystock");
    },

    to_saleall () {
      this.$router.push("/report/reptsummarysale");
    },

    to_dashboard () {
      this.$router.push("/dashboard");
      //this.$router.push("/report/mdmAR/mdmAR")
    },
    to_Check () {
      this.$router.push("/asset/record");
    },
    to_rptCheck () {
      this.$router.push("/report/rptAssetChk");
    },
    to_rptSummary () {
      this.$router.push("/report/rptAssetChkSummary");
    },
    onSubmit (evt) {
      evt.preventDefault();
      window.location.href = "/member/signin";
    },


    showcdsexsumkou () {
      if (this.cdsexsumkou.col13string == "" || this.cdsexsumkou.col13string == undefined) {
        return "ไม่มี";
      }
      else {
        return this.cdsexsumkou.col13string + '%';
      }

    },


    showpercsaledm (v, x, s) {
      if (v == 0 || v == undefined) {
        return "ไม่มี" + s;
      }
      else {
        return x.toString() + ' %';
      }

    },

    showcdsexsumrec () {
      if (this.cdsexsumrec.col13string == "" || this.cdsexsumrec.col13string == undefined) {
        return "ไม่มี";
      }
      else {
        return this.cdsexsumrec.col13string + '%';
      }

    },

    showcdsexsumpay () {
      if (this.cdsexsumpay.col13string == "" || this.cdsexsumpay.col13string == undefined) {
        return "ไม่มี";
      }
      else {
        return this.cdsexsumpay.col13string + '%';
      }

    },

    cdssendcode01show () {

      this.titledetail = "ติดตามการงาน การเบิกสินค้าประเภท รถ.บริษัทขนส่ง (ปริมาณน้ำหนัก)";

      this.dataDrawing = [];


      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdssendcode01;

      this.$bvModal.show('modal-multi-data');


    },

    cdssendcode02show () {

      this.titledetail = "ติดตามการงาน การเบิกสินค้าประเภท รถ บขส. (ปริมาณน้ำหนัก)";

      this.dataDrawing = [];


      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdssendcode02;

      this.$bvModal.show('modal-multi-data');


    },

    cdssendcode04show () {

      this.titledetail = "ติดตามการงาน การเบิกสินค้าประเภท ส่งเอง (ปริมาณน้ำหนัก)";

      this.dataDrawing = [];


      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdssendcode04;

      this.$bvModal.show('modal-multi-data');


    },



    cdssendcode06show () {

      this.titledetail = "ติดตามการงาน การเบิกสินค้าประเภท ลูกค้ามารับเอง (ปริมาณน้ำหนัก)";

      this.dataDrawing = [];


      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdssendcode06;

      this.$bvModal.show('modal-multi-data');


    },

    cdssendcode97zoneshow () {

      this.titledetail = "ติดตามการงาน การเบิกสินค้าประเภท คลังฝาก (ปริมาณน้ำหนัก)";

      this.dataDrawing = [];


      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdssendcode97zone;

      this.$bvModal.show('modal-multi-data');


    },


    cdssendcodeexshow () {

      this.titledetail = "ติดตามการงานการเบิกสินค้า คลังขายต่างประเทศ";

      this.dataDrawing = [];


      this.fieldData = this.fielddatapayex;


      this.dataDrawing = this.cdssendcodeex;

      this.$bvModal.show('modal-multi-data');


    },






    setgrid1payno () {

      this.fieldgrid1 = this.fieldrecbc;
      this.$refs.gridDrawing1.reset();
      this.fieldgrid1 = this.fieldPaynoamt;
      this.$refs.gridDrawing1.reset();

    },


    setgrid1wei () {
      this.fieldgrid1 = this.fieldPaynoamt;
      this.$refs.gridDrawing1.reset();
      this.fieldgrid1 = this.fieldrecbc;
      this.$refs.gridDrawing1.reset();


    },
    cdssendcode97show () {



      this.titledetail = "ติดตามการงาน จัดเบิก-จัดเก็บ สินค้าเข้าคลังฝาก (จำนวนใบเบิก)";
      this.dataDrawing = [];
      this.fieldData = this.fieldPaynoamt;
      this.dataDrawing = this.cdssendcode97;


      this.$bvModal.show('modal-multi-data');


    },


    cdssendcodePCshow () {



      this.titledetail = "ติดตามการงาน จัดเบิกสินค้าเรียกคืนจากคลังฝาก (จำนวนใบเบิก)";
      this.dataDrawing = [];
      this.fieldData = this.fieldPaynoamt;
      this.dataDrawing = this.cdssendcodePC;


      this.$bvModal.show('modal-multi-data');


    },




    cdsrecbcshow () {

      this.titledetail = "ติดตามการงาน รับสินค้าเข้าคลังขายในประเทศ (ปริมาณน้ำหนัก)";

      this.dataDrawing = [];
      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdsrecbc;

      this.$bvModal.show('modal-multi-data');


    },





    cdsrecshelfbcshow () {

      this.titledetail = "ติดตามการงาน จัดเก็บสินค้าขึ้นชั้นวาง (ปริมาณน้ำหนัก)";
      this.dataDrawing = [];
      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdsrecshelfbc;

      this.$bvModal.show('modal-multi-data');


    },



    cdspay0sumshow () {

      this.titledetail = "ติดตามการงาน การเบิกสินค้า (ปริมาณน้ำหนัก)";
      this.dataDrawing = [];
      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdspay0;

      this.$bvModal.show('modal-multi-data');


    },



    cdspay1sumshow () {

      this.titledetail = "ติดตามการงาน การเบิกสินค้า (ปริมาณน้ำหนัก)";

      this.dataDrawing = [];

      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdspay1;

      this.$bvModal.show('modal-multi-data');


    },



    cdspayBsumshow () {
      this.titledetail = "ติดตามการงาน การเบิกสินค้า (ปริมาณน้ำหนัก)";
      this.dataDrawing = [];

      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdspayB;

      this.$bvModal.show('modal-multi-data');


    },



    cdspay5sumshow () {
      this.titledetail = "ติดตามการงาน การเบิกสินค้า (ปริมาณน้ำหนัก)";
      this.dataDrawing = [];

      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdspay5;

      this.$bvModal.show('modal-multi-data');


    },


    QueryData () {

      var dataDrawingGraph3 = [];
      var dataDrawingGraph4 = [];

      this.dataDS1 = [];
      this.setwork1 = [];
      this.datawork1 = [];

      this.setwork2 = [];
      this.datawork2 = [];

      this.setwork3 = [];
      this.datawork3 = [];


      this.setwork4 = [];
      this.datawork4 = [];

      this.setwork5 = [];
      this.datawork5 = [];

      this.setwork6 = [];
      this.datawork6 = [];


      this.cdsrecbc = [];
      this.cdsrecbcsum = {};
      this.setcdsrecbcsum = [];

      this.cdsrecshelfbc = [];
      this.cdsrecshelfbcsum = {};
      this.setcdsrecshelfbcsum = [];


      this.cdspay0 = [];
      this.cdspay0sum = {};
      this.setcdspay0sum = [];

      this.cdspay1 = [];
      this.cdspay1sum = {};
      this.setcdspay1sum = [];

      this.cdspayB = [];
      this.cdspayBsum = {};
      this.setcdspayBsum = [];

      this.cdspay5 = [];
      this.cdspay5sum = {};
      this.setcdspay5sum = [];

      this.cdsex = [];

      this.cdssendcodeex = [];
      this.cdsexsum = {};
      this.setcdsexsum = [];


      this.cdspayall = [];
      this.cdspayallsum = {};
      this.setcdspayallsum = [];

      this.cdssendcode = [];
      this.cdssendcodesum = {};
      this.setcdssendcodesum = [];

      this.cdssendcode2 = [];
      this.cdssendcodesum2 = {};
      this.setcdssendcodesum2 = [];




      this.cdssendcode01 = [];
      this.cdssendcode01sum = {};
      this.setcdssendcode01sum = [];




      this.cdssendcode02 = [];
      this.cdssendcode02sum = {};
      this.setcdssendcode02sum = [];



      this.cdssendcode04 = [];
      this.cdssendcode04sum = {};
      this.setcdssendcode04sum = [];


      this.cdssendcode06 = [];
      this.cdssendcode06sum = {};
      this.setcdssendcode06sum = [];



      this.cdssendcode97zone = [];
      this.cdssendcode97zonesum = {};
      this.setcdssendcode97zonesum = [];


      this.cdssendcode97 = [];
      this.cdssendcode97sum = {};
      this.setcdssendcode97sum = [];

      this.cdssendcodePC = [];
      this.cdssendcodePCsum = {};
      this.setcdssendcodePCsum = [];

      this.cdsWip = [];



      this.arrcdsWip = {};



      API.SearchDatagrid({
        data: {
          CODE: "DATARECALL",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },
        callblack: res => {
          res.forEach((d, i) => {

            if (res[i].col1string == "ZZ") {
              this.setcdsrecbcsum.push(d);
              this.cdsrecbcsum = this.setcdsrecbcsum[0];




            } else {
              this.cdsrecbc.push(d);
            }
          });
        }
      });



      API.SearchDatagrid({
        data: {

          CODE: "DATARECSHELFALL",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },
        callblack: res => {
          res.forEach((d, i) => {

            if (res[i].col1string == "ZZ") {
              this.setcdsrecshelfbcsum.push(d);
              this.cdsrecshelfbcsum = this.setcdsrecshelfbcsum[0];


            } else {
              this.cdsrecshelfbc.push(d);
            }
          });
        }
      });

      API.SearchDatagrid({
        data: {
          CODE: "DATAPAY0ALL",
          stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "",
          docno: ""
        },
        callblack: res => {

          this.setcdspay0sum = [];
          this.cdspay0 = [];
          this.cdspay0sum = [];

          res.forEach((d, i) => {

            if (res[i].col1string == "ZZ") {
              this.setcdspay0sum.push(d);
              this.cdspay0sum = this.setcdspay0sum[0];



            } else {
              this.cdspay0.push(d);
            }
          });
        }
      });

      API.SearchDatagrid({
        data: {
          CODE: "DATAPAY1ALL", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },

        callblack: res => {

          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {
              this.setcdspay1sum.push(d);
              this.cdspay1sum = this.setcdspay1sum[0];


            } else {
              this.cdspay1.push(d);
            }
          });
        }

      });


      API.SearchDatagrid({
        data: {
          CODE: "DATAPAYBALL", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {

          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {
              this.setcdspayBsum.push(d);
              this.cdspayBsum = this.setcdspayBsum[0];



            } else {
              this.cdspayB.push(d);
            }
          });
        }

      });


      API.SearchDatagrid({
        data: {
          CODE: "DATAPAY5ALL", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {
          this.cdspay5 = [];
          this.cdspay5sum = [];
          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {


              this.setcdspay5sum.push(d);
              this.cdspay5sum = this.setcdspay5sum[0];





            } else {
              this.cdspay5.push(d);
            }
          });
        }

      });


      API.SearchDatagrid({
        data: {
          CODE: "DSSALEEX", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {
          this.cdsex = [];


          this.cdsexsumrec = {};
          this.cdsexsumpay = {};
          this.cdsexsumkou = {};

          this.setcdsexsumrec = [];
          this.setcdsexsumpay = [];
          this.setcdsexsumkou = [];



          res.forEach((d, i) => {

            this.cdsex.push(d);

            if (res[i].col1string == "01") {

              this.setcdsexsumrec.push(d);
              this.cdsexsumrec = this.setcdsexsumrec[0];



            } else if (res[i].col1string == "02") {

              this.setcdsexsumpay.push(d);
              this.cdsexsumpay = this.setcdsexsumpay[0];

            } else if (res[i].col1string == "03") {

              this.setcdsexsumkou.push(d);
              this.cdsexsumkou = this.setcdsexsumkou[0];


            }


          });
        }

      });






      API.SearchDatagrid({
        data: {
          CODE: "DATAPAYALL", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {
          this.cdspayall = [];
          this.cdspayallsum = [];
          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {
              this.setcdspayallsum.push(d);
              this.cdspayallsum = this.setcdspayallsum[0];

            } else {
              this.cdspayall.push(d);
            }
          });
        }

      });



      var num = [];
      var num_A = [];
      var num_W = [];


      var num1 = 0.00;
      var num2 = 0.00;
      var num3 = 0.00;

      var labelGraph3 = []
      var bgGraph3 = []
      var dataGraph3 = []





      var labelGraph4 = []
      var bgGraph4 = []
      var dataGraph4 = []



      this.iconcar6 = false;
      this.iconcar12 = false;
      this.iconcar18 = false;
      this.iconcar24 = false;
      this.iconcar30 = false;
      this.iconcar36 = false;
      this.iconcar42 = false;
      this.totalpaycode = 0.00;


      API.SearchDatagrid({
        data: {
          CODE: "PAYSENDCODE", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },

        callblack: res => {


          this.num = [];
          this.num_A = [];
          this.num_W = [];

          this.labelGraph3 = [];
          this.dataGraph3 = [];

          this.bgGraph3 = [];

          this.dataDrawingTask = [];


          let sumvalue3 = 0.00;

          res.forEach((d, i) => {
            sumvalue3 += res[i].col5float;

          });

          sumvalue3 = sumvalue3.toFixed(2);






          res.forEach((d, i) => {
            this.dataDrawingTask.push(d);

            // this.labelGraph3.push(res[i].col2string);
            // this.bgGraph3.push(res[i].col6string);
            // this.dataGraph3.push(res[i].col5float);


            if (parseFloat(res[i].col5float) > 0) {
              this.dataGraph3.push(parseFloat(((parseFloat(res[i].col5float) / sumvalue3) * 100).toFixed(2)));
              this.labelGraph3.push(res[i].col2string);
              this.bgGraph3.push(res[i].col6string);

            }




            if (res[i].col1string == "01") {

              this.setcdssendcodesum.push(d);
              this.cdssendcodesum = this.setcdssendcodesum[0];

              if (res[i].col5float >= 0.00 && res[i].col5float <= 6000) {

                this.iconcar6 = true;


              } else if (res[i].col5float > 6000 && res[i].col5float <= 12000) {

                this.iconcar12 = true;

              } else if (res[i].col5float > 12000 && res[i].col5float <= 18000) {

                this.iconcar18 = true;


              } else if (res[i].col5float > 18000 && res[i].col5float <= 24000) {

                this.iconcar24 = true;


              } else if (res[i].col5float > 24000 && res[i].col5float <= 30000) {

                this.iconcar30 = true;

              } else if (res[i].col5float > 30000 && res[i].col5float <= 36000) {

                this.iconcar36 = true;

              } else if (res[i].col5float > 36000) {


                this.iconcar42 = true;

              }



            } else {


              this.setcdssendcodesum2.push(d);
              this.cdssendcodesum2 = this.setcdssendcodesum2[0];


              this.num.push(d.col3float);
              this.num_A.push(d.col6float);
              this.num_W.push(d.col9float);



              this.cdssendcode.push(d);


            }

            //    this.dataDrawingGraph3 = this.dataGraph3;



            var data3 = {
              labels: this.labelGraph3,
              datasets: [
                {
                  backgroundColor: this.bgGraph3,

                  //backgroundColor: ['#636363', '#4472c4', '#a5a5a5', '#5b9bd5', '#255e91'],


                  borderColor: ['rgba(192, 57, 43, 0.5)', 'rgba(212, 172, 13   , 0.5)', 'rgba(155, 89, 182 , 0.5)', 'rgba(23, 165, 137 , 0.5)', 'rgba(41, 128, 185  , 0.5)'],
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

                    let percentage = (value).toFixed(2) + "%";
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

              var ctx3 = document.getElementById("graph3").getContext("2d");
              myChart3 = new Chart(ctx3, {
                type: 'bar',
                data: data3,
                options: option3,

              });


            }




            var data2 = {


              labels: ["1.ลูกค้ามา รับเอง", "2.บริษัท ส่งออก", "3.รถ บขส.", "4.คลังฝาก", "5.ออนไลน์"],

              color: "#CACFD2",
              datasets: [
                {
                  backgroundColor: "rgba(67, 103, 140,1)",
                  borderColor: "rgba(67, 103, 140,1)",

                  label: "ท้้งหมด",


                  data: this.num
                },

                {
                  backgroundColor: "rgba(166, 172, 175 ,1)",
                  borderColor: "rgba(166, 172, 175 , 1)",
                  label: "ดำเนินการแล้ว",


                  data: this.num_A
                }
                ,

                {
                  backgroundColor: "rgba(217, 136, 128   ,1)",
                  borderColor: "rgba(217, 136, 128  , 1)",
                  label: "ดำเนินการแล้ว",


                  data: this.num_W
                }


              ]
            };

            var option2 = {
              responsive: true,
              maintainAspectRatio: false,
              tooltips: { enabled: false },


              legend: {
                display: false
              },

              scales: {
                yAxes: [
                  {
                    display: false,
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







                    gridLines: {
                      display: false
                    }




                  }
                ]
              },

              plugins: {


                datalabels: {
                  display: function (context) {
                    return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
                  },

                  //  formatter: Math.round,


                  position: 'outside',


                  color: function (context) {
                    return context.hovered ? "blue" : "gray";
                  },

                  clip: true,
                  color: "white",



                  //  formatter: function (value) {
                  //   return value.y;
                  // }
                }


              }
            };

            if (myChart2 !== null) {
              myChart2.data = data2;
              myChart2.update();
            } else {
              var ctx2 = document.getElementById("graph2").getContext("2d");
              myChart2 = new Chart(ctx2, {
                type: "bar",
                data: data2,
                options: option2,

              });
              myChart2.update();
            }














          });
        }





      });



      API.SearchDatagrid({
        data: {
          CODE: "DATAPAY5ALL", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },


        callblack: res => {
          this.cdspay5 = [];
          this.cdspay5sum = [];
          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {
              this.setcdspay5sum.push(d);
              this.cdspay5sum = this.setcdspay5sum[0];
            } else {
              this.cdspay5.push(d);
            }
          });
        }

      });


      API.SearchDatagrid({
        data: {
          CODE: "PAYSENDCODE01", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },
        callblack: res => {
          res.forEach((d, i) => {
            this.cdssendcode01.push(d);
          });
        }

      });



      API.SearchDatagrid({
        data: {
          CODE: "PAYSENDCODE02", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },
        callblack: res => {
          res.forEach((d, i) => {
            this.cdssendcode02.push(d);
          });
        }

      });


      API.SearchDatagrid({
        data: {
          CODE: "PAYSENDCODE04", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },
        callblack: res => {
          res.forEach((d, i) => {
            this.cdssendcode04.push(d);
          });
        }

      });

      API.SearchDatagrid({
        data: {
          CODE: "PAYSALEEX", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },
        callblack: res => {


          this.cdssendcodeex = [];


          res.forEach((d, i) => {
            this.cdssendcodeex.push(d);
          });
        }

      });




      API.SearchDatagrid({
        data: {
          CODE: "PAYSENDCODE06", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },
        callblack: res => {
          res.forEach((d, i) => {
            this.cdssendcode06.push(d);
          });
        }

      });


      API.SearchDatagrid({
        data: {
          CODE: "PAYSENDCODE97ZONE", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },
        callblack: res => {
          res.forEach((d, i) => {
            this.cdssendcode97zone.push(d);
          });
        }

      });



      API.SearchDatagrid({
        data: {
          CODE: "DATAWIP", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },
        callblack: res => {

          this.dataGraph4 = [];
          this.bgGraph4 = [];
          this.labelGraph4 = [];

          let sumvalue = 0.00;

          res.forEach((d, i) => {
            sumvalue += res[i].col11float;

          });

          sumvalue = sumvalue.toFixed(2);



          res.forEach((d, i) => {



            if (parseFloat(res[i].col11float) > 0) {
              this.dataGraph4.push(parseFloat(((parseFloat(res[i].col11float) / sumvalue) * 100).toFixed(2)));
              this.labelGraph4.push(res[i].col2string);
              this.bgGraph4.push(res[i].col6string);

            }




            this.cdsWip.push(d);

          });




          var data4 = {
            labels: this.labelGraph4,

            datasets: [
              {
                backgroundColor: this.bgGraph4,

                borderColor: ['rgba(192, 57, 43, 0.5)', 'rgba(212, 172, 13   , 0.5)', 'rgba(155, 89, 182 , 0.5)'
                  , 'rgba(23, 165, 137 , 0.5)', 'rgba(41, 128, 185  , 0.5)', 'rgba(118, 68, 138 ,0.5)'],
                borderWidth: 0,



                data: this.dataGraph4,
              }
            ]
          };






          var option4 = {
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

                  let percentage = (value).toFixed(2) + "%";
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




          if (myChart4 !== null) {

            myChart4.data = data4;
            myChart4.update();
          } else {

            var ctx4 = document.getElementById("graph4").getContext("2d");
            myChart4 = new Chart(ctx4, {
              type: 'bar',
              data: data4,
              options: option4
            });

          }



        }

      });





      API.SearchDatagrid({
        data: {
          CODE: "PAYSENDCODE97", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },

        callblack: res => {
          this.cdssendcode97 = [];
          this.cdssendcode97sum = [];
          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {
              this.setcdssendcode97sum.push(d);
              this.cdssendcode97sum = this.setcdssendcode97sum[0];
            } else {
              this.cdssendcode97.push(d);
            }
          });
        }

      });


      API.SearchDatagrid({
        data: {
          CODE: "PAYSENDCODEPC", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
          storeno: "", docno: ""
        },

        callblack: res => {
          this.cdssendcodePC = [];
          this.cdssendcodePCsum = [];
          res.forEach((d, i) => {
            if (res[i].col1string == "ZZ") {
              this.setcdssendcodePCsum.push(d);
              this.cdssendcodePCsum = this.setcdssendcodePCsum[0];
            } else {
              this.cdssendcodePC.push(d);
            }
          });
        }


      });









      // this.setgrid1payno();









      // var marksCanvas = document.getElementById("marksChart").getContext("2d");

      // var marksData = {
      //   labels: [
      //     "English",
      //     "Maths",
      //     "Physics",
      //     "Chemistry",
      //     "Biology",
      //     "History"
      //   ],
      //   datasets: [
      //     {
      //       label: "Student A",
      //       backgroundColor: "rgba(200,0,0,0.2)",
      //       data: [65, 75, 70, 80, 60, 80]
      //     },
      //     {
      //       label: "Student B",
      //       backgroundColor: "rgba(0,0,200,0.2)",
      //       data: [54, 65, 60, 70, 70, 75]
      //     }
      //   ]
      // };

      //   var radarChart = new Chart(marksCanvas, {
      //     type: "radar",
      //     data: marksData
      //   });





    },




    async deleteSuccess () {
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
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },

    handleSubmit () {


      this.stdate_value = this.stdate_value_temp;



      this.QueryData();



      this.$nextTick(() => {
        this.$bvModal.hide('modal-multi-F1')
      })


    },


    showdate_con () {

      return this.formatDate(this.stdate_value);

    },


    formatDate (strdate) {
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
