<template>
  <div class="CST363">
    <div class="course" style="text-align:left;">
    <h2>Course Description</h2>
    <p>{{msg}}
    </p>

</div>
  </div>

</template>

<script>
export default {
  name: 'CST363',
  data () {
    return {
      msg: 'This course provides balanced coverage of database use and design,focusing on relational databases. Students will learn to design relational schemas, write SQL queries, access a DB programmatically,and perform database administration. Students will gain a working knowledge of the algorithms and data structures used in query evaluation and transaction processing. Students will also learn to apply newer database technologies such as XML, NoSQL, and Hadoop.'
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
