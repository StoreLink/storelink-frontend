<template>
  <v-app id="inspire">
    <PublicLayoutHeader/>
      <v-main class="grey lighten-3 pt-3">
        <v-container>
          <v-row class="newStorage">
            <v-col cols="12" sm="12">
              <v-sheet rounded="lg" min-height="268">
              <NewStorage/>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import PublicLayoutHeader from '@/layouts/public-layout/PublicLayoutHeader';
import Footer from '@/components/Footer';
import NewStorage from '../../components/NewStorage.vue'

export default {
  name: 'Show',
  components: {PublicLayoutHeader, Footer, NewStorage},
}
</script>


<style lang="css" scoped>
.newStorage {
  margin-top: 2px;
  margin-bottom: 10px;
}
</style>