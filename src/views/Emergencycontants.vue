<template>
  <div class="container-contacts">
    <form class="searchcontainer">
      <div class="placeholdercontainer">
        <input type="text" id="search-bar" style="font-size:14px;" placeholder="Search ..." v-model="search" />
      </div>
      <div class="searchicon">
        <i class="material-icons">search</i>
      </div>
    </form>
    <!-- yangon -->
    <div v-if="phone_numbers.length > 0">
      <div v-for="phone in comMessage" v-bind:key="phone.index">
        <div class="contactscontainer">
          <div class="flex1">
            <div class="box1">{{phone.name}}</div>
            <div class="box2">{{phone.phoneNumber}}</div>
          </div>
          <a
            v-bind:href="'tel:'+phone.phoneNumber"
            class="flex2"
            style="color: white; text-decoration: none"
          >
            <div class="box3">
              <span>
                <i class="material-icons">call</i>
              </span>
            </div>
            <div class="box4">Call Now</div>
          </a>
        </div>
      </div>
    </div>
    <div v-else class="spinner">
      <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
    </div>

    <br />
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "no message",
      request_msg: "no request",
      phone_numbers: [],
      search: ""
    };
  },
  mounted() {
    this.message = "Requests in progress";
    axios.all([this.fetchContent()]).then(
      axios.spread(response => {
        this.message = "Request finished";

        this.phone_numbers = response.data;
      })
    );
    this.$root.$data.title = "Contacts";
  },
  methods: {
    fetchContent() {
      this.request_msg = "ph no request began";
      return axios.get("https://covid19mm.info/api/contact/list");
    }
  },
  computed: {
    comMessage() {
      return this.phone_numbers.filter(contact => {
        return contact.name.toLowerCase().includes(this.search.toLowerCase());
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
.container-contacts {
  margin-top: 80px;
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
