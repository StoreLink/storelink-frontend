<template>
  <div>
    <v-footer
      color="#fff"
      padless
    >
      <v-container>
        <v-row class="footer-row" >
            <v-col 
              cols="12"
              sm="4"
              class="footer-row-col"
            >
                <section class="footer-section">
                  <h4>О нас</h4>
                    <ul>
                      <li>Команда</li>
                      <li>Пресс центр</li>
                      <li>Для инвесторов</li>
                      <li>Работа</li>
                      <li>Команда</li>
                    </ul>
                </section>
            </v-col>

            <v-col
              cols="12"
              sm="4"
              class="footer-row-col"
            >
                <section class="footer-section">
                  <h4>Storelink</h4>
                    <ul>
                      <li>Пользовательское соглашение</li>
                      <li>Правила размещения объявлений</li>
                      <li>Для инвесторов</li>
                      <li>FAQ</li>
                      <li>Реквизиты компании</li>
                    </ul>
                </section>
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="footer-row-col"
          >
            <section class="footer-section">
              <h4>Приложения</h4>
              <ul>
                <li>Следите за нашими новостями</li>
                <li>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="social-btn"
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </li>
                <li>Мобильное приложение</li>
                <li>
                  <v-img
                    src="https://selmay.ru/wp-content/uploads/2020/05/app-store-download.png"
                    max-height="100"
                    max-width="150"
                    height="50px"
                    class="appstore-img"
                  ></v-img>
                </li>
              </ul>
            </section>
          </v-col>
      </v-row>

    <v-divider></v-divider>

      <v-row class="bottomBar-row">
        <v-col class="bottomBar-row-col">
            <v-card-text class="bottomBar-text" >
              © {{ new Date().getFullYear() }} — StoreLink. All rights reserved · <a>Конфиденциальность</a>
            </v-card-text>     
        </v-col>
      </v-row>
      
      </v-container>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style lang="css" scoped>

.footer-row {
  margin: 0;
  padding-top: 12px;
  padding-bottom: 14px;
}

.footer-row-col {
  /* ... */
}

.footer-section ul {
  text-decoration: none;
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
}

.footer-section ul li{
  margin-top: 16px;
  font-size: 14px;
}

.footer-section h4 {
  text-transform: uppercase;
  font-size: 14px;
  color: #222;
}

.bottomBar-row {
  margin: 0;
}

.bottomBar-row-col {
  padding: 0px;
}

.bottomBar-text {
  padding: 14px 0;
}

.social-btn {
  color: #007180 !important;
}

.appstore-img {
  margin-left: 4px !important;
}

</style>

