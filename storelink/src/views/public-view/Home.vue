<template>
  <v-app id="inspire">
    <NavMenu/>
    <div class="searchBanner"> 
      <div class="searchInput">
        <input type="search" placeholder="Search" v-model="search"> 
      </div>         
    </div>  
  <v-main class="main-section">
    <v-container>     
      <v-row class="storageCard-row">
        <v-col col="4">
          <v-row>
            <v-card
              class="storageCard-card"
              max-width="370"
              height="420"
              v-for="post in sortSearch" :key="post.storageId"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src=post.storageImage
              >
                  <v-card-title class="card-title">
                    {{post.storageName}}
                  </v-card-title>

                  <v-row class="date-location-row">
                    <v-card-subtitle class="card-subtitle">
                      19.04.2021
                    </v-card-subtitle>
                    <v-card-subtitle class="card-subtitle">
                      Almaty, Kazakhstan
                    </v-card-subtitle>
                  </v-row>
              </v-img>

          <v-row class="price-left-status-row">
            <v-col 
              cols="12"
              sm="5"
            >
                <v-card-text class="price-card-text">
                  <v-icon left color="black">mdi-label</v-icon>
                      <span>
                        {{post.storagePrice}}
                      </span> ₸/м²
                </v-card-text>
            </v-col>
      
            <v-col
              cols="12"
              sm="4"
            >
              <v-card-text class="status-card-text">
                <span>
                    Free
                </span>
              </v-card-text>
            </v-col>

            <v-col
              cols="12"
              sm="3"
            >
              <v-card-text class="left-card-text">
                <span>
                    {{post.storageSize}}
                </span> м²
              </v-card-text>
            </v-col>
          </v-row>

    <v-divider class="mx-3"></v-divider>

        <v-row class="workTime-row">
          <div>
            <v-card-title class="workTime-title">Available time</v-card-title>
              <v-card-subtitle class="workTime-subtitle">
                <span>
                  {{post.storageAvailableTime}}      
                </span> p.m
              </v-card-subtitle>
          </div>
        </v-row>

    <v-divider class="mx-3"></v-divider>
    
        <v-card-actions>
          <v-btn 
            :href="'/show?id=' + post.storageId"
            target="_self"
            color="#007180"
            text
          >
            Show more
          </v-btn>

          <v-btn
            color="#FF385C"
            text
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn
            color="primary"
            text
          >
            <v-icon>mdi-share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-row>
</v-col>
</v-row>

<v-divider></v-divider>
      
</v-container>
</v-main>
    <Footer/>
</v-app>
</template>


<script>
import NavMenu from '@/components/menu/NavMenu';
import Footer from '@/components/Footer';

export default {
  authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  },
  name: "Home",
    components: {Footer, NavMenu},
    data() {
    return {
      posts: [],
      search: ""
    }
  },
  computed: {
      sortSearch() {
          let tempPosts = this.posts 
          return tempPosts.filter(post => post.storageName && post.storageName.toLowerCase().includes(this.search) || post.storageDescription && post.storageDescription.toLowerCase().includes(this.search) )
      }
    },
    
  async mounted() {
    const res = await fetch (
      "http://localhost:8080/storage"
    );
      const posts = await res.json();
      this.posts = posts
      console.log(posts)
  }
}
</script>


<style lang="css" scoped>

.searchInput {
  position: relative;
  top: 65%;
  left: 50%;
  margin-top: -50px;
  margin-left: -250px;
  width: 500px;
}

.searchInput input {
  width: 100%;
  background-color: #fff;
  border: 1px solid #dedede;
  color: #333;
  font-size: 15px;
  border-radius: 3px;
  letter-spacing: normal;
  padding: 10px;
}

.searchBanner {
  width: 100%;
  height: 55vh;
  background-image: url("../../assets/banner.jpg");
  background-size: 1000px 500px;
  /* background-size: 77% 115%; */
  background-position: center;
}

.main-section {
  padding-top: 12px !important;  
  background-color: #fff;
}

.storageCard-row {
  margin-top: 25px;
  margin-bottom: 13px;
}

.storageCard-card {
  margin-left: 10px;
  margin-right: 15px;
  margin-bottom: 25px;
}

.card-subtitle {
    color: #fff !important;
    padding-top: 5px;
    padding-bottom: 5px;
}

.date-location-row {
    margin: 0px;
}

.card-title{
    padding: 5px 15px;
}

.price-left-status-row {
    margin: 0px;
    padding-top: 7px;
    padding-bottom: 7px;
}

.price-card-text {
    padding: 4px;
    background-color: #ffd313;
    border-radius: 3px;
}

.status-card-text {
    padding: 4px;
    text-align: center;
    background-color: #007180;
    color: #fff;
    border-radius: 3px;
}

.left-card-text {
    padding: 4px;
    text-align: center;
}

.workTime-row {
    margin: 0px;
    height: 100px;
}

.workTime-subtitle {
    height: 64px;
}

.workTime-title {
    font-size: 1rem;
    color: #007180;
    height: 64px;
}

.workTime-subtitle {
    margin: 0;

}

</style>
