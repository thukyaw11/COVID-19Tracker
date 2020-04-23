<template>
  <div class="container-emergency">
    <goback :darkmode="darkmode"/>
    <img src="../assets/emergency_contact.png" width="1000" height="300" />
    <div>
      <div class="splashheader">
        <h2>{{$t('resultPage.emergencyResponse')}}</h2>
      </div>
      <div class="splashbody">
        <span
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
        >သင့်၌ ရောဂါပိုးကူးစက်ခံထားရနိုင်ချေမြင့်မားသဖြင့်ကျန်းမာရေး၀န်ထမ်းများသို့အလျင်အမြန်ဆက်သွယ်ပါ။</span>
        <br />
      </div>
    </div>

    <div :class="darkmode? 'splashbuttoncontainerDark':'splashbuttoncontainer'" >
      <a href="tel:911" class="splashbutton" style="color : #fff">{{$t('resultPage.contactnine')}}</a>
      <router-link
        to="/contants"
        class="splashbuttonsecondary"
        style="color : #e6403a;"
      >{{$t('resultPage.phno')}}</router-link>
    </div>
  </div>
</template>
<script>
import goback from "../components/goback";
export default {
  data() {
    return {
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  components: {
    goback
  },
  methods: {
    changeDark(value) {
      this.darkmode = value;
    }
  },
  created() {
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  }
};
</script>
<style scoped>
.container-emergency {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 70px;
}
.splashheader {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.splashbody {
  color: #424242;
  font-size: 14px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
}

img {
  width: 100%;
  height: auto;
}
.splashbuttoncontainer {
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #eee;
  padding: 20px;
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.splashbuttoncontainerDark {
  background-color: #121212;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #212121;
  padding: 20px;
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.splashbutton {
  border-radius: 10px;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #e6403a;
  width: 100%;
  height: 50px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.splashbuttonsecondary {
  margin-top: 8px;
  border-radius: 10px;
  font-weight: bold;
  color: #e6403a;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #ffcdd2;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px;
}
</style>