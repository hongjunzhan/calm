<template>
 <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
    <mu-bottom-nav-item href="#/" value="movies" title="All" icon="ondemand_video"/>    
    <mu-bottom-nav-item value="books" title="Looks" icon="books"/>
    <mu-bottom-nav-item value="pictures" title="Mine" icon="photo"/>
</mu-bottom-nav>
</template>
<script>
export default {
  data () {
    return {
      bottomNav: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style scoped>
	.mu-bottom-nav{position: fixed;bottom: 0;}
</style>