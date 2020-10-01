<template>
  <div>
    <a-button-group size="small">
      <a-button type="primary" @click="cnt = cnt - 1">
        <a-icon type="left-circle" /> </a-button
      ><a-divider type="vertical" />
      <a-button type="primary" @click="cnt = 0">
        <a-icon type="down-circle" /> </a-button
      ><a-divider type="vertical" />
      <a-button type="primary" @click="cnt = cnt + 1">
        <a-icon type="right-circle" />
      </a-button> </a-button-group
    ><a-divider type="vertical" />KEY: {{ musicKey }}
    <a-divider type="vertical" /><a-switch
      v-model="sharp"
      checked-children="#"
      un-checked-children="b"
      default-checked
    />
    <br />
    <br />
    <h2>
      {{ title }}
      <a-divider type="vertical" />
      <a @click="gotofb()"><v-icon>mdi-facebook</v-icon></a>
      <a @click="gotoyt()"><v-icon>mdi-youtube</v-icon></a>
    </h2>
    <p>{{ music }}</p>
  </div>
</template>
<script>
import Chord from "chordjs";
export default {
  props: ["title", "allSong"],
  data() {
    return {
      sharp: true,
      cnt: 0,
    };
  },
  computed: {
    facebook() {
      let toReturn = this.allSong.filter((r) => {
        return r.title === this.title;
      });
      console.log(toReturn);
      if (!toReturn.length) {
        return {};
      } else {
        return toReturn[0].facebook;
      }
    },
    youtube() {
      let toReturn = this.allSong.filter((r) => {
        return r.title === this.title;
      });
      console.log(toReturn);
      if (!toReturn.length) {
        return {};
      } else {
        return toReturn[0].youtube;
      }
    },
    musicKey() {
      let toReturn = this.allSong.filter((r) => {
        return r.title === this.title;
      });
      console.log(toReturn);
      if (!toReturn.length) {
        return {};
      } else {
        return this.transposebyCount(toReturn[0].mkey);
      }
    },
    music() {
      let toReturn = this.allSong.filter((r) => {
        return r.title === this.title;
      });
      // console.log(toReturn);
      if (!toReturn.length) {
        return {};
      } else {
        let sp = toReturn[0].lyric
          .toString()
          .split("\n")
          .map((r) => {
            if (r.includes(":")) {
              let toTranspose = r.split(":").map((rx) => {
                let toConvert = rx;
                if (!rx) {
                  //
                } else {
                  toConvert =
                    this.transposebyCount(rx) + rx.replace(rx.trim(), "");
                }
                return toConvert;
              });
              // console.log(
              //   toTranspose.toString().replace(RegExp(",", "gi"), "")
              // );
              return toTranspose.toString().replace(RegExp(",", "gi"), "");
            } else {
              return r;
            }
          });
        let ret = sp.toString().replace(RegExp(",", "gi"), "\n");
        // console.log(ret);
        return ret;
      }
    },
  },
  methods: {
    gotofb() {
      window.open(this.facebook);
    },
    gotoyt() {
      window.open(this.youtube);
    },
    normalize() {
      var chord = Chord.parse("E#/B#"),
        normalizedChord = chord.normalize();
      normalizedChord.toString();
    },
    swift() {
      //Convert # to b and vice versa
      var chord = Chord.parse("Eb/Bb"),
        chord2 = chord.switchModifier();
      chord2.toString();
    },
    transposebyCount(chords) {
      let chord = Chord.parse(chords);
      let chord2;
      if (chord) {
        chord2 = chord.transpose(this.cnt);
        let chord3 = chord2.toString();
        let chord4 = Chord.parse(chord3);
        let chord5;
        if (this.sharp) {
          chord5 = chord4.useModifier("#");
        } else {
          chord5 = chord4.useModifier("b");
        }
        return chord5;
      } else {
        return chords;
      }
    },
    transpose(num) {
      var chord = Chord.parse("C/E"),
        chord2 = chord.transpose(num);
      chord2.toString();
    },
    transposeUpx(chords) {
      var chord = Chord.parse(chords);
      let chord2;
      if (chord) {
        chord2 = chord.transposeUp();
        return chord2.toString();
      } else {
        return chords;
      }
    },
    transposeDownx() {
      var chord = Chord.parse("Eb/Bb"),
        chord2 = chord.transposeDown();
      chord2.toString();
    },
  },
};
</script>
<style scoped>
p {
  white-space: pre; /* collapse WS, preserve LB */
  word-break: normal;
}
</style>