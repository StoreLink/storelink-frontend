<template>
    <div class="container">
    <label ><b>Username</b></label>
    <input type="text" v-model="username" placeholder="Enter Username" name="uname" required>

    <label ><b>Password</b></label>
    <input type="password" v-model="password" placeholder="Enter Password" name="psw" required>

    <button type="submit" v-on:click="sendData">Login</button>
    
  </div>
</template>


<script>
  export default {
  name: "Login",
    data() {
    return {
      username: "",
      password: "",
      auth: null
    }
  },
  
  async mounted() {
    
  },
  methods: {
    sendData: async function () {
      // console.log("TESST")
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          username: this.username,
          password: this.password,
        })
      };
        const res = await fetch (
          "http://localhost:8080/auth/signin", requestOptions
        );
        const post = await res.json();
        this.auth = post
        console.log(this.auth.accessToken)
        var storage = window.localStorage
        storage.setItem('token', this.auth.accessToken);

    }
  }
}
</script>


<style lang="css" scoped>

</style>