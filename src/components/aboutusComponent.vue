<template>
  <div class="desktopcontainer">
    <div class="desbody">
      <div class="mainflex">
        <div class="flexbody">
          <div class="flexbodycontainer">
            <div class="flexbodyheader">
              Coronavirus Disease
              <br />Situation Dashboard
            </div>
            <div class="flexbodycontent">
              <hr style="width:100px; margin-left:0px; border:3px solid #000; background : black" />
              <br />
              <div style="width:90%; color:#757575;">
                We hope to bring an information source that rolls updates on COVID-19, especially for cases in Myanmar, to our citizens. This website is built by
                the University of Information Technology Students’ Union. APIs below are still in development stage and later will be published for further
                development purposes.
                <br />
                <br />Good Hope, currently operating Online Knowledge Sharing Platform and Research Projects, is a student organization based in Yangon
                University of Economics. Here, we are collaborating with UITSU to create more effective features and to help the community to be
                aware of COVID-19.
              </div>

              <br />
              <div class="desapicontainer">
                <div class="desapi">
                  Current API
                  <br />https://rapidapi.com/
                </div>
                <div class="desapi" style="margin-left:10px;">
                  Current API
                  <br />Contact via UIT-SU
                </div>
                <div class="desapi" style=" margin-left:10px;">
                  Version
                  <br />1.1 beta
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
      <div class="desfooter">
        <div class="footerLeft">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-instagram"></i>
          <div style="margin-left:50px;">+959 253095270</div>
        </div>
        <div class="footerRight">Copyright 2020 Covid 19 | Myanamr</div>
      </div>
    </div>
  </div>
</template>

<style scoped>


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for desktop version css */
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 3px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6d6d6;
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  display: block;
}

@media only screen and (min-width: 1100px) {

  .desktopcontainer {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    font-size: 18px;
    margin-top: 100px;
  }

  .deslink {
    display: flex;
    flex: 1;
    height: 120px;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
  }

  /*updated latest desktop ui*/
  .mainflex {
    display: flex;
    flex: 1;
  }
  .desfooter {
    width: 98%;
    height: 80px;
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
  .flexbody {
    display: flex;
    flex: 4;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .flexbodycontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 715px;
    padding-left: 10%;
  }
  .flexbodyheader {
    display: flex;
    flex: 1;
    font-size: 70px;
    font-weight: bold;
    line-height: 100px;
  }
  .flexbodycontent {
    flex-direction: column;
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  .fleximage {
    display: flex;
    flex: 2;

    align-items: flex-start;
    justify-content: center;
    margin-top: 120px;
  }

  /*updated end*/
  .desapicontainer {
    display: flex;
    flex: 1;
    flex-direction: row;
  }
  .desapi {
    display: flex;
    width: 300px;
    height: 100px;
    background-color: #f5f5f5;
    border-radius: 15px;
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
    z-index: 0.5;
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }
  .desimage1 img {
    border: 3px solid #fbbf3c;
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }
  .desimage2 img {
    border-radius: 50%;
    border: 3px solid #fbbf3c;

    height: 120px;
    width: 120px;
  }
  .desimage2 {
    display: flex;
    flex: 1;
    margin-left: -10px;
    align-items: center;
    justify-content: flex-start;
    z-index: -1;
    height: 120px;
    width: 120px;
  }

  .deslink ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .deslink li {
    float: left;
  }

  .deslink li a {
    width: 98px;
    height: 100%;
    display: block;
    color: #212121;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .deslink li a:hover:not(.active) {
    border-bottom: 3px solid #eee;
  }

  .deslink .active {
    border-bottom: 3px solid #3f51b5;
  }
}
</style>

