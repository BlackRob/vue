<template>
  <div id="qaDiv">
    <div id="q"> {{ questions[ questionCount ][ 1 ] }} </div>
    <div id="choiceDiv">
      <button id="c0" v-bind:class="{ R: cR[2], W: cW[2] }" @click="checkAnswer(2)"> 
        {{ questions[ questionCount ][ 2 ] }} 
      </button>
      <button id="c1" v-bind:class="{ R: cR[3], W: cW[3] }" @click="checkAnswer(3)"> 
        {{ questions[ questionCount ][ 3 ] }} 
      </button>
      <button id="c2" v-bind:class="{ R: cR[4], W: cW[4] }" @click="checkAnswer(4)"> 
        {{ questions[ questionCount ][ 4 ] }} 
      </button>
      <button id="c3" v-bind:class="{ R: cR[5], W: cW[5] }" @click="checkAnswer(5)"> 
        {{ questions[ questionCount ][ 5 ] }} 
      </button>
    </div>
    <div id="progressBar" v-bind:class="{dummy: selectionMade}">
      <div id="q0" v-bind:class="{ R: qR[0], W: qW[0] }"></div>
      <div id="q1" v-bind:class="{ R: qR[1], W: qW[1] }"></div>
      <div id="q2" v-bind:class="{ R: qR[2], W: qW[2] }"></div>
      <div id="q3" v-bind:class="{ R: qR[3], W: qW[3] }"></div>
      <div id="q4" v-bind:class="{ R: qR[4], W: qW[4] }"></div>
    </div>
  </div>
</template>

<script>
import store from '../store.js'
import { mapState } from 'vuex'


export default {
  name: 'AppQuiz',
  computed: {
    ...mapState(['questions']),
  },
  data: function () {
    return {
      questionCount : 0,
      selectionMade: false,
      // cR and cW arrays are for whether a choice was Right or Wrong
      // cR and cW have an unused [0] and [1]; this is so the index here 
      // matches the index of the choice in our store questions array
      cR: [false, false, false, false, false, false],
      cW: [false, false, false, false, false, false],
      // qR and qW are for the progress bar to record whether a
      // question was answered right or wrong
      qR: [false, false, false, false, false],
      qW: [false, false, false, false, false]
    }
  },
  watch: {
    selectionMade: function() {
      if (this.selectionMade) {
        setTimeout(() => {
            this.nextQuestion()
        }, 1750)
      }
    }
  },
  methods: {
    /* we use selectionMade to disable extra button pushes;
      a switch to the next question is triggered after 
      a certain time */ 
    checkAnswer: function( choice ) {
      if ( !this.selectionMade ) {
        if ( choice - 2 == this.questions[ this.questionCount ][ 6 ] ) {
          this.cR[ choice ] = true
          this.qR[ this.questionCount ] = true
        } else {
          this.cW[ choice ] = true
          this.qW[ this.questionCount ] = true
          // indicate which answer was correct
          this.cR[ this.questions[ this.questionCount ][ 6 ] + 2] = true
        }
        this.selectionMade = true
      }
    },
    nextQuestion: function() {
      this.questionCount++
      this.selectionMade = false
      this.cR.forEach((element, index) => {
        this.cR[index] = false
      })
      this.cW.forEach((element, index) => {
        this.cW[index] = false
      })
      if (this.questionCount == 5) {
        let score = 0
        this.questionCount = 0
        this.qR.forEach((element, index) => {
          if (this.qR[index]) { score++ }
          this.qR[index] = false
        })
        this.qW.forEach((element, index) => {
          this.qW[index] = false
        })
        store.commit( 'calcScore', score )
        this.showResults()
      }
    },
    showResults: function() {
      store.commit('nextView' )
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#qaDiv {
  max-width: 20em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
}
#q {
  width: 16em;
  height: 3em;
}
#choiceDiv {
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  padding-top: 1em;
  padding-bottom: 1em;
}
#c0, #c1, #c2, #c3 {
  display: block;
  height: 3em;
  width: 100%;
  margin: 0.2em;
}
@media only screen and (min-width: 600px) {
  #choiceDiv {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "c0 c1"
      "c2 c3"; 
  }
  #c0 {
    grid-area: c0;
  }
  #c1 {
    grid-area: c1;
  }
  #c2 {
    grid-area: c2;
  }
  #c3 {
    grid-area: c3;
  }
  #c0, #c1, #c2, #c3 {
    display: block;
    width: 96%;
  }
}
#progressBar {
  width: 16em;
  display: flex;
}
#q0, #q1, #q2, #q3, #q4 {
  box-sizing: border-box;
  border: 1px solid #ccc;
  width: 20%;
  height: 10px;
}
.R {
  background: #00dd00;
}
.W {
  background: #dd0000;
}
/* this dummy class gets applied when "selectionMade" changes;
it doesn't cahnge anything, the background is already white,
but vue doesn't want to update the view unless a simple member of "data"
that is used in the template changes; everything else that changes is
inside an array, so vue doesn't change without this :( */
.dummmy {
  background: inherit;
}
</style>
