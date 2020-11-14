<template>
  <div class="app">
    <!-- <AppHeader fixed style="display:none;"> -->

    <!-- 

      <SidebarToggler class="d-lg-none" display="md" mobile />    
  
      <b-link class="navbar-brand" to="/dashboard">
        <img class="navbar-brand-full" src="img/kkf/asset.png" width="100%" height="80%" alt="saledm">
        <img class="navbar-brand-minimized" src="img/brand/logokkf.png" width="60" height="50" alt="KKF Logo" >
      </b-link>
      
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen="false" />


 
      <b-navbar-nav class="d-md-down-none">
     
      </b-navbar-nav>
    <b-navbar-nav class="ml-auto">-->

    <!--<b-nav-item class="d-md-down-none">
          
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
    </b-nav-item>-->

    <!--         
    <DefaultHeaderDropdownAccnt/>-->

    <!-- 
<b-input-group>
                  <b-input-group-prepend>
                    <span class="input-group-text">
                      <i class="fa fa-adjust"></i>
                    </span>
                  </b-input-group-prepend>
                  <b-form-select
                    id="theme"
         
                    @change="SetTheme"
                    required
                  
                    class="text-capitalize"
                  ></b-form-select>
    </b-input-group> to_home-->

    <!--         
 <div class="btninfousermini">
         <b-button @click="set_theme" variant="dark" class="hover"><i class="fa fa-lightbulb-o" aria-hidden="true"></i></b-button>
</div>
  <div class="btninfousermini">
         <b-button @click="to_home" variant="success" class="hover"><i class="fa fa-home" aria-hidden="true"></i></b-button>
</div>

  <div class="btninfousermini">

   <b-button v-b-modal.modal-multi-1 variant="secondary" class="hover"><i class="fa fa-user" aria-hidden="true"></i></b-button>

  <b-modal id="modal-multi-1" size="lg" title="ผู้ใช้งาน" ok-only no-stacking>
    <p class="my-2">{{ user }}</p>
    <p class="my-2">{{ codecompname }}</p>
    <p class="my-2">{{ department }}</p>
    



  </b-modal>


 
</div>

 <div class="btninfousermini">
         <b-button @click="showMsgBoxTwo" variant="danger" class="hover"><i class="fa fa-sign-out" aria-hidden="true" ></i></b-button>
 </div>
    -->

    <!-- 


 <div class="btninfouser">
         <b-button @click="set_theme" variant="dark" ><i class="fa fa-lightbulb-o" aria-hidden="true"></i>&nbsp;Background</b-button>

    </div>-->

    <!-- 

  <div class="btninfouser">
         <b-button @click="to_home" variant="success"  class="hover"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;Home</b-button>
</div>

  <div class="btninfouser">

   <b-button v-b-modal.modal-multi-1 variant="secondary" class="hover" ><i class="fa fa-user" aria-hidden="true"></i>&nbsp;{{ user_code }}</b-button>

  <b-modal id="modal-multi-1" size="lg" title="ผู้ใช้งาน" ok-only no-stacking>
    <p class="my-2">{{ user }}</p>
    <p class="my-2">{{ codecompname }}</p>
    <p class="my-2">{{ department }}</p>
    



  </b-modal>


 
</div>
  <div class="btninfouser">
         <b-button @click="showMsgBoxTwo" variant="danger" class="hover" ><i class="fa fa-sign-out" aria-hidden="true"></i> &nbsp;Logout</b-button>
 </div> 
    </b-navbar-nav>-->

    <!--         
    <AsideToggler class="d-none d-lg-block" />-->

    <!-- <div class="navbar-togglerTo round-button fcsText1"  ><a class="pointer"><span><div class="fcsText12">กลับสู่หน้า Home</div></span><i class="icon-screen-desktop fa-2x" @click="to_home" ></i></a></div> 
      <div class="navbar-togglerTo round-button fcsText1"  ><a class="pointer"><span><div class="fcsText12">เข้าสู่หน้า Dashboard</div></span> <i class="icon-chart fa-2x" @click="to_dashboard" ></i></a></div> 
      <div class="navbar-togglerLogout round-button-out fcsText1"> <a class="pointer"> <span><div class="fcsText12">ออกจากระบบ</div></span><i class="icon-power fa-2x" @click="showMsgBoxTwo" ></i></a></div> 
      
      
    -->

    <!-- <div class="mb-1">
     <b-button @click="showMsgBoxTwo">msgBoxConfirm with options</b-button>
    
    </div>-->

    <!--<AsideToggler class="d-lg-none" mobile />-->
    <!-- </AppHeader> -->

    <br />

    <div class="app-body">
      <AppSidebar :fixed="true">
        <SidebarHeader />
        <SidebarForm />
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter />
        <!-- <SidebarMinimizer/> -->
      </AppSidebar>
      <main class="main">
        <!-- <Breadcrumb :list="list"/> -->

        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <DefaultAside />
      </AppAside>
    </div>
    <!-- <TheFooter>
    
     

      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="/">IT-KIG Application</a>
        &nbsp;<a href="/">{{$t('app.name')}}</a>
        <span class="ml-1">&copy; 2020 - {{ new Date().getFullYear() }}</span>
      </div>
    </TheFooter>-->

    <div class="onPC">

      <ul class="menu">
        <center>
          <div class="bottom-nav-item pointer">
            <li title="KKF">
              <img
                class="navbar-brand-minimized"
                src="img/brand/logokkf.png"
                width="60"
                height="50"
                alt="SALEDM Control"
              />
            </li>
            <span style="color:#B7950B">SALEDM</span>
          </div>
        </center>

        <center>
          <div
            class="bottom-nav-item pointer tools_icon"
            @click="to_home"
          >
            <li data-title="Home">
              <i class="fa fa-home fa-2x"></i>
              <br />Home
            </li>
          </div>
        </center>
        <center>
          <div
            class="bottom-nav-item pointer tools_icon"
            v-b-modal.modal_menu_dashboard
          >
            <li title="Dashboard">
              <i class="fa fa-desktop fa-1x"></i>
              <br />Dashboard
            </li>
          </div>
        </center>

        <center>
          <div
            class="bottom-nav-item pointer tools_icon"
            v-b-modal.modal_menu_report
          >
            <li title="Report">
              <i class="fa fa-bar-chart fa-1x"></i>
              <br />Report
            </li>
          </div>
        </center>

        <center>
          <div
            class="bottom-nav-item pointer tools_icon"
            v-b-modal.modal_menu_setup
          >
            <li title="Setup">
              <i class="fa fa-cogs fa-1x"></i>
              <br />Setup
            </li>
          </div>
        </center>

        <center>
          <div
            class="bottom-nav-item pointer tools_icon"
            v-b-modal.modal_menu_user
            :title="user_code"
          >
            <li title="User">
              <i class="fa fa-user fa-1x"></i>
              <br />User
            </li>
          </div>
        </center>

        <center>
          <div
            class="bottom-nav-item pointer tools_icon"
            @click="showMsgBoxTwo"
            :title="$t('dic.signout')"
          >
            <li title="Logout">
              <i class="fa fa-power-off fa-1x"></i>
              <br />Logout
            </li>
          </div>
        </center>
      </ul>
    </div>

    <div class="onPhone">
      <footer>
        <nav class="bottom-nav">
          <div
            class="bottom-nav-item pointer"
            @click="to_home"
          >
            <div class="bottom-nav-link">
              <span>
                <i class="fa fa-home fa-1x"></i>
              </span>
              <span>Home</span>
            </div>
          </div>

          <div
            class="bottom-nav-item pointer"
            v-b-modal.modal_menu_dashboard
          >
            <div class="bottom-nav-link">
              <span>
                <i class="fa fa-desktop fa-1x"></i>
              </span>
              <span>Dashboard</span>
            </div>
          </div>
          <div
            class="bottom-nav-item pointer"
            v-b-modal.modal_menu_report
          >
            <div class="bottom-nav-link">
              <span>
                <i class="fa fa-bar-chart fa-1x"></i>
              </span>
              <span>Reports</span>
            </div>
          </div>

          <div
            class="bottom-nav-item pointer"
            v-b-modal.modal_menu_setup
          >
            <div class="bottom-nav-link">
              <span>
                <i class="fa fa-cogs fa-1x"></i>
              </span>
              <span>Setup</span>
            </div>
          </div>

          <div class="bottom-nav-item">
            <div
              class="bottom-nav-link pointer"
              @click="showMsgBoxTwo"
              :title="$t('dic.signout')"
            >
              <span>
                <i class="fa fa-power-off fa-1x"></i>
              </span>
              <span>Logout</span>
            </div>
          </div>
        </nav>
      </footer>
    </div>

    <!-----     Menu  Dashboard  -->

    <b-modal
      id="modal_menu_dashboard"
      title="Menu Dashboard"
      no-close-on-backdrop
      ok-title="ปิด"
      centered
      ok-only
      size="xl"
    >
      <div class="onPC">
        <b-row>
          <b-col lg="12">
            <transition name="fade">
              <b-card no-body>
                <div slot="header">
                  Menu Dashboard
                  <div class="card-header-actions">
                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="fa fa-th-list fa-lg"></i>
                    </b-link>

                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="fa fa-th-large fa-lg"></i>
                    </b-link>

                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="icon-arrow-up fa-lg"></i>
                    </b-link>
                  </div>
                </div>
                <b-collapse
                  id="collapse4"
                  visible
                >
                  <b-card-body>
                    <b-row>
                      <b-col lg="12">
                        <center>
                          <h3> ยังไม่เปิดให้บริการ </h3>
                        </center>

                        <!--<div
                          id="main-folders"
                          class="d-flex align-items-stretch flex-wrap"
                        >
                          <div class="d-inline-flex">

                            <button
                              class="folder-container"
                              @click="to_dashboard()"
                            >
                              <div class="folder"><i class="fa fa-tasks"></i></div>
                              <div class="folder-name">สถานะงานรับเข้า-จ่ายออกสินค้าประจำวัน</div>
                            </button>
                          </div>

                          <div class="d-inline-flex">

                            <button
                              class="folder-container"
                              @click="to_dashboard_shelf()"
                            >
                              <div class="folder"><i class="fa fa-tasks"></i></div>
                              <div class="folder-name">สถานะงานจัดเก็บสินค้าขึ้นชั้นวาง</div>
                            </button>
                          </div>

                        </div>-->

                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </transition>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-----     Menu  Report -->

    <b-modal
      id="modal_menu_report"
      title="Menu Report "
      no-close-on-backdrop
      ok-title="ปิด"
      centered
      ok-only
      size="xl"
    >
      <div class="onPC">
        <b-row>
          <b-col lg="12">
            <transition name="fade">
              <b-card no-body>
                <div slot="header">
                  Menu
                  <div class="card-header-actions">
                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="fa fa-th-list fa-lg"></i>
                    </b-link>

                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="fa fa-th-large fa-lg"></i>
                    </b-link>

                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="icon-arrow-up fa-lg"></i>
                    </b-link>
                  </div>
                </div>
                <b-collapse
                  id="collapse4"
                  visible
                >
                  <b-card-body>
                    <b-row>
                      <b-col lg="12">

                        <center>
                          <h3> ยังไม่เปิดให้บริการ </h3>
                        </center>

                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </transition>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-----     Menu  User  -->

    <b-modal
      id="modal_menu_user"
      title="Menu User"
      no-close-on-backdrop
      ok-title="ปิด"
      centered
      ok-only
      size="xl"
    >
      <div class="onPC">
        <b-row>
          <b-col lg="12">
            <transition name="fade">
              <b-card no-body>
                <div slot="header">
                  Menu
                  <div class="card-header-actions">
                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="fa fa-th-list fa-lg"></i>
                    </b-link>

                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="fa fa-th-large fa-lg"></i>
                    </b-link>

                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="icon-arrow-up fa-lg"></i>
                    </b-link>
                  </div>
                </div>
                <b-collapse
                  id="collapse4"
                  visible
                >
                  <b-card-body>
                    <b-row>
                      <b-col lg="12">

                        <center>
                          <h3> ยังไม่เปิดให้บริการ </h3>
                        </center>

                      </b-col>
                    </b-row>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </transition>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-----     Menu  Master data Setup -->

    <b-modal
      id="modal_menu_setup"
      title="Menu Master Data Setup"
      no-close-on-backdrop
      ok-title="ปิด"
      centered
      ok-only
      size="xl"
    >
      <div class="onPC">
        <b-row>
          <b-col lg="12">
            <transition name="fade">
              <b-card no-body>
                <div slot="header">
                  Menu
                  <div class="card-header-actions">
                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="fa fa-th-list fa-lg"></i>
                    </b-link>

                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="fa fa-th-large fa-lg"></i>
                    </b-link>

                    <b-link
                      class="card-header-action btn-minimize"
                      v-b-toggle.collapse4
                    >
                      <i class="icon-arrow-up fa-lg"></i>
                    </b-link>
                  </div>
                </div>
                <b-collapse
                  id="collapse4"
                  visible
                >
                  <b-card-body>
                    <b-row>
                      <b-col lg="12">
                        <div
                          id="main-folders"
                          class="d-flex align-items-stretch flex-wrap"
                        >
                          <div class="d-inline-flex">
                            <button
                              class="folder-container"
                              @click="to_administrator()"
                            >
                              <div class="folder">
                                <i class="fa fa-user-secret"></i>
                              </div>
                              <div class="folder-name">การกำหนดผู้ดูแลระบบ</div>
                            </button>
                          </div>

                          <!--<div class="d-inline-flex">
                            <button
                              class="folder-container"
                              @click="to_waitcreatebill()"
                            >
                              <div class="folder">
                                <i class="fa fa-bar-chart"></i>
                              </div>
                              <div class="folder-name">ระยะเวลารอเปิดบิล</div>
                            </button>
                          </div>

                          <div class="d-inline-flex">
                            <button
                              class="folder-container"
                              @click="to_workreqpaystock()"
                            >
                              <div class="folder">
                                <i class="fa fa-area-chart"></i>
                              </div>
                              <div class="folder-name">สถิติการขอเบิกสินค้า</div>
                            </button>
                          </div>
                          -->
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
    </b-modal>
  </div>
</template>

<script>
import nav from '@/_nav'
// import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader
// , SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'

import {

  addTag

} from "@/shared/utils";

import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'



export default {
  name: 'DefaultContainer',
  // components: {
  //   AsideToggler,
  //   AppHeader,
  //   AppSidebar,
  //   AppAside,
  //   TheFooter,
  //   Breadcrumb,
  //   DefaultAside,
  //   DefaultHeaderDropdownAccnt,
  //   SidebarForm,
  //   SidebarFooter,
  //   SidebarToggler,
  //   SidebarHeader,
  //   SidebarNav
  //   // ,
  //   // SidebarMinimizer
  // },


  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer

  },


  data () {
    return {


      nav: nav.items,
      boxOne: '',
      boxTwo: '',


      FSidebarToggler: false,





      fieldDrawingsum: [

        {
          name: "COMPANY",
          title: "รหัสบริษัท",
          sortField: "mnt",
          class: "text-rig",
          visible: true
        },
        {
          name: "COMPANYNAME",
          title: "ชื่อบริษัท",
          sortField: "mnt",
          class: "text-rig",
          visible: true
        }

      ]

    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    },


    user () {
      var userInfo = "";
      if (this.$localStorage.get("UserCode")) {
        userInfo = this.$localStorage.get("UserCode") + ' : ' + this.$localStorage.get("User");
      }
      return userInfo;
    },

    theme () {
      var usertheme = "";
      if (this.$localStorage.get("theme")) {
        usertheme = this.$localStorage.get("theme");
      }
      return usertheme;
    },


    user_code () {
      var userInfo = "";
      if (this.$localStorage.get("UserCode")) {
        userInfo = this.$localStorage.get("UserCode");
      }
      return userInfo;
    },


  },

  mounted () {

    addTag('link', { rel: 'stylesheet', href: '/theme/style.css', type: 'text/css', id: 'settheme1' });
    addTag('link', { rel: 'stylesheet', href: '/theme/main.css', type: 'text/css', id: 'settheme1' });
  },


  methods: {


    SetThemeW () {



      // this.$localStorage.set("theme", this.theme.selected);
      // Object.keys(themes).forEach(x => {
      //   let id = document.getElementById(x);
      //   this.$root.darkmode = id === 'dark';
      //   if (id) { id.remove(); }
      // });


      console.log(this.$localStorage.get("User"));


      //addTag('link', { rel: 'stylesheet', href:'/theme/stylewhite.css', type: 'text/css'});


    },


    scrollHandle (evt) {
      //console.log(this.$localStorage.get("User"))


    },

    to_dashboard () {
      //this.$router.push("/dashboard");

      const path = "/dashboard"
      if (this.$route.path !== path) this.$router.push(path)

      this.$bvModal.hide('modal_menu_dashboard');
    },

    to_administrator () {
      const path = "/setup/authorization/permissions"
      if (this.$route.path !== path) this.$router.push(path)

      this.$bvModal.hide('modal_menu_setup');

    },

    set_theme () {

      if (this.$localStorage.get("theme") == "0") {
        console.log(this.$localStorage.get("theme"))


        Object.keys('/theme/style.css').forEach(x => {
          let id = document.getElementById(x);

          if (id == 'settheme1') { id.remove(); }


        });

        Object.keys('/theme/main.css').forEach(x => {
          let id = document.getElementById(x);

          if (id == 'settheme1') { id.remove(); }


        });





        addTag('link', { rel: 'stylesheet', href: '/theme/stylewhite.css', type: 'text/css', id: 'settheme1' });
        addTag('link', { rel: 'stylesheet', href: '/theme/mainwhite.css', type: 'text/css', id: 'settheme1' });






        this.$localStorage.remove("theme");
        this.$localStorage.set("theme", "1");

        console.log(this.$localStorage.get("theme"))


      }



      else {



        console.log(this.$localStorage.get("theme"))

        Object.keys('/theme/stylewhite.css').forEach(x => {
          let id = document.getElementById(x);

          if (id == 'settheme1') { id.remove(); }


        });

        Object.keys('/theme/mainwhite.css').forEach(x => {
          let id = document.getElementById(x);

          if (id == 'settheme1') { id.remove(); }


        });

        addTag('link', { rel: 'stylesheet', href: '/theme/style.css', type: 'text/css', id: 'settheme1' });
        addTag('link', { rel: 'stylesheet', href: '/theme/main.css', type: 'text/css', id: 'settheme1' });


        this.$localStorage.remove("theme");

        this.$localStorage.set("theme", "0");


        console.log(this.$localStorage.get("theme"))
      }


    },


    to_home () {
      const path = "/"
      if (this.$route.path !== path) this.$router.push(path)
      //this.$router.push("/")
    },


    showMsgBoxTwo () {
      this.boxTwo = ''
      this.$bvModal.msgBoxConfirm('ยืนยันการ Logout ออกจากระบบ ... ', {
        title: 'Please Confirm',
        size: 'Lg',
        buttonSize: 'Lg',
        okVariant: 'success',
        cancelVariant: 'danger',



        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.boxTwo = value

          if (this.boxTwo) {
            this.onSingout();
          }
        })
        .catch(err => {
          // An error occurred
        })
    },




    onSingout () {

      this.usercode = this.$localStorage.get("User");

      if (typeof y === "undefined") {
        try {
          API.OauthLogout({
            data: { usercode: this.usercode },
            callblack: res => {

            }
          });
        }
        catch (err) {
          console.log(err)
        }
        finally {
          this.$localStorage.remove("Token");
          this.$localStorage.remove("User");

          //  this.$localStorage.set("lang");  
          this.$router.push("/member/signin");

        }
      } else {
        this.$localStorage.remove("Token");
        this.$localStorage.remove("User");

        //  this.$localStorage.set("lang");  
        this.$router.push("/member/signin");
      }

    },



  }
}
</script>


<style >
.app-header .navbar-togglerTo {
  min-width: 50px;
  padding: 0.25rem 0;
  margin-right: 5px;
}

.app-header .navbar-togglerTo:hover {
  min-width: 50px;
  padding: 0.25rem 0;
  font-size: 18px;
  font-weight: 600;
  color: rgb(60, 33, 52);
  margin-right: 5px;
}

.app-header .navbar-togglerLogout {
  min-width: 50px;
  padding: 0.25rem 0;
  margin-right: 5px;
}

.app-header .navbar-togglerLogout:hover {
  min-width: 50px;
  padding: 0.25rem 0;
  font-size: 18px;
  font-weight: 600;
  color: #922b21;
  margin-right: 5px;
}

.pointer {
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .app-header {
    font-size: 14px;
    font-weight: 600;
  }

  .app-header {
    font-size: 14px;
    font-weight: 600;
  }

  .navbar-brand {
    display: none;
  }

  .app-header .navbar-togglerTo {
    min-width: 50px;
    padding: 0.25rem 0;
    margin-right: 5px;
  }

  .app-header .navbar-togglerTo:hover {
    min-width: 50px;
    padding: 0.25rem 0;

    color: rgb(60, 33, 41);
    margin-right: 5px;
  }

  .app-header .navbar-togglerLogout {
    min-width: 50px;
    padding: 0.25rem 0;
    margin-right: 5px;
  }

  .app-header .navbar-togglerLogout:hover {
    min-width: 50px;
    padding: 0.25rem 0;
    font-size: 14px;
    font-weight: 600;
    color: #922b21;
    margin-right: 3px;
  }
}

.btninfouser {
  padding-right: 5px;
}

.btninfousermini {
  padding-right: 5px;
}

.round-button {
  display: block;
  width: 45px;
  height: 45px;
  line-height: 50px;

  border-radius: 50%;
  color: #494243;
  text-align: center;
  text-decoration: none;

  box-shadow: 0 0 1px rgb(223, 214, 220);
  font-size: 14px;
  font-weight: bold;

  background-color: rgb(223, 214, 216);
}
.round-button:hover {
  background-color: rgb(185, 171, 174);
}

.round-button-out {
  display: block;
  width: 45px;
  height: 45px;
  line-height: 50px;
  padding-left: 2px;
  border-radius: 50%;
  color: #641e16;
  box-shadow: 0 0 1px rgb(223, 214, 219);
  text-align: center;
  text-decoration: none;
  background: #e6b0aa;
  /* box-shadow: 0 0 3px gray; */
  font-size: 14px;
  font-weight: bold;
}
.round-button-out:hover {
  background: #d98880;
}

div.fcsText1 a span {
  display: none;

  height: 20px;
}
div.fcsText1 a:hover {
  position: relative;
  cursor: default;
  -webkit-transition: all 0.7s ease-in-out;
  -moz-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  -ms-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
}
div.fcsText1 a:hover span {
  display: block;
  position: absolute;
  float: left;
  white-space: nowrap;
  -webkit-transition: all 0.7s ease-in-out;
  -moz-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  -ms-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
  top: 20px;
  left: -45px;
  padding-top: 0;
  font-weight: bolder;
  padding-left: 5px;
  padding-right: 5px;

  /* background:rgba(0, 0, 0, 0.8);  */

  font-size: 12px;
  color: rgb(241, 236, 237);

  border-radius: 5px;
}

div.fcsText12 {
  display: inline;

  background: rgba(115, 86, 97, 0.7);
  padding: 5px;
  border-radius: 5px;
}

.fa-sort-down:before,
.fa-sort-desc:before {
  content: "";
}

.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
  content: "";
}

.fa-unsorted:before,
.fa-sort:before {
  content: "";
}

@media screen and (max-width: 800px) {
  .btninfouser {
    display: none;
  }
  .btninfousermini {
    display: block;
  }
}

@media screen and (min-width: 800px) {
  .btninfouser {
    display: block;
  }
  .btninfousermini {
    display: none;
  }
}
</style>
