var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express();
    Estudantes = require('./models/estudantes.js');

mongoose.connect('mongodb://localhost/api', function(err){
  if(err){
    console.log('Erro no mongodb ' + err);
  }
})

app.use(bodyParser());

var port = process.env.PORT || 3000;

var router = express.Router();

//http://localhost:3000/api
router.get('/', function(req,res){
  //res.json({message: 'API estudantes'});
  
  res.json(
    [{     
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "nome": "Jonathan Cardoso",
      "imagem": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"    
     },
     {     
      "id": "2bafd1-42bb-4437-b551-e5fed5a87abe",
      "nome": "nada Cardoso",
      "imagem": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"    
     },
     {     
      "id": "2bafd1-42bb-4437-b551-e5f5a87abe",
      "nome": "Cardoso",
      "imagem": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"    
     }  
  ]);

})

router.route('/estudantes')
 .get(function(req,res){
    Estudantes.find(function (err, dados) {
      if (err) {
        res.send(err);
      }
      res.json(dados);
    })
  })
  .post(function(req,res){
    var estudantes = new Estudantes();
    estudantes.nome = req.body.nome;
    
    estudantes.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Estudante cadastrado' });
    });
  });

router.route('/estudantes/:id')
  .get(function (req, res) {
    Estudantes.findById(req.params.id, function (err, dados) {
      if (err) {
        res.send(err);
      }
      res.json(dados);
    });
  })
  //update
  .put(function (req, res) {
    Estudantes.findById(req.params.id, function (err, dados) {
      if (err) {
        res.send(err);
      }
      dados.nome = req.body.nome;
      dados.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Estudante atualizado' });
      })
    });
  })
  .delete(function (req, res) {
    Estudantes.remove({ _id: req.params.id }, function (err, dados) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Estudante excluído' });
    })
  });

app.use('/api', router);

app.listen(port, function(){
  console.log('Servidor rodando na porta: '+port);
})
