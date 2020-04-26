<template>
  <div class="classdesbody">
    <div v-if="questionIndex<ques.questions.length">
      <div v-if="checkQuestionIndex" class="mainflex">
        <div class="questionheader">
          <div class="desheader1">
            <router-link to="/start">
              <span class="material-icons">arrow_back</span>
            </router-link>
            Question {{questionIndex + 1}}
          </div>
          <div class="desheader2">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <div class="questionbody">
          <div class="desquestion1">
            <!-- create the product container the user sees -->
            <div
              class="optioncontainer"
              v-for="(response, index) in ques.questions[questionIndex].responses"
              :key="index"
            >
              <input :id="response.tagId" type="radio" name="desradio" />
              <label :for="response.tagId" class="desclickable" @click="selectOption(response.id)"></label>
              {{response.text}}
            </div>
          </div>
          <div class="desquestion2">
            <button
              :class="selected ? 'nextbutton':'nextbutton-disable'"
              @click="next"
              :disabled="!selected"
            >Next</button>
          </div>
        </div>
      </div>

      <!-- for question two -->

      <div v-if="questionIndex == 1" class="mainflex">
        <div class="questionheader">
          <div class="desheader1">
            <router-link to="/start">
              <span class="material-icons">arrow_back</span>
            </router-link>
            Question {{questionIndex + 1}}
          </div>
          <div class="desheader2">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <div class="questionbody">
          <div class="desquestion1">
            <!-- create the product container the user sees -->
            <div
              class="optioncontainer"
              v-for="(response, index) in ques.questions[questionIndex].responses"
              :key="index"
            >
              <input :id="response.tagId" type="checkbox" name="desradio" />
              <label :for="response.tagId" class="desclickable" @click="selectOption(response.id)"></label>
              {{response.text}}
            </div>
            <div class="optioncontainer">
              <input type="checkbox" name="mycheckbox" />
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
          <div class="desquestion2">
            <button
              :class="selected ? 'nextbutton':'nextbutton-disable'"
              @click="next"
              :disabled="!selected"
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ques } from "../assets/content/question";
import answer from "../assets/content/answer";
import Vue from "vue";
export default {
  data() {
    return {
      ques: ques,
      answer: answer,
      questionIndex: 0,
      userResponses: "",
      selected: false
    };
  },
  methods: {
    next() {
      console.log("hello");
      if (this.questionIndex < this.ques.questions.length) this.questionIndex++;
      this.selected = false;

      if (this.questionIndex >= this.ques.questions.length) {
        this.arrayMatch();
      }

      for (var checkindex = 1; checkindex < 9; checkindex++) {
        var el = "check" + checkindex;
        document.getElementById(el).checked = false;
      }

     
    },
    selectOption(index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      this.selected = true;
    }
  },
  mounted() {
    this.userResponses = Array(this.ques.questions.length).fill(null);
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
  height: 88%;
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