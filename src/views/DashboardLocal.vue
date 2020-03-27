<template>
  <div class="container-local">
    <div v-if="caseinMyanmar.length > 0">
      <div class="container" v-for="casesmm in caseinMyanmar" v-bind:key="casesmm.id">
        <div class="ConfirmedCaseContainer">
          <div class="caseheading">Infected</div>
          <div
            class="number"
            style="font-size:42px; font-weight: bold"
            v-if="caseinMyanmar[0].total_cases"
          >{{casesmm.total_cases}}</div>
          <div class="number" style="font-size:42px;" v-else>0</div>
        </div>
        <div class="ConfirmedCaseContainer">
          <div class="caseheading">News Cases</div>
          <div
            class="number"
            style="font-size:42px;"
            v-if="caseinMyanmar[0].new_cases"
          >{{casemm.new_cases}}</div>
          <div class="number" style="font-size:42px;" v-else>0</div>
        </div>
        <div class="RecoverCase">
          <div class="ConfirmedCaseContainer">
            <div class="caseheading">Recover</div>
            <div
              class="number"
              style="font-size:42px; color:#4CAF50"
              v-if="caseinMyanmar[0].total_recovered"
            >{{casesmm.total_recovered}}</div>
            <div class="number" style="font-size:42px;" v-else>0</div>
          </div>
        </div>
        <div class="DeathCase">
          <div class="ConfirmedCaseContainer">
            <div class="caseheading">Deaths</div>
            <div
              class="number"
              style="font-size:42px; color:#F44336"
              v-if="caseinMyanmar[0].total_deaths"
            >{{casesmm.total_deaths}}</div>
            <div class="number" style="font-size:42px;" v-else>0</div>
          </div>
        </div>
        <div class="ConfirmedCaseContainer">
          <div class="caseheading">Serious Cases</div>
          <div
            class="number"
            style="font-size:42px;"
            v-if="caseinMyanmar[0].serious_critical"
          >{{casesmm.serious_critical}}</div>
          <div class="number" style="font-size:42px;" v-else>0</div>
        </div>

        <p style="text-align:center; color:#757575;">Last updated: {{casesmm.record_date}}</p>
      </div>
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
        <div class="lcalactivedots"></div>
      </div>
      <div class="local">
        <div class="toggleheading">
          <router-link to="/local">
            <a style="text-decoration:none; color:#212121;">Local</a>
          </router-link>
        </div>
        <div class="activedots"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  data() {
    return {
      caseinMyanmar: []
    };
  },
  mounted() {
    fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=myanmar",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "08dd76e316msh2f84322619ba704p1fdd2bjsn9889809b8110"
        }
      }
    )
      .then(response => {
        response.json().then(caseby_mm => {
          this.caseinMyanmar = caseby_mm.latest_stat_by_country;
          console.log(this.caseinMyanmar);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
/* eslint-enable no-console */
</script>
