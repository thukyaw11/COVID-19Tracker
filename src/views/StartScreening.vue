<template>
  <div class="container">
  <div class="questioncontainer">
        <img src="../assets/cold.jpg" width="1000" height="300" style="margin-top: 75px;">

        <div class="quesheading">
          <br>
          <h2>COVID 19 Screening Kit</h2>


          <div>
            You will answer nine questions about your feelings,
            symptoms, travel, and contact you’ve had with
            the others. We will never share your answers
            with others without your permissions.

          </div>
          <br>
        </div>
        <div class="quesbuttoncontainer">
          <router-link to="question" class="quesbutton"><p style="color : #fff; font-size:14px; font-weight : bold; text-align: center;">Start Screening Myself</p></router-link>
          <router-link to="resultHistory" class="viewhistorybutton"><p style="color : #3F51B5; font-size:14px; font-weight : bold; text-align: center;">View History</p></router-link>

        </div>
       
        

  </div>
  </div>





</template>

<script>

export default {

  mounted(){
    this.$root.$data.title = "Screening Kit";

  }

}

/* eslint-enable no-console */

</script>

<style scoped>

  /* question home */
.questioncontainer {
  justify-content:center;
  width: 100%;
  align-items: center;
  height: 100%;
}
  .quesheading
{

  margin-left:20px;
  margin-right:20px;
  display:flex;
  flex-direction:column;
  flex:1;
}
.quesbuttoncontainer
{
  padding:30px;
  display:flex;
  flex:1;
  flex-direction: column;
  align-items:center;
  justify-content:center;

}
.quesbutton
{
  border-radius:10px;
  font-weight:bold;
  color:#ffffff;
  font-size:14px;
  border:0px;
  outline:none;
  background-color:#3F51B5;
  width:100%;
  height:50px;
  align-items:center;
  justify-content:center;
  margin-bottom:5px;
}
.viewhistorybutton
{
  border-radius:10px;
  font-weight:bold;
  color:#3F51B5;
  font-size:14px;
  border:0px;
  outline:none;
  background-color:#D8DCF0;
  width:100%;
  height:50px;
  align-items:center;
  justify-content:center;
}
img {
  width: 100%;
  height: auto;

}
</style>