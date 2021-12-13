<template>
    <div class="root_points-list">
        <div class="points-list">
            <div class="points-list__header">
                <div class="points-list__header_title">My points</div>
                <div class="points__header__btns flex_nowrap cp">
                    <div class="points__header__btns__interact flex_nowrap">
                        <div class="points__header__btns__interact_text points__header__btn_txt">Interact</div>
                        <img src="../assets/img/ico/play.svg" alt="" class="points__header__btns_interact-icon points__header__btn_ico">
                    </div>
                    <div class="points__header__btns__create flex_nowrap cp">
                        <div class="points__header__btns__interact_text points__header__btn_txt">Create a point</div>
                        <img src="../assets/img/ico/add.svg" alt="" class="points__header__btns_add-icon points__header__btn_ico">
                    </div>
                </div>
            </div>
            <div class="points-list__body">
                <point-component/>
            </div>
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