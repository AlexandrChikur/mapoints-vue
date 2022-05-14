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

                <div v-if="points.length > 0" class="">
                    <div v-for="(point, idx) in points" :key="idx">
                        <div class="points__body__point" @change="onEditorChange($event)">
                            <point-component 
                                :pointId="point.id"
                                :pointName="point.name" 
                                :authorId="point.user_id"
                                :authorName="point.author_name"
                                :coordX="point.x" 
                                :coordY="point.y"
                            />
                            <div class="points__body__point__name" :title="point.name">
                                    {{ point.name }}
                            </div>
                            <div class="points__body__point__coord flex_nowrap">
                                <div class="points__body__point__coord_name">X</div>
                                <div class="points__body__point__coord_value point_coord_value">{{ point.x }}</div>
                            </div>
                            <div class="points__body__point__coord flex_nowrap">
                                <div class="points__body__point__coord_name">Y</div>
                                <div class="points__body__point__coord_value point_coord_value">{{ point.y }}</div>
                            </div>
                            <div class="points__body__point__author">{{ point.author_name }}</div>
                        </div>
                    </div>
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
            points: []
        }
    },
    created() {
        this.$load(async() => {
            const data = (await this.$api.points.pointsList()).data
            this.points = data.results
        })
    },
    methods: {
        deletePoint(pointId) {
            let i = this.points.map(item => item.id).indexOf(pointId)
            this.points.splice(i, 1) 
        }
    },
}
</script>

<style scoped>


</style>