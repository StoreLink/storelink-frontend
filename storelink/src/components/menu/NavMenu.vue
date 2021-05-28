<template>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="52"
        >
        <v-img src="@/assets/AppIcon.png"></v-img>
        </v-avatar>

        <v-btn
          href="/"
          text
          class="navBar-btn"
        >
          Storelink
        </v-btn>

        <v-btn
          href="faq"
          text
          class="navBar-btn"
        >
          FAQ
        </v-btn>

        <v-btn
          href="profile"
          text
          class="navBar-btn"
          v-if=inside
        >
          Profile
        </v-btn>

        <v-btn
          href="new"
          text
          class="navBar-btn"
          color="primary"
          v-if=inside
        >
          Become a host
        </v-btn>

        <v-btn
          href="userPosts"
          text
          class="navBar-btn"
          color="primary"
          v-if=inside
        >
          My posts
        </v-btn>

        <v-btn
          text
          href="covid"
          class="navBarCov-btn"
        >
          COVID-19
        </v-btn>
        
        <v-spacer></v-spacer>

         <v-btn
          v-if=inside
          v-on:click="logout"
          href="/"
          color="#ff395b"
          class="logout-btn"
        >
          Log out
        </v-btn>

        <v-btn
          v-if=!inside
          v-on:click="logout"
          href="/signup"
          color="primary"
          class="signup-btn"
        >
          Sign up
        </v-btn>

        <v-btn
          v-if=!inside
          color="signIn-btn"
          href="/login"
        >
          Login In
        </v-btn>
      </v-container>
    </v-app-bar>
</template>

<script>
var localStorage = window.localStorage

  export default {
    name: 'NavMenu',
    data: () => ({
        inside: localStorage.getItem('signedIn')
    }),
    methods: {
      logout: function() {
        localStorage.removeItem('signedIn')
        localStorage.removeItem('token')
      }
    }
  }
</script>

<style>

.signIn-btn {
  background-color: #007180 !important;
  color: #fff !important;
}

.navBar-btn {
  color: #007180 !important;
}

.signup-btn {
  margin-right: 10px;
}

.logout-btn {
  color: #fff !important;  
}

.navBarCov-btn {
  color: #222 !important;
}

</style>