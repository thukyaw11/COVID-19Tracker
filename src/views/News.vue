<template>
  <div :class="darkmode? 'containerDark' : 'container'">
    <div class="newscontainer">
      <div class="datecontainer">
        <div class="dateflex1">
          <h1>{{$t('newsPage.latest')}}</h1>
        </div>
        <div class="dateflex2">
          <h5 style="color:#757575">{{this.today}}</h5>
        </div>
        <br />
      </div>
      <div v-if="latestNews.length > 0">
        <div v-for="news in latestNews" v-bind:key="news._id">
          <a
            :class="darkmode? 'contentcontainerDark' : 'contentcontainer'"
            :href="linkIt(news.url)"
            style="color : black; text-decoration: none;"
          >
            <div class="contentflex1">
              <div :class="darkmode? 'contentdescriptionDark' : 'contentdescription'">
                <p class="comment more">{{news.title | truncate(130, '...')}}</p>
              </div>
              <div
                :class="darkmode? 'contentsourcedark' : 'contentsource'"
              >source : {{news.sourceId}}</div>
            </div>
            <div :class="darkmode? 'contentflex2Dark' : 'contentflex2'">
              <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
            </div>
          </a>
        </div>
      </div>
      <div v-else :class="darkmode? 'contentcontainerDark' : 'contentcontainer'">
        <h3 style="padding: 0px 30px">No Post Yet</h3>
      </div>

      <h1 style="margin-left: 5px;">{{$t('newsPage.yesterday')}}</h1>
      <div v-if="yesterdayNews.length > 0">
        <div v-for="news in yesterdayNews" v-bind:key="news._id">
          <a
            :class="darkmode? 'contentcontainerDark' : 'contentcontainer'"
            :href="linkIt(news.url)"
            style="color : black; text-decoration: none;"
          >
            <div class="contentflex1">
              <div :class="darkmode? 'contentdescriptionDark' : 'contentdescription'">
                <p>{{news.title | truncate(130, '...')}}</p>
              </div>
              <div
                :class="darkmode? 'contentsourcedark' : 'contentsource'"
              >source : {{news.sourceId}}</div>
            </div>

            <div :class="darkmode? 'contentflex2Dark' : 'contentflex2'">
              <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
            </div>
          </a>
        </div>
      </div>
      <div v-else :class="darkmode? 'contentcontainerDark' : 'contentcontainer'">
        <h3 style="padding: 0px 30px">No Post Yet</h3>
      </div>

      <!-- <h1 style="margin-left: 5px;">Uploaded</h1>
      <div v-if="uploadedNews.length > 0">
        <div v-for="news in uploadedNews" v-bind:key="news._id">
          <a
            :class="darkmode? 'contentcontainerDark' : 'contentcontainer'"
            :href="linkIt(news.url)"
            style="color : black; text-decoration: none;"
          >
            <div class="contentflex1">
              <div :class="darkmode? 'contentdescriptionDark' : 'contentdescription'">
                <p>{{news.title | truncate(100, '...')}}</p>
              </div>
              <div :class="darkmode? 'contentsourcedark' : 'contentsource'">source : {{news.source}}</div>
            </div>

            <div :class="darkmode? 'contentflex2Dark' : 'contentflex2'">
              <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
            </div>
          </a>
        </div>
      </div>
      <div v-else :class="darkmode? 'contentcontainerDark' : 'contentcontainer'">
        <h3 style="padding: 0px 30px">No Post Yet</h3>
      </div>-->
      <br />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

import axios from "axios";
export default {
  data() {
    return {
      contracted: true,
      tdybaseURL: "",
      yesbaseURL: "",
      newsRequest: [],
      latestNews: [],
      yesterdayNews: [],
      newsReqMessage: "",
      today: "",
      yesterday: "",
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      darkmode: localStorage.getItem("darkmode")
        ? JSON.parse(localStorage.getItem("darkmode"))
        : false
    };
  },
  mounted() {
    //change the nav bar content
    if (this.lang == "mm") {
      this.$root.$data.title = "သတင်း";
    }
    if (this.lang == "en") {
      this.$root.$data.title = "News";
    }

    this.newsReqMessage = "news in progress";

    axios.all([this.fetchTdyNews(), this.fetchYesNews()]).then(
      axios.spread((newsContentToday, newsContentYesterday) => {
        console.log(newsContentYesterday);
        if (newsContentToday.status == 200) {
          this.latestNews = newsContentToday.data.items;
        }

        if (newsContentYesterday.status == 200) {
          this.yesterdayNews = newsContentYesterday.data.items;
        }
      })
    );
  },
  methods: {
    changeDark(value) {
      this.darkmode = value;
      if (this.darkmode == true) {
        document.body.className = "home";
      } else {
        document.body.className = "intro";
      }
    },
    changeName(name) {
      // lang will be automatically transported to the parameter.
      this.lang = name;
      if (name == "mm") {
        this.$root.$data.title = "သတင်း";
      }
      if (name == "en") {
        this.$root.$data.title = "Donation";
      }
    },
    fetchTdyNews() {
      this.newsReqMessage = "news request began";
      return axios.get(this.tdybaseURL);
    },
    fetchYesNews() {
      this.newsReqMessage = "news request began";
      return axios.get(this.yesbaseURL);
    },
    linkIt(url) {
      return url;
    },
    setData(newsContent) {
      this.newsRequest = newsContent;
    }
  },
  created() {
    //yesterday, today and uploaded
    const todayDate = new Date().toISOString().slice(0, 10);
    const tmrDate = new Date(todayDate);

    tmrDate.setDate(tmrDate.getDate() + 1);

    const tmrIsoDate = tmrDate.toISOString().slice(0, 10);

    this.tdybaseURL = `https://aa56zbybij.execute-api.ap-southeast-1.amazonaws.com/v1/news/covid-19?from=${tmrIsoDate}`;
    this.yesbaseURL = `https://aa56zbybij.execute-api.ap-southeast-1.amazonaws.com/v1/news/covid-19?from=${todayDate}`;

    this.$eventHub.$on("change-name", this.changeName);

    this.$darkModeBus.$on("dark-mode", this.changeDark);
  }
};

/* eslint-enable no-console */
</script>




<style scoped>
.newscontainer {
  justify-content: center;
  width: 95%;
  align-items: center;
  height: auto;
}
.contentflex1 {
  display: flex;
  flex: 4;
  margin-left: 20px;
  flex-direction: column;
}
.contentdescription {
  width: 100%;
  display: flex;
  flex: 1;
}
.contentdescriptionDark {
  width: 100%;
  display: flex;
  flex: 1;
  color: #f5f5f5;
}
.contentsource {
  font-weight: bold;
  color: #ff5722;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}
.contentsourcedark {
  font-weight: bold;
  color: #ff8a65;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
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
.contentcontainer {
  display: flex;
  background-color: #eee;
  flex-direction: row;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 5px 0px;
  font-size: 15px;
}
.contentcontainerDark {
  display: flex;
  background-color: #212121;
  flex-direction: row;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 5px 0px;
  font-size: 15px;
}
.contentflex2 {
  color: #212121;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.contentflex2Dark {
  color: #f5f5f5;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
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
.datecontainer {
  margin-top: 80px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex: 1;
  flex-direction: row;
}
.dateflex1 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
}
.dateflex2 {
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
}
</style>