import bodyParser from 'body-parser';

module.exports = app => {
  app.set('json spaces' , 4 );
  app.set('port' , process.env.PORT || 3000 );

//con estas dos lineas mi API REST va a poder interpretar los JSON
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : false}));


};
