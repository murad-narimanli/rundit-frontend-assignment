<template>
  <div>
    <!-- header -->
    <Header :name="name" />
    <!-- header -->

    <div class="p-4">
      <div class="row animated zoomIn">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/elements/Header.vue";
@Component({
  components: {
    Header,
  },
})
export default class PageLayout extends Vue {
  @Prop(String) readonly name: string | undefined;
}
</script>

<style lang="scss" scoped></style>
