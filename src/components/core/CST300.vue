<template>
  <div class="CST300">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>

</div>
  </div>

</template>

<script>
export default {
  name: 'CST300',
  data () {
    return {
      msg: 'Helps students identify and articulate personal, professional, and social goals. Provides an integrated overview of the computer science and communication design majors and their requirements. Students develop a plan for their learning goals. Students learn writing, presentation, research and critical-thinking skills within the diversified fields of information technology and communication design. Students learn how to analyze, predict, and articulate trends in the academic, public service'
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
