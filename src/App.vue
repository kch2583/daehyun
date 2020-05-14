<template>
  <div id="app">
    <logoMenu></logoMenu>

    <router-view></router-view>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import logoMenu from "./components/pageDetails/logoMenu";
import mainFooter from "./components/pageDetails/mainFooter";

export default {
  name: "App",

  components: {
    logoMenu,
    mainFooter
  },

  data: () => ({
    //
  })
};
</script>
<style>
#app {
  text-align: center;
}
</style>
