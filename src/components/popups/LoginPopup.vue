<template>
  <div class="login_popup_root">
      <div class="login_popup">
        <div class="login_popup__header popup_header">
          LOG IN
        </div>
        <div class="login_popup__form">
          <div class="login_popup__form__fields">
            <input type="text" placeholder="Login" class="login_popup__form__fields_login popup_field">
            <input type="password" placeholder="Password" class="login_popup__form__fields_password popup_field">
          </div>
          <div class="login_popup__form__button">
            <input type="submit" value="Go" class="login_popup__form__button_submit cp popup_button">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "LoginPopup",
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>

<style>

</style>