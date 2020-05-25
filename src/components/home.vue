<template>
  <v-container id="home">
    <v-row class="text-center justify-center" id="homeMainImg">
      <v-img id="diaryImg" src="../assets/faux-leather-4.png" alt="daehyun main image" />

      <br />
      <v-col cols="12">
        <router-link to="/product">제품 보러 가기 -></router-link>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="4" v-for="(id, index) in homeDetails" :key="index">
        <div class="homeDetails">{{ id.title }}</div>
      </v-col>
      <v-col>
        fjwoiefjwiefj
        sfjoeis
        foeijfsk jwoief w
        efjwoif j
        <v-img id="diaryImg" src="../assets/diary.png" alt />
      </v-col>
    </v-row>
  </v-container>
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

<style lang="scss" scoped>
.homeDetails {
  display: inline;
}

a {
  text-decoration: none;
}
</style> 
