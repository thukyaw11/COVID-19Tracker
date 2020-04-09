<template>
  <div class="container-stayhome">
    <img src="../assets/stayhome.jpg" width="1000" height="300" />

    <div class="splashheader">
      <h2>Stay Home Response</h2>
    </div>
    <div class="splashbody">
      <div class="list">
        <div class="listflex1">
          <i class="fas fa-thermometer-half" style="font-size:18px;"></i>
        </div>
        <div class="listflex2">မည်သည့်စိုးရိမ်ဖွယ်လက္ခဏာမှမရှိပါ။</div>
      </div>
      <div class="list">
        <div class="listflex1">
          <i class="fas fa-house-user" style="font-size:18px;"></i>
        </div>
        <div class="listflex2">အတတ်နိုင်ဆုံးအိမ်၌သာနေထိုင်ပါ။</div>
      </div>
      <div class="list">
        <div class="listflex1">
          <i class="fas fa-pump-soap" style="font-size:18px;"></i>
        </div>
        <div class="listflex2">မကြာခဏလက်ဆေးပါ။</div>
      </div>
      <div class="list" style="align-items:flex-start; margin-top:4px;">
        <div class="listflex1" style="align-items:flex-start; margin-top:5px;">
          <i class="fas fa-shield-virus" style="font-size:18px;"></i>
        </div>
        <div
          class="listflex2"
        >COVID19 ရောဂါလက္ခဏာများဖြစ်သော‌ဖျားနာခြင်း၊ချောင်းဆိုးခြင်း၊အသက်ရှုရခက်ခဲခြင်း၊အော့အန်ခြင်းတို့ဖြစ်လာပါကအရေးပေါ်ဖုန်းနံပါတ်များသို့ဆက်သွယ်ပါ။</div>
      </div>
      <div class="list">
        <div class="listflex1">
          <i class="fas fa-star-of-life" style="font-size:18px;"></i>
        </div>
        <div class="listflex2">ကျန်းမာရေး၀န်ထမ်းများနှင့်ပူးပေါင်းဆောင်ရွက်ပါ။</div>
      </div>
    </div>
    <div class="splashbuttoncontainer">
      <router-link to="/contants" class="splashbutton" style="color : #fff;">Emergency Contacts</router-link>
    </div>
  </div>
</template>


<style scoped>
.container-stayhome {
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
  flex: 1;
}
.splashbody {
  color: #424242;
  font-size: 14px;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.list {
  padding: 5px;
  flex: 1;
  display: flex;
  flex-direction: row;
}
.listflex1 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.listflex2 {
  display: flex;
  flex: 7;
  margin-left: 10px;
  align-items: center;
  justify-content: flex-start;
}
img {
  width: 100%;
  height: auto;
}
.splashbuttoncontainer {
  padding: 30px;
  display: flex;
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
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-align: center;
}
</style>