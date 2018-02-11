<template>
<v-app>
	<h1>Recherche par titre</h1>
	<v-layout row>
		<form @submit.prevent="searchMovie">
    		<input v-model="titre" id="titre" placeholder="Titre..." color="primary">
            <v-btn class="primary" type="submit">
                Rechercher
            </v-btn>
    	</form>
	</v-layout>
		<div v-for="movie in result" :key="movie.id" class="mb-2">
       	  <v-flex xs12  md6 offset-md3 lg6 offset-lg3>
            <v-card color="grey lighten-1" class="cardFilm">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">{{movie.titre}}</div>
                      <div>
                        <v-btn small color="primary" :to="{name:'Movie', params:{ id: movie.id }}"> Voir fiche</v-btn>              
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      :src="movie.poster"
                      height="125px" width="auto"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
      	</div>
</v-app>
</template>


<script >
	export default{
		data: function(){
			return{
				titre: '',
				result: []
			}
		},
		computed: {
			searchMovie(){
				var result = this.$store.getters.searchMovie(this.titre)

				if(result.length>0){
					return this.result = result;
				}
				else{
					return null;
				}
			}
		}
	}
</script>