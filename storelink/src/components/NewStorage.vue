<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Your storage successfully registered!</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-form
      ref="form"
      v-model="formIsValid"
      @submit.prevent="submit"
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              v-model="storageName"
              :rules="rules.fieldRules"
              color="#007180"
              label="Storage title"
              placeholder="Hangar in Almaty..."
              required
            />
          </v-col>

          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              v-model="sotrageSize"
              :rules="rules.numberRules"
              color="#007180"
              label="Size м²"
              placeholder="45"
              required
            />
          </v-col>

          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              v-model="storagePrice"
              :rules="rules.numberRules"
              color="#007180"
              label="Price per ₸/м²"
              placeholder="4650"
              required
            />
          </v-col>

          <v-col
            cols="12"
            sm="3"
          >
            <v-text-field
              v-model="availableTime"
              :rules="rules.fieldRules"
              color="#007180"
              label="Availability for time"
              placeholder="12:00-18:30 or 24/7"
              required
            />
          </v-col>

          <v-col 
          cols="12"
          sm="6"
          >
            <v-textarea
              v-model="description"
              color="#007180"
              required
            >
              <template v-slot:label>
                <div>
                  Description
                </div>
              </template>
            </v-textarea>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-select
              v-model="form.typeOfStorage"
              :items="typeOfStorage"
              :rules="rules.storageRules"
              color="#007180"
              label="Type of storage"
              placeholder="Select..."
              required
              class="storageType"
            ></v-select>

        
          <v-file-input
            chips
            multiple
            prepend-icon="mdi-camera"
            filled
            label="Select an image (png, jpg, jpeg)"
            color="#007180"
            :rules="rules.fieldRules"
          ></v-file-input>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="phoneNumber"
              :rules="rules.numberRules"
              color="#007180"
              label="Phone number"
              placeholder="87025496788"
              required
            />
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="email"
              :rules="rules.emailRules"
              color="#007180"
              label="E-mail"
              placeholder="example@mail.com"
              required
            />

          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="coordinatesTitle">
              <h1 class="">Your coordinates</h1>
              <p><strong>Latitude:</strong> {{ myCoordinates.lat }}, <strong>Longitude:</strong> {{ myCoordinates.lng }}</p>
            </div>

            <div class="coordinatesTitle">
              <h1 class="">Map coordinates</h1>
              <p><strong>Latitude:</strong> {{ mapCoordinates.lat }}, <strong>Longitude:</strong> {{ mapCoordinates.lng }}</p>
            </div>
          </div>
            <GmapMap
            :center="myCoordinates"
            :zoom="zoom"
            style="width:640px; height: 360px;"
            ref="mapRef"
        ></GmapMap>
          </v-col>

          <v-col cols="12">
            <v-checkbox
              v-model="form.terms"
              color="#007180"
            >
              <template v-slot:label>
                <div @click.stop="">
                  Do you accept the
                  <a
                    href="#"
                    @click.prevent="terms = true"
                  >terms</a>
                  and
                  <a
                    href="#"
                    @click.prevent="conditions = true"
                  >conditions?</a>
                </div>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn
          text
          @click="resetForm"
          color="error"
        >
          Reset
        </v-btn>
        <v-spacer></v-spacer>
        <!--  -->
        <v-btn      
          text
          color="primary"
          :disabled="!formIsValid"
          type="submit"
          @click.native="sendData"   
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog
      v-model="terms"
      width="70%"
    >
      <v-card>
        <v-card-title class="title">
          Terms
        </v-card-title>
        <v-card-text
          v-for="n in 5"
          :key="n"
        >
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color=""
            @click="terms = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="conditions"
      width="70%"
    >
      <v-card>
        <v-card-title class="title">
          Conditions
        </v-card-title>
        <v-card-text
          v-for="n in 5"
          :key="n"
        >
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="#007180"
            @click="conditions = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>

export default {
  data () {
    const defaultForm = Object.freeze({
      first: '',
      last: '',
      bio: '',
      favoriteAnimal: '',
      size: null,
      terms: false,
      formIsValid: true,
      })

  return {
    form: Object.assign({}, defaultForm),
    map: null,
    myCoordinates: {
                lat: 0,
                lng: 0
            },
            zoom: 16,
    rules: {
      fieldRules: 
      [
        val => (val || '').length > 0 || 'This field is required'
      ],
      emailRules: 
      [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      numberRules:
      [
        v => Number.isInteger(Number(v)) || "The value must be an integer number",
      ]
    },
    typeOfStorage: ['Hangar', 'Container', 'Garage', 'House', 'Flat'],
    conditions: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
    snackbar: false,
    terms: false,
    defaultForm,
    storageName: "",
    storagePrice: "",
    sotrageSize: "",
    availableTime: "",
    description: "",
    phoneNumber: "",
    email: "",
    }
  },

    computed: {
      mapCoordinates() {
        if(!this.map) {
          return {
            lat: 0,
            lng: 0
          };
        }
        return {
          lat: this.map.getCenter().lat().toFixed(4),
          lng: this.map.getCenter().lng().toFixed(4)
        }
      }
    },
    created() {
        // getting user coordinates from browser request...
        
        if (localStorage.center) {
          this.myCoordinates = JSON.parse(localStorage.center);
        } else {
          this.$getLocation({})
            .then(coordinates => {
                this.myCoordinates = coordinates;
            })
            .catch(error => alert(error));
        }

        if (localStorage.zoom) {
          this.zoom = parseInt(localStorage.zoom);
        }
    },

    mounted() {
      //adding map to the data object
      this.$refs.mapRef.$mapPromise.then(map => this.map = map);
    },

    methods: {

      handleDrag() {
        //getting center and zoom level, store in localstorage
        let center = {
          lat: this.map.getCenter().lat(),
          lng: this.map.getCenter().lng()
        };

        let zoom = this.map.getZoom();
        localStorage.center = JSON.stringify(center);
        localStorage.zoom = zoom;
      },
      
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      },
      sendData: async function () {
      // console.log("TESST")
      var storage = window.localStorage
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer "+storage.getItem("token")

        },
        body: JSON.stringify({ 
          storageName: this.storageName,
          storageDescription: this.description,
          storageImage: "https://mod-b.ru/upload/modulnyj%20ofis%20%20(36).jpg",
          storageLatitude: this.myCoordinates.lat,
          storageLongitude: this.myCoordinates.lng,
          storageSize: this.sotrageSize,
          storagePrice: this.storagePrice,
          storageAvailableTime: this.availableTime,
        })
      };
        const res = await fetch (
          "http://localhost:8080/storage/newStorage", requestOptions
        );
          const post = await res.json();
          this.post = post
    }
  },
}
</script>

<style lang="css" scoped>
.storageType {
  margin-bottom: 30px;
}

.coordinatesTitle h1 {
  color: #424242;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
}

</style>