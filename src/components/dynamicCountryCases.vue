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
              :style="darkmode? 'color : #a5d6a7; font-size:36px; font-weight:bold; padding-top:20px' : 'color : #4CAF50;font-size:36px; font-weight:bold; padding-top:20px '"
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
              :style="darkmode? 'color : #ef9a9a; font-size:36px; font-weight:bold; padding-top:20px' : 'color : #F44336;font-size:36px; font-weight:bold; padding-top:20px '"
              v-if="statusCountry[0].total_deaths"
            >{{caseByCountry.total_deaths}}</div>
            <div style="font-size:36px; color:#F44336; padding-top:20px" v-else>0</div>
          </div>
        </div>
      </div>

      <div class="desmap">
        
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            style="enable-background:new 0 0 100 100; width:80%; height:80%;"
            xml:space="preserve"
           :fill="darkmode? '#999999' : '#e0e0e0' "
           v-html="svgURL"
          >
          </svg>
                  <div :class="darkmode? 'mapnameDark' : 'mapname'">{{value}}</div>
                <!--<img :src='getSVG()' alt="" id="desimage">-->
                <!--<img :src='../assets/svg/Spain.svg' alt="" id="desimage">-->
                <!--<img :src='Path()' alt="" id="desimage">-->
                <!--<img src=`@/assets/svg/{{imgValue}}.svg` id="desimage" />-->
                  <div :class="darkmode? 'mapnameDark' : 'mapname'">{{value}} {{getSVG()}}</div>


      </div>
      <div class="desfooter">
        Last Updated : {{statusCountry[0].record_date}}
        Copyright 2020 Covid 19 | Myanamr
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { vueTopprogress } from "vue-top-progress";
import { svg } from "../assets/content/svgTwo";
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
        imgValue: '',
        URLMap:'',
        svg: {},
        svgURL:""
    };
  },
  created() {
    console.log(svg);
    
    this.svg = svg;
    this.svgURL = this.svg["World"]
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  mounted() {
    this.fetchCountryCases(
      `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=myanmar`
    );
  },
  methods: {
    getSVG(){
 
      var imgURL = '@/assets/svg/' + this.value + '.svg';
      console.log(typeof(imgURL));
      console.log(imgURL);
      // var images = require.context('../assets/svg', false, /\.svg$/)
      // return images('./' + this.value + ".svg")
      return imgURL;
    },
    Path()
    {
      return require( `@/assets/svg/${this.imgValue}.svg`)
    },
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
    value: function(newVal,oldVal) {
      this.$refs.topProgress.start();
      
      // Use setTimeout for demo
      setTimeout(() => {
        this.$refs.topProgress.done();
      }, 700);
          this.imgValue = newVal;
          this.svgURL = svg[newVal];
      this.URLMap = this.getSVG();

      

      // this.svgPath = path;
      // console.log(this.svgPath);
      console.log(oldVal);
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
