<template>
  <div>
    <a-input style="margin: 3px" addon-before="Title" v-model="title" />
    <a-input style="margin: 3px" addon-before="Version" v-model="version" />
    <a-tooltip placement="top">
      <template slot="title">
        <span>Please Separate with Comma's [Name,Name,Name]</span>
      </template>
      <a-input
        style="margin: 3px"
        addon-before="Composers"
        v-model="composers"
      />
    </a-tooltip>
    <a-input
      style="margin: 3px"
      addon-before="First Released"
      v-model="releaseDate"
    />
    <a-input
      style="margin: 3px"
      addon-before="BPM (beats per minute)"
      v-model="bpm"
    />
    <a-input style="margin: 3px" addon-before="Duration" v-model="duration" />
    <a-input style="margin: 3px" addon-before="Bit Rate" v-model="bitRate" />
    <a-input style="margin: 3px" addon-before="Language" v-model="language" />
    <a-input
      style="margin: 3px"
      addon-before="Youtube Link"
      v-model="youtube"
    />
    <a-input
      style="margin: 3px"
      addon-before="Facebook Link"
      v-model="facebook"
    />
    <a-input style="margin: 3px" addon-before="Original Key" v-model="mkey" />
    <a-textarea
      style="margin: 3px"
      v-model="lyric"
      :placeholder="lyricFormat"
      :auto-size="{ minRows: 3, maxRows: 20 }"
    />
    <a-button style="margin: 3px" block @click="saveData()">Save</a-button>
  </div>
</template>
<script>
import { dbf, firebaseAuth } from "@/firebaseData/db";
import swal from "sweetalert2";
export default {
  data() {
    return {
      title: "",
      version: "",
      composers: "",
      releaseDate: "",
      bpm: "",
      duration: "",
      bitRate: "",
      language: "",
      youtube: "",
      facebook: "",
      mkey: "",
      lyric: "",
      lyricFormat: `LYRICS
Per Chord please use Colon :
to anabled to Transpose later
and use curly {} brace to separate by Parts
Please Use this Format sample

Pre-Chorus{
     :G    :A     :D
sa paglipas ng panahon
              :G      :A     :D
ikaw pa rin Hesus ang Panginoon}

Thankyou`,
    };
  },
  methods: {
    saveData() {
      let toSave = {
        title: this.title,
        version: this.version,
        composers: this.composers,
        releaseDate: this.releaseDate,
        bpm: this.bpm,
        duration: this.duration,
        bitRate: this.bitRate,
        language: this.language,
        youtube: this.youtube,
        facebook: this.facebook,
        mkey: this.mkey,
        lyric: this.lyric,
        saveDate: Date(),
      };
      console.log(toSave);
      this.saveDoc("Song List", this.title, toSave);
    },
    ////////////////FIREBASE////////////////////////////
    saveDoc(collectionName, docName, data) {
      firebaseAuth.onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          let doc = dbf.collection(collectionName);
          doc.doc(docName).set(data);
          swal.fire("Safe!", "Song is Safe!", "success");
        } else {
          swal.fire("Login!", "Please Login First!", "warning");
        }
      });
    },
  },
};
</script>

<style scoped>
p {
  white-space: pre; /* collapse WS, preserve LB */
  word-break: keep-all;
}
</style>