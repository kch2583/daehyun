<template>
  <v-container>
    <v-row class="justify-center">
      <img src="@/assets/daehyunLogo.png" alt="daehyun Logo" width="20%" />
    </v-row>
    <v-row>
      <v-tabs centered>
        <v-tab v-for="menuList in menuLists" :key="menuList.id">
          <router-link :to="menuList.path">{{ menuList.pageName }}</router-link>
        </v-tab>
      </v-tabs>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        { id: 0, pageName: "HOME", path: "/" },
        { id: 1, pageName: "PRODUCT", path: "/product" },
        { id: 2, pageName: "CONTACT US", path: "/contactus" }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
</style>
