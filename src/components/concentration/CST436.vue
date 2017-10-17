<template>
  <div class="CST436">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>
    <ul>
      Course Work:
    <li><a href="https://repl.it/I9Tt/12">Sorting algorithms</a></li>
    </ul>
    <iframe width="800" height="315" src="//repl.it/embed/I9Tt/12" frameborder="0" allowfullscreen></iframe>
</div>
  </div>

</template>
<script src="//repl.it/embed/I9Tt/12.js"></script>
<script>
export default {
  name: 'CST436',
  data () {
    return {
      msg: 'Prepares students for large-scale software development using software engineering principles and techniques. Coverage includes software process, requirements analysis and specification, software design, implementation, testing, and project management. Students are expected to work in teams to carry out a realistic software project.'
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
