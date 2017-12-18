'use strict'
const mannAPI = require('./api')
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
  $('#show-models').empty()
  mannAPI.showModels()
    .then(showSuccess)
    .catch(showFailure)
  $('#auth-message').text('Model Created!').show()
  clearForms()
  // $('#update-mannequin').show()
  // $('#delete-mannequin').show()
}

// create fail
const createFailure = function (error) {
  console.log(error)
  $('#auth-message').text('Please fill all forms before submitting!').show()
  clearForms()
}

// show success
const showSuccess = function (data) {
  console.log('Within show success', data)
  // this function
  const showModelsHtml = showModelsTemplate({ mannequins: data.mannequins })
  if (data.mannequins.length !== 0) {
    $('#auth-message').text('List of models!').show()
    $('#update-mannequin').show()
    $('#delete-mannequin').show()
  } else {
    $('#auth-message').text('Create a model!').show()
    $('#update-mannequin').hide()
    $('#delete-mannequin').hide()
  }
  $('#show-models').append(showModelsHtml)
}

// show fail
const showFailure = function (error) {
  console.log(error)
  $('#auth-message').text('Error displaying models').show()
}

// update success
const updateSuccess = function () {
  // console.log(data)
  $('#show-models').empty()
  mannAPI.showModels()
    .then(showSuccess)
    .catch(showFailure)
  $('#auth-message').text('Model Updated!').show()
  clearForms()
}

// update fail
const updateFailure = function (error) {
  console.log(error)
  $('#auth-message').text('Please fill all forms before submitting!').show()
  clearForms()
}

// delete success
const deleteSuccess = function () {
  $('#show-models').empty()
  // const data = getFormFields(this)
  // event.preventDefault()
  // console.log('The data is', data)
  mannAPI.showModels()
    .then(showSuccess)
    .catch(showFailure)
  $('#auth-message').text('Model Deleted!').show()
  clearDelete()
}

//  delete fail
const deleteFailure = function () {
  // console.log(error)
  $('#auth-message').text('Model not deleted').show()
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
