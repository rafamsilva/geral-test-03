let express = require('express')
let app = express()

let bodyParser = require('body-parser')
let morgan = require('morgan')
let mongoose = require('mongoose')

let cors = require('cors')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().getTime() + '-' + file.originalname);
    }
});
  
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
};
  
const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

let jwt = require('jsonwebtoken')
let config = require('./config')

let Usuario = require('./api/models/usuario')
let Imovel = require('./api/models/imovel')

let port = process.env.PORT || 1337 //DARKSORCER
mongoose.Promise = global.Promise
mongoose.connect(config.database, {
    useMongoClient: true
})
    .then(() => console.log('A conexao com o mLAB foi um SUCESSO!!!'))
    .catch((err) => console.error(err));

app.set('superNode-auth', config.configName)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

let apiRoutes = express.Router()

app.listen(port)
console.log('A api esta hospedada na porta: ' + port)

// =========================================
var corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept', 'x-access-token'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use('/api', apiRoutes)

// apiRoutes.get('/emails', (req, res) => {
//     Usuario.find().distinct('email', (err, usuarios) => {
//         res.json(usuarios)
//     })
// })

apiRoutes.post('/registro', (req, res) => {

    let novoUsuario = new Usuario({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        senha: req.body.senha,
        telefone: req.body.telefone,
        email: req.body.email,
        admin: req.body.admin,
        funcionario: req.body.funcionario
    })


    Usuario.findOne({ email: req.body.email }, (err, usuario) => {
       
        if( usuario == null ){
            novoUsuario
                .save()
                .then(result => {
                    res.status(201).json({
                        message: 'Usuario cadastrado com SUCESSO!!!'
                    })
                }).catch(err => {
                    res.status(500).json({ message: 'Existe alguma informacao pendente a ser preenchida' })
                })
        } else {
            res.status(500).json({ message: 'Email ja existe' })
        }
    })
        
})

apiRoutes.get('/imoveis', (req, res) => {
    Imovel.find()
        .select("tipo valor disp area quartos vagas suite desc rua cep bairro nro imvImg")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                imoveis: docs.map(doc => {
                    return {
                        _id: doc._id,
                        tipo: doc.tipo,
                        valor: doc.valor,
                        disp: doc.disp,
                        area: doc.area,
                        quartos: doc.quartos,
                        vagas: doc.vagas,
                        suite: doc.suite,
                        desc: doc.desc,
                        rua: doc.rua,
                        cep: doc.cep,
                        bairro: doc.bairro,
                        nro: doc.nro,
                        imvImg: doc.imvImg
                    }
                })  
            }
            res.status(200).json(response)
        }).catch(err => {
            res.status(404).json({ message: 'imoveis nao encontrados' })
        })
    })

apiRoutes.get('/imoveis/:_id', (req, res) => {
    Imovel.find({ _id: req.params._id }, (err, imoveis ) => {
        res.json(imoveis)
    })
})

apiRoutes.post('/autenticacao', (req, res) => {
    Usuario.findOne({ email: req.body.email }, (err, usuario) => {
        if (err)
            res.status(500).json({ error: err.message })

        if(!usuario) {
            res.json({ success: false, message: 'Autenticaçao falhou'})
        } else if (usuario) {

            if(usuario.senha != req.body.senha) {
                res.json({ success: false, message: 'Autenticaçao Falhou'})
            } else {
                let token = jwt.sign(usuario, app.get('superNode-auth'), {
                    expiresIn: 700
                })

                res.json({
                    success: true,
                    message: 'Token Criado!!',
                    token: token,
                    usuarioID: usuario._id, 
                    usuarioNome: usuario.nome, 
                    usuarioEmail: usuario.email
                })
            }
        }
    })
})

apiRoutes.use( (req, res, next) => {
    
    let token = req.body.token || req.query.token || req.headers['x-access-token']

    if(token) {
        jwt.verify(token, app.get('superNode-auth'), (err, decoded) => {
            if(err) {
                return res.json({ success: false, message: 'Falha ao tentar Autenticar'})
            } else {
                req.decoded = decoded
                next()
            }
        })

    } else {
        return res.status(403).send({
            success: false,
            message: 'Nao tem token'
        })
    }
})

// ============================================

apiRoutes.get('/usuarios', (req, res) => {
    Usuario.find()
    .select("nome sobrenome telefone email favoritos admin funcionario")
    .exec()
    .then(docs => {
        const response = {
            success: true, //adicionar essa linha
            count: docs.length,
            usuarios: docs.map(doc => {
                return {
                    _id: doc._id,
                    nome: doc.nome,
                    sobrenome: doc.sobrenome,
                    telefone: doc.telefone,
                    email: doc.email,
                    favoritos: doc.favoritos,
                    admin: doc.admin,
                    funcionario: doc.funcionario
                }
            })
        }
        res.status(200).json(response)
    }).catch(err => {
        res.status(404).json({ message: 'usuarios nao encontrados' })
    })
})

apiRoutes.get('/usuarios/:_id', (req, res) => {
    Usuario.find({ _id: req.params._id })
    .select("nome sobrenome telefone email favoritos admin funcionario")
    .exec()
    .then(docs => {
        const response = {
            success: true, // adicionar essa linha
            usuarios: docs.map(doc => {
                return {
                    _id: doc._id,
                    nome: doc.nome,
                    sobrenome: doc.sobrenome,
                    telefone: doc.telefone,
                    email: doc.email,
                    favoritos: doc.favoritos,
                    admin: doc.admin,
                    funcionario: doc.funcionario
                }
            })
        }
        res.status(200).json(response)
    }).catch(err => {
        res.status(404).json({ message: 'usuarios nao encontrados' })
    })
})

// apiRoutes.get('/usuarios/:_id', (req, res) => {
//     Usuario.find({_id: req.params._id}, (err, usuarios) => {
//         res.json(usuarios)
//     })
// })

// apiRoutes.get('/usuarios/:email', (req, res) => {
//     Usuario.find({email: req.params.email}, (err, usuarios) => {
//         res.json(usuarios)
//     })
// })

// apiRoutes.get('/usuarios/:email', (req, res) => {
//     Usuario.find().distinct('email', (err, usuarios) => {
//     res.json(usuarios)
//     })
// })


apiRoutes.put('/usuarios/:_id', (req, res) => {

    // const updateOps = {};
    // for (const ops of req.body) {
    //   updateOps[ops.propName] = ops.value;
    // }

    // Usuario.update({ _id: req.params._id }, { $set: updateOps })
    //     .exec()
    //     .then(result => {
    //         res.status(200).json({ message: 'Usuario alterado!! '})
    //     }).catch (err => {
    //         console.log(err)
    //         res.status(500).json({ message: 'Erro ao alterar!!!' })
    //     })
    Usuario.findOneAndUpdate({ _id: req.params._id }, req.body, { upsert: true}, (err, usuarios) => {
        if(err) {
            res.status(500).json({ message: 'Falha ao alterar os dados do usuario' })
            return
        } else {
            res.status(200).json({ message: 'Sucesso ao alterar!!' })
        }
    })
})

apiRoutes.delete('/usuarios/:_id', (req, res) => {
    Usuario.remove({ _id: req.params._id })
        .exec()
        .then(result => {
            res.status(200).json({ message: 'Usuario deletado' })
        }).catch (err => {
            console.log(err)
            res.status(500).json({ message: 'Falha ao deletar' })
        })
    // Usuario.find({ _id: req.params._id }).remove( (err) => {
    //     if(err) {
    //         res.status(500).json({ message: 'Falha ao deletar usuario' })
    //         return
    //     }
    //     res.json({ success: true })
    // })
})

// ============================================

apiRoutes.post('/registroimovel', upload.single('imvImg'), (req, res) => {
    let novoImovel = new Imovel({
        tipo: req.body.tipo,
        valor: req.body.valor,
        disp: req.body.disp,
        area: req.body.area,
        quartos: req.body.quartos,
        vagas: req.body.vagas,
        suite: req.body.suite,
        desc: req.body.desc,
        rua: req.body.rua,
        cep: req.body.cep,
        bairro: req.body.bairro,
        nro: req.body.nro,
        imvImg: req.file.path
    })

    Imovel.findOne({ tipo: req.body.tipo , area: req.body.area, cep: req.body.cep, nro: req.body.nro  }, (err, imovel) => {
        if( imovel == null ){
            novoImovel
                .save()
                .then(result => {
                    res.status(200).json({
                        message: 'Imovel cadastrado com SUCESSO!!',
                        ImovelCriado: {
                            _id: result._id,
                            tipo: result.tipo,
                            valor: result.valor,
                            disp: result.disp,
                            area: result.area,
                            quartos: result.quartos,
                            vagas: result.vagas,
                            suite: result.suite,
                            desc: result.desc,
                            rua: result.rua,
                            cep: result.cep,
                            bairro: result.bairro,
                            nro: result.nro,
                            imvImg: result.imvImg
                        }
                    })
                }).catch(err => {
                    res.status(500).json({ message: 'Existe alguma informacao imcompleta' })
                })
        } else {
            res.status(500).json({ message: 'Imovel Existente' })
        }
        //     newImovel.save( (err) => {
        //         if(err){
        //             console.log(error)
        //         }else{
        //         console.log('sucesso!!')
        //             res.json({
        //                 success: true
        //             })
        //      } 
        //     })
        // } else {
        //     res.status(500).json({ message: 'Imovel ja existe '})
        // }
    })
    
})

apiRoutes.patch('/imoveis', (req, res) => {

    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }

    Imovel.update({ _id: req.params._id }, { $set: updateOps })
    exec()
    .then(result => {
        res.status(200).json({ message: 'Imovel alterado!! '})
    }).catch (err => {
        console.log(err)
        res.status(500).json({ message: 'Erro ao alterar!!!' })
    })
    // Imovel.findOneAndUpdate({ _id: req.params._id }, req.body, { upsert: true }, (err, imoveis) => {
    //     if(err) {
    //         res.status(500).json({ message: 'Falha ao tentar alterar os dados do imovel' })
    //         return
    //     }
    //     res.json(imoveis)
    // })
})

apiRoutes.delete('/imoveis/:_id', (req, res) => {
    Imovel.remove({ _id: req.params._id })
        .exec()
        .then(result => {
            res.status(200).json({ message: 'Imovel deletado' })
        }).catch (err => {
            console.log(err)
            res.status(500).json({ message: 'Falha ao deletar' })
        })
    // Imovel.find({ _id: req.params._id }).remove( (err) => {
    //     if(err) {
    //         res.status(500).json({ message: 'Falha ao tentar deletar o imovel' })
    //         return
    //     }
    //     res.json({ success: true })
    // })
})

// ============================================