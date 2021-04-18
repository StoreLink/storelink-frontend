<template>
  <v-app id="inspire">
    <PublicLayoutHeader/>
      <v-main class="grey lighten-3 pt-3">
        <v-container>
          <v-row>
            <v-col
              cols="12"
            sm="12"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
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
import NewStorage from '../../components/NewStorage.vue'
import Footer from '@/components/Footer'
import PublicLayoutHeader from '@/layouts/public-layout/PublicLayoutHeader';

export default {
  components: { NewStorage, Footer, PublicLayoutHeader },
    
}
</script>


<style scoped>

</style>