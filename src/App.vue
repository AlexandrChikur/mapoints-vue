<template>
  <div id="app">
    <header-component
        :loggedIn="loggedIn"
        :username="getUserName"
        :userId="getUserId"/>
    <points-list-component
        :loggedIn="loggedIn"
        :username="getUserName"
        :userId="getUserId"/>
    <points-component
        :loggedIn="loggedIn"
        :username="getUserName"
        :userId="getUserId"/>
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
  },
  computed: {
      loggedIn(){
        if(this.$store.getters.getUser){
          return JSON.parse(this.$store.getters.getUser).user.token
        }
        return null;
      },
      getUserName(){
        if(this.$store.getters.getUser){
          return JSON.parse(this.$store.getters.getUser).user.username
        }
        return null;
      },
      getUserId(){
        if(this.$store.getters.getUser){
          return JSON.parse(this.$store.getters.getUser).user.id
        }
        return null;
      }
  }
}
</script>

<style>

</style>
