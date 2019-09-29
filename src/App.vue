<template>
  <div id="app">
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
#app {
  width: 90%;
  margin: 1rem auto 1rem;
  background: #012764;
  min-height: 100vh;
  border-radius: 7px;
  overflow: auto;
  padding: 0 1rem;
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
}
</style>
