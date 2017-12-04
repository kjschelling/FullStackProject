'use strict'

const store = require('../store')

// sign up  success
const signUpSuccess = function () {
  // console.log(data)
  $('#auth-message').text('Signed up successfully! Please sign in').hide(3000)
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
  $('.up-button').hide()
}
// sign up fail
const signUpFailure = function () {
  $('#auth-message').text('Error on sign up')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
}

// sign in success
const signInSuccess = function (data) {
  store.user = data.user
  // console.log(store.user)
  $('#auth-message').text('Signed in successfully!').hide(3000)
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
  $('#auth-message').text('Error on sign in').hide(3000)
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}

// change password success
const changePasswordSuccess = function () {
  $('#auth-message').text('Change has been made!').hide(3000)
  $('#new-password').val('')
  $('#old-password').val('')
}
// Change password fail
const changePasswordFailure = function () {
  $('#auth-message').text('Change not made')
  $('#new-password').val('')
  $('#old-password').val('')
}
// sign out success
const signOutSuccess = function () {
  store.user = null
  $('#auth-message').text('Signed out!').hide(3000)
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
