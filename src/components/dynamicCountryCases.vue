<template>
  <div class="middlecontainer">
    <div class="middlecontainer" v-if="statusCountry">
      <vue-topprogress ref="topProgress"></vue-topprogress>

      <div class="desnumber" v-for="caseByCountry in statusCountry" v-bind:key="caseByCountry.id">
        <div class="descomfirmedcase">
          <div :class="darkmode? 'numbercontainer1Dark' : 'numbercontainer1'">
            <div
              style="display:flex; align-items:flex-start; justify-content:flex-start;"
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
            >{{$t('globaldashboard.confirmcase')}}</div>
            <div
              style="font-size:36px; color:#757575; padding-top:20px"
            >{{caseByCountry.total_cases}}</div>
          </div>
        </div>
        <div class="desrecover">
          <div :class="darkmode? 'numbercontainer2Dark' : 'numbercontainer2'">
            <div
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
            >{{$t('globaldashboard.recover')}}</div>
            <div
              style="font-size:36px; color:#4CAF50; padding-top:20px"
              v-if="statusCountry[0].total_recovered"
            >{{caseByCountry.total_recovered}}</div>
            <div style="font-size:36px; color:#4CAF50; padding-top:20px" v-else>0</div>
          </div>
        </div>
        <div class="desdeath">
          <div :class="darkmode? 'numbercontainer3Dark' : 'numbercontainer3'">
            <div
              :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
            >{{$t('globaldashboard.death')}}</div>
            <div
              style="font-size:36px; color:#F44336; padding-top:20px"
              v-if="statusCountry[0].total_deaths"
            >{{caseByCountry.total_deaths}}</div>
            <div style="font-size:36px; color:#F44336; padding-top:20px" v-else>0</div>
          </div>
        </div>
      </div>

      <div class="desmap" v-for="(svg,index) in svgPath" :key="index">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          style="enable-background:new 0 0 100 100; width:80%; height:80%;"
          xml:space="preserve"
          fill="#e0e0e0"
        >
          <path
            :d= svg.path
          />
        </svg>

      </div>
      <div class="desfooter">
        Last Updated : {{addHour( statusCountry.statistic_taken_at)}}.
        <br />Copyright 2020 Covid 19 | Myanamr
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { vueTopprogress } from "vue-top-progress";
import { svg } from "../assets/content/svg";
export default {
  props: ["value"],
  components: {
    vueTopprogress
  },
  data() {
    return {
      statusCountry: "",
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false,
      svg: [],
      svgPath: ""
    };
  },
  created() {
    console.log(svg);
    this.svg.push(svg);
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  mounted() {
    this.fetchCountryCases(
      `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=myanmar`
    );
  },
  methods: {
    changeDark(value) {
      this.darkmode = value;
    },
    setData(data) {
      this.statusCountry = data;
    },
    addHour(recordDate) {
      var dateTime = new Date(recordDate);

      dateTime.setHours(dateTime.getHours() + 3);
      dateTime.setMinutes(dateTime.getMinutes() + 30);
      this.$root.$data.updatedTime = dateTime;
      return dateTime;
    },
    fetchCountryCases(apiURL) {
      fetch(apiURL, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "08dd76e316msh2f84322619ba704p1fdd2bjsn9889809b8110"
        }
      })
        .then(response => {
          response.json().then(statusByCountry => {
            console.log(statusByCountry);
            this.statusCountry = statusByCountry.latest_stat_by_country;
            this.setData(statusByCountry.latest_stat_by_country);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    value: function(newVal, oldVal) {
      this.$refs.topProgress.start();
      
      // Use setTimeout for demo
      setTimeout(() => {
        this.$refs.topProgress.done();
      }, 700);
      var path = this.svg[0].svgImage.filter(function(entry) {
        return entry.countryName == newVal;
      });

      this.svgPath = path;
      console.log(this.svgPath);
      // watch it

      const api_url = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${newVal}`;
      if (newVal) {
        this.fetchCountryCases(api_url);
      } else {
        this.fetchCountryCases(
          `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=myanmar`
        );
      }
    }
  }
};

/* eslint-enable no-console */
</script>
