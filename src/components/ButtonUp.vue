<template>
  <go-top
    :right="15"
    :bottom="15"
    :z-index="1000"
    :size="60"
    bg-color="#fff"
    fg-color="#8c8c8c"
    :max-width="319"
  ></go-top>
</template>

<script>
import GoTop from "@inotom/vue-go-top";
export default {
  name: "ButtonUp",
  components: {
    GoTop,
  },
};
</script>
