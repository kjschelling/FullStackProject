'use strict'

const showModelsTemplate = require('../templates/mannequin-listing.handlebars')

const createSuccess = function (data) {
  console.log(data)
  $('#mannequin-message').text('Model Created!').hide(1800)
}
// create fail
const createFailure = function (error) {
  console.log(error)
  $('#mannequin-message').text('Error creating')
}

const showSuccess = function (data) {
  console.log(data)
  const showModelsHtml = showModelsTemplate({ mannequins: data.mannequins })
  $('#show-models').append(showModelsHtml)
}

// create fail
const showFailure = function (error) {
  console.log(error)
  $('#mannequin-message').text('Error displaying')
}

module.exports = {
  createSuccess,
  createFailure,
  showSuccess,
  showFailure
}
