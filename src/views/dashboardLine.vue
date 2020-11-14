<template>
  <div
    class="animated fadeIn container-fluid"
    style="max-width: 1200px;"
  >
    <table
      ref="printDM"
      id="printDM"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="border:0px;"
    >
      <tr>
        <td valign="middle">
          <span style="float: left;padding-bottom:10px;">
            <img
              src="img/kkf/asset.png"
              height="50px"
              alt="saledm"
            >

          </span>

          <span style="float: right;padding-right:50px;vertical-align: text-bottom;;padding-top:10px;">
            <H6> สรุป %ความคืบหน้าการเบิกสินค้าประจำวัน คลังในประเทศ และ ติดตามข้อมูลใบเบิกรอส่งคลัง </H6> &nbsp;&nbsp;
            <i
              class="icon icon-clock"
              style="color:#C89727"
            ></i>
            {{ this.currentDT() }}

            &nbsp;&nbsp;
            <i
              class="icon icon-trophy"
              style="color:#C89727"
            ></i>
            ความคืบหน้า :
            <b>{{ this.progressDM }}</b>

          </span>

        </td>
      </tr>
      <tr>
        <td valign="middle">
          <b-container
            fluid
            class="mt-3"
          >
            <b-row>
              <b-col lg="12">
                <transition name="fade">
                  <b-card
                    no-body
                    v-if="show"
                  >
                    <div slot="header">
                      <!--<canvas
                      id="cv_showsend_con"
                      width="350"
                      height="25"
                    ></canvas>-->
                      <img :src="img_showsend_con">
                      <!--ต ิดตามงานจ ัดเบ ิกตามประเภทจ ัดส ่ง (ใบเบ ิก)-->
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
                      <b-card-body style="height: 470px; padding-left: 1px; padding-right: 1px;">
                        <div style="width: 100%; display: inline-block; vertical-align: top; ">
                          <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            align="center"
                            class="hover truck"
                            lang="x-truck"
                            style="border:0px;"
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
                                    <span style="color:#D6DBDF">
                                      <img :src="img_cdssendcode01show">
                                      <!--  5.รถ.บร ิษ ัทขนส ่ง&nbsp;-->
                                    </span>
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
                                style="border:0px;color:#293949;"
                              >
                                <b-button variant="secondary">
                                  {{cdssendcodesum.col5float|number(0)}}&nbsp;
                                  <small style="font-size:11px;">กก.</small>

                                  <br />
                                  <!--<canvas
                                  id="cv_cdssendcodesumcol5"
                                  width="120"
                                  height="20"
                                ></canvas>-->
                                  <img :src="img_cdssendcodesumcol5">
                                  <!--  <small style="font-size:11px;">(ปร ิมาณเบ ิกท ั ้งหมด)</small> -->
                                </b-button>&nbsp;
                                <b-button variant="success">
                                  {{cdssendcodesum.col8float|number(0)}}&nbsp;
                                  <small style="font-size:11px;">กก.</small>
                                  <br />
                                  <!--<canvas
                                  id="cv_cdssendcodesumcol8"
                                  width="120"
                                  height="20"
                                ></canvas>-->
                                  <img :src="img_cdssendcodesumcol8">
                                  <!--<small style="font-size:11px;">(ด ำเน ินการแล ้ว)</small>-->
                                </b-button>&nbsp;
                                <b-button variant="danger">
                                  {{cdssendcodesum.col11float|number(0)}}&nbsp;
                                  <small style="font-size:11px;">กก.</small>
                                  <br />
                                  <!--<canvas
                                  id="cv_cdssendcodesumcol11"
                                  width="120"
                                  height="20"
                                ></canvas>-->
                                  <img :src="img_cdssendcodesumcol11">
                                  <!--  <small style="font-size:11px;">(รอด ำเน ินการ)</small> -->
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
                          <span style="display:block;align:center;">
                            <br>
                            &nbsp;&nbsp;
                            <i
                              class="fa fa-stop"
                              aria-hidden="true"
                              style="color:rgba(67,103,140,1)"
                            ></i>
                            <!--<canvas
                          id="cv_total"
                          width="80"
                          height="25"
                        ></canvas>-->
                            <img :src="img_total">
                            <!-- &nbsp;ใบท ั ้งหมด&nbsp;-->
                            <i
                              class="fa fa-stop"
                              aria-hidden="true"
                              style="color:rgba(166, 172, 175 , 1)"
                            ></i>
                            <!--<canvas
                          id="cv_done"
                          width="100"
                          height="25"
                        ></canvas>-->
                            <img :src="img_done">
                            <!--&nbsp;ด ำเน ินการแล ้ว&nbsp;-->
                            <i
                              class="fa fa-stop"
                              aria-hidden="true"
                              style="color:rgba(217,136,128,1)"
                            ></i>
                            <!--<canvas
                          id="cv_remain"
                          width="80"
                          height="25"
                        ></canvas>-->
                            <img :src="img_remain">

                            <!-- &nbsp;คงเหล ือ-->

                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <i
                              class="fa fa-truck truck6-icon"
                              aria-hidden="true"
                            > </i>
                            <!--<canvas
                          id="cv_car6"
                          width="40"
                          height="25"
                        ></canvas>-->
                            <img :src="img_car6">
                            <!-- 6ล ้อ -->

                            &nbsp;&nbsp;
                            <i
                              class="fa fa-truck truck10-icon"
                              aria-hidden="true"
                            > </i>
                            <!--<canvas
                          id="cv_car10"
                          width="40"
                          height="25"
                        ></canvas>-->
                            <img :src="img_car10">
                            <!--10ล ้อ-->

                            <br />
                          </span>

                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </transition>
              </b-col>

              <b-col lg="12">
                <transition name="fade">
                  <b-card
                    no-body
                    v-if="show"
                  >
                    <div slot="header">
                      <img :src="img_showsendpay_con">
                    </div>

                    <br>

                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th><img :src="img_dm_docno"></th>
                            <th><img :src="img_dm_docname"></th>
                            <th><img :src="img_dm_total"></th>
                            <th><img :src="img_dm_done"></th>
                            <th><img :src="img_dm_wait"></th>
                            <th><img :src="img_dm_last"></th>
                            <th><img :src="img_dm_progress"></th>
                          </tr>
                        </thead>
                        <tbody v-if="this.cdspay0">
                          <tr
                            v-for="(item, rindex) in this.cdspay0"
                            :prop="item"
                            :key="item.col2string"
                          >
                            <td>
                              {{item.col1string}}
                            </td>
                            <td>
                              <img :src="cv_col2string1_title(item.col2string)">
                            </td>
                            <td align="right">{{item.col5float | number(2)}}</td>
                            <td align="right">{{item.col8float | number(2)}}</td>
                            <td align="right">{{item.col11float | number(2)}}</td>
                            <td align="center">
                              {{item.col5string}}
                            </td>
                            <td>
                              <b-progress
                                class="progress-lg"
                                :value="item.col1float"
                                :variant="progressColor(item.col1float)"
                                show-value
                              >
                              </b-progress>
                            </td>

                          </tr>

                        </tbody>
                        <tfoot>
                          <tr>
                            <td
                              align="center"
                              colspan="2"
                            ><img :src="img_sum"></td>
                            <td align="right">{{ totalCol5float | number(2) }}</td>
                            <td align="right">{{ totalCol8float | number(2) }}</td>
                            <td align="right">{{ totalCol11float | number(2) }}</td>
                            <td></td>
                            <td></td>
                          </tr>

                        </tfoot>
                      </table>

                    </div>

                  </b-card>
                </transition>
              </b-col>
            </b-row>

          </b-container>
        </td>
      </tr>

    </table>

    <br>

    <table
      ref="printEx"
      id="printEx"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="border:0px;"
    >
      <tr>
        <td valign="middle">
          <span style="float: left;padding-bottom:10px;">
            <img
              src="img/kkf/asset.png"
              height="50px"
              alt="saleex"
            >

          </span>

          <span style="float: right;padding-right:50px;vertical-align: text-bottom;padding-top:10px;">
            <H6> สรุปข้อมูลเพื่อติดตามงานจัดเก็บและจัดเบิกสินค้า และ สรุป %ความคืบหน้างานจัดเบิกสินค้าประจำวัน คลังต่างประเทศ </H6> &nbsp;&nbsp;
            <i
              class="icon icon-clock"
              style="color:#C89727"
            ></i>
            {{ this.currentDT() }}

            &nbsp;&nbsp;
            <i
              class="icon icon-trophy"
              style="color:#C89727"
            ></i>
            ความคืบหน้า :
            <b>{{ this.progressEX }}</b>

          </span>

        </td>
      </tr>
      <tr>
        <td valign="middle">
          <b-container
            fluid
            class="mt-3"
          >
            <b-row>
              <b-col lg="12">
                <transition name="fade">
                  <b-card
                    no-body
                    v-if="show"
                  >
                    <div slot="header">
                      <img :src="img_showsaleex_con">
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
                      <b-card-body>
                        <b-card-group deck>
                          <b-card>
                            <canvas
                              id="cdsexsumrecChart1"
                              style="max-height: 20rem;max-width: 20rem;"
                            ></canvas>

                            <b-card-text>
                              <img :src="img_recv_cus">
                              <!-- 1. ร ับส ินค ้าเข ้าคล ัง -->

                            </b-card-text>
                          </b-card>

                          <b-card>
                            <canvas
                              id="cdsexsumpayChart1"
                              style="max-height: 20rem;max-width: 20rem;"
                            ></canvas>
                            <b-card-text>
                              <img :src="img_pick_saleex">
                              <!--  2. เบ ิกให ้ล ูกค ้า (ส ่งออก) -->
                            </b-card-text>
                          </b-card>

                          <b-card>
                            <canvas
                              id="cdsexsumkouChart1"
                              style="max-height: 20rem;max-width: 20rem;"
                            ></canvas>
                            <b-card-text>
                              <img :src="img_kou_saleex">
                              <!-- 3.ปร ับปร ุงออก (KOU) -->
                            </b-card-text>
                          </b-card>

                        </b-card-group>

                        <b-row>
                          <b-col sm="12">
                            <br>
                            <div class="table-responsive">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th>
                                      <!--กระบวนการ -->
                                      <img :src="img_process_saleex">
                                    </th>
                                    <th>
                                      <!--ทั้งหมด (ห่อ)-->
                                      <img :src="img_total_saleex">

                                    </th>
                                    <th>
                                      <!--ดำเนินการแล้ว-->
                                      <img :src="img_done_saleex">
                                    </th>
                                    <th>
                                      <!--รอดำเนินการ-->
                                      <img :src="img_wait_saleex">
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, rindex) in cdsex"
                                    :prop="item"
                                    :key="item.col2string"
                                  >
                                    <td>
                                      <template v-if="(rindex + 1) == 1">

                                        <img :src="img_col2string1_saleex">

                                      </template>

                                      <template v-else-if="(rindex + 1) == 2">

                                        <img :src="img_col2string2_saleex">

                                      </template>

                                      <template v-else-if="(rindex + 1) == 3">

                                        <img :src="img_col2string3_saleex">

                                      </template>

                                    </td>
                                    <td align="right">{{item.col3float | number}}</td>
                                    <td align="right">{{item.col6float | number}}</td>
                                    <td align="right">{{item.col9float | number}}</td>
                                  </tr>

                                </tbody>
                                <tfoot>
                                  <tr class="total">
                                    <td align="center">
                                      <!--รวม-->

                                      <img :src="img_sum_saleex">

                                    </td>
                                    <td align="right">{{ totalCol3float | number }}</td>
                                    <td align="right">{{ totalCol6float | number }}</td>
                                    <td align="right">{{ totalCol9float | number }}</td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                            <br><br>
                          </b-col>
                        </b-row>
                      </b-card-body>

                    </b-collapse>

                  </b-card>

                </transition>
              </b-col>
              <b-col lg="12">
                <transition name="fade">
                  <b-card
                    no-body
                    v-if="show"
                  >
                    <div slot="header">
                      <img :src="img_showsendpayex_con">
                    </div>

                    <br>

                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th><img :src="img_dm_docno"></th>
                            <th><img :src="img_dm_docname"></th>
                            <th><img :src="img_dm_total"></th>
                            <th><img :src="img_dm_done"></th>
                            <th><img :src="img_dm_wait"></th>
                            <th><img :src="img_dm_progress"></th>
                          </tr>
                        </thead>
                        <tbody v-if="this.cdssendcodeex">
                          <tr
                            v-for="(item, rindex) in this.cdssendcodeex"
                            :prop="item"
                            :key="item.col2string"
                          >
                            <td>
                              {{item.col1string}}
                            </td>
                            <td>
                              <img :src="cv_col2string1_title(item.col2string)">
                            </td>
                            <td align="right">{{item.col3float | number(2)}}</td>
                            <td align="right">{{item.col6float | number(2)}}</td>
                            <td align="right">{{item.col9float | number(2)}}</td>

                            <td>
                              <b-progress
                                class="progress-lg"
                                :value="item.col1float"
                                :variant="progressColor(item.col1float)"
                                show-value
                              >
                              </b-progress>
                            </td>

                          </tr>

                        </tbody>
                        <tfoot>
                          <tr>
                            <td
                              align="center"
                              colspan="2"
                            ><img :src="img_sum"></td>
                            <td align="right">{{ totalCol3floatEx | number(2) }}</td>
                            <td align="right">{{ totalCol6floatEx | number(2) }}</td>
                            <td align="right">{{ totalCol9floatEx | number(2) }}</td>
                            <td></td>
                          </tr>

                        </tfoot>
                      </table>

                    </div>

                  </b-card>
                </transition>
              </b-col>

            </b-row>
          </b-container>

        </td>
      </tr>

    </table>

  </div>
</template>


<script>
import Vue from "vue";
import Chart from "chart.js";
import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";
//import 'chartjs-plugin-piechart-outlabels';
// import 'chartjs-plugin-labels';
import {
  API, TimeDelay, uploadPath
  , LineTokenTest, LineTokenCo, LineTokenAuto, LineTokenDoc, LineTokenDMReturn, LineTokenEXReturn
  , LineTokenSaleDM, LineTokenSaleEx
  , stickerPackageId, stickerId, stickerPackageIdST, stickerIdST, stickerPackageIdEN, stickerIdEN
} from "@/shared/core";
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

import html2canvas from 'html2canvas';

import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');

var myChart2 = null;
var myChart3 = null;
var myChart4 = null;

export default {
  name: "dashboard",

  created: function () {
    const self = this;
    setInterval(self.timer, 1000);
    console.log('created');

    this.FSidebarToggler = false;


    myChart2 = null;
    myChart3 = null;
    myChart4 = null;



    this.stdate_value = new Date();
    this.stdate_value_temp = new Date();

    setInterval(() => { this.currentDT() }, 1000)

  },

  mounted () {
    console.log('mounted')

    Chart.Chart.pluginService.register({
      beforeDraw: function (chart) {
        if (chart.config.options.elements.center !== null &&
          typeof chart.config.options.elements.center !== 'undefined' &&
          chart.config.options.elements.center.text) {
          //this.drawTotals(chart);

          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
          ctx.restore();
          var fontSize = (height / 90).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#ffffff";
          var text = chart.config.options.elements.center.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();



        }
      },
    });

    let TimeDelay1 = 30000;
    this.load();
    this.timer = setInterval(() => {
      console.log('timer...')
      this.load()
    }, TimeDelay) // TimeDelay



  },

  computed: {
    totalCol3float () {
      return this.cdsex.reduce((acc, cur) => acc + Number(cur.col3float), 0);
    },

    totalCol6float () {
      return this.cdsex.reduce((acc, cur) => acc + Number(cur.col6float), 0);
    },

    totalCol9float () {
      return this.cdsex.reduce((acc, cur) => acc + Number(cur.col9float), 0);
    },

    totalCol5float () {
      return this.cdspay0.reduce((acc, cur) => acc + Number(cur.col5float), 0);
    },

    totalCol8float () {
      return this.cdspay0.reduce((acc, cur) => acc + Number(cur.col8float), 0);
    },

    totalCol11float () {
      return this.cdspay0.reduce((acc, cur) => acc + Number(cur.col11float), 0);
    },

    totalCol3floatEx () {
      return this.cdssendcodeex.reduce((acc, cur) => acc + Number(cur.col3float), 0);
    },

    totalCol6floatEx () {
      return this.cdssendcodeex.reduce((acc, cur) => acc + Number(cur.col6float), 0);
    },

    totalCol9floatEx () {
      return this.cdssendcodeex.reduce((acc, cur) => acc + Number(cur.col9float), 0);
    },



  },

  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      name: "tpaysH",
      icon_visible: true,
      file_visible: false,

      progressDM: null,
      progressEX: null,

      LineStickerPackageId: null,
      LineStickerId: null,

      SaleDMStickerPackageId: null,
      SaleDMStickerId: null,

      SaleEXStickerPackageId: null,
      SaleEXStickerId: null,


      font_color: '#D6DBDF',

      img_col2string1_saleex: null,
      img_col2string2_saleex: null,
      img_col2string3_saleex: null,

      workCompleted: false,
      SaleDMCompleted: false,
      SaleExCompleted: false,

      img_showsend_con: null,
      img_showsendpay_con: null,
      img_showsendpayex_con: null,


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

      fieldData: [],
      dataDrawing: [],

      img_cdssendcode01show: null,
      img_cdssendcodesumcol5: null,
      img_cdssendcodesumcol8: null,
      img_cdssendcodesumcol11: null,
      img_total: null,
      img_done: null,
      img_remain: null,
      img_car6: null,
      img_car10: null,
      img_showprogress_con: null,
      img_receive_con: null,
      img_cdsrecbcsumcol3_no: null,
      img_pick_con: null,
      img_cdsrecshelfbcsumcol3_no: null,
      img_bring_con: null,
      img_cdspayallsumcol3_no: null,
      img_pack_con: null,
      img_cdspay5sumcol3_no: null,
      img_customer_con: null,
      img_cdssendcode97sumcol3_no: null,
      img_return_con: null,
      img_cdssendcodePCsumcol3_no: null,
      img_showsaleex_con: null,
      img_recv_cus: null,
      img_pick_saleex: null,
      img_kou_saleex: null,
      img_process_saleex: null,
      img_total_saleex: null,
      img_done_saleex: null,
      img_wait_saleex: null,
      img_sum_saleex: null,
      img_showdate_con: null,

      cdssendcode: [],
      cdssendcodesum: {},
      setcdssendcodesum: [],

      img_sum: null,

      img_dm_docno: null,
      img_dm_docname: null,
      img_dm_total: null,
      img_dm_done: null,
      img_dm_wait: null,
      img_dm_last: null,
      img_dm_progress: null,

      cdspay0: [],
      cdspay0sum: {},
      setcdspay0sum: [],

      cdsex: [],
      cdssendcodeex: [],

      cdsexsumrec: {},
      cdsexsumpay: {},
      cdsexsumkou: {},

      setcdsexsumrec: [],
      setcdsexsumpay: [],
      setcdsexsumkou: [],

    }
  },

  methods: {
    currentDT () {
      var today = new Date();
      var date = this.addZero(today.getDate()) + '/' + this.addZero((today.getMonth() + 1)) + '/' + this.addZero(today.getFullYear());
      var time = this.addZero(today.getHours()) + ":" + this.addZero(today.getMinutes()); //+ ":" + this.addZero(today.getSeconds());
      var dateTime = date + ' ' + time;
      return dateTime;

    },

    addZero (i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },

    load () {
      this.renderCanvasDelivery();
      this.QueryData();

    },

    async QueryData () {
      this.clearRender();

      this.loadDM();

      this.loadEx();

    },

    async loadDM () {
      await this.PAYSENDCODE();
      await this.DATAPAY0ALL();

      //await this.renderCanvasDM();
      this.sleep(5000).then(() => { this.renderCanvasDM() });

      await this.workSaleDM();

    },

    async loadEx () {
      await this.DSSALEEX();
      await this.PAYSALEEX();

      //await this.renderCanvasEx();
      this.sleep(5000).then(() => { this.renderCanvasEx() });

      await this.workSaleEx();



    },

    getImgCanvas (div, resize) {
      return new Promise(resolve => {
        var scaleBy = 1;

        var rect = div.getBoundingClientRect();

        var canvas = document.createElement("canvas");
        canvas.width = rect.width * resize;
        canvas.height = rect.height * resize;

        var ctx = canvas.getContext("2d");
        ctx.translate(-rect.left, -rect.top);

        html2canvas(
          div,
          {
            canvas: canvas,
            useCORS: true,
            allowTaint: true,
            letterRendering: true,
            scale: scaleBy,
          }
        ).then(
          function (canvas) {
            var ctx = canvas.getContext('2d');
            ctx.webkitImageSmoothingEnabled = false;
            ctx.mozImageSmoothingEnabled = false;
            ctx.imageSmoothingEnabled = false;
            resolve(canvas);
          }
        );
      });

    },

    sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    captureDM () {
      this.sleep(10000).then(() => { this.captureScreenDM(); });

    },

    captureEx () {
      this.sleep(30000).then(() => { this.captureScreenEx(); });

    },

    LineNotify (msg, imgThumbURL, imgFullURL, token, StickerPackageId, StickerId) {
      return new Promise((resolve, reject) => {
        API.NotifyPushMessage({
          data: {
            type: 'image',
            message: msg,
            stickerPackageId: StickerPackageId,
            stickerId: StickerId,
            imageThumbnail: imgThumbURL,
            imageFullsize: imgFullURL,
            token: token,
          },
          callblack: res => {
            console.log(res);

            resolve(msg);


          }
        });

      });

    },

    uploadCapture (base64URL) {
      var imgPath = '';
      return new Promise((resolve, reject) => {
        API.uploadCamera({
          data: {
            IMGPATH: base64URL
          },
          callblack: res => {
            //console.log(res);
            if (res != null) {
              imgPath = res.path;
            }
            resolve(imgPath);


          }
        });

      });

    },

    getImageURL (imgPath) {
      return new Promise((resolve, reject) => {
        if (imgPath != null && imgPath.length > 0) {
          API.GetImage({
            data: {
              fullpath: imgPath
            },
            callblack: res => {
              //console.log(res)
              resolve(res)
            }
          });
        }
      });

    },


    async captureScreen (div) {
      let imgURL = '';
      var canvas = null;
      canvas = await this.getImgCanvas(div, 1);
      let scrBase64 = canvas.toDataURL('image/png');
      let imgPath = await this.uploadCapture(scrBase64);
      imgURL = uploadPath + imgPath;
      return imgURL;

    },

    async captureScreenDM () {
      var div = document.querySelector('#printDM');
      //let imgURL = this.captureScreen(div);
      var canvasThumb = null;
      var canvasFull = null;
      canvasThumb = await this.getImgCanvas(div, 0.9);
      canvasFull = await this.getImgCanvas(div, 0.5);
      let scrThumbBase64 = canvasThumb.toDataURL('image/png');
      let scrFullBase64 = canvasFull.toDataURL('image/png');
      let imgThumbPath = await this.uploadCapture(scrThumbBase64);
      let imgFullPath = await this.uploadCapture(scrFullBase64);
      let imgThumbURL = uploadPath + imgThumbPath;
      let imgFullURL = uploadPath + imgFullPath;

      let msg = 'สรุป %ความคืบหน้าการเบิกสินค้าประจำวัน คลังในประเทศ และ ติดตามข้อมูลใบเบิกรอส่งคลัง  ';
      msg += ' \r\n' + this.currentDT() + 'น.';
      msg = msg + ' \r\n' + 'ความคืบหน้า : คลังในประเทศ ' + this.progressDM + '%';

      //this.LineNotify(msg, imgThumbURL, imgFullURL, LineTokenDoc, this.SaleDMStickerPackageId, this.SaleDMStickerId);

      this.LineNotify(msg, imgThumbURL, imgFullURL, LineTokenTest, this.SaleDMStickerPackageId, this.SaleDMStickerId);
      this.LineNotify(msg, imgThumbURL, imgFullURL, LineTokenSaleDM, this.SaleDMStickerPackageId, this.SaleDMStickerId);


    },

    async captureScreenEx () {
      var div = document.querySelector('#printEx');
      //let imgURL = this.captureScreen(div);
      var canvasThumb = null;
      var canvasFull = null;
      canvasThumb = await this.getImgCanvas(div, 0.9);
      canvasFull = await this.getImgCanvas(div, 0.5);
      let scrThumbBase64 = canvasThumb.toDataURL('image/png');
      let scrFullBase64 = canvasFull.toDataURL('image/png');
      let imgThumbPath = await this.uploadCapture(scrThumbBase64);
      let imgFullPath = await this.uploadCapture(scrFullBase64);
      let imgThumbURL = uploadPath + imgThumbPath;
      let imgFullURL = uploadPath + imgFullPath;


      let msg = 'สรุปข้อมูลเพื่อติดตามงานจัดเก็บและจัดเบิกสินค้า และ สรุป %ความคืบหน้างานจัดเบิกสินค้าประจำวัน คลังต่างประเทศ  ';
      msg += ' \r\n' + this.currentDT() + 'น.';
      msg = msg + ' \r\n' + 'ความคืบหน้า : คลังต่างประเทศ ' + this.progressEX + '%';

      //this.LineNotify(msg, imgThumbURL, imgFullURL, LineTokenDoc, this.SaleEXStickerPackageId, this.SaleEXStickerId);
      this.LineNotify(msg, imgThumbURL, imgFullURL, LineTokenTest, this.SaleEXStickerPackageId, this.SaleEXStickerId);
      this.LineNotify(msg, imgThumbURL, imgFullURL, LineTokenSaleEx, this.SaleEXStickerPackageId, this.SaleEXStickerId);

    },

    async workSaleDM () {
      await this.validWorkDM();
      this.sleep(5000).then(() => {
        console.log('Wait...', this.SaleDMCompleted);
        if (!this.SaleDMCompleted) {
          this.captureDM();
        } else {
          if (this.isWorkDMDate() == 0) {

            //Already Completed Day.
            //this.captureDM(); // Test

          } else if (this.isWorkDMDate() == 1) {
            //Completed new Date.
            this.resetSaleDMDate();
            this.captureDM();
            this.setSaleDMDate();
          } else {
            //Completed Day.
            this.captureDM();
            this.setSaleDMDate();

          }

        }

        if (this.validSaleDMDate() == 1) {
          this.resetSaleDMDate();

        }

      });


    },

    async workSaleEx () {
      await this.validWorkEX();
      this.sleep(5000).then(() => {
        console.log('Wait...', this.SaleExCompleted);
        if (!this.SaleExCompleted) {
          this.captureEx();
        } else {
          if (this.isWorkExDate() == 0) {

            //Already Completed Day.
            //this.captureEx(); // Test

          } else if (this.isWorkExDate() == 1) {
            //Completed new Date.
            this.resetSaleExDate();
            this.captureEx();
            this.setSaleExDate();
          } else {
            //Completed Day.
            this.captureEx();
            this.setSaleExDate();

          }

        }

        if (this.validSaleExDate() == 1) {
          this.resetSaleExDate();

        }

      });


    },

    validWorkDM () {
      return new Promise(resolve => {
        var nDM = 0;
        var totalDM = 0;


        var avgDM = (this.totalCol8float / this.totalCol5float) * 100;
        this.progressDM = parseFloat(avgDM).toFixed(2);

        if (parseFloat(this.progressDM) == 100) {
          this.SaleDMStickerPackageId = stickerPackageId;
          this.SaleDMStickerId = stickerId;
          this.SaleDMCompleted = true;
        } else {
          this.SaleDMStickerPackageId = null;
          this.SaleDMStickerId = null;
          this.SaleDMCompleted = false;
        }

        if (this.isFirstTimeDM()) {
          this.SaleDMStickerPackageId = stickerPackageIdST;
          this.SaleDMStickerId = stickerIdST;

          this.setSaleDMDate();
        }

        if (this.isSaleDMFail()) {
          this.SaleDMStickerPackageId = stickerPackageIdEN;
          this.SaleDMStickerId = stickerIdEN;

        }
        resolve(true);

      });

    },

    validWorkEX () {
      return new Promise(resolve => {
        var doneEx = this.totalCol6float;
        var totalEX = this.totalCol3float;

        var avgEX = (doneEx / totalEX) * 100;
        this.progressEX = parseFloat(avgEX).toFixed(2);

        if (parseFloat(this.progressEX) == 100) {
          this.SaleEXStickerPackageId = stickerPackageId;
          this.SaleEXStickerId = stickerId;
          this.SaleExCompleted = true;
        } else {
          this.SaleEXStickerPackageId = null;
          this.SaleEXStickerId = null;
          this.SaleExCompleted = false;
        }


        if (this.isFirstTimeEx()) {
          this.SaleEXStickerPackageId = stickerPackageIdST;
          this.SaleEXStickerId = stickerIdST;

          this.setSaleExDate();
        }

        if (this.isSaleEXFail()) {
          this.SaleEXStickerPackageId = stickerPackageIdEN;
          this.SaleEXStickerId = stickerIdEN;

        }

        resolve(true);

      });

    },

    isFirstTimeDM () {
      if (this.validSaleDMDate() != 0) {
        return true;
      } else {
        return false;
      }
    },

    isFirstTimeEx () {
      if (this.validSaleExDate() != 0) {
        return true;
      } else {
        return false;
      }
    },

    validSaleDMDate () {
      let today = new Date().toLocaleDateString()
      if (this.$localStorage.get("SaleDM_StartDT") && (this.$localStorage.get("SaleDM_StartDT") == today)) {
        return 0;
      } else if (this.$localStorage.get("SaleDM_StartDT") && (this.$localStorage.get("SaleDM_StartDT") != today)) {
        return 1;
      } else {
        return 2;
      }

    },

    validSaleExDate () {
      let today = new Date().toLocaleDateString()
      if (this.$localStorage.get("SaleEx_StartDT") && (this.$localStorage.get("SaleEx_StartDT") == today)) {
        return 0;
      } else if (this.$localStorage.get("SaleEx_StartDT") && (this.$localStorage.get("SaleEx_StartDT") != today)) {
        return 1;
      } else {
        return 2;
      }

    },


    isSaleDMFail () {
      var d = new Date();
      var h = d.getHours();
      console.log(`Hours: ${h}`);

      if ((this.validSaleDMDate() == 0) && (parseFloat(this.progressDM) < 100) && (h > 20)) {
        return true;
      } else {
        return false;
      }
    },


    isSaleEXFail () {
      var d = new Date();
      var h = d.getHours();
      console.log(`Hours: ${h}`);

      if ((this.validSaleExDate() == 0) && (parseFloat(this.progressEX) < 100) && (h > 20)) {
        return true;
      } else {
        return false;
      }
    },

    resetSaleDMDate () {
      this.$localStorage.remove('SaleDM_StartDT');
    },

    setSaleDMDate () {
      let today = new Date().toLocaleDateString()
      this.$localStorage.set("SaleDM_StartDT", today);

    },

    resetSaleExDate () {
      this.$localStorage.remove('SaleEx_StartDT');
    },

    setSaleExDate () {
      let today = new Date().toLocaleDateString()
      this.$localStorage.set("SaleEx_StartDT", today);

    },

    isWorkDMDate () {
      let today = new Date().toLocaleDateString()
      if (this.$localStorage.get("SaleDM_StartDT") && (this.$localStorage.get("SaleDM_StartDT") == today)) {
        return 0;
      } else if (this.$localStorage.get("SaleDM_StartDT") && (this.$localStorage.get("SaleDM_StartDT") != today)) {
        return 1;
      } else {
        return 2;
      }

    },

    isWorkExDate () {
      let today = new Date().toLocaleDateString()
      if (this.$localStorage.get("SaleEx_StartDT") && (this.$localStorage.get("SaleEx_StartDT") == today)) {
        return 0;
      } else if (this.$localStorage.get("SaleEx_StartDT") && (this.$localStorage.get("SaleEx_StartDT") != today)) {
        return 1;
      } else {
        return 2;
      }

    },





    renderCanvasDelivery () {
      this.cv_showsend_con();
      this.cv_showsendpay_con();

      this.cv_cdssendcode01show();
      this.cv_cdssendcodesumcol5();
      this.cv_cdssendcodesumcol8();
      this.cv_cdssendcodesumcol11();

      this.cv_total();
      this.cv_done();
      this.cv_remain();
      this.cv_car6();
      this.cv_car10();

      this.cv_done_saledm_docno();
      this.cv_done_saledm_docname();
      this.cv_done_saledm_total();
      this.cv_done_saledm_done();
      this.cv_done_saledm_wait();
      this.cv_done_saledm_last();
      this.cv_done_saledm_progress();

      this.cv_sum();

      this.cv_showsendpayex_con();

      this.cv_process_saleex();
      this.cv_total_saleex();
      this.cv_done_saleex();
      this.cv_wait_saleex();
      this.cv_sum_saleex();

      this.cv_showsaleex_con();
      this.cv_recv_cus();
      this.cv_pick_saleex();
      this.cv_kou_saleex();

      this.cv_process_saleex();
      this.cv_total_saleex();
      this.cv_done_saleex();
      this.cv_wait_saleex();
      this.cv_sum_saleex();


    },

    renderCanvasDM () {
      this.cv_cdspayallsumcol3_no();
      this.cv_cdspay5sumcol3_no();



    },

    renderCanvasEx () {
      this.cv_col2string1_saleex();
      this.cv_col2string2_saleex();
      this.cv_col2string3_saleex();

    },

    cdssendcode01show () {

      this.titledetail = "ติดตามการงาน การเบิกสินค้าประเภท รถ.บริษัทขนส่ง (ปริมาณน้ำหนัก)";

      this.dataDrawing = [];


      this.fieldData = this.fieldrecbc;


      this.dataDrawing = this.cdssendcode01;

      this.$bvModal.show('modal-multi-data');


    },

    cv_showsend_con () {
      var canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '22px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ติดตามงานจัดเบิกตามประเภทจัดส่ง (ใบเบิก) ';
      ctx.fillText(msg, 10, 15);

      this.img_showsend_con = canvas.toDataURL();

    },

    cv_showsendpay_con () {
      var canvas = document.createElement('canvas');
      canvas.width = 500;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '22px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ติดตามงาน การรอส่งคลังจัดเบิกสินค้า (ปริมาณน้ำหนัก) ';
      ctx.fillText(msg, 10, 15);

      this.img_showsendpay_con = canvas.toDataURL();

    },

    cv_done_saledm_docno () {
      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'รหัส';
      ctx.fillText(msg, 10, 15);

      this.img_dm_docno = canvas.toDataURL();

    },

    cv_done_saledm_docname () {
      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'รายละเอียด';
      ctx.fillText(msg, 10, 15);

      this.img_dm_docname = canvas.toDataURL();

    },

    cv_done_saledm_total () {
      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ทั้งหมด';
      ctx.fillText(msg, 10, 15);

      this.img_dm_total = canvas.toDataURL();

    },

    cv_done_saledm_done () {
      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ดำเนินการแล้ว';
      ctx.fillText(msg, 10, 15);

      this.img_dm_done = canvas.toDataURL();

    },

    cv_done_saledm_wait () {
      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'รอดำเนินการ';
      ctx.fillText(msg, 10, 15);

      this.img_dm_wait = canvas.toDataURL();

    },

    cv_done_saledm_last () {
      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ดำเนินการล่าสุด';
      ctx.fillText(msg, 10, 15);

      this.img_dm_last = canvas.toDataURL();

    },

    cv_done_saledm_progress () {
      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ความคืบหน้า';
      ctx.fillText(msg, 10, 15);

      this.img_dm_progress = canvas.toDataURL();

    },

    cv_sum () {
      // var canvas = document.getElementById('cv_sum_saleex');
      // var ctx = canvas.getContext('2d');

      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'รวม';
      ctx.fillText(msg, 10, 15);

      this.img_sum = canvas.toDataURL();

    },

    cv_col2string1_title (msg) {
      var canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      ctx.fillText(msg, 10, 15);
      return canvas.toDataURL();

    },

    cv_showsendpayex_con () {
      var canvas = document.createElement('canvas');
      canvas.width = 500;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '22px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ติดตามงาน การเบิกสินค้า คลังขายต่างประเทศ (จำนวนห่อ) ';
      ctx.fillText(msg, 10, 15);

      this.img_showsendpayex_con = canvas.toDataURL();

    },



    cv_cdssendcode01show () {
      //var canvas = document.getElementById('cv_cdssendcode01show');
      //var ctx = canvas.getContext('2d');

      var canvas = document.createElement('canvas');
      canvas.width = 180;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New bold';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '5.รถ.บริษัทขนส่ง ';
      ctx.fillText(msg, 10, 15);

      this.img_col2simg_cdssendcode01showtring1_saleex = canvas.toDataURL();

    },

    cv_cdssendcodesumcol5 () {

      var canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 20;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '(ปริมาณเบิกทั้งหมด) ';
      ctx.fillText(msg, 10, 15);

      this.img_cdssendcodesumcol5 = canvas.toDataURL();

    },

    cv_cdssendcodesumcol8 () {
      var canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 20;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '(ดำเนินการแล้ว) ';
      ctx.fillText(msg, 20, 15);

      this.img_cdssendcodesumcol8 = canvas.toDataURL();

    },

    cv_cdssendcodesumcol11 () {

      var canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 20;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '(รอดำเนินการ)';
      ctx.fillText(msg, 20, 15);

      this.img_cdssendcodesumcol11 = canvas.toDataURL();

    },

    cv_cdspayallsumcol3_no () {
      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '16px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ไม่มีสินค้ารอจัดเบิก';
      ctx.fillText(msg, 10, 15);


      this.img_cdspayallsumcol3_no = canvas.toDataURL();

    },

    cv_cdspay5sumcol3_no () {

      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 20;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '16px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ไม่มีสินค้ารอบรรจุ';
      ctx.fillText(msg, 10, 15);

      this.img_cdspay5sumcol3_no = canvas.toDataURL();

    },

    cv_total () {

      var canvas = document.createElement('canvas');
      canvas.width = 80;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ใบทั้งหมด';
      ctx.fillText(msg, 10, 15);

      this.img_total = canvas.toDataURL();

    },

    cv_done () {

      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ดำเนินการแล้ว';
      ctx.fillText(msg, 10, 15);

      this.img_done = canvas.toDataURL();

    },

    cv_remain () {

      var canvas = document.createElement('canvas');
      canvas.width = 80;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'คงเหลือ';
      ctx.fillText(msg, 10, 15);

      this.img_remain = canvas.toDataURL();

    },

    cv_car6 () {

      var canvas = document.createElement('canvas');
      canvas.width = 40;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '6 ล้อ';
      ctx.fillText(msg, 10, 15);

      this.img_car6 = canvas.toDataURL();

    },

    cv_car10 () {

      var canvas = document.createElement('canvas');
      canvas.width = 40;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '18px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '10 ล้อ';
      ctx.fillText(msg, 10, 15);

      this.img_car10 = canvas.toDataURL();

    },

    cv_process_saleex () {

      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'กระบวนการ';
      ctx.fillText(msg, 10, 15);

      this.img_process_saleex = canvas.toDataURL();

    },

    cv_total_saleex () {

      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ทั้งหมด (ห่อ)';
      ctx.fillText(msg, 10, 15);

      this.img_total_saleex = canvas.toDataURL();

    },

    cv_done_saleex () {

      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'ดำเนินการแล้ว';
      ctx.fillText(msg, 10, 15);

      this.img_done_saleex = canvas.toDataURL();

    },

    cv_wait_saleex () {

      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'รอดำเนินการ';
      ctx.fillText(msg, 10, 15);

      this.img_wait_saleex = canvas.toDataURL();

    },

    cv_sum_saleex () {

      var canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = 'รวม';
      ctx.fillText(msg, 10, 15);

      this.img_sum_saleex = canvas.toDataURL();

    },

    cv_col2string1_saleex () {
      var canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = "rgba(115, 198, 182, 0.8)";
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '1.รับเข้า';
      ctx.fillText(msg, 10, 15);
      this.img_col2string1_saleex = canvas.toDataURL();

    },

    cv_col2string2_saleex () {
      var canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = "#1892c7";
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '2.เบิกให้ลูกค้า';
      ctx.fillText(msg, 10, 15);
      this.img_col2string2_saleex = canvas.toDataURL();

    },

    cv_col2string3_saleex () {
      var canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = "#ba5852";
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '3.เบิกปรับปรุงออก';
      ctx.fillText(msg, 10, 15);
      this.img_col2string3_saleex = canvas.toDataURL();

    },

    cv_recv_cus () {

      var canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = "rgba(115, 198, 182, 0.8)";
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '1.รับสินค้าเข้าคลัง';
      ctx.fillText(msg, 10, 15);

      this.img_recv_cus = canvas.toDataURL();

    },

    cv_pick_saleex () {

      var canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = "rgba(55, 173, 221, 0.8)";
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '2.เบิกให้ลูกค้า (ส่งออก)';
      ctx.fillText(msg, 10, 15);

      this.img_pick_saleex = canvas.toDataURL();

    },

    cv_kou_saleex () {

      var canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '20px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = "rgba(217, 136, 128, 0.8)";
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = '3.ปรับปรุงออก (KOU)';
      ctx.fillText(msg, 10, 15);

      this.img_kou_saleex = canvas.toDataURL();

    },

    PAYSENDCODE () {
      return new Promise((resolve, reject) => {
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
                      let percentage = (value).toFixed(2) + "%";
                      return percentage;
                    }


                  }
                }



              };






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
            resolve(true);
          }





        });




      });

    },

    DSSALEEX () {
      return new Promise((resolve, reject) => {
        API.SearchDatagrid({
          data: {
            CODE: "DSSALEEX", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
            storeno: "", docno: ""
          },


          callblack: res => {
            //console.log(res);
            this.cdsex = [];


            this.cdsexsumrec = {};
            this.cdsexsumpay = {};
            this.cdsexsumkou = {};

            this.setcdsexsumrec = [];
            this.setcdsexsumpay = [];
            this.setcdsexsumkou = [];

            var ctx_cdsexsumrecChart = document.getElementById("cdsexsumrecChart1");
            var data_cdsexsumrecChart = [];
            var option_cdsexsumrecChart = [];

            var ctx_cdsexsumpayChart = document.getElementById("cdsexsumpayChart1");
            var data_cdsexsumpayChart = [];
            var option_cdsexsumpayChart = [];

            var ctx_cdsexsumkouChart = document.getElementById("cdsexsumkouChart1");
            var data_cdsexsumkouChart = [];
            var option_cdsexsumkouChart = [];



            res.forEach((d, i) => {

              this.cdsex.push(d);

              if (res[i].col1string == "01") {

                this.setcdsexsumrec.push(d);
                this.cdsexsumrec = this.setcdsexsumrec[0];

                //var ctx = document.getElementById("cdsexsumrecChart");

                data_cdsexsumrecChart = {
                  datasets: [{
                    data: [parseFloat(this.cdsexsumrec.col13string), (100 - parseFloat(this.cdsexsumrec.col13string))],
                    backgroundColor: [
                      '#078c7b', '#dce3e2'
                    ],
                    borderColor: [
                      '#1B4F4F', '#b0b5b4'
                    ],
                    borderWidth: 1
                  }],

                  labels: [
                    'รับสินค้าเข้าคลัง', 'รอดำเนินการ',
                  ],

                };

                option_cdsexsumrecChart = {
                  responsive: true,
                  legend: {
                    display: false,
                    hidden: true,
                  },
                  tooltips: {
                    enabled: false
                  },
                  elements: {
                    center: {
                      text: this.showcdsexsumrec()
                    }
                  },
                  plugins: {
                    datalabels: {
                      display: false,
                    },
                  }


                };







              } else if (res[i].col1string == "02") {

                this.setcdsexsumpay.push(d);
                this.cdsexsumpay = this.setcdsexsumpay[0];



                data_cdsexsumpayChart = {
                  datasets: [{
                    data: [parseFloat(this.cdsexsumpay.col13string), (100 - parseFloat(this.cdsexsumpay.col13string))],
                    backgroundColor: [
                      '#3597C2', '#dce3e2'
                    ],
                    borderColor: [
                      '#1892c7', '#b0b5b4'
                    ],
                    borderWidth: 1
                  }],

                  labels: [
                    'เบิกให้ลูกค้า (ส่งออก)', 'รอดำเนินการ',
                  ],

                };

                option_cdsexsumpayChart = {
                  responsive: true,
                  legend: {
                    display: false
                  },
                  tooltips: {
                    enabled: false
                  },
                  elements: {
                    center: {
                      text: this.showcdsexsumpay()
                    }
                  },
                  plugins: {
                    datalabels: {
                      display: false,
                    },
                  }


                };






              } else if (res[i].col1string == "03") {

                this.setcdsexsumkou.push(d);
                this.cdsexsumkou = this.setcdsexsumkou[0];



                data_cdsexsumkouChart = {
                  datasets: [{
                    data: [parseFloat(this.cdsexsumkou.col13string), (100 - parseFloat(this.cdsexsumkou.col13string))],
                    backgroundColor: [
                      '#D98880', '#dce3e2'
                    ],
                    borderColor: [
                      '#ba5852', '#b0b5b4'
                    ],
                    borderWidth: 1
                  }],

                  labels: [
                    'เบิกให้ลูกค้า (ส่งออก)', 'รอดำเนินการ',
                  ],

                };

                option_cdsexsumkouChart = {
                  responsive: true,
                  legend: {
                    display: false
                  },
                  tooltips: {
                    enabled: false
                  },
                  elements: {
                    center: {
                      text: this.showcdsexsumkou()
                    }
                  },
                  plugins: {
                    datalabels: {
                      display: false,
                    },
                  }


                };






              }



            });

            var cdsexsumrecChart = new Chart(ctx_cdsexsumrecChart, {
              type: 'doughnut',
              data: data_cdsexsumrecChart,
              options: option_cdsexsumrecChart
            });

            var cdsexsumpayChart = new Chart(ctx_cdsexsumpayChart, {
              type: 'doughnut',
              data: data_cdsexsumpayChart,
              options: option_cdsexsumpayChart
            });

            var cdsexsumkouChart = new Chart(ctx_cdsexsumkouChart, {
              type: 'doughnut',
              data: data_cdsexsumkouChart,
              options: option_cdsexsumkouChart
            });

            this.cdsex = this.cdsex.slice();
            resolve(true);
          }

        });



      });

    },

    clearRender () {
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


    },

    DATAPAY0ALL () {
      return new Promise((resolve, reject) => {
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
                resolve(this.cdspay0sum);



              } else {
                this.cdspay0.push(d);
                resolve(this.cdspay0);
              }
            });
          }
        });


      });

    },

    PAYSALEEX () {
      return new Promise((resolve, reject) => {
        API.SearchDatagrid({
          data: {
            CODE: "PAYSALEEX", stdate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'), enddate: GetDateTimeFormat(this.stdate_value, 'MMDDYYYY'),
            storeno: "", docno: ""
          },
          callblack: res => {


            this.cdssendcodeex = [];

            if (res) {
              res.forEach((d, i) => {
                this.cdssendcodeex.push(d);
              });

            }

            resolve(this.cdssendcodeex);



          }

        });

      });

    },

    showcdsexsumkou () {
      if (this.cdsexsumkou.col13string == "" || this.cdsexsumkou.col13string == undefined) {
        return "ไม ่ม ี";
      }
      else {
        return this.cdsexsumkou.col13string + '%';
      }

    },


    showpercsaledm (v, x, s) {
      if (v == 0 || v == undefined) {
        return "ไม ่ม ี" + s;
      }
      else {
        return x.toString() + ' %';
      }

    },

    showcdsexsumrec () {
      if (this.cdsexsumrec.col13string == "" || this.cdsexsumrec.col13string == undefined) {
        return "ไม ่ม ี";
      }
      else {
        return this.cdsexsumrec.col13string + '%';
      }

    },

    showcdsexsumpay () {
      if (this.cdsexsumpay.col13string == "" || this.cdsexsumpay.col13string == undefined) {
        return "ไม ่ม ี";
      }
      else {
        return this.cdsexsumpay.col13string + '%';
      }

    },

    cv_showsaleex_con () {

      var canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 25;

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = '22px Cordia New';
      ctx.textAlign = 'left';
      ctx.fillStyle = this.font_color;
      ctx.filter = 'blur(0px)';
      ctx.textBaseline = 'middle';
      var msg = ' ติดตามงานจัดเก็บ-จัดเบิกสินค้า ';
      ctx.fillText(msg, 10, 15);

      ctx.fillStyle = "#D4AC0D";
      msg = ' คลังต่างประเทศ ';
      ctx.fillText(msg, 200, 15);

      this.img_showsaleex_con = canvas.toDataURL();

    },

  },



}
</script>