<template>
  <div>
    <v-card>
      <v-carousel>
        <v-carousel-item
          :src=post.storageImage
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
  export default {

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
      "http://localhost:8080/storage/"+ this.$route.query.id, requestOptions
    );
      const post = await res.json();
      this.post = post
      //console.log(post)
  }
}
</script>

<style scoped>

</style>



