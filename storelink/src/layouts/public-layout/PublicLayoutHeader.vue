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
        >
          Профиль
        </v-btn>
        <v-btn
          href="new"
          text
          class="navBar-btn"
        >
          Сдайте помещение
        </v-btn>
        
        
        <v-spacer></v-spacer>
        <v-btn
          href="covid"
          class="navBarCov-btn"
        >
          COVID-19
        </v-btn>

       <v-btn
        color="signIn-btn"
       >
         Войти
       </v-btn>
      </v-container>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',
    data: () => ({
  
    }),
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

.navBarCov-btn {
  background-color: #222 !important;
  color: #fff !important;
  margin-right: 10px;
}


</style>