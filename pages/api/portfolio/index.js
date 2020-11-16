const portfolio = [
    {
      "id": 1,
      "name": "Podcast",
      "repository": "https://github.com/luismabr1/Podcast-NextJS",
      "image_url": "https://i.postimg.cc/8Cmj9pYT/podcast-img.png",
      "url": "https://podcast-rho-nine.now.sh/",
      "description": "Pagina de consumo de API hecha con NextJS durante el curso de NextJS Practico de Platzi",
      "year":"2019",
      "autor": {
        "name": "Luis Manuel Brito",
        "github": "luismabr1",
      }
    },
    {
      "id": 2,
      "name": "100tifi.co",
      "repository": "https://github.com/luismabr1/cientifico",
      "image_url": "https://i.postimg.cc/WpHmFHzs/cientifico-image.png",
      "url": "https://luismabr1.github.io/cientifico/",
      "year":"2019",
      "description": "Pagina de consumo de API hecha con Vanilla Javascript durante el curso de Vanilla Javascript  de Platzi",
      "autor": {
        "name": "Luis Manuel Brito",
        "github": "luismabr1",
      }
    }
  ]

  export default(req, res) =>{
      res.statusCode= 200
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(portfolio))
  }
