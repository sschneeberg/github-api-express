//modules
const express = require('express');
const axios = require('axios');
//port and app
const port = process.env.PORT || 3000
const app = express();
//views and css
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/:username', (req, res) => {
    axios.get(`https://api.github.com/users/${req.params.username}`)
        .then(response => {
            let userObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            };
            res.send(userObject)
        })
})



app.listen(port, () => console.log('🎧'))