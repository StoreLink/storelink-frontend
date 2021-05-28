<template>
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Your profile successfully updated!</span>
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
            sm="12"
          >
            <v-text-field
              v-model="storageName"
              :rules="rules.fieldRules"
              color="#007180"
              label="User Name"
              placeholder="Ivan"
              required
            />
          </v-col>

          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
              v-model="storageName"
              :rules="rules.fieldRules"
              color="#007180"
              label="User Surname"
              placeholder="Ivanov"
              required
            />
          </v-col>

          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
              v-model="sotrageSize"
              :rules="rules.numberRules"
              color="#007180"
              label="NIN"
              placeholder="990908300269"
              required
            />
          </v-col>

          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
              v-model="storagePrice"
              :rules="rules.numberRules"
              color="#007180"
              label="age"
              placeholder="4650"
              required
            />
          </v-col>

          <v-col
            cols="12"
            sm="12"
          >
            <v-text-field
              v-model="availableTime"
              :rules="rules.fieldRules"
              color="#007180"
              label="Payment card"
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
          </v-col>


          <v-col
            cols="12"
            sm="12"
          >
            <v-select
              v-model="form.typeOfStorage"
              :items="typeOfStorage"
              :rules="rules.storageRules"
              color="#007180"
              label="Gender"
              placeholder="Select a gender"
              required
              class="storageType"
            ></v-select>

        
          <v-file-input
            chips
            multiple
            prepend-icon="mdi-camera"
            filled
            label="Select an avatar (png, jpg, jpeg)"
            color="#007180"
            :rules="rules.fieldRules"
          ></v-file-input>
          </v-col>

          <v-col
            cols="12"
            sm="12"
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
            sm="12"
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
    typeOfStorage: ['Female', 'Male'],
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

    methods: {

      
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
      var localStorage = window.localStorage
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer "+localStorage.getItem("token")

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