<template>
<!--<div class="iframe-container">
  <iframe src="https://datawrapper.dwcdn.net/Z16wj/8/" allowfullscreen></iframe>
</div>-->

<div>
  <div id="map"></div>
</div>

</template>

<script>
  export default
  {
    mounted() {
    var scripts = [
      "countrymap.js",
      "mapdata.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });

    this.$root.$data.title = "Map";
  }
  }
</script>

<style scoped>
#map{
  margin: 150px auto;
}

</style>  