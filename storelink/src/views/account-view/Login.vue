<template>
  <div class="login-wrapper">
    <v-img
      class="appicon-img"
      max-height="200"
      max-width="200"
      src="@/assets/AppIcon.png"
    ></v-img>

    <h2 class="welcome-text">Please log in into StoreLink!</h2>

    <v-card class="login-card">
      <v-row>
        <v-col cols="12" sm="12">
          <input class="input-login" type="text" v-model="username" placeholder="Enter Username" name="uname" required>
        </v-col>

        <v-col cols="12" sm="12">
          <input class="input-login" type="password" v-model="password" placeholder="Enter Password" name="psw" required>
        </v-col>

        <v-col cols="12" sm="12">
          <!-- <button type="submit" v-on:click="sendData">Login</button> -->
          <v-btn    
            class="login-btn"  
            color="#007180"
            v-on:click="sendData"
            type="submit"      
          >
            Log In
          </v-btn>

          <v-btn   
            text  
            color="#007180"  
            href="/"
          >
            Go Back
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
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
        var localStorage = window.localStorage
        localStorage.setItem('token', this.auth.accessToken);
        localStorage.setItem("signedIn", true)
        window.location = "http://localhost:8081/"

    }
  }
}
</script>


<style lang="css" scoped>

.appicon-img {
  margin: 0 auto;
  margin-top: 50px;
}

.welcome-text {
  text-align: center;
  color: #222;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
}

.login-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #fdfcfc;
}

.login-card {
  width: 35%;
  padding: 25px;
  margin: 0 auto;
}

.input-login {
  width: 100%;
  background-color: #eee;
  border: 1px solid #eee;
  margin-right: 10px;
  padding: 10px;
  border-radius: 3px;
  color: #222;
}

.login-btn {
  color: #fff;
  margin-right: 5px;
}

</style>