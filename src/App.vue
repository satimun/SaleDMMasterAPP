<template>
  <div id="app">
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
    <notifications position="top center" />
  </div>
</template>

<script>
//import NprogressContainer from "vue-nprogress/src/NprogressContainer";
import { API } from "@/shared/core";

export default {
  name: "app",
  mounted () {
    if (this.$localStorage.get("DBMode")) {
      this.dbmode = this.$localStorage.get("DBMode");
    }

    if (this.$localStorage && this.$localStorage.get("DBMode") != null && this.$localStorage.get("DBMode") != "undefined") {
      API.ConfigSetting({
        data: {
          DBMode: this.$localStorage.get("DBMode")
        },
        callblack: res => {
          //console.log(res.status);
          if (res.ConnStr == "") {
            this.$localStorage.set("Token", "");
            this.$localStorage.set("User", "");
            this.$localStorage.set('TokenTime', null);
            this.$localStorage.set('GroupID', null);
            this.$localStorage.set('UserID', null);
            this.$localStorage.set('UserDetail', null);
            this.$localStorage.set('UserExpireDate', null);
            window.location.href = "/";
          }
        }
      });

      API.OauthAccess({
        data: {
          DBMode: this.$localStorage.get("DBMode")
        },
        callblack: res => {
          this.$localStorage.set("AccessToken", res.accessToken);
        }
      });

    }


    if (!this.$localStorage.get("lang")) {
      this.$localStorage.set("lang", "en");
    }
    this.$i18n.locale = this.$localStorage.get("lang");
  },

  methods: {
    isMobile () {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },

    signin (ucode, xcode) {
      return new Promise(resolve => {
        API.OauthLogin({
          data: { username: ucode, password: xcode, DBMode: this.dbmode },

          callblack: res => {
            console.log(res);
            this.$localStorage.set("userInfo", res);
            this.$localStorage.set("Token", res.token);
            this.$localStorage.set("User", res.username);
            this.$localStorage.set('GroupID', res.groupid);
            this.$localStorage.set('UserID', res.usercode);
            this.$localStorage.set('UserDetail', res.username);
            this.$localStorage.set('UserExpireDate', res.expired_date);

            resolve(res);

            //window.location.href = "/dashboard";
            //window.location.href = "/dashboard";


          }
        });
      });
    },

    async autoLogin (ucode, xcode) {
      let res = await this.signin(ucode, xcode);
      console.log(res);
      //let routeData = this.$router.resolve({ name: 'dashboardLineSale' });
      window.open("/dashboard", '_blank');

    }

  },
  created () {
    if (this.isMobile()) {
      addEventListener("resize", () => {
        this.mobile = innerWidth <= 700;
      });
    }
  },
  /*asyncComputed: {
    async myResolvedValue() {
      return await AlertMessage().then((ok) => { console.log(ok); });
    }
  },*/
  watch: {
    $route: function (p) {
      if (p.path == '/member/signin' && (p.query != null && (p.query.ucode && p.query.xcode))) {
        console.log(p.query.ucode);
        console.log(p.query.xcode);
        this.autoLogin(p.query.ucode, p.query.xcode);
      }

      if (!/^[/]member/.test(p.path)) {
        if (!this.$localStorage.get("Token")) {
          this.$router.push("/member/signin");
        }
      }
    }
  }
};
</script>

<style lang="scss">
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome.scss";
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/scss/simple-line-icons.scss";
/* Import Flag Icons Set */
//@import '~flag-icon-css/css/flag-icon.min.css';

/*bootstrap*/
//@import "~bootstrap/dist/css/bootstrap.css"; // from bootstrap node_modules

/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
// Import Main styles for this application

@import "~vue-multiselect/dist/vue-multiselect.min.css";
@import "assets/scss/style";

@import "assets/css/style";

@import "assets/css/main";
</style>

// @import 'assets/css/style'; // @import 'assets/css/table';
