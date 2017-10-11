<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        <div>Menu</div>

        <div class="side-menu">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/core/Core">Core MLOS</router-link>
            </li>
            <li>
              <router-link to="/goodbye/Concentration/child">Concentration MLOS</router-link>
            </li>
            <li>
              <router-link to="/goodbye/bob/asd">Capstone</router-link>
            </li>
          </ul>

        </div>
      </nav>

      <main id="panel">
        <header>
          <div>
            <button class="toggle-button"></button>
            <div class="banner">
              <h1 class="main-title">{{msg}}<img src="./assets/csumb-web-site.jpg" width="300" height="170">
              </h1>
              <h1 class="main-title"><span style="color:white">_</span>{{ $route.params.name}}<span style="color:white">_</span></h1>
            </div>
            <router-view></router-view>
          </div>

        </header>

      </main>

    </Slideout>

  </div>
</template>

<script>
import Slideout from 'vue-slideout'

export default {
  name: 'app',
  components: {
    Slideout
  },
  methods: {
    open: function () {
      console.log('slideoutOpen')
    }
  },
  data () {
    return {
      msg: 'CSUMB ILP PORTFOLIO'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; //margin-top: 60px;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
}
.main-title {
  font-size: 35px;
  padding: 5px;
  
    color: #4c6b83;
}


.toggle-button {
  border: none;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 30px;
  padding: 20px;
  outline: none;
  background: url('assets/menu.png') no-repeat left center;
}

.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  height: 100vh; //overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
  background-color: white;
  color: white;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  background-color: white;

  position: relative;
  z-index: 1;
  will-change: transform;
  min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: visible;
}

.slideout-open .slideout-menu {
  display: block;
}

.side-menu {

  padding-top: 60px;
}

li {
  padding: 8px 8px 8px 0px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.router-link-exact-active {
  color: #4c6b83;
}
.banner {
  background: white;
  border-style: solid;
   border-radius: 10px;
    border-width: 5px;
    border-color:#4c6b83;
}
</style>
