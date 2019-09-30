<template>
  <div class="transition-wrapper">
    <div class="container" id="home">
      <h2 class="text-center space-top">Search for your movie</h2>
      <p class="text-center">
        <em>*click a movie card to see details about it</em>
      </p>
      <div id="search-field">
        <input
          v-model="title"
          @keyup.enter="getContent"
          id="search"
          type="text"
          placeholder="Enter Movie Title"
        />
        <button id="search-button" @click="getContent">Search</button>
        <br />
        <button id="clear-button" @click="clearContent">Clear Searches</button>
      </div>
      <span class="error">{{error}}</span>
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
      <div class="results">
        <div class="space-top" v-for="(result,index) in results" :key="index">
          <Poster :movie="result"></Poster>
        </div>
      </div>
      <hr />
      <h2>Your Views: {{views.length}}</h2>
      <button id="views-clear-button" @click="clearViews">Clear Views</button>
      <div class="results">
        <div class="space-top" v-for="(view, index) in views" :key="index">
          <Poster :movie="view"></Poster>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Poster from '@/components/Poster.vue';
export default {
  name: 'home',
  components: {
    Poster
  },
  data() {
    return {
      title: '',
      error: '',
      isLoading: false,
      fullPage: true
    };
  },
  methods: {
    getContent() {
      if (this.title !== '') {
        this.isLoading = true;
        document.querySelector('.error').textContent = '';
        axios
          .get(`https://www.omdbapi.com/?s=${this.title.trim()}&apikey=${process.env.VUE_APP_OMDB_API_KEY}`)
          .then(search => {
            this.$store.commit('place_searches', JSON.parse(search.request.response).Search);
            window.setTimeout(() => (this.isLoading = false), 1000);
          })
          .catch(err => (this.error = "something's wrong, try again"));
      } else {
        document.querySelector('.error').textContent = 'Enter a movie title first!';
      }
    },
    clearContent() {
      this.$store.commit('clear_searches', []);
    },
    clearViews() {
      this.$store.commit('clear_views', []);
    }
  },
  computed: {
    results() {
      return this.$store.getters.get_searches;
    },
    views() {
      return this.$store.getters.get_views;
    }
  }
};
</script>

<style scoped>
#search-field {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 50px;
}
#search {
  padding: 0.4rem;
  width: 250px;
  border-radius: 4px;
  border: none;
  height: max-content;
  margin-bottom: 15px;
}
#search-button,
#clear-button {
  margin-left: 1rem;
  padding: 0.4rem;
  border-radius: 4px;
  border: none;
  height: max-content;
  margin-bottom: 15px;
}
#views-clear-button {
  padding: 0.4rem;
  border-radius: 4px;
  border: none;
  margin-bottom: 15px;
}
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 300px;
}
.results * {
  margin-left: 4rem;
  margin-right: 4rem;
  cursor: pointer;
  transition: 0.3s;
}
.results div:hover {
  transform: translateY(-10px);
  transition: transform 0.3s;
}
</style>
