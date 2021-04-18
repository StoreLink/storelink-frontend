<template>
  <v-card
    height="300"
    full-width
  >
    <v-navigation-drawer permanent full-width>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Жангир
          </v-list-item-title>     
          <v-list-item-subtitle>
            № 10227544
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link

        >
          <v-list-item-icon class="mr-4">
            <v-icon class="list-item-icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="list-item">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>  
  // export default {
  //   name: 'Navbar',
  //   data () {
  //     return {
  //       items: [
  //         { title: 'Настройки', icon: 'mdi-view-dashboard' },
  //         { title: 'Мои объявления', icon: 'mdi-image' },
  //         { title: 'Понравившийся', icon: 'mdi-heart' },
  //         { title: 'Добавить объявления', icon: 'mdi-plus' },
  //         { title: 'Выйти', icon: 'mdi-logout' },
  //       ],
  //       right: null,
  //     }
  //   },
  // }
</script>


<style lang="css" scoped>

.list-item-icon {
  color: #007180;
}

</style>