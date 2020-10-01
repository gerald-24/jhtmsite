<template>
  <div>
    <v-list shaped color="transparent">
      <a-skeleton :loading="loading" active avatar>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-icon
              color="white"
              v-text="item.icon"
              @click="openSong(item.text)"
            ></v-icon>
            <a-divider type="vertical"></a-divider>
            <v-list-item-content @click="openSong(item.text)">
              <v-list-item-title
                style="color: white"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
            <a-divider type="vertical"></a-divider
            ><v-icon
              color="white"
              @click="deleteSong(item.text)"
              style="margin-right: 10px"
              >mdi-trash-can</v-icon
            >
          </v-list-item>
        </v-list-item-group>
      </a-skeleton>
    </v-list>
    <a-modal v-model="viewSong">
      <song :title="viewTitle" :allSong="allSong" />
    </a-modal>
  </div>
</template>

<script>
import song from "./internalComponent/song";
import { dbf, firebaseAuth } from "@/firebaseData/db";
import swal from "sweetalert2";

export default {
  components: { song },
  data: () => ({
    loading: false,
    item: 1,
    items: [],
    viewSong: false,
    viewTitle: "",
    allSong: [],
  }),
  created() {
    // this.getSongList();
  },
  mounted() {
    dbf.collection("cities").onSnapshot(
      (querySnapshot) => {
        this.getSongList();
        console.log(`Received query snapshot of size ${querySnapshot.size}`);
        // ...
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
  },
  methods: {
    openSong(title) {
      this.viewTitle = title;
      this.viewSong = true;
    },

    /////////////////FIRE BASE//////////////////////
    getSongList() {
      this.loading = true;
      dbf
        .collection("Song List")
        .get()
        .then((res) => {
          let toSend = res.docs.map((r) => {
            dbf
              .collection("Song List")
              .doc(r.id)
              .get()
              .then((res2) => {
                this.allSong.push(res2.data());
                console.log(res2.data());
                // toSend = res.data();
              })
              .catch((err) => {
                console.log(err);
                // toSend = err;
              });
            return { text: r.id, icon: "mdi-music-circle-outline" };
          });
          this.items = toSend;
        })
        .catch((err) => {
          let toSend = err;
          console.log(toSend);
        });
      this.loading = false;
    },
    async deleteSong(title) {
      await firebaseAuth.onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          swal
            .fire({
              title: "Are you sure?",
              text: "This song will be Unavailable to view!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            })
            .then((result) => {
              if (result.value) {
                console.log(title);
                dbf.collection("Song List").doc(title).delete();
                swal.fire("Deleted!", "Song has been deleted.", "success");
                this.getSongList();
              } else swal.fire("Safe!", "Song is Safe!", "success");
            });
        } else {
          swal.fire("Login!", "Please Login First!", "warning");
        }
      });
    },
  },
};
</script>