<template>
  <nav class="navbar text-white fw-bold animated fadeIn">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">
        {{ name }}
      </span>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
  @Prop(String) readonly name: string | undefined;
}
</script>

<style lang="scss" scoped>
.navbar {
  background: #0b897e;
  font-size: 30px;
  padding: 20px 10px;
}
</style>
