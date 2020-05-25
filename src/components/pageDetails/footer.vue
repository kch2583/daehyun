<template>
  <div id="footer">
    <v-footer padless dark>
      <v-col>
        <v-card>
          <v-card-text>회사정보</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>근무시간</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>은행정보</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>고객센터</v-card-text>
        </v-card>
      </v-col>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="css" scoped>
#footer {
  background: pink;
}
</style>