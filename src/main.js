// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
//import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // ถ้าไม่ใส่อะไรข้างหน้า มันจะไปเอามาจาก node_modules
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import VueLocalStorage from 'vue-localstorage'
import AsyncComputed from 'vue-async-computed'

import VueProgressBar from 'vue-progressbar'

import AnimatedNumber from "animated-number-vue";

import Multiselect from 'vue-multiselect'

import Datepicker from 'vuejs-datepicker'
import gridmobile from './components/gridmobile.vue'

import gridv2 from './components/gridv2.vue'
import cellinput from './components/cellinput.vue'

import grid from './components/grid.vue'
import gridmodify from './components/gridmodify.vue'
import deletedetail from './components/deletedetail'



//import dynamic from './components/dynamic.vue'
//import render from './components/render.vue'

import resize from 'vue-resize-directive'

import Draggable from 'vuedraggable'

import Notifications from 'vue-notification'

import VueI18n from 'vue-i18n'
import dic from '@/shared/dic'

Vue.use(VueI18n);

// todo
// cssVars()

Vue.use(BootstrapVue);

Vue.use(Vuelidate);

Vue.use(VueLocalStorage);

Vue.use(AsyncComputed);

Vue.component('multiselect', Multiselect)
Vue.component('datepicker', Datepicker)

Vue.component('draggable', Draggable)

Vue.component("grid", grid)
Vue.component("gridmobile", gridmobile)


Vue.component("AnimatedNumber", AnimatedNumber)


Vue.component("gridv2", gridv2)
Vue.component("cellinput", cellinput)

Vue.component("gridmodify", gridmodify)
Vue.component("delete-detail", deletedetail)

Vue.use(Notifications)

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

import pageheader from './components/pageheader'
Vue.component("pageheader", pageheader)

//import StreamBarcodeReader  from "vue-barcode-reader";
//Vue.use(StreamBarcodeReader);


//import VueQuagga from 'vue-quaggajs';

// register component 'v-quagga'
//Vue.use(VueQuagga);

//Vue.component("dynamic", dynamic);
//Vue.component("render", render);

import {
    GetDateView,
    AlertMessage,
    ConfirmDialog,
    ObjCopy,
    ObjResetValue,
    GetLastUpdate,
    GetDateTimeFormat,
    GetObjArr,
    GetArrObj,
    GetIdDes,
    GetObjVal,
    GetAssetDes,
    GetOfficerDes,
    GetCompanyList
} from "@/shared/utils";

const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}
Vue.use(VueProgressBar /*, options*/);

Vue.mixin({
    data: () => {
        return {
            recapchasite: () => {
                if (this.mode) return '6LfMYZwUAAAAACakvKhnLY1fkpTtlDIxlylh7EQ5'; /*prod*/
                else return '6LcGeZkUAAAAAD92UgobQsljniVJ8Y4NzWiRIzdL'; /*dev*/
            },

            dbmode: 0,

            DBServer: '191.20.2.x',
            dbStyle: {
                color: 'hsl(205, 40%, 29%)' //'#B7950B'
                //background: "linear-gradient(70deg, transparent 67%, hsla(0, 0%, 100%, .05) 67%, hsla(0, 0%, 100%, .025)), linear-gradient(#ddd 0px, transparent 0px), linear-gradient(#A9CCE3, #7FB3D5);"
            },
            dbTitle: ' ',
            onLine: navigator.onLine,
            showBackOnline: false,
            refreshing: false,
            registration: null,
            updateExists: false,
            dbTable: ' ',

        }
    },

    methods: {
        progressColor (progress) {
            if (progress <= 20) {
                return "danger"
            } else if (progress <= 40) {
                return "warning"
            } else if (progress <= 60) {
                return "info"
            } else if (progress <= 80) {
                return "primary"
            } else {
                return "success"
            }
        },
        dbBG () {

            if (this.$localStorage.get("DBMode") == 0) {
                this.dbStyle.color = 'hsl(205, 40%, 29%)'; //#024278
                this.dbTitle = "  ";
            } else if (this.$localStorage.get("DBMode") == 1) {
                this.dbStyle.color = '#673AB7';
                this.dbTitle = " (ทดสอบ) ";
            } else {
                this.dbStyle.color = '#3a97b6';
                this.dbTitle = " (Local) ";
                AlertMessage("warnimg", 'Session หมดอายุ กรุณาเข้าระบบอีกครั้ง');
                this.removeLocalStorage();
                //this.$router.push("/member/signin");

            }

        },

        removeLocalStorage () {
            this.$localStorage.remove("Token");
            this.$localStorage.remove("User");
            this.$localStorage.remove("TokenTime");
            this.$localStorage.remove("GroupID");
            this.$localStorage.remove("UserID");
            this.$localStorage.remove("UserDetail");
            this.$localStorage.remove("UserExpireDate");
            window.location.href = "/member/signin";

        },
    },
})

Vue.directive("upper", { //v-upper
    bind (el, binding, vnode) {
        el.addEventListener('keyup', () => {
            el.value = el.value ? el.value.toUpperCase() : el.value;
        });
    }
})

Vue.filter('number', function (value, decimal) {
    if (isNaN(value)) return '0'
    if (decimal) {
        value = eval(value).toFixed(decimal);
    } else {
        value = value.toString();
    }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});


const i18n = new VueI18n({
    locale: 'th',
    messages: dic
})

export default new Vue({
    el: '#app',
    router,
    /* การสลับหน้าโดยไม่ต้อง Load ใหม่ */
    template: '<App/>',
    i18n,
    components: {
        App
        /*Multiselect,*/
        /*Datepicker,*/
        /*grid*/
    },
    filters: {
        number: Vue.filter('number')
    },
    directives: {
        resize
    }
}).$mount('#app')