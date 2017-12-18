'use strict'
const config = require('../config')
const store = require('../store')

const createModel = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/mannequins',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showModels = function () {
  return $.ajax({
    url: config.apiOrigin + '/mannequins',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateModel = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/mannequins/' + data.mannequin.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteModel = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/mannequins/' + data.mannequin.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createModel,
  showModels,
  updateModel,
  deleteModel
}
