<template>
  <v-container>
    <v-row class="justify-center">
      <img src="@/assets/daehyunLogo.png" alt="daehyun Logo" width="25%" />

      <v-tabs centered fixed-tabs background-color="transparent" hide-slider>
        <v-tab v-for="menuList in menuLists" :key="menuList.id" :to="menuList.path">
          <!-- <router-link :to="menuList.path">{{ menuList.pageName }}</router-link> -->
          {{ menuList.pageName }}
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

<style lang="scss" scoped>
</style>
