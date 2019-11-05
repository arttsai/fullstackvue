<template>
  <div id="app">
    <calendar-week />
    <calendar-entry />
  </div>
</template>

<script>
import { CalendarWeek } from "./components/CalendarWeek.vue";
import { CalendarEntry } from "./components/.vue";

export default {
  name: 'app',
  components: {
    CalendarWeek,
    CalendarEntry
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%
}
</style>

<style lang="scss" scoped>
 #app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}

</style>