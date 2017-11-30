'use strict'

const store = require('../store')

// sign up  success
const signUpSuccess = function () {
  // console.log(data)
  $('#up-in-message').text('Signed up successfully!')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
  $('.up-button').hide()
}
// sign up fail
const signUpFailure = function () {
  $('#up-in-message').text('Error on sign up')
}

// sign in success
const signInSuccess = function (data) {
  store.user = data.user
  $('#up-in-message').text('Signed in successfully!')
  // $('#change-password').show()
  // $('#sign-out').show()
  // $('.new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}

// sign in fail
const signInFailure = function () {
  $('#up-in-message').text('Error on sign in')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
