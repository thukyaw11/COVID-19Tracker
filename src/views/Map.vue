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
    created() {
    var scripts = [
      "countrymap.js",
      "mapdata.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  }
  }
</script>

<style scoped>
.iframe-container{
  margin-top: 90px;
  width: 100%;
  height: 100px;
  z-index: 1;
}
.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
   overflow: hidden;
}

</style>  