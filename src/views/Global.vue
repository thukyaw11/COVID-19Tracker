<template>
  <div class="row">
    <h1>Detail</h1>
    <md-field md-inline id="search">
      <label>Search by Country</label>
      <md-input v-model="search"></md-input>
    </md-field>

    <div v-for="data in filteredListDetail" :key="data" class="content">
      <p class="countryName">{{data.country_name}}</p>
      <table>
        <tr>
          <td>
            <p class="cases">Cases </p>
          </td>
          <td>
            <p class="cases">- {{data.cases}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="total-recover">Recovered </p>
          </td>
          <td>
            <p class="total-recover">- {{data.total_recovered}}</p>
          </td>
        </tr>
        <tr>
            <td><p class="new_case"> New Case </p></td>
            <td><p class="new_case">- {{data.new_cases}}</p></td>
        </tr>
        <tr>
            <td>
                <p class="active_case"> Active Case</p>
            </td>
            <td>
                <p class="active_case">- {{data.active_cases}}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="serious">Serious Critical</p>
            </td>
            <td>
                <p class="serious">- {{data.serious_critical}}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="death">Death</p>
            </td>
            <td>
                <p class="death">- {{data.deaths}}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="new_dead">New Death</p>
            </td>
            <td>
                <p class="new_dead">- {{data.new_deaths}}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p class="total_per">Case per 1 min</p>
            </td>
            <td>
                <p class="total_per">- {{data.total_cases_per_1m_population}}</p>
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>



<script>
/* eslint-disable no-console */
export default {
  name: "AffectedCountry",
  data() {
    return {
      DataByAffectedCountryDetail: [],
      search: ""
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
  },
  methods: {
    setData(data) {
      this.DataByAffectedCountryDetail = data;
    }
  },
  computed: {
    filteredListDetail() {
      console.log(this.DataByAffectedCountryDetail);
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