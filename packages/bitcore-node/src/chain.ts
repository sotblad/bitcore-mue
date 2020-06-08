module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  MUE: {
    lib: require('bitcore-lib-mue2'),
    p2p: require('bitcore-p2p-mue'),
  },
}
