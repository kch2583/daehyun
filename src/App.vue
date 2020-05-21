<template>
  <v-app>
    <v-container>
      <LogoMenu></LogoMenu>

      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import LogoMenu from "../src/components/pageDetails/logoMenu";
export default {
  name: "App",

  components: { LogoMenu },

  data: () => ({
    //
  })
};
</script>
