<template>
    <div class="root_point">
        <div class="point" :style="{backgroundColor: randomColor()}" @click="showPointDetail()">
            <p class="point__letter">{{ getPointLetter() }}</p>
            <div class="point__description" :class="{point__description_visible: showDescription}">
                <div class="point__description_author">{{ pointAuthorName }}</div>
                <div class="point__description_name" :title="pointName">{{ pointName }}</div>
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
            pointName: "Moscow",
            pointAuthorName: "Billy Jean",
            showDescription: false
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
        getPointLetter(){
            return this.getPointName().slice(0,1).toUpperCase()
        }
    }
}
</script>

<style scoped>


</style>