<template>
  <div>
    <img src="@/assets/daehyunLogo.png" alt="daehyun Logo" height="50px" />

    <ul>
      <li v-for="menuList in menuLists" :key="menuList.id">
        <router-link :to="menuList.path">
          {{ menuList.pageName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        { id: 0, pageName: "HOME", path: "/" },
        { id: 1, pageName: "PRODUCT", path: "/product" },
        { id: 2, pageName: "CONTACT US", path: "/contactus" },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  margin: 20px;
  display: inline-flex;
}
</style>
