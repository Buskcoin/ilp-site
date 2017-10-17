<template>
  <div class="CST336">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>
    <ul>Course Work:
    <li><a href="https://github.com/mg17/weatherservice">Weather Service App</a></li>

  </ul>
</div>
  </div>

</template>

<script>
export default {
  name: 'CST336',
  data () {
    return {
      msg: 'Provides students with dynamic web application development skills, focusing on the PHP, MySQL, and JavaScript. Coverage includes the Internet architecture, XHTML, CSS, programming with PHP, database and MySQL, and client-side programming with JavaScript. '
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
li {

  text-decoration: none;
  font-size: 15px;
  color: #313131;
  display: block;
  font-weight: normal;

}
</style>
