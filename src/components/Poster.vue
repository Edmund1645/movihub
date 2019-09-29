<template>
  <div class="poster">
    <img :src="movie.Poster" :alt="`poster of ${movie.Title}`" style="width: 100%" />
    <div class="meta-data">
      <h3>{{movie.Title}}</h3>
      <h4>{{movie.Year}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Poster',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.poster {
  width: 300px;
  margin: auto;
  background: #062d6d;
  border-radius: 4px;
  overflow: hidden;
}
.poster .meta-data {
  padding: 0.5rem 1.2rem;
}
</style>
