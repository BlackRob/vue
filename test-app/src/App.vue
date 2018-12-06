<template>
  <div id="app">
    <header id="branding">
      <h1 id="logo">5 Questions!</h1>
      <h2 id="slogan"><em>The world's least accurate intelligence test!</em></h2>
    </header>
    <div id="content" >
      <AppStartForm  v-if = " view   ===  0 " />
      <AppQuiz  v-else-if = " view   ===  1 " />
      <AppScore  v-else-if = " view   ===  2 " />
    </div>
    <footer id="finePrint">
      <h6>coded by the dude at</h6>
      <h6><a href="http://workingclasshouses.com">workingclasshouses.com</a></h6>
    </footer>
  </div>
</template>

<script>
import AppStartForm from './components/AppStartForm'
import AppQuiz from './components/AppQuiz'
import AppScore from './components/AppScore'
import store from './store.js'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    AppStartForm,
    AppQuiz,
    AppScore
  },
  computed: {
    ...mapState(['quiz', 'view', 'name'])
  },
  mounted: function() {
    store.dispatch ( 'updateQuizList' )
  }
}
</script>

<style>
body {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
} 
#app {
  font-family: medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: white;
  color: #2c3e50;
  box-sizing: border-box;
  height: 96vh;
  width: 22em;
  padding: 1em;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100px auto 60px;
}
@media only screen and (min-width: 600px) {
  body {
    background: gray;
  }
  #app {
    border: 1px solid #111;
    box-shadow: 1px 1px 1px #111;
    border-radius: 1em;
  }
}
#branding {
  padding: 0px;
  margin: 0px;
  grid-row: 0 1;
  justify-self: center;
  align-self: center;
}
#logo {
  font-size: 40px;
  font-weight: 700;
  color: #555;
  margin: 0px;
}
#slogan {
  margin: 0px;
  font-size: 12px;
  font-weight: 500;
  color: #2c3e50;
}
#content {
  grid-row: 1 2;
  justify-self: center;
  align-self: center;
}
button {
  box-sizing: border-box;
  border: 1px solid #CCC;
  border-radius: 0.3em;
  padding: 0.3em 0.8em;
}
button:hover {
  background-color: pink;
}
#finePrint {
  padding: 0px;
  margin: 0px;
  color: #555;
  grid-row: 2 3;
  justify-self: center;
  align-self: center;
}
#finePrint h6 {
  margin: 0px;
} 
</style>
