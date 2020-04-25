<template>
    <div class="classdesbody">
      <div class="mainflex">
        <div class="questionheader">
          <div class="desheader1">Question 3</div>
          <div class="desheader2">ယခု သင့်ကျန်းမာရေးအခြေအနေကို ဖြေဆိုပါ? (ရောဂါအခံရှိ/မရှိ)</div>
        </div>
        <div class="questionbody">
          <div class="desquestion1">
            <!-- create the product container the user sees -->
            <div class="optioncontainer">
              <input id="desopt1" type="radio" name="desradio" />
              <label for="desopt1" class="desclickable"></label>
              ရင်ကြပ်ရောဂါရှိသည်။ (Asthma)
            </div>
            <div class="optioncontainer">
              <input id="desopt2" type="radio" name="desradio" />
              <label for="desopt2" class="desclickable"></label>
              ကိုယ်၀န်ဆောင်မိခင်ဖြစ်သည်။
            </div>
            <div class="optioncontainer">
              <input id="desopt3" type="radio" name="desradio" />
              <label for="desopt3" class="desclickable"></label>
              ဆီးချို/သွေးချိုရှိသည်။
            </div>
            <div class="optioncontainer">
              <input id="desopt4" type="radio" name="desradio" />
              <label for="desopt4" class="desclickable"></label>
              နှလုံးရောဂါရှိသည်။
            </div>
            <div class="optioncontainer">
              <input id="desopt5" type="radio" name="desradio" />
              <label for="desopt5" class="desclickable"></label>
              အဆုတ်ရောဂါရှိသည်။
            </div>
            <div class="optioncontainer">
              <input id="desopt6" type="radio" name="desradio" />
              <label for="desopt6" class="desclickable"></label>
              ကင်ဆာရောဂါရှိသည်။
            </div>
            <div class="optioncontainer">
              <input id="desopt7" type="radio" name="desradio" />
              <label for="desopt7" class="desclickable"></label>
              HIV/AIDS ရောဂါပိုးရှိသည်။
            </div>
            <div class="optioncontainer">
              <input id="desopt8" type="radio" name="desradio" />
              <label for="desopt8" class="desclickable"></label>
              HIV/AIDS ရောဂါပိုးရှိသည်။
            </div>
          </div>
          <div class="desquestion2">
            <button class="nextbutton">Next</button>
          </div>
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
  width: 1129px;
  height: 871px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 8px 10px 1px rgba(238, 238, 238, 238),
    0 3px 14px 2px rgba(238, 238, 238, 238),
    0 5px 5px -3px rgba(238, 238, 238, 238);
}
.questionheader {
  margin-left: 15px;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.desheader1 {
  color: #757575;
  display: flex;
  flex: 1;
  align-items: center;
}
.desheader2 {
  font-size: 24px;
  display: flex;
  flex: 1;
  align-items: center;
}
.questionbody {
  display: flex;
  flex: 4;
}
.desquestion1 {
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
}
.desquestion2 {
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
}
.nextbutton {
  border-radius: 10px;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #3f51b5;
  width: 315px;
  height: 65px;
  margin-right: 15px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
}
/* Hide the browser's default radio button*/
.optioncontainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.optioncontainer {
  margin-left: 15px;
  display: flex;
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  color: #212121;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #f5f5f5;
  width: 450px;
  height: 75px;
  align-items: center;
  justify-content: center;
}

.desclickable {
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  transition: all ease 0.6s;
}

input[name="desradio"]:checked + .desclickable {
  border-color: #3f51b5;
  box-shadow: 0px 0px 0px 3px #3f51b5;
}

input[name="desradio"]:checked + .desclickable .checked-box {
  display: block;
}
</style>