<template>
<v-app>
    <v-container>

        <v-flex lg4 offset-lg4 md4 offset-md4>
          <v-layout row>
              <h1>Ajout d'un nouveau film</h1>
          </v-layout>
        </v-flex>
        <v-layout row>
            <form @submit.prevent="addMovie">
                <v-layout row mb-3>
                  <label for="titre">Titre :</label>
                  <input v-model="titre" id="titre" placeholder="Titre..." color="primary">
                </v-layout>

                <v-layout row mb-3>
                  <label for="annee">Année :</label>
                  <input v-model="annee" id="annee" placeholder="Année de sortie..">
                </v-layout>

                <v-layout row mb-3>
                  <label for="langue">Langue</label>
                  <input v-model="langue" id="langue" placeholder="Langue..">
                </v-layout>

                <v-layout row mb-3>
                  <label for="genre">Genre :</label>
                  <input v-model="genre" id="genre" placeholder="Genre..">
                </v-layout>

                <v-layout row mb-3>
                  <label for="realNom">Nom du réalisateur</label>
                  <input v-model="realNom" id="realNom" placeholder="Nom du réalisateur..">
                </v-layout>

                <v-layout row mb-3>
                  <label for="realDateN">Date de naissance</label>
                  <input v-model="realDateN" id="realDateN" placeholder="Date de naissance..">
                </v-layout>

                <v-layout row mb-3>
                  <label for="realNat">Nationalité</label>
                  <input v-model="realNat" id="realNat" placeholder="Nationalité du réalisateur..">
                </v-layout>

                <v-layout row mb-3>
                  <label for="poster">URL Poster :</label>
                  <input v-model="poster" id="poster" placeholder="'https://votreURL.com/uneImage.jpg'">
                </v-layout>

                <v-layout row mb-3>
                  <v-btn class="primary" type="submit">
                      Enregistrer
                  </v-btn>
                </v-layout>
            </form>
        </v-layout>
    </v-container>
</v-app>
</template>
<script>
    export default{
      data () {
        return {
          titre: '',
          annee: '',
          langue: '',
          genre: '',
          realNom: '',
          realDateN: '',
          realNat: '',
          poster: ''
        }
      },
      computed: {
      },
      methods: {
        addMovie () {
          const filmData = {
            titre: this.titre,
            annee: this.annee,
            langue: this.langue,
            genre: this.genre,
            realNom: this.realNom,
            realDateN: this.realDateN,
            realNat: this.realNat,
            poster: this.poster
          }
          this.$store.dispatch('addMovie', filmData)
          this.$router.push('/')
        }
      }
    }
</script>