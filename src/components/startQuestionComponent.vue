<template>
  <div class="desktopcontainer">
    <div class="desbody">
      <div class="mainflex">
        <div class="flexbody">
          <div class="flexbodycontainer">
            <div class="flexbodyheader">
              COVID-19
              <br />Screening Kit
            </div>
            <div class="flexbodycontent">
              <hr style="width:100px; margin-left:0px; border:3px solid #000;" />
              <br />
              <div style="width:90%;">
                You will answer 9 questions about your feelings, symptoms, travel, and contact you’ve had with the others.
                We will never share your answers with others without your permissions.
              </div>

              <br />
              <div type class="button" style="cursor : pointer" @click="routerChange">Start Screening Myself</div>
            </div>
          </div>
        </div>
        <div class="fleximage">
          <img src="../assets/sick.png" width="500" height="500" />
        </div>
      </div>
  
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        routerChange(){
            this.$router.push('/question');
        }
    }
}
</script>
<style scoped>
 
  .desktopcontainer {
    display: flex;
    background-color:#DCE3EF;
    flex-direction: column;
    flex:1;
    align-items:center;
    justify-content:center;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
  }
 
  /*updated latest desktop ui*/
  .classdesbody {
    flex-direction: row;
    display: flex;
    width: 100%;
    height: 88%;
    align-items:center;
    justify-content:center;
  }
  .mainflex {
    
    display: flex;
    flex:1;

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
    line-height: 100px;
    font-weight: bold;
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