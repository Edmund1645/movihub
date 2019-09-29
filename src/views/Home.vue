<template>
  <div id="home">
    <h2 class="text-center space-top">Search for your movie</h2>
    <p class="text-center">
      <em>*click a movie card to see details about it</em>
    </p>
    <div id="search-field">
      <input v-model="title" @keyup.enter="getContent" id="search" type="text" placeholder="Enter Movie Title" />
      <button id="search-button" @click="getContent">Search</button>
    </div>
    <span class="error"></span>
    <div class="results">
      <div class="space-top" v-for="(result,index) in results" :key="index">
        <Poster :movie="result"></Poster>
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
      title: ''
    };
  },
  methods: {
    getContent() {
      if (this.title !== '') {
        document.querySelector('.error').textContent = '';
        axios
          .get(`https://www.omdbapi.com/?s=${this.title}&apikey=${process.env.VUE_APP_OMDB_API_KEY}`)
          .then(search => this.$store.commit('place_searches', JSON.parse(search.request.response).Search))
          .catch(err => console.error(err));
      } else {
        document.querySelector('.error').textContent = 'Enter a title first!';
      }
    }
  },
  computed: {
    results() {
      return this.$store.getters.get_searches;
    }
  }
};
</script>

<style scoped>
#search-field {
  display: flex;
  justify-content: center;
}
#search {
  padding: 0.4rem;
  width: 250px;
  border-radius: 4px;
  border: none;
}
#search-button {
  margin-left: 1rem;
  padding: 0.4rem;
  border-radius: 4px;
  border: none;
}
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
