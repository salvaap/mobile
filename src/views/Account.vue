<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>Cuenta</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <p>Detalles de la cuenta</p>
            <p>Detalles de la cuenta</p>
            <p>Detalles de la cuenta</p>
            <p>Detalles de la cuenta</p>
            <p>Detalles de la cuenta</p>
            <div class="ion-padding-vertical ion-margin-vertical">&nbsp;</div>
        </ion-content>
    </ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import { IonContent, IonHeader, IonToolbar } from '@ionic/vue';

export default defineComponent({
    name: 'Account',
    components: {
        IonContent, IonHeader, IonToolbar
    },
    setup() {
        return {};
    }
});
</script>