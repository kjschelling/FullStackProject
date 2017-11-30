'use strict'

const authUI = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)
const authApi = require('./api')
/* GAME AUTHORIZATION FUNCTIONS */

// on sign up
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.signUp(data)
    .then(authUI.signUpSuccess)
    .catch(authUI.signUpFailure)
}

// on sign in
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.signIn(data)
    .then(authUI.signInSuccess)
    .catch(authUI.signInFailure)
}
// event handlers
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
//   $('#change-password').on('submit', onChangePassword)
//   $('#sign-out').on('submit', onSignOut)
//   $('.new-game').on('click', onNewGame)
//   $('.tile').on('click', onUpdateGame)
//   $('.get-games').on('click', onGetGames)
}

module.exports = {
  addHandlers
}
