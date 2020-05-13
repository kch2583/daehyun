<template>
  <div>
    <img src="@/assets/daehyunLogo.png" alt="daehyun Logo" height="100px" />

    <ul>
      <li v-for="menuList in menuLists" :key="menuList.id">{{ menuList.pageName }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        { id: 0, pageName: "HOME" },
        { id: 1, pageName: "PRODUCT" },
        { id: 2, pageName: "CONTACT US" }
      ]
    };
  }
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
