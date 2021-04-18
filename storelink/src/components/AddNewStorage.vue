<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="storageName"
            :rules="titleRules"
            required
            label="Storage title"
            color="#007180"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="storagePrice"
            label="Price"
            color="#007180"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="sotrageSize"
            label="Storage size (м²)"
            color="#007180"
          ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="availableTime"
            label="Available time"
            color="#007180"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="description"
            label="Description"
            color="#007180"
          ></v-text-field>
        </v-col>
      </v-row>

    <p>Type of storage:</p>
    <v-radio-group v-model="row" row>
      <v-radio label="Hangar" value="Hangar" class="radios" color="#007180"/>
      <v-radio label="Container" value="Container" class="radios" color="#007180"/>
      <v-radio label="Garage" value="Garage" class="radios" color="#007180"/>
      <v-radio label="House" value="House" class="radios" color="#007180"/>
      <v-radio label="Flat" value="Flat" class="radios" color="#007180"/>
    </v-radio-group>
      
    </v-container>

    <v-row>
      <v-col>
        <div>
          <v-file-input
            chips
            multiple
            label="Select an image (png, jpg, jpeg)"
            color="#007180"
          ></v-file-input>
        </div>
      </v-col>
    </v-row>

    <p>Select an address:</p>
    <v-card>
      <iframe   
        :src="'https://maps.google.com/maps?q=' + '&t=&z=15&ie=UTF8&iwloc=&output=embed'"
        allowfullscreen
        frameborder="0"
        height="450"
        style="border:0"
        width="100%"
      />
    </v-card>

  
    <v-row>
      <v-col>
        <div>
          <v-btn
          
            :loading="loading3"
            :disabled="loading3"
            color="blue-grey"
            class="ma-2 white--text"
            
            @click.native="sendData"
            
           >
            Submit
            <v-icon
              right
              dark
            >
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>

export default {
    data () {
      
      return {
        selected: ['John'],
        storageName: null,
        storagePrice: null,
        sotrageSize: null,
        availableTime: null,
        description: null,
      }
    },
    mounted() {
      
    },

    titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 10 || 'Title must be less than 10 characters',
      ],
    methods: {
    sendData: async function () {
      // console.log("TESST")
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          storageName: this.storageName,
          storageDescription: this.description,
          storageImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Room_Athens_Hilton.jpg/1200px-Room_Athens_Hilton.jpg",
          storageLatitude: 0.0,
          storageLongitude: 0.0,
          storageSize: this.sotrageSize,
          storagePrice: this.storagePrice,
          storageAvailableTime: this.availableTime


})
      };
        const res = await fetch (
          "http://localhost:8080/storage/newStorage", requestOptions
        );
          const post = await res.json();
          this.post = post
    }
  }
}

</script>

<style lang="css" scoped>

.radios {
  padding-right: 25px;
}
</style>