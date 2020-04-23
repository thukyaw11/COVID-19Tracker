<template>
  <div :class="darkmode? 'containerDark' : 'container'">
    <div :class="darkmode? 'countrybycasescontainerDark' : 'countrybycasescontainer'">
      <div v-if="DataByAffectedCountryDetail">
        <form :class="darkmode? 'searchcontainerDark' : 'searchcontainer'">
          <div class="placeholdercontainer">
            <input
              type="text"
              id="search-bar"
              style="font-size:14px;"
              placeholder="Search ..."
              v-model="search"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
            />
          </div>
          <div class="searchicon">
            <i class="material-icons">search</i>
          </div>
        </form>
        <div
          style="text-align:center; color:#757575; font-size:12px; font-weight:bold;"
        >Order of Highest to Lowest</div>
        <div v-for="(data,index) in filteredListDetail" :key="index">
          <button :class="darkmode? 'collapsibleDark' : 'collapsible'" @click="toggleData(index)">
            <div :class="darkmode? 'col1Dark' : 'col1'">{{data.country_name}}</div>
            <div
              :class="darkmode? 'col2Dark' : 'col2'"
            >{{data.cases || sorting}} {{$t('casesPage.confirmcase')}}</div>
            <div :class="darkmode? 'col3Dark' : 'col3'">
              <i class="fas fa-angle-right"></i>
            </div>
          </button>
          <div id="grow" class="grow">
            <div class="measuringWrapper">
              <div class="gflex1">
                <div :class="darkmode? 'recoveredboxDark' : 'recoveredbox'">
                  <div class="cases">{{$t('casesPage.recovered')}}</div>
                  <div class="recoveredcasesnumber">{{data.total_recovered}}</div>
                </div>
                <div :class="darkmode? 'newcaseboxDark' : 'newcasebox'">
                  <div class="cases">{{$t('casesPage.newcases')}}</div>
                  <div class="newcasesnumber">{{data.new_cases}}</div>
                </div>
                <div :class="darkmode? 'deathcaseboxDark' : 'deathcasebox'">
                  <div class="cases">{{$t('casesPage.death')}}</div>
                  <div class="deathcasesnumber">{{data.deaths}}</div>
                </div>
              </div>
              <div class="gflex2">
                <div :class="darkmode? 'boxDark': 'box'">
                  <div class="cases" style="font-size:12px;">{{$t('casesPage.serious')}}</div>
                  <div class="casesnumber">{{data.serious_critical}}</div>
                </div>
                <div :class="darkmode? 'boxDark': 'box'">
                  <div class="cases">{{$t('casesPage.newDeath')}}</div>
                  <div class="casesnumber">{{data.new_deaths}}</div>
                </div>
                <div :class="darkmode? 'boxDark': 'box'">
                  <div class="cases" style="font-size:12px;">{{$t('casesPage.casepermin')}}</div>
                  <div class="casesnumber">{{data.total_cases_per_1m_population}}</div>
                </div>
              </div>

              <p style="text-align:center;">Updated {{updatedTime}}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="spinner">
        <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
      </div>
    </div>
  </div>
</template>






<script>
/* eslint-disable no-console */
export default {
  name: "AffectedCountry",
  data() {
    return {
      DataByAffectedCountryDetail: "",
      search: "",
      updatedTime: "",
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  mounted() {
    fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "84660ad37emshfca869ae254ae73p16b922jsnf01c1ebb19a6"
        }
      }
    )
      .then(response => {
        response.json().then(data => {
          this.updatedTime = data.statistic_taken_at;

          this.DataByAffectedCountryDetail = data.countries_stat;
          this.setData(data.countries_stat);
        });
      })
      .catch(err => console.log(err));
    if (this.lang == "mm") {
      this.$root.$data.title = "နိုင်ငံအလိုက်";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "Country by Cases";
    }
  },
  //working with event bus
  created() {
    this.$eventHub.$on("change-name", this.changeName);

    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  methods: {
    changeDark(value) {
      this.darkmode = value;

      if (this.darkmode == true) {
        document.body.className = "home";
      } else {
        document.body.className = "intro";
      }
    },
    //recieved emit event
    changeName(name) {
      // lang will be automatically transported to the parameter.
      this.lang = name;
      if (name == "mm") {
        this.$root.$data.title = "နိုင်ငံအလိုက်";
      }
      if (name == "en") {
        this.$root.$data.title = "Country by cases";
      }
    },
    setData(data) {
      var sortedArray = data.sort(function(a, b) {
        var bCases = Number(b.cases.replace(/,/g, ""));
        var aCases = Number(a.cases.replace(/,/g, ""));
        return bCases - aCases;
      });
      this.DataByAffectedCountryDetail = sortedArray;
    },
    toggleData(index) {
      var growDiv = document.getElementsByClassName("grow")[index];
      if (growDiv.clientHeight) {
        growDiv.style.height = 0;
      } else {
        var wrapper = document.getElementsByClassName("measuringWrapper")[
          index
        ];
        growDiv.style.height = wrapper.clientHeight + "px";
      }
    }
  },
  computed: {
    filteredListDetail() {
      return this.DataByAffectedCountryDetail.filter(name => {
        return name.country_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  }
};
/* eslint-enable no-console */
</script>


<style scoped>
.countrybycasescontainer {
  background-color: #fff;
  margin-top: 80px;
  justify-content: center;
  width: 95%;
  align-items: center;
  height: auto;
}
.countrybycasescontainerDark {
  background-color: #121212;
  margin-top: 80px;
  justify-content: center;
  width: 95%;
  align-items: center;
  height: auto;
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
.container-country {
  margin-top: 10px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.ConfirmedCaseContainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100px;
  margin-left: 35px;
}
.RecoverCase {
  background-color: #e8f5e9;
  display: flex;
  flex: 1;
  margin-left: 10px;
  border-radius: 15px;
  margin-right: 10px;
  height: 90px;
}
.DeathCase {
  background-color: #ffebee;
  display: flex;
  flex: 1;
  margin-left: 10px;
  border-radius: 15px;
  margin-right: 10px;
  margin-top: 5px;
  height: 93px;
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
.lcalactivedots {
  margin-top: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: #eee;
}
.collapsible {
  border: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  text-align: left;
  outline: none;
  border-bottom: 1px solid #eee;
  font-size: 15px;
  align-items: center;
  justify-content: center;
}
.collapsibleDark {
  border: 0;
  background-color: #121212;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  text-align: left;
  outline: none;
  border-bottom: 1px solid #212121;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;
}

.col1 {
  color: #212121;
  align-items: center;
  display: flex;
  flex: 2;
}
.col1Dark {
  align-items: center;
  display: flex;
  flex: 2;
  color: #f5f5f5;
}
.col2 {
  color: #212121;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex: 10;
}
.col2Dark {
  color: #f5f5f5;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex: 10;
}
.col3 {
  color: #212121;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex: 1;
}
.col3Dark {
  color: #f5f5f5;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex: 1;
}
.active,
.collapsible:hover {
  background-color: #eee;
}

.measuringWrapper {
  width: 100%;
  border-bottom: 1px solid red;
}
.gflex1 {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 100px;
  margin-left: 0;
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.gflex2 {
  margin-bottom: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.recoveredbox {
  text-align: center;
  border-radius: 15px;
  width: 100px;
  margin: 0 5px;
  height: 90px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e8f5e9;
}
.recoveredboxDark {
  text-align: center;
  border-radius: 15px;
  width: 100px;
  margin: 0 5px;
  height: 90px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
}
.recoveredcasesnumber {
  font-size: 24px;
  color: #4caf50;
  padding-top: 10px;
}
.newcasebox {
  margin: 0 5px;
  border-radius: 15px;
  width: 100px;
  height: 90px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff8e1;
}
.newcaseboxDark {
  margin: 0 5px;
  border-radius: 15px;
  width: 100px;
  height: 90px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
}
.newcasesnumber {
  font-size: 24px;
  color: #ffc107;
  padding-top: 10px;
}
.deathcasebox {
  margin: 0 5px;
  border-radius: 15px;
  width: 100px;
  height: 90px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffebee;
}
.deathcaseboxDark {
  margin: 0 5px;
  border-radius: 15px;
  width: 100px;
  height: 90px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
}
.deathcasesnumber {
  font-size: 24px;
  color: #f44336;
  padding-top: 10px;
}
.box {
  margin: 0 5px;
  border-radius: 15px;
  width: 100px;
  height: 90px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.boxDark {
  margin: 0 5px;
  border-radius: 15px;
  width: 100px;
  height: 90px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.gflex2 .box {
  background-color: #eee;
  color: black;
}
.gflex2 .boxDark {
  background-color: #212121;
  color: #f5f5f5;
}
.casesnumber {
  font-size: 24px;
  padding-top: 10px;
}
.searchcontainer {
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #f5f5f5;
}
.searchcontainerDark {
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #212121;
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
  width: 100%;
  margin-left: 15px;
  border: 0;
  outline: 0;
  background-color: transparent;
  height: 40px;
  width: 90%;
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
  flex: 12;
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
#grow {
  -moz-transition: height 0.5s;
  -ms-transition: height 0.5s;
  -o-transition: height 0.5s;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  height: 0;
  overflow: hidden;
}
</style>