<template>
  <div class="container-donation">
    <div class="hearticon">
      <span class="material-icons" style="font-size:150px; color:#EC407A;">favorite</span>
    </div>
    <div class="donationbody">
      <h2>{{$t('donationPage.donationHeader')}}</h2>

      <div class="justify">{{$t('donationPage.donationContent')}}</div>
    </div>
    <div class="donatebuttoncontainer">
      <button class="donatebutton" v-scroll-to="'#element'">{{$t('donationPage.donationButton')}}</button>
      <span
        class="material-icons"
        style="font-size:36px; margin-top:20px;"
        v-scroll-to="'#element'"
      >expand_more</span>
    </div>

    <h3 style="text-align:center; color:#757575;" id="element">Donation Contacts</h3>

    <div class="donationcontactsbody">
      <div class="donationcard">
        <h3 class="donateheading">University Of Information Technology</h3>
        <div class="donatetypeoforg">
          <div style="color:#757575;">Type of organization</div>
          <div>University</div>
        </div>
        <div class="donatephno">
          <div style="color:#757575;">Phone Number</div>
          <div>0934534923</div>
        </div>
        <div class="donatename">
          <div style="color:#757575;">Name</div>
          <div>Sai Kaw Yount</div>
        </div>
        <div class="donatedescirption">
          <div style="color:#757575;">Description</div>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>

        <div style="padding:10px; color:#757575;">Donateable Bank Accounts</div>

        <div class="bank">
          <div class="bankcontainer">
            <div class="bankflex1">KBZ</div>
            <div class="bankflex2">9934 3493 3492 2300</div>
            <div class="bankflex3">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>
          <div class="bankcontainer">
            <div class="bankflex1">CB</div>
            <div class="bankflex2">9934 3493 3492 2300</div>
            <div class="bankflex3">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>

          <button class="contactnowbutton">Contact Now</button>
        </div>
      </div>

      <div class="donationcard">
        <h3 class="donateheading">University Of Information Technology</h3>
        <div class="donatetypeoforg">
          <div style="color:#757575;">Type of organization</div>
          <div>University</div>
        </div>
        <div class="donatephno">
          <div style="color:#757575;">Phone Number</div>
          <div>0934534923</div>
        </div>
        <div class="donatename">
          <div style="color:#757575;">Name</div>
          <div>Sai Kaw Yount</div>
        </div>
        <div class="donatedescirption">
          <div style="color:#757575;">Description</div>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>

        <div style="padding:10px; color:#757575;">Donateable Bank Accounts</div>

        <div class="bank">
          <div class="bankcontainer">
            <div class="bankflex1">KBZ</div>
            <div class="bankflex2">9934 3493 3492 2300</div>
            <div class="bankflex3">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>
          <div class="bankcontainer">
            <div class="bankflex1">CB</div>
            <div class="bankflex2">9934 3493 3492 2300</div>
            <div class="bankflex3">
              <i class="far fa-clone" style="color:#EC407A;"></i>
            </div>
          </div>

          <button class="contactnowbutton">Contact Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    };
  },
  //working with event bus
  created() {
    this.$eventHub.$on("change-name", this.changeName);
  },
  mounted() {
    if (this.lang == "mm") {
      this.$root.$data.title = "လှူဒါန်းမှု";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "Donation";
    }
  },
  methods: {
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
.container-donation {
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
  text-align: center;
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
</style>
    