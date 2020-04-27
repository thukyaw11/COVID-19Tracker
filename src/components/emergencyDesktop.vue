<template>
  <div class="classdesbody">
    <div class="mainflex">
      <div class="flexbody">
        <div class="flexbodycontainer">
          <div
            class="flexbodyheader"
            :style="darkmode? 'color: #f5f5f5': 'color: #212121'"
          >{{($t('resultPage.emergencyResponse'))}}</div>
          <div class="flexbodycontent">
            <hr
              style="width:100px; margin-left:0px;"
              :style="darkmode? 'background : #f5f5f5; border:3px solid #f5f5f5;' : 'background : #212121;  border:3px solid #000;'"
            />
            <br />
            <div
              :style="darkmode? 'color: #f5f5f5; width:100%': 'color: #212121; width:100%'"
            >သင့်၌ ရောဂါပိုးကူးစက်ခံထားရနိုင်ချေ မြင့်မားသဖြင့်ကျန်းမာရေး၀န်ထမ်းများသို့ အလျင်အမြန်ဆက်သွယ်ပါ။</div>

            <br />
            <div type class="button" id="myBtn" @click="openModal">{{($t('resultPage.phno'))}}</div>
          </div>
        </div>
      </div>
      <div class="fleximage">
        <img src="../assets/emergency_contact.png" width="500" height="500" />
      </div>
    </div>

    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div :class="darkmode? 'modal-contentDark' : 'modal-content'">
        <div class="modalheading">
          <div class="closecontainer close" @click="closeModal">
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

    <!-- Modal content end-->
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
      this.$el.querySelector("#myModal").style.display = "block";
    },
    closeModal() {
      this.$el.querySelector("#myModal").style.display = "none";
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
  line-height: 100px;
  font-size: 70px;
  font-weight: bold;
}
.flexbodycontent {
  flex-direction: column;
  display: flex;
  flex: 1;
  justify-content: flex-end;
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

.searchcontainer {
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  height: 55px;
  background-color: #f5f5f5;
}
.placeholdercontainer {
  display: flex;
  flex: 5;
  align-items: center;
  justify-content: center;
}
.searchicon {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

#search-bar {
  font-size: 14px;
  width: 100%;
  margin-left: 15px;
  border: 0;
  outline: 0;
  background-color: transparent;
  height: 40px;
  width: 90%;
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