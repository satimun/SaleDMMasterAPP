<template>
<div>
  <!-- <b-tabs>
    <b-tab>
      <template slot="title">
        <i class="icon-list"></i>
      </template>
    </b-tab>
    <b-tab>
      <template slot="title">
        <i class="icon-speech"></i>
      </template>
    </b-tab>
    <b-tab>
      <template slot="title">
        <i class="icon-settings"></i>
      </template>
    </b-tab>
  </b-tabs> -->
  <!--<button>test</button>-->
  
  <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-y="scrollHandle">    
    <div class="overflow-hidden" style="width:250px;">
      <div>
        <div class="text-center">
           
          <h6>{{this.$localStorage.get("UserCode" )}} : {{this.$localStorage.get("User" )}}</h6>
        </div>
        <hr class= "style1">
        <div>
          <button class="button buttonRed"  v-on:click="onSingout(event)" to="/member/signin" >Sign out</button>
        </div>
      </div>
    </div>
  </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { Switch as cSwitch } from "@/components/coreui";
import { API } from "@/shared/core";
export default {
  name: "DefaultAside",
  usercode:"",
  data: {
    form: {
        userCode: "",
        username: "",
        password: "",
        twofactor: ""
      }
  },
  components: {
    VuePerfectScrollbar,
    cSwitch
  },
  computed: {
    psSettings: () => {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX:
          getComputedStyle(document.querySelector("html")).direction !== "rtl",
        wheelPropagation: false,
        interceptRailY: styles => ({ ...styles, height: 0 }) 
         
         
      };
    }
  },
  methods: {
    scrollHandle(evt) {
       //console.log(this.$localStorage.get("User"))
    }
    , onSingout(evt) {
         //undefined
         this.usercode = this.$localStorage.get("UserCode" ) ;
      //   console.log(this.usercode );
        if (typeof y === "undefined") {
            try {
              API.OauthLogout({
                data:{usercode:this.usercode},
                    callblack: res => {
                    
                    }
                  });
            }
            catch(err) {
              
            }
            finally {
              this.$localStorage.remove("Token");
              this.$localStorage.remove("UserCode");  
              this.$localStorage.remove("User");  
            //  this.$localStorage.set("lang");  
              this.$router.push("/member/signin");
                
            }  
          } else {
              this.$localStorage.remove("Token");
              this.$localStorage.remove("UserCode");  
              this.$localStorage.remove("User");  
            //  this.$localStorage.set("lang");  
              this.$router.push("/member/signin");
          }
                      
    }   
  }
};
</script>

<style scoped lang="css">
.scroll-area {
  position: absolute;
  height: 100%;
  margin: auto;
}

 hr.style1{
      border-top: 1px solid #8c8b8b;
  } 

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

.buttonGreen {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
}

.buttonGreen:hover {
  background-color: #4CAF50;
  color: white;
}

.buttonBlue {
  background-color: white; 
  color: black; 
  border: 2px solid #008CBA;
}

.buttonBlue:hover {
  background-color: #008CBA;
  color: white;
}

.buttonRed {
  background-color: white; 
  color: black; 
  border: 2px solid #f44336;
  width : 100%;
  
}

.buttonRed:hover {
  background-color: #f44336;
  color: white;
}

.buttonGray {
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
}

.buttonGray:hover {background-color: #e7e7e7;}

.buttonBlack {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}

.buttonBlack:hover {
  background-color: #555555;
  color: white;
}
</style>
