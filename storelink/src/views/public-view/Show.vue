<template>
  <v-app id="inspire">
    <NavMenu/>
      <v-main class="grey lighten-3 pt-3">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="12"
            >
              <v-sheet
                rounded="lg"
                min-height="48"
              >
                <v-card elevation="1">
                  <v-card-title class="storageTitle-title">
                    <span> 
                      {{post.storageName}}
                    </span>
                  </v-card-title>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="5"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
              <StorageSideBarInfo/>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="7"
            >
              <v-sheet
                min-height="48"
                rounded="lg"  
              >
                <StorageImageGallery/>
              </v-sheet>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="12"
            >
            <v-sheet
                min-height="48"
                rounded="lg"  
            >
              <StorageDescriptionSection/>
            </v-sheet>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="12"
            >
              <v-sheet
                min-height="48"
                rounded="lg"  
              >
                <GoogleMaps/>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    <Footer/>      
  </v-app>
</template>

<script> 
import StorageImageGallery from '@/components/StorageImageGallery';
import NavMenu from '@/components/menu/NavMenu';
import StorageDescriptionSection from '@/components/StorageDescriptionSection';
import StorageSideBarInfo from '@/components/StorageSideBarInfo';
import GoogleMaps from '@/components/GoogleMaps';
import Footer from '@/components/Footer';

export default {
  name: 'Show',
  components: 
  {
    StorageImageGallery, 
    NavMenu, 
    Footer, 
    StorageSideBarInfo, 
    GoogleMaps, 
    StorageDescriptionSection
  },

  data() {
    return {
      post: {}
    }
  },

  async mounted() {
    console.log(this.$route.query.id)
    const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
  };

    const res = await fetch (
      "http://localhost:8080/storage/" + this.$route.query.id, requestOptions
    );
      const post = await res.json();
      this.post = post
      //console.log(post)
  }
}
</script>


<style lang="css" scoped>

.storageTitle-title {
  font-weight: 500;
  font-size: 1.5em;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;

}

</style>