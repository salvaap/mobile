<template>
  <IonApp>
    <ion-router-outlet id="main-application"></ion-router-outlet>
  </IonApp>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { basket } from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    return {
      basket,
    };
  },
  mounted() {
    //
  }
});
</script>

<style scoped>
 /** **/
</style>