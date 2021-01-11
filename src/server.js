//TODO Dados

const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "98171712",
        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Gabriel Mateus",
        avatar: "https://avatars1.githubusercontent.com/u/63432698?s=400&u=2cd2ac6af73e7cc24635a8bcc2ae69504efee10c&v=4",
        whatsapp: "34998171712",
        bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject: "Física",
        cost: "100",
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]

// TODO Funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageClasses(req, res) {
    return res.render("classes.html")
}

// TODO Servidor
const express = require('express')
const server = express()


// TODO configurando nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
    // TODO Configurando Arquivos estáticos (css, scripts, imagens)
 
    .use(express.static("public"))

    // TODO rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/classes", pageClasses)
    .listen(5500)