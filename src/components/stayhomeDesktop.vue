<template>

    <div class="desbody">
      <div class="mainflex">
        <div class="flexbody">
          <div class="flexbodycontainer">
            <div class="flexbodyheader">Stay Home Response</div>
            <div class="flexbodycontent">
              <br />
              <div style="width:90%; color:#757575;">
                <div class="divcontainer">
                  <div class="div1">
                    <i class="fas fa-thermometer-half" style="font-size:28px;"></i>
                  </div>
                  <div class="div2">မည်သည့် စိုးရိမ်ဖွယ် လက္ခဏာမှမရှိပါ။</div>
                </div>
                <div class="divcontainer">
                  <div class="div1">
                    <i class="fas fa-house-user" style="font-size:28px;"></i>
                  </div>
                  <div class="div2">အတတ်နိုင်ဆုံး အိမ်၌သာနေထိုင်ပါ။</div>
                </div>
                <div class="divcontainer">
                  <div class="div1">
                    <i class="fas fa-pump-soap" style="font-size:28px;"></i>
                  </div>
                  <div class="div2">မကြာခဏ လက်ဆေးပါ။</div>
                </div>
                <div class="divcontainer">
                  <div class="div1">
                    <i class="fas fa-shield-virus" style="font-size:28px;"></i>
                  </div>
                  <div
                    class="div2"
                  >COVID19 ရောဂါလက္ခဏာများဖြစ်သော‌ဖျားနာခြင်း၊ချောင်းဆိုးခြင်း၊အသက်ရှုရခက်ခဲခြင်း၊အော့အန်ခြင်းတို့ဖြစ်လာပါကအရေးပေါ်ဖုန်းနံပါတ်များသို့ဆက်သွယ်ပါ။</div>
                </div>
                <div class="divcontainer">
                  <div class="div1">
                    <i class="fas fa-star-of-life" style="font-size:28px;"></i>
                  </div>
                  <div class="div2">ကျန်းမာရေး၀န်ထမ်းများနှင့် ပူးပေါင်းဆောင်ရွက်ပါ။</div>
                </div>
              </div>

              <div type class="button">Emergency contacts</div>
            </div>
          </div>
        </div>
        <div class="fleximage">
          <img src="../assets/stay_home.png" width="500" height="500" />
        </div>
      </div>
    </div>

</template>

<style scoped>
  
 /*updated latest desktop ui*/
  .classdesbody {
    flex-direction: row;
    display: flex;
    width: 100%;
    height: 88%;
    align-items:center;
    justify-content:center;
  }
  .mainflex {
    
    display: flex;
    flex:1;

  }
.desfooter
{
  height: 80px;
  display: flex;
  margin-right: 35px;
  justify-content: flex-end;

}
.flexbody
{
  display: flex;
  flex: 3;

  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.flexbodycontainer
{
  display: flex;
  flex-direction: column;
  width:100%;
  height: 625px;
  padding-left: 10%;


}
.flexbodyheader
{
  display: flex;
  flex:1;
  font-size: 55px;
  font-weight: bold;

}
.flexbodycontent
{
  flex-direction: column;
  display: flex;
  height: auto;
  justify-content: flex-start;

}
.fleximage
{
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;

}
.button
{
  color: #fff;
  margin-top: 35px;
  display: flex;
  padding: auto;
  width: 300px;
  height: 90px;
  background-color: #E6403A;
  align-items: center;
  justify-content: center;
  border-radius:10px;
}
.divcontainer
{
  display: flex;
  flex:1;
  height: auto;
  margin-bottom: 20px;
  flex-direction: row;
}
.div1
{
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;

}
.div2
{
  display: flex;
  flex:15;
  line-height:45px;
  margin-left: 15px;
  align-items: flex-start;


}

   


</style>