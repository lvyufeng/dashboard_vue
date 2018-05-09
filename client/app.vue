<template>
    <div id="app">
        <div id="cover">
        </div>
        <Header></Header>
        <!--<board></board>-->
      <router-link to="/app">board</router-link>
      <router-link to="/login">login</router-link>
      <transition>
        <router-view/>
      </transition>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './views/layout/head.vue'
    import Footer from './views/layout/footer.jsx'
    import Board from './views/board/board.vue'
    export default {
      components: {
        Header,
        Board,
        Footer
      }
    }
</script>

<style lang="stylus" scoped>
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
#cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1

</style>
