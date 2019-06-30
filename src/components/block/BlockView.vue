<template>
  <div class="container is-fluid">
      <div class="container is-fluid">
          <h1 class="title">SympCoin Blockchain</h1>
        <h5 class="subtitle is-5">Each cards represents a block on the chain. Click on <strong>show</strong>
        to see the transactions stored inside.</h5>
      </div>
        <br>
    <div class="notification">
    
      <div class="columns">
        <div class="column is-one-third" v-for="block in blocks" :key="block.hash">
          <div class="tile">
            <article class="tile is-child notification is-warning">
              <p class="title is-size-5">
                Block
                <span class="tag is-dark" v-if="block.previousHash === '0'">{{ block.previousHash === '0' ? 'Genesis block' : '' }}</span>
              </p>
              <hr />
              <p class="subtitle is-size-6">
                <b>Hash</b>
                <p :class="block.previousHash === '0' ? 'text-truncate has-text-info' : 'text-truncate' ">{{ block.hash }}</p>
                <br>
              </p>

              <p class="subtitle is-size-6">
                <b>Hash of previous block</b>
                <p :class="block.previousHash !== '0' ? 'text-truncate has-text-info' : 'text-truncate' ">{{ block.previousHash }}</p>
              </p>
                <hr/>

              <p class="subtitle is-size-6">
                <b>Nonce</b>
                <p class="text-truncate">{{ block.nonce }}</p>
              </p>
              <hr/>

              <p class="subtitle is-size-6">
                <b>Timestamp</b>
                <p class="text-truncate">{{ block.timestamp }}</p>
              </p>

              <br>
              <button class="button is-dark">Show</button>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div class="notification">
        <TransactionTable></TransactionTable>
    </div>
    
  </div>
</template>

<script>
import TransactionTable from '@/components/transaction/TransactionTable.vue'

export default {
  components: {
      TransactionTable
  },
  props: ["blocks"],
  created() {
    console.log(this.$props.blocks);
  }
};
</script>

<style scoped lang="scss">
.subtitle {
    margin-bottom: 0em !important;
}
.text-truncate{
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
