<template>
  <div class="CST361S">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>
    <div class="media-vid">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7uRiMOeAgTM" frameborder="0" allowfullscreen></iframe>
</div>
<iframe width="850" height="800" src="https://docs.google.com/document/d/e/2PACX-1vRM2rODrAmqybRDn7jkFItp8omyDC1LtNhB4LL2gQrOj-LLXnTf-xuxQXo8ql5J_lwfHbEF0OnvgWKW/pub?embedded=true"></iframe>
</div>
  </div>

</template>

<script>
export default {
  name: 'CST361S',
  data () {
    return {
      msg: 'A service learning course in which students apply computer literacy, multimedia design, and technology to assist schools, nonprofit organizations, and community agencies. The theme for the course is "Bridging the Digital Divide." Note: students must participate in required service placements with hours to be arranged. Students must be able to create and manage a web site.'
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
.media-vid {

    width: 640px; /*can be in percentage also.*/
     height: auto;
  margin: 0 auto;
  position: relative;
}
</style>
