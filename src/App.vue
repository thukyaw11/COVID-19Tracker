<template>
  <div id="app" class="container">
    <router-view></router-view>
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route class="md-primary" md-type="shift">
        <md-bottom-bar-item to="/" exact md-label="Dashboard" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/global" md-label="Global" md-icon="language"></md-bottom-bar-item>
        <md-bottom-bar-item to="/map" md-label="Map" md-icon="map"></md-bottom-bar-item>
        <md-bottom-bar-item to="/myanmar" md-label="Myanmar" md-icon="place"></md-bottom-bar-item>
        <md-bottom-bar-item to="/wiki" md-label="Wiki" md-icon="book"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>


<style>
body{
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
#spinner{
  text-align: center;
  padding-top: 70px;
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
}
</style>