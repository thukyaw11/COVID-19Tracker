<template>
  <div class="classdesbody">
    <div v-if="questionIndex<ques.questions.length">
      <div v-if="checkQuestionIndex" :class="darkmode? 'mainflexDark': 'mainflex'">
        <div class="questionheader">
          <div class="desheader1">
              <div class="desheadflex1">  
            <router-link to="/start">
              <span class="material-icons" :style="darkmode? 'color: #f5f5f5' : 'color : #121212'">arrow_back</span>
            </router-link></div>
            <div class="desheadflex2">Question {{questionIndex + 1}}</div>
          
        
          </div>
          <div class="desheader2" :style="darkmode? 'color: #f5f5f5' : 'color : #121212'">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <div class="questionbody">
          <div class="desquestion1">
            <!-- create the product container the user sees -->
            <div
              :class="darkmode? 'optioncontainerDark': 'optioncontainer'"
              v-for="(response, index) in ques.questions[questionIndex].responses"
              :key="index"
              
            >
              <input :id="response.tagId" type="radio" name="desradio" />
              <label :for="response.tagId" class="desclickable" style="cursor: pointer" @click="selectOption(response.id)"></label>
              {{response.text}}
            </div>
          </div>
          <div class="desquestion2">
            <button
              :class="selected ? 'nextbutton':'nextbutton-disable'"
              @click="next"
              :disabled="!selected"
              style="cursor: pointer"
            >Next</button>
          </div>
        </div>
      </div>

      <!-- for question two -->

      <div v-if="questionIndex == 1" :class="darkmode? 'mainflexDark': 'mainflex'">
        <div class="questionheader">
          <div class="desheader1">
              <div class="desheadflex1">  
            <router-link to="/start">
              <span class="material-icons" :style="darkmode? 'color: #f5f5f5' : 'color : #121212'">arrow_back</span>
            </router-link></div>
            <div class="desheadflex2">Question {{questionIndex + 1}}</div>
          
        
          </div>
          <div class="desheader2" :style="darkmode? 'color: #f5f5f5' : 'color : #121212'">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <div class="questionbody">
          <div class="desquestion1">
            <!-- create the product container the user sees -->
            <div
              :class="darkmode? 'optioncontainerDark': 'optioncontainer'"
              v-for="(response, index) in ques.questions[questionIndex].responses"
              :key="index"
            >
              <input
                :id="response.tagId"
                type="checkbox"
                name="desradio"
                v-model="resultTwo"
                :value="response.id"
              />
              <label :for="response.tagId" class="desclickable" @click="updateCheckall()"></label>
              {{response.text}}
            </div>

            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'" @click="decheckAll()">
              <input
                type="checkbox"
                v-model="isCheckAll"
                @click="decheckAll()"
                id="nosym"
                name="mycheckbox"
              />
              <label for="nosym" class="desclickable"></label>
              မည်သည့် လက္ခဏာမှ မရှိပါ။
            </div>
          </div>

          <div class="desquestion2">
            <button
              :class="selected ? 'nextbutton':'nextbutton-disable'"
              @click="next"
              :disabled="!selected"
              style="cursor: pointer"
            >Next</button>
          </div>
        </div>
      </div>

      <!-- for question three -->
      <div v-if="questionIndex == 2" :class="darkmode? 'mainflexDark': 'mainflex'">
        <div class="questionheader">
          <div class="desheader1">
              <div class="desheadflex1">  
            <router-link to="/start">
              <span class="material-icons" :style="darkmode? 'color: #f5f5f5' : 'color : #121212'">arrow_back</span>
            </router-link></div>
            <div class="desheadflex2">Question {{questionIndex + 1}}</div>
          
        
          </div>
          <div class="desheader2" :style="darkmode? 'color: #f5f5f5' : 'color : #121212'">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <div class="questionbody">
          <div class="desquestion1">
            <!-- create the product container the user sees -->
            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'">
              <input type="checkbox" v-model="array" value="1" id="check1" name="mycheckbox" />
              <label
                for="check1"
                class="desclickable"
                @click="selectMultipleOption()"
                style="text-align : center; padding : 20px"
              >
                <span>ရင်ကြပ်ရောဂါရှိသည်။</span>
              </label>
            </div>
            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'">
              <input type="checkbox" v-model="array" value="2" id="check2" name="mycheckbox" />
              <label
                for="check2"
                class="desclickable"
                @click="selectMultipleOption()"
                style="text-align : center; padding : 20px"
              >
                <span>ကိုယ်၀န်ဆောင်မိခင်ဖြစ်သည်။</span>
              </label>
            </div>
            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'">
              <input type="checkbox" v-model="array" value="3" id="check3" name="mycheckbox" />
              <label
                for="check3"
                class="desclickable"
                @click="selectMultipleOption()"
                style="text-align : center; padding : 20px"
              >
                <span>ဆီးချို/‌သွေးချိုရှိသည်။</span>
              </label>
            </div>
            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'">
              <input type="checkbox" v-model="array" value="4" id="check4" name="mycheckbox" />
              <label
                for="check4"
                class="desclickable"
                @click="selectMultipleOption()"
                style="text-align : center; padding : 20px"
              >
                <span>နှလုံးရောဂါ သို့မဟုတ် သွေးတိုးရှိသည်။</span>
              </label>
            </div>
            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'">
              <input type="checkbox" v-model="array" value="5" id="check5" name="mycheckbox" />
              <label
                for="check5"
                class="desclickable"
                @click="selectMultipleOption()"
                style="text-align : center; padding : 20px"
              >
                <span>အဆုတ်ရောင်ရှိသည်။</span>
              </label>
            </div>
            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'">
              <input type="checkbox" v-model="array" value="6" id="check6" name="mycheckbox" />
              <label
                for="check6"
                class="desclickable"
                @click="selectMultipleOption()"
                style="text-align : center; padding : 20px"
              >
                <span>ကင်ဆာရောဂါရှိသည်။</span>
              </label>
            </div>
            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'">
              <input type="checkbox" v-model="array" value="7" id="check7" name="mycheckbox" />
              <label
                for="check7"
                class="desclickable"
                @click="selectMultipleOption()"
                style="text-align : center; padding : 20px"
              >
                <span>HIV/AIDS ရောဂါပိုးရှိသည်။</span>
              </label>
            </div>
            <div :class="darkmode? 'optioncontainerDark': 'optioncontainer'">
              <input type="checkbox" v-model="array" value="8" id="check8" name="mycheckbox" />
              <label
                for="check8"
                class="desclickable"
                @click="deselectAll()"
                style="text-align : center; padding : 20px"
              >
                <span>မည်သည့် လက္ခဏာမှမရှိပါ။</span>
              </label>
            </div>
          </div>
          <div class="desquestion2">
            <button
              :class="selected ? 'nextbutton':'nextbutton-disable'"
              @click="next"
              :disabled="!selected"
              style="cursor: pointer"
            >Next</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="seeResultClick == true">
      <stayhome v-show="finalResult == true" />
      <emergency v-show="finalResult == false" />
    </div>
  </div>
</template>


<script>
import { ques } from "../assets/content/question";
import answer from "../assets/content/answer";
import Vue from "vue";
import stayhome from "../components/stayhomeDesktop";
import emergency from "../components/emergencyDesktop";

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

      for (var checkindex = 1; checkindex < 9; checkindex++) {
        var el = "check" + checkindex;
        document.getElementById(el).checked = false;
        console.log(document.getElementById(el));
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
      console.log(finalArray);
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

      console.log(this.finalResult);
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
    this.$root.$data.title = "Question";
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
/*updated latest desktop ui*/
.classdesbody {
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
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
.mainflexDark {
  width: 1129px;
  height: 871px;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 8px 10px 1px rgba(1, 1, 1, 1),
    0 3px 14px 2px rgba(1, 1, 1, 1),
    0 5px 5px -3px rgba(1, 1, 1, 1);
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
.desheadflex1
{
  display:flex;
  flex:1;
  padding-left:10px;
  align-items:center;
  justify-content:flex-start;

}
.desheadflex2
{
  display:flex;
  flex:20;
}
.desquestion1 {
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
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
.nextbutton-disable {
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
  opacity: 0.5;
}
/* Hide the browser's default radio button*/
.optioncontainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.optioncontainerDark input {
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
.optioncontainerDark {
  margin-left: 15px;
  display: flex;
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  color: #f5f5f5;
  font-size: 14px;
  border: 0px;
  outline: none;
  background-color: #121212;
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

input[name="mycheckbox"]:checked + .desclickable {
  border-color: #3f51b5;
  box-shadow: 0px 0px 0px 3px #3f51b5;
}
</style>