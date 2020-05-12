<template>
  <div>
    <img src="@/assets/daehyunLogo.png" alt="daehyun Logo" height="100px" />

    <ul>
      <li v-for="menuList in menuLists" :key="menuList.id">{{ menuList }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuLists: ["HOME", "PRODUCT", "CONTACT US"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
