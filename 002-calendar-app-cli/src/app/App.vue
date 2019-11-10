<template>
  <div id="app">
    <calendar-week></calendar-week>
    <CalendarEntry />
  </div>
</template>

<script lang="ts">
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue";

export default {
  name: 'app',
  components: {
    "calendar-week": CalendarWeek,
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