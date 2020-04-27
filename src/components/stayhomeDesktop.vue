<template>
  <div class="desbody">
    <div class="mainflex">
      <div class="flexbody">
        <div class="flexbodycontainer">
          <div
            class="flexbodyheader"
            :style="darkmode? 'color: #f5f5f5': 'color: #212121'"
          >{{$t('resultPage.stayhomeResponse')}}</div>
          <div class="flexbodycontent">
            <br />
            <div  :style="darkmode? 'color: #f5f5f5 ; width:90%;': 'color: #757575; width:90%;'">
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

            <div type class="button" @click="openModal()" style="cursor: pointer">{{($t('resultPage.phno'))}}</div>
          </div>
        </div>
      </div>
      <div class="fleximage">
        <img src="../assets/stay_home.png" width="500" height="500" />
      </div>
    </div>
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div :class="darkmode? 'modal-contentDark' : 'modal-content'">
        <div class="modalheading">
          <div class="closecontainer close" @click="closeModal()">
            <span class="material-icons" style="font-size:40px;">close</span>
          </div>
          <div class="headingcontainer">
            <div style="margin-left:20px; color:#F44336; font-weight:bold;">Emergency Contacts</div>
            <br />
            <br />
            <div>
              <form :class="darkmode? 'searchcontainer-customDark' : 'searchcontainer-custom'">
                <div class="placeholdercontainer">
                  <input
                    style="font-size:14px;"
                    type="text"
                    id="search-bar"
                    placeholder="Search ..."
                    v-model="searchContacts"
                    :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
                  />
                </div>
                <div class="searchicon">
                  <i class="material-icons">search</i>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="modalbody">
          <div
            :class="darkmode? 'descontactscontainerDark' : 'descontactscontainer'"
            v-for="contacts in filterListContacts"
            v-bind:key="contacts._id"
          >
            <div class="desflex1">
              <div
                class="desbox1"
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
              >{{contacts.name}}</div>
              <div
                class="desbox2"
                style="line-height:50px"
                :phoneNumCopy="copyCode"
                :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
              >{{contacts.phoneNumber}}</div>
            </div>
            <div
              class="desflex2"
              v-clipboard:copy="contacts.phoneNumber"
              v-clipboard:success="onCopy"
            >
              <div :class="darkmode? 'desbox3Dark':'desbox3'">
                <span>
                  <i class="far fa-clone"></i>
                </span>
              </div>
              <div :class="darkmode? 'desbox4Dark':'desbox4'">Copy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false,
      copyCode: "",
      searchContacts: ""
    };
  },
  created() {
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  methods: {
    onCopy() {
      alert("copied");
    },
    changeDark(value) {
      this.darkmode = value;
    },
    openModal() {
     
      this.$el.querySelector('#myModal').style.display = "block"

    },
    closeModal() {
      this.$el.querySelector('#myModal').style.display = "none"


    }
  },
  computed: {
    filterListContacts() {
      return this.$store.getters.contacts;
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
  display: flex;
  flex: 1;
}
.desfooter {
  height: 80px;
  display: flex;
  margin-right: 35px;
  justify-content: flex-end;
}
.flexbody {
  display: flex;
  flex: 3;

  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flexbodycontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 625px;
  padding-left: 10%;
}
.flexbodyheader {
  display: flex;
  flex: 1;
  font-size: 55px;
  font-weight: bold;
}
.flexbodycontent {
  flex-direction: column;
  display: flex;
  height: auto;
  justify-content: flex-start;
}
.fleximage {
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
}
.button {
  color: #fff;
  margin-top: 35px;
  display: flex;
  padding: auto;
  width: 300px;
  height: 90px;
  background-color: #e6403a;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.divcontainer {
  display: flex;
  flex: 1;
  height: auto;
  margin-bottom: 20px;
  flex-direction: row;
}
.div1 {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.div2 {
  display: flex;
  flex: 15;
  line-height: 45px;
  margin-left: 15px;
  align-items: flex-start;
}

  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    -webkit-animation-name: fadeIn; /* Fade in the background */
    -webkit-animation-duration: 0.4s;
    animation-name: fadeIn;
    animation-duration: 0.4s;
  }

  /* Modal Content */
  .modal-content {
    position: fixed;
    right: 0;
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: #fff;
    width: 446px;
    height: 100%;
    -webkit-animation-name: slideIn;
    -webkit-animation-duration: 0.4s;
    animation-name: slideIn;
    animation-duration: 0.4s;
  }
  .modal-contentDark {
    position: fixed;
    right: 0;
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: #212121;
    width: 446px;
    height: 100%;
    -webkit-animation-name: slideIn;
    -webkit-animation-duration: 0.4s;
    animation-name: slideIn;
    animation-duration: 0.4s;
  }
  /* The Close Button */
  .close {
    color: #757575;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .modalheading {
    position: fixed;
    width: 446px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }
  .closecontainer {
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    display: flex;
    flex: 3;
  }
  .headingcontainer {
    justify-content: center;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    height: 150px;
  }
  .modalbody {
    margin-top: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    flex-direction: column;
  }
  .descontactscontainer {
    width: 446px;
    height: 135px;
    display: flex;
    border-bottom: 1px solid #eee;
    flex-direction: row;
  }
  .descontactscontainerDark {
    width: 446px;
    height: 135px;
    display: flex;
    border-bottom: 1px solid #121212;
    flex-direction: row;
  }
  .desflex1 {
    display: flex;
    flex: 2;
    flex-direction: column;
    margin-left: 20px;
  }

  .desbox1 {
    display: flex;
    flex: 1;
    align-items: center;
  }
  .desbox2 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
  }

  .desflex2 {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #fafafa;
    color: #1976d2;
  }
  .desbox3 {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: center;
  }
  .desbox3Dark {
    display: flex;
    flex: 1;
    background: #212121;
    align-items: flex-end;
    justify-content: center;
  }
  .desbox4 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .desbox4Dark {
    display: flex;
    flex: 1;
    background: #212121;
    align-items: center;
    justify-content: center;
  }

  .topnav {
    margin-right: 15px;
    overflow: hidden;
  }
  .topnav a {
    margin-left: 10px;
    width: 120px;
    float: left;
    text-align: center;
    padding: 18px;
    text-decoration: none;
    font-size: 17px;
  }
  .router-link-active {
    font-weight: bold;
  }

  /* Add Animation */
  @-webkit-keyframes slideIn {
    from {
      right: -300px;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      right: -300px;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>