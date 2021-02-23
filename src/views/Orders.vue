<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>Compras</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <p>Listado de compras</p>
            <p>Listado de compras</p>
            <p>Listado de compras</p>
            <p>Listado de compras</p>
            <p>Listado de compras</p>
            <div class="ion-padding-vertical ion-margin-vertical">&nbsp;</div>
        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonButtons, IonMenuButton, IonTitle, IonContent, IonHeader, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Orders',
    components: {
        IonPage, IonButtons, IonMenuButton, IonTitle, IonContent, IonHeader, IonToolbar
    },
    setup() {
        return {};
    }
});
</script>