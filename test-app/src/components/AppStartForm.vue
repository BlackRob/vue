<template>
  <div id="nameAndQuiz">
    <form id="nameAndQuizForm" @submit.prevent="handleSubmit">
      <div>
        <label for="username" id="name-label">Enter your name</label><br>
        <input type="text" name="username" v-model="username" :input="known" required > 
      </div>
      <div>
        <label for="userquiz" id="quiz-label">Choose a quiz</label><br>
        <select name="userquiz" v-model="userquiz" required v-html="quizList">
        </select>
      </div>
      <div id="buttonDiv">
        <button type="submit">START QUIZ</button>
      </div>
    </form>
  </div>
</template>

<script>
import store from '../store.js'
import { mapState } from 'vuex'

export default {
  name: 'AppStartForm',
  components: {
    ...mapState(['name']),
  },
  data: function () {
    return {
      username: '',
      userquiz: ''
    }
  },
  methods: {
    handleSubmit: function() {
      store.commit('changeName', this.username)
      store.commit('changeQuiz', this.userquiz)
      store.commit('nextView')
    }
  },
  computed: {
    ...mapState(['quizList']),
    known: function() {
      let x = null
      if (this.name) {
        x = this.name
      }
      return x
    }
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
#buttonDiv {
  text-align: center;
}
#nameAndQuiz {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#nameAndQuizForm {
  width: 200px;
}
label, input, select {
  box-sizing: border-box;
  width: 100%;
}
input, select {
  margin-bottom: 1em;
}
</style>
