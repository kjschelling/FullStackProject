'use strict'

const showModelsTemplate = require('../templates/mannequin-listing.handlebars')

// clear form function
const clearForms = function () {
  $('.model-id').val('')
  $('.first').val('')
  $('.last').val('')
  $('.measurements').val('')
  $('.eye').val('')
  $('.hair').val('')
  $('.length').val('')
  $('.gender').val('')
  $('.height').val('')
  $('.weight').val('')
}

const clearDelete = function () {
  $('#delete-id').val('')
}

//  create success
const createSuccess = function () {
  // console.log(data)
  $('#mannequin-message').text('Model Created!').show().hide(3000)
  clearForms()
  $('#show').show()
  $('#clear').show()
}

// create fail
const createFailure = function () {
  // console.log(error)
  $('#mannequin-message').text('Please fill all forms before submitting!').show().hide(3000)
  clearForms()
}

// show success
const showSuccess = function (data) {
  const showModelsHtml = showModelsTemplate({ mannequins: data.mannequins })
  if (data.mannequins.length !== 0) {
    $('clear').show()
    $('#mannequin-message').text('List of models!').show().hide(3000)
  } else if (data.mannequins.length === 0) {
    $('#mannequin-message').text('Create a model!').show().hide(3000)
  }
  $('#show-models').append(showModelsHtml)
}

// show fail
const showFailure = function () {
  // console.log(error)
  $('#mannequin-message').text('Error displaying models').show().hide(3000)
}

// update success
const updateSuccess = function () {
  // console.log(data)
  $('#mannequin-message').text('Model Updated!').show().hide(3000)
  clearForms()
}

// update fail
const updateFailure = function () {
  // console.log(error)
  $('#mannequin-message').text('Please fill all forms before submitting!').show().hide(3000)
  clearForms()
}

// delete success
const deleteSuccess = function () {
  // console.log(data)
  $('#mannequin-message').text('Model Deleted!').show().hide(3000)
  clearDelete()
}

//  delete fail
const deleteFailure = function () {
  // console.log(error)
  $('#mannequin-message').text('Model not deleted').show().hide(3000)
  clearDelete()
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
