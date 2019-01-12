module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'my-component',
      externals: {
        react: 'React'
      }
    }
  }
}
