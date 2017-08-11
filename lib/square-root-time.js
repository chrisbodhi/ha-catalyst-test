'use strict';

function squareSeconds () {
  const seconds = (new Date()).getSeconds();
  return Math.sqrt(seconds);
}

module.exports = squareSeconds;
