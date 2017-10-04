<template>
  <div class="Concentration">
    <div class="csumb-content" style="text-align:left;">
      <strong>
        <h3>SE Outcome 1: Advanced Programming</h3>
      </strong><br />
      <font  >Apply object-oriented techniques to software construction.</font>
      <ul>
        <li>Apply object-oriented analysis and design to practical software construction.</li>
        <li>Provide a graphical user interface of a software system to a user.</li>
      </ul>
      <font  >Courses:</font>
      <ul>
        <li>
          <a href="/cst-338---software-design.html">CST 338 - Software Design</a>
        </li>
      </ul>
      <strong>
        <h3>SE Outcome 2: Specialized Programming</h3>
      </strong><br />
      <font  >Apply programming skills to a specialized application.</font>
      <ul>
        <li>Utilize professional level platforms and tools to produce software systems that meet specified user needs and constraints.</li>
        <li>Combine several software skills and techniques to create an integrated software system.</li>
        <li>Articulate industry trends in the particular domains.</li>
      </ul>
      <font  >Courses:</font>
      <ul>
        <li>
          <a href="/cst-336---internet-programming.html">CST 336 - Internet Programming</a>
        </li>
        <li>
          <a href="/cst-370---design-and-analysis-of-algorithms.html">CST 370 - Design and Analysis of Algorithms</a>
        </li>
      </ul>
      <strong>
        <h3>SE Outcome 3: Planning, Analysis, and Production of Software Application</h3>
      </strong><br />
      <h3>Demonstrate the ability to analyze, plan, and produce a complete software application.</h3>
      <ul>
        <li>Articulate the software system development life cycle and its characteristics.</li>
        <li>Apply best practices regarding project management.</li>
        <li>Analyze needs and constraints of complex software system design.</li>
        <li>Write a project proposal, a project report, and an operating manual.</li>
        <li>Collaborate with team members to implement a large software system.</li>
        <li>Understand and apply modern software production practice and tools such as component based programming, integrated development environment, version control and testing.</li>
      </ul>
      <h3>Courses:</h3>
      <ul>
        <li>
          <a href="/cst-438---software-engineering.html">CST 438 - Software Engineering</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Concentration',
  data () {
    return {
      msg: 'Hellow'
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
  padding: 50px;
  text-align: center;
  color: #4c6b83;
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
}

li {
  color: #4c6b83;
  display: inline-block;
  margin: 0 10px;
}

p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 20px;
  line-height: 1.5;
  color: #666666;
}

.csumb-content {
  display: block;
  font-weight: normal;
  text-align: left;

  margin: 20px 400px 20px 400px;
}
</style>
