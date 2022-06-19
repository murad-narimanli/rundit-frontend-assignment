<template>
  <div class="container-fluid px-0 d-flex align-items-stretch">
    <Sidebar />
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "@/components/elements/Sidebar.vue";
@Component({
  components: {
    Sidebar,
  },
})
export default class PageLayout extends Vue {}
</script>

<style scoped>
#content {
  width: 100%;
  padding: 0;
  min-height: 100vh;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
</style>
