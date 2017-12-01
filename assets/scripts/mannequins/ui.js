'use strict'

const showModelsTemplate = require('../templates/mannequin-listing.handlebars')

//  create success
const createSuccess = function (data) {
  console.log(data)
  $('#mannequin-message').text('Model Created!').hide(1800)
}

// create fail
const createFailure = function (error) {
  console.log(error)
  $('#mannequin-message').text('Error creating')
}

// show success
const showSuccess = function (data) {
  console.log(data)
  const showModelsHtml = showModelsTemplate({ mannequins: data.mannequins })
  $('#show-models').append(showModelsHtml)
}

// show fail
const showFailure = function (error) {
  console.log(error)
  $('#mannequin-message').text('Error displaying')
}

// update success
const updateSuccess = function (data) {
  console.log(data)
  $('#mannequin-message').text('Model Updated!').hide(1800)
}

// update fail
const updateFailure = function (error) {
  console.log(error)
  $('#mannequin-message').text('Error updating').hide(1800)
}

// delete success
const deleteSuccess = function (data) {
  console.log(data)
  $('#mannequin-message').text('Model Deleted!').hide(1800)
}

//  delete fail
const deleteFailure = function (error) {
  console.log(error)
  $('#mannequin-message').text('Model not deleted').hide(1800)
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
