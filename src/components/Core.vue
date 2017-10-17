<template>
  <div class="core">

    <div class="csumb-content" style="text-align:left;">
      <h2>Core Outcome 1: Professional Communication &amp; Development</h2>

      <h3>Plan and assess personal career options and develop communication skills.</h3>
        <ul>
          <li>Acquire, analyze and use information about the range of career possibilities, industry trends in computer science and information technology and its related fields to make career planning decisions.</li>
          <li>Use critical thinking skills to plan and assess personal career and further study goals and design educational experiences directed to those goals.</li>
          <li>Use written and oral communication to deliver persuasive viewpoint and technology content to multiple audiences.</li>
          <li>Acquire, analyze and use information about computer sciences and information technology to describe and speculate on the impact of digital communications technology on local and global communities.</li>
        </ul>
        <ul>Couses:
          <li>
            <router-link to="/CST336" tag="li" id="ilpLink">CST 300 - Major Proseminar</router-link>
          </li>
        </ul>


      <h2>Core Outcome 2: Knowledge of Computers &amp; Networks</h2>

      <h3>
        Demonstrate an understanding of the fundamentals of computer architecture, operating systems and networks.
        </h3>
        <ul>
          <li>Describe the history of computers and computing.</li>
          <li>Explain how a computer represents and transmits information, how a computer's parts and components are organized and interfaced, basic components of an operating system and basic components of local area networks and wide area networks.</li>
          <li>Analyze and design simple circuits using digital electronics and logic gates.</li>
          <li>Describe the structure and organization of a modern microprocessor, and the sequence of operations in a typical instruction execution.</li>
          <li>Demonstrate a basic understanding of Assembly Language programming.</li>
        </ul>
        Courses:
        <ul>
          <li>

              <router-link to="/CST336" tag="li" id="ilpLink">CST 311, Intro to Computer Networks</router-link>

          </li>
        </ul>


      <h2>Core Outcome 3: Programming  Problem Solving</h2>

      <h3>
        Analyze and solve problems using a programming language.
        </h3>
        <ul>
          <li>Demonstrate the ability to develop algorithms and computer programs to solve problems by systematically decomposing a complex programming problem into manageable, well-documented steps that results in a design for the problem solution.</li>
          <li>Demonstrate that the program compiles and executes correctly for a given set of data.</li>
          <li>Demonstrate programming competency in a variety of programming structures, including arithmetic operations, control structures and loops, input/output operations including file I/O, the use of function calls, and the use of arrays and other storage types.</li>
          <li>Debug a program using appropriate debugging strategies.</li>
          <li>Produce a complete set of documentation for a program.</li>
        </ul>
        Courses:
        <ul>
          <li>
            CST 231, Problem-Solving/Programming
          </li>
          <li>
            CST 238, Intro to Data Structures
          </li>
        </ul>


      <h2>Core Outcome 4: Mathematics for Computing</h2>

      <h3>
        UseS mathematical concepts and constructs to express ideas and solve problems in computer science, and to communicate quantitative information.
</h3>
        <ul>
          <li>Use mathematical ideas to solve problems in Computer Science and Information Technology.</li>
          <li>Use mathematical thinking and models, charts, graphs, tables, figures, equations, and appropriate technologies to express ideas and concepts.</li>
          <li>Demonstrate an understanding of discrete mathematical concepts used in computing: Articulate and apply the concepts of binary numbers, combinatorics, logic, truth tables, graph theory and algorithms to problems in Computer Science and Information Technology.</li>
          <li>Analyze and evaluate the mathematical thinking and strategies of others.</li>
        </ul>
        Courses:
        <ul>
          <li>
            MATH 150, Calculus I
          </li>
          <li>
            MATH 170, Discrete Mathematics&
          </li>
        </ul>


      <h2>Core Outcome 5: Interaction Design</h2>

      <h3>
        Demonstrate effective use of computer-based tools used in the design and creation of interactive applications and electronic media.
      </h3>
        <ul>
          <li>Design, create, and edit electronic images, sounds, videos, text, and motion.</li>
          <li>Use multimedia authoring tools to design, manage, and execute an interactive multimedia project.</li>
        </ul>
        Courses:
        <ul>
          <li>
              <router-link to="/CST205/Multimedia Design and Programming" tag="li" id="ilpLink">CST 205, Multimedia Design and Programming</router-link>

          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'core',
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
