 
<template>
  <div :class="darkmode? 'containerDark' : 'container'">
    <div :class="darkmode? 'questioncontainerDark' : 'questioncontainer'">
      <img src="../assets/sick.png" width="1000" height="300" style="margin-top: 75px;" />

      <div class="quesheading">
        <h2 :style="darkmode? 'color: #f5f5f5' : 'color : #121212'">{{$t('screening.screeningHeader')}}</h2>

        <div style="line-height:22px;" :style="darkmode? 'color: #f5f5f5' : 'color : #121212'">{{$t('screening.screeningContent')}}</div>
      </div>
      <div :class="darkmode? 'quesbuttoncontainerDark' : 'quesbuttoncontainer'">
        <router-link to="question" class="quesbutton">
          <p
            style="color : #fff; font-size:14px; font-weight : bold; text-align: center;"
          >{{$t('screening.screeningButton')}}</p>
        </router-link>
        <router-link to="resultHistory" class="viewhistorybutton" v-if="results.length > 0">
          <p
            style="color : #3F51B5; font-size:14px; font-weight : bold; text-align: center;"
          >{{$t('screening.screeningHistory')}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: localStorage.getItem("resultSession")
        ? JSON.parse(localStorage.getItem("resultSession"))
        : [],
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  mounted() {
    // lang will be automatically transported to the parameter.
    if (this.lang == "mm") {
      this.$root.$data.title = "ကျန်းမာရေး စစ်ဆေးခြင်း";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "Screening Kit";
    }
  },
  //working with event bus
  created() {
    this.$eventHub.$on("change-name", this.changeName);
    this.$darkModeBus.$on("dark-mode", this.changeDark)
  },
  methods: {
    changeDark(value){
        this.darkmode = value;
    },
    changeName(name) {
      // lang will be automatically transported to the parameter.
      this.lang = name;
      if (name == "mm") {
        this.$root.$data.title = "ကျန်းမာရေး စစ်ဆေးခြင်း";
      }
      if (name == "en") {
        this.$root.$data.title = "Screening Kit";
      }
    }
  }
};
/* eslint-enable no-console */
</script>

<style scoped>
.container-question
{
  display:flex;
  flex-direction: column;
  flex:1;
  height: 100%;
}
  /* question home */
  .quesheading
{
  line-height:30px;
  margin-left:20px;
  margin-right:20px;
  display:flex;
  flex-direction:column;
  flex:1;
}
.quesbuttoncontainer {
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
}
.quesbuttoncontainerDark {
  background-color: #121212;
  padding: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.quesbutton {
  border-radius: 10px;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #3f51b5;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  
}
.quesbutton:hover
{
  text-decoration: none;
}
.viewhistorybutton {
  border-radius: 10px;
  font-weight: bold;
  color: #3f51b5;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #d8dcf0;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
}
.viewhistorybutton:hover
{
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
}
</style>