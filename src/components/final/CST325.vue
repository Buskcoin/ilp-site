<template>
  <div class="CST325">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>

</div>
  </div>

</template>

<script>
export default {
  name: 'CST325',
  data () {
    return {
      msg: 'This course teaches the students the fundamentals of game programming and skills needed for game development, including GPU programming, matrix and quaternion algebra for physics calculation, animation, lighting and basics of implementing 3D models into a framework. '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
  color: #4c6b83;
  padding: 20px;
}
p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #666666;
  overflow-x: auto;

}
.course {
    margin: auto;
  width: 800px;
  height: 200px;
}
</style>
