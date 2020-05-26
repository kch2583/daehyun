<template>
  <div id="footer">
    <v-footer padless>
      <v-row>
        <v-col cols="4" xs="6">
          <v-card flat class="transparent">
            <v-card-title>회사정보</v-card-title>
            <v-card-text>hisoeifl fje oif oivkwfoi jsoijf eo</v-card-text>
          </v-card>
        </v-col>

        <v-col cols="4" xs="6">
          <v-card flat class="transparent">
            <v-card-title>은행정보</v-card-title>
            <v-card-text>hisoeifl fje oif oivkwfoi jsoijf eo</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" xs="6">
          <v-card flat class="transparent">
            <v-card-title>고객센터</v-card-title>
            <v-card-text>hisoeifl fje oif oivkwfoi jsoijf eo</v-card-text>
          </v-card>
        </v-col>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-col>
      </v-row>
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

// <style lang="scss" scoped>
.v-card__title {
  font-size: 18px;
}
.v-card__text {
  // font-size: 0.1rem;
  font-size: 14px;
}

@media (min-width: 200px) {
  .v-card__title {
    font-size: 70% !important;
  }
  .v-card__text {
    font-size: 70% !important;
  }
}

@media (min-width: 500px) {
  .v-card__title {
    font-size: 80% !important;
  }
  .v-card__text {
    font-size: 80% !important;
  }
}

@media (min-width: 700px) {
  .v-card__title {
    font-size: 50% !important;
  }
  .v-card__text {
    font-size: 50% !important;
  }
}

@media (min-width: 1200px) {
  .v-card__title {
    font-size: 50% !important;
  }
  .v-card__text {
    font-size: 50% !important;
  }
}
</style>
