<template>
  <v-container>
    <!-- overflow-y: scroll; height: 72vh; -->
    <a-card
      style="height: 500px; background-color: rgba(31, 31, 31, 0.77)"
      dark
    >
      <span slot="title" style="color: white">
        <v-icon color="white">{{ selectItem.icon }}</v-icon>
        <a-divider type="vertical"></a-divider>
        {{ selectItem.title }}
        <a-divider type="vertical" />
        <!-- <a-button
          v-if="selectItem.title === 'Song List'"
          shape="circle"
          color="transparent"
          > -->
        <v-icon
          v-if="selectItem.title === 'Song List'"
          color="white"
          @click="beforeAdd()"
          >mdi-plus-circle</v-icon
        >
        <!-- </a-button
        > -->
      </span>
      <v-navigation-drawer
        :clipped-right="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        :permanent="permanent"
        :src="bg"
        absolute
        dark
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img :src="avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ Application }}</v-list-item-title>
              <v-list-item-subtitle>{{ Subtext }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="selectItems(item)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <home
        v-if="selectItem.title === 'Home'"
        :selected="selectItem"
        :items="items"
      />
      <center>
        <v-btn
          v-if="selectItem.title === 'Home'"
          outlined
          color="indigo"
          @click="selectSongList()"
          >Click Here ></v-btn
        >
      </center>
      <song-list v-if="selectItem.title === 'Song List'" />
    </a-card>

    <a-modal v-model="addSong">
      <add />
    </a-modal>
  </v-container>
</template>

<script>
import home from "../components/musicMinistry/home";
import songList from "../components/musicMinistry/songList";
import add from "../components/musicMinistry/internalComponent/add";
import { firebaseAuth } from "@/firebaseData/db";
import swal from "sweetalert2";
export default {
  components: { home, songList, add },
  data() {
    return {
      avatar: "https://cf.shopee.ph/file/8b853035f90e15bba3f8b4d7b95a9c5d",
      Application: "Music Ministry",
      Subtext: "Radical Light Worship",
      addSong: false,
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-circle" },
        { title: "Song List", icon: "mdi-music-box-multiple-outline" },
        { title: "Members", icon: "mdi-account-group" },
        { title: "About", icon: "mdi-forum" },
      ],
      selectItem: {},
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: true,
      permanent: true,
      miniVariant: true,
      expandOnHover: true,
      background: true,
    };
  },
  created() {
    console.log(this);
    this.selectItem = this.items[0];
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
  methods: {
    selectItems(item) {
      console.log(item);
      this.selectItem = item;
    },
    selectSongList() {
      this.selectItem = this.items[1];
    },
    async beforeAdd() {
      let able = false;
      await firebaseAuth.onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          able = true;
          // swal.fire("Safe!", "Song is Safe!", "success");
        } else {
          swal.fire("Login!", "Please Login First!", "warning");
        }
      });
      if (able) {
        console.log(able);
        this.addSong = true;
      }
    },
  },
};
</script>