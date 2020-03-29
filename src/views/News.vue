<template>
  <div>
    <div class="container-news">
      <div class="datecontainer">
        <div class="dateflex1">
          <h1>Latest</h1>
        </div>
        <div class="dateflex2">
          <h5 style="color:#757575">22 march 2020</h5>
        </div>
      </div>

      <div class="contentcontainer" onclick="location.href='http://www.google.com';">
        <div class="contentflex1">
          <p align="justify">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English.
          </p>
        </div>
        <div class="contentflex2">
          <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
        </div>
      </div>

      <div class="contentcontainer" onclick="location.href='http://www.google.com';">
        <div class="contentflex1">
          <p>
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </p>
        </div>
        <div class="contentflex2">
          <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
        </div>
      </div>

      <h1 style="margin-left: 5px;">Yesterday</h1>
      <div v-for="news in newsRequest" v-bind:key="news._id">
        <a
          class="contentcontainer"
          :href="linkIt(news.url)"
          style="color : black; text-decoration: none;"
        >
          <div class="contentflex1">
            <div class="contentdescription">
              <p>{{news.title}}</p>
            </div>
            <div class="contentsource">Source: Eleven News</div>
          </div>

          <div class="contentflex2">
            <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
          </div>
        </a>
      </div>

      <h1 style="margin-left: 5px;">Uploaded</h1>
      <div v-for="news in newsRequest" v-bind:key="news._id">
        <a
          class="contentcontainer"
          :href="linkIt(news.url)"
          style="color : black; text-decoration: none;"
        >
          <div class="contentflex1">
            <div class="contentdescription">
              <p>{{news.title}}</p>
            </div>
            <div class="contentsource">Source: Eleven News</div>
          </div>

          <div class="contentflex2">
            <i class="material-icons" style="font-size:20px;">arrow_forward_ios</i>
          </div>
        </a>
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
      baseURL: "http://18.141.141.60/news",
      newsRequest: "",
      newsReqMessage: "",
      today : '',
      yesterday : '',
    };
  },
  mounted() {
    const todayDate = new Date();
    const yesterdayDate = new Date(todayDate);

    yesterdayDate.setDate(yesterdayDate.getDate() - 1);

    this.today = todayDate.toDateString();
    this.yesterday = yesterdayDate.toDateString();
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
          console.log(mydate.toDateString());
            if(mydate == this.today){
              console.log("latest" + mydate);
            }

            if(mydate == this.yesterday){
              console.log("today" + mydate);
            }

            if(mydate != this.yesterday && mydate != this.today){
              console.log("uploaded" + mydate)
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
.container-news {
  margin: 10px auto 100px;
  width: 90%;
  align-items: center;
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