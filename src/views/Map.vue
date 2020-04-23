<template>
  <div  style="margin-top:0px">
    <iframe
      title
      aria-label="Myanmar states choropleth map"
      id="datawrapper-chart-BtcmN"
      src="//datawrapper.dwcdn.net/krD5T/1/"
      scrolling="no"
      frameborder="0"
      style="padding-left:20px; padding-right:20px; padding-top:100px; height: 100%; width: 100% !important; border: none; background : black"
      :style="darkmode? 'background: #121212': 'background: #ffffff'"
     
    ></iframe>
  </div>
</template>


<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  mounted() {
    // lang will be automatically transported to the parameter.
    if (this.lang == "mm") {
      this.$root.$data.title = "မြေပုံ";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "Map";
    }
  },
  //working with event bus
  created() {
    this.$eventHub.$on("change-name", this.changeName);
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  methods: {
    changeDark(value) {
      this.darkmode = value;
      if (this.darkmode == true) {
        document.body.className = "home";
      } else {
        document.body.className = "intro";
      }
    },
    changeName(name) {
      // lang will be automatically transported to the parameter.
      this.lang = name;
      if (name == "mm") {
        this.$root.$data.title = "မြေပုံ";
      }
      if (name == "en") {
        this.$root.$data.title = "Map";
      }
    }
  }
};
/* eslint-enable no-console */
</script>

