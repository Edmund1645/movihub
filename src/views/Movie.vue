<template>
  <div class="transition-wrapper">
    <div id="top-section">
      <p @click="$router.go(-1)">&larr;</p>
    </div>
    <span class="error">{{error}}</span>
    <div class="container" id="movie">
      <div class="vld-parent">
        <Loading
          :active.sync="isLoading"
          :is-full-page="fullPage"
          :loader="'bars'"
          :opacity="1"
          :background-color="'#001f52'"
          :color="'#ff3e3e'"
        ></Loading>
      </div>
      <div class="content">
        <img
          v-if="movie.Poster !== 'N/A'"
          class="poster"
          :src="movie.Poster"
          :alt="`poster of ${movie.Title}`"
        />
        <p v-else>No poster available</p>
        <div class="meta">
          <p>
            <strong>Title</strong>
            - {{movie.Title}}
          </p>
          <p>
            <strong>Rated</strong>
            - {{movie.Rated}}
          </p>
          <p>
            <strong>Year</strong>
            - {{movie.Year}}
          </p>
          <p>
            <strong>Country</strong>
            - {{movie.Country}}
          </p>
          <p>
            <strong>Genre</strong>
            - {{movie.Genre}}
          </p>
          <p>
            <strong>Langauge</strong>
            - {{movie.Language}}
          </p>
          <p>
            <strong>Director</strong>
            - {{movie.Director}}
          </p>
          <p>
            <strong>Actors</strong>
            - {{movie.Actors}}
          </p>
          <p>
            <strong>Ratings</strong>
            -
            <span
              v-for="(rating, index) in movie.Ratings"
              :key="index"
            >{{rating.Source}}: {{rating.Value}}, &nbsp;</span>
          </p>
          <p>
            <strong>IMDB Votes</strong>
            - {{movie.imdbVotes}}
          </p>
        </div>
        <h2 class="space-top">Story</h2>
        <p style="line-height: 1.5rem">{{movie.Plot}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      error: '',
      isLoading: false,
      fullPage: true,
      movie: {}
    };
  },
  computed: {
    retreiveMovie: {
      get: function() {
        return this.movie;
      },
      set: function(movie) {
        this.movie = movie;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let storeHas = vm.$store.getters.get_views.find(view => view.imdbID === to.params.id);
      if (storeHas) {
        let movie = storeHas;
        vm.movie = movie;
      } else {
        vm.isLoading = true;
        axios
          .get(`https://www.omdbapi.com/?i=${to.params.id}&plot=full&apikey=${process.env.VUE_APP_OMDB_API_KEY}`)
          .then(movie => {
            vm.$store.commit('place_views', movie.data);
            vm.retreiveMovie = movie.data;
            vm.isLoading = false;
          })
          .catch(err => (vm.error = "something's wrong, try again"));
      }
    });
  }
};
</script>
 
<style scoped>
div#top-section {
  width: 90%;
  margin: auto;
}
div#top-section p {
  font-size: 2rem;
  margin: 0;
  width: fit-content;
  cursor: pointer;
}
.content {
  margin-left: 4%;
  margin-top: 20px;
}
.poster {
  margin-right: 50px;
  width: 150px;
}
.meta {
}
</style>
 