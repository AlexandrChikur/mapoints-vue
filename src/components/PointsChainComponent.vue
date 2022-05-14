<template>
  <div class = 'points-chain-root'>
    <div class="points-chain_block">
        <div class="points-chain_block__help">Shift + MButton to scroll</div>
        <div class="points-chain_block__list">
            <div class="points-chain_block__node" v-for="(point, idx) in pointList" :key="idx">
                <point-component 
                    :pointId="point.id"
                    :pointName="point.name" 
                    :authorId="point.user_id"
                    :authorName="point.author_name"
                    :coordX="point.x" 
                    :coordY="point.y"
                />
            </div>
        </div>
        <div class="points-chain_block__total"> 
            {{ totalDist }} c.u.
        </div>
    </div>
  </div>
</template>

<script>


import PointComponent from './PointComponent.vue'
export default {
  components: { PointComponent },
    name: 'PointsChainComponent',
    props: ["pointList", "totalDist"],
    data() {
        return {}
    },
    mounted() {},
}
</script>

<style>

</style>