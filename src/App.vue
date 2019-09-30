<template>
  <div id="app">
    <h1 style="text-align: center">MoviHub</h1>
    <p style="text-align: center;">
      by
      <a
        style="color: #ffffff"
        href="https://edmundekott.me"
        target="_blank"
        rel="noopener noreferrer"
      >Edmund Ekott</a>
    </p>

    <router-view />
  </div>
</template>

<style>
body {
  background: #001f52;
  color: #ffffff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 90%;
  margin: 1rem auto 1rem;
  background: #012764;
  min-height: 100vh;
  border-radius: 7px;
  overflow: auto;
  padding: 1rem 1rem;
}
.text-center {
  text-align: center;
}
.space-top {
  margin-top: 2rem;
}
.error {
  color: #e42323;
  display: block;
  margin-top: 1rem;
  text-align: center;
}
</style>
