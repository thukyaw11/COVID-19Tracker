<template>
  <div class="map">
    <vue-google-maps :center="{lat: 1.38, lng: 103.8}" :zoom="12" style="width: 100%; height: 500px"/>
  </div>
</template>

 <script>
  import VueGoogleMaps from 'vue2-google-maps';

export default {
  components : {
    VueGoogleMaps
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      //AIzaSyBxxA4MD_m1FcF6F4QaJ1KSUn4sHK7Jwxo
    };
  },
  mounted(){
    this.$root.$data.title = "Map";
  }
};
</script>

