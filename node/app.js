const express = require('express');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const movies = [	[id=1,
		    		titre = 'Le Dictateur',
		    		annee = 1940,
		    		langue = 'Anglais',
		    		realisateurNom = 'Charlie Chaplin',
		    		realisateurDateN = 1889,
		    		realisateurNationalite = 'N',
		    		genre = 'comedie'
		    		]

		    	[
		    		id=2,
		    		titre= 'Django Unchained',
		    		annee= 2013,
		    		langue= 'Anglais',
		    		realisateurNom= 'Quentin Tarentino',
		    		realisateurDateN= 1963,
		    		realisateurNationalite= 'N',
		    		genre= 'western'
		    	],

		    	[
		    		id=3,
		    		titre= 'Hunger Games',
		    		annee= 2012,
		    		langue= 'Anglais',
		    		realisateurNom= 'Gary Ross',
		    		realisateurDateN= 1956,
		    		realisateurNationalite= 'N',
		    		genre= 'Action'
		    	]]



const app = express();
app.use(bodyParser.json()); //parse JSON body
app.use(bodyParser.urlencoded({extended: true})); //parse x-www-form-urlencoded body
app.use(history({index: '/'}));
const fs = require('fs');

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: "../"
  });
});


app.get('/api/movies', (req, res) => {

  res.json(movies);
});


app.listen(8080);
