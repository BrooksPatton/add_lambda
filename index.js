function lambda({ body, query }, done) {
  done(Number(body.first) + Number(body.second));
}

module.exports = lambda;
