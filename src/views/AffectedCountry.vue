<template>
  <div class="row">
    <h1>ကူးစက်ခံနိုင်ငံများ</h1>
    <md-field md-inline id="search">
      <label>Search by Country</label>
      <md-input v-model="search"></md-input>
    </md-field>

    <div v-for="data in filteredList" :key="data" class="content all">
      <p class="countryName">{{data}}</p>
    </div>
  </div>
</template>



<script>
/* eslint-disable no-console */
export default {
  name: "AffectedCountry",
  data() {
    return {
      DataByAffectedCountry: [],
      search : ''
    };
  },
  mounted() {
    fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",
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
          this.DataByAffectedCountry = data.affected_countries;
          this.setData(data.affected_countries);
        });
      })
      .catch(err => console.log(err));
      
  },
  methods: {
    setData(data){
      this.DataByAffectedCountry = data;
    }
  },
    computed: {
    filteredList() {
      console.log(this.DataByAffectedCountry);
      return this.DataByAffectedCountry.filter(name => {
        return name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    }
};

/* eslint-enable no-console */
</script>