<template>
  <div :class="darkmode? 'containerDark' : 'container'">
    <div class="emergencycontainer">
      <form :class="darkmode? 'searchcontainerDark' : 'searchcontainer'">
        <div class="placeholdercontainer">
          <input
            type="text"
            id="search-bar"
            style="font-size:14px;"
            placeholder="Search ..."
            v-model="search"
            :style="darkmode? 'color : #f5f5f5' : 'color : #212121' "
          />
        </div>
        <div class="searchicon">
          <i class="material-icons">search</i>
        </div>
      </form>
      <!-- yangon -->
      <div v-if="phone_numbers.length > 0">
        <div v-for="phone in comMessage" v-bind:key="phone.index">
          <div :class="darkmode? 'contactscontainerDark' : 'contactscontainer'">
            <div class="flex1">
              <div class="box1">{{phone.name}}</div>
              <div class="box2">{{phone.phoneNumber}}</div>
            </div>
            <a
              v-bind:href="'tel:'+phone.phoneNumber"
              :class="darkmode? 'flex2Dark' : 'flex2'"
              style="text-decoration: none"
            >
              <div :class="darkmode? 'box3dark' : 'box3'">
                <span>
                  <i class="material-icons">call</i>
                </span>
              </div>
              <div :class="darkmode? 'box4dark' : 'box4'">Call Now</div>
            </a>
          </div>
        </div>
      </div>
      <div v-else class="spinner">
        <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
      </div>

      <br />
    </div>
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
      search: "",
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  mounted() {
    this.message = "Requests in progress";
    axios.all([this.fetchContent()]).then(
      axios.spread(response => {
        this.message = "Request finished";

        this.phone_numbers = response.data.data;
      })
    );

    if (this.lang == "mm") {
      this.$root.$data.title = "အရေးပေါ်ဖုန်းနံပါတ်များ";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "Contacts";
    }
  },
  methods: {
    changeDark(value) {
      this.darkmode = value;
    },
    fetchContent() {
      this.request_msg = "ph no request began";
      return axios.get("https://covid19mm.info/api/generate/api/contact");
    },
    changeName(name) {
      // name will be automatically transported to the parameter.
      this.lang = name;
      if (name == "mm") {
        this.$root.$data.title = "အရေးပေါ်ဖုန်းနံပါတ်များ";
      }
      if (name == "en") {
        this.$root.$data.title = "Contacts";
      }
    }
  },
  computed: {
    comMessage() {
      return this.phone_numbers.filter(contact => {
        return contact.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  //working with event bus
  created() {
    this.$eventHub.$on("change-name", this.changeName);

    this.$darkModeBus.$on("dark-mode", this.changeDark);
  }
};
</script>

<style>
.emergencycontainer {
  margin-top: 80px;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: auto;
}
.contactscontainer {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100px;
  border-bottom: 1px solid #eee;
}
.contactscontainerDark {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100px;
  border-bottom: 1px solid #212121;
}

.container-contacts {
  margin-top: 80px;
}
.flex1 {
  display: flex;
  flex: 2;
  flex-direction: column;
  margin-left: 20px;
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
.flex2Dark {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #81c784;
  color: #000;
}

.box3 {
  color:#f5f5f5;
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
}
.box3dark {
  color:#212121;
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
}
.box4 {
  color:#f5f5f5;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.box4dark {
  color:#212121;
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
.searchcontainerDark {
  color: #f5f5f5;
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 50px;
  background-color: #212121;
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
