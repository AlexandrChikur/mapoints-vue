<template>
    <div class="root_header">
        <div class="header">
            <div class="header__title block_header_font_size">
                <div class="header__title_name">{{ this.$constants.TITLE }}</div>
                <div class="header__title_version">v.{{ this.$constants.VERSION }}</div>
            </div>
            <div class="header__user" v-if="temp.loggedIn">
                <div class="header__user_name">{{ temp.uName }}</div>
                <img src="../assets/img/ico/logout.svg" class="header__user__logout_icon cp">
            </div>
            <div class="header__auth" v-else>
                <ul>
                    <li><a href="#">SIGN IN</a></li>
                    <li><a href="#">SIGN UP</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            temp: { // temporary object
                uName: "Nickey L.",
                loggedIn: true,
            }
        }
    },
    methods: {

    },
}
</script>

<style scoped>


</style>