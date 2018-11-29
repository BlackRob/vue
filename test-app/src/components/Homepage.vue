<template>
  <div class="view">
    <div id="nameAndQuiz">
      <form id="nameAndQuizForm" @submit.prevent="handleSubmit">
        <div>
          <label for="name" id="name-label">NAME</label><br>
          <input type="text" id="name" name="user-name" v-model="vName" required>
        </div>
        <div>
          <label for="quiz" id="quiz-label">Choose a quiz</label><br>
          <select id="quiz" name="user-quiz" required >
            <option value="" disabled selected>Make a selection</option>
            <option value="1">Fee</option>
            <option value="2">Fi</option>
            <option value="3">Fo</option>
            <option value="4">Fum</option>
          </select>
        </div>
        <div class="button">
          <button type="submit">START QUIZ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
   // @click="checkInput" 
   // checkInput () {
   //   var x = document.forms["nameAndQuizForm"]["user-name"]
   //   if (x == "") {
   //     console.log('need a name')
   //   }
   // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
    color: black;
}
select:invalid {
  color: gray;
}
.view {
  display: flex;
  justify-content: stretch;
}
.button {
  text-align: center;
}
#nameAndQuiz {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
}
label, input, select {
  box-sizing: border-box;
  width: 100%;
}
input, select {
  margin-bottom: 1em;
}
</style>
