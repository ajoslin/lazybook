const test = require('tape')
const Lazybook = require('../')

test('basic', function (t) {
  const api = Lazybook({
    load: () => System.import('./fake-api'),
    methods: [
      'addThree',
      'fail'
    ]
  })

  t.plan(2)

  api.addThree(1).then(function (result) {
    t.equal(result, 4)
  })
  api.fail(1).catch(function (result) {
    t.equal(result.message, 'fail')
  })
})
