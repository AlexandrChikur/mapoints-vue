<template>
    <div class="root_points">
        <div class="points">
            <div class="points__header">
                <div class="points__header_title block_header_font_size">Points</div>
                <div class="points__header__btns">
                    <div class="points__header__btns__findall flex_nowrap cp">
                        <input type="text" name="" id="" class="points__header__btns__findall_input" placeholder="Name, coord, author">
                        <img src="../assets/img/ico/search.svg" alt="Find by" class="points__header__btns_search-icon points__header__btn_ico">
                        <div class="points__header__btns__findall_text points__header__btn_txt">Search all</div>
                    </div>
                </div>
            </div>
            <div class="points__body">
                <div class="points__body__point" v-if="temp.pointsExists">
                    <point-component/>
                    <div class="points__body__point__name" :title="temp.pointTitle">
                            {{ temp.pointTitle }}
                    </div>
                    <div class="points__body__point__coord flex_nowrap">
                        <div class="points__body__point__coord_name">X</div>
                        <div class="points__body__point__coord_value point_coord_value">4322</div>
                    </div>
                    <div class="points__body__point__coord flex_nowrap">
                        <div class="points__body__point__coord_name">Y</div>
                        <div class="points__body__point__coord_value point_coord_value">3242</div>
                    </div>
                    <div class="points__body__point__author">John Doe</div>
                </div>
                <div class="points__body__nothing" v-else>
                    Nothing here yet :)
                </div>
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