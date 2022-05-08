<template>
  <div class="create_point_popup_root">
      <div class="create_point_popup">
        <div class="create_point_popup__header popup_header">
          NEW POINT
        </div>
        <div class="create_point_popup__form popup_form">
          <div class="create_point_popup__fields">
              <div class="create_point_popup__fields__name">
                <input type="text" placeholder="Name" class="create_point_popup__fields__name_name popup_field">
              </div>
              <div class="create_point_popup__fields__coordinates">
                  <input type="text" placeholder="X" class="create_point_popup__fields__coordinates_x point_coord_field">
                  <input type="text" placeholder="Y" class="create_point_popup__fields__coordinates_y point_coord_field">
              </div>
              <div class="create_point_popup__fields__button">
                <input type="submit" value="Create" class="create_point_popup__fields__button cp popup_button">
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "CreatePointPopup",
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>

<style>

</style>