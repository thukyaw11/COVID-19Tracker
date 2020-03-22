<template>
  <div class="row">
    <div id="worldTotal" v-if="WorldTotal">
      <h1>Corona Cases</h1>
      <h2 class="total">{{WorldTotal.total_cases}}</h2>
      <br />
      <h1>New Cases</h1>
      <h2 class="newCase">{{WorldTotal.new_cases}}</h2>
      <br />
      <h1>Recover</h1>
      <h2 class="recover">{{WorldTotal.total_recovered}}</h2>
      <br />
      <h1>Deaths</h1>
      <h2 class="death">{{WorldTotal.total_deaths}}</h2>
      <br />
      <h1>Countries</h1>
      <h2 class="death">{{affectedCountry}} / 195</h2>
    </div>
    <div v-else id="worldTotal">
      <md-progress-spinner class="md-accent" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
    </div>
  </div>
</template>



<script>
/* eslint-disable no-console */

export default {
  name: "AffectedCountry",
  data() {
    return {
      WorldTotal: '',
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
          console.log(data);
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
  },
  methods: {
    setData(data) {
      this.WorldTotal = data;
    }
  }
};

/* eslint-enable no-console */
</script>