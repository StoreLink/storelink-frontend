<template>
    <div>
        <v-card>
            <v-card-title class="description-title">
                <h3>Описание</h3>
            </v-card-title>
            
            <v-card-text class="description-text">
                <p>
                    {{post.storageDescription}}
                </p>
             </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'StorageDescriptionSection',
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


<style lang = "css" scoped>

.description-title h3 {
    font-size: 25px;
    font-weight: 400;
}

.description-text p {
    font-size: 16px;
    color: #222;
    margin-bottom: 1px;
}

</style>