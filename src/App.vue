<template>
  <div id="app">
    <div id="myNav" class="overlay">
      <a
        class="closebtn"
        @click="closeNav()"
        style="color: white; text-decoration: none; margin-top:20px;"
      >&times;</a>
      <div class="overlay-content">
        <router-link
          to="/"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Global</router-link>
        <router-link
          to="/local"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Local</router-link>
        <router-link
          to="/map"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Map</router-link>
        <router-link
          to="/countrycases"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >Countries By Cases</router-link>
        <router-link
          to="/news"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >News</router-link>
        <router-link
          to="/aboutus"
          style="color: white; text-decoration: none"
          class="item-menu"
          @click.native="closeNav()"
        >About Us</router-link>
        <router-link
          to="/contants"
          style="text-decoration: none; color:#f44336; font-weight:bold;"
          class="item-menu"
          @click.native="closeNav()"
        >
          <i class="material-icons" style="color:#f44336; font-size: 21px">add_ic_call</i>
          Emergency
        </router-link>
      </div>
    </div>

    <div class="headercontainer">
      <div class="menubutton" style="font-size:24px;cursor:pointer" @click="openNav()">
        <i class="material-icons">sort</i>
      </div>
      <Header v-bind:title="this.$root.$data.title" />

      <div class="space">
        <router-link to="/contants" style="text-decoration: none;">
          <div class="Emergencybutton">
            <i class="material-icons" id="Emergencyicon">add_ic_call</i>
          </div>
        </router-link>
      </div>
    </div>

    <router-view></router-view>

    <!---@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------->
    <!---for desktop view------>

    <div class="desktopcontainer">
      <div class="desheading">
        <div class="desheadingname">Global Dashboard</div>
        <div class="deslink">
          <ul>
            <li>
              <a class="active" href="#home">Global</a>
            </li>
            <li>
              <a href="#news">Local</a>
            </li>
            <li>
              <a href="#contact">About Us</a>
            </li>
            <li>
              <a href="#about">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="desbody">
        <div class="mainflex1">
          <div class="descountrybycases">
            
                <br />
                <div
                  class="descountrybycasesheading"
                  style="color:#3F51B5;"
                >Countries, areas or territories with cases</div>
                <br />
                <div class="descountrybycasesbody">
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>

                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                  <div class="descasescontainer">
                    <div class="descasesflex1" style="margin-left:20px;">United States of America</div>
                    <div class="descasesflex2">140640 cases</div>
                  </div>
                </div>
              
          </div>
        </div>
        <div class="mainflex2">
          <!-- <div class="desnumber">
            <div class="descomfirmedcase">
              <div class="numbercontainer1">
                <div
                  style="display:flex; align-items:flex-start; justify-content:flex-start;"
                >Confirmed Cases</div>
                <div style="font-size:36px; color:#757575;">754,948</div>
              </div>
            </div>
            <div class="desrecover">
              <div class="numbercontainer2">
                <div>Recover</div>
                <div style="font-size:36px; color:#4CAF50;">178,468</div>
              </div>
            </div>
            <div class="desdeath">
              <div class="numbercontainer3">
                <div>Deaths</div>
                <div style="font-size:36px; color:#F44336;">36,571</div>
              </div>
            </div>
          </div>
          <div class="desmap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              style="enable-background:new 0 0 100 100; width:560.09px; height:563px;"
              xml:space="preserve"
              fill="#e0e0e0"
            >
              <path
                d="M92.3,39.6L92.3,39.6L92.3,39.6C92.3,39.6,92.3,39.6,92.3,39.6C92.3,39.6,92.3,39.6,92.3,39.6z M60.5,93.1  C38.9,98.4,16,86.6,8.3,64.9c-2.8-7.9-3.4-16-1.6-24.2C6.8,40.5,6.9,40.2,7,40c0,0.2,0,0.5,0.1,0.7c0,0.1,0.1,0.3,0.2,0.4  c0-0.2,0.1-0.3,0.1-0.5c0-0.6,0-1.2,0.1-1.9c0.6,0.5,0.2,1.2,0.4,1.7c0.3,0.8,0.3,1.6,0.3,2.5c-0.1,1.3,1.1,2.2,2,2.3  c1.7,0.2,2.7,1.5,4.2,2c0.7,0.2,1.1,0.9,1.2,1.2c0.2,1.3,1.2,1.7,2,2.2c0.2,0.1,0.4,0.3,0.6,0c0.7-1.4,0.8-0.4,1.1,0.2  c0.7,1.5,0.1,2.7-0.7,3.9c-0.6,0.8-1.3,1.6-0.6,2.7c0.1,0.1,0,0.4-0.1,0.5c-0.5,0.8-0.2,1.4,0.3,2.1c0.7,1,1.3,2,1.8,3.1  c0.7,1.4,1.3,2.7,2.9,3.4c1,0.4,1.6,1.3,1.7,2.5c0.3,3.4,0.8,6.8,1.3,10.1c0.3,2,1.9,3.4,2.6,5.2c0.3,0.8,0.8,1.5,1.4,2.2  c1.1,1.3,2.7,1.4,4.1,2.1c0.1,0,0.3,0,0.4,0c-0.1-0.1-0.3-0.2-0.4-0.3c-0.9-0.8-2.8-1-1.6-2.9c0-0.1-0.1-0.3-0.1-0.3  c-1.4-0.3-0.7-1.3-0.6-2c0-0.4,0.4-0.7-0.2-0.8c-0.1,0-0.2-0.2-0.2-0.3c1.1,0.3,0.7-1.3,1.6-1.3c1.3,0,1.8-0.5,1.1-1.8  c-0.2-0.3-0.5-0.7,0.3-0.5c0.8,0.2,1.2-0.1,1.4-0.8c0.2-0.7,0.5-1.4,1.1-2c0.5-0.6,0.8-1.3,0.6-2.2c-0.3-1.5,1.2-1.8,2.1-1.9  c1.9-0.2,2-1.5,2.4-2.8c0.3-1,0.3-2,0.2-3.1c-0.1-1.1,0.8-1.8,1.4-2.6c0.8-1,1.3-2.3,0.5-3.2c-0.8-0.9-1.8-1.9-3.2-2  c-2-0.1-3.5-1.4-5.2-2.1c-0.6-0.2-0.6-1.2-0.8-1.8c-0.5-1.4-1.4-2-2.8-2.2c-1.7-0.2-2.4-1.5-3.1-2.7c-0.5-0.9-1.2-0.5-1.6-0.4  c-1,0.3-1.8,0-2.5-0.4c-1.7-0.9-3.1-0.6-4.3,1.2c-0.2,0.3-0.5,0.8-1,0.3c-0.3-0.3-0.7-0.3-1.2-0.1c-0.9,0.4-1.7-0.3-1.6-1.3  c0-0.4,0.1-0.8,0.2-1.2c0.3-1.7,0.2-1.9-1.5-1.7c-0.7,0.1-0.8-0.1-0.5-0.7c0.3-0.6,0.6-1.2,0.7-1.9c0.1-0.4,0.7-0.9,0-1.2  c-0.5-0.2-1.4,0-1.5,0.7c-0.2,1.2-0.9,1.5-1.9,1.3c-1.1-0.3-1-1.4-0.8-2.2c0.2-1.6,0.3-3.4,2-4.4c0.4-0.3,0.8-0.4,1.3-0.3  c0.5,0.1,0.9,0.1,1.4-0.4c0.7-0.7,1.5-0.2,2.3,0c0.6,0.2,0.3,0.8,0.4,1.2c0.1,0.6,0.1,1.5,0.7,1.4c0.7,0,0.8-0.9,0.6-1.6  c-0.4-1.5,0.1-2.8,1.5-3.5c1.5-0.8,2.2-2.1,3.1-3.4c0.6-1,1.7-1.5,2.7-2.2c1-0.6,1.8-1.7,3.1-2.2c0.2-0.1,0.4-0.1,0.5-0.2  c-0.1,0.2-0.1,0.3-0.2,0.5c-0.1,0.2-0.2,0.3,0,0.4c0.1,0,0.3,0,0.4-0.1c0.3-0.4,0.8-0.5,1.3-0.6c0.3-0.1,0.8-0.3,0.9-0.5  c0-0.4-0.5-0.2-0.7-0.4c-0.4-0.3-0.4-0.6-0.2-0.9c0.2-0.5,0.9-1-0.3-1c0,0-0.1-0.1-0.1-0.2c0.1,0,0.2-0.1,0.3-0.1  c1.4-0.3,2.9,0.2,4.2-0.8c0.1,0,0.2,0.1,0.3,0.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.3,0.7-1.6,1-1.2,1.8c0.2,0.4,1.4-0.3,2.2,0.3  c0.3,0.2,0.8,0,0.6-0.3c-0.3-0.5,0.7-1.3-0.2-1.3c-0.9-0.1-0.6-0.4-0.4-0.8c0.6-1,0.8-1.8-0.5-2.3c-0.7-0.3-0.3-1-0.5-1.5  c-0.2-0.8-0.3-1.4-1.3-0.6c-0.4,0.3-1.5,1.3-1.2-0.5c0.1-0.4-0.6-0.8-0.9-0.8c-0.8,0-1.8-0.5-2.2,0.5c-0.4,0.8-1.4,1.3-1.4,2.4  c0,0.3-0.5,0.6-0.9,0.8c-0.8,0.3-1.4,0.7-1.5,1.6c-0.1,0.5-0.5,0.9-1,0.7c-0.6-0.3-0.1-0.8,0.1-1.1c0.4-0.5,0.4-0.9-0.4-0.8  c-0.8,0.1-1.3-0.7-2.2-0.8c-0.3,0-0.3-0.8,0.1-1.1c1.3-1.3,3-1.7,4.5-2.7c0.4-0.3,0.5,0.9,0.8,0.3c0.3-0.6,2.2,0.4,1.3-1.3  c0.5-0.2,0.9-0.3,1.4-0.5c0.7-0.3,0.9-1.2,1.8-1.4c0.8-0.1,1.7-0.2,1.8,0.5c0.1,0.7-0.9,0.9-1.5,1.2c-0.3,0.1-0.6,0-0.9,0.1  c-0.2,0.1-0.5,0.3-0.5,0.4c0,0.3,0.4,0.2,0.6,0.2c0.6-0.1,1.1-0.1,1.5,0.5c0.3,0.4,1.4,0.6,1.4,0.4c0.1-0.9,2.4-0.2,1.2-1.8  c0-0.1,0-0.3,0-0.3c0.2-0.2,0.4-0.1,0.6,0.1c0.7,0.8,1.3,0.1,1.6-0.3c0.4-0.6-0.7-0.6-0.7-0.8c0-1.3-1.2-1.1-1.8-1.5  c-0.6-0.4-1.1-0.4-1.7-0.3c0.2,0.1,0.2,0.4,0,0.3c-0.8-0.5-1.4-0.1-2.1,0c-0.7,0.2-1.3,0.2-1.9-0.2c-0.4-0.3-0.8-0.2-1.2,0  c-0.1,0-0.2,0.1-0.2,0.2c0,0,0.1,0.1,0.2,0.1c0.3,0,0.6-0.5,0.9-0.1c-0.4,0.3-0.8,0.5-1.3,0.6l0,0c0,0,0,0,0,0  c-1.2-0.2-1.6,0.2-1.5,1.2c0,0.2-0.1,0.4-0.2,0.6c-0.5-0.4-1.5,0.3-1.5-0.1c0-0.6-0.3-1.5,0.5-2c9.6-5.7,19.8-7.8,30.8-5.9  c7.3,1.3,13.8,4.2,19.7,8.7c0.3,0.2,0.5,0.5,0.7,0.7c-0.4,0.2-0.6-0.2-0.9-0.3c-0.9-0.4-1.7-1.1-2.7-1.3c-1.3-0.2-2.6-0.4-3.6,0.7  c-0.7,0.7-1.5,1.2-2.5,1.4c-0.8,0.2-1,0.6-0.6,1.4c0.3,0.8,0.7,1.3,1.5,0.9c0.7-0.4,1-0.1,1.4,0.4c0.5,0.6,0.3,0.8-0.1,1.2  c-0.1,0.1,0.1,0.5-0.3,0.4C69.9,20.5,70,20.3,70,20c0-0.3,0.4-0.8-0.2-0.8c-0.5,0-0.9,0.5-0.7,1c0.4,0.8-0.1,1-0.7,1  c-1,0.1-1.4,1.3-2.3,1.4c-0.5,1.1-1.7,0.5-2.5,1c-0.2,0.1-0.6,0-0.7,0.3c0,0.1,0.3,0.3,0.5,0.4c0.4,0.2,0.7,0.5,1,0.8  c0.4,0.5,0.3,1,0.1,1.5c-0.2,0.6-0.7,0.3-1.1,0.3c-0.1,0-0.2,0-0.2,0c-2.6-0.3-3.4,0.5-3,3.1c0.1,0.5,0.1,1.2,1,1.1  c0.7,0,1,0.5,0.5,1.1c-1,1.2-2.1,2.4-2.6,4c-0.3,0.7-1.4,0.7-1.9,1.6c-0.7,1.6-2.5,2.7-1.8,4.9c0.3,0.9,0,1.8-0.3,2.8  c-0.3,0.9-0.3,2,0.6,2.8c1.5,1.2,2,3.2,3.7,4.2c0.7,0.4,1.2,0.5,2,0.4c1.9-0.2,3.7-0.8,5.5-0.9c1.1-0.1,2.3,1.1,3.5,1.6  c0.7,0.3,0,1.6-0.1,2.4c-0.1,0.7-0.1,1.2,0.4,1.7c1.5,1.6,1.7,3.6,2.1,5.6c0.2,0.9-0.8,1.5-1,2.4c-0.3,1.2-0.5,2.3,0.2,3.4  c0.7,1.1,1,2.3,0.8,3.6c-0.1,1.3,1,2,1.2,3.1c0.4,2.2,0.5,2.1,2.8,1.7c2.6-0.5,3.8-2.6,4.9-4.7c0.3-0.5,0.3-1,0.9-1.2  c0.6-0.3,0.9-1.1,0.7-1.7c-0.3-1.3,0.4-2.2,1.3-2.8c1.9-1.2,2.1-3,1.6-4.7c-0.9-3.3,0.7-5.6,2.6-7.8c1.5-1.7,2-3.6,2.3-5.6  c0.1-0.5,0-0.9-0.7-0.5c-0.3,0.2-0.6,0.3-1,0.4c-0.5,0.1-1.1,0.3-1.4-0.4c-0.4-0.9,0.5-0.7,0.8-0.8c1.8-1,3.7-2,4-4.4  c0.1-0.7,0-1.4-0.5-2c-0.3-0.4-0.5-0.9-0.3-1.4c2.2,2.4,1.9,5.6,2,8.4C95.1,69.6,80.8,88.1,60.5,93.1z M22,42.4  c-1.1-0.7-2-1.8-3.5-1.8c-0.4,0.1-0.9,0.2-1.3,0.6c-0.1,0.1-0.2,0.5,0.1,0.4c1.6-0.6,2.5,0.1,3.5,1.2c0.2,0.2,0.8,0.4,1.3,0.1  C22.1,42.7,22,42.4,22,42.4z M25,43.5c-0.4-0.6-1-0.7-1.7-0.8c-0.9-0.2-0.5,1.1-1.2,1c0.3,0.1,0.6,0.3,1,0.4  C23.7,43.8,24.4,43.7,25,43.5z M59.6,14.6c0-0.4-0.4-0.5-0.7-0.5c-0.8,0-1.6,0-2.4,0c-0.3,0-0.7-0.3-0.9,0.1  c0.4,0.2,0.1,0.9,0.7,1.1c0.3,0.1,0.7,0.1,1.1,0.2c0.5-0.1,1.1-0.3,1.6-0.4C59.3,14.9,59.6,14.9,59.6,14.6z M62.8,20  c0.6,0.3,1.6,0.4,0.5,1.4c-0.3,0.3,0,1-0.4,1.4c0.5,0.3,0.9-0.1,1.3-0.1c0.6,0,1.3-0.1,1.9-0.2c0-0.9-0.5-1.6-1.2-2.3  c-0.2-0.2-0.5-0.5-0.5-0.8c0.1-1-0.5-1.5-1.3-1.3C62.3,18.4,62.4,19.2,62.8,20z M61.9,19.8c-0.5,0.1-1.3,0.3-1.3,0.9  c0,0.4-0.6,1,0,1.2c0.4,0.1,1.2-0.1,1.5-0.4c0.4-0.4,0.5-1,0.7-1.5C62.5,19.9,62.2,19.8,61.9,19.8z M55.4,12.8  c0.4,0,0.8-0.3,1.2-0.5c0.2-0.1,0.4-0.2,0.3-0.4c-1.1-1.2,0.4-0.5,0.6-0.8c0.2-0.2,0.8-0.3,0.9-0.5c0.3-1.3,1.3-1.5,2.5-1.5  C60.8,9.1,61,9,61.1,9c-0.1-0.1-0.2-0.2-0.4-0.2c-1.1-0.2-2.2-0.4-3.3-0.6c-4.7-0.6-9.4,0.4-14.2,0.1c-2.7-0.2-5.2,1-7.9,1.3  c-0.4,0-0.8,0.3-1.2,0.4C34,10,33.7,10.3,34,10.3c0.9,0.2,0,0.4,0,0.4c-0.3,0.4-0.8,0.2-1.2,0.3c-0.2,0.1-0.5,0.3-0.5,0.4  c0.1,0.3,0.4,0.1,0.6,0.1c0.7,0,1.4,0,2.1-0.1h0c1.5-1.1,3.2-1.5,4.9-2.1c0.2-0.1,0.4,0,0.6-0.1c0,1.8,1.3,0.6,1.9,0.8  c0.8,0.2,2-0.3,1.7,1.3c0,0.1,0.1,0.2,0.2,0.3c0.6,0.5,0.4,1-0.2,1.2c-1.2,0.3-1,1.3-1.1,2.2c0,1.4,1.2,1.5,2.1,1.9  c0.8,0.3,1.1-0.4,1.5-0.8c0.8-0.7,1.3-1.7,2.4-1.8C51.2,14,53.2,12.9,55.4,12.8z M90.2,63.9c-0.1-0.3-0.2-0.5-0.2-0.8  c-0.2,0.2-0.4,0.4-0.5,0.6c-0.2,0.3-0.3,0.9-0.7,1.1c-1.9,1.3-1.4,3.4-2.1,5.2c-0.1,0.3-0.1,0.7,0.3,0.8c0.3,0.1,0.6-0.1,0.8-0.4  C88.8,68.3,89.7,66.2,90.2,63.9z M83.1,35.2c-0.3,0.7-1,0-1.4,0.1c-1.7,0.4-3-0.4-4.4-1.1c-0.5-0.2-1.1-0.1-1.2,0.3  c-0.7,2.3-1.6-0.2-2.3,0.1c-0.1,0-0.3-0.5-0.4-0.5c-1.6-0.2-2.7-0.7-2.2-2.7c0.1-0.3-0.5-0.5-0.8-0.4c-2,0.3-4.2-0.4-6,1  c-0.2,0.2-0.6,0-0.9,0c-0.3,0-0.9,0.1-0.9-0.3c0-0.5,0.5-0.4,0.9-0.5c1-0.1,1.5-0.7,1.9-1.6c0.5-1.3,1.8-1.9,2.7-2.5  c2-1.5,2.7,0.3,3.8,1.1c0.4,0.3,0.8,0.6,1.3,0.8c0.3,0.2,0.6,0.5,0.5,0.8c-0.1,0.5-0.5,0.4-0.9,0.4c-0.2,0.1-0.6-0.2-0.7,0.2  c0,0.1,0.2,0.3,0.4,0.4c0.3,0.1,0.7,0.6,0.9,0.2c0.2-0.5,0.6-0.8,0.9-1.3c1-1.5-0.7-1.3-1.1-1.9c-0.1-0.2-0.5-0.2-0.5-0.4  c-0.2-0.5-1.2-0.9-0.7-1.4c0.5-0.5,0.9,0.5,1.4,0.7c1.9,0.7,2.1,2.7,3.1,4c0.2,0.3,0.3,0.9,0.8,0.7c0.4-0.2,0.6-0.7,0.4-1.2  c-0.1-0.5-0.5-1,0.2-1.2c0.8-0.2,0.9,0.5,1,1c0.2,1.3,1,1.8,2.3,1.8c0.7,0,1.3,0.6,2.1,0.3c0.1,0,0.3,0.1,0.3,0.3  C83.7,33.6,83.4,34.4,83.1,35.2z M70.4,29.3c-0.2-0.5,0.1-1.1-0.4-1.6c-0.1,0.5-0.3,1-0.4,1.5c0.3,0.2-0.1,0.8,0.5,0.8  C70.4,29.9,70.5,29.5,70.4,29.3z M82.2,27.4c-0.4,0.1-0.7,0.1-1-0.3c-0.3-0.4-0.6-1.1-1.1-0.6c-0.6,0.5-0.9,1.3-0.7,2.1  c0.2,0.6,0.8,0.9,1.3,0.7c1.2-0.5,2.2-0.2,3.2,0.4c0.3,0.2,0.8,0.5,1,0c0.2-0.5-0.2-0.7-0.5-0.9c-0.5-0.4-1.1-0.8-1.5-1.3  c-0.2-0.3,0.2-0.9-0.6-0.8c-0.1,0-0.2,0-0.2,0.1c-0.2,0.4,0.3,0.3,0.4,0.5C82.5,27.4,82.4,27.4,82.2,27.4z M85.3,40.4  c-0.3-0.9-0.9-1.6-1.4-2.4c-0.1-0.2-0.3-0.4-0.6-0.3c-0.4,0.1-0.2,0.4-0.1,0.6c1.2,2.4,2.2,4.9,3.2,7.3c0.2,0.5,0.8,0.9,1.3,1.4  c0.1,0.1,0.2,0.1,0.3,0.2c0-0.1,0.1-0.3,0-0.1C88,44.2,86.1,42.6,85.3,40.4z M74.3,17.9c-0.4-0.7-0.1-1,0.5-1.3  c0.1-0.1,0.3-0.3,0.1-0.3c-0.2-0.1-0.6-0.1-0.6,0c-0.3,0.7-2.6,0.6-0.8,2.1c0,0,0,0.3,0,0.3c-0.7,0.5-0.5,2-1.9,1.8  c-0.1,0-0.4,0-0.2,0.2c0.8,1,1.9,0,2.9,0.3c0.3,0.1,0.5-0.3,0.6-0.7c0.1-1.1,0.4-2,1.8-1.3c0.1,0.1,0.4,0.1,0.4-0.1  c0,0-0.2-0.2-0.4-0.2c-0.2,0-0.5,0-0.7,0C75.3,18.6,74.7,18.6,74.3,17.9z M92.3,39.6c-1-0.5-1.9-1.1-2.2-2.2  c-0.1-0.2-0.3-0.6-0.6-0.4c-0.3,0.2-0.2,0.5,0,0.8c0.4,0.6,0.9,1,1.1,1.6C91.1,41.3,91.6,40.7,92.3,39.6  C92.3,39.6,92.3,39.6,92.3,39.6z M29.5,12.6c-0.7,0.4,0.4,0.5,0.1,1c-0.3,0.5,0.5,0.8,0.7,0.7c0.9-0.1,0.9-0.9,0.7-1.6  c-0.1-0.4-0.5-0.1-0.8,0C29.9,12.9,29.7,12.9,29.5,12.6C29.4,12.6,29.5,12.6,29.5,12.6z M22.4,25.4c0.1-0.4-0.3-0.5-0.6-0.5  c-0.6,0.1-1.2,0.4-1.5,0.8c-0.1,0.2,0.6-0.1,0.8,0.2C21.5,25.6,22.3,26.2,22.4,25.4z M22.3,27c-0.2,0.2,0.1,0.5,0.2,0.4  c0.4-0.3,0.9-0.6,1.2-1c0.1-0.1-0.5-0.3-0.9-0.3C22,25.9,22.6,26.7,22.3,27z M83.6,55.7c-0.5,0-0.7,0.3-0.8,0.7  c0,0.3-0.1,0.7,0.4,0.7c0.5,0,0.5-0.6,0.7-0.9C84.1,55.8,83.8,55.8,83.6,55.7z M21.3,26.6c-0.5,0.1-0.8,0.5-1,0.9  c-0.2,0.3-0.4,0.8-0.5,1.1c0.1,0,0.2,0.1,0.3,0c0.6-0.5,0.6-1.4,1.4-1.9C21.3,26.7,21.3,26.6,21.3,26.6z"
              />
            </svg>
          </div>
          <div
            class="desfooter"
          >Last updated:31/03/2020 18:00 CET. Copyright 2020 Covid 19 | Myanamr</div>-->
          <router-view>s</router-view>
        </div>
        <div class="mainflex3">
          <div class="desemergency">
            <div class="desemergencyflex1">
              <span class="material-icons" style="font-size:40px;">add_ic_call</span>
            </div>
            <div class="desemergencyflex2">Emergency Contacts</div>
          </div>

          <div class="desnews">
            
                <br />
                <div class="desnewsheading">Latest News</div>
                <br />
                <div class="desnewsbody">
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                   <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewsheading">Yesterday</div>
           
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>
                  <div class="desnewscontent">
                    <div class="box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing</div>
                    <div class="box2">140640 cases</div>
                  </div>


                </div>
              


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  },
  methods: {
    openNav: function() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav: function() {
      document.getElementById("myNav").style.width = "0%";
    }
  }
};
</script>


<style>
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for mobile version css */

@media only screen and (max-width: 1100px) {
  #app {
    font-family: "Poppins", sans-serif;
  }
  .desktopcontainer {
    display: none;
  }
  .overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #3f51b5;
    overflow-x: hidden;
    transition: 0.5s;
  }

  .overlay-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    line-height: 40px;
    position: relative;
    top: 10%;
    width: 100%;
    margin-left: 20px;
    margin-top: 30px;
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    display: block;
    transition: 0.3s;
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }
  .headercontainer {
    top: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background-color: #fff;
    position: fixed;
    border-bottom: 1px solid #eee;
  }

  .menubutton {
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 35px;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .space {
    display: flex;
    margin-right: 35px;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
  }
  .Emergencybutton {
    display: flex;
    background-color: red;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  #Emergencyicon {
    display: flex;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #fff;
  }

  .toggle {
    flex-direction: row;
    display: flex;
    flex: 1;
    background-color: #f5f5f5;
    height: 90px;
    position: fixed;
    width: 100%;
    bottom: 0px;
  }
  .global {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .globalheading {
    margin-top: 10px;
    align-items: flex-end;
    justify-content: center;
  }

  .local {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .container {
    margin: 80px auto;
    width: 95%;
    margin-bottom: 100px;
    align-items: center;
    height: auto;
  }

  .ConfirmedCaseContainer {
    display: flex;
    flex-direction: column;
    height: 120px;
    margin-left: 20px;
  }
  .RecoverCase {
    display: flex;

    height: 120px;
    border-radius: 15px;
    margin-top: 5px;
    background-color: #e8f5e9;
  }
  .DeathCase {
    background-color: #ffebee;
    display: flex;
    height: 120px;
    border-radius: 15px;
    margin-top: 5px;
  }
  .caseheading {
    font-size: 16px;
    display: flex;
    flex: 1;
    align-items: flex-end;
  }
  .number {
    display: flex;
    flex: 2;
    align-items: center;
  }
  .activedots {
    margin-top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #3f51b5;
  }
  .inactivedots {
    margin-top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #eee;
  }
  .link {
    display: flex;
    flex: 1;
    flex-direction: row;
  }
  .linkflex1 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .linkflex2 {
    display: flex;
    flex: 10;
  }
  #active {
    border-radius: 50px;
    width: 10px;
    height: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #emergency {
    display: flex;
    flex-direction: row;
  }
  .mapvector {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  .mapflex1 {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .mapflex2 {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
  }

  * {
    box-sizing: border-box;
  }

  .row::after {
    content: "";
    clear: both;
    display: block;
  }

  [class*="col-"] {
    float: left;
    padding: 15px;
  }
}
@media only screen and (min-width: 1100px) {
  .headercontainer {
    display: none;
  }
  #myNav {
    display: none;
  }
  .headercontainer {
    display: none;
  }
  .container {
    display: none;
  }
  .toggle {
    display: none;
  }
}

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* for desktop version css */

@media only screen and (min-width: 1100px) {
  #myNav {
    display: none;
  }
  .headercontainer {
    display: none;
  }
  .container {
    display: none;
  }
  .toggle {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }

  
  /* Handle */
  ::-webkit-scrollbar-thumb {
   background-color: #d6d6d6;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  .desktopcontainer {
    display: flex;
    background-color:#fafafa;
    flex-direction: column;
    height: 100%;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
  }
  .desheading {
    display: flex;
    flex-direction: row;
    height: 120px;
  }
  .desbody {
    flex-direction: row;
    display: flex;
    height: 930px;
  }
  .desheadingname {
    display: flex;
    flex: 1;
    height: 120px;
    align-items: center;
    justify-content: flex-start;
    margin-left: 25px;
    font-size: 42px;
  }

  .mainflex1 {
    display: flex;
    flex: 1;
    align-items:center;
    justify-content: center;
  }
  .descountrybycases {
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 90%;
    height:871px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 8px 10px 1px rgba(238, 238, 238, 238),
      0 3px 14px 2px rgba(238, 238, 238, 238),
      0 5px 5px -3px rgba(238, 238, 238, 238);
  }
  .descountrybycasesheading {
    font-size: 14px;
    margin-top: 20px;
    align-items: flex-start;
    margin-left: 20px;
    font-weight: bold;
  }
  .descasescontainer {
    font-size: 14px;
    align-items: center;
    display: flex;
    height: 50px;
    width: 90%;
    flex-direction: row;
    border-bottom: 1px solid #eee;
  }
  .descasesflex1 {
    display: flex;
    flex: 2;
  }
  .descasesflex2 {
    display: flex;
    flex: 1;
  }
  .mainflex2 {
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: center;
  }
  .desnumber {
    display: flex;
    width: 100%;
    height: 166px;
  }
  .descomfirmedcase {
    display: flex;
    width: 100%;
    height: 166px;
    align-items: center;
    justify-content: center;
  }
  .desrecover {
    display: flex;
    width: 100%;
    height: 166px;
    align-items: center;
    justify-content: center;
  }
  .desdeath {
    display: flex;
    width: 100%;
    height: 166px;
    align-items: center;
    justify-content: center;
  }
  .numbercontainer1 {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 166px;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  }
  .numbercontainer2 {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 166px;
    align-items: center;
    justify-content: center;
    background-color: #e8f5e9;
  }
  .numbercontainer3 {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 90%;
    height: 166px;
    align-items: center;
    justify-content: center;
    background-color: #ffebee;
  }
  .desmap {
    display: flex;
    width: 100%;
    height: 660px;
    align-items: center;
    justify-content: center;
  }
  .desfooter {
    display: flex;
    width: 100%;
    height: 55px;
    align-items: flex-end;
    color: #757575;
    margin-left: 25px;
  }
  .mainflex3 {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
  .desemergency {
    margin-bottom: 20px;
    display: flex;
    height: 166px;
    width: 90%;
    border-radius: 10px;
    align-items: center;
    background-color: #f44336;
  }
  .desemergencyflex1 {
    display: flex;
    flex: 1;
    color: #ffffff;
    justify-content: flex-end;
    margin-right: 10px;
  }
  .desemergencyflex2 {
    display: flex;
    flex: 3;
    color: #ffffff;
    justify-content: center;
  }
  .desnews {
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 90%;
    height:685px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 8px 10px 1px rgba(238, 238, 238, 238),
      0 3px 14px 2px rgba(238, 238, 238, 238),
      0 5px 5px -3px rgba(238, 238, 238, 238);
  }
  .desnewsheading {
    margin-top:20px;
    display: flex;
    height: 80px;
    font-size: 24px;
    align-items: center;
    margin-left: 20px;
    font-weight: bold;
  }
  .desnewscontent {
    margin-top:20px;
    display: flex;
    flex-direction:column;
    height: 150px;
    margin-right:20px;
    flex-direction: column;
    border-bottom: 1px solid #eee;
  }

  .box1
  {
    margin-left:20px;
  }
  .box2
  {
    margin-left:20px;
    color: #ff5722;
    font-weight:bold;

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
  .deslink {
    display: flex;
    flex: 1;
    height: 120px;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
  }
}
</style>
