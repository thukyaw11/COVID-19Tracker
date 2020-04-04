<template>
  <div class="container">
    <div v-if="DataByAffectedCountryDetail">
      <form class="searchcontainer">
        <div class="placeholdercontainer">
          <input
            type="text"
            id="search-bar"
            style="font-size:14px;"
            placeholder="Search ..."
            v-model="search"
          />
        </div>
        <div class="searchicon">
          <i class="material-icons">search</i>
        </div>
      </form>
      <h2 style="margin-left: 20px;">From Highest to Lowest</h2>
      <div v-for="data in filteredListDetail" :key="data.index">
        <button class="collapsible" @click="toggleData()">
          <div class="col1">{{data.country_name}}</div>
          <div class="col2">{{data.cases || sorting}} cases</div>
        </button>
        <div class="content">
          <br />
          <div class="flex1">
            <div class="recoveredbox">
              <div class="cases">Recovered</div>
              <div class="recoveredcasesnumber">{{data.total_recovered}}</div>
            </div>
            <div class="newcasebox">
              <div class="cases">New Cases</div>
              <div class="newcasesnumber">{{data.new_cases}}</div>
            </div>
            <div class="deathcasebox">
              <div class="cases">Death</div>
              <div class="deathcasesnumber">{{data.deaths}}</div>
            </div>
          </div>
          <div class="flex2">
            <div class="box">
              <div class="cases" style="font-size:12px;">Serious Critical</div>
              <div class="casesnumber">{{data.serious_critical}}</div>
            </div>
            <div class="box">
              <div class="cases">New Death</div>
              <div class="casesnumber">{{data.new_deaths}}</div>
            </div>
            <div class="box">
              <div class="cases" style="font-size:12px;">Case per 1 min</div>
              <div class="casesnumber">{{data.total_cases_per_1m_population}}</div>
            </div>
          </div>

          <p style="text-align:center;">Updated {{updatedTime}}</p>
          <br />
        </div>
      </div>
    </div>
    <div v-else class="spinner">
      <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
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
      updatedTime: ""
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
          this.DataByAffectedCountryDetail = data.countries_stat;
          this.setData(data.countries_stat);
        });
      })
      .catch(err => console.log(err));

    //change the nav bar title with soureofTruth
    this.$root.$data.title = "Countries, areas with cases";
  },
  methods: {
    setData(data) {
      var sortedArray = data.sort(function(a, b) {
        var bCases = Number(b.cases.replace(/,/g, ''));
        var aCases = Number(a.cases.replace(/,/g, ''));
        return bCases - aCases;
      });
      this.DataByAffectedCountryDetail = sortedArray;
      this.updatedTime = this.$root.$data.updatedTime;
    },
    toggleData() {
      var coll = document.getElementsByClassName("collapsible");
      var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;

          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
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
  font-size: 15px;
}
.col1 {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
}
.col2 {
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  display: flex;
  flex: 1;
}

.active,
.collapsible:hover {
  background-color: #eee;
}

.collapsible:after {
  content: "\002B";
  font-size: 20px;
  float: right;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.active:after {
  content: "\2212";
}

.content {
  flex-direction: column;
  padding: 0 0px;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  background-color: #fafafa;
  border-bottom: 1px solid #eee;
}
.flex1 {
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
.flex2 {
  margin-bottom: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
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
.flex2 .box {
  background-color: #eee;
  color: black;
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
</style>