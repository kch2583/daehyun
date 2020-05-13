<template>
  <div id="app">
    <logoMenu></logoMenu>

    <router-view></router-view>
  </div>
</template>

<script>
import logoMenu from "./components/defaultPage/logoMenu";

export default {
  name: "App",

  components: {
    logoMenu,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  text-align: center;
}
</style>
