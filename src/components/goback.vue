<template>
  <div class="headercontainer">
    <div class="menubutton" style="font-size:24px;cursor:pointer" @click="$router.go(-1)">
      <i class="material-icons">arrow_back</i>
    </div>
  </div>
</template>

<style scoped>
.headercontainer {
  position: fixed;

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
}

.menubutton {
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 35px;
}
</style>

