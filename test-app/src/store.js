import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    view: 0,
    question: 0,
    quiz: null,
    name: null,
    quizList: '<option disabled>Waiting for Quiz List...</option>',
    questions: [[6,"Which of these animals kills the most people annually?","Crocodiles","Sharks","Snakes","Lions",2],[7,"Which of these animals is largest as an adult?","Wolf","Hyena","Cheetah","Red Kangaroo",3],[9,"Which of these animals is not extinct?","Red Gazelle","Thylacine","Black Rhinoceros","Passenger Pigeon",2],[8,"Which of these birds can fly?","Kiwi","Turkeys","Penguins","Ostriches",1],[10,"Which of these animals swims fastest?","Mako Shark","Leopard Seal","Bottlenose Dolphin","Humpback Whale",0]],
    performance: 0
}

const mutations = {
    nextView (state) { state.view++ },
    firstView (state) { state.view = 0 },
    changeName (state, NewName) { state.name = NewName },
    changeQuiz (state, NewQuiz) { state.quiz = NewQuiz },
    changeQuizList (state, NewQuizList) { state.quizList = NewQuizList },
    calcScore (state, score) { state.performance = score }
}

const getters = {
}

const actions = {
    returnToStart: function () { return 0 },
    updateQuizList ({ commit }) {
        var NewQuizList = "<option value=\"1\">Capital Cities</option><option value=\"2\">Animal Facts</option>"
        setTimeout(() => {
            commit('changeQuizList', NewQuizList )
        }, 5000)
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})