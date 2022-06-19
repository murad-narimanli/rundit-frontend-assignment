<template>
  <div>
    <i
      v-b-tooltip.hover
      title="Delete"
      :id="'popover-reactive-' + id"
      class="fa mx-1 fa-trash-o"
    />
    <b-popover
      :target="'popover-reactive-' + id"
      triggers="click"
      :show.sync="popoverShow"
      placement="bottom-left"
      container="my-container"
      ref="popover"
    >
      <div>
        <p>Are you sure for deleting ?</p>
        <div class="d-flex w-100 justify-content-end">
          <b-button
            class="me-2"
            @click="onClose"
            size="sm"
            variant="outline-danger"
            >Cancel</b-button
          >
          <b-button @click="onOk" size="sm" variant="outline-primary"
            >Ok</b-button
          >
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "DeleteButton",
  props: {
    id: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      popoverShow: false,
    };
  },
  methods: {
    onClose() {
      this.popoverShow = false;
    },
    onOk() {
      this.onClose();
      this.$emit("onOk");
      // Https.deleteRequest(`/${aRoutes.products}/${this.id}`).then((res) => {
      //       console.log(res)
      //       this.showSuccessMsg({message: 'Deleted successfully'})
      //     }
      // ).catch((err) => {
      //   console.log(err)
      //   this.showErrorMsg()
      // })
    },
  },
});
</script>

<style scoped></style>
