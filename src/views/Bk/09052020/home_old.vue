<template>






<div class="animated fadeIn">

 
 
   
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header" ></i> Menu 
              <div class="card-header-actions">
      
      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="fa fa-th-list fa-lg"></i>
                </b-link>

      
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="fa fa-th-large fa-lg"></i>
                </b-link>

                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse4>
                  <i class="icon-arrow-up fa-lg"></i>
                </b-link>
     
              </div>
            </div>
            <b-collapse id="collapse4" visible>
              <b-card-body>




    <b-row>
      <b-col lg="12">




    <ol class="breadcrumb">
        <li class="breadcrumb-item active"><i class="fa fa-calendar"></i>&nbsp;Report Daily</li>
      </ol>
 <div id="main-folders" class="d-flex align-items-stretch flex-wrap" v-if="icon_visible"> 
          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                 <i class="fa fa-folder folder-icon-color"></i>
              </div>
              <div class="folder-name">ยอดขายประจำวัน</div>
            </button>
          </div>


<!--   


          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-folder folder-icon-color"  v-b-modal.modal-multi-2></i>
              </div>
              <div class="folder-name"  v-b-modal.modal-multi-2>แผนกขาย



   
    <b-modal id="modal-multi-2" size="lg" title="Daily list > แผนกขาย " ok-only no-stacking>



    <div class="card-body" id="foldersGroup">
  
      <div id="main-folders" class="d-flex align-items-stretch flex-wrap">

         <div class="card-body" id="foldersGroup">

             <ol class="breadcrumb">
        <li class="breadcrumb-item active"><i class="fa fa-credit-card"></i>&nbsp; วงเงินเครดิตชั่วคราว</li>
      </ol>
          
          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-pencil-square-o icon-color"></i>

               
              </div>
              <div class="folder-name">ขออนุมัติ




              </div>
            </button>
          </div>



     <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-list-alt icon-color"></i>

               
              </div>
              <div class="folder-name">ประวัติการขออนุมัติ




              </div>
            </button>
          </div>




           </div>






        </div>
    </div>







  
    


    </b-modal>
              </div>
            </button>
          </div>
          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-folder folder-icon-color"></i>
              </div>
              <div class="folder-name">แผนกวางแผน</div>
            </button>
          </div>
          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-folder folder-icon-color"></i>
              </div>
              <div class="folder-name">แผนกบัญชีกลาง</div>
            </button>
          </div>
          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-folder folder-icon-color"></i>
              </div>
              <div class="folder-name">แผนกคลังสินค้า</div>
            </button>
          </div>

 -->



        
        </div>





         <ol class="breadcrumb">
        <li class="breadcrumb-item active"><i class="fa fa-table"></i>&nbsp;Report Analysis</li>
      </ol>
  




    <div id="main-folders" class="d-flex align-items-stretch flex-wrap" v-if="icon_visible"> 
  














      







  
    


          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-line-chart icon-color"></i>
              </div>
              <div class="folder-name">สถิติการจัดเบิกสินค้าของจนท.คลัง</div>
            </button>
          </div>


          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-hourglass-half icon-color"></i>
              </div>
              <div class="folder-name">ระยะเวลารอเปิดบิลของจนท.ขาย</div>
            </button>
          </div>




          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-line-chart icon-color"></i>
              </div>
              <div class="folder-name">สถิติการส่งใบเบิกให้คลังของจนท.ขาย</div>
            </button>
          </div>

          <!-- <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-folder folder-icon-color"></i>
              </div>
              <div class="folder-name">แผนกบัญชีกลาง</div>
            </button>
          </div>
          <div class="d-inline-flex">
            <button class="folder-container">
              <div class="folder-icon">
                <i class="fa fa-folder folder-icon-color"></i>
              </div>
              <div class="folder-name">แผนกคลังสินค้า</div>
            </button>
          </div> -->





        
        </div>







  














       

   
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


export default {  




  name: 'forms',

  
 
  mounted () {
   // this.QueryData();

  
    
  },




  data () {


    return {
      selected: [], // Must be an array reference!
      show: true,
      name : 'myAsset',
      icon_visible:true,
      file_visible: false,
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


     

      this.dataDrawingAssetAll = [];
      API.AsFixedAsset({
      data: {
        OFFICECODE: this.$localStorage.get("UserCode")
      },
      callblack: res => {
        console.log(res.asFixedAssetLST);
        let AsFixedAssetLST = res.asFixedAssetLST;
        if (AsFixedAssetLST == null){
          AlertMessage("error", "ไม่พบข้อมูลทรัพย์สินที่รับผิดชอบ");
            return;
        }
        if (AsFixedAssetLST != null) {
          AsFixedAssetLST.forEach((d, i) => {
            this.dataDrawingAssetValueDom = [];
            this.dataDrawingAssetValueDom.COMPANY = d.company;
            this.dataDrawingAssetValueDom.ASSETNO = d.assetno;
            this.dataDrawingAssetValueDom.ASSETNAME = d.assetname;
            this.dataDrawingAssetValueDom.ASSETDATE = this.formatDate(d.assetdt);
            this.dataDrawingAssetValueDom.POSITNAME = d.positname;
            this.dataDrawingAssetAll.push(this.dataDrawingAssetValueDom);                                                  
          }); 
          console.log(AsFixedAssetLST);
        }
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







</style>
