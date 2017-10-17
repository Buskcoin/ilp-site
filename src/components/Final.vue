<template>
  <div class="Final">

    <div class="csumb-content" style="text-align:left;">

        <h2>Culmination Outcome 1: Service to the Community </h2>
        <h3>Demonstrate the ability to combine knowledge in the discipline and community experiences to finish a community-based project. </h3>
        <ul>
      <li>Demonstrate an understanding of a community problem and a need for service and/or support. </li>
      <li>Make a meaningful contribution to the solution of the problem. </li>
    </ul>
      <ul>Courses:
        <router-link to="/CST361S/Technology Tutors" tag="li" id="ilpLink">CST 361S - Technology Tutors</router-link>
      </ul>
      <h2>Culmination Outcome 2: Professional Communications</h2>
      <h3>Demonstrate professional communication skills in written and oral form.</h3>
      <ul>
    <li>Compose a capstone proposal with background research, methods, details description of implementation steps, budget, schedule, risks and evaluation plan.</li>
    <li>Present the background, methods, requirements, process and conclusion of the capstone project clearly in written and oral formats.</li>
  </ul>
    <ul>Courses:
      <router-link to="/CST499/Senior Capstone Project" tag="li" id="ilpLink">CST 499 - Senior Capstone Project</router-link>
    </ul>
    <h2>Culmination Outcome 3: Capstone project: Culminating Experience</h2>
    <h3>Create a comprehensive project according to an approved set of specifications that represents the culmination of CSUMB experiences in the major and showcases an achievement of professional level work.</h3>
    <ul>
  <li> Finish the capstone project according to the proposal.</li>
  <li>Apply basic project management skills.</li>
  <li>Evaluate the solution according to a specified set of criteria.</li>
</ul>
  <ul>Courses:
    <router-link to="/CST499/Senior Capstone Project" tag="li" id="ilpLink">CST 499 - Senior Capstone Project</router-link>
  </ul>
  <h2>Culmination Outcome 4: CS Elective</h2>
  <h3>Demonstrate breath of knowledge in Computer Science topics outside of selected concentration.</h3>
<ul>Courses:
  <router-link to="/CST325/Graphics Programming" tag="li" id="ilpLink">CST 325 - Graphics Programming</router-link>
  <router-link to="/CST363/Introduction to Databases Systems" tag="li" id="ilpLink">CST 363 - Introduction to Databases Systems</router-link>
</ul>

<h2> Culmination Outcome 5: Ethics & Current Issues in the Major</h2>
<h3> Through an ethical perspective, students examine the impact of current and future information technologies on economics and culture in society.</h3>
<ul>
<li>Demonstrate an understanding of the issues regarding the impact of current and future computing & information technologies on social frameworks such as economics, education, governance, globalization and social justice.</li>
<li>Articulate code of conduct and reflect professional ethics in the computing and technology fields. </li>
<li>Analyze case studies in current issues and professional ethics. </li>
</ul>
<ul>Courses:
<router-link to="/CST373/Ethics in Communication and Technology" tag="li" id="ilpLink">CST 373 - Ethics in Communication and Technology</router-link>
</ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Final',
  data () {
    return {
      msg: 'This is the goodbye page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 50px;
  padding: 100px;
  color: #4c6b83;
}
h2 {
  text-align: center;
  color: #4c6b83;
  padding: 20px;

}
h3 {
  text-align: left;
  color: #4c6b83;
  padding-bottom: 16px;
    font-size: 20px;
}
p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;
  //color: #666666;
  //overflow-x: auto;

}
.course {
    margin: auto;
  width: 800px;
  height: 200px;
}



.banner {
  background: white;
  border-style: solid;
  border-radius: 10px;
  border-width: 10px;
  border-color: #4c6b83;
}

ul {
  list-style-type: none;
  padding: 0;
  font-weight: bold;
}

li {

  text-decoration: none;
  font-size: 15px;
  color: #313131;
  display: block;
  font-weight: normal;

}
#ilpLink {

  text-decoration: none;
  font-size: 16px;
  color: #717171;;
  display: block;

  cursor:pointer;
  cursor: hand;
}
#ilpLink:hover {

  text-decoration: none;
  font-size: 16px;
  color: #007bff;
  display: block;

  cursor:pointer;
  cursor: hand;
}



.csumb-content {
  display: block;
  font-weight: normal;
  text-align: left;
  width: 800px;

  margin: auto;
}
</style>
