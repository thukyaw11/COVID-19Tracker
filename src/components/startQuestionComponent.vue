<template>
  <div class="desktopcontainer">

        <div class="flexbody">
          <div class="flexbodycontainer">
            <div class="flexbodyheader" :style="darkmode? 'color: #f5f5f5': 'color: #212121'">
              {{$t('screeningDesk.screeningHeaderOne')}}
              <br />{{$t('screeningDesk.screeningHeaderTwo')}}
            </div>
            <div class="flexbodycontent">
              <hr
                style="width:100px; margin-left:0px;"
                :style="darkmode? 'background : #f5f5f5; border:3px solid #f5f5f5;' : 'background : #212121;  border:3px solid #000;'"
              />
              <br />
              <div style="width:100%; line-height:25px; font-size:16px;" :style="darkmode? 'color: #f5f5f5': 'color: #212121'">
                {{$t('screening.screeningContent')}}
              </div>

              <br />
              <div
                type
                class="button"
                style="cursor : pointer"
                @click="routerChange"
              >{{$t('screening.screeningButton')}}</div>
            </div>
          </div>
        </div>
        <div class="fleximage">
          <img src="../assets/sick.png" width="500" height="500" />
        </div>
      
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  methods: {
    routerChange() {
      this.$router.push("/question");
    },
    changeDark(value) {
      this.darkmode = value;
    }
  },
  created() {
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  }
};
</script>
<style scoped>

/*updated latest desktop ui*/


.flexbody {
  display: flex;
  flex: 3;
  height:1000px;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  
}
.flexbodycontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height:1000px;
  padding-left: 10%;
}
.flexbodyheader {
  
  align-items:center;
  display: flex;
  flex: 1;
  width:100%;
  font-size: 60px;
  line-height: 100px;
  font-weight: bold;
}
.flexbodycontent {

  flex-direction: column;
  display: flex;
  flex: 1;
  justify-content: center;
}
.fleximage {
  display: flex;
  flex: 2;
  height:1000px;
  align-items: center;
  justify-content: center;
}
.button {
  color: #fff;
  margin-top: 35px;
  display: flex;
  padding: auto;
  width: 300px;
  height: 90px;
  background-color: #549cd6;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
</style>