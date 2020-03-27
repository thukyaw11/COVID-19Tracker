<template>
  <div class="caseinmm">
    <div v-if="caseinMyanmar.length > 0" id="mmwrapper">
      <div v-for="casesmm in caseinMyanmar" v-bind:key="casesmm.id">
          <h1 v-if="caseinMyanmar[0].total_cases">{{casesmm.total_cases}}</h1>
          <h1 v-else>0</h1>
          <h3 class="total">Infected</h3>
          <br>
          <h1 v-if="caseinMyanmar[0].total_deaths">{{casesmm.total_deaths}}</h1>
          <h1 v-else>0</h1>
          <h3 class="death">Deaths</h3>
          <br>
          <h1 v-if="caseinMyanmar[0].new_deaths">{{casesmm.new_deaths}}</h1>
          <h1 v-else>0</h1>
          <h3 class="death">New Deaths</h3>
          <br>
          <h1 v-if="caseinMyanmar[0].serious_critical">{{casesmm.serious_critical}}</h1>
          <h1 v-else>0</h1>
          <h3 class="newCase">Serious Critical</h3>
          <br>
          <h1 v-if="caseinMyanmar[0].total_recovered">{{casesmm.total_recovered}}</h1>
          <h1 v-else>0</h1>
          <h3 class="recover">Recovered</h3>
        </div>
    </div>
    <div v-else class="loading_spinner">
      <md-progress-spinner class="md-accent" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
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
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
/* eslint-enable no-console */

</script>
