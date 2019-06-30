<template>
  <div id="app">
    <NavBar></NavBar>
    <Block></Block>
  </div>
</template>
<script>
import NavBar from '@/components/shared/NavBar.vue'
import Block from '@/components/block/Block.vue'

export default {
  components: {
    NavBar, Block
  }
}
</script>

<style lang="scss">
</style>
