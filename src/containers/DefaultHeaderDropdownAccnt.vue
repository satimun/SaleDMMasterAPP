<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <span class="user-full"><strong>{{ user }}</strong></span>
      <span class="user-minimized"><strong>{{ user_code }}</strong></span>
      <img
        src="img/avatars/user.png"
        class="img-avatar"
        alt="User" />
    </template>
    <template slot="dropdown">

      

      <b-dropdown-header tag="div" class="text-center">
        <span class="user-full">{{ user }}</span>
        <span class="user-minimized">{{ user_code }}</span>
      </b-dropdown-header>
      <b-dropdown-item><i class="fa fa-user" />
        <span class="user-full">{{ department }}</span>
        <span class="user-minimized">{{ dept_code }}</span>       
       </b-dropdown-item>
      <b-dropdown-item v-on:click="LogoutClick()"><i class="fa fa-lock" /> Logout</b-dropdown-item>
     
    </template>
  </AppHeaderDropdown>
</template>

<script>


import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  computed: {
    
    user() {
      var userInfo = "";
      if (this.$localStorage.get("UserCode")) {
        userInfo = this.$localStorage.get("UserCode") + ' : ' + this.$localStorage.get("User");
      } 
      return userInfo;
    },
    user_code() {
      var userInfo = "";
      if (this.$localStorage.get("UserCode")) {
        userInfo = this.$localStorage.get("UserCode") ;
      } 
      return userInfo;
    },
    department() {
      var dept = "";
      if (this.$localStorage.get("DeptCode")) {
        dept = this.$localStorage.get("DeptCode") + ' - ' + this.$localStorage.get("DeptName");
      } 
      return dept;
    },
    dept_code() {
      var dept = "";
      if (this.$localStorage.get("DeptCode")) {
        dept = this.$localStorage.get("DeptCode") ;
      } 
      return dept;
    }
  },
  mounted() {
    
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    LogoutClick() {
      this.usercode = this.$localStorage.get("User") ;

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
    }
  }
}
</script>

<style scoped>



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
</style>
