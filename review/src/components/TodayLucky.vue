<template>
  <div>
    <h5>{{propsLuck.luck}}</h5>
    <button @click="clickLuck(propsLuck.star)">{{propsLuck.star}}</button>
  </div>
</template>

<script>
export default {
  props: {
    propsLuck: Object
  },
  methods: {
    clickLuck: function(luck) {
      const targetURL = `https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=${luck}`;
      console.log(targetURL);
      window.location.href = targetURL;
    }
  }
};
</script>

<style>
</style>