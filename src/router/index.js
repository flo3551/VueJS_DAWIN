import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/MovieList'
import Movie from '@/components/Movie'
import MovieEdit from '@/components/MovieEdit'
import Search from '@/components/Search'
import MovieAdd from '@/components/MovieAdd'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {path: '/', name: 'MovieList', component: MovieList, props: true}, 
    {path: '/movie/:id', name: 'Movie', component: Movie, props: true},
    {path: '/movie/:id/edit', name: 'MovieEdit', component: MovieEdit, props: true},
    {path: '/search', name: 'Search', component: Search},
    {path: '/movieAdd', name: 'MovieAdd', component: MovieAdd}


  ]
})