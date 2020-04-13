<template>
  <div class="heading">{{title}}</div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    updateLang(e) {
      console.log(e);
    }
  }
};
</script>

