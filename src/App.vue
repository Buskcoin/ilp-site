<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
          <nav id="menu">
                  <div>Menu</div>

                  <div class="">
                    <ul>
                      <li><router-link to="/">Home</router-link> </li>
                      <li><router-link to="/goodbye/bob">goodbye</router-link> </li>
                      <li><router-link to="/goodbye/bob/child">GoodbyeChild</router-link> </li>
                    </ul>

                  </div>
                </nav>

                <main id="panel">
                  <header>
                    <div>
                      <button class="toggle-button"></button>

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
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .toggle-button{
  border: none;
    position: absolute;

    //top: 5px;
    left: 12px;
    font-size: 30px;
    padding: 20px;
    outline:none;
    background: url('assets/menu.png') no-repeat left center;
  }

  .slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
    overflow-y: scroll;
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
    overflow: hidden;
  }

  .slideout-open .slideout-menu {
    display: block;
  }
</style>
