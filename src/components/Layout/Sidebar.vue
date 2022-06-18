<template>
  <nav id="sidebar" class="img animated slideInLeft">
    <div class="p-4">
      <h1><a class="logo" href="">Statistics <span>Investment statistics</span></a></h1>
      <ul class="list-unstyled components mb-5">
        <li class="active">
          <a href="#"><span class="fa fa-home me-3"></span> Home</a>
        </li>
        <li>
          <a href="#"><span class="fa fa-user me-3"></span> About</a>
        </li>
      </ul>
      <div class="footer">
        <p>
          This template is made by <a aria-hidden="true" href="https://github.com/murad-narimanli" target="_blank">Murad Narimanli</a>
        </p>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({

})
export default class Sidebar extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #sidebar {
    background:#121F2C;
    min-width: 270px;
    max-width: 270px;
    color: #fff;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    position: relative;
    z-index: 0; }
  #sidebar:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    z-index: -1;
  }
  #sidebar .h6 {
    color: #fff; }
  #sidebar.active {
    margin-left: -270px; }
  #sidebar h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 30px; }
  #sidebar h1 .logo {
    color: #fff; }
  #sidebar h1 .logo span {
    font-size: 13px;
    color: #fff;
    display: block; }
  #sidebar ul.components {
    padding: 0; }
  #sidebar ul li {
    font-size: 16px; }
  #sidebar ul li > ul {
    margin-left: 10px; }
  #sidebar ul li > ul li {
    font-size: 14px; }
  #sidebar ul li a {
    padding: 10px 0;
    display: block;
    color: rgba(255, 255, 255, 0.6);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
  #sidebar ul li a span {
    color: #fff; }
  #sidebar ul li a:hover {
    color: #fff; }
  #sidebar ul li.active > a {
    background: transparent;
    color: #fff; }
  @media (max-width: 991.98px) {
    #sidebar {
      min-width: 180px;
      max-width: 180px; } }
  #sidebar .custom-menu {
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 0;
    margin-right: -20px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s; }
  @media (prefers-reduced-motion: reduce) {
    #sidebar .custom-menu {
      -webkit-transition: none;
      -o-transition: none;
      transition: none; } }
  #sidebar .custom-menu .btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative; }
  #sidebar .custom-menu .btn i {
    margin-right: -40px;
    font-size: 14px; }
  #sidebar .custom-menu .btn.btn-primary {
    background: transparent;
    border-color: transparent; }
  #sidebar .custom-menu .btn.btn-primary:after {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background: #30e3ca;
    border-radius: 10px; }
  #sidebar .custom-menu .btn.btn-primary:hover, #sidebar .custom-menu .btn.btn-primary:focus {
    background: transparent !important;
    border-color: transparent !important; }
  .footer{
    position: absolute;
    bottom: 20px;
    padding-right: 20px;
    p {
      color: rgba(255, 255, 255, 0.5); }
    a{
      color: white;
    }
  }
</style>