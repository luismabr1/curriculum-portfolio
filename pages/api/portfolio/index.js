const portfolio = [
    {
      "id": 1,
      "name": "Podcast",
      "repository": "https://github.com/luismabr1/Podcast-NextJS",
      "image_url": "https://drive.google.com/file/d/1rnT3IrAxL0tHdOj_AEwQT88D29a8gbNH/view?usp=sharing",
      "url": "https://podcast-rho-nine.now.sh/",
      "year":"2019",
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
