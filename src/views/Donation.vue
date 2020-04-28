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

    <div class="donationcontactsbody">
      <div :class="darkmode? 'donationcardDark' : 'donationcard'">
        <h3
          class="donateheading"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
        >University Of Information Technology</h3>
        <div class="donatetypeoforg">
          <div style="color : #757575">Type of organization</div>
          <div :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">University</div>
        </div>
        <div class="donatephno">
          <div style="color : #757575">Phone Number</div>
          <div :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">0934534923</div>
        </div>
        <div class="donatename">
          <div style="color : #757575">Name</div>
          <div :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">Sai Kaw Yount</div>
        </div>
        <div class="donatedescirption">
          <div style="color : #757575">Description</div>
          <div
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>

        <div style="padding:10px; color:#757575;">Donateable Bank Accounts</div>

        <div class="bank">
          <div :class="darkmode? 'bankcontainerDark' : 'bankcontainer'">
            <div class="bankflex1" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">KBZ</div>
            <div
              class="bankflex2"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
            >9934 3493 3492 2300</div>
            <div class="bankflex3">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>
          <div :class="darkmode? 'bankcontainerDark' : 'bankcontainer'">
            <div class="bankflex1" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">CB</div>
            <div
              class="bankflex2"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
            >9934 3493 3492 2300</div>
            <div class="bankflex3">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>

          <button class="contactnowbutton">Contact Now</button>
        </div>
      </div>

      <button class="contactnowbutton">Contact Now</button>
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
      dontaionList: "",
      data: [
        {
          _id: "5ea2be600f35903664eb6abb",
          Name:
            "1. National Committee for Corona Virus Disease Precaution, Control and  Cure",
          Description:
            "To Establish the National Fund for Covid 19 Precaution, Control and  Cure ",
          MEB: "CF 004880",
          KBZ: "034 103 034 0232 8301",
          AYA: "A/C 000 110 501 002 5635",
          CB: "0093 1005 0000 1333",
          KBZPay: "null",
          _: "0",
          TypeofOrganisationorPerson: "Government",
          ContactPhoneNumber: "null",
          __v: 0
        },
        {
          _id: "5ea2be600f35903664eb6abc",
          Name: "2. University of Medicine 1 Volunteer Task Force",
          Description: "For Medical Staff",
          MEB: "null",
          KBZ: "999 307 23400 21 3301",
          AYA: "null",
          CB: "2012 6001 0001 9771",
          KBZPay: "9450044582.0",
          _: "1",
          TypeofOrganisationorPerson: "University",
          ContactPhoneNumber: "9450044582.0",
          __v: 0
        },
        {
          _id: "5ea2be600f35903664eb6abd",
          Name: "3.  Yangon Technological University Students' Union",
          Description: "For Medical Staff",
          MEB: "null",
          KBZ: "279 3012 7900 667801",
          AYA: "00 932010 10061746",
          CB: "0113 6005000 42595",
          KBZPay: "9773270096.0",
          _: "2",
          TypeofOrganisationorPerson: "University",
          ContactPhoneNumber: "9773270096.0",
          __v: 0
        }
      ]
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
    fetch('https://covid19mm.info/api/generate/api/coviddonationuit').then(response =>
      response.json().then(data => {
        this.dontaionList = data.data;
      })
    );
  },
  methods: {
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
    font-weight: bold;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .bankflex2 {
    font-weight: bold;
    display: flex;
    flex: 4;
    flex-direction: row;
    align-items: center;
  }
  .bankflex3 {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .contactnowbutton {
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
    