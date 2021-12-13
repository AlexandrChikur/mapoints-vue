<template>
    <div class="root_point">
        <div class="point" :style="{backgroundColor: randomColor()}" @click="showPointDetail()">
            <p class="point__letter">F</p>
            <div class="point__description" :class="{point__description_visible: showDescription}">
                <div class="point__description_author">Bane Jhones</div>
                <div class="point__description_name" :title="getPointName()">{{ getPointName() }}</div>
                <div class="point__description_points">
                    <div class="point__description_point">
                        <div class="point__description_points_coord_name">X</div>
                        <div class="point__description_point_coord_value">3</div>
                    </div>
                    <div class="point__description_point">
                        <div class="point__description_points_coord_name">Y</div>
                        <div class="point__description_point_coord_value"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PointComponent',
    data() {
        return {
            pointBgColors: [
                "#8560BF", "#521CA6", "#9856FF", "#B280FF", "#C6A2FF"
            ],
            showDescription: false,
            pointName: "sdfsdfsdfsdfsdddddddddddddssdfdf"
        }
    },
    methods: {
        randomColor(){
            const random = Math.floor(Math.random() * this.pointBgColors.length);
            return this.pointBgColors[random];
        },
        showPointDetail(){
            this.showDescription = !this.showDescription;
        },
        getPointName(){
            return this.pointName
        }
    }
}
</script>

<style scoped>


</style>