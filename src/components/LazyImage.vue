<template>
  <img :src="srcImage" height="500" width="500">
</template>

<script>
  export default {
    props: ['src'],
    data: () => ({ observer: null, intersected: false }),
    computed: {
      srcImage () {
        return this.intersected ? this.src : ''
      }
    },
    mounted () {
      this.observer = new IntersectionObserver(entries => {
        const image = entries[0]
        if (image.isIntersecting) {
          this.intersected = true
          this.observer.disconnect()
        }
      }, {
        rootMargin: '150px',
        threshold: 0.23
      })
      this.observer.observe(this.$el)
    },
    destroyed () {
      this.observer.disconnect()
    }
  }
</script>
<style scoped>
img {
  object-fit: contain;
}
</style>
