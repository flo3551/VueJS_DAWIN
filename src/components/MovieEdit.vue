<template>
<v-app>
	<div>
		<h1>Modification d'une fiche</h1>

		<p> Film n° : {{ $route.params.id }} </p>

		<!-- Affichage des données -->
		<v-flex lg4 offset-lg4 md4 offset-md4>
			<v-layout row mb-3>
				<label for="titre">Titre :</label>
				<input v-model="leFilm.titre" id="titre">
			</v-layout>

			<v-layout row mb-3>
				<label for="annee">Année de sortie : </label>
				<input v-model="leFilm.annee" id="annee">
			</v-layout>


			<v-layout row mb-3>
				<label for="genre">Genre : </label>
				<input v-model="leFilm.genre" id="genre">
			</v-layout>
			
			<v-layout row mb-3>
				<label for="langue">Langue : </label>
				<input v-model="leFilm.langue" id="langue">
			</v-layout>

			<v-layout row mb-3>
				<label for="realNom">Réalisateur : </label>
				<input v-model="leFilm.realisateurNom" id="realNom">
			</v-layout>

			<v-layout row mb-3>
				<label for="dateN">Date de naissance : </label>
				<input v-model="leFilm.realisateurDateN" id="dateN">
			</v-layout>

			<v-layout row mb-3>
				<label for="nationalite">Nationalité : </label>
				<input v-model="leFilm.realisateurNationalite" id="nationalite">
			</v-layout>

			<v-layout row mb-3>
				<label for="poster">Poster URL :</label>
				<input v-model="leFilm.poster" id="poster" placeholder="'https://votreURL.com/uneImage.jpg'">
			</v-layout>

			<v-btn color="primary" v-on:click="editMovie">Enregistrer</v-btn>
		</v-flex>
	</div>
</v-app>
</template>



<script type="text/javascript" src="../../node_modules/vuex/dist/vuex.js"></script>
<script>
	/* eslint-disable no-new */

	export default {
		data: function(){
			return{
				leFilm: this.$route.params.leFilm		
			}
		},
		methods: {

			editMovie: function(){
				var filmModif = this.leFilm;
				this.$store.commit('editMovie', {film : filmModif	})
				this.$router.push('/')
			}
		}	
	}
</script>
