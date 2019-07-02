const express = require('express');

class Server {
  constructor(instance = express()) {
    this.instance = instance;
  }

  async start() {
    const PORT = process.env.PORT || 3000;
    this.instance.listen(PORT, () => console.log('Application successfully started and listen at port', PORT));
  }
}

module.exports = { Server };
