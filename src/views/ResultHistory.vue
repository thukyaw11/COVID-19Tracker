<template>
  <div :class="darkmode? 'containerDark' : 'container'">
    <div class="resulthistorycontainerParent" v-if="click==false">
      <div class="resulthistorycontainer" v-if="results.length > 0">
        <div class="deletebuttonParent" v-if="results.length >= 3">
          <div class="deletebutton" @click="removeHistory()">
            <span class="material-icons">delete</span>
            &nbsp;&nbsp;Delete all history
          </div>
        </div>
        <br />
        <div class="resultContainerParent" v-for="(result,index) in results" :key="index">
          <div :class="darkmode? 'resultcontainerDark' : 'resultcontainer'">
            <div class="time">
              <div class="timeflex1">
                <span
                  class="material-icons"
                  :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
                >watch_later</span>
              </div>
              <div
                class="timeflex2"
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
              >{{result.dateTime}}</div>
            </div>
            <div class="responsehistory">
              <div
                class="responseflex1"
                v-if="result.resultLocal==true"
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
              >StayHome Response</div>
              <div
                class="responseflex1"
                v-if="result.resultLocal==false"
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
              >Emergency Response</div>

              <div class="responseflex2" @click="viewResponse(result.resultLocal)">View</div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div class="resulthistorycontainer" v-else style="margin-top: 200px;color : grey;">
        <router-link to="question" class="quesbutton">
          <p
            style="color : #fff; font-size:14px; font-weight : bold; text-align: center;"
          >Start Screening Myself</p>
        </router-link>
      </div>
    </div>
    <div v-if="click == true">
      <stayhome v-show="response == true"/>
      <emergency v-show="response == false"/>
    </div>
  </div>
</template>

<script>
import stayhome from "../components/stayhomeMobile";
import emergency from "../components/emergencyResponseMobile";
export default {
  components: {
    stayhome,
    emergency
  },
  data() {
    return {
      results: localStorage.getItem("resultSession")
        ? JSON.parse(localStorage.getItem("resultSession"))
        : [],
      click: false,
      response: "",
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  mounted() {
    if (this.lang == "mm") {
      this.$root.$data.title = "စစ်ဆေးမှု မှတ်တမ်း";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "Result History";
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
    removeHistory() {
      localStorage.clear();
      window.location.reload();
    },
    viewResponse(responseCheck) {
      this.click = true;
      this.response = responseCheck;
    },
    changeName(name) {
      // name will be automatically transported to the parameter.
      this.lang = name;
      if (name == "mm") {
        this.$root.$data.title = "စစ်ဆေးမှု မှတ်တမ်း";
      }
      if (name == "en") {
        this.$root.$data.title = "Result History";
      }
    }
  }
};
</script>

<style scoped>
.quesbutton {
  border-radius: 10px;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #3f51b5;
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}
.resultcontainer {
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
}
.resultcontainerDark {
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  background-color: #212121;
}
.resultContainerParent {
  margin-bottom: 15px;
  display: flex;
  width: 95%;
  height: 100px;
}
.time {
  padding: 5px;
  display: flex;
  flex: 1;
}
.responsehistory {
  padding: 5px;
  display: flex;
  flex: 1;
}
.timeflex1 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
}
.timeflex2 {
  display: flex;
  flex: 6;
  align-items: center;
  font-weight: bold;
}
.responseflex1 {
  display: flex;
  flex: 5;
  align-items: center;
  margin-left: 20px;
}
.responseflex2 {
  margin-right: 20px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}
.resulthistorycontainerParent {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.resulthistorycontainer {
  margin-top: 100px;
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.deletebuttonParent {
  display: flex;
  height: 45px;
  width: 95%;
  align-items: center;
  justify-content: center;
}
.deletebutton {
  border-radius: 15px;
  display: flex;
  height: 45px;
  color: #f44336;
  background-color: #ffcdd2;
  width: 95%;
  align-items: center;
  justify-content: center;
}
</style>