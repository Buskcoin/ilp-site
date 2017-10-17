<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        <div>Menu</div>

        <div class="side-menu">
          <ul class="menu-list">
            <li>
              <router-link tag="li" to="/">Home</router-link>

            </li>
            <li><router-link tag="li" to="/core/Core">Core MLOS</router-link>
              <ul>
                <li><router-link tag="li" to="/CST370/Internet Programming">CST370 <div id="detail">- Internet Programming</div></router-link></li>
                <li><router-link tag="li" to="/CST338/Software Design">CST338 <div id="detail">- Software Design</div></router-link></li>
                <li><router-link tag="li" to="/CST436/Design and Analysis of Algorithms">CST436 <div id="detail">- Design and Analysis of Algorithms</div></router-link></li>
                <li><router-link tag="li" to="/CST336/Software Engineering">CST336 <div id="detail">- Software Engineering</div></router-link></li>
              </ul>
            </li>
            <li><router-link tag="li" to="/concentration/Concentration">Concentration MLOS</router-link>
              <ul>
                <li><router-link tag="li" to="/CST205/Multimedia Design and Programming">CST205 <div id="detail">- Multimedia Design and Programming</div></router-link></li>
                <li><router-link tag="li" to="/CST300/Major Proseminar">CST300 <div id="detail">- Major Proseminar</div></router-link></li>
                <li><router-link tag="li" to="/CST311/Intro to Computer Networks">CST311 <div id="detail">- Intro to Computer Networks</div></router-link></li>
              </ul>
            </li>
            <li>
              Final
              <ul>
                <li><router-link tag="li" to="/CST325/Graphics Programming">CST325<div id="detail">- Graphics Programming</div> </router-link></li>
                <li><router-link tag="li" to="/CST361S/Technology Tutors and Service Learning">CST361S<div id="detail">- Technology Tutors/Service Learning</div></router-link></li>
                <li><router-link tag="li" to="/CST363/Introduction to Databases Systems">CST363<div id="detail">- Introduction to Databases Systems</div></router-link></li>
                <li><router-link tag="li" to="/CST373/Ethics in Communication and Technology">CST373<div id="detail">- Ethics in Communication and Technology</div></router-link></li>
                <li><router-link tag="li" to="/CST499/Senior Capstone Project">CST499<div id="detail">- Senior Capstone Project</div></router-link></li>
              </ul>
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

  padding-top: 10px;
}

li {
  padding: 3px 3px 3px 0px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;

}

li li:hover {
  padding: 3px 3px 3px 0px;
  text-decoration: none;
  font-size: 15px;
  color: #007bff;
  display: block;

  cursor:pointer;
  cursor: hand;
}

li li:hover #detail{
display:block;
}

#detail{
  display:none;
  font-size: 12px;
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
.menu-list {
  text-align: left;

}
</style>
