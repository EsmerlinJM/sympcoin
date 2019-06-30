<template>
    <div>
        <BlockView
            :blocks="blocks"
        >
        </BlockView>
    </div>
</template>

<script>
import BlockView from '@/components/block/BlockView.vue'
export default {
    components: {
        BlockView
    },
    data() {
        return {
            blocks: []
        }
    },
    mounted() {
        this.blocks.push(...this.$store.state.services.BlockChainService.getBlocks());
    }
}
</script>

<style>

</style>
