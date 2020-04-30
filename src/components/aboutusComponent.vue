<template>
  <div class="desktopcontainer">
    <div class="classdesbody">
      <div class="flexbody">
        <div class="flexbodycontainer">
          <div class="flexbodyheader" :style="darkmode? 'color : #f5f5f5' : 'color : #212121' ">
            {{$t('aboutusPage.headingOne')}}
            <br />
            {{$t('aboutusPage.headingTwo')}}
          </div>
          <div class="flexbodycontent">
            <hr
              style="width:100px; margin-left:0px;"
              :style="darkmode? 'background : #f5f5f5; border:3px solid #f5f5f5;' : 'background : #212121;  border:3px solid #000;'"
            />
            <br />
            <div
              style="width:100%; line-height:25px; font-size:16px; "
              :style="darkmode? 'color : #f5f5f5' : 'color : #757575' "
            >
              {{$t('goodHope.para1')}}
              <br />
              <br />
              {{$t('goodHope.para2')}}
            </div>

            <br />
            <div class="desapicontainer">
              <div :class="darkmode? 'desapiDark' : 'desapi'">
                Current API
                <br />https://rapidapi.com/
              </div>
              <div :class="darkmode? 'desapiDark' : 'desapi'" style="margin-left:10px;">
                Current API
                <br />Contact via UIT-SU
              </div>
              <div :class="darkmode? 'desapiDark' : 'desapi'" style=" margin-left:10px;">
                Version
                <br />2.0 beta
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fleximage">
        <div class="desimage1">
          <img src="../assets/uitsu.jpg" width="120" height="120" />
        </div>
        <div class="desimage2">
          <img src="../assets/goodhope.jpg" width="120" height="120" />
        </div>
      </div>
    </div>
    <div :class="darkmode? 'desaboutusfooterDark' : 'desaboutusfooter'">
      <div class="footerLeft">
        <a href="https://www.facebook.com/UITStudentsUnion/">
          <i class="fab fa-facebook" :style="darkmode? 'color : #757575' : 'color : #212121' "></i>
        </a>

        <a href="https://www.facebook.com/UITStudentsUnion/">
          <i
            class="fab fa-facebook-messenger"
            :style="darkmode? 'color : #757575' : 'color : #212121' "
          ></i>
        </a>
        <a href="https://www.instagram.com/uitstudentsunion/?igshid=qkud3opi21tn">
          <i class="fab fa-instagram" :style="darkmode? 'color : #757575' : 'color : #212121' "></i>
        </a>
        <div
          style="margin-left:50px;"
          :style="darkmode? 'color : #757575' : 'color : #212121' "
        >+959 253095270</div>
      </div>
      <div
        class="footerRight"
        :style="darkmode? 'color : #757575' : 'color : #212121' "
      >Copyright 2020 Covid 19 | Myanamr</div>
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

  created() {
    this.$darkModeBus.$on("dark-mode", this.changeDark);
  },
  methods: {
    changeDark(value) {
      this.darkmode = value;
    }
  }
};
</script>
<style scoped>
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for desktop version css */

/*updated latest desktop ui*/

.classdesbody
{
  display:flex;
  flex:1;
  flex-direction:row;
}

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
  justify-content:center;
}
.fleximage {
  padding-top:200px;
  display: flex;
  flex: 1;
  height:1000px;
  align-items: flex-start;
  justify-content: center;
}

.desaboutusfooter {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 80px;
  z-index:10;
  display: flex;
  justify-content: center;
  color: #212121;
  border-top: 1px solid #eee;
}
.desaboutusfooterDark {
  position: fixed;
  bottom: 0;
  background-color: #121212;
  width: 100%;
  height: 80px;
   z-index:10;
  display: flex;
  justify-content: center;
  color: #212121;
  border-top: 1px solid #eee;
}
.footerLeft {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
}
.footerLeft i {
  margin-left: 25px;
  font-size: 28px;
}
.footerRight {
  display: flex;
  flex: 1;
  margin-right: 25px;
  align-items: center;
  justify-content: flex-end;
}
/*updated end*/
.desapicontainer {
  display: flex;
  flex-direction: row;
}
.desapi {
  font-size: 14px;
  color: #212121;
  display: flex;
  width: 200px;
  height: 90px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding-left: 30px;
  align-items: center;
  justify-content: flex-start;
}
.desapiDark {
  font-size: 14px;
  color: #f5f5f5;
  display: flex;
  width: 200px;
  height: 90px;
  background-color: #212121;
  border-radius: 10px;
  padding-left: 30px;
  align-items: center;
  justify-content: flex-start;
}
.desimage1 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-right: -10px;
  z-index: 1;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.desimage1 img {
  border: 3px solid #fbbf3c;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.desimage2 img {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.desimage2 {
  display: flex;
  flex: 1;
  margin-left: -10px;
  align-items: center;
  justify-content: flex-start;
  z-index: 0.5;
  height: 100px;
  width: 100px;
}
</style>

