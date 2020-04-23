<template>
  <div :class="darkmode? 'headercontainerDark' : 'headercontainer'">
    <div class="menubutton" style="font-size:24px;cursor:pointer" @click="$router.go(-1)">
      <i class="material-icons">arrow_back</i>
    </div>
  </div>
</template>

<script>
export default {
  props : ['darkmode']
}
</script>

<style scoped>
.headercontainer {
  top: 0;
  z-index: 20;
  position: fixed;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #eee;
}
.headercontainerDark {
  top: 0;
  z-index: 20;
  position: fixed;
  background-color: #121212;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #212121;
}


.menubutton {
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 35px;
}
</style>

