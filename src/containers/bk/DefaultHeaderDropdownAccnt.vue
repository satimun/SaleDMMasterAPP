<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="img/avatars/user.png"
        class="img-avatar"
        alt="" />
    </template>
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>{{ user }}</strong></b-dropdown-header>
      <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>
      <b-dropdown-item v-on:click="LogoutClick()"><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@/components/coreui'
import { API } from "@/shared/core";
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  computed: {
    user() {
      return this.$localStorage.get("User");
    }
  },
  mounted() {
    
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    LogoutClick() {
      API.OauthLogout({
        callblack: res => {
          this.$localStorage.remove("Token");
          this.$localStorage.remove("User");
          this.$router.push("/member/signin");
        }
      });
    }
  }
}
</script>
