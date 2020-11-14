<template>

  <div>

    <b-form @submit="onSubmit">
      <div>

        <p style="color:#61798a">{{$t('member.welcomeTo')}} : {{$t('app.name')}}</p>

        <hr>
        <b-form-group label-for="username">
          <b-input-group>
            <b-input-group-prepend>

              <span class="input-group-text">
                <i class="fa fa-user"></i>
              </span>

            </b-input-group-prepend>
            <b-form-input
              id="username"
              v-model="form.username"
              autocomplete="off"
              :placeholder="$t('dic.username')"
              trim
              required
            />
          </b-input-group>
        </b-form-group>

        <b-form-group label-for="password">
          <b-input-group>
            <b-input-group-prepend>
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </b-input-group-prepend>
            <b-form-input
              id="password"
              type="password"
              v-model="form.password"
              :placeholder="$t('dic.password')"
              autocomplete="off"
              trim
              required
            />
          </b-input-group>
        </b-form-group>

        <b-form-group
          :label="$t('dic.db')"
          label-for="db"
          :state="$v.form.db.required ? !$v.form.db.$invalid : null"
        >
          <b-form-select
            id="db_mode"
            :disabled="mode === 'View'"
            v-model="form.db"
            :options="db_mode"
            required
            class="inputZ"
          ></b-form-select>
        </b-form-group>

        <b-form-group>
          <b-button
            block
            variant="primary"
            type="submit"
            :disabled="$v.form.$invalid"
          >{{$t('dic.signin')}}</b-button>
        </b-form-group>
      </div>
    </b-form>

  </div>

</template>

<script>
import { required } from "vuelidate/lib/validators";
import { API } from "@/shared/core";
import { db_mode, configMode, aggregationTypes } from "@/shared/define";
import {
  GetDateView,
  AlertMessage,
  ObjCopy,
  ObjResetValue,
  GetLastUpdate,
  GetDateTimeFormat,
  GetObjArr,
  GetArrObj,
  GetIdDes,
  GetObjVal
} from "@/shared/utils";

export default {
  name: "signin",
  mounted () { },
  computed: {},
  data () {
    return {
      token: null,
      db_mode: db_mode,
      form: {
        username: "",
        password: "",
        twofactor: "",
        lang: "th",
        office: "KKF",
        db: "0",
      },
      options_lang: [
        { text: 'Thai', value: 'th' },
        { text: 'English', value: 'en' },
      ],

    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      },
      db: {
        required
      }
    }
  },
  methods: {


    to_register () {
      this.$router.push("/member/signup");
    },



    onSubmit (evt) {


      evt.preventDefault();

      this.$localStorage.set("DBMode", this.form.db);



      API.ConfigSetting({
        data: {
          DBMode: this.form.db
        },
        callblack: res => {

          //console.log(res);
          if (res.ConnStr == "") {

            this.$localStorage.set("Token", "");
            this.$localStorage.set("User", "");
            this.$localStorage.set('TokenTime', null);
            this.$localStorage.set('GroupID', null);
            this.$localStorage.set('UserID', null);
            this.$localStorage.set('UserDetail', null);
            this.$localStorage.set('UserExpireDate', null);
            window.location.href = "/";


          } else {
            //console.log(res);
            this.$localStorage.set("DBServer", res.serverAddr);
            this.DBServer = res.serverAddr;
            this.$localStorage.set("DBMode", res.dbMode);
            this.dbBG();
          }
        }
      });

      API.OauthLogin({
        data: this.form,

        callblack: res => {
          //console.log(res);
          if (res) {
            this.$localStorage.set("userInfo", res);
            this.$localStorage.set("Token", res.token);
            this.$localStorage.set("User", res.username);
            this.$localStorage.set('GroupID', res.groupid);
            this.$localStorage.set('UserID', res.usercode);
            this.$localStorage.set('UserDetail', res.username);
            this.$localStorage.set('UserExpireDate', res.expired_date);
            this.$localStorage.set("theme", "0");

            //this.$localStorage.set("DBMode", this.form.db);

            window.location.href = "/";
          }



        }
      });




      // if (this.form.username=="miskkf")
      // {
      //    if (this.form.password=="miskkf12345")
      //    {
      // this.$localStorage.set("Token", "TEST");
      // this.$localStorage.set("UserCode", "KKF"); 
      // this.$localStorage.set("User", "KKF"); 
      // this.$localStorage.set("lang", this.form.lang);    
      // window.location.href = "/";
      //    } else {


      // this.$localStorage.set("Token", "");
      // this.$localStorage.set("UserCode", ""); 
      // this.$localStorage.set("User", ""); 
      // this.$localStorage.set("lang", this.form.lang); 


      //     window.location.href = "/";

      //    }



      // } else 
      // {

      // this.$localStorage.set("Token", "");
      // this.$localStorage.set("UserCode", ""); 
      // this.$localStorage.set("User", ""); 
      // this.$localStorage.set("lang", this.form.lang); 


      //     window.location.href = "/";
      // }


      /*
           grecaptcha.ready(() => {
             grecaptcha.execute(this.recapchasite(), {
                 action: "signin"
               })
               .then(recaptcha => {
                 API.OauthLogin({
                   data: this.form,
                   recaptcha: recaptcha,
                   callblack: res => {
                     this.$localStorage.set("Token", res.token);
                     this.$localStorage.set("User", res.username);                 
                     //this.$router.push("/");
                     window.location.href = "/";
                   }
                 });
               });
           });
           */
    }
  }
};
</script>        

   

   

<style>
.btn-primary:hover {
  border-color: #21618c;
  background-color: #21618c;
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #949192;
  background-color: transparent;
}

.btn-block {
  font-weight: bold;

  display: block;

  color: #eaf2f8;
  background-color: #1f618d;
  border-color: #1f618d;
}

.btn-primary.disabled,
.btn-primary:disabled {
  /*
    color: #60153e;
    background-color: #d820b9;
    border-color: #d82048;  */

  font-weight: bold;

  outline: none;
  border: none;
  background: #ee9ba3;
  color: white;
  font-size: 14px;

  color: #7fb3d5;
  background-color: #d6eaf8;
  border-color: #d6eaf8;
}

.classic-form-page {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  /* background: #ddd url(../../assets/bg.png) repeat top left;  */
}
.classic-form-page2 {
  min-height: 100vh;
  z-index: 999;
  padding: 20px;
  position: relative;
}

.pointer {
  cursor: pointer;
}

@media screen and (min-width: 601px) {
  .user-full {
    display: inline;
    font-size: 14px;
  }
  .user-minimized {
    display: none;
    font-size: 12px;
  }
}

@media screen and (max-width: 600px) {
  .user-minimized {
    display: inline;
    font-size: 12px;
  }
  .user-full {
    display: none;
    font-size: 16px;
  }
}

.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0px solid #c8ced3;
  border-radius: 0.25rem;
  background-color: rgba(123, 125, 125, 0);
}

.p-3 {
  padding: 0rem !important;
}

.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #f0f3f5;
}

/* 


body{
  
    background-repeat:repeat-x;
 background-image:url("https://i.stack.imgur.com/b7z29.png");
  animation: movement 10s linear infinite; 
}

@keyframes movement{
  0% {
    background-position:0px 0px;
  }
  100%{
    background-position:560px 0px;
  }
} */

body {
  overflow-x: hidden;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Cordia New", sans-serif;
  padding: 0px !important;
  margin: 0px !important;
  background-color: #f7f7f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  color: #566573;

  color: #5d5f63;
  color: #61798a;
  background: #293949;
}

.c-main {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 0;
  padding-top: 2rem;
  background-color: #fff;
}

.pt-3,
.py-3 {
  padding-top: 1px !important;
  /* padding-bottom: 0px !important; */
}
</style>











