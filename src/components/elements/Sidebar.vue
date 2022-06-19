<template>
  <nav id="sidebar" class="img animated slideInLeft">
    <div class="p-4">
      <h1>
        <a class="logo"
          >Rundit <span>Investment statistics</span></a
        >
      </h1>

      <ul class="list-unstyled components mb-5">
        <router-link tag="li" active-class="active" exact to="/investment/list">
          <a><span class="fa fa-list me-3"></span> Investment List</a>
        </router-link>
        <router-link tag="li"  active-class="active"  exact  to="/investment/summary">
          <a><span class="fa fa-area-chart me-3"></span> Investment Summary</a>
        </router-link>
      </ul>
      <div class="footer">
        <p>
          This template is made by
          <a
            aria-hidden="true"
            href="https://github.com/murad-narimanli"
            target="_blank"
            >Murad Narimanli</a
          >
        </p>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Sidebar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#sidebar {
  background: #121f2c;
  min-width: 270px;
  max-width: 270px;
  color: #fff;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  position: relative;
  z-index: 0;
}
#sidebar:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  z-index: -1;
}

#sidebar h1 {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
}
#sidebar h1 .logo {
  color: #fff;
}
#sidebar h1 .logo span {
  font-size: 13px;
  color: #fff;
  display: block;
}

#sidebar ul li {
  font-size: 16px;
}
#sidebar ul li a {
  padding: 10px 0;
  transition: 0.2s ease-in-out;
  display: block;
  color: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
#sidebar ul li a span {
  color: #fff;
}
#sidebar ul li a:hover {
  transition: 0.2s ease-in-out;
  color: #fff;
}
#sidebar ul li.active > a {
  background: transparent;
  transition: 0.2s ease-in-out;
  color: #fff;
}
@media (max-width: 991.98px) {
  #sidebar {
    min-width: 180px;
    max-width: 180px;
  }
}

.footer {
  position: absolute;
  bottom: 20px;
  padding-right: 20px;
  p {
    color: rgba(255, 255, 255, 0.5);
  }
  a {
    color: white;
  }
}
</style>
