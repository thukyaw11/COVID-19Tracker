<template>
  <div class="middlecontainer" v-if="statusCountry">
    
      <vue-topprogress ref="topProgress"></vue-topprogress>



      <div class="countryname" :style="darkmode? 'color: #f5f5f5' : 'color : #212121'">{{value}}</div>

      <div class="countrydata"  v-for="caseByCountry in statusCountry" v-bind:key="caseByCountry.id">
            <div class="firstrow">


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
            <div class="secondrow">


                <div class="desnewcases">
                  <div :class="darkmode? 'numbercontainer1Dark' : 'numbercontainer1'">
                    <div
                      style="display:flex; align-items:flex-start; justify-content:flex-start;"
                      :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
                    >{{$t('globaldashboard.newcases')}}</div>
                   <div
                      style="font-size:36px; color:#757575; padding-top:20px"
                      v-if="statusCountry[0].new_cases"
                    >{{caseByCountry.new_cases}}</div>
                    <div style="font-size:36px; color:#757575; padding-top:20px" v-else>0</div>
                  </div>
                </div>
                <div class="desnewdeath">
                  <div :class="darkmode? 'numbercontainer4Dark' : 'numbercontainer4'">
                    <div
                      :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
                    >{{$t('globaldashboard.death')}}</div>
                    <div
                      style="font-size:36px; color:#757575; padding-top:20px"
                      v-if="statusCountry[0].total_deaths"
                    >{{caseByCountry.total_deaths}}</div>
                    <div style="font-size:36px; color:#757575; padding-top:20px" v-else>0</div>
                  </div>
                </div>
                <div class="descasepermin">
                  <div :class="darkmode? 'numbercontainer1Dark' : 'numbercontainer1'">
                    <div
                      :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
                    >{{$t('casesPage.casepermin')}}</div>
                    <div
                      style="font-size:36px; color:#757575; padding-top:20px"
                      v-if="statusCountry[0].total_cases_per1m"
                    >{{caseByCountry.total_cases_per1m  }}</div>
                    <div style="font-size:36px; color:#757575; padding-top:20px" v-else>0</div>
                  </div>
                </div>

            </div>
            <div class="thirdrow">
               <div class="descritical">
                  <div :class="darkmode? 'numbercontainer1Dark' : 'numbercontainer1'">
                    <div
                      :style="darkmode? 'color : #f5f5f5' : 'color : #212121'"
                    >{{$t('localdashboard.seriouscase')}}</div>
                    <div
                      style="font-size:36px; color:#757575; padding-top:20px"
                      v-if="statusCountry[0].serious_critical"
                    >{{caseByCountry.serious_critical}}</div>
                    <div style="font-size:36px; color:#757575; padding-top:20px" v-else>0</div>
                  </div>
                </div>
              <div class="descritical">
                 
              </div>
              <div class="descritical">
                
              </div>

              

            </div>
    
                

    
      </div>
      <div class="countrycasefooter">
              Last Updated : {{statusCountry[0].record_date}}
              
             
      </div>
      
          
                 


   
            
    
  </div>
</template>
<script>
/* eslint-disable no-console */
import { vueTopprogress } from "vue-top-progress";

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

    };
  },
  created(){
    this.$darkModeBus.$on("dark-mode", this.changeDark);
    
  },
  mounted() {
    this.fetchCountryCases(
      `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=myanmar`
    );
  },
  methods: {

    changeDark(value) {
      console.log(value);
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
            console.log(statusByCountry.latest_stat_by_country);
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
<style scoped>
.countryname
{
  padding-left:2%;
  display:flex;
  align-items:center;
  flex:2;
  font-size:56px;
  line-height:50px;
  font-weight:bold;
}
.countrydata

{ 
  display:flex;
  flex-direction:column;
  flex:6;
  
}
.countrycasefooter
{
 
  display:flex;
  flex:1;

  width: 100%;
  height: 50px;
  align-items: center;
  justify-content:center;
  color: #757575;
  margin-right: 25px;
}
.firstrow
{
    padding-top:5px;
  padding-bottom:5px;
  display:flex;
  height:200px;
 
}
.secondrow
{
  padding-top:5px;
  padding-bottom:5px;
  display:flex;
  height:200px;
  

}
.thirdrow
{
  padding-top:5px;
  padding-bottom:5px;
  display:flex;
  height:200px;
    

}
 .desnewcases {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .desnewdeath {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .descasepermin {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
   .descritical {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  
   .numbercontainer4{
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  }
  .numbercontainer4Dark {
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #212121;
  }
  
</style>



