<template>
  <div class="CST373">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>

</div>
  </div>

</template>

<script>
export default {
  name: 'CST373',
  data () {
    return {
      msg: 'Investigates through an ethical perspective how communication technology affects our lives. Discusses individual and institutional values represented through technological choices. Using case studies and current events, explores such issues as intellectual property rights, information access and privacy, and the digital divide.'
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
