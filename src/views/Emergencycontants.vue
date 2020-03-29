<template>
  <div class="container_contact">
    <form class="searchcontainer">
      <div class="placeholdercontainer">
        <input type="text" id="search-bar" placeholder="Search ..." v-model="search"/>
      </div>
      <div class="searchicon">
        <i class="material-icons">search</i>
      </div>
    </form>
    <!-- yangon -->
    <h1 style="margin-left:35px">Yangon</h1>
    <div
      class="contactscontainer"
      v-for="phone in filteredListDetail"
      v-bind:key="phone"
    >
      <div class="flex1">
        <div class="box1">{{phone.name}}</div>
        <div class="box2">{{phone.phoneNumber}}</div>
      </div>
      <a v-bind:href="'tel:'+phone.phoneNumber" class="flex2" style="color: white">
        <div class="box3">
          <span>
            <i class="material-icons">call</i>
          </span>
        </div>
        <div class="box4">Call Now</div>
      </a>
    </div>
    <br />

    <!-- mandalay -->
    <!-- <h1 style="margin-left:35px">Mandalay</h1>
    <div class="contactscontainer" v-for="mandalayPhNo in mandalay_phNo" v-bind:key="mandalayPhNo">
      <div class="flex1">
        <div class="box1">{{mandalayPhNo.name}}</div>
        <div class="box2">{{mandalayPhNo.phoneNumber}}</div>
      </div>
      <a v-bind:href="'tel:'+mandalayPhNo.phoneNumber" class="flex2" style="color: white">
        <div class="box3">
          <span>
            <i class="material-icons">call</i>
          </span>
        </div>
        <div class="box4">Call Now</div>
      </a>
    </div> -->

    <!-- ayeyarwadyy -->
    <!-- <h1 style="margin-left:35px">Ayeyarwady</h1>
    <div class="contactscontainer" v-for="mandalayPhNo in mandalay_phNo" v-bind:key="mandalayPhNo">
      <div class="flex1">
        <div class="box1">{{mandalayPhNo.name}}</div>
        <div class="box2">{{mandalayPhNo.phoneNumber}}</div>
      </div>
      <a v-bind:href="'tel:'+mandalayPhNo.phoneNumber" class="flex2" style="color: white">
        <div class="box3">
          <span>
            <i class="material-icons">call</i>
          </span>
        </div>
        <div class="box4">Call Now</div>
      </a>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "no message",
      request_msg : "no request",
      phone_numbers : "",
      search : ''
      // ayeyarwady_requestMsg: "no request",
      // bago_requestMsg: "no request",
      // chin_requestMsg: "no request",
      // kachin_requestMsg: "no request",
      // kayah_requestMsg: "no request",
      // kayin_requestMsg: "no request",
      // magway_requestMsg: "no request",
      // mon_requestMsg: "no request",
      // npt_requestMsg: "no request",
      // rakhine_requestMsg: "no request",
      // sagaing_requestMsg: "no request",
      // shan_requestMsg: "no request",
      // taninthatyi_requestMsg: "no request",

      // ayeyarwady_phNo: "",
      // bago_phNo: "",
      // chin_phNo: "",
      // kachin_phNo: "",
      // kayah_phNo: "",
      // kayin_phNo: "",
      // magway_phNo: "",
      // mon_phNo: "",
      // npt_phNo: "",
      // rakhine_phNo: "",
      // sagaing_phNo: "",
      // shan_phNo: "",
      // taninthatyi_phNo: ""
    };
  },
  mounted() {
    this.message = "Requests in progress";
    axios.all([this.fetchContent()]).then(
      axios.spread((response) => {
        this.message = "Request finished";

        this.phone_numbers = response.data;

      })
    );
    this.$root.$data.title = "Contacts";
  },
  methods: {
    fetchContent() {
      this.request_msg= "ph no request began";

      return axios.get("http://18.141.141.60/contact/list/");
    }

  },
  computed: {
    filteredListDetail() {
      return this.phone_numbers.filter(name => {
        return name
      });
    }
  }
};
</script>

<style>
.contactscontainer {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100px;
  border-bottom: 1px solid #eee;
}
.flex1 {
  display: flex;
  flex: 2;
  flex-direction: column;
  margin-left: 35px;
}

.box1 {
  display: flex;
  flex: 1;
  align-items: center;
}
.box2 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
}

.flex2 {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #4caf50;
  color: #fff;
}

.box3 {
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
}
.box4 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.searchcontainer {
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 50px;
  background-color: #f5f5f5;
}
.placeholdercontainer {
  display: flex;
  flex: 5;
  align-items: center;
  justify-content: center;
}
.searchicon {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

#search-bar {
  width: 100%;
  margin-left: 15px;
  border: 0;
  outline: 0;
  background-color: transparent;
  height: 40px;
  width: 90%;
}
</style>
