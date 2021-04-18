<template>
  <div>
    <div class="paragraph">
      <div>
        <img class="imgWrap" @click="showPhotoSwipe(0)" src="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg" alt="">
        <!-- <img  @click="showPhotoSwipe(1)" src="https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg" alt=""> -->
      </div>
    </div>
    <v-photoswipe :isOpen="isOpen" :items="items" :options="options" @close="hidePhotoSwipe"></v-photoswipe>
  </div>
</template>


<script>

import { PhotoSwipe } from 'v-photoswipe'
export default {
  name: 'PhotoSwipe',
  components: {
    'v-photoswipe': PhotoSwipe,
    // 'v-photoswipe-gallery': PhotoSwipeGallery
  },
  data () {
    return {
      isOpen: false,
      isOpenGallery: false,
      options: {
        index: 0
      },
      optionsGallery: {},
      items: [
        {
          src: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
          w: 500,
          h: 500,
          
        }, {
          src: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg',
          w: 500,
          h: 500,
          
        }
      ]
    }
  },
  methods: {
    showPhotoSwipe (index) {
      this.isOpen = true
      this.$set(this.options, 'index', index)
    },
    hidePhotoSwipe () {
      this.isOpen = false
    }
  }
}  

</script>


<style lang="css" scoped>

.imgWrap {
    width: 100px;
}

</style>