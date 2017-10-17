<template>
  <div class="hello">
    <ul>

      <div class="csumb-content">


        <div class="photo">
             <!--<img src="../assets/photo.jpg" alt="profile" width="170" height="170">-->
          <h3>Keith Groves</h3>
          <ul>
            <li><a href="mailto:kegroves@csumb.edu>email">email</a></li>
            <li><a href="https://www.github.com/buskcoin">github</a></li>
            <li><a href="https://www.linkedin.com/in/keithalgroves">linkedin</a></li>

          </ul>

        </div>
        <h2>About me</h2>
        <p>
          I am the Head Teacher at a programming school called The League of Amazing Programmers, a nonprofit school for kids in the 5th - 12th grade. My life has been a very winding path but I am very glad that it has led me here where I can make a difference in others lives. Though I mostly program in Java, I enjoy creating and learning new things in other languages. As an example, this page was built using <a href="https://vuejs.org/">Vue.js</a> so I could learn more about the framework. You can check out the code <a href="https://github.com/Buskcoin/ilp-site">right here on github</a>.
        </p>
      </div>
      <h2>About the C.S program</h2>

      <p>
        In the CSUMB Computer Science B.S program, students learn fundamental computer science concepts while applying their knowledge to solve real&#45;world problems. Collaboration, team work and communication skills are infused into the learning experiences with heavily project&#45;based courses in a state&#45;of&#45;the&#45;art technological environment. Students begin by taking a set of common core courses to establish a strong foundation in computer science, followed by taking courses in one of four concentration areas: software engineering, network and security, data science, or game development. The curriculum provides students the opportunity to learn concepts and develop skills in more than one concentration, helping them to become well rounded computer science professionals.
      </p>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'CSUMB ILP PORTFOLIO'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 40px;
  padding: 40px;
  color: #4c6b83;
}

h2 {
  padding: 20px;
  text-align: center;
  color: #4c6b83;
}
h3 {
  color: #4c6b83;
  text-align: center;
  position: relative;
  margin-top: 10px
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
  text-align: center;
}

li {
  color: #4c6b83;
  display: inline-block;
  font-size: 21px;
  margin: 0 20px;
}

p {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  color: #666666;
  padding-left: 200px;
  padding-right: 200px;
}
a {
  color:#4c9b83
}
.csumb-content {
  display: block;
  font-weight: normal;
  text-align: left;
  margin: 0 auto;

}

.photo {
  //background: linear-gradient(0deg,#5e7d95 0,#ffffff 40%);
  border-bottom: solid;
  //border-style: solid;
  //border-radius: 20px;
  //border-width: 5px;
  border-color: #4c6b83;
  overflow: auto;
  margin:20px 300px;
}
img{
  float:left;
  position: fixed;
  border-right: 3px solid #4c6b83;
  margin: 10px;
}
</style>
