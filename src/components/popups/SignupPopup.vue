<template>
  <div class="signup_popup_root">
      <div class="signup_popup">
        <div class="signup_popup__header popup_header">
          SIGN UP
        </div>
        <div class="signup_popup__form">
          <div class="signup_popup__form__fields">
            <input type="text" placeholder="Login" class="signup_popup__form__fields_signup popup_field">
            <input type="password" placeholder="Password" class="signup_popup__form__fields_password popup_field">
            <input type="password" placeholder="Password Again" class="signup_popup__form__fields_password_again popup_field">
          </div>
          <div class="signup_popup__form__button">
            <input type="submit" value="Go" class="signup_popup__form__button_submit cp popup_button">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "SignupPopup",
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>

<style>

</style>