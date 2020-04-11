<template>
  <div>
    <div class="headercontainer">
      <div class="backbutton" style="font-size:24px;cursor:pointer">
        <router-link to="/start" style="color : black">
          <span class="material-icons">arrow_back</span>
        </router-link>
      </div>
      <div class="heading">Question</div>
      <div class="space"></div>
    </div>

    <div class="container-question" v-if="questionIndex<ques.questions.length">
      <div class="questioncontainer">
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
          <div class="optioncontainer">
            <input :id="response.id" type="radio" name="myradio" />
            <label :for="response.id" class="clickable" @click="selectOption(response.id)"></label>
            {{ response.text }}
          </div>
          <br />
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
        : []
    };
  },

  methods: {
    next() {
      if (this.questionIndex < this.ques.questions.length) this.questionIndex++;
      this.selected = false;

      if (this.questionIndex >= this.ques.questions.length) {
        this.arrayMatch();
      }
    },
    selectOption(index) {
      Vue.set(this.userResponses, this.questionIndex, index);

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
      this.seeResultClick = true;
      for (var i = 0; i < this.answer.length; i++) {
        var result = this.compare(this.userResponses, this.answer[i]);
        this.resultArray.push(result);
      }

      this.finalResult = this.resultArray.includes(true);

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
        dateTime : datestring
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
  }
};
</script>

<style scoped>
.visible {
  display: none;
}

.container-question {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: auto;
}
/* Hide the browser's default radio button*/
.optioncontainer input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.questioncontainer {
  width: 95%;
  display: flex;
  height: auto;
  flex-direction: column;
  border-radius: 15px;
  background-color: #f5f5f5;
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
.optioncontainer:hover {
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

.backbutton {
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 20px;
}
</style>