<template>
  <div style="margin:80px 20px">
    <h1>Hello</h1>

    <h3>{{questions[0].questionOne}}</h3>
    <input type="radio" name="age" value="A">Under 18 
    <input type="radio" name="age" value="B">18-60 
    <input type="radio" name="age" value="C">Over 60 

    <h3>{{questions[1].questionTwo}}</h3>
    <input type="radio" id="sym1" name="yawgar" value="A" />
    <label for="age1">A</label>&nbsp;
    <input type="radio" id="sym2" name="yawgar" value="B" />
    <label for="age2">B</label>&nbsp;
    <input type="radio" id="sym3" name="yawgar" value="C" />
    <label for="age3">C</label>
    <input type="radio" id="sym4" name="yawgar" value="D" />
    <label for="age3">D</label>
    <input type="radio" id="sym5" name="yawgar" value="E" />
    <label for="age3">E</label>

    <h3>{{questions[2].questionThree}}</h3>
    <input type="radio" id="sym1" name="sym" value="A" />
    <label for="age1">A</label>&nbsp;
    <input type="radio" id="sym2" name="sym" value="B" />
    <label for="age2">B</label>&nbsp;
    <input type="radio" id="sym3" name="sym" value="C" />
    <label for="age3">C</label>
    <input type="radio" id="sym4" name="sym" value="D" />
    <label for="age4">D</label>
    <input type="radio" id="sym5" name="sym" value="E" />
    <label for="age5">E</label>
    <input type="radio" id="sym6" name="sym" value="F" />
    <label for="age6">F</label>
    <input type="radio" id="sym7" name="sym" value="G" />
    <label for="age7">G</label>
    <input type="radio" id="sym8" name="sym" value="H" />
    <label for="age8">H</label>
    <br><br>
    <button @click="putuserAnswer"> submit </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        userAnswer : [],
      questions: [
        { questionOne: "သင်၏ အသက်ကိုဖြေဆိုပါ" },
        { questionTwo: "ယခု သင်ဘာရောဂါ လက္ခဏာတွေ ခံစားနေရလဲ။" },
        {
          questionThree:
            "ယခု သင့်ကျန်းမာရေး အခြေအနေကိုဖြေဆိုပါ (ရောဂါအခံရှိ / မရှိ)"
        },
        {
          questionFour: "လွန်ခဲ့သော ၁၄ နာရီအတွင်း နိုင်ငံခြား ခရီးသွားခဲ့လား။"
        },
        {
          questionFive:
            "လွန်ခဲ့သော ၁၄ ရက်အတွင်း covid 19 ရောဂါပိုး ရှိတဲ့ သူနဲ့ ထိတွေ့မှုရှိခဲ့ပါသလား။"
        },
        {
          questionSix:
            "အိမ်၌ လွန်ခဲ့သော ၁၄ ရက်အတွင်း နိုင်ငံခြားမှ ပြန်ရောက်လာသူရှိပါသလား။"
        },
        { questionSeven: "သင် ယခုဆေးရုံမှာ အလုပ်လုပ်နေပါသလား" },
        {
          questionEight:
            "သင်လွန်ခဲ့သော ၁၄ ရက်က လူထူထပ်တော့နေရာသို့သွားခဲ့ပါသလား။"
        },
        {
          questionNine:
            "သင်လွန်ခဲ့သော ၁၄ ရက်အတွင်း covid 19 ရောဂါရှိသူ သွားရောက်ခဲ့သော နေရာများသို့ ရောက်ရှိခဲ့ပါသလား။"
        }
      ]
    };
  },
  mounted() {
    this.$root.$data.title = "Check your symptoms";
  },
  methods:{
      putuserAnswer(){
            const elementAge = document.getElementsByName('age');
            const elementYawGar  = document.getElementsByName('yawgar');
            const elementSym = document.getElementsByName('sym');


            for(var i=0 ; i < elementAge.length; i++){
                if(elementAge[i].checked){
                    console.log("result : " + elementAge[i].value)
                }
            }

            for(var k=0 ; k < elementYawGar.length ; k++){
                if(elementYawGar[k].checked){
                    console.log("result : " + elementYawGar[k].value);
                }
            }

            for(var j=0 ; j < elementSym.length ; j++){
                if(elementSym[j].checked){
                    console.log("result : " + elementSym[j].value);
                }
            }
      }
  }
};
</script>