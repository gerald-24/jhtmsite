<template>
  <div class="home">
    <v-parallax :height="400" dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <span>
        <span>
          <a>
            <v-icon
              style="font-size: xxx-large; text-shadow: 3px 2px 11px darkblue; color:white;margin:15px"
            >mdi-home</v-icon>
          </a>
        </span>
        <span
          style="font-size: xxx-large; text-shadow: 3px 2px white; color:red;margin:5px; font-family: 'Knewave'"
        >Jesus</span>
        <span
          style="font-size: xx-large; text-shadow: 3px 2px white; color:#e6bf00;margin:5px; font-family: 'Knewave'"
        >Harvest Time</span>
        <span
          style="font-size: xx-large; text-shadow: 3px 2px white; color:#49ca44;margin:5px; font-family: 'Knewave'"
        >Ministries</span>
        <br />
        <span
          style="font-size: x-large; text-shadow: 1px 1px white; color:#e6bf00;margin-left:100px; font-family: 'Knewave'"
        >Your Family & Friendly Church</span>
      </span>
      <span
        class="bottomleft"
        style="font-size:large; text-shadow: 1px 1px white; color:red;margin:5px; font-family: 'Knewave'"
      >
        Feel Free to
        <span>
          <a
            style="font-size: x-large; text-shadow: 1px 1px white; color:#e6bf00;margin:5px; font-family: 'Knewave'"
          >Contact Us</a>
        </span>
      </span>
    </v-parallax>
    <v-parallax
      dark
      :height="lifeHeight"
      src="https://newevolutiondesigns.com/images/freebies/black-wallpaper-10.jpg"
    >
      <a-row align="top">
        <a-col :md="24" :lg="12">
          <span :style="titlestyle">LIVE LIFE TO THE FULLEST</span>
        </a-col>
        <a-col :md="24" :lg="12">
          <span :style="subheaderstyle">
            <!-- We are equippers of kingdom builders, strengthening the church and harvesting the world through Life Testimony and Holistic Ministries -->
            To see people encounter God and live life to the fullest.
          </span>
          <br />
          <br />
          <span
            :style="subheaderstyle"
          >Loving God is the core of who we are as a church. We express worship together in our Sunday gatherings and in small groups throughout the week. Christianity is not insular. Our church reaches out to people, showing the love of God in many ways.</span>
          <br />
          <br />
          <span
            :style="subheaderstyle"
          >A wildfire is kindled by the smallest spark. One visit could change your life.</span>
        </a-col>
      </a-row>
    </v-parallax>

    <v-parallax dark src="https://newevolutiondesigns.com/images/freebies/black-wallpaper-10.jpg">
      <br />
      <a-row>
        <a-col :md="24" :lg="12">
          <a>
            <v-parallax
              dark
              src="https://nyc3.digitaloceanspaces.com/fcw-static-new/app/uploads/sites/112/2019/11/12202718/bible-bw.jpg"
            >
              <span
                class="bottomleft"
                style="font-size: xx-large; text-shadow: 3px 2px white; color:#e6bf00;margin:20px; font-family: 'Knewave'"
              >CORE BELIEFS</span>
            </v-parallax>
          </a>
        </a-col>
        <a-col :md="24" :lg="12">
          <v-parallax
            dark
            style=" background-size: cover;"
            src="https://nyc3.digitaloceanspaces.com/fcw-static-new/app/uploads/sites/112/2019/11/19175935/small-groups-2.jpg"
          >
            <span
              class="bottomleft"
              style="font-size: xx-large; text-shadow: 3px 2px white; color:#e6bf00;margin:20px; font-family: 'Knewave'"
            >CELL GROUP</span>
          </v-parallax>
        </a-col>
      </a-row>
    </v-parallax>

    <v-parallax dark src="https://newevolutiondesigns.com/images/freebies/black-wallpaper-10.jpg">
      <br />
      <a-row no-gutter>
        <a-col :md="24" :lg="12">
          <a>
            <v-parallax
              dark
              src="https://c1.wallpaperflare.com/preview/314/932/10/sunset-beach-group-jump.jpg"
            >
              <span
                class="bottomleft"
                style="font-size: xx-large; text-shadow: 3px 2px white; color:#e6bf00;margin:20px; font-family: 'Knewave'"
              >YOUTH</span>
            </v-parallax>
          </a>
        </a-col>
        <a-col :md="24" :lg="12">
          <v-parallax
            dark
            style=" background-size: cover;"
            src="https://nyc3.digitaloceanspaces.com/fcw-static-new/app/uploads/sites/112/2019/11/12185832/kids-1920x1280.jpg"
          >
            <span
              class="bottomleft"
              style="font-size: xx-large; text-shadow: 3px 2px white; color:#e6bf00;margin:20px; font-family: 'Knewave'"
            >EVENTS</span>
          </v-parallax>
        </a-col>
      </a-row>
    </v-parallax>
    <v-parallax
      dark
      :height="distinctiveHeight"
      src="https://newevolutiondesigns.com/images/freebies/black-wallpaper-10.jpg"
    >
      <span style="font-size: xx-large;text-align:center; visibility: visible;">CHURCH DISTINCTIVES</span>
      <a-row no-gutter>
        <a-col :md="24" :lg="8">
          <span style="margin:15px;padding:15px">
            <center>
              <v-icon style="font-size:100px" color="grey">mdi-flag-variant</v-icon>
              <br />
              <span style="font-size: xx-large;">FREEDOM</span>
              <br />
              <br />
              <span
                style="font-size: large;"
              >You will know the truth and the truth will set you free.</span>
            </center>
          </span>
        </a-col>
        <a-col :md="24" :lg="8">
          <span style="margin:15px;padding:15px">
            <center>
              <v-icon style="font-size:100px" color="grey">mdi-lightbulb-group</v-icon>
              <br />
              <span style="font-size: xx-large;">COMMUNITY</span>
              <br />
              <br />
              <span
                style="font-size: large;"
              >By this everyone will know that you are my disciples, if you love one another.</span>
            </center>
          </span>
        </a-col>
        <a-col :md="24" :lg="8">
          <span style="margin:15px;padding:15px">
            <center>
              <v-icon style="font-size:100px" color="grey">mdi-book-cross</v-icon>
              <br />
              <span style="font-size: xx-large;">SERVANTHOOD</span>
              <br />
              <br />
              <span
                style="font-size: large;"
              >Even the Son of Man came not to be served, but to serve.</span>
            </center>
          </span>
        </a-col>
        <a-col :md="24" :lg="8">
          <span style="margin:15px;padding:15px">
            <center>
              <v-icon style="font-size:100px" color="grey">mdi-flag-variant</v-icon>
              <br />
              <span style="font-size: xx-large;">PRAYER</span>
              <br />
              <br />
              <span
                style="font-size: large;"
              >The effective, fervent prayer of a righteous man avails much.</span>
            </center>
          </span>
        </a-col>
        <a-col :md="24" :lg="8">
          <span style="margin:15px;padding:15px">
            <center>
              <v-icon style="font-size:100px" color="grey">mdi-lightbulb-group</v-icon>
              <br />
              <span style="font-size: xx-large;">HONOR</span>
              <br />
              <br />
              <span
                style="font-size: large;"
              >Be devoted to one another in love. Honor once another above yourselves.</span>
            </center>
          </span>
        </a-col>
        <a-col :md="24" :lg="8">
          <span style="margin:15px;padding:15px">
            <center>
              <v-icon style="font-size:100px" color="grey">mdi-star</v-icon>
              <br />
              <span style="font-size: xx-large;">GENEROSITY</span>
              <br />
              <br />
              <span
                style="font-size: large;"
              >let each one give as he purposes in his heart, not grudgingly or of necessity; for God loves a cheerful giver.</span>
            </center>
          </span>
        </a-col>
      </a-row>
    </v-parallax>
  </div>
</template>

<script>
import style from "../components/designs/style";
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      titlestyle: style.title[0].style,
      subheaderstyle: style.subHeaders[0].style,
    };
  },
  components: {
    //
  },
  computed: {
    distinctiveHeight() {
      let breakpoint = this.$vuetify.breakpoint.name
      let height = '500px'
      if (breakpoint === 'xs') height = "800px"
      if (breakpoint === 'sm') height = "400px"
      if (breakpoint === 'md') height = "500px"
      if (breakpoint === 'lg') height = "600px"
      if (breakpoint === 'xl') height = "800px"

      return height
    },
    lifeHeight() {
      let breakpoint = this.$vuetify.breakpoint.name
      let height = '500px'
      if (breakpoint === 'xs') height = "800px"
      if (breakpoint === 'sm') height = "400px"
      if (breakpoint === 'md') height = "500px"
      if (breakpoint === 'lg') height = "600px"
      if (breakpoint === 'xl') height = "800px"

      return height
    },
  },
  methods: {
    //
  },
};
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5em;
  color: #ffffff;
  font-weight: 500;
}
#title {
  font-size: xxx-large;
}
.bottomleft {
  position: absolute;
  bottom: 8px;
  left: 16px;
  font-size: 18px;
}

</style>
