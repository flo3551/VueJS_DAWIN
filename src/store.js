import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    movies: [
    	   {
    		id:1,
    		titre: 'Le Dictateur',
    		annee: 1940,
    		langue: 'Anglais',
    		realisateurNom: 'Charlie Chaplin',
    		realisateurDateN: 1889,
    		realisateurNationalite: 'N',
    		genre: 'Comédie',
            notes: [],
            poster: 'https://media.senscritique.com/media/000000171168/source_big/Le_Dictateur.jpg'
    	   },
    	   {
    		id:2,
    		titre: 'Django Unchained',
    		annee: 2013,
    		langue: 'Anglais',
    		realisateurNom: 'Quentin Tarentino',
    		realisateurDateN: 1963,
    		realisateurNationalite: 'N',
    		genre: 'Western',
            notes: [],
            poster: 'https://s2.thcdn.com/productimg/600/600/11378194-7024441822445904.JPG'
    	   },
    	   {
    		id:3,
    		titre: 'Hunger Games',
    		annee: 2012,
    		langue: 'Anglais',
    		realisateurNom: 'Gary Ross',
    		realisateurDateN: 1956,
    		realisateurNationalite: 'N',
    		genre: 'Action',
            notes: [],
            poster: 'http://fr.web.img5.acsta.net/medias/nmedia/18/85/51/91/20018884.jpg'
    	   }
        ]
  },
    getters: {
        getMovies: state => {
          return state.movies
        },

        getMovieById: state => id => {
            return state.movies.find(movies => movies.id === id)
        },
        getNoteByMovieId: state => id => {

            var lefilm =  state.movies.find(movies => movies.id == id)
            if(lefilm.notes.length == 0){
                //Si  il n'y a aucune note
                return null;
            }
            else{
                // Sinon, calcul de la moyenne
                var sum = 0;
                for(var i=0; i<lefilm.notes.length; i++){
                    sum += parseInt(lefilm.notes[i], 10)
                }
                return sum/lefilm.notes.length;
            }
        },
        searchMovie: state=> stringSearch =>{
            var leTab = []
            for(var i=0; i<state.movies.length;i++){
                if(state.movies[i].titre.includes(stringSearch)){
                    leTab.push(state.movies[i]);
                }
            }
            return leTab;
        }
    },
    mutations: {
        editMovie:  state => leFilm => {
            var film = state.movies.find(movies => movies.id === leFilm.id);
            film.titre = leFilm.titre;
            film.annee = leFilm.annee;
            film.langue = leFilm.langue;
            film.realisateurNom = leFilm.realisateurNom;
            film.realisateurNationalite = leFilm.realisateurNationalite;
            film.realisateurDateN = leFilm.realisateurDateN;
            film.genre = leFilm.genre;
            film.poster = leFilm.poster;
        },
        removeMovie(state,payload){
            var removeIndex = state.movies.map(function(item) { return item.id; }).indexOf(payload);
            state.movies.splice(removeIndex, 1)
        },
        addMovie (state, payload){
            state.movies.push(payload)
        },
        addNote(state, payload){
            const film = payload.film
            film.notes.push(payload.note)
        },

    },
    actions: {
        supprMovie({ commit }, payload) {
            commit("removeMovie", payload.id )
        },
        searchMovie({commit}, payload){
            commit("searchMovie", payload.search)
        },
        addMovie({commit}, payload){
            // id = l'id du dernier élément du tableau + 1 
            const film = {
                id: this.state.movies[this.state.movies.length -1].id + 1,
                titre: payload.titre,
                annee: payload.annee,
                langue: payload.langue,
                realisateurNom: payload.realNom,
                realisateurDateN: payload.realDateN,
                realisateurNationalite: payload.realNat,
                genre: payload.genre,
                poster: payload.poster, 
                notes: []
            }
            commit('addMovie', film)
        },
        addNote({commit}, payload){
            const filmToNote = this.state.movies.find(movies => movies.id === payload.id) 
            commit("addNote", {film : filmToNote, note: payload.note})
        }
    }
    
});