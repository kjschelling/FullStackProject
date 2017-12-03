'use strict'

const showModelsTemplate = require('../templates/mannequin-listing.handlebars')

//  create success
const createSuccess = function () {
  // console.log(data)
  $('#mannequin-message').text('Model Created!').hide(3000)
  $('#first').val('')
  $('#last').val('')
  $('#measurements').val('')
  $('#eye').val('')
  $('#hair').val('')
  $('#length').val('')
  $('#gender').val('')
  $('#height').val('')
  $('#weight').val('')
}

// create fail
const createFailure = function () {
  // console.log(error)
  $('#mannequin-message').text('Please fill all forms before submitting!').hide(3000)
}

// show success
const showSuccess = function (data) {
  // console.log(data)
  const showModelsHtml = showModelsTemplate({ mannequins: data.mannequins })
  $('#show-models').append(showModelsHtml)
}

// show fail
const showFailure = function () {
  // console.log(error)
  $('#mannequin-message').text('Error displaying')
}

// update success
const updateSuccess = function () {
  // console.log(data)
  $('#mannequin-message').text('Model Updated!').hide(3000)
  $('#first').val('')
  $('#last').val('')
  $('#measurements').val('')
  $('#eye').val('')
  $('#hair').val('')
  $('#length').val('')
  $('#gender').val('')
  $('#height').val('')
  $('#weight').val('')
}

// update fail
const updateFailure = function () {
  // console.log(error)
  $('#mannequin-message').text('Please fill all forms before submitting!').hide(3000)
}

// delete success
const deleteSuccess = function () {
  // console.log(data)
  $('#mannequin-message').text('Model Deleted!').hide(3000)
}

//  delete fail
const deleteFailure = function () {
  // console.log(error)
  $('#mannequin-message').text('Model not deleted').hide(3000)
}

module.exports = {
  createSuccess,
  createFailure,
  showSuccess,
  showFailure,
  updateSuccess,
  updateFailure,
  deleteSuccess,
  deleteFailure
}
