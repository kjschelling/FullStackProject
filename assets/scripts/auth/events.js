'use strict'

const authUI = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)
const authApi = require('./api')

// default page
$('.change-password').hide()
$('.sign-out').hide()
$('.mannequins').hide()
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

// on change password
const onChangePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  authApi.changePassword(data)
    .then(authUI.changePasswordSuccess)
    .catch(authUI.changePasswordFailure)
}

// on sign out
const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUI.signOutSuccess)
    .catch(authUI.signOutFailure)
}

// event handlers
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
