<template>
<ion-page>
    <ion-content :fullscreen="true">
        <div id="container">
            <ion-img alt="Salva App" style="margin: 40px auto 0 auto; max-width: 100%; width: 200px" src="/assets/images/logo.png"></ion-img>
            <ion-card style="margin-top: 80px;">
                <ion-card-header>
                    <ion-card-title style="text-align: center;">Ingresar</ion-card-title>
                </ion-card-header>

                <ion-item>
                    <ion-label position="stacked">Correo Electrónico:</ion-label>
                    <ion-input type="text" placeholder=""></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Contraseña:</ion-label>
                    <ion-input type="password" placeholder=""></ion-input>
                </ion-item>
                <ion-card-content>
                    <ion-button expand="block" color="primary">Iniciar Sesión</ion-button>
                </ion-card-content>
            </ion-card>
        </div>
    </ion-content>
</ion-page>
</template>

<script>
import { IonContent, IonPage, IonCard, IonImg } from '@ionic/vue';

export default {
    name: 'Login',
    components: { IonContent, IonPage, IonCard, IonImg
    },
    setup() {
        return { }
    }
}
</script>

<style scoped></style>
