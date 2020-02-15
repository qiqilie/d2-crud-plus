import d2Mock from '../../mock/d2-mock'

const req = context => context.keys().map(context)
const options = req(require.context('./api/', true, /\.js$/))
  .filter(e => e.default)
  .map(e => e.default)

options.forEach(option => {
  d2Mock.load(option)
})

const options2 = req(require.context('../modules/', true, /mock\.js$/))
  .filter(e => e.default)
  .map(e => e.default)

options2.forEach(option => {
  d2Mock.load(option)
})
