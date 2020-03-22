<template>
  <div class="map">
      <img src="../assets/coming-soon.png" alt="coming soon" style="margin-top: 150px;">
  </div>
</template>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
 <script>
 /* global google */
export default {
  data() {
    return {};
  },
  mounted() {
    google.charts.load("current", {
      packages: ["geochart"],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
    });
    google.charts.setOnLoadCallback(this.drawRegionsMap);
  },
  methods : {
    drawRegionsMap: function() {
      var data = google.visualization.arrayToDataTable([
        ["Country", "Case"],
        ["Germany", 1000],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
        ["Myanmar", 4000]
      ]);
      console.log(data);

      var options = {
        colorAxis: { colors: ["red", "brown", "black"] }
      };

      var chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
      );
      console.log(chart);
      chart.draw(data, options);
    }
  }
};
</script>