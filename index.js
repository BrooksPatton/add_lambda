function lambda({ body, query }, done) {
  const first = Number(body.first);
  const second = Number(body.second);
  
  done(first + second);
}

module.exports = lambda;
