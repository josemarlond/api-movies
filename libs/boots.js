module.exports = app => {

  app.listen(app.get('port') , () => {
    console.log(`Marlon --> server on port ${app.get('port')}`);
  });

};
