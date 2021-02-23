<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-buttons slot="primary">
                    <ion-button>
                        <ion-icon slot="icon-only" :ios="bagHandle" :md="bagHandle"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>SalvaApp</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-searchbar placeholder="Busca tus productos..."></ion-searchbar>
            <div>
                <ion-slides pager="true" :options="slideOpts">
                    <ion-slide>
                        <div style="padding: 10px 0; background-color: #2a2f3d;">
                            <ion-grid>
                                <ion-row>
                                    <ion-col size="3">
                                        <div style="padding-top: 20px !important;">
                                            <img src="/assets/images/product.jpg" style="max-width: 100%;" alt="Producto">
                                        </div>
                                    </ion-col>
                                    <ion-col size="9">
                                        <div style="text-align: left; padding-bottom: 20px !important;">
                                            <h5 style="color: white">Producto Destacado 1</h5>
                                            <small style="color: white;">US$ 35</small>
                                            <div class="padding-bottom: 20px;">
                                                <ion-button size="small" color="light"><strong>+</strong>&nbsp;&nbsp;Carrito</ion-button>
                                            </div>
                                        </div>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div style="padding: 10px 0; background-color: #2a2f3d;">
                            <ion-grid>
                                <ion-row>
                                    <ion-col size="3">
                                        <div style="padding-top: 20px !important;">
                                            <img src="/assets/images/product.jpg" style="max-width: 100%;" alt="Producto">
                                        </div>
                                    </ion-col>
                                    <ion-col size="9">
                                        <div style="text-align: left; padding-bottom: 20px !important;">
                                            <h5 style="color: white">Producto Destacado 2</h5>
                                            <small style="color: white;">US$ 30</small>
                                            <div class="padding-bottom: 20px;">
                                                <ion-button size="small" color="light"><strong>+</strong>&nbsp;&nbsp;Carrito</ion-button>
                                            </div>
                                        </div>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div style="padding: 10px 0; background-color: #2a2f3d;">
                            <ion-grid>
                                <ion-row>
                                    <ion-col size="3">
                                        <div style="padding-top: 20px !important;">
                                            <img src="/assets/images/product.jpg" style="max-width: 100%;" alt="Producto">
                                        </div>
                                    </ion-col>
                                    <ion-col size="9">
                                        <div style="text-align: left; padding-bottom: 20px !important;">
                                            <h5 style="color: white">Producto Destacado 3</h5>
                                            <small style="color: white;">US$ 40</small>
                                            <div class="padding-bottom: 20px;">
                                                <ion-button size="small" color="light"><strong>+</strong>&nbsp;&nbsp;Carrito</ion-button>
                                            </div>
                                        </div>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </div>
                    </ion-slide>
                </ion-slides>
            </div>
            <ion-card v-for="item in products" :key="item.id">
                    <ion-grid class="ion-no-padding">
                        <ion-row>
                            <ion-col class="ion-no-padding" size="4">
                                <ion-img :src="item.featured_image"></ion-img>
                            </ion-col>
                            <ion-col size="8">
                                <ion-card-header>
                                    <ion-card-title color="secondary">{{item.name}}</ion-card-title>
                                    <ion-card-subtitle>US$ {{item.variants[0].price}}</ion-card-subtitle>
                                </ion-card-header>
                                <ion-card-content>
                                    <p>{{item.variants[0].amount}} disponibles</p>
                                    <ion-button size="small" color="tertiary"><strong>+</strong>&nbsp;&nbsp;Carrito</ion-button>
                                </ion-card-content>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonSlides, IonSlide, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/vue';
import ProductService from '../services/products';
import { basket, bagHandle } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonContent,
      IonSlides,
      IonSlide,
      IonGrid,
      IonRow,
      IonCol,
      IonIcon,
  },
  setup() {
    const ps = new ProductService();
    const products = ref([]);
    ps.allProducts()
        .then(data => {
            products.value = data.items;
        })
        .catch(e => {
            console.log(e);
        });
    return { 
      ps,
      basket,
      products,
      bagHandle,
    }
  }
});
</script>

<style scoped></style>