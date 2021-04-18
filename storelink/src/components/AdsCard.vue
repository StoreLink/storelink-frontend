<template>
  <v-card
  >
    <v-container pa-0 
    v-for="(item, i) in items"
    :key="i"
    >
      <v-app-bar
      color="#007180"
      class="rounded-t"
      height="40px"
      >
        <div class="appBarTitle"
        v-text="item.title">
          <!-- Сдам помещение... -->
          </div> 
      <v-spacer></v-spacer>

        <div class="appBarDate"
        v-text="item.date">
          <!-- Янв. 30, 2021 -->
        </div>
      </v-app-bar>

      <v-row no-gutters class="mb-5">
        <v-col cols="4" align-center class="pr-4"> 
          
            <v-img
              full-width
              height="100%"
              :src="item.src">
            </v-img>   
             
        </v-col>

        <v-col cols="3">
          <v-list-item two-line>
              <v-list-item-content class="secondCol">
                      <v-list-item-subtitle class="labelsOfCard">Цена</v-list-item-subtitle>
                <div class="contentOfCard-price">
                  <v-icon left>mdi-label</v-icon>
                <v-chip
                class="contentsOfCard"
                color="#ffd900"
                label
                v-text="item.price"
                >
                  
                    
                </v-chip>
              
                </div>
                
            </v-list-item-content>
          </v-list-item>
            
          <v-list-item two-line>
            <v-list-item-content class="secondCol">
              <v-list-item-subtitle class="labelsOfCard">Осталось</v-list-item-subtitle>
              <div class="contentOfCard-left">
                
                <v-chip class="contentsOfCard"
                color="#fff"
                label
                text-color="#007180"
                v-text="item.left"
                >
                    <!-- 30 м² -->
                  <!-- <v-icon dark right>mdi-checkbox-marked-circle</v-icon> -->
                </v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content class="secondCol">
              <v-list-item-subtitle class="labelsOfCard">Статус</v-list-item-subtitle>
              <div class="contentOfCard-status">
                <v-chip class="status-chip"
                color="green"
                label
                v-text="item.status"
                >
                <v-icon dark left>mdi-checkbox-marked-circle</v-icon>
                    Доступен
                  
                </v-chip>
              </div>
            </v-list-item-content>
          
          </v-list-item>
       
        </v-col>

        <v-col cols="5">
          <v-list-item two-line class="list-item-two-line">
            <v-list-item-content class="thirdCol">
              <v-list-item-subtitle class="labelsOfCard">
                Город, место
                </v-list-item-subtitle>
              
              <v-list-item-subtitle
              v-text="item.location"
              >
                </v-list-item-subtitle>
              
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line class="list-item-two-line">
            <v-list-item-content class="thirdCol">
              <v-list-item-subtitle class="labelsOfCard">
                Время работы
                </v-list-item-subtitle>
              
              <v-list-item-subtitle
              v-text="item.workTime"
              >
                12:10-19:20
                </v-list-item-subtitle>
              
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line class="list-item-two-line">
            <v-list-item-content class="thirdCol">
              <v-list-item-subtitle class="labelsOfCard">
                Краткое описание
                </v-list-item-subtitle>
              <v-list-item-subtitle
              v-text="item.description"
              >
                <!-- Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit,sed det dolore nibh ipsum. 
                suscipit tellu... -->
              </v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="thirdCol">
            <v-card-actions class="btn-moreDetail-actions">
              <v-btn
                outlined
                class="btn-moreDetail "
                text
              >
                Подробнее
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                outlined
                class="btn-addToFavs "
                text
              >
                Лайкнуть
              </v-btn>
            </v-card-actions>
            </v-list-item-content>
          </v-list-item>
          
        </v-col>

      </v-row>

    </v-container>
  </v-card>
</template>


<script>
  export default {
    name: 'AdsCard',
    data: () => ({
      items: [
        {
          title: 'Сдам помещение Алматы...',
          date: '23.02.2021',
          src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          price: '300',
          left: '30',
          status: 'Access',
          location: 'Алматы, Карасай батыра 12',
          workTime: '12:00',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitsed det dolore nibh ipsum suscipit tellu..."
        },
        {
          title: 'Сдам помещение Алматы...',
          date: '23.02.2021',
          src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          price: '300',
          left: '30',
          status: 'Access',
          location: 'Алматы, Карасай батыра 12',
          workTime: '12:00',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitsed det dolore nibh ipsum suscipit tellu..."
        },
        {
          title: 'Сдам помещение Алматы...',
          date: '23.02.2021',
          src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          price: '300',
          left: '30',
          status: 'Access',
          location: 'Алматы, Карасай батыра 12',
          workTime: '12:00',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitsed det dolore nibh ipsum suscipit tellu..."
        },
        
      ],
    }),
  }
</script>


<style lang="css" scoped>

.availableProgress{
  font-size: 14px;
  width: 114px;
  margin:0 5px;
  border-radius: 3px;
}

.avatarBlock {
  border-radius: 0px;
}

.appBarTitle {
  color: #fff;
}

.appBarDate {
  color: #fff;
}

.contentsOfCard {
  text-align: center;
  border: 2px solid rgba#ffd900
}

.contentOfCard-price {
  text-align: center;
  border: 2px solid #ffd900;
  border-radius: 3px;
  color: #333;
  background-color: #ffd900;
}

.contentOfCard-left {
  text-align: center;
  border: 1px solid #007180;
  border-radius: 3px;
  color: #007180 ;
  background-color: #fff;
}

.contentOfCard-status {
  text-align: center;
  background-color: #4CAF50;
  border-color: #4CAF50;
  border-radius: 3px;
}

.status-chip {
  color: #fff !important;
}

.labelsOfCard {
  color: #007180 !important;
  font-weight: 500;
}
.secondCol {
  padding-top: 0;
  padding-bottom: 0;
}

.thirdCol {
  padding-top: 0;
  padding-bottom: 0;
}

.btn-moreDetail-actions {
  padding: 1px;
}

.btn-moreDetail {
  background-color: #007180;
  border-color: #007180;
  color: #fff !important;
  font-size: 12px !important;
}

.btn-addToFavs {
  background-color: #c7273c;
  border-color: #c7273c;
  color: #fff !important;
  font-size: 12px !important;
}

.list-item-two-line {
  min-height: 48px;
}

</style>