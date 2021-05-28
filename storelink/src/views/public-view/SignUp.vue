<template>
  <div class="signup-main">

    <v-img
      class="appicon-img"
      max-height="200"
      max-width="200"
      src="@/assets/AppIcon.png"
    ></v-img>

    <h2 class="welcome-text">Welcome to StoreLink!</h2>

    <v-card
      elevation-11
      class="signup-card"
    >
    <v-row class="close-btn-row">
     <v-btn
      icon
      class="close-btn"
      color="#007180"
      href="/"
    >
      <v-icon dark>mdi-close</v-icon>
    </v-btn>

    </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="username"
            color="#007180"
            label="User name"
            placeholder="abenoov"
           
          />
        </v-col>

        <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="email"      
            color="#007180"
            label="E-mail"
            placeholder="abenoov@gmail.com"    
            
          />
        </v-col>
           
        <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="password"
            color="#007180"
            type="password"
            label="Password"
            placeholder="Password"  
           
          />           
        </v-col>
        
        <v-spacer></v-spacer>

        <v-btn
          class="signup-submit-btn"      
          color="#007180"
          v-on:click="sendData"
          type="submit"      
        >
          Submit
        </v-btn>

        <v-btn      
          text
          color="#007180"
          href="/login"     
        >
          Login
        </v-btn>

        </v-row>
    </v-card>
  </div>
</template>


<script>
export default {
    name: "SignUp",
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
          email: this.email,
          password: this.password,
          role: ["user"]
        })
      };
        const res = await fetch (
          "http://localhost:8080/auth/signup", requestOptions
        );
        const post = await res.json();
        this.auth = post
        console.log(this.auth.accessToken)
        var localStorage = window.localStorage
        localStorage.setItem('token', this.auth.accessToken);
        window.location = "http://localhost:8081/"

    }
    }
}
</script>


<style lang="css" scoped>

.signup-card {
  width: 35%;
  padding: 25px;
  margin: 0 auto;
}

.close-btn {
  margin: 0;
  margin-bottom: 10px;
}

.close-btn-row {
  float: right;
}

.signup-main {
  height: 100vh;
  background-color: #fdfcfc;
}

.signup-submit-btn {
  color: #fff;
  margin: 1px 12px;
}

.appicon-img {
  margin: 0 auto;
  margin-top: 50px;
}

.welcome-text {
  text-align: center;
  color: #222;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 5px;
}

</style>