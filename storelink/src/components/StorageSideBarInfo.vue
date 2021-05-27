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
          <v-list-item-title>Price per м²</v-list-item-title>
          <v-list-item-subtitle>
           <span>
             {{post.storagePrice}}
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
          <v-list-item-title>Storage size</v-list-item-title>
          <v-list-item-subtitle>
            <span>
              {{post.storageSize}}
            </span> м²
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
          <v-list-item-title>Type of storage</v-list-item-title>
          <v-list-item-subtitle>
            <span>
              Container
            </span>
            </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <span>
              Town 
            </span>
            <a href="#google-maps-view">show on map</a>
          </v-list-item-title>
          <v-list-item-subtitle>Almaty, Kazakhstan</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="#222">
            mdi-calendar-multiselect
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Available time</v-list-item-title>
          <v-list-item-subtitle>
            <span>
              {{post.storageAvailableTime}} p.m.
            </span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

<v-divider></v-divider>
    </v-list>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
         <span> 
           Firstname Lastname
          </span>
        </v-list-item-title>
        <v-list-item>
          <span>
          +77025496788
          </span>
        </v-list-item>
      </v-list-item-content>

     <v-card-actions>
       <a class="callTo-btn" href="tel:+22222222">
        <v-btn
          color="#007180"
          fab
          dark
        >
            <v-icon>mdi-phone</v-icon>
            
       </v-btn>
       </a>
    </v-card-actions>
    </v-list-item>

    </v-card>

</template>

<script>
export default {
    name: 'StorageSideBarInfo',
     data() {
    return {
      post: {}
    }
  },
  async mounted() {
    const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ title: 'Vue POST Request Example' })
  };
    const res = await fetch (
      "http://localhost:8080/storage/" + this.$route.query.id, requestOptions
    );
      const post = await res.json();
      this.post = post
      //console.log(post)
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