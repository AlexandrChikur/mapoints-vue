<template>
  <div id="app">
    <header-component/>
    <points-list-component/>
    <points-component/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import PointsComponent from './components/PointsComponent'
import PointsListComponent from './components/PointsListComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PointsComponent,
    PointsListComponent,
  }
}
</script>

<style>

</style>
