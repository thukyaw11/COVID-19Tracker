<template>
  <div class="classdesbody">
    <div :class="darkmode? 'landingflexDark' : 'landingflex'">
      <div class="flexbody">
        <div class="flexbodycontainer">
          <div
            class="flexbodyheader"
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
          >{{$t('donationPage.donationHeader')}}</div>
          <div class="flexbodycontent">
            <hr
              style="width:100px; margin-left:0px;"
              :style="darkmode? 'background : #f5f5f5; border:3px solid #f5f5f5;' : 'background : #212121;  border:3px solid #000;'"
            />
            <br />
            <div
              style="width:100%; line-height:25px; font-size:16px;"
              :style="darkmode? 'color : #f5f5f5' : 'color : #757575' "
            >{{$t('donationPage.donationContent')}}</div>

            <br />
            <div
              type
              :class="darkmode? 'buttonDark' : 'button'"
              v-scroll-to="'#elementt'"

            >{{$t('donationPage.donationButton')}}</div>
          </div>
        </div>
      </div>
      <div class="fleximage">
        <i
          class="fas fa-heartbeat"
          :style="darkmode? 'color : #f06292; font-size:300px;' : 'color : #EC407A; font-size:300px;' "
        ></i>
      </div>
    </div>

    <div :class="darkmode? 'contactsflexDark' : 'contactsflex'" id="elementt">
      <div class="backward">
        <div :class="darkmode? 'backwardbuttonDark' : 'backwardbutton'" @click="previous">
          <i
            class="material-icons"
            :style="darkmode? 'color : #f5f5f5; font-size:50px;' : 'color : #212121; font-size:50px;' "
          >keyboard_arrow_left</i>
        </div>
      </div>
      <transition-group :class="darkmode? 'contactsflexDark' : 'contactsflex'" class="carousel">
        <div class="middle slide" v-for="slide in slides" :key="slide.KBZ">
          <div :class="darkmode? 'donationcardDark' : 'donationcard'">
            <div class="dcardheader">{{slide.Name}}</div>
            <div class="dcardbody">
              <div class="dcardbodyleft">
                <div class="donatetypeoforg">
                  <div style="color:#757575; font-size:14px;">{{slide.TypeofOrganisationorPerson}}</div>
                  <div style="font-size:20px;">University</div>
                </div>
                <div class="donatephno">
                  <div style="color:#757575; font-size:14px;">Phone Number</div>
                  <div style="font-size:20px;">{{slide.ContactPhoneNumber}}</div>
                </div>
                <div class="donatename">
                  <div style="color:#757575; font-size:14px;">Name</div>
                  <div style="font-size:20px;">{{slide.ContactPerson}}</div>
                </div>
                <div class="donatedescirption">
                  <div style="color:#757575; font-size:14px;">Description</div>
                  <div style="font-size:20px;">{{slide.Description}}</div>
                </div>
              </div>
              <div class="dcardbodyright">
                <div :class="darkmode? 'bankcardDark' : 'bankcard'">
                  <div class="bankcardheader">Donateable Bank Accounts</div>
                  <div class="bankcardchip">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45.225"
                      height="35.145"
                      viewBox="0 0 45.225 35.145"
                    >
                      <path
                        id="Path_127"
                        :fill="darkmode? '#f5f5f5' : '#212121' "
                        data-name="Path 127"
                        d="M41.943,6.2H5.846a4.568,4.568,0,0,0-4.563,4.563V36.781a4.569,4.569,0,0,0,4.563,4.564h36.1a4.569,4.569,0,0,0,4.563-4.564V10.765A4.568,4.568,0,0,0,41.943,6.2ZM3.282,20.675H10.09V27.16H3.282ZM44.507,27.16H37.7V20.675h6.808Zm0-15.021v6.535H33.135a2.768,2.768,0,1,1,0-5.535,1,1,0,1,0,0-2,4.768,4.768,0,1,0,0,9.535H35.7V27.16H33.135a4.768,4.768,0,1,0,0,9.535,1,1,0,1,0,0-2,2.768,2.768,0,1,1,0-5.535H44.507v7.621a2.567,2.567,0,0,1-2.563,2.564H5.846a2.567,2.567,0,0,1-2.563-2.564V29.16H14.653a2.768,2.768,0,1,1,0,5.535,1,1,0,0,0,0,2,4.768,4.768,0,1,0,0-9.535H12.09V20.675h2.563a4.768,4.768,0,1,0,0-9.535,1,1,0,1,0,0,2,2.768,2.768,0,1,1,0,5.535H3.282v-7.91A2.567,2.567,0,0,1,5.846,8.2h36.1a2.567,2.567,0,0,1,2.563,2.563Z"
                        transform="translate(-1.282 -6.201)"
                      />
                    </svg>
                  </div>
                  <div class="bankcardacc" v-if="slide.KBZ != 'null'">
                    <div class="accname">KBZ</div>
                    <div class="accnumber" style="margin-left:50px;">{{slide.KBZ}}</div>
                  </div>
                  <div class="bankcardacc" v-if="slide.CB != 'null'">
                    <div class="accname">CB</div>
                    <div class="accnumber" style="margin-left:50px;">{{slide.CB}}</div>
                  </div>
                  <div class="bankcardacc" v-if="slide.AYA != 'null'">
                    <div class="accname">AYA</div>
                    <div class="accnumber" style="margin-left:50px;">{{slide.AYA}}</div>
                  </div>
                  <div class="bankcardacc" v-if="slide.MEB != 'null'">
                    <div class="accname">MEB</div>
                    <div class="accnumber" style="margin-left:50px;">{{slide.MEB}}</div>
                  </div>
                  <div class="bankcardacc" v-if="slide.KBZPay != 'null'">
                    <div class="accname">KBZ Pay</div>
                    <div class="accnumber" style="margin-left:50px;">{{slide.KBZPay}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>

      <div class="forward">
        <div :class="darkmode? 'forwardbuttonDark' : 'forwardbutton'" @click="next">
          <i
            class="material-icons"
            :style="darkmode? 'color : #f5f5f5; font-size:50px;' : 'color : #212121; font-size:50px;' "
          >keyboard_arrow_right</i>
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
      slides: [
        {
          title: "University Of Information Technology",
          id: 1
        },
        {
          title: "University Of Information Technology2",
          id: 2
        },
        {
          title: "University Of Information Technology3",
          id: 3
        },
        {
          title: "University Of Information Technology4",
          id: 4
        },
        {
          title: "University Of Information Technology5",
          id: 5
        }
      ]
    };
  },

  created() {
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  mounted() {
    axios
      .get("https://covid19mm.info/api/generate/api/CovidDonationUIT")
      .then(response => {

        if (response.data.code == 200) {
          this.slides = response.data.data;
        }
      });
  },

  methods: {
    changeDark(value) {
      this.darkmode = value;
    },
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
};
</script>

<style scoped>
.middle.slide {
  margin: 100px;
  flex: 0 0 92%;
  background: transparent;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/*updated latest desktop ui*/
.classdesbody {
  width: 100%;
  height: 2160px;
  display: flex;
  flex-direction: column;
}
.landingflex {
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 1080px;
}
.landingflexDark {
  background-color: #121212;
  display: flex;
  width: 100%;
  height: 1080px;
}
.contactsflex {
  background-color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 1080px;
}
.contactsflexDark {
  background-color: #121212;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 1080px;
}
.desfooter {
  position: fixed;
  bottom: 0;
  width: 98%;
  height: 80px;
  display: flex;
  justify-content: center;
  color: #212121;
  border-top: 1px solid #eee;
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
  font-size: 60px;
  font-weight: bold;
}

.flexbodycontent {
  flex-direction: column;
  display: flex;
  height: auto;
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
  background-color: #ec407a;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.buttonDark {
  color: #212121;
  margin-top: 35px;
  display: flex;
  padding: auto;
  width: 300px;
  height: 90px;
  background-color: #f06292;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

/*donationcarddddddddddddddddddddddddddddd*/
.forward {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.forwardbutton {
  margin-right: 20px;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
}
.forwardbutton:hover {
  color: #212121;
  background-color: #e0e0e0;
}
.forwardbuttonDark {
  margin-right: 20px;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #212121;
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
}
.backward {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.backwardbutton {
  margin-left: 20px;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
}
.backwardbutton:hover {
  color: #212121;
  background-color: #e0e0e0;
}
.backwardbuttonDark {
  margin-left: 20px;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #212121;
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
}
.middle {
  display: flex;
  flex: 12;
}
.donationcard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-color: #f5f5f5;
  border-radius: 20px;
  transition: all 0.25s linear;
}
.donationcardDark {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-color: #212121;
  color: #f5f5f5;
  border-radius: 20px;
  transition: all 0.25s linear;
}
.dcardheader {
  font-weight: bold;
  font-size: 36px;
  display: flex;
  align-items: flex-end;
  flex: 1;
  margin-left: 30px;
  padding-top: 30px;
}
.dcardbody {
  display: flex;
  flex: 6;
  align-items: center;
  padding-bottom: 20px;
}
.dcardbodyleft {
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-left: 30px;
  justify-content: center;
}
.dcardbodyright {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  padding: 30px;
}
.donatetypeoforg {
  display: flex;
  flex-direction: column;
  height: 80px;
  padding: 10px;
}
.donatephno {
  display: flex;
  flex-direction: column;
  height: 80px;
  padding: 10px;
}
.donatename {
  display: flex;
  flex-direction: column;
  height: 80px;
  padding: 10px;
}
.donatedescirption {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.bankcard {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 599px;
  height: 354px;
  background-color: #fff;
  border: 6px solid #ec407a;
  border-radius: 25px;
  transition: all 0.25s linear;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
}
.bankcard:hover {
  box-shadow: -1px 10px 29px 0px rgba(158, 158, 158);
}
.bankcardDark {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 599px;
  height: 354px;
  background-color: #121212;
  border: 6px solid #f06292;
  border-radius: 25px;
  transition: all 0.25s linear;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
}
.bankcardDark:hover {
  box-shadow: -1px 10px 29px 0px rgba(0, 0, 0);
}
.bankcardheader {
  color: #757575;
  margin-left: 50px;
  font-size: 20px;
  align-items: center;
  display: flex;
  flex: 1;
}
.bankcardchip {
  margin-left: 50px;
  display: flex;
  align-items: center;
  flex: 1;
}
.bankcardacc {
  font-weight: bold;
  margin-left: 50px;
  font-size: 36px;
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
}
.accname {
  display: flex;
  flex: 1;
}
.accnumber {
  display: flex;
  flex: 5;
}
</style>