<template>
  <yandex-map
    :settings="settings"
    :coords="[54.718101, 20.501089]"
    :zoom="16"
    style="width: 100%; height: 100%;"
  >
    <ymap-marker
      :marker-id="0"
      :coords="[54.718101, 20.501089]"
      :balloon="{
        header: 'МАКДОНАЛЬДС!!!',
        body: 'Бегом сюда!',
        footer: 'Театральная ул., 30, Калининград, Россия',
      }"
    />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  name: "MapYandex",
  components: { yandexMap, ymapMarker },
  data() {
    return {
      settings: {
        apiKey: "33278523-e4c4-40b1-bf5e-422af9e62de4",
        lang: "ru_RU",
        coordorder: "latlong",
        version: "2.1",
      },
    };
  },
};
</script>
