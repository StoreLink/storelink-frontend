<template>
    <div>
       <input type="search" placeholder="typehere" v-model="search">
       <p>{{search}}</p>

    </div>
</template>


<script>
export default {
    name: "SearchFilter",
    data() {
    return {
      search: '',
    }
  },
  
}
</script>


<style lang="css" scoped>

</style>

