<template>
  <div>
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
            v-for="link in links"
            :key="link"
            text
          >
            {{ link }}
          </v-btn>
            <v-spacer></v-spacer>
        </v-container>
      </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data: () => ({
      links: [
        'Storelink',
        'Добавить объявление',
        'FAQ',
        'Профиль'
      ],
    }),
  }
</script>