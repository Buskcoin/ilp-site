<template>
  <div class="goodbye">
<!--    <h1>{{ msg }}</h1>
    <h2>Goodbye {{ $route.params.name}}</h2>
    -->
  <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'goodbye',
  data () {
    return {
      msg: 'This is the goodbye page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
