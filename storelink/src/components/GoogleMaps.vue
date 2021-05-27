<template>
  <v-container
    id="google-maps-view"
    
    tag="section"
  >
    <v-row>
      <v-col
        v-for="(item, i) in maps"
        :key="i"
        cols="12"
        class="pa-4"
      >
        <material-card
          :heading="item.heading"
          color="accent"
        >
            <v-card>
              <iframe
                :src="'https://maps.google.com/maps?q=' + post.storageLatitude + ',' + post.storageLongitude + '&t=&z=15&ie=UTF8&iwloc=&output=embed'"

                allowfullscreen
                frameborder="0"
                height="450"
                style="border:0"
                width="100%"
              />
            </v-card>
        </material-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
  export default {
    name: 'GoogleMaps',
    data: () => ({
      maps: [
        {
          heading: 'Satellite Map',
          iframe: 'pb=!1m18!1m12!1m3!1d26356315.701909266!2d-113.65984645545673!3d36.25591957613731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sus!4v1566158729223!5m2!1sen!2sus',
        },
      ],
      post: {}
    }),

    async mounted() {
      
      const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({ title: 'Vue POST Request Example' })
    };
      const res = await fetch (
        "http://localhost:8080/storage/"+ this.$route.query.id, requestOptions
      );
        const post = await res.json();
        this.post = post
        console.log(post.storageLatitude)
        //console.log(post)
    }
  }
</script>
