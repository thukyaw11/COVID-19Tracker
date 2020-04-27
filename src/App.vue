<template>
  <div id="app">
    <div id="myNav" :class="darkmode? 'overlayDark' : 'overlay'">
      <div
        style="position:relative; top:5%;"
        :style="darkmode? 'color: #f5f5f5' : 'color : #121212'"
      >{{$t ('menutitle')}}</div>
      <div :class="darkmode? 'overlay-contentDark' : 'overlay-content'">
        <router-link
          to="/global"
          style="text-decoration: none"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          @click.native="closeNav()"
        >{{$t ('global')}}</router-link>
        <router-link
          to="/local"
          style="text-decoration: none"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          @click.native="closeNav()"
        >{{$t ('local')}}</router-link>
        <router-link
          to="/map"
          style="text-decoration: none"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          @click.native="closeNav()"
        >{{$t('map')}}</router-link>

        <router-link
          to="/countrycases"
          style="text-decoration: none"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          @click.native="closeNav()"
        >{{$t ('countrycase')}}</router-link>
        <router-link
          to="/start"
          style="text-decoration: none"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          @click.native="closeNav()"
        >{{$t ('start')}}</router-link>
        <router-link
          to="/donation"
          style="text-decoration: none"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          @click.native="closeNav()"
        >{{$t ('donation')}}</router-link>
        <router-link
          to="/news"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          style="text-decoration: none"
          @click.native="closeNav()"
        >{{$t ('news')}}</router-link>
        <router-link
          to="/aboutus"
          style="text-decoration: none"
          :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          @click.native="closeNav()"
        >{{$t ('aboutus')}}</router-link>
      </div>
      <br />
      <div class="languageswitcher">
        <div
          class="switchheading"
          :style="darkmode? 'color: #f5f5f5' : 'color : #121212'"
        >{{$t ('langdesc')}}</div>
        <div class="switchcontainer">
          <div
            :class="darkmode? 'switch1Dark' : 'switch1'"
            @click="changeLocale('en')"
          >{{$t ('langswitchEnglish')}}</div>
          <div
            :class="darkmode? 'switch2Dark' : 'switch2'"
            @click="changeLocale('mm')"
          >{{$t ('langswitchMyanmar')}}</div>
        </div>
      </div>

      <span
        class="material-icons"
        v-if="darkmode"
        @click="closeChange()"
        :style="darkmode? 'color : #f5f5f5': 'color : #121212'"
      >brightness_7</span>
      <span
        class="material-icons"
        v-if="!darkmode"
        @click="closeChange()"
        :style="darkmode? 'color : #f5f5f5': 'color : #121212'"
      >brightness_4</span>

      <div
        class="closebtn"
        @click="closeNav()"
        style="color: #212121; text-decoration: none; margin-top:20px;"
      >
        <span class="material-icons" style="font-size:36px; color:f44336;">cancel</span>
      </div>
    </div>

    <div :class="darkmode? 'headercontainerDark' : 'headercontainer'">
      <div class="menubutton" style="font-size:24px;cursor:pointer" @click="openNav()">
        <span class="material-icons" style="font-size:28px;">menu</span>
      </div>
      <Header v-bind:title="this.$root.$data.title" />

      <div class="space">
        <router-link to="/contants" style="text-decoration: none;">
          <div :class="darkmode? 'EmergencybuttonDark' : 'Emergencybutton'">
            <i class="fas fa-star-of-life" id="Emergencyicon"></i>
          </div>
        </router-link>
      </div>
    </div>

    <router-view></router-view>

    <!---@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------->
    <!---for desktop view------>
    <vue-topprogress ref="topProgress"></vue-topprogress>

    <div class="desktopcontainer">
      <div :class="darkmode? 'desheadingDark' : 'desheading'">
        <div class="deslinkcontainer">
          <router-link
            :class="darkmode? 'deslinkDark' : 'deslink'"
            to="/global"
            style="text-decoration : none;"
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          >{{$t('global')}}</router-link>

          <router-link
            :class="darkmode? 'deslinkDark' : 'deslink'"
            to="/local"
            style="text-decoration : none; color: #212121;"
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          >{{$t('local')}}</router-link>

          <router-link
            to="#"
            class="deslink"
            style="text-decoration : none; color: #212121;"
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          >{{$t('map')}}</router-link>

          <router-link
            :class="darkmode? 'deslinkDark' : 'deslink'"
            to="/start"
            style="text-decoration : none; color: #212121;"
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          >{{$t('start')}}</router-link>

          <router-link
            :class="darkmode? 'deslinkDark' : 'deslink'"
            to="/donation"
            style="text-decoration : none; color: #212121;"
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          >{{$t('donation')}}</router-link>

          <router-link
            :class="darkmode? 'deslinkDark' : 'deslink'"
            to="/aboutus"
            style="text-decoration : none; color: #212121;"
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
          >{{$t('aboutus')}}</router-link>

          <div
            :class="darkmode? 'deslinkDark' : 'deslink'"
            style="text-decoration : none; color: #757575; font-size:18px; cursor: pointer"
            @click="closeChange()"
          >
            <span
              class="material-icons"
              v-if="darkmode"
              @click="closeChange()"
              :style="darkmode? 'color : #f5f5f5': 'color : #121212'"
            >brightness_7</span>
            <span
              class="material-icons"
              v-if="!darkmode"
              @click="closeChange()"
              :style="darkmode? 'color : #f5f5f5': 'color : #121212'"
            >brightness_4</span>
          </div>
          <div
            :class="darkmode? 'deslinkDark' : 'deslink'"
            style="text-decoration : none; color: #757575; font-size:18px; cursor: pointer"
          >
            <span class="material-icons" @click="changeLocaleDesk()">g_translate</span>
          </div>
        </div>
      </div>

      <div id="desbody">
        <div class="mainflex1">
          <div :class="darkmode? 'descountrybycasesDark' : 'descountrybycases'">
            <br />

            <div
              class="descountrybycasesheading"
              :style="darkmode? 'color : #9fa8da': 'color : #3F51B5'"
            >{{$t('countrycase')}}</div>
            <br />
            <div class="dessearchbar">
              <form :class="darkmode? 'searchcontainer-customDark' : 'searchcontainer-custom'">
                <div class="placeholdercontainer">
                  <input
                    type="text"
                    style="font-size:14px;"
                    id="search-bar"
                    placeholder="Search ..."
                    v-model="search"
                    :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
                  />
                </div>
                <div class="searchicon">
                  <i
                    class="material-icons"
                    :style="darkmode? 'color : #f5f5f5': 'color : #121212'"
                  >search</i>
                </div>
              </form>
            </div>

            <div class="descountrybycasesbody">
              <router-link to="countrycases" style="text-decoration : none; color:black">
                <div
                  :class="darkmode? 'descasescontainerDark': 'descasescontainer'"
                  v-for="country in filteredListDetail"
                  :key="country.index"
                  @click="toggleData(country.country_name)"
                >
                  <img style="margin-left:20px" :src="getCountryCode(country.country_name)" />
                  <div
                    class="descasesflex1"
                    style="margin-left:20px;"
                    :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
                  >{{country.country_name}}</div>
                  <div
                    class="descasesflex2"
                    :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
                  >{{country.cases}}</div>
                </div>
              </router-link>
              <span
                v-if="!filteredListDetail.length"
                style="padding:60px; color:grey;"
              >Country not Found !</span>
            </div>
          </div>
        </div>
        <div class="mainflex2">
          <div class="flex2container">
            <dashboardGlobalComponent v-if="this.urlLocation == ''" />
            <dashboardGlobalComponent v-if="this.urlLocation == 'global'" />
            <dashboardLocalComponent v-if="this.urlLocation == 'local'" />
            <countryCases
              v-if="this.urlLocation == 'countrycases'"
              v-bind:value="this.propCountryName"
            />
          </div>
        </div>
        <div class="mainflex3">
          <div
            :class="darkmode? 'desemergencyDark' : 'desemergency'"
            id="myBtn"
            @click="openModal()"
          >
            <div :class="darkmode? 'desemergencyflex1Dark' : 'desemergencyflex1'">
              <i class="fas fa-star-of-life" style="font-size:36px;"></i>
            </div>
            <div
              :class="darkmode? 'desemergencyflex2Dark' : 'desemergencyflex2'"
            >{{$t('resultPage.phno')}}</div>
          </div>

          <div id="myModal" class="modal">
            <!-- Modal content -->
            <div :class="darkmode? 'modal-contentDark' : 'modal-content'">
              <div class="modalheading">
                <div class="closecontainer close" @click="closeModal()">
                  <span class="material-icons" style="font-size:40px;">close</span>
                </div>
                <div class="headingcontainer">
                  <div
                    style="margin-left:20px; font-weight:bold;"  :style="darkmode? 'color: #ef9a9a': 'color: #F44336'"
                  >{{$t('resultPage.phno')}}</div>
                  <br />
                  <br />
                  <div>
                    <form
                      :class="darkmode? 'searchcontainer-customDark' : 'searchcontainer-custom'"
                    >
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
                    :class="darkmode? 'desflex2Dark' : 'desflex2'"
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
          <div style="height:1%"></div>
          <div :class="darkmode? 'desnewsDark' : 'desnews'">
            <br />
            <div
              class="desnewsheading"
              :style="darkmode? 'color: #f5f5f5': 'color: #121212'"
            >{{$t('newsPage.latest')}}</div>
            <br />
            <div v-if="latestNews.length > 0">
              <div class="desnewsbody" v-for="latest in latestNews" :key="latest._id">
                <a
                  class="contentcontainer"
                  :href="linkIt(latest.url)"
                  style="color : black; text-decoration: none;"
                >
                  <div class="desnewscontent" :style="darkmode? 'color: #f5f5f5': 'color: #121212'">
                    <div class="box1">{{latest.title}}</div>
                    <div
                      class="box2"
                      :style="darkmode? 'color: #ffab91': 'color: #ff5722'"
                    >Source : {{latest.sourceId}}</div>
                  </div>
                </a>
              </div>
            </div>
            <div v-else class="contentcontainer">
              <h3 style="padding: 0px 20px;  color:#757575;">{{$t('nopost')}}</h3>
              <hr style="border:1px solid #eee; width:95%; margin-left:0;" />
            </div>
            <br />
            <div
              class="desnewsheading"
              :style="darkmode? 'color: #f5f5f5': 'color: #121212'"
            >{{$t('newsPage.yesterday')}}</div>
            <br />
            <div v-if="yesterdayNews.length > 0">
              <div class="desnewsbody" v-for="yesterday in yesterdayNews" :key="yesterday._id">
                <a
                  class="contentcontainer"
                  :href="linkIt(yesterday.url)"
                  style="color : black; text-decoration: none;"
                >
                  <div class="desnewscontent" :style="darkmode? 'color: #f5f5f5': 'color: #121212'">
                    <div class="box1">{{yesterday.title}}</div>
                    <div
                      class="box2"
                      :style="darkmode? 'color: #ffab91': 'color: #ff5722'"
                    >Source : {{yesterday.sourceId}}</div>
                  </div>
                </a>
              </div>
            </div>
            <div v-else class="contentcontainer">
              <h3 style="padding: 0px 20px;  color:#757575;">No Post Yet</h3>
              <hr style="border:1px solid #eee; width:95%; margin-left:0;" />
            </div>

            <br />
          </div>
        </div>
      </div>
      <div id="desaboutusbody">
        <AboutusComponent v-if="this.urlLocation == 'aboutus'" />
      </div>
      <div id="desscreeningbody">
        <ScreeningComponent v-if="this.urlLocation == 'start'" />
      </div>
      <div id="desdonationbody">
        <DontaionComponent v-if="this.urlLocation == 'donation'" />
      </div>
      <div id="desquestionbody">
        <QuestionComponent v-if="this.urlLocation == 'question'" />
      </div>
    </div>
  </div>
</template>


<script>
/* eslint-disable no-console */

import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import { vueTopprogress } from "vue-top-progress";
import axios from "axios";
import Header from "./components/Header";
import dashboardGlobalComponent from "./components/dashboardGlobalComponent";
import dashboardLocalComponent from "./components/dashboardLocalComponent";
import countryCases from "./components/dynamicCountryCases";
import AboutusComponent from "./components/aboutusComponent";
import ScreeningComponent from "./components/startQuestionComponent";
import DontaionComponent from "./components/donationComponent";
import QuestionComponent from "./components/questionComponent";
import isoCountries from "./assets/content/countryCode";
import i18n from "./plugin/i18n";
// import store from './store/store'

Vue.use(VueClipboard);

export default {
  components: {
    Header,
    dashboardGlobalComponent,
    dashboardLocalComponent,
    countryCases,
    vueTopprogress,
    AboutusComponent,
    ScreeningComponent,
    DontaionComponent,
    QuestionComponent
  },
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "mm", language: "mm", title: "မြန်မာ" }
      ],
      urlLocation: "",
      CountryByCases: [],
      search: "",
      newsRequest: [],
      latestNews: [],
      yesterdayNews: [],
      tdybaseURL: "",
      yesbaseURL: "",
      propCountryName: "",
      contactlist: [],
      searchContacts: "",
      copyCode: "",
      isoCou: isoCountries,
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false,
      count: ""
    };
  },
  methods: {
    getCountryCode(countryname) {
      if (Object.prototype.hasOwnProperty.call(this.isoCou, countryname)) {
        const img_url =
          "https://www.countryflags.io/" +
          this.isoCou[countryname] +
          "/flat/24.png";
        return img_url;
      } else {
        const default_img_url =
          "https://img.icons8.com/emoji/24/000000/ship.png";
        return default_img_url;
      }
    },
    changeLocaleDesk() {
      if (this.count % 2 == 0) {
        i18n.locale = "en";
        localStorage.setItem("lang", "en");
        this.$eventHub.$emit("change-name", "en");
      } else {
        i18n.locale = "mm";
        localStorage.setItem("lang", "mm");
        this.$eventHub.$emit("change-name", "mm");
      }

      this.count++;

      console.log(this.count);
    },
    changeLocale(locale) {
      i18n.locale = locale;
      localStorage.setItem("lang", locale);

      this.$eventHub.$emit("change-name", locale);

      this.closeNav();
    },
    openNav() {
      document.getElementById("myNav").style.height = "100%";
    },
    closeNav() {
      console.log("close nav");
      document.getElementById("myNav").style.height = "0%";
    },
    closeChange() {
      this.darkmode = !this.darkmode;
      console.log(this.darkmode);
      document.getElementById("myNav").style.height = "0%";
      localStorage.setItem("darkmode", this.darkmode);
      this.$darkModeBus.$emit("dark-mode", this.darkmode);
    },
    openModal() {
      document.getElementById("myModal").style.display = "block";
    },
    closeModal() {
      document.getElementById("myModal").style.display = "none";
    },
    fetchCountriesCases() {
      return fetch(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":
              "84660ad37emshfca869ae254ae73p16b922jsnf01c1ebb19a6"
          }
        }
      );
    },
    fetchTdyNews() {
      return axios.get(this.tdybaseURL);
    },
    fetchYesNews() {
      return axios.get(this.yesbaseURL);
    },
    fetchConacts() {
      return axios.get("https://covid19mm.info/api/contact/list");
    },
    setCountryCases(data) {
      var sortedArray = data.sort(function(a, b) {
        var bCases = Number(b.cases.replace(/,/g, ""));
        var aCases = Number(a.cases.replace(/,/g, ""));
        return bCases - aCases;
      });
      this.CountryByCases = sortedArray;
    },
    setNews(data) {
      this.newsData = data;
    },
    linkIt(url) {
      return url;
    },
    toggleData(countryName) {
      this.propCountryName = countryName;
    },
    onCopy() {
      alert("copied");
    },
    changeDark(value) {
      this.darkmode = value;
      if (this.darkmode == true) {
        document.body.className = "home";
      } else {
        document.body.className = "intro";
      }
    }
  },
  created() {
    if (this.lang == "mm") {
      this.count = 0;
    } else {
      this.count = 1;
    }
    this.$store.dispatch("getContacts");
    this.$store.dispatch("getCountryCases");

    this.urlLocation = window.location.href.split("/").pop();
    this.$darkModeBus.$on("dark-mode", this.changeDark);

    //yesterday, today and uploaded
    const todayDate = new Date().toISOString().slice(0, 10);
    const tmrDate = new Date(todayDate);

    tmrDate.setDate(tmrDate.getDate() + 1);

    const tmrIsoDate = tmrDate.toISOString().slice(0, 10);

    this.tdybaseURL = `https://aa56zbybij.execute-api.ap-southeast-1.amazonaws.com/v1/news/covid-19?from=${tmrIsoDate}`;
    this.yesbaseURL = `https://aa56zbybij.execute-api.ap-southeast-1.amazonaws.com/v1/news/covid-19?from=${todayDate}`;
  },
  mounted() {
    this.urlLocation = window.location.href.split("/").pop();

    if (this.urlLocation == "aboutus") {
      document.getElementById("desbody").style.display = "none";
      document.getElementById("desaboutusbody").style.display = "flex";
      document.getElementById("desscreeningbody").style.display = "none";
      document.getElementById("desdonationbody").style.display = "none";
      document.getElementById("desquestionbody").style.display = "none";
    } else if (this.urlLocation == "start") {
      document.getElementById("desbody").style.display = "none";
      document.getElementById("desaboutusbody").style.display = "none";
      document.getElementById("desscreeningbody").style.display = "flex";
      document.getElementById("desdonationbody").style.display = "none";
      document.getElementById("desquestionbody").style.display = "none";
    } else if (this.urlLocation == "donation") {
      document.getElementById("desbody").style.display = "none";
      document.getElementById("desaboutusbody").style.display = "none";
      document.getElementById("desscreeningbody").style.display = "none";
      document.getElementById("desdonationbody").style.display = "flex";
      document.getElementById("desquestionbody").style.display = "none";
    } else if (this.urlLocation == "question") {
      document.getElementById("desbody").style.display = "none";
      document.getElementById("desaboutusbody").style.display = "none";
      document.getElementById("desscreeningbody").style.display = "none";
      document.getElementById("desdonationbody").style.display = "none";
      document.getElementById("desquestionbody").style.display = "flex";
    } else {
      document.getElementById("desbody").style.display = "flex";
      document.getElementById("desaboutusbody").style.display = "none";
      document.getElementById("desscreeningbody").style.display = "none";
      document.getElementById("desdonationbody").style.display = "none";
      document.getElementById("desquestionbody").style.display = "none";
    }

    //language switching
    i18n.locale = this.lang;

    console.log(this.lang);

    //yesterday, today and uploaded
    document.getElementById("myNav").style.height = "0%";

    axios
      .all([
        this.fetchCountriesCases(),
        this.fetchTdyNews(),
        this.fetchYesNews()
      ])
      .then(
        axios.spread(
          (countrycasesResponse, newsContentToday, newsContentYesterday) => {
            //country response
            countrycasesResponse.json().then(data => {
              this.CountryByCases = data.countries_stat;
              this.setCountryCases(data.countries_stat);
            });
            //news response
            // news request filter by yesterday, tomorrow and today

            if (newsContentToday.status == 200) {
              this.latestNews = newsContentToday.data.items;
            }

            if (newsContentYesterday.status == 200) {
              this.yesterdayNews = newsContentYesterday.data.items;
            }
          }
        )
      );
  },
  watch: {
    $route(to, from) {
      //display none country cases view in about us page desktop

      this.urlLocation = to.path.split("/").pop();

      if (this.urlLocation == "aboutus") {
        document.getElementById("desbody").style.display = "none";
        document.getElementById("desaboutusbody").style.display = "flex";
        document.getElementById("desscreeningbody").style.display = "none";
        document.getElementById("desdonationbody").style.display = "none";
        document.getElementById("desquestionbody").style.display = "none";
      } else if (this.urlLocation == "start") {
        document.getElementById("desbody").style.display = "none";
        document.getElementById("desaboutusbody").style.display = "none";
        document.getElementById("desscreeningbody").style.display = "flex";
        document.getElementById("desdonationbody").style.display = "none";
        document.getElementById("desquestionbody").style.display = "none";
      } else if (this.urlLocation == "question") {
        document.getElementById("desbody").style.display = "none";
        document.getElementById("desaboutusbody").style.display = "none";
        document.getElementById("desscreeningbody").style.display = "none";
        document.getElementById("desdonationbody").style.display = "none";
        document.getElementById("desquestionbody").style.display = "flex";
      } else if (this.urlLocation == "donation") {
        document.getElementById("desbody").style.display = "none";
        document.getElementById("desaboutusbody").style.display = "none";
        document.getElementById("desscreeningbody").style.display = "none";
        document.getElementById("desdonationbody").style.display = "flex";
        document.getElementById("desquestionbody").style.display = "none";
      } else {
        document.getElementById("desbody").style.display = "flex";
        document.getElementById("desaboutusbody").style.display = "none";
        document.getElementById("desscreeningbody").style.display = "none";
        document.getElementById("desdonationbody").style.display = "none";
        document.getElementById("desquestionbody").style.display = "none";
      }

      console.log(from);
      //top progress
      this.$refs.topProgress.start();

      // Use setTimeout for demo
      setTimeout(() => {
        this.$refs.topProgress.done();
      }, 1000);
    }
  },
  computed: {
    filteredListDetail() {
      return this.CountryByCases.filter(name => {
        return name.country_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    filterListContacts() {
      return this.$store.getters.contacts;
    },
    storeVal() {
      return this.$store.getters.countrycases;
    }
  },
  metaInfo: {
    meta: [
      { property: "og:title", content: "COVID 19 | Myanmar" },
      {
        property: "og:site_name",
        content: "A covid 19 tracker app powered by UIT-SU | Myanmar"
      },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "tracker app" },
      // Should the the same as your canonical link, see below.
      { property: "og:url", content: "https://covid19mm.netlify.com/" },
      {
        property: "og:image",
        content:
          "https://icons8.com/wp-content/uploads/2020/02/elegant-digital-illustration.png"
      },
      // Often the same as your meta description, but not always.
      { property: "og:description", content: "Hello I am Min Thu Kyaw" }
    ]
  }
};

/* eslint-enable no-console */
</script>

<style>
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for mobile version css */

@media only screen and (max-width: 1100px) {
  .spinner {
    text-align: center;
    margin-top: 280px;
  }
  #app {
    background-color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }
  #appDark {
    background-color: #121212;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  .desktopcontainer {
    display: none;
  }
  .languageswitcher {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    height: 100px;
    border-top: 1px solid #eee;
    align-items: center;
  }
  .switchheading {
    display: flex;
    flex: 1;
    align-items: flex-end;
    width: 90%;
  }
  .switchcontainer {
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;
    flex: 2;
  }
  .switch1 {
    border-radius: 50px;
    background-color: #f5f5f5;
    margin-right: 5px;
    display: flex;
    width: 145px;
    height: 45px;
    align-items: center;
    justify-content: center;
  }
  .switch1Dark {
    border-radius: 50px;
    background-color: #212121;
    margin-right: 5px;
    display: flex;
    width: 145px;
    height: 45px;
    align-items: center;
    justify-content: center;
    color: #f5f5f5;
  }
  .switch2 {
    background-color: #f5f5f5;
    border-radius: 50px;
    margin-left: 5px;
    display: flex;
    width: 145px;
    height: 45px;
    align-items: center;
    justify-content: center;
  }
  .switch2Dark {
    color: #f5f5f5;
    background-color: #212121;
    border-radius: 50px;
    margin-left: 5px;
    display: flex;
    width: 145px;
    height: 45px;
    align-items: center;
    justify-content: center;
  }
  .overlay {
    text-align: center;
    align-items: center;
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ffffff;
    overflow-y: auto;
    transition: 0.5s;
  }
  .overlayDark {
    text-align: center;
    align-items: center;
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #121212;
    overflow-y: auto;
    transition: 0.5s;
  }

  .overlay-content {
    display: flex;
    flex-direction: column;
    line-height: 50px;
    margin-top: 80px;
    height: auto;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
  .overlay-contentDark {
    display: flex;
    flex-direction: column;
    line-height: 50px;
    margin-top: 80px;
    height: auto;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .overlay a {
    padding-left: 15px;
    text-decoration: none;
    font-size: 20px;
    display: flex;
    transition: 0.3s;
  }
  .overlayDark a {
    padding-left: 15px;
    text-decoration: none;
    font-size: 20px;
    display: flex;
    transition: 0.3s;
  }
  .overlay .router-link {
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
  }
  .overlayDark .router-link {
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
  }

  .overlay .router-link-active {
    border-radius: 50px;
    align-items: center;
    background-color: #f5f5f5;
    width: 100%;
    font-weight: bold;
  }
  .overlayDark .router-link-active {
    border-radius: 50px;
    background-color: #212121;
    align-items: center;
    width: 100%;
    font-weight: bold;
  }

  .overlay .closebtn {
    display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .headercontainer {
    top: 0;
    position: fixed;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #eee;
  }
  .headercontainerDark {
    color: white;
    top: 0;
    position: fixed;
    background-color: #121212;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #212121;
  }

  .menubutton {
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 20px;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .space {
    display: flex;
    margin-right: 20px;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
  }
  .Emergencybutton {
    display: flex;
    background-color: #e53935;
    color: #f5f5f5;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .EmergencybuttonDark {
    display: flex;
    background-color: #e57373;
    color: #121212;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  #Emergencyicon {
    display: flex;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .toggle {
    border-top: 1px solid #eee;
    flex-direction: row;
    display: flex;
    flex: 1;
    background-color: #ffffff;
    height: 90px;
    position: fixed;
    width: 100%;
    bottom: 0px;
    color: black;
  }
  .toggleDark {
    border-top: 1px solid #212121;
    flex-direction: row;
    display: flex;
    flex: 1;
    background-color: #121212;
    height: 90px;
    position: fixed;
    width: 100%;
    bottom: 0px;
    color: white;
  }
  .global {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .globalheading {
    margin-top: 10px;
    align-items: flex-end;
    justify-content: center;
  }

  .local {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .container {
    color: #212121;
    background-color: #ffffff;
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .containerDark {
    background-color: #121212;
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #f5f5f5;
  }

  .ConfirmedCaseContainer {
    display: flex;
    flex-direction: column;
    height: 120px;
    margin-left: 20px;
  }
  .RecoverCase {
    display: flex;

    height: 120px;
    border-radius: 15px;
    margin-top: 5px;
    background-color: #e8f5e9;
  }
  .RecoverCaseDark {
    display: flex;
    height: 120px;
    border-radius: 15px;
    margin-top: 5px;
    background-color: #212121;
  }
  .DeathCase {
    background-color: #ffebee;
    display: flex;
    height: 120px;
    border-radius: 15px;
    margin-top: 5px;
  }
  .DeathCaseDark {
    background-color: #212121;
    display: flex;
    height: 120px;
    border-radius: 15px;
    margin-top: 5px;
  }
  .caseheading {
    font-size: 16px;
    display: flex;
    flex: 1;
    align-items: flex-end;
  }
  .number {
    display: flex;
    flex: 2;
    align-items: center;
  }
  .numberrecover {
    color: #4caf50;
    display: flex;
    flex: 2;
    align-items: center;
  }
  .numberrecoverdark {
    color: #81c784;
    display: flex;
    flex: 2;
    align-items: center;
  }
  .numberdeath {
    color: #f44336;
    display: flex;
    flex: 2;
    align-items: center;
  }
  .numberdeathdark {
    color: #e57373;
    display: flex;
    flex: 2;
    align-items: center;
  }
  .activedots {
    margin-top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #3f51b5;
  }
  .inactivedots {
    margin-top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #eee;
  }
  .link {
    display: flex;
    flex: 1;
    flex-direction: row;
  }
  .linkflex1 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .linkflex2 {
    display: flex;
    flex: 10;
  }
  #active {
    border-radius: 50px;
    width: 10px;
    height: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #emergency {
    display: flex;
    flex-direction: row;
  }
  .mapvector {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  .mapflex1 {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .mapflex2 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
  }

  * {
    box-sizing: border-box;
  }

  .row::after {
    content: "";
    clear: both;
    display: block;
  }

  [class*="col-"] {
    float: left;
    padding: 15px;
  }
}
@media only screen and (min-width: 1100px) {
  .container-donationDark,
  .container-donation {
    display: none;
  }
  .headercontainer {
    display: none;
  }
  #myNav {
    display: none;
  }
  .headercontainerDark {
    display: none;
  }
  .container {
    display: none;
  }
  .containerDark {
    display: none;
  }
  .toggle {
    display: none;
  }
  .toggleDark {
    display: none;
  }
}
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for desktop version css */
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 3px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6d6d6;
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  display: block;
}

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for desktop version css */

@media only screen and (min-width: 1100px) {
  /* loading spinner */
  .spinner-des {
    text-align: center;
    margin-top: 100px;
  }

  .searchcontainer-custom {
    border-radius: 50px;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    width: 90%;
    height: 55px;
    flex-direction: row;
    background-color: #eee;
  }
  .searchcontainer-customDark {
    border-radius: 50px;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    width: 90%;
    height: 55px;
    flex-direction: row;
    background-color: #424242;
    color: #f5f5f5;
  }
  #myNav {
    display: none;
  }
  .headercontainer {
    display: none;
  }
  .container {
    display: none;
  }
  .toggle {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #d6d6d6;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .desktopcontainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 18px;
    align-items: center;
    font-family: "Poppins", sans-serif;
  }
  .desheading {
    display: flex;
    position: fixed;
    flex: 1;
    background-color:#f5f5f5;
    position:fixed;
    width: 100%;
    font-size: 14px;
    flex-direction: row;
    height: 65px;
    border-bottom: 1px solid #eee;
  }
  .desheadingDark {
    display: flex;
    position: fixed;
    flex: 1;
    width: 100%;
     background-color:#121212;
     position:fixed;
    font-size: 14px;
    flex-direction: row;
    height: 65px;
    border-bottom: 1px solid #212121;
  }
  .deslinkcontainer {
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex: 5;
  }
  .deslink {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .deslink:hover {
    background-color: #eee;
    transition: 0.8s;
  }
  .deslinkDark {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .deslinkDark:hover {
    background-color: #212121;
    transition: 0.8s;
  }
  #desbody {
    margin-top: 90px;
    flex-direction: row;
    display: flex;
    width: 100%;
    height: 88%;
  }
  #desaboutusbody {
    margin-top: 65px;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;
    width: 100%;
    height: 88%;
  }
  #desdonationbody {
    margin-top: 65px;
    flex-direction: row;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }
  #desscreeningbody {
    margin-top: 65px;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;
    width: 100%;
    height: 88%;
  }
  #desquestionbody {
    margin-top: 65px;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;
    width: 100%;
    height: 88%;
  }
  .desheadingname {
    font-weight: bold;
    display: flex;
    flex: 1;
    height: 120px;
    align-items: center;
    justify-content: flex-start;
    margin-left: 25px;
    font-size: 36px;
  }

  .mainflex1 {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .descountrybycasesDark {
    background-color: #212121;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    box-shadow: 0 8px 10px 1px rgba(18, 18, 18, 18),
      0 3px 14px 2px rgba(18, 18, 18, 18), 0 5px 5px -3px rgba(18, 18, 18, 18);
  }
  .descountrybycases {
    background-color: #ffffff;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    box-shadow: 0 8px 10px 1px rgba(238, 238, 238, 238),
      0 3px 14px 2px rgba(238, 238, 238, 238),
      0 5px 5px -3px rgba(238, 238, 238, 238);
  }
  .descountrybycasesheading {
    font-size: 14px;
    margin-top: 20px;
    align-items: flex-start;
    margin-left: 20px;
    font-weight: bold;
  }
  .descasescontainer {
    font-size: 14px;
    align-items: center;
    display: flex;
    height: 50px;
    width: 100%;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    cursor: pointer;
  }
  .descasescontainerDark {
    font-size: 14px;
    align-items: center;
    display: flex;
    height: 50px;
    width: 100%;
    flex-direction: row;
    border-bottom: 1px solid #121212;
    cursor: pointer;
  }
  .descasescontainerDark img {
    width: 24px;
    height: 24px;
  }
  .descasescontainer img {
    width: 24px;
    height: 24px;
  }
  .descasescontainer:hover {
    background: #eee;
  }
  .descasescontainerDark:hover {
    background: #121212;
  }
  .descasesflex1 {
    display: flex;
    flex: 2;
  }
  .descasesflex2 {
    justify-content: flex-end;
    margin-right: 10px;
    display: flex;
    flex: 1;
  }
  .mainflex2 {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .middlecontainer {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .flex2container {
    width: 100%;
    display: flex;
    height: 95%;
    flex-direction: column;
  }
  .desnumber {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 21%;
  }
  .descomfirmedcase {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .desrecover {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .desdeath {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .numbercontainer1 {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  }
  .numbercontainer1Dark {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #212121;
  }
  .numbercontainer2 {
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #e8f5e9;
  }
  .numbercontainer2Dark {
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #212121;
  }
  .numbercontainer3 {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #ffebee;
  }
  .numbercontainer3Dark {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #212121;
  }
  .desmap {
    display: flex;
    width: 100%;
    height: 75%;
    align-items: center;
    justify-content: center;
  }
  .desfooter {
    flex: 1;
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    color: #757575;
    margin-left: 25px;
  }
  .mainflex3 {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .desemergency {
    display: flex;
    height: 20.5%;
    width: 90%;
    border-radius: 10px;
    align-items: center;
    background-color: #f44336;
  }
  .desemergencyDark {
    display: flex;
    height: 20.5%;
    width: 90%;
    border-radius: 10px;
    align-items: center;
    background-color: #e57373;
  }
  .desemergencyflex1 {
    display: flex;
    flex: 1;
    color: #ffffff;
    justify-content: flex-end;
    margin-right: 10px;
  }
  .desemergencyflex1Dark {
    display: flex;
    flex: 1;
    color: #121212;
    justify-content: flex-end;
    margin-right: 10px;
  }
  .desemergencyflex2 {
    display: flex;
    font-weight: bold;
    flex: 4;
    color: #ffffff;
    justify-content: center;
  }
  .desemergencyflex2Dark {
    display: flex;
    font-weight: bold;
    flex: 4;
    color: #121212;
    justify-content: center;
  }
  .desnews {
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 74%;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 8px 10px 1px rgba(238, 238, 238, 238),
      0 3px 14px 2px rgba(238, 238, 238, 238),
      0 5px 5px -3px rgba(238, 238, 238, 238);
  }
  .desnewsDark {
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 74%;
    border-radius: 10px;
    background-color: #212121;
    box-shadow: 0 8px 10px 1px rgba(18, 18, 18, 18),
      0 3px 14px 2px rgba(18, 18, 18, 18), 0 5px 5px -3px rgba(18, 18, 18, 18);
  }
  .desnewsheading {
    margin-top: 20px;
    display: flex;
    height: 80px;
    font-size: 24px;
    align-items: center;
    margin-left: 20px;
    font-weight: bold;
  }
  .desnewscontent {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    height: 150px;
    font-size: 15px;
    margin-right: 20px;
    flex-direction: column;
    border-bottom: 1px solid #eee;
  }

  .box1 {
    margin-left: 20px;
  }
  .box2 {
    margin-left: 20px;
    font-weight: bold;
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
  .desflex2Dark {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #fafafa;
    color: #90CAF9;
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
    background: #424242 ;
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
    background: #424242;
    align-items: center;
    justify-content: center;
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
}
</style>
