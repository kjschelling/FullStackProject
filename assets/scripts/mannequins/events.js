'use strict'
const mannApi = require('./api')
const mannUI = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onCreate = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  mannApi.createModel(data)
    .then(mannUI.createSuccess)
    .catch(mannUI.createFailure)
}

const onShow = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  mannApi.showModels(data)
    .then(mannUI.showSuccess)
    .catch(mannUI.showFailure)
}

const onUpdate = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  mannApi.updateModel(data)
    .then(mannUI.updateSuccess)
    .catch(mannUI.updateFailure)
}

const onDelete = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  mannApi.deleteModel(data)
    .then(mannUI.deleteSuccess)
    .catch(mannUI.deleteFailure)
}

const addHandlers = function () {
  $('#create-mannequin').on('submit', onCreate)
  $('#show').on('click', onShow)
  $('#update-mannequin').on('submit', onUpdate)
  $('#delete-mannequin').on('submit', onDelete)
}

module.exports = {
  addHandlers
}
