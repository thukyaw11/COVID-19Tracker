<template>
  <div :class="darkmode? 'container-donationDark' : 'container-donation'">
    <div class="hearticon">
      <span class="material-icons" style="font-size:150px; color:#EC407A;">favorite</span>
    </div>
    <div class="donationbody">
      <h2
        :style="darkmode? 'color: #f5f5f5' : 'color : #121212'"
      >{{$t('donationPage.donationHeader')}}</h2>
      <br />
      <div
        class="bodycontent"
        :style="darkmode? 'color: #f5f5f5' : 'color : #121212'"
      >{{$t('donationPage.donationContent')}}</div>
    </div>
    <br />
    <div class="donatebuttoncontainer">
      <button class="donatebutton" v-scroll-to="'#element'">{{$t('donationPage.donationButton')}}</button>
      <span
        class="material-icons"
        style="font-size:36px; margin-top:20px;"
        :style="darkmode? 'color: #f5f5f5' : 'color : #121212'"
        v-scroll-to="'#element'"
      >expand_more</span>
    </div>

    <h3
      style="text-align:center;"
      :style="darkmode? 'color: #757575' : 'color : #121212'"
      id="element"
    >Donation Contacts</h3>

    <div class="donationcontactsbody" v-for="(donation,index) in donationList" :key="index">
      <div :class="darkmode? 'donationcardDark' : 'donationcard'">
        <h3
          class="donateheading"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
        >{{donation.Name}}</h3>
        <div class="donatetypeoforg">
          <div style="color : #757575">Type of organization</div>
          <div
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
          >{{donation.TypeofOrganisationorPerson}}</div>
        </div>
        <div class="donatephno">
          <div style="color : #757575">Phone Number</div>
          <div
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
          >{{donation.ContactPhoneNumber}}</div>
        </div>
        <!-- <div class="donatename">
          <div style="color : #757575">Name</div>
          <div :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">{{}}</div>
        </div>-->
        <div class="donatedescirption">
          <div style="color : #757575">Description</div>
          <div :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">{{donation.Description}}</div>
        </div>

        <div style="padding:10px; color:#757575;">Donateable Bank Accounts</div>

        <div class="bank">
          <div
            :class="darkmode? 'bankcontainerDark' : 'bankcontainer'"
            v-if="donation.KBZ != 'null'"
          >
            <div class="bankflex1" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">KBZ</div>
            <div
              class="bankflex2"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
            >{{donation.KBZ}}</div>
            <div class="bankflex3" v-clipboard:copy="donation.KBZ" v-clipboard:success="onCopy">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>
          <!-- CB -->
          <div
            :class="darkmode? 'bankcontainerDark' : 'bankcontainer'"
            v-if="donation.CB != 'null'"
          >
            <div class="bankflex1" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">CB</div>
            <div
              class="bankflex2"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
            >{{donation.CB}}</div>
            <div class="bankflex3" v-clipboard:copy="donation.CB" v-clipboard:success="onCopy">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>
          <!-- AYA -->
          <div
            :class="darkmode? 'bankcontainerDark' : 'bankcontainer'"
            v-if="donation.AYA != 'null'"
          >
            <div class="bankflex1" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">AYA</div>
            <div
              class="bankflex2"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
            >{{donation.AYA}}</div>
            <div class="bankflex3" v-clipboard:copy="donation.AYA" v-clipboard:success="onCopy">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>
          <!-- MEB -->
          <div
            :class="darkmode? 'bankcontainerDark' : 'bankcontainer'"
            v-if="donation.MEB != 'null'"
          >
            <div class="bankflex1" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">MEB</div>
            <div
              class="bankflex2"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
            >{{donation.MEB}}</div>
            <div class="bankflex3" v-clipboard:copy="donation.MEB" v-clipboard:success="onCopy">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>

          <div
            :class="darkmode? 'bankcontainerDark' : 'bankcontainer'"
            v-if="donation.KBZPay != 'null'"
          >
            <div class="bankflex1" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">KBZ Pay</div>
            <div
              class="bankflex2"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
            >{{donation.KBZPay}}</div>
            <div class="bankflex3" v-clipboard:copy="donation.KBZPay" v-clipboard:success="onCopy">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>

          <button class="contactnowbutton">
            <a
              v-bind:href="'tel:'+donation.ContactPhoneNumber"
              style="text-decoration: none; color : white"
            >Contact Now</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false,
      donationList: []
    };
  },
  //working with event bus
  created() {
    this.$eventHub.$on("change-name", this.changeName);

    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  mounted() {
    if (this.lang == "mm") {
      this.$root.$data.title = "လှူဒါန်းမှု";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "Donation";
    }
    axios
      .get("https://covid19mm.info/api/generate/api/CovidDonationUIT")
      .then(response => {
        if (response.data.code == 200) {
          this.donationList = response.data.data;
        }
      });
  },
  methods: {
    onCopy() {
      this.$swal("Copied");
    },
    changeDark(value) {
      this.darkmode = value;
    },
    changeName(name) {
      // lang will be automatically transported to the parameter.
      this.lang = name;
      if (name == "mm") {
        this.$root.$data.title = "လှူဒါန်းမှု";
      }
      if (name == "en") {
        this.$root.$data.title = "Donation";
      }
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 1100px) {
  .bodycontent {
    line-height: 22px;
    width: 90%;
  }
  .container-donation {
    margin-bottom: 100px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: auto;
    background: #fff;
  }
  .container-donationDark {
    background: #121212;
    margin-bottom: 100px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: auto;
  }
  .hearticon {
    margin-top: 75px;
    display: flex;
    width: 100%;
    height: 350px;
    align-items: center;
    justify-content: center;
  }
  .donationbody {
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .donatebuttoncontainer {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .donatebutton {
    border-radius: 10px;
    font-weight: bold;
    color: #ffffff;
    font-size: 14px;
    border: 0px;
    outline: none;
    background-color: #ec407a;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
  }
  .donationcontactsbody {
    flex-direction: column;
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .donationcard {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 690px;
    background-color: #eee;
    margin-bottom: 30px;
  }
  .donationcardDark {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 690px;
    background-color: #212121;
    margin-bottom: 30px;
  }
  .donateheading {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .donatetypeoforg {
    display: flex;
    flex-direction: column;
    height: 55px;
    padding: 10px;
  }
  .donatephno {
    display: flex;
    flex-direction: column;
    height: 55px;
    padding: 10px;
  }
  .donatename {
    display: flex;
    flex-direction: column;
    height: 55px;
    padding: 10px;
  }
  .donatedescirption {
    display: flex;
    flex-direction: column;
    height: 120px;
    padding: 10px;
  }
  .bank {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  .bankcontainer {
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    height: 65px;
    width: 95%;
    margin-bottom: 10px;
  }
  .bankcontainerDark {
    border-radius: 10px;
    background-color: #121212;
    display: flex;
    height: 65px;
    width: 95%;
    margin-bottom: 10px;
  }
  .bankflex1 {
    margin-left:20px;
    font-weight: bold;
    display: flex;
    flex: 2;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .bankflex2 {
    font-weight: bold;
    display: flex;
    flex:6;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .bankflex3 {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .contactnowbutton {
    margin-bottom:10px;
    border-radius: 10px;
    font-weight: bold;
    color: #ffffff;
    font-size: 14px;
    border: 0px;
    outline: none;
    background-color: #ec407a;
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
  }
}
</style>
    