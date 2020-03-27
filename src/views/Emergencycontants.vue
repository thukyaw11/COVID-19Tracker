<template>
<div class="container_contact">
    <form class="searchcontainer">
      <div class="placeholdercontainer">
        <input type="text" id="search-bar" placeholder="Search ...">

      </div>
      <div class="searchicon">
        <i class="material-icons">search</i>
      </div>


    </form>


  <h1 style="margin-left:35px">Yangon</h1>
    <div class="contactscontainer">
        <div class="flex1">

            <div class="box1">
                 ရန်ကုန်ပြည်သူ့ဆေးရုံကြီး
            </div>
            <div class="box2">
                    01256123
            </div>

        </div>
        <div class="flex2">
          <div class="box3">
                <span><i class="material-icons " >call</i></span>
          </div>
          <div class="box4">
              Call Now
          </div>

        </div>

    </div>




    <div class="contactscontainer">
        <div class="flex1">

            <div class="box1">
                 ရန်ကုန်ပြည်သူ့ဆေးရုံကြီး
            </div>
            <div class="box2">
                    01256123
            </div>

        </div>
        <div class="flex2">
          <div class="box3">
                <span><i class="material-icons " >call</i></span>
          </div>
          <div class="box4">
              Call Now
          </div>

        </div>

    </div>



    <div class="contactscontainer">
        <div class="flex1">

            <div class="box1">
                 ရန်ကုန်ပြည်သူ့ဆေးရုံကြီး
            </div>
            <div class="box2">
                    01256123
            </div>

        </div>
        <div class="flex2">
          <div class="box3">
                <span><i class="material-icons " >call</i></span>
          </div>
          <div class="box4">
              Call Now
          </div>

        </div>

    </div>
    <br>
    <h1 style="margin-left:35px">Mandalay</h1>


        <div class="contactscontainer">
            <div class="flex1">

                <div class="box1">
                     Mandalay hospital
                </div>
                <div class="box2">
                        01256123
                </div>

            </div>
            <div class="flex2">
              <div class="box3">
                    <span><i class="material-icons " >call</i></span>
              </div>
              <div class="box4">
                  Call Now
              </div>

            </div>

        </div>
        <div class="contactscontainer">
            <div class="flex1">

                <div class="box1">
                     Mandalay hospital
                </div>
                <div class="box2">
                        01256123
                </div>

            </div>
            <div class="flex2">
              <div class="box3">
                    <span><i class="material-icons " >call</i></span>
              </div>
              <div class="box4">
                  Call Now
              </div>

            </div>

        </div>
        <div class="contactscontainer">
            <div class="flex1">

                <div class="box1">
                     Mandalay hospital
                </div>
                <div class="box2">
                        01256123
                </div>

            </div>
            <div class="flex2">
              <div class="box3">
                    <span><i class="material-icons " >call</i></span>
              </div>
              <div class="box4">
                  Call Now
              </div>

            </div>

        </div>

</div>

</template>
<script>
export default {
  mounted(){
    this.$root.$data.title = 'Contant';
  }
}
</script>

<style>
.contactscontainer
{
  margin-top:15px;
  display:flex;
  flex-direction:row;
  flex:1;
  height:100px;
  border-bottom:1px solid #eee;
}
.flex1
{
  display:flex;
  flex:2;
  flex-direction:column;
  margin-left:35px;
}

.box1
{
  display:flex;
  flex:1;
  align-items:center;
}
.box2
{
  display:flex;
  flex:1;
  align-items:center;
  justify-content:flex-start;
}

.flex2
{
  display:flex;
  flex:1;
  flex-direction:column;

  background-color:#4CAF50;
  color:#fff;
}
.box3
{
  display:flex;
  flex:1;
  align-items:flex-end;
  justify-content:center;

}
.box4
{
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;




}

.searchcontainer {
  border-radius:50px;
  margin-left:20px;
  margin-right:20px;
  display:flex;
  flex:1;
  flex-direction:row;
  height:50px;
  background-color:#f5f5f5;
}
.placeholdercontainer
{

  display:flex;
  flex:5;
  align-items:center;
  justify-content:center;
}
.searchicon
{
  display:flex;
  flex:1;
  align-items:center;
  justify-content:center;
}

#search-bar
{
  width:100%;
  margin-left:15px;
  border:0;
  outline:0;
  background-color:transparent;
  height:40px;
  width: 90%;
}

  
</style>
