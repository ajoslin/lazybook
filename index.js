'use strict'

module.exports = Lazybook

Lazybook.Promise = Promise

function Lazybook (options) {
  options = options || {}

  var methods = options.methods
  var load = options.load

  if (!Array.isArray(methods)) {
    throw new TypeError('options.methods must be an array of method names')
  }

  var loadScriptPromise
  var fakeApi = {}

  methods.forEach(function (methodName) {
    if (!loadScriptPromise) {
      loadScriptPromise = Lazybook.Promise.resolve(load())
    }

    fakeApi[methodName] = function lazybookWrapper () {
      var args = Array.prototype.slice.call(arguments)

      return loadScriptPromise.then(function (realApi) {
        return realApi[methodName].apply(realApi, args)
      })
    }
  })

  return fakeApi
}
