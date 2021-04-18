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
              <AddNewStorage/>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
        <Footer/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import PublicLayoutHeader from '@/layouts/public-layout/PublicLayoutHeader';
import Footer from '@/components/Footer';
import AddNewStorage from '@/components/AddNewStorage'

export default {
  name: 'Show',
  components: {PublicLayoutHeader, Footer, AddNewStorage},
  // data: () => ({
  // links: [
  //       'Home',
  //       'Messages',
  //       'About',
  //       'FAQ',
  //     ],
  // }),
}
</script>


<style lang="css" scoped>

.storageTitle-title {
  font-weight: 500;
  font-size: 1.5em;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;

}

</style>