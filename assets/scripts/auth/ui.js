'use strict'

const store = require('../store')
const mannEvents = require('../mannequins/events.js')
// const mannUI = require('../mannequins/ui.js')

// all messages need to start with .show() before

// clear forms function
const clearUp = function () {
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
}
const clearIn = function () {
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}
const clearPass = function () {
  $('#new-password').val('')
  $('#old-password').val('')
}

// sign up  success
const signUpSuccess = function () {
  // console.log(data)
  $('#auth-message').text('Signed up successfully! Please sign in').show()
  $('.sign-up').hide()
  clearUp()
}
// sign up fail
const signUpFailure = function () {
  $('#auth-message').text('Error on sign up').show()
  clearUp()
}

// sign in success
const signInSuccess = function (data) {
  store.user = data.user
  mannEvents.onShow()
  // mannApi.showModels()
  //   .then(mannUI.showSuccess)
  //   .catch(mannUI.showFailure)
  // console.log(store.user)
  $('#mannequin-message').text('Signed in successfully!').show().hide(3000)
  $('.change-password').show()
  $('.sign-out').show()
  $('.sign-in').hide()
  $('.sign-up').hide()
  $('.up-button').hide()
  clearIn()
  $('.mannequins').show()
  $('#clear').hide()
}

// sign in fail
const signInFailure = function () {
  $('#auth-message').text('Error on sign in').show()
  clearIn()
}

// change password success
const changePasswordSuccess = function () {
  $('#auth-message').text('Change has been made!').show()
  clearPass()
}
// Change password fail
const changePasswordFailure = function () {
  $('#auth-message').text('Change not made').show()
  clearPass()
}
// sign out success
const signOutSuccess = function () {
  store.user = null
  $('#show-models').html('')
  $('#auth-message').text('Signed out, Please sign in!').show()
  $('.sign-up').show()
  $('.sign-in').show()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.mannequins').hide()
}

// sign out fail
const signOutFailure = function () {
  $('#auth-message').text('Still here').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
