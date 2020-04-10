<template>
  <div class="container">
  <div class="questioncontainer">
        <img src="../assets/cold.jpg" width="1000" height="300" style="margin-top: 75px;">

        <div class="quesheading">
          <br>
          <h2>COVID 19 Screening Kit</h2>


          <div>
            You will answer nine questions about your feelings,
            symptoms, travel, and contact you’ve had with
            the others. We will never share your answers
            with others without your permissions.

          </div>
          <br>
        </div>
        <div class="quesbuttoncontainer">
          <router-link to="question" class="quesbutton"><p style="color : #fff; font-size:14px; font-weight : bold; text-align: center;">Start Screening Myself</p></router-link>
        </div>

  </div>
  </div>





</template>

<script>
/* eslint-disable no-console */
//
// import answer from "../assets/content/answer";
// export default {
//   data() {
//     return {
//       anser: answer,
//       stayHome: false,
//       userAnswer: [],
//       questions: [
//         { questionOne: "သင်၏ အသက်ကိုဖြေဆိုပါ" },
//         { questionTwo: "ယခု သင်ဘာရောဂါ လက္ခဏာတွေ ခံစားနေရလဲ။" },
//         {
//           questionThree:
//             "ယခု သင့်ကျန်းမာရေး အခြေအနေကိုဖြေဆိုပါ (ရောဂါအခံရှိ / မရှိ)"
//         },
//         {
//           questionFour: "လွန်ခဲ့သော ၁၄ နာရီအတွင်း နိုင်ငံခြား ခရီးသွားခဲ့လား။"
//         },
//         {
//           questionFive:
//             "လွန်ခဲ့သော ၁၄ ရက်အတွင်း covid 19 ရောဂါပိုး ရှိတဲ့ သူနဲ့ ထိတွေ့မှုရှိခဲ့ပါသလား။"
//         },
//         {
//           questionSix:
//             "အိမ်၌ လွန်ခဲ့သော ၁၄ ရက်အတွင်း နိုင်ငံခြားမှ ပြန်ရောက်လာသူရှိပါသလား။"
//         },
//         { questionSeven: "သင် ယခုဆေးရုံမှာ အလုပ်လုပ်နေပါသလား" },
//         {
//           questionEight:
//             "သင်လွန်ခဲ့သော ၁၄ ရက်က လူထူထပ်တော့နေရာသို့သွားခဲ့ပါသလား။"
//         },
//         {
//           questionNine:
//             "သင်လွန်ခဲ့သော ၁၄ ရက်အတွင်း covid 19 ရောဂါရှိသူ သွားရောက်ခဲ့သော နေရာများသို့ ရောက်ရှိခဲ့ပါသလား။"
//         }
//       ]
//     };
//   },
//   mounted() {
//     this.$root.$data.title = "Check your symptoms";
//   },
//   methods: {
//     putuserAnswer() {
//       const elementAge = document.getElementsByName("age");
//       const elementYawGar = document.getElementsByName("yawgar");
//       const elementSym = document.getElementsByName("sym");
//
//       for (var i = 0; i < elementAge.length; i++) {
//         if (elementAge[i].checked) {
//           this.userAnswer.push(elementAge[i].value);
//         }
//       }
//
//       for (var k = 0; k < elementYawGar.length; k++) {
//         if (elementYawGar[k].checked) {
//           this.userAnswer.push(elementYawGar[k].value);
//         }
//       }
//
//       for (var j = 0; j < elementSym.length; j++) {
//         if (elementSym[j].checked) {
//           this.userAnswer.push(elementSym[j].value);
//         }
//       }
//       console.log(this.userAnswer);
//       console.log(this.anser[0]);
//
// 	// Check if all items exist and are in the same order
// 	for (var p = 0; p < this.userAnswer.length; p++) {
//         console.log(this.userAnswer[p]);
//         console.log(this.anser[0][p]);
// 		if (this.userAnswer[p] == this.anser[0][p]){
//             this.stayHome = true;
//         }
// 	}
//
//
//       console.log(this.stayHome);
//     }
//   }
// };
export default {

  mounted(){
    this.$root.$data.title = "Screening Kit";

  }

}

/* eslint-enable no-console */

</script>

<style scoped>

  /* question home */
.questioncontainer {
  justify-content:center;
  width: 100%;
  align-items: center;
  height: 100%;
}
  .quesheading
{

  margin-left:20px;
  margin-right:20px;
  display:flex;
  flex-direction:column;
  flex:1;
}
.quesbuttoncontainer
{
 
  padding:30px;
  display:flex;
  flex:1;
  flex-direction: column;
  align-items:center;
  justify-content:center;

}
.quesbutton
{
  border-radius:10px;
  font-weight:bold;
  color:#ffffff;
  font-size:14px;
  border:0px;
  outline:none;
  background-color:#3F51B5;
  width:100%;
  height:50px;
  align-items:center;
  justify-content:center;
}

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
img {
  width: 100%;
  height: auto;

}
</style>
