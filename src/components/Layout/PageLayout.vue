<template>
  <div class="animated zoomIn" id="content">
    <!-- header -->
    <Header :name="name" />
    <!-- header -->

    <div class="p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Layout/Header.vue";
@Component({
   components:{
     Header
   }
})
export default class PageLayout extends Vue {
  @Prop(String) readonly name: string | undefined
}

</script>

<style lang="scss" scoped>
  #content {
    background: #E7EEF2;
    width: 100%;
    padding: 0;
    min-height: 100vh;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
</style>