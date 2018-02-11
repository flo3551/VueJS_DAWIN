<template>
<v-app>

<div>	

	<h2>  {{ leFilm.titre }}</h2> 
	<img class="card-img-top" :src="leFilm.poster" alt="Poster">
	<p> Date de sortie : {{ leFilm.annee}} </p>
	<p> Réalisateur : {{ leFilm.realisateurNom }} </p>
	<p> Genre : {{ leFilm.genre }}</p>
	<p> Langue : {{ leFilm.langue}}</p>
	<p> Note : {{laNote}} </p>
    <v-flex xs12 md4 offset-md4 lg4 offset-lg4>
      <v-card color="grey lighten-1">
        <v-card-title primary-title>
          <div class="textCard">Vous avez vu ce film ? Dites-nous ce que vous en avez pensé !</div>
        </v-card-title>
        <v-card-actions text-center>
            <form @submit.prevent="noteFilm">
	        	<select v-model="selected">
				  <option disabled value="" class="textCard" right >Notez..</option>
				  <option>1</option>
				  <option>2</option>
				  <option>3</option>
				  <option>4</option>
				  <option>5</option>
				</select>
	          	<v-btn color="primary" type='submit' left>Valider</v-btn>
			</form>
			<br/>
        </v-card-actions>
      </v-card>
    </v-flex>


	<!-- Redirection page d'édition, avec le film en Parametre -->
	<v-btn round color="blue-grey lighten-2" :to="{ name:'MovieEdit', params:{ leFilm: this.leFilm }}"><v-icon dark>edit</v-icon> Modifier </v-btn>

	<v-btn round color="blue-grey lighten-2" v-on:click="supprFilm">Suppr.</v-btn>

</div>
</v-app>
</template>

<script type="text/javascript" src="../../node_modules/vuex/dist/vuex.js"></script>

<script>
	/* eslint-disable no-new */

	export default {
		data: function(){
			return{
				selected: ''
			}
		},
		computed: {
			lesFilms(){
				return this.$store.getters.getMovies;
			},
			leFilm(){
				return this.$store.getters.getMovieById(this.$route.params.id);
			},
			laNote(){
				var note=  this.$store.getters.getNoteByMovieId(this.$route.params.id);
				if(note==null)
				{
					return 'Soyez le premier à noter ce film !';
				}
				else{
					return note;
				}
			}
		},
		methods:{
	        supprFilm: function(){
	          this.$store.dispatch('supprMovie', {id :this.$route.params.id})
	          this.$router.push('/')
	        },
	        noteFilm: function(){
	        	const laNote = this.selected
	        	this.$store.dispatch('addNote', {id: this.$route.params.id, note: laNote})
	        }
      } 	
	}
</script>








