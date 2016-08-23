const electron = require('electron')
const test = require('tape')

process.on('uncaughtException', function (error) {
  console.error(error)
  electron.app.quit()
})

require('./index')

test('teardown', function (t) {
  t.end()
  electron.app.quit()
})
