module.exports = {
  target: 'electron-main',
  entry: './test/run-electron.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  node: {
    process: true,
    __dirname: true,
    fs: 'empty'
  }
}
