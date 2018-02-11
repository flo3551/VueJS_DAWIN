<template>
<v-app>
  <div class="container">
    <v-container  grid-list-md>

        <v-flex mb-2 lg4 offset-lg4 md4 offset-md4>
          <v-layout row>
            <h1> Liste des films </h1>
          </v-layout>
          <v-layout row mb-5>
              <v-btn round color="blue-grey lighten-2" :to="{ name:'MovieAdd'}"><v-icon dark>add</v-icon> Nouveau film </v-btn>
              <v-btn round color="blue-grey lighten-2" :to="{ name:'Search'}"><v-icon dark>search</v-icon> Rechercher un film </v-btn>
          </v-layout>  
        </v-flex>
      <div v-for="movie in lesFilms" :key="movie.id" class="mb-4">
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

 

    </v-container>
  </div>
</v-app>
</template>



<script>
  /* eslint-disable no-new */

  export default {
    computed: {
      lesFilms(){
        return this.$store.state.movies;
      }
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cardFilm{
    box-shadow: 2px px 0px #3d3d3d; 
}
ul {
  list-style-type: none;
 
}

a {
  color: #3e526b;
}
</style>
