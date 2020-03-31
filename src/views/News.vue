<template>
  <div>
    <div class="container">
      <div class="datecontainer">
        <div class="dateflex1">
          <h1>Latest</h1>
        </div>
        <div class="dateflex2">
          <h5 style="color:#757575">{{this.today}}</h5>
        </div>
      </div>
      <div v-if="latestNews.length > 0">
        <div v-for="news in latestNews" v-bind:key="news._id">
          <a
            class="contentcontainer"
            :href="linkIt(news.url)"
            style="color : black; text-decoration: none;"
          >
            <div class="contentflex1">

                <div class="contentdescription">
                  <p>{{news.title}}</p>
                </div>
                <div class="contentsource">source : {{news.source}}</div>
            
            </div>
            <div class="contentflex2">
              <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
            </div>
          </a>
        </div>
      </div>
      <div v-else class="contentcontainer">
        <h3 style="padding: 0px 30px">No Post Yet</h3>
      </div>

      <h1 style="margin-left: 5px;">Yesterday</h1>
      <div v-if="yesterdayNews.length > 0">
        <div v-for="news in yesterdayNews" v-bind:key="news._id">
          <a
            class="contentcontainer"
            :href="linkIt(news.url)"
            style="color : black; text-decoration: none;"
          >
            <div class="contentflex1">
              <div class="contentdescription">
                <p>{{news.title}}</p>
              </div>
              <div class="contentsource">source : {{news.source}}</div>
            </div>

            <div class="contentflex2">
              <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
            </div>
          </a>
        </div>
      </div>
      <div v-else class="contentcontainer">
        <h3 style="padding: 0px 30px">No Post Yet</h3>
      </div>

      <h1 style="margin-left: 5px;">Uploaded</h1>
      <div v-if="uploadedNews.length > 0">
        <div v-for="news in uploadedNews" v-bind:key="news._id">
          <a
            class="contentcontainer"
            :href="linkIt(news.url)"
            style="color : black; text-decoration: none;"
          >
            <div class="contentflex1">
              <div class="contentdescription">
                <p>{{news.title}}</p>
              </div>
              <div class="contentsource">source : {{news.source}}</div>
            </div>

            <div class="contentflex2">
              <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
            </div>
          </a>
        </div>
      </div>
      <div v-else class="contentcontainer">
        <h3 style="padding: 0px 30px">No Post Yet</h3>
      </div>
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
      baseURL: "https://covid19mm.info/news",
      newsRequest: [],
      latestNews: [],
      yesterdayNews: [],
      uploadedNews: [],
      newsReqMessage: "",
      today: "",
      yesterday: ""
    };
  },
  mounted() {
    const todayDate = new Date();
    const yesterdayDate = new Date(todayDate);

    yesterdayDate.setDate(yesterdayDate.getDate() - 1);

    this.today = todayDate.toDateString();
    this.yesterday = yesterdayDate.toDateString();
    var isoToday = todayDate.toISOString().slice(0, 10);
    var isoYesterday = yesterdayDate.toISOString().slice(0, 10);

    console.log("today " + this.today);
    console.log("yesterday " + this.yesterday);
    //change the nav bar content
    this.$root.$data.title = "News";
    this.newsReqMessage = "news in progress";

    axios.all([this.fetchNews()]).then(
      axios.spread(newsContent => {
        this.newsRequest = newsContent.data;
        newsContent.data.forEach(dates => {
          var mydate = new Date(dates.date);

          if (mydate.toDateString() == this.today) {
            this.latestNews = this.newsRequest.filter(function(date) {
              return date.date == isoToday;
            });
          }

          if (mydate.toDateString() == this.yesterday) {
            this.yesterdayNews = this.newsRequest.filter(function(date) {
              return date.date == isoYesterday;
            });
          }

          if (
            mydate.toDateString() != this.yesterday &&
            mydate.toDateString() != this.today
          ) {
            this.uploadedNews = this.newsRequest.filter(function(date) {
              return date.date != isoYesterday && date.date != isoToday;
            });
          }
        });
      })
    );
  },
  methods: {
    fetchNews() {
      this.newsReqMessage = "news request began";
      return axios.get(this.baseURL);
    },
    linkIt(url) {
      return url;
    }
  }
};

/* eslint-enable no-console */
</script>




<style scoped>
.contentflex1 {
  display: flex;
  flex: 4;
  margin-left: 20px;
  flex-direction: column;
}
.contentdescription {
  display: flex;
  flex: 1;
}
.contentsource {
  font-weight: bold;
  color: #ff5722;
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
  flex: 1;
  flex-direction: row;
  width: 100%;
  min-height: 80px;
  background-color: #f5f5f5;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 18px 2px;
  line-height: 25px;
  font-size: 15px;
}
.contentflex2 {
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