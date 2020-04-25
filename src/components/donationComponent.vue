<template>
  <div class="desktopcontainer">
    <div class="desbody">
      <div class="mainflex">
        <div class="flexbody">
          <div class="flexbodycontainer">
            <div class="flexbodyheader">Make your own support</div>
            <div class="flexbodycontent">
              <hr style="width:100px; margin-left:0px; border:3px solid #000;" />
              <br />
              <div style="width:90%; color:#757575;">
                In order to prevent, stop and cure the disease, every single one of us should pay a role by cooperating and supporting to everyone who needs our help.
                Bank accounts and contacts of the Government and Civil Service Organisations are described in this menu for any financial support.
                Let's win this Covid 19 with our unity.
              </div>

              <br />
              <div type class="button">Donate Now</div>
            </div>
          </div>
        </div>
        <div class="fleximage">
          <i class="fas fa-heartbeat" style="font-size:300px; color:#EC407A;"></i>
        </div>
      </div>
      <div class="desfooter"></div>
    </div>
  </div>
</template>

<style scoped>
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

  .desktopcontainer {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    padding-top: 100px;
    font-size: 18px;
  }
  .desheading {
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 120px;
  }
  .desbody {
    flex-direction: column;
    display: flex;
    flex: 1;
    height: 930px;
  }

  /*updated latest desktop ui*/
  .mainflex {
    display: flex;
    flex: 1;
  }
  .desfooter {
    height: 80px;
    display: flex;
    margin-right: 35px;
    justify-content: flex-end;
  }
  .flexbody {
    display: flex;
    flex: 3;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .flexbodycontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 625px;
    padding-left: 10%;
  }
  .flexbodyheader {
    display: flex;
    flex: 1;
    font-size: 70px;
    font-weight: bold;
  }

  .flexbodycontent {
    flex-direction: column;
    display: flex;
    height: auto;
    justify-content: flex-end;
  }
  .fleximage {
    display: flex;
    flex: 2;
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
    background-color: #ec407a;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
}
</style>