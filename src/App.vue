<template>
  <div id="app">
    <div id="myNav" class="overlay">
      <a
        class="closebtn"
        @click="closeNav()"
        style="color: white; text-decoration: none; margin-top:20px;"
      >&times;</a>
      <div class="overlay-content">
        <router-link
          to="/"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Global</router-link>
        <router-link
          to="/local"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Local</router-link>
        <router-link
          to="/map"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Map</router-link>
        <router-link
          to="/countrycases"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Countries By Cases</router-link>
        <router-link
          to="/news"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >News</router-link>
        <router-link
          to="/contants"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Contants</router-link>
        <router-link
          to="/aboutus"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >About Us </router-link>
      </div>
    </div>

    <div class="headercontainer">
      <div class="menubutton" style="font-size:24px;cursor:pointer" @click="openNav()">
        <i class="material-icons">sort</i>
      </div>
      <Header v-bind:title="this.$root.$data.title" />

      <div class="space">
        <router-link to="/contants" style="text-decoration: none;">
        <div class="Emergencybutton">
          <i class="material-icons" id="Emergencyicon">add_ic_call</i>
        </div>
        </router-link>

      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  },
  methods: {
    openNav: function() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav: function() {
      document.getElementById("myNav").style.width = "0%";
    }
  }
};
</script>


<style>
.spinner{
  text-align: center;
  margin-top: 150px;
}
#app {
  font-family: "Poppins", sans-serif;
  color: #212121;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
#myNav {
  color: white;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  background-color: #3f51b5;
  color: white;
  opacity: 1;
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  line-height: 40px;
  position: relative;
  top: 10%;
  width: 100%;
  margin-left: 35px;
  margin-top: 40px;
  color: white;
  z-index: inherit;
}

.overlay .item-menu {
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  display: block;
  transition: 0.3s;
  color: white;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  padding: 8px;
}

.flex-container {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
}
.headercontainer {
  top: 0;
  display: flex;
  flex-direction: row;
  z-index: 9000;
  width:100%;
  height:70px;
  background-color: #fff;
  position: fixed;
  border-bottom: 1px solid #eee;
  
}
.menubutton {
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 20px;
}

.heading {
  display: flex;
  align-items: center;
  justify-content: center;
}
.space {
  display: flex;
  margin-right: 20px;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
}
.Emergencybutton {
  display: flex;
  background-color: red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
#Emergencyicon {
  display: flex;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
}

.toggle {
  flex-direction: row;
  display: flex;
  flex: 1;
  background-color: #f5f5f5;
  height: 90px;
  position: fixed;
  width: 100%;
  bottom: 0px;
}
.global {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.globalheading {
  margin-top: 10px;
  align-items: flex-end;
  justify-content: center;
}

.local {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container
{
  margin: 80px auto;
  width:95%;
  margin-bottom: 100px;
  align-items: center;
  height: auto;
}
.ConfirmedCaseContainer
{
  display:flex;
  flex-direction: column;
  height: 120px;
  margin-left: 20px;
}
.RecoverCase
{
  display:flex;
  height: 120px;
  border-radius: 15px;
  margin-top: 5px;
  background-color: #E8F5E9;


}
.DeathCase
{
  background-color: #FFEBEE;
  display:flex;
  height: 120px;
  border-radius: 15px;
  margin-top: 5px;

}
.caseheading {
  font-size: 16px;
  display: flex;
  flex: 1;
  align-items: flex-end;
}
.number {
  display: flex;
  flex: 2;
  align-items: center;
}
.activedots {
  margin-top: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: #3f51b5;
}
.lcalactivedots {
  margin-top: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: #eee;
}
/* body{
  background: white;
}
#app {
  font-family: "Open Sans", sans-serif;
}
#worldTotal{
  text-align: center;
}
#toolbar {
  position: fixed;
}
.phone-viewport {
  position: fixed;
  width: 100%;
  overflow: hidden;
  bottom: 0;
}
.total{
  color: blue;
}
.recover{
  color: green;
}
.death{
  color: red;
}
.countryName {
  font-size: 20px;
  color: black;
}
.cases {
  color: black;
}
.content {
  margin: 5px 10px;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.total-recover {
  color: green;
}
.new_case {
  color: orange;
}
.active_case {
  color: crimson;
}
.serious {
  color: blue;
}
.death {
  color: red;
}
.new_dead {
  color: brown;
}
.total_per {
  color: black;
}
#search {
  margin: 40px 10px;
  width: 95%;
}
#worldTotal{
  padding-top: 30px;
}
.newCase{
  color: blue;
}

#mmwrapper{
  padding-top: 60px;
  text-align: center;
}
.loading_spinner{
  text-align: center;
  padding-top: 100px;
}
.md-card.md-table{
  height: 1000px;
  background: rebeccapurple;
}
.md-content{
  height: 1000px;
}
.wiki{
  margin-bottom: 80px;
  padding: 10px;
}
.wikiHeader{
  line-height: 40px;
}
p{
  font-size: 20px;
  line-height: 28px;
} */
</style>
