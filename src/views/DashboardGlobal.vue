<template>
  <div class="container-global">
    <div class="container" v-if="WorldTotal">
      <div class="ConfirmedCaseContainer">
        <div class="caseheading">Confirmed Cases</div>
        <div class="number" style="font-size:42px; font-weight: bold">{{WorldTotal.total_cases}}</div>
      </div>
      <div class="ConfirmedCaseContainer">
        <div class="caseheading">News Cases</div>
        <div class="number" style="font-size:42px;  color:#616161">{{WorldTotal.new_cases}}</div>
      </div>
      <div class="RecoverCase">
        <div class="ConfirmedCaseContainer">
          <div class="caseheading">Recover</div>
          <div class="number" style="font-size:42px; color:#4CAF50">{{WorldTotal.total_recovered}}</div>
        </div>
      </div>
      <div class="DeathCase">
        <div class="ConfirmedCaseContainer">
          <div class="caseheading">Death</div>
          <div class="number" style="font-size:42px; color:#F44336">{{WorldTotal.total_deaths}}</div>
        </div>
      </div>
      <div class="ConfirmedCaseContainer">
        <div class="caseheading">Countries</div>
        <div class="number" style="font-size:42px; color:#616161">{{affectedCountry}}</div>
      </div>

      <p style="text-align:center; color:#757575;">Last Updated : {{WorldTotal.statistic_taken_at}}</p>
    </div>
    <div v-else class="spinner">
      <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
    </div>
    <div class="toggle">
      <div class="global">
        <div class="toggleheading">
          <router-link to="/">
            <a style="text-decoration:none; color:#212121;">Global</a>
          </router-link>
        </div>

        <div class="activedots"></div>
      </div>
      <div class="local">
        <div class="toggleheading">
          <router-link to="/local">
            <a style="text-decoration:none; color:#212121;">Local</a>
          </router-link>
        </div>

        <div class="lcalactivedots"></div>
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
      WorldTotal: "",
      affectedCountry: ""
    };
  },
  mounted() {
    fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
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
          this.setData(data);
        });
      })
      .catch(err => console.log(err));

    fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "08dd76e316msh2f84322619ba704p1fdd2bjsn9889809b8110"
        }
      }
    )
      .then(response => {
        response.json().then(data => {
          this.affectedCountry = data.affected_countries.length;
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.$root.$data.title = "Global Dashboard";
  },
  methods: {
    setData(data) {
      this.WorldTotal = data;
      this.$root.$data.updatedTime = this.WorldTotal.statistic_taken_at;
    }
  }
};

/* eslint-enable no-console */
</script>
