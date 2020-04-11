<template>
  <div class="container-emergency">
    <img src="../assets/emergency.jpg" width="1000" height="300" />

    <div class="splashheader">
      <h2>Emergency Response</h2>
    </div>
    <div class="splashbody">
      သင့်၌ ရောဂါပိုးကူးစက်ခံထားရနိုင်ချေမြင့်မားသဖြင့်ကျန်းမာရေး၀န်ထမ်းများသို့အလျင်အမြန်ဆက်သွယ်ပါ။
      <br />
    </div>

    <div class="splashbuttoncontainer">
      <a href="tel:911" class="splashbutton" style="color : #fff">Call 911</a>
      <router-link to="/contants" class="splashbuttonsecondary" style="color : #e6403a;">Emergency Contacts</router-link>
    </div>
  </div>
</template>

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
  background-color:#ffffff;
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