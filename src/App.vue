<template>
  <v-app id="desafio">
    <TopBar v-if="$route.name !== 'login'" />
    <v-main>
      <v-container>
        <BodyHeader v-if="$route.name !== 'login'" />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import TopBar from './components/TopBar.vue'
import BodyHeader from './components/BodyHeader.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    BodyHeader
  },

  data: () => ({
    //
  }),
};
</script>
