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
          <h2>3</h2>
          <div style="text-align:center;">{{ ques.questions[questionIndex].text }}</div>
        </div>
        <div
          class="questionbody"
          v-for="(response, index) in ques.questions[questionIndex].responses"
          :key="index"
        >
          <!-- create the product container the user sees -->
          <div class="optioncontainer">
            <input :id="response.id" type="radio" name="myradio" />
            <label :for="response.id" class="clickable" @click="selectOption()"></label>
            {{ response.text }}
          </div>
          <br />
        </div>
      </div>
      <br />
      <button :class="selected ? 'nextbutton':'nextbutton-disable'" @click="next" :disabled="!selected">Next</button>
      <br />
    </div>
    <div v-if="questionIndex >= ques.questions.length" v-bind:key="questionIndex">question completed</div>
  </div>
</template>

<script>
import { ques } from "../assets/content/question";

export default {
  data() {
    return {
      ques: ques,
      questionIndex: 0,
      selected : false
    };
  },

  methods: {
    next: function() {
      if (this.questionIndex < this.ques.questions.length) this.questionIndex++;
      this.selected = false;
    },
    selectOption: function() {
      this.selected = true;
    }
  }
};
</script>

<style scoped>
.container-question {
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
  margin-top: 100px;
  width: 95%;
  display: flex;
  height: 100%;
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
  background-color: #fff;
  width: 95%;
  height: 65px;
  align-items: center;
  justify-content: center;
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

input[name="myradio"]:checked + .clickable {
  border-color: #3f51b5;
  box-shadow: 0px 0px 0px 3px #3f51b5;
}

input[name="myradio"]:checked + .clickable .checked-box {
  display: block;
}
.headercontainer {
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