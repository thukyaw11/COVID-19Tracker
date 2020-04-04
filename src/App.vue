<template>
  <div id="app">
    <div id="myNav" class="overlay">
      <a
        class="closebtn"
        @click="closeNav()"
        style="color: white; text-decoration: none; margin-top:20px;"
      >&times;</a>
      <div class="overlay-content">
        <router-link
          to="/"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Global</router-link>
        <router-link
          to="/local"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Local</router-link>
        <router-link
          to="/map"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Map</router-link>
        <router-link
          to="/countrycases"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Countries By Cases</router-link>
        <router-link
          to="/news"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >News</router-link>
        <router-link
          to="/aboutus"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >About Us</router-link>
        <router-link
          to="/contants"
          style="text-decoration: none; color:#f44336; font-weight:bold;"
          class="item-menu"
          @click.native="closeNav()"
        >
          <i class="material-icons" style="color:#f44336; font-size: 21px">add_ic_call</i>
          Emergency
        </router-link>
      </div>
    </div>

    <div class="headercontainer">
      <div class="menubutton" style="font-size:24px;cursor:pointer" @click="openNav()">
        <i class="material-icons">sort</i>
      </div>
      <Header v-bind:title="this.$root.$data.title" />

      <div class="space">
        <router-link to="/contants" style="text-decoration: none;">
          <div class="Emergencybutton">
            <i class="material-icons" id="Emergencyicon">add_ic_call</i>
          </div>
        </router-link>
      </div>
    </div>

    <router-view></router-view>

    <!---@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------->
    <!---for desktop view------>
    <vue-topprogress ref="topProgress"></vue-topprogress>

    <div class="desktopcontainer">
      <div class="desheading">
        <div class="desheadingname">{{this.$root.$data.title}}</div>
        <div class="deslink">
          <ul>
            <li>
              <router-link to="/">Global</router-link>
            </li>
            <li>
              <router-link to="/local">Local</router-link>
            </li>
            <li>
              <a href="#contact">About Us</a>
            </li>
            <li>
              <a href="#about">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="desbody">
        <div class="mainflex1">
          <div class="descountrybycases">
            <br />

            <div
              class="descountrybycasesheading"
              style="color:#3F51B5;"
            >Countries, areas or territories with cases</div>
            <br />
            <div class="dessearchbar">
              <form class="searchcontainer-custom">
                <div class="placeholdercontainer">
                  <input
                    type="text"
                    style="font-size:14px;"
                    id="search-bar"
                    placeholder="Search ..."
                    v-model="search"
                  />
                </div>
                <div class="searchicon">
                  <i class="material-icons">search</i>
                </div>
              </form>
            </div>

            <div class="descountrybycasesbody">
              <router-link to="countrycases" style="text-decoration : none; color:black">
                <div
                  class="descasescontainer"
                  v-for="country in filteredListDetail"
                  :key="country.index"
                  @click="toggleData(country.country_name)"
                >
                  <div class="descasesflex1" style="margin-left:20px;">{{country.country_name}}</div>
                  <div class="descasesflex2">{{country.cases}}</div>
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
            <dashboardLocalComponent v-if="this.urlLocation == 'local'" />
            <countryCases
              v-if="this.urlLocation == 'countrycases'"
              v-bind:value="this.propCountryName"
            />
            <router-view></router-view>
          </div>
        </div>
        <div class="mainflex3">
          <div class="desemergency" id="myBtn" @click="openModal()">
            <div class="desemergencyflex1">
              <span class="material-icons" style="font-size:40px;">add_ic_call</span>
            </div>
            <div class="desemergencyflex2">Emergency Contacts</div>
          </div>

          <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
              <div class="modalheading">
                <div class="closecontainer close" @click="closeModal()">
                  <span class="material-icons" style="font-size:40px;">close</span>
                </div>
                <div class="headingcontainer">
                  <div style="margin-left:20px; color:#F44336;">Emergency Contacts</div>
                  <br />
                  <br />
                  <div>
                    <form class="searchcontainer-custom">
                      <div class="placeholdercontainer">
                        <input
                          style="font-size:14px;"
                          type="text"
                          id="search-bar"
                          placeholder="Search ..."
                          v-model="searchContacts"
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
                  class="descontactscontainer"
                  v-for="contacts in filterListContacts"
                  v-bind:key="contacts._id"
                >
                  <div class="desflex1">
                    <div class="desbox1">{{contacts.name}}</div>
                    <div
                      class="desbox2"
                      style="line-height:50px"
                      :phoneNumCopy="copyCode"
                    >{{contacts.phoneNumber}}</div>
                  </div>
                  <div
                    class="desflex2"
                    v-clipboard:copy="contacts.phoneNumber"
                    v-clipboard:success="onCopy"
                  >
                    <div class="desbox3">
                      <span>
                        <i class="far fa-clone"></i>
                      </span>
                    </div>
                    <div class="desbox4">Copy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="desnews">
            <br />
            <div class="desnewsheading">Latest</div>
            <br />
            <div v-if="latestNews.length > 0">
              <div class="desnewsbody" v-for="latest in latestNews" :key="latest._id">
                <a
                  class="contentcontainer"
                  :href="linkIt(latest.url)"
                  style="color : black; text-decoration: none;"
                >
                  <div class="desnewscontent">
                    <div class="box1">{{latest.title}}</div>
                    <div class="box2">Source :</div>
                  </div>
                </a>
              </div>
            </div>
            <div v-else class="contentcontainer">
              <h3 style="padding: 0px 20px;  color:#757575;">No Post Yet</h3>
              <hr style="border:1px solid #eee; width:95%; margin-left:0;" />
            </div>
            <br />
            <div class="desnewsheading">Yesterday</div>
            <br />
            <div v-if="yesterdayNews.length > 0">
              <div class="desnewsbody" v-for="yesterday in yesterdayNews" :key="yesterday._id">
                <a
                  class="contentcontainer"
                  :href="linkIt(yesterday.url)"
                  style="color : black; text-decoration: none;"
                >
                  <div class="desnewscontent">
                    <div class="box1">{{yesterday.title}}</div>
                    <div class="box2">Source :{{yesterday.source}}</div>
                  </div>
                </a>
              </div>
            </div>
            <div v-else class="contentcontainer">
              <h3 style="padding: 0px 20px;  color:#757575;">No Post Yet</h3>
              <hr style="border:1px solid #eee; width:95%; margin-left:0;" />
            </div>

            <br />

            <div class="desnewsheading">Uploaded</div>
            <br />
            <div v-if="uploadedNews.length > 0">
              <div class="desnewsbody" v-for="uploaded in uploadedNews" :key="uploaded._id">
                <a
                  class="contentcontainer"
                  :href="linkIt(uploaded.url)"
                  style="color : black; text-decoration: none;"
                >
                  <div class="desnewscontent">
                    <div class="box1">{{uploaded.title}}</div>
                    <div class="box2">Source : {{uploaded.source}}</div>
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
Vue.use(VueClipboard);

export default {
  components: {
    Header,
    dashboardGlobalComponent,
    dashboardLocalComponent,
    countryCases,
    vueTopprogress
  },
  data() {
    return {
      urlLocation: "",
      CountryByCases: [],
      search: "",
      newsRequest: [],
      latestNews: [],
      yesterdayNews: [],
      uploadedNews: [],
      propCountryName: "",
      contactlist: [],
      searchContacts: "",
      copyCode: ""
    };
  },
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
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
    fetchNews() {
      return axios.get("https://covid19mm.info/api/news");
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
    setContacts(data) {
      this.contactlist = data;
    },
    linkIt(url) {
      return url;
    },
    toggleData(countryName) {
      this.propCountryName = countryName;
    },
    onCopy() {
      alert("copied");
    }
  },
  created() {
    this.urlLocation = window.location.href.split("/").pop();
  },
  mounted() {
    //yesterday, today and uploaded
    const todayDate = new Date();
    const yesterdayDate = new Date(todayDate);

    yesterdayDate.setDate(yesterdayDate.getDate() - 1);

    this.today = todayDate.toDateString();
    this.yesterday = yesterdayDate.toDateString();
    var isoToday = todayDate.toISOString().slice(0, 10);
    var isoYesterday = yesterdayDate.toISOString().slice(0, 10);

    axios
      .all([this.fetchCountriesCases(), this.fetchNews(), this.fetchConacts()])
      .then(
        axios.spread((countrycasesResponse, newsResponse, contactsResponse) => {
          //country response
          countrycasesResponse.json().then(data => {
            this.CountryByCases = data.countries_stat;
            this.setCountryCases(data.countries_stat);
          });
          //news response
          // news request filter by yesterday, tomorrow and today
          this.newsRequest = newsResponse.data;
          this.setNews(newsResponse.data);
          newsResponse.data.forEach(dates => {
            var mydate = new Date(dates.date);

            if (mydate.toDateString() == this.today) {
              this.latestNews = this.newsRequest.filter(function(date) {
                return date.date == isoToday;
              });
            }

            if (mydate.toDateString() == this.yesterday) {
              this.yesterdayNews = this.newsRequest.filter(function(date) {
                return date.date == isoYesterday;
              });
            }

            if (
              mydate.toDateString() != this.yesterday &&
              mydate.toDateString() != this.today
            ) {
              this.uploadedNews = this.newsRequest.filter(function(date) {
                return date.date != isoYesterday && date.date != isoToday;
              });
            }
          });

          //contacts response
          this.contactlist = contactsResponse.data;
          this.setContacts(contactsResponse.data);
          console.log(this.contactlist);
        })
      );
  },
  watch: {
    $route(to, from) {
      this.urlLocation = to.path.split("/").pop();
      //top progress
      this.$refs.topProgress.start();

      console.log(from);

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
      return this.contactlist.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(this.searchContacts.toLowerCase());
      });
    }
  }
};

/* eslint-enable no-console */
</script>


<style>
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for mobile version css */

@media only screen and (max-width: 1100px) {
  #app {
    font-family: "Poppins", sans-serif;
  }
  .desktopcontainer {
    display: none;
  }
  .overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #3f51b5;
    overflow-x: hidden;
    transition: 0.5s;
  }

  .overlay-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    line-height: 40px;
    position: relative;
    top: 10%;
    width: 100%;
    margin-left: 20px;
    margin-top: 30px;
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    display: block;
    transition: 0.3s;
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }
  .headercontainer {
    top: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background-color: #fff;
    position: fixed;
    border-bottom: 1px solid #eee;
  }

  .menubutton {
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 35px;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .space {
    display: flex;
    margin-right: 35px;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
  }
  .Emergencybutton {
    display: flex;
    background-color: red;
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
    color: #fff;
  }

  .toggle {
    flex-direction: row;
    display: flex;
    flex: 1;
    background-color: #f5f5f5;
    height: 90px;
    position: fixed;
    width: 100%;
    bottom: 0px;
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
    margin: 80px auto;
    width: 95%;
    margin-bottom: 100px;
    align-items: center;
    height: auto;
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
  .DeathCase {
    background-color: #ffebee;
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
  .headercontainer {
    display: none;
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
}

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for desktop version css */

@media only screen and (min-width: 1100px) {
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
    background-color: #fafafa;
    flex-direction: column;
    height: 100%;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
  }
  .desheading {
    display: flex;
    flex-direction: row;
    height: 120px;
  }
  .desbody {
    flex-direction: row;
    display: flex;
    height: 930px;
  }
  .desheadingname {
    display: flex;
    flex: 1;
    height: 120px;
    align-items: center;
    justify-content: flex-start;
    margin-left: 25px;
    font-size: 42px;
  }

  .mainflex1 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .descountrybycases {
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 871px;
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
    width: 90%;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    cursor: pointer;
  }
  .descasescontainer:hover {
    background: #eee;
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
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
  }
  .flex2container {
    width: 100%;
    display: flex;
    height: 871px;
    flex-direction: column;
  }
  .desnumber {
    display: flex;
    width: 100%;
    height: 166px;
  }
  .descomfirmedcase {
    display: flex;
    width: 100%;
    height: 166px;
    align-items: center;
    justify-content: center;
  }
  .desrecover {
    display: flex;
    width: 100%;
    height: 166px;
    align-items: center;
    justify-content: center;
  }
  .desdeath {
    display: flex;
    width: 100%;
    height: 166px;
    align-items: center;
    justify-content: center;
  }
  .numbercontainer1 {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 166px;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  }
  .numbercontainer2 {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 166px;
    align-items: center;
    justify-content: center;
    background-color: #e8f5e9;
  }
  .numbercontainer3 {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 166px;
    align-items: center;
    justify-content: center;
    background-color: #ffebee;
  }
  .desmap {
    display: flex;
    width: 100%;
    height: 660px;
    align-items: center;
    justify-content: center;
  }
  .desfooter {
    display: flex;
    width: 100%;
    height: 65px;
    align-items: flex-start;
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
    margin-bottom: 20px;
    display: flex;
    height: 166px;
    width: 90%;
    border-radius: 10px;
    align-items: center;
    background-color: #f44336;
  }
  .desemergencyflex1 {
    display: flex;
    flex: 1;
    color: #ffffff;
    justify-content: flex-end;
    margin-right: 10px;
  }
  .desemergencyflex2 {
    display: flex;
    flex: 3;
    color: #ffffff;
    justify-content: center;
  }
  .desnews {
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 685px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 8px 10px 1px rgba(238, 238, 238, 238),
      0 3px 14px 2px rgba(238, 238, 238, 238),
      0 5px 5px -3px rgba(238, 238, 238, 238);
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
    color: #ff5722;
    font-weight: bold;
  }

  .deslink ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .deslink li {
    float: left;
  }

  .deslink li a {
    width: 98px;
    height: 100%;
    display: block;
    color: #212121;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .deslink li a:hover:not(.active) {
    border-bottom: 3px solid #eee;
  }

  .deslink .active {
    border-bottom: 3px solid #3f51b5;
  }
  .deslink {
    display: flex;
    flex: 1;
    height: 120px;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
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
  .desbox4 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
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
