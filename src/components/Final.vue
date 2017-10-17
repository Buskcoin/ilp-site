<template>
  <div class="final">
<!--    <h1>{{ msg }}</h1>
    <h2>Goodbye {{ $route.params.name}}</h2>
    -->
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
      <ul>Courses:
        <router-link to="/CST338/Software Design" tag="li" id="ilpLink">CST 338 - Software Design</router-link>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'final',
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
