<template>
  <div id="app">
    <header-component/>
    <points-component/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import PointsComponent from './components/PointsComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PointsComponent,
  }
}
</script>

<style>

</style>
