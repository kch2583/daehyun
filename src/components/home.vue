<template>
  <div id="home">
    <div id="homeMainImg">
      <img id="diaryImg" src="../assets/diary.png" alt="daehyun main image" width="80%" />
      <br />
      <router-link to="/product">제품 보러 가기 -></router-link>
    </div>

    <div class="homeDetails" v-for="(id, index) in homeDetails" :key="index">{{ id.title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeDetails: [
        { id: "0", title: "좋은 품질", deatils: "", iconImg: "" },
        { id: "1", title: "다양한 조합", deatils: "", iconImg: "" },
        { id: "2", title: "또뭐였지", deatils: "", iconImg: "" }
      ]
    };
  }
};
</script>

<style scoped>
#diaryImg {
  display: inline-block;
}
.homeDetails {
  display: inline-block;

  width: 33.3%;
}
</style>
