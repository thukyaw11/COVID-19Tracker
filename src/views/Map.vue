<template>
<!--<div class="iframe-container">
  <iframe src="https://datawrapper.dwcdn.net/Z16wj/8/" allowfullscreen></iframe>
</div>-->

<div class="spinner">
    <md-progress-spinner class="md-accent" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
  <h3 style="color : grey; text-align:center;">Coming soon ...</h3>
</div>

</template>

<script>
  export default
  {
    mounted() {
    // var scripts = [
    //   "countrymap.js",
    //   "mapdata.js"
    // ]; 
    // scripts.forEach(script => {
    //   let tag = document.createElement("script");
    //   tag.setAttribute("src", script);
    //   document.head.appendChild(tag);
    // });

    this.$root.$data.title = "Map";
  }
  }
</script>

