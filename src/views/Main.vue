<template>
  <IonSplitPane content-id="main-content">
    <ion-menu content-id="main-content" type="overlay">
      <ion-content>
        <ion-img alt="Salva App" style="margin: 0 auto; max-width: 100%; width: 100px" src="/assets/images/logo.png"></ion-img>
        <ion-list id="inbox-list">
          <ion-list-header>SalvaApp</ion-list-header>
          <ion-note>Hola, Guillermo</ion-note>

          <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
            <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
              <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
              <ion-label>{{ p.title }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>

        <ion-list id="labels-list">
          <ion-list-header>Categorías</ion-list-header>

          <ion-item v-for="(label, index) in labels" lines="none" :key="index">
            <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
            <ion-label>{{ label }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </IonSplitPane>
</template>

<script>
import { IonContent, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane, IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/vue';
import { homeOutline, homeSharp, cubeOutline, cubeSharp, personOutline, personSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Main',
  components: {
    IonContent, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane, IonIcon, IonItem, IonLabel, IonList, IonListHeader
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: 'Inicio',
        url: '/main',
        iosIcon: homeOutline,
        mdIcon: homeSharp
      },
      {
        title: 'Pedidos',
        url: '/main/orders',
        iosIcon: cubeOutline,
        mdIcon: cubeSharp
      },
      {
        title: 'Cuenta',
        url: '/main/account',
        iosIcon: personOutline,
        mdIcon: personSharp
      }
    ];
    const labels = ['Astículos Escolares y Oficina', 'Ejercicio y Salud', 'Electrónicos', 'Entretenimiento', 'Comida y Eventos', 'Hogar y Ferretería', 'Mascotas', 'Moda', 'Hobbies', 'Repuestos'];
    
    const path = window.location.pathname.split('main/')[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
    const route = useRoute();
    
    return {
      selectedIndex,
      appPages, 
      labels,
      homeOutline, 
      homeSharp, 
      cubeOutline, 
      cubeSharp, 
      personOutline, 
      personSharp,
      bookmarkOutline,
      bookmarkSharp,
      isSelected: (url) => url === route.path ? 'selected' : ''
    }
  }
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>