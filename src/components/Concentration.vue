<template>
  <div class="Concentration">

    <div class="csumb-content" style="text-align:left;">

        <h2>SE Outcome 1: Advanced Programming</h2>
        <h3>Apply object-oriented techniques to software construction.</h3>
        <ul>
      <li>Apply object-oriented analysis and design to practical software construction.</li>
      <li>Provide a graphical user interface of a software system to a user.</li>
    </ul>
      <ul>Courses:
        <router-link to="/CST338/Software Design" tag="li" id="ilpLink">CST 338 - Software Design</router-link>
      </ul>



        <h2>SE Outcome 2: Specialized Programming</h2>
      <h3>Apply programming skills to a specialized application.</h3>
      <ul>
        <li>Utilize professional level platforms and tools to produce software systems that meet specified user needs and constraints.</li>
        <li>Combine several software skills and techniques to create an integrated software system.</li>
        <li>Articulate industry trends in the particular domains.</li>
      </ul>
      <ul>Courses:
        <li>
          <router-link to="/CST336" tag="li" id="ilpLink">CST 336 - Internet Programming</router-link>
        </li>
        <li>
            <router-link to="/CST336" tag="li" id="ilpLink">CST 370 - Design and Analysis of Algorithms</router-link>
        </li>
      </ul>
        <h2>SE Outcome 3: Planning, Analysis, and Production of Software Application</h2>
      <h3>Demonstrate the ability to analyze, plan, and produce a complete software application.</h3>
      <ul>
        <li>Articulate the software system development life cycle and its characteristics.</li>
        <li>Apply best practices regarding project management.</li>
        <li>Analyze needs and constraints of complex software system design.</li>
        <li>Write a project proposal, a project report, and an operating manual.</li>
        <li>Collaborate with team members to implement a large software system.</li>
        <li>Understand and apply modern software production practice and tools such as component based programming, integrated development environment, version control and testing.</li>
      </ul>
      <ul>Courses:
        <li>
          <router-link to="/CST336" tag="li" id="ilpLink">CST 438 - Software Engineering</router-link>
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
      msg: 'Hellow',
      msg2: 'bye',
      msg4: 'test'
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
