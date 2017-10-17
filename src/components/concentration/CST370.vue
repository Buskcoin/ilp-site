<template>
  <div class="CST370">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>
    <ul>Course Work
      <li><a href="http://hosting.otterlabs.org/classes/grov1336/CST336/">Bio</a></li>
      <li><a href="http://hosting.otterlabs.org/cama4277/CST336/GroupProject/login.php/">Auto Website Project</a></li>
    </ul>
</div>
  </div>

</template>

<script>
export default {
  name: 'CST370',
  data () {
    return {
      msg: 'Students learn important data structures in computer science and acquire fundamental algorithm design techniques to get the efficient solutions to several computing problems from various disciplines. Topics include the analysis of algorithm efficiency, hash, heap, graph, tree, sorting and searching, brute force, divide-and-conquer, decrease-and-conquer, transform-and-conquer, dynamic programming, and greedy programming.'
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
