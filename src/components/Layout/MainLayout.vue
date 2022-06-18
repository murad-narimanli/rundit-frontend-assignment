<template>
  <div class="container-fluid px-0 d-flex align-items-stretch">
    <!--      sidebar-->
    <Sidebar/>
    <!--      sidebar-->

    <!-- Page Content  -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Sidebar from "@/components/Layout/Sidebar.vue";
@Component({
  components:{
    Sidebar
  }
})
export default class PageLayout extends Vue {

}

</script>

<style scoped>

</style>