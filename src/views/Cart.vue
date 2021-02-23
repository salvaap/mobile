<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>Canasta de Compra</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <p>lorem ipsum dolor sit amed</p>
            <div class="ion-padding-vertical ion-margin-vertical">&nbsp;</div>
        </ion-content>
    </ion-page>
</template>

<script>
//import { IonSlides, IonSlide, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonContent, IonHeader, IonToolbar } from '@ionic/vue';
//import { useRoute } from 'vue-router';
//import { homeOutline, homeSharp, cubeOutline, cubeSharp, personOutline, personSharp } from 'ionicons/icons';
//import ProductService from '../services/products';

export default defineComponent({
  name: 'Cart',
  components: {
      /*IonSlides,
      IonSlide,
      IonGrid,
      IonRow,
      IonCol*/
      IonContent, IonHeader, IonToolbar
  },
  setup() {
    return {
    }
  }
});
</script>

<style scoped></style>