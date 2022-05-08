<template>
    <div class="root_route">
        <div class="route">
            
        </div>
    </div>
</template>

<script>
import PointComponent from './PointComponent.vue'
export default {
  components: { PointComponent },
    name: 'PointsComponent',
    data() {
        return {
            temp: { // temporary value
                pointsExists: true,
                pointTitle: "Lorem ipsum dolor sot"
            }
        }
    },
    methods: {

    },
}
</script>

<style scoped>


</style>