'use strict'

const store = require('../store')

// all messages need to start with .show() before .hide(3000)

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
  $('#auth-message').text('Signed up successfully! Please sign in').show().hide(3000)
  $('.sign-up').hide()
  clearUp()
}
// sign up fail
const signUpFailure = function () {
  $('#auth-message').text('Error on sign up').show().hide(3000)
  clearUp()
}

// sign in success
const signInSuccess = function (data) {
  store.user = data.user
  // console.log(store.user)
  $('#auth-message').text('Signed in successfully!').show().hide(3000)
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
  $('#auth-message').text('Error on sign in').show().hide(3000)
  clearIn()
}

// change password success
const changePasswordSuccess = function () {
  $('#auth-message').text('Change has been made!').show().hide(3000)
  clearPass()
}
// Change password fail
const changePasswordFailure = function () {
  $('#auth-message').text('Change not made').show().hide(3000)
  clearPass()
}
// sign out success
const signOutSuccess = function () {
  store.user = null
  $('#show-models').html('')
  $('#auth-message').text('Signed out!').show().hide(3000)
  $('.sign-up').show()
  $('.sign-in').show()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.mannequins').hide()
}

// sign out fail
const signOutFailure = function () {
  $('#auth-message').text('Still here').show().hide(3000)
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
