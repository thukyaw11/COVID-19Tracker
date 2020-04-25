<template>
  <div :class="darkmode? 'containerDark' : 'container'">
    <div :class="darkmode? 'headercontainerDark' : 'headercontainer'">
      <div class="backbutton" style="font-size:24px;cursor:pointer">
        <router-link to="/start" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">
          <span class="material-icons">arrow_back</span>
        </router-link>
      </div>
      <div class="heading">Question</div>
      <div class="space"></div>
    </div>
    <!-- +++++++++++++++++++++++++++++++++ -->
    <div class="container-question" v-if="questionIndex<ques.questions.length">
      <div
        :class="darkmode? 'questioncontainerDark' : 'questioncontainer'"
        v-if="checkQuestionIndex"
      >
        <div class="questionname">
          <h2>{{questionIndex + 1}}</h2>
          <div style="text-align:center; padding:10px;">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <div
          class="questionbody"
          v-for="(response, index) in ques.questions[questionIndex].responses"
          :key="index"
        >
          <!-- create the product container the user sees -->
          <div :class="darkmode? 'optioncontainerDark' : 'optioncontainer'">
            <input :id="response.id" type="radio" name="myradio" />
            <label :for="response.id" class="clickable" @click="selectOption(response.id)"></label>
            <span :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">{{ response.text }}</span>
          </div>
          <br />
        </div>
      </div>
      <!-- for question no 2 -->
      <div
        :class="darkmode? 'questioncontainerDark' : 'questioncontainer'"
        v-if="questionIndex == 1"
      >
        <div class="questionname">
          <h2>{{questionIndex + 1}}</h2>
          <div style="text-align:center; padding:10px;">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <!-- Checkboxes list -->
        <div class="questionbody" v-for="option in questionTwo" v-bind:key="option.id">
          <div :class="darkmode? 'optioncontainerDark' : 'optioncontainer'">
            <input
              v-bind:value="option.id"
              v-model="resultTwo"
              :id="option.id"
              type="checkbox"
              name="mycheckbox"
            />
            <label :for="option.id" class="clickable" @click="updateCheckall()"></label>
            <span :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">{{ option.text }}</span>
          </div>
        </div>
        <div class="questionbody">
          <div :class="darkmode? 'optioncontainerDark' : 'optioncontainer'"  @click="decheckAll()">
            <input type="checkbox" v-model="isCheckAll" @click="decheckAll()" id="nosym" />

            <label
              for="nosym"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' " 
            >မည်သည့် လက္ခဏာမှ မရှိပါ။</label>
          </div>
        </div>
        <h1>{{resultTwo}}</h1>
      </div>

      <!-- question no two end -->

      <!-- for question no three -->
      <div
        :class="darkmode? 'questioncontainerDark' : 'questioncontainer'"
        v-if="questionIndex == 2"
      >
        <div class="questionname">
          <h2>{{questionIndex + 1}}</h2>
          <div style="text-align:center; padding:10px;">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <div class="questionbody">
          <div :class="darkmode? 'optioncontainerCheckboxDark' : 'optioncontainerCheckbox'">
            <input type="checkbox" v-model="array" value="1" id="check1" name="mycheckbox" />
            <label
              for="check1"
              class="clickable"
              @click="selectMultipleOption()"
              style="text-align : center; padding : 20px"
            >
              <span :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">ရင်ကြပ်ရောဂါရှိသည်။</span>
            </label>
          </div>
          <div :class="darkmode? 'optioncontainerCheckboxDark' : 'optioncontainerCheckbox'">
            <input type="checkbox" v-model="array" value="2" id="check2" name="mycheckbox" />
            <label
              for="check2"
              class="clickable"
              @click="selectMultipleOption()"
              style="text-align : center; padding : 20px"
            >
              <span
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
              >ကိုယ်၀န်ဆောင်မိခင်ဖြစ်သည်။</span>
            </label>
          </div>
          <div :class="darkmode? 'optioncontainerCheckboxDark' : 'optioncontainerCheckbox'">
            <input type="checkbox" v-model="array" value="3" id="check3" name="mycheckbox" />
            <label
              for="check3"
              class="clickable"
              @click="selectMultipleOption()"
              style="text-align : center; padding : 20px"
            >
              <span
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
              >ဆီးချို/‌သွေးချိုရှိသည်။</span>
            </label>
          </div>
          <div :class="darkmode? 'optioncontainerCheckboxDark' : 'optioncontainerCheckbox'">
            <input type="checkbox" v-model="array" value="4" id="check4" name="mycheckbox" />
            <label
              for="check4"
              class="clickable"
              @click="selectMultipleOption()"
              style="text-align : center; padding : 20px"
            >
              <span
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
              >နှလုံးရောဂါ သို့မဟုတ် သွေးတိုးရှိသည်။</span>
            </label>
          </div>
          <div :class="darkmode? 'optioncontainerCheckboxDark' : 'optioncontainerCheckbox'">
            <input type="checkbox" v-model="array" value="5" id="check5" name="mycheckbox" />
            <label
              for="check5"
              class="clickable"
              @click="selectMultipleOption()"
              style="text-align : center; padding : 20px"
            >
              <span :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">အဆုတ်ရောင်ရှိသည်။</span>
            </label>
          </div>
          <div :class="darkmode? 'optioncontainerCheckboxDark' : 'optioncontainerCheckbox'">
            <input type="checkbox" v-model="array" value="6" id="check6" name="mycheckbox" />
            <label
              for="check6"
              class="clickable"
              @click="selectMultipleOption()"
              style="text-align : center; padding : 20px"
            >
              <span :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">ကင်ဆာရောဂါရှိသည်။</span>
            </label>
          </div>
          <div :class="darkmode? 'optioncontainerCheckboxDark' : 'optioncontainerCheckbox'">
            <input type="checkbox" v-model="array" value="7" id="check7" name="mycheckbox" />
            <label
              for="check7"
              class="clickable"
              @click="selectMultipleOption()"
              style="text-align : center; padding : 20px"
            >
              <span
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
              >HIV/AIDS ရောဂါပိုးရှိသည်။</span>
            </label>
          </div>
          <div :class="darkmode? 'optioncontainerCheckboxDark' : 'optioncontainerCheckbox'">
            <input type="checkbox" v-model="array" value="8" id="check8" name="mycheckbox" />
            <label
              for="check8"
              class="clickable"
              @click="deselectAll()"
              style="text-align : center; padding : 20px"
            >
              <span
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
              >မည်သည့် လက္ခဏာမှမရှိပါ။</span>
            </label>
          </div>
        </div>
      </div>
      <br />
      <button
        :class="selected ? 'nextbutton':'nextbutton-disable'"
        @click="next"
        :disabled="!selected"
      >Next</button>
      <br />
    </div>
    <div v-if="seeResultClick == true">
      <stayhome v-show="finalResult == true" />
      <emergency v-show="finalResult == false" />
    </div>
  </div>
</template>

<script>
import stayhome from "../components/stayhomeMobile";
import emergency from "../components/emergencyResponseMobile";
import { ques } from "../assets/content/question";
import answer from "../assets/content/answer";
import Vue from "vue";

export default {
  components: {
    stayhome,
    emergency
  },
  data() {
    return {
      array: [],
      isCheckAll: false,

      questionTwo: [
        { text: "ဖျားနာ နေသည်။", id: 1 },
        { text: "အသက်ရှူရခက်ခဲသည်။", id: 2 },
        { text: "အော့အန်ခြင်း/၀မ်းလျှောခြင်း", id: 3 },
        { text: "ချောင်းဆိုးနေသည်။", id: 4 }
      ],
      resultTwo: [],
      selectedlang: "",
      ques: ques,
      questionIndex: 0,
      selected: false,
      userResponses: "",
      answer: answer,
      resultArray: [],
      finalResult: "",
      seeResultClick: false,
      localStorageArray: localStorage.getItem("resultSession")
        ? JSON.parse(localStorage.getItem("resultSession"))
        : [],
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },

  methods: {
    selectMultipleOption() {
      document.getElementById("check8").checked = false;
      if (this.array) {
        this.selected = true;
      } else if (!this.array) {
        this.selected = false;
      }
    },
    deselectAll() {
      this.selected = true;
      this.array = [];
    },
    decheckAll: function() {
      this.resultTwo = [];
      this.selected = true;
    },
    updateCheckall: function() {
      this.isCheckAll = false;
      this.selected = true;
    },
    changeDark(value) {
      this.darkmode = value;
      if (this.darkmode == true) {
        document.body.className = "home";
      } else {
        document.body.className = "intro";
      }
    },

    next() {
      if (this.questionIndex < this.ques.questions.length) this.questionIndex++;
      this.selected = false;

      if (this.questionIndex >= this.ques.questions.length) {
        this.arrayMatch();
      }
      if (this.questionIndex == 3 || this.questionIndex == 2) {
        for (var checkindex = 1; checkindex < 9; checkindex++) {
          var el = "check" + checkindex;
          document.getElementById(el).checked = false;
        }
      }
    },
    selectOption(index) {
      if (this.questionIndex != 2) {
        Vue.set(this.userResponses, this.questionIndex, index);
      }
      this.selected = true;
    },
    compare(arr1, arr2) {
      // Check if all items exist and are in the same order
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }

      // Otherwise, return true
      return true;
    },
    arrayMatch() {
      const finalArray = [...this.userResponses, ...this.resultTwo];

      if (finalArray.length == 9) {
        this.seeResultClick = true;

        for (var i = 0; i < this.answer.length; i++) {
          var result = this.compare(finalArray, this.answer[i]);
          this.resultArray.push(result);
        }
        this.finalResult = this.resultArray.includes(true);
      } else {
        this.seeResultClick = true;

        this.finalResult = false;
      }
      var d = new Date();
      var datestring =
        d.getDate() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getFullYear() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes();

      let localStorageValue = {
        resultLocal: this.finalResult,
        dateTime: datestring
      };

      this.localStorageArray.push(localStorageValue);
      localStorage.setItem(
        "resultSession",
        JSON.stringify(this.localStorageArray)
      );
    }
  },

  mounted() {
    this.userResponses = Array(this.ques.questions.length).fill(null);
  },
  created() {
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  computed: {
    checkQuestionIndex() {
      return this.questionIndex != 1 && this.questionIndex != 2;
    }
  }
};
</script>

<style scoped>
input[name="mycheckbox"]:checked + .clickable {
  border-color: #3f51b5;
  box-shadow: 0px 0px 0px 3px #3f51b5;
}

input[name="myradio"]:checked + .clickable .checked-box {
  display: block;
}
.checked {
  border-color: #3f51b5;
  box-shadow: 0px 0px 0px 3px #3f51b5;
}
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
.visible {
  display: none;
}

.container-question {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: auto;
}
/* Hide the browser's default radio button*/
.optioncontainerDark input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.optioncontainerCheckboxDark input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.optioncontainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.optioncontainerCheckbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.questioncontainer {
  margin-top: 100px;
  width: 95%;
  display: flex;
  height: auto;
  flex-direction: column;
  border-radius: 15px;
  background-color: #f5f5f5;
}
.questioncontainerDark {
  margin-top: 100px;
  width: 95%;
  display: flex;
  height: auto;
  flex-direction: column;
  border-radius: 15px;
  background-color: #212121;
}

.questionname {
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.questionbody {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nextbutton {
  border-radius: 10px;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #3f51b5;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
}
.nextbutton-disable {
  border-radius: 10px;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  border: 0px;
  outline: none;
  opacity: 0.5;
  background-color: #3f51b5;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
}
.optioncontainerCheckbox {
  display: flex;
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  color: #212121;
  font-size: 14px;
  border: 0px;
  outline: none;
  width: 95%;
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
.optioncontainerCheckboxFive {
  display: flex;
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  color: #212121;
  font-size: 14px;
  border: 0px;
  outline: none;
  width: 95%;
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  border-color: #3f51b5;
  box-shadow: 0px 0px 0px 3px #3f51b5;
}
.optioncontainerCheckboxDark {
  display: flex;
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  color: #212121;
  font-size: 14px;
  border: 0px;
  outline: none;
  width: 95%;
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
.optioncontainer {
  display: flex;
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  color: #212121;
  font-size: 14px;
  border: 0px;
  outline: none;
  width: 95%;
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
.optioncontainerDark {
  display: flex;
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  color: #212121;
  font-size: 14px;
  border: 0px;
  outline: none;
  width: 95%;
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.optioncontainer:hover {
  border: 3px solid #3f51b5;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.optioncontainerDark:hover {
  border: 3px solid #3f51b5;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.clickable {
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  transition: all ease 0.6s;
  z-index: 10;
}

.headercontainer {
  top: 0;
  z-index: 20;
  position: fixed;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #eee;
}
.headercontainerDark {
  top: 0;
  z-index: 20;
  position: fixed;
  background-color: #121212;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #212121;
}

.backbutton {
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 20px;
}
</style>
