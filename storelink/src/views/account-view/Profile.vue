<template>
    <v-card class="sideBarInfo-card">
        <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-label
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Username</v-list-item-title>
          <v-list-item-subtitle>
           <span>
             {{profile.username}}
            </span> &#8376;
            </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-label
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>email</v-list-item-title>
          <v-list-item-subtitle>
           <span>
             {{profile.email}}
            </span> &#8376;
            </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

            <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-label
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>First name</v-list-item-title>
          <v-list-item-subtitle>
           <span>
             {{profile.firstName}}
            </span> &#8376;
            </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

            <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-label
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Last name</v-list-item-title>
          <v-list-item-subtitle>
           <span>
             {{profile.lastName}}
            </span> &#8376;
            </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

            <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-label
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Payment card</v-list-item-title>
          <v-list-item-subtitle>
           <span>
             {{profile.paymentCard}}
            </span> &#8376;
            </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

            <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-label
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>gender</v-list-item-title>
          <v-list-item-subtitle>
           <span>
             {{profile.gender}}
            </span> &#8376;
            </v-list-item-subtitle>
        </v-list-item-content>
    

      </v-list-item>


            <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-label
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>age</v-list-item-title>
          <v-list-item-subtitle>
           <span>
             {{profile.age}}
            </span> &#8376;
            </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>



      <v-divider inset></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-crop-free
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Number</v-list-item-title>
          <v-list-item-subtitle>
            <span>
              {{post.storageSize}}
            </span> 
            </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-home-city
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>NIN</v-list-item-title>
          <v-list-item-subtitle>
            <span>
              Container
            </span>
            </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      

<v-divider></v-divider>
    </v-list>

    <v-btn
    danger
    >
        Edit
    </v-btn>

    </v-card>

</template>

<script>
export default {
    name: 'StorageSideBarInfo',
     data() {
    return {
    post: {},
      profile: {}
    }
  }, 
  async mounted() {
       const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxd2UiLCJpYXQiOjE2MjIxMzg1ODMsImV4cCI6MTYyMjE3NDU4M30.2Z2Uk2pXNIL5IR4HjiVu4jJy3vJQgQAhh45wqLFo0Sw_Hf7X-lzJzYCw9Ok-N0tObDA4SSczwIpnnJiMMOq1Cw"

        }
      };
    const res = await fetch (
      "http://localhost:8080/user/getUserById/2", requestOptions
    );
      const profile = await res.json();
      this.profile = profile
      console.log(profile)
  }

}
</script>

<style lang="css" scoped>

.callTo-btn {
  text-decoration: none;
}

.sideBarInfo-card {
  padding: 7px 0;
}

</style>