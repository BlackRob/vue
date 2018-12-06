<template>
  <div id="score">
    <h3>{{ this.rank }}</h3>
    <div id="buttonDiv">
      <button @click="startOver()">TRY ANOTHER QUIZ</button>
    </div>
  </div>
</template>

<script>
import store from '../store.js'
import { mapState } from 'vuex'

export default {
  name: 'AppScore',
  computed: {
    ...mapState(['performance','name']),
    rank: function () {
      let x = ""
      switch ( this.performance ) {
        case 0:
          x = `It's okay, ${ this.name }, maybe questions just aren't your thing`
          break
        case 1:
          x = `Well ${ this.name }, you could have done worse`
          break
        case 2:
          x = `Not bad for someone named ${ this.name }`
          break
        case 3:
          x = `Pretty good for someone named ${ this.name }`
          break
        case 4:
          x = `${ this.name } answers questions like a boss!`
          break
        case 5:
          x = `Wow, ${ this.name } has Rocket Brains!`
          break
        default:
          x = "I'm dead"
      }
      return x
    }
  },
  methods: {
    startOver: function() {
      store.commit( 'calcScore', 0 )
      store.commit( 'firstView' )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#score {
  max-width: 20em;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
#buttonDiv {
  text-align: center;
}
h3 {
  max-width: 12em;
}
</style>
