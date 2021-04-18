<template>
    <div>
        <!-- <div class="post" v-for="alikhan in posts" :key="alikhan.storageId">
            <h1>Storage  name: {{alikhan.storageName}}</h1>
            <h2>Storage id: {{alikhan.storageLongitude}}</h2>
        </div> -->
        <div class="post">
            <h1>Storage  name: {{posts.storageId}}</h1>
            <h2>Storage id: {{posts.storageId}}</h2>
        </div>

    </div>
</template>

<script>
export default {
    name: "AlikhanComp",
    data() {
    return {
      posts: {}
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


<style scoped>

</style>