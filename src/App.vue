<template>
  <div id="app" class="parent">
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
    <transition :name="transitionName" class="transition">
      <router-view class="child-view" />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: 'slide-left'
    };
  },
  watch: {
    ['$route'](to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  }
};
</script>


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
  min-width: 90%;
  max-width: 90%;
  margin: 1rem auto 1rem;
  background: #012764;
  min-height: 100vh;
  border-radius: 7px;
  overflow: auto;
  padding: 1rem 1rem;
  position: relative;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  width: 100%;
  left: 0;

  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
