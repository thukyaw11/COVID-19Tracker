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
<img src="../assets/SVGforcountry/United States.svg" style="display : none" id="USA" >
<img src="../assets/SVGforcountry/Spain.svg" style="display : none" id="Spain" >
<img src="../assets/SVGforcountry/Italy.svg" style="display : none" id="Italy" >
<img src="../assets/SVGforcountry/France.svg" style="display : none" id="France" >
<img src="../assets/SVGforcountry/United Kingdom and Ireland.svg" style="display : none" id="UK" >
<img src="../assets/SVGforcountry/Germany.svg" style="display : none" id="Germany" >
<img src="../assets/SVGforcountry/Turkey.svg" style="display : none" id="Turkey" >
<img src="../assets/SVGforcountry/Russia.svg" style="display : none" id="Russia" >
<img src="../assets/SVGforcountry/Iran.svg" style="display : none" id="Iran" >
<img src="../assets/SVGforcountry/China.svg" style="display : none" id="China" >
<img src="../assets/SVGforcountry/Brazil.svg" style="display : none" id="Brazil" >
<!-- <img src="../assets/SVGforcountry/canada" style="display : none" id="Canada" > -->
<img src="../assets/SVGforcountry/Belgium.svg" style="display : none" id="Belgium" >
<img src="../assets/SVGforcountry/Netherlands.svg" style="display : none" id="Netherlands" >
<img src="../assets/SVGforcountry/India.svg" style="display : none" id="India" >
<img src="../assets/SVGforcountry/Peru.svg" style="display : none" id="Peru" >
<img src="../assets/SVGforcountry/Switzerland.svg" style="display : none" id="Switzerland" >
<img src="../assets/SVGforcountry/portugal.svg" style="display : none" id="Portugal" >
<img src="../assets/SVGforcountry/Ecuador.svg" style="display : none" id="Ecuador" >
<img src="../assets/SVGforcountry/Saudi arabia.svg" style="display : none" id="SaudiArabia" >
<img src="../assets/SVGforcountry/Sweden.svg" style="display : none" id="Sweden" >
<img src="../assets/SVGforcountry/Ireland.svg" style="display : none" id="Ireland" >
<img src="../assets/SVGforcountry/Mexico.svg" style="display : none" id="Mexico" >
<img src="../assets/SVGforcountry/Israel.svg" style="display : none" id="Israel" >
<img src="../assets/SVGforcountry/Singapore.svg" style="display : none" id="Singapore" >
<img src="../assets/SVGforcountry/Austria.svg" style="display : none" id="Austria" >
<img src="../assets/SVGforcountry/Pakistan.svg" style="display : none" id="Pakistan" >
<img src="../assets/SVGforcountry/Chile.svg" style="display : none" id="Chile" >
<img src="../assets/SVGforcountry/Japan.svg" style="display : none" id="Japan" >
<img src="../assets/SVGforcountry/Belarus.svg" style="display : none" id="Belarus" >
<img src="../assets/SVGforcountry/Poland.svg" style="display : none" id="Poland" >
<img src="../assets/SVGforcountry/Qatar.svg" style="display : none" id="Qatar" >
<img src="../assets/SVGforcountry/Romania.svg" style="display : none" id="Romania" >
<img src="../assets/SVGforcountry/United arab emirates.svg" style="display : none" id="UAE" >
<img src="../assets/SVGforcountry/South korea.svg" style="display : none" id="S.Korea" >
<img src="../assets/SVGforcountry/Ukraine.svg" style="display : none" id="Ukraine" >
<img src="../assets/SVGforcountry/Indonesia.svg" style="display : none" id="Indonesia" >
<img src="../assets/SVGforcountry/Denmark.svg" style="display : none" id="Denmark" >
<img src="../assets/SVGforcountry/Serbia.svg" style="display : none" id="Serbia" >
<img src="../assets/SVGforcountry/Philippines.svg" style="display : none" id="Philippines" >
<img src="../assets/SVGforcountry/Norway.svg" style="display : none" id="Norway" >
<!-- <img src="../assets/SVGforcountry/cz" style="display : none" id="Czechia" > -->
<img src="../assets/SVGforcountry/Bangladesh.svg" style="display : none" id="Bangladesh" >
<img src="../assets/SVGforcountry/Australia.svg" style="display : none" id="Australia" >
<img src="../assets/SVGforcountry/Dominican Republic.svg" style="display : none" id="DominicanRepublic" >
<img src="../assets/SVGforcountry/Panama.svg" style="display : none" id="Panama" >
<img src="../assets/SVGforcountry/Colombia.svg" style="display : none" id="Colombia" >
<img src="../assets/SVGforcountry/Malaysia.svg" style="display : none" id="Malaysia" >
<img src="../assets/SVGforcountry/Egypt.svg" style="display : none" id="Egypt" >
<img src="../assets/SVGforcountry/South Africa.svg" style="display : none" id="SouthAfrica" >
<img src="../assets/SVGforcountry/Finland.svg" style="display : none" id="Finland" >
<img src="../assets/SVGforcountry/Morocco.svg" style="display : none" id="Morocco" >
<img src="../assets/SVGforcountry/Argentina.svg" style="display : none" id="Argentina" >
<img src="../assets/SVGforcountry/Algeria.svg" style="display : none" id="Algeria" >
<img src="../assets/SVGforcountry/Moldova.svg" style="display : none" id="Moldova" >
<img src="../assets/SVGforcountry/Luxembourg.svg" style="display : none" id="Luxembourg" >
<img src="../assets/SVGforcountry/Kuwait.svg" style="display : none" id="Kuwait" >
<img src="../assets/SVGforcountry/Kazakhstan.svg" style="display : none" id="Kazakhstan" >
<img src="../assets/SVGforcountry/Thailand.svg" style="display : none" id="Thailand" >
<img src="../assets/SVGforcountry/Bahrain.svg" style="display : none" id="Bahrain" >
<img src="../assets/SVGforcountry/Hungary.svg" style="display : none" id="Hungary" >
<img src="../assets/SVGforcountry/Greece.svg" style="display : none" id="Greece" >
<img src="../assets/SVGforcountry/Oman.svg" style="display : none" id="Oman" >
<img src="../assets/SVGforcountry/Croatia.svg" style="display : none" id="Croatia" >
<img src="../assets/SVGforcountry/Uzbekistan.svg" style="display : none" id="Uzbekistan" >
<img src="../assets/SVGforcountry/Afghanistan.svg" style="display : none" id="Afghanistan" >
<img src="../assets/SVGforcountry/Armenia.svg" style="display : none" id="Armenia" >
<img src="../assets/SVGforcountry/Iraq.svg" style="display : none" id="Iraq" >
<img src="../assets/SVGforcountry/Cameroon.svg" style="display : none" id="Cameroon" >
<img src="../assets/SVGforcountry/Iceland.svg" style="display : none" id="Iceland" >
<img src="../assets/SVGforcountry/Azerbaijan.svg" style="display : none" id="Azerbaijan" >
<!-- <img src="../assets/SVGforcountry/BosniaandHerzegovina.svg" style="display : none" id="BosniaandHerzegovina" > -->
<img src="../assets/SVGforcountry/Ghana.svg" style="display : none" id="Ghana" >
<img src="../assets/SVGforcountry/Estonia.svg" style="display : none" id="Estonia" >
<img src="../assets/SVGforcountry/Nigeria.svg" style="display : none" id="Nigeria" >
<img src="../assets/SVGforcountry/New zealand.svg" style="display : none" id="NewZealand" >
<img src="../assets/SVGforcountry/Cuba.svg" style="display : none" id="Cuba" >
<img src="../assets/SVGforcountry/Bulgaria.svg" style="display : none" id="Bulgaria" >
<img src="../assets/SVGforcountry/Macedonia.svg" style="display : none" id="NorthMacedonia" >
<img src="../assets/SVGforcountry/Slovenia.svg" style="display : none" id="Slovenia" >
<img src="../assets/SVGforcountry/Slovakia.svg" style="display : none" id="Slovakia" >
<img src="../assets/SVGforcountry/Lithuania.svg" style="display : none" id="Lithuania" >
<img src="../assets/SVGforcountry/Guinea.svg" style="display : none" id="Guinea" >
<img src="../assets/SVGforcountry/Ivory Coast.svg" style="display : none" id="IvoryCoast" >
<img src="../assets/SVGforcountry/Djibouti.svg" style="display : none" id="Djibouti" >
<img src="../assets/SVGforcountry/Bolivia.svg" style="display : none" id="Bolivia" >
<img src="../assets/SVGforcountry/Hong Kong.svg" style="display : none" id="HongKong" >
<img src="../assets/SVGforcountry/Tunisia.svg" style="display : none" id="Tunisia" >
<img src="../assets/SVGforcountry/Senegal.svg" style="display : none" id="Senegal" >
<img src="../assets/SVGforcountry/Latvia.svg" style="display : none" id="Latvia" >
<img src="../assets/SVGforcountry/Cyprus.svg" style="display : none" id="Cyprus" >
<img src="../assets/SVGforcountry/Albania.svg" style="display : none" id="Albania" >
<img src="../assets/SVGforcountry/Andorra.svg" style="display : none" id="Andorra" >
<img src="../assets/SVGforcountry/Honduras.svg" style="display : none" id="Honduras" >
<img src="../assets/SVGforcountry/Kyrgyzstan.svg" style="display : none" id="Kyrgyzstan" >

<img src="../assets/SVGforcountry/Lebanon.svg" style="display : none" id="Lebanon" >
<!-- <img src="../assets/SVGforcountry/diam" style="display : none" id="DiamondPrincess" > -->
<img src="../assets/SVGforcountry/Niger.svg" style="display : none" id="Niger" >
<img src="../assets/SVGforcountry/Costa Rica.svg" style="display : none" id="CostaRica" >
<img src="../assets/SVGforcountry/Burkina Faso.svg" style="display : none" id="BurkinaFaso" >
<img src="../assets/SVGforcountry/Sri lanka.svg" style="display : none" id="SriLanka" >
<img src="../assets/SVGforcountry/Uruguay.svg" style="display : none" id="Uruguay" >
<img src="../assets/SVGforcountry/Somalia.svg" style="display : none" id="Somalia" >
<img src="../assets/SVGforcountry/San marino.svg" style="display : none" id="SanMarino" >
<img src="../assets/SVGforcountry/Guatemala.svg" style="display : none" id="Guatemala" >
<!-- <img src="../assets/SVGforcountry/c" style="display : none" id="ChannelIslands" > -->
<!-- <img src="../assets/SVGforcountry/geo" style="display : none" id="Georgia" > -->
<img src="../assets/SVGforcountry/Dominican Republic.svg" style="display : none" id="DRC" >
<img src="../assets/SVGforcountry/Mali.svg" style="display : none" id="Mali" >
<img src="../assets/SVGforcountry/Tanzania.svg" style="display : none" id="Tanzania" >
<img src="../assets/SVGforcountry/Malta.svg" style="display : none" id="Malta" >
<img src="../assets/SVGforcountry/Mayotte.svg" style="display : none" id="Mayotte" >
<img src="../assets/SVGforcountry/Jordan.svg" style="display : none" id="Jordan" >
<img src="../assets/SVGforcountry/Taiwan.svg" style="display : none" id="Taiwan" >
<!-- <img src="../assets/SVGforcountry/reun" style="display : none" id="Réunion" > -->
<img src="../assets/SVGforcountry/Kenya.svg" style="display : none" id="Kenya" >
<img src="../assets/SVGforcountry/Jamaica.svg" style="display : none" id="Jamaica" >
<img src="../assets/SVGforcountry/El Salvador.svg" style="display : none" id="ElSalvador" >
<img src="../assets/SVGforcountry/South sudan.svg" style="display : none" id="Sudan" >
<img src="../assets/SVGforcountry/Palestine.svg" style="display : none" id="Palestine" >
<img src="../assets/SVGforcountry/Mauritius.svg" style="display : none" id="Mauritius" >
<img src="../assets/SVGforcountry/Venezuela.svg" style="display : none" id="Venezuela" >
<img src="../assets/SVGforcountry/Montenegro.svg" style="display : none" id="Montenegro" >
<img src="../assets/SVGforcountry/Equatorial Guinea.svg" style="display : none" id="EquatorialGuinea" >
<img src="../assets/SVGforcountry/Isle of man.svg" style="display : none" id="IsleofMan" >
<img src="../assets/SVGforcountry/Vietnam.svg" style="display : none" id="Vietnam" >
<img src="../assets/SVGforcountry/Maldives.svg" style="display : none" id="Maldives" >
<img src="../assets/SVGforcountry/Paraguay.svg" style="display : none" id="Paraguay" >
<img src="../assets/SVGforcountry/Gabon.svg" style="display : none" id="Gabon" >
<img src="../assets/SVGforcountry/Rwanda.svg" style="display : none" id="Rwanda" >
<img src="../assets/SVGforcountry/Congo.svg" style="display : none" id="Congo" >
<img src="../assets/SVGforcountry/Faroe Islands.svg" style="display : none" id="FaeroeIslands" >
<img src="../assets/SVGforcountry/Martinique.svg" style="display : none" id="Martinique" >
<img src="../assets/SVGforcountry/Myanmar.svg" style="display : none" id="Myanmar" >
<img src="../assets/SVGforcountry/Guadeloupe.svg" style="display : none" id="Guadeloupe" >
<img src="../assets/SVGforcountry/Liberia.svg" style="display : none" id="Liberia" >
<img src="../assets/SVGforcountry/Gibraltar.svg" style="display : none" id="Gibraltar" >
<img src="../assets/SVGforcountry/Brunei Darussalam.svg" style="display : none" id="Brunei" >
<img src="../assets/SVGforcountry/Ethiopia.svg" style="display : none" id="Ethiopia" >
<img src="../assets/SVGforcountry/Madagascar.svg" style="display : none" id="Madagascar" >
<img src="../assets/SVGforcountry/French Guiana.svg" style="display : none" id="FrenchGuiana" >
<img src="../assets/SVGforcountry/Cambodia.svg" style="display : none" id="Cambodia" >
<img src="../assets/SVGforcountry/Trinidad and Tobago.svg" style="display : none" id="TrinidadandTobago" >
<!-- <img src="../assets/SVGforcountry/cabo" style="display : none" id="CaboVerde" > -->
<img src="../assets/SVGforcountry/Bermuda.svg" style="display : none" id="Bermuda" >
<img src="../assets/SVGforcountry/Togo.svg" style="display : none" id="Togo" >
<img src="../assets/SVGforcountry/Sierra leone.svg" style="display : none" id="SierraLeone" >
<img src="../assets/SVGforcountry/Aruba.svg" style="display : none" id="Aruba" >
<img src="../assets/SVGforcountry/Zambia.svg" style="display : none" id="Zambia" >
<img src="../assets/SVGforcountry/Monaco.svg" style="display : none" id="Monaco" >
<img src="../assets/SVGforcountry/Liechtenstein.svg" style="display : none" id="Liechtenstein" >
<!-- <img src="../assets/SVGforcountry/baha" style="display : none" id="Bahamas" > -->
<img src="../assets/SVGforcountry/Barbados.svg" style="display : none" id="Barbados" >
<img src="../assets/SVGforcountry/Uganda.svg" style="display : none" id="Uganda" >
<img src="../assets/SVGforcountry/Haiti.svg" style="display : none" id="Haiti" >
<img src="../assets/SVGforcountry/Mozambique.svg" style="display : none" id="Mozambique" >
<!-- <img src="../assets/SVGforcountry/sint" style="display : none" id="SintMaarten" > -->
<img src="../assets/SVGforcountry/Guyana.svg" style="display : none" id="Guyana" >
<img src="../assets/SVGforcountry/Cayman Islands.svg" style="display : none" id="CaymanIslands" >
<img src="../assets/SVGforcountry/Guinea-Bissau.svg" style="display : none" id="Guinea-Bissau" >
<!-- <img src="../assets/SVGforcountry/es" style="display : none" id="Eswatini" > -->
<img src="../assets/SVGforcountry/Benin.svg" style="display : none" id="Benin" >
<img src="../assets/SVGforcountry/Libya.svg" style="display : none" id="Libya" >
<!-- <img src="../assets/SVGforcountry/fre" style="display : none" id="FrenchPolynesia" > -->
<img src="../assets/SVGforcountry/Nepal.svg" style="display : none" id="Nepal" >
<img src="../assets/SVGforcountry/Chad.svg" style="display : none" id="Chad" >
<!-- <img src="../assets/SVGforcountry/car" style="display : none" id="CAR" > -->
<img src="../assets/SVGforcountry/Macao.svg" style="display : none" id="Macao" >
<img src="../assets/SVGforcountry/Syria.svg" style="display : none" id="Syria" >
<img src="../assets/SVGforcountry/Eritrea.svg" style="display : none" id="Eritrea" >
<!-- <img src="../assets/SVGforcountry/saintma" style="display : none" id="SaintMartin" > -->
<img src="../assets/SVGforcountry/Mongolia.svg" style="display : none" id="Mongolia" >
<img src="../assets/SVGforcountry/Malawi.svg" style="display : none" id="Malawi" >
<img src="../assets/SVGforcountry/South sudan.svg" style="display : none" id="SouthSudan" >
<img src="../assets/SVGforcountry/Zimbabwe.svg" style="display : none" id="Zimbabwe" >
<img src="../assets/SVGforcountry/Angola.svg" style="display : none" id="Angola" >
<img src="../assets/SVGforcountry/Antigua and Barbuda.svg" style="display : none" id="AntiguaandBarbuda" >
<img src="../assets/SVGforcountry/Timor-Leste.svg" style="display : none" id="Timor-Leste" >
<img src="../assets/SVGforcountry/Botswana.svg" style="display : none" id="Botswana" >
<img src="../assets/SVGforcountry/Grenada.svg" style="display : none" id="Grenada" >
<img src="../assets/SVGforcountry/Laos.svg" style="display : none" id="Laos" >
<img src="../assets/SVGforcountry/Belize.svg" style="display : none" id="Belize" >
<img src="../assets/SVGforcountry/Fiji.svg" style="display : none" id="Fiji" >
<img src="../assets/SVGforcountry/New caledonia.svg" style="display : none" id="NewCaledonia" >
<img src="../assets/SVGforcountry/Curacao.svg" style="display : none" id="Curaçao" >
<img src="../assets/SVGforcountry/Dominica.svg" style="display : none" id="Dominica" >
<img src="../assets/SVGforcountry/Namibia.svg" style="display : none" id="Namibia" >
<img src="../assets/SVGforcountry/Saint Kitts and Nevis.svg" style="display : none" id="SaintKittsandNevis" >
<img src="../assets/SVGforcountry/Saint Lucia.svg" style="display : none" id="SaintLucia" >
<img src="../assets/SVGforcountry/St Vincent and the Grenadines.svg" style="display : none" id="St.VincentGrenadines" >
<img src="../assets/SVGforcountry/Nicaragua.svg" style="display : none" id="Nicaragua" >
<img src="../assets/SVGforcountry/Falkland Islands.svg" style="display : none" id="FalklandIslands" >
<img src="../assets/SVGforcountry/Turks and Caicos.svg" style="display : none" id="TurksandCaicos" >
<img src="../assets/SVGforcountry/Burundi.svg" style="display : none" id="Burundi" >
<img src="../assets/SVGforcountry/Montserrat.svg" style="display : none" id="Montserrat" >
<img src="../assets/SVGforcountry/Greenland.svg" style="display : none" id="Greenland" >
<img src="../assets/SVGforcountry/Seychelles.svg" style="display : none" id="Seychelles" >
<img src="../assets/SVGforcountry/Gambia.svg" style="display : none" id="Gambia" >
<img src="../assets/SVGforcountry/Suriname.svg" style="display : none" id="Suriname" >
<img src="../assets/SVGforcountry/Vatican city.svg" style="display : none" id="VaticanCity" >
<!-- <img src="../assets/SVGforcountry/msza" style="display : none" id="MSZaandam" > -->
<img src="../assets/SVGforcountry/Mauritius.svg" style="display : none" id="Mauritania" >
<img src="../assets/SVGforcountry/Papua new guinea.svg" style="display : none" id="PapuaNewGuinea" >
<img src="../assets/SVGforcountry/Sao Tome and Principe.svg" style="display : none" id="SaoTomeandPrincipe" >
<img src="../assets/SVGforcountry/Bhutan.svg" style="display : none" id="Bhutan" >
<img src="../assets/SVGforcountry/British Virgin Islands.svg" style="display : none" id="BritishVirginIslands" >
<!-- <img src="../assets/SVGforcountry/sint" style="display : none" id="St.Barth" > -->
<img src="../assets/SVGforcountry/Western Sahara.svg" style="display : none" id="WesternSahara" >
<img src="../assets/SVGforcountry/Netherlands.svg" style="display : none" id="CaribbeanNetherlands" >
<img src="../assets/SVGforcountry/Anguilla.svg" style="display : none" id="Anguilla" >
<!-- <img src="../assets/SVGforcountry/saint style="display : none" id="SaintPierreMiquelon" > -->
<img src="../assets/SVGforcountry/Yemen.svg" style="display : none" id="Yemen" >

                  <div :class="darkmode? 'mapnameDark' : 'mapname'">{{value}}</div>



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

    document.getElementById(newVal).style.display = 'flex';
    document.getElementById(oldVal).style.display = 'none'

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
