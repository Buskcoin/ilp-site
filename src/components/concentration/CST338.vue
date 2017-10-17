<template>
  <div class="CST338">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>

</div>
  </div>

</template>

<script>
export default {
  name: 'CST338',
  data () {
    return {
      msg: 'Provides students with the fundamental concepts to develop large-scale software, focusing on the object-oriented programming techniques. Coverage includes the introduction to Java programming language, object-oriented programming, software life cycle and development processes, requirements analysis, and graphical user interface development.'
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
