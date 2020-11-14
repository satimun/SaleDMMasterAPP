<template>
  <div>
    <div v-show="!verify">
      <b-form @submit="onSubmit">
        <b-form-group
          label-for="username"
          :invalid-feedback="'This is a required field and must be at least 7 characters'"
          :state="$v.form.username.required ? !$v.form.username.$invalid : null"
        >
          <b-input-group>
            <b-input-group-prepend>
              <span class="input-group-text">
                <i class="fa fa-user"></i>
              </span>
            </b-input-group-prepend>
            <b-form-input
              id="username"
              type="text"
              v-model="form.username"
              placeholder="Username"
              maxlength="7"
              :state="$v.form.username.required ? !$v.form.username.$invalid : null"
              autocomplete="off"
              required
              trim
            />
          </b-input-group>
        </b-form-group>

         <b-form-group
          label-for="email"
          invalid-feedback="'Invalid format.'"
          :state="$v.form.email.required ? !$v.form.email.$invalid : null"
        >
          <b-input-group>
            <b-input-group-prepend>
              <span class="input-group-text">
                <i class="fa fa-at"></i>
              </span>
            </b-input-group-prepend>
            <b-form-input
              id="email"
              type="email"
              v-model="form.email"
              placeholder="Email"
              autocomplete="off"
              :state="$v.form.email.required ? !$v.form.email.$invalid : null"
              trim
              required
            />
          </b-input-group>
        </b-form-group> 

        <b-form-group
          label-for="password"
          :invalid-feedback="'password is Incorrect.'"
          :state="$v.form.password.required ? !$v.form.password.$invalid : null"
        >
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
              placeholder="Password"
              @focus="passfocus = true"
              @blur="passfocus = false"
              :state="$v.form.password.required ? !$v.form.password.$invalid : null"
              autocomplete="off"
              trim
              required
            />
          </b-input-group>
        </b-form-group>
        <div class="alert alert-info" v-show="passfocus">
          <h6>Password must contain the following:</h6>
          <p>
            <i
              class="fa fa-check-circle"
              :class="{'text-success': lower, 'text-white': !lower}"
              style="color: rgb(40, 167, 69);"
            ></i> A lowercase letter (a-z)
          </p>
          <p>
            <i class="fa fa-check-circle" :class="{'text-success': upper, 'text-white': !upper}"></i> A capital letter (A-Z)
          </p>
          <p>
            <i class="fa fa-check-circle" :class="{'text-success': number, 'text-white': !number}"></i> A number (0-9)
          </p>
          <!--<p>
            <i
              class="fa fa-check-circle"
              :class="{'text-success': speacial, 'text-white': !speacial}"
            ></i> A speacial letter (!@#-$%^*;)
          </p>-->
          <p>
            <i class="fa fa-check-circle" :class="{'text-success': length, 'text-white': !length}"></i> Minimum 8 characters
          </p>
        </div>

        <b-form-group
          label-for="confpass"
          :invalid-feedback="'password does not match.'"
          :state="$v.form.confpass.required ? !$v.form.confpass.$invalid : null"
        >
          <b-input-group>
            <b-input-group-prepend>
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </b-input-group-prepend>
            <b-form-input
              id="confpass"
              type="password"
              v-model="form.confpass"
              placeholder="Confirm Password"
              autocomplete="off"
              :state="$v.form.confpass.required ? !$v.form.confpass.$invalid : null"
              trim
            />
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-button
            block
            variant="primary"
            type="submit"
            :disabled="$v.form.$invalid"
          >{{$t('dic.signup')}}</b-button>
        </b-form-group>
      </b-form>
    </div>
    <div v-show="verify && !verifySuccess">
      <p class="text-center"> ลงทะเบียนเสร็จเรียบร้อยแล้ว
      </p>
      <p></p>
      <b-form-group>
        <b-button block variant="primary" v-on:click="ResendClick()">ตกลง</b-button>
      </b-form-group>
      <!-- <hr />
      <h6>หลังจากที่ลงทะเบียนเสร็จเรียบร้อยแล้ว</h6>
      <ul>
        <li>1.ติดต่อ admin เพื่อขอสิทธิ์เข้าใช้งาน</li>
        <li>2.หลังจากที่ Admin อนุมัติเข้าใช้งานแล้วให้ Signin เข้าสู่ระบบโดยใช้ Username+Password ที่ลงทะเบียน</li>

      </ul> -->
    </div>
    <!-- <div v-show="verifySuccess">
      <div v-show="vsuccess">
        <p class="text-center text-success" style="font-size:80px;">
          <span class="fa fa-check-square"></span>
        </p>
        <p class="text-center text-success">Email Verification Success</p>
        <h4 class="text-center">Welcome To KKF Connect Staff.</h4>
      </div>
      <div v-show="!vsuccess">
        <p class="text-center text-danger" style="font-size:80px;">
          <span class="fa fa-window-close"></span>
        </p>
        <p class="text-center text-danger">Email Verification Fail.</p>
        <h4 class="text-center">Please Contact Administrator.</h4>
      </div>
    </div> -->
  </div>
</template>

<script>
import {
  required,
  minLength,
  sameAs,
  email,
  integer
} from "vuelidate/lib/validators";
import { GetObjVal, AlertMessage } from "@/shared/utils";
import { API } from "@/shared/core";
import dic from "@/shared/dic";

export default {
  name: "signup",
  i18n: {
    messages: {
      en: {
        codevalid: "This is a required field and must be at least 2 characters."
      },
      th: { codevalid: "จำเป็นต้องมี 2 ตัวอักษร" }
    },
    sharedMessages: dic
  },
  computed: {
    verify() {
      return this.$route.query.email != undefined;
    },
    verifySuccess() {
      return (
        this.$route.query.email != undefined &&
        this.$route.query.code != undefined
      );
    }
  },
  mounted() {
    if (this.verifySuccess) {
      API.UserVerify({
        data: { email: this.$route.query.email, code: this.$route.query.code },
        recaptcha: this.recaptcha,
        callblack: res => {
          this.vsuccess = true;
        }
      });
    }
  },
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        confpass: ""
      },
      passfocus: false,
      lower: false,
      upper: false,
      number: false,
      /*speacial: false,*/
      length: false,
      vsuccess: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        integer,
        minLength: minLength(7)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        passvalid(val) {
          this.lower = /[a-z]+/.test(val);
          this.upper = /[A-Z]+/.test(val);
          this.number = /[0-9]+/.test(val);
          //this.speacial = /[!@#-$%^*;]+/.test(val);
          this.length = GetObjVal(val, "length") >= 8;
          return (
            this.lower &&
            this.upper &&
            this.number &&
            /*this.speacial &&*/
            this.length
          );
        },
        minLength: minLength(8)
      },
      confpass: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

  API.UserRegister({
              data: this.form,
              callblack: res => {
                this.$router.push("/member/signup?email=" + res.email);
              }
            });


     



    },
    ResendClick() {

 this.$router.push("/member/signin");

      // API.UserResendEmail({
      //   data: { email: this.$route.query.email },
      //   recaptcha: this.recaptcha,
      //   callblack: res => {
      //     AlertMessage("success");
      //   }
      // });
    }
  },
  watch: {}
};
</script>
