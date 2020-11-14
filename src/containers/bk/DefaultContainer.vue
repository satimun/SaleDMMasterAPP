<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-link class="navbar-brand" to="/">
        <h2>MIS KKF</h2>
        --<img
          class="navbar-brand-full"
          src="img/brand/logo2.png"
          width="140"
          height="35"
          alt="KKF Connect Staff"
        />
        <img
          class="navbar-brand-minimized"
          src="img/brand/Logo2.png"
          width="140"
          height="35"
          alt="KKF Connect Staff"
        />
        <!-- <img
          class="navbar-brand-minimized"
          src="img/brand/Logo2.png"
          width="35"
          height="35"
          alt="KKF Connect Staff"
        /> -->
      </b-link>
      <!-- <SidebarToggler class="d-md-down-none" display="lg" /> -->
      <!-- <b-navbar-nav class="ml-auto"> -->
        <!-- <b-nav-item class="d-md-down-none">
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item> -->
        <!--<b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item>-->
        <!-- <DefaultHeaderDropdownAccnt /> -->
      <!-- </b-navbar-nav> -->
      <AsideToggler/>
      <!-- <AsideToggler mobile /> -->
    </AppHeader>


    
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader />
        <SidebarForm />
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter />
        <SidebarMinimizer />
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list" />
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside />
      </AppAside>
    </div>



    
    <TheFooter>
      <!--footer-->
      <div class="ml-auto">
        <span class="mr-1">Copyright &copy; KIG 2019 - 2020</span>
      </div>
    </TheFooter>
  </div>
</template>



/* 
<script>
import nav from "@/_nav";


import {
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Header as AppHeader,
  Aside as AppAside,
  AsideToggler,
  Footer as TheFooter,
  Breadcrumb
} from "@/components/coreui";

import DefaultAside from "./DefaultAside";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";

export default {
  name: "DefaultContainer",
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
  data() {
    return {
      nav: nav.items
    
    };
  },
  computed: {
    name() {
      return  this.$localStorage.get("User") //this.$route.name;
    },
    list() {
      return this.$route.matched.filter(
        route => route.name || route.meta.label
      );
    }
  }
};
</script>

<style scope>

.grecaptcha-badge {
  display: none;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
  color: black
}

.main .container-fluid {
  padding: 0 3px;
}

.app-header{
  height: 42px;
}

.app-body {
  margin-top: 42px;
}
.breadcrumb {
    margin-bottom: 2px;
    
}
</style>

