<template>
  <div class="animated fadeIn">
      
<h3>BARCODE READER : {{bcreader}}</h3>
  <div id = "barcode-scanner" >
<!--    
    <v-quagga 
    
    :onDetected="logIt" 
    :readerSize="readerSize" 
    :readerTypes="['upc_reader', 'code_128_reader', 'code_39_reader', 'code_39_vin_reader', 'ean_8_reader', 'ean_reader', 'upc_e_reader', 'codabar_reader']"
    >
    
    </v-quagga>
-->
    <StreamBarcodeReader
    @decode="onDecode"
   
></StreamBarcodeReader>
    
  </div>

  </div>
</template>


<script>
//import Vue from 'vue';
import { required } from "vuelidate/lib/validators";
import { API } from "@/shared/core";

//import StreamBarcodeReader  from "vue-barcode-reader";
//Vue.use(StreamBarcodeReader);

export default {
  name: "barcode",
  mounted() {},
  computed: {},
  data() {
    return {
      token: null,
      bcreader:"",
      data:[],
      form: {
        username: "",
        password: "",
        twofactor: "" ,
        lang: "th" ,
      },       
        options_lang: [
          { text: 'Thai', value: 'th' },
          { text: 'English', value: 'en' },
         // { text: 'หยุดชั่วคราว เฉพาะคน', value: 'C' }
        ],

        readerSize: {
        width: 640,
        height: 480
      },
      detecteds:[],
      unique_list: [],
      duplicate_lists_dup: [],
 


    };
  },
 
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
 
    },
     onDecode (result) {
    console.log(result)
  },
    logIt (result) {
      console.log( result);
      console.log( result.codeResult.code);
      
      //check_insert_unique(result.codeResult.code);
this.bcreader = result.codeResult.code;

     //check_insert_unique(obj.codeResult.code);
     
    },
    check_insert_unique(item){
  if(this.unique_list.includes(item)){
    if(this.duplicate_list.indexOf(item) == -1){
        this.duplicate_list.push(item)
    }
  } else {
    if(this.unique_list.indexOf(item) == -1){
        this.unique_list.push(item)
    }
  }
}

  }
};
 
 

 
 
 
</script>

<style>
#barcode-scanner video, canvas, quagga {
  width: 100%;
  height: auto;
}

#barcode-scanner video.drawingBuffer, canvas.drawingBuffer {
  display: none;
}
</style>