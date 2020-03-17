<template>
  <div id="app" class="container">
    <router-view></router-view>
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/global" md-label="Global" md-icon="search"></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/comingsoon"
          md-label="Coming Soon"
          md-icon="favorite"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>


<style>
#app {
  font-family: "Open Sans", sans-serif;
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
h1 {
  padding: 10px;
}
.countryName {
  font-size: 20px;
  color: black;
}
.cases {
  color: burlywood;
}
.content {
  margin: 5px 10px;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.content.all{
  background: #2C97C8;
  font-weight: bold;
}
.row {
  margin-bottom: 80px;
}
.total-recover {
  color: green;
}
.new_case{
  color: orange;
}
.active_case{
  color: crimson;
}
.serious{
  color: blue;
}
.death{
  color: red;
}
.new_dead{
  color: brown;
}
.total_per{
  color: black;
}
#search {
  margin: 40px 10px;
  width: 95%;
}
</style>