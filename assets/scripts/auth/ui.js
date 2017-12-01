'use strict'

const store = require('../store')

// sign up  success
const signUpSuccess = function () {
  // console.log(data)
  $('#auth-message').text('Signed up successfully!').hide(1800)
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
  $('.up-button').hide()
}
// sign up fail
const signUpFailure = function () {
  $('#auth-message').text('Error on sign up')
}

// sign in success
const signInSuccess = function (data) {
  store.user = data.user
  console.log(store.user)
  $('#auth-message').text('Signed in successfully!').hide(1800)
  $('.change-password').show()
  $('.sign-out').show()
  $('.sign-in').hide()
  $('.sign-up').hide()
  $('.up-button').hide()
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('.mannequins').show()
}

// sign in fail
const signInFailure = function () {
  $('#auth-message').text('Error on sign in')
}

// change password success
const changePasswordSuccess = function () {
  $('#auth-message').text('Change has been made!').hide(1800)
  $('#new-password').val('')
  $('#old-password').val('')
}
// Change password fail
const changePasswordFailure = function () {
  $('#auth-message').text('Change not made')
}
// sign out success
const signOutSuccess = function () {
  store.user = null
  $('.sign-up').show()
  $('.sign-in').show()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.mannequins').hide()
}

// sign out fail
const signOutFailure = function () {
  $('#messageSignOut').text('Still here')
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
