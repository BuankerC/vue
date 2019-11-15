<template>
  <div id="app">
    <h1>seon</h1>
    <!-- v-model은 양방향 바인딩이다. -->
    <TodayLucky v-for="lucky in luckys" :key="lucky" :propsLuck="lucky" />
  </div>
</template>

<script>
import TodayLucky from "./components/TodayLucky";
export default {
  name: "app",

  // 다른데서 접근 안하길 원함
  components: {
    TodayLucky
  },

  //함수로 선언해서 다른 곳에서 가져다쓸수 있음
  data: function() {
    return {
      luckys: [
        {
          star: "물병자리",
          luck:
            "오늘 괜한 조급함으로 일을 그르치게 될 수도 있으니 급할수록 돌아."
        },
        {
          star: "물고기자리",
          luck:
            "전반적으로 그리 좋지 않은 상황에 위치해 있군요. 특히 금전운이 .."
        },
        {
          star: "사수 자리",
          luck:
            "능력 이상의 것이 이루어지거나 이루어질 조짐이 보이는 하루가 되.."
        },
        {
          star: "황소 자리",
          luck:
            "오늘 할 일을 내일로 미루고 또 내일 할 일을 모레로 미루지 마세요.."
        }
      ]
    };
  },
  computed: {
    // 변수가 바뀔때만 computed 함수실행
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
