<template>
  <div>
    <a-menu v-model="current" mode="horizontal" :theme="theme">
      <a-menu-item
        :disabled="!items.to"
        v-for="items in noSubmenu1"
        :key="items.key"
        @click="topage(items.to)"
      >
        <v-icon v-if="theme === 'dark'" color="#ffffff" v-text="items.icon" />
        <v-icon v-else color="teal darken-2" v-text="items.icon" />
        {{ items.name }}
      </a-menu-item>

      <a-sub-menu v-for="items in withSubmenu" :key="items.key">
        <span slot="title" class="submenu-title-wrapper">
          <v-icon v-if="theme === 'dark'" color="#ffffff" v-text="items.icon" />
          <v-icon v-else color="teal darken-2" v-text="items.icon" />
          {{ items.name }}
        </span>
        <a-menu-item
          :disabled="!sub.to"
          v-for="sub in items.submenu"
          :key="sub.key"
          @click="topage(sub.to)"
        >
          <v-icon v-if="theme === 'dark'" color="#ffffff" v-text="items.icon" />
          <v-icon v-else color="teal darken-2" v-text="items.icon" />
          {{ sub.name }}
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item
        :disabled="!items.to"
        v-for="items in noSubmenu2"
        :key="items.key"
        @click="topage(items.to)"
      >
        <v-icon v-if="theme === 'dark'" color="#ffffff" v-text="items.icon" />
        <v-icon v-else color="teal darken-2" v-text="items.icon" />
        {{ items.name }}
      </a-menu-item>




      <!-- ////////////////// v-if="withAuth==true"-->
      <a-menu-item  @click="topage(login.to)">
        <v-icon v-if="theme === 'dark'" color="#ffffff" v-text="login.icon" />
        <v-icon v-else color="teal darken-2" v-text="login.icon" />
      </a-menu-item>
      <a-menu-item  @click="toLogout()">
        <v-icon v-if="theme === 'dark'"  color="#ffffff"  >mdi-logout</v-icon>
        <v-icon v-else color="teal darken-2"  >mdi-logout</v-icon>
      </a-menu-item>
      <a-menu-item>
        <a-switch :default-checked="false" @change="changeTheme" />
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import nav from "./navigations";
import {firebaseAuth} from '@/firebaseData/db'
export default {
  data() {
    return {
      withAuth:false,
      current: ["home"],
      theme: "dark",
      login: {key: 'Login',
        name: 'Login',
        icon: 'mdi-login',
        to:'Login'}
    };
  },
  created() {this.checkAuth},
  computed: {
    noSubmenu1() {
      let firstMenu = nav.HomeNav.filter((r) => {
        return !r.submenu;
      });
      return [firstMenu[0], firstMenu[1]];
    },
    withSubmenu() {
      return nav.HomeNav.filter((r) => {
        return r.submenu;
      });
    },
    noSubmenu2() {
      let firstMenu = nav.HomeNav.filter((r) => {
        return !r.submenu;
      });
      return [firstMenu[2], firstMenu[3]];
    },
  },
  methods: {
   async toLogout(){
      await firebaseAuth.signOut()
      this.withAuth = false
      console.log(this.withAuth)
      this.topage('')
    },
    topage(page) {
      console.log(`/${page}`);
      // if (this.$route.path !== `/${page}`)
      this.$router.push(`/${page}`);
    },
    changeTheme(checked) {
      this.theme = checked ? "light" : "dark";
    },
    async checkAuth(){
        let auth = false
      await firebaseAuth.onAuthStateChanged(function (user) {
        if (user) {
            auth = true
        } else {
        // 
        }
      });
      if(auth){
          this.withAuth = true
      }
    }
  },
};
</script>