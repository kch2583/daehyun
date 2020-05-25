<template>
  <v-app>
    <v-container>
      <LogoMenu></LogoMenu>

      <router-view></router-view>
      <Footer></Footer>
    </v-container>
  </v-app>
</template>

<script>
import LogoMenu from "../src/components/pageDetails/logoMenu";
import Footer from "../src/components/pageDetails/footer";
export default {
  name: "App",

  components: { LogoMenu, Footer },

  data: () => ({
    //
  })
};
</script>
