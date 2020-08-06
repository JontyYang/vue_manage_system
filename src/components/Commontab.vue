<template>
    <div class="tags">
        <el-tag
                size="small"
                :key="tag.name"
                v-for="tag in tags"
                :closable="tag.name !== 'home'"
                :disable-transitions="false"
                @close="handleClose(tag)"
                @click="changeMenu(tag)"
                :effect="$route.path === tag.path ? 'dark': 'plain'"
        >
            {{tag.label}}
        </el-tag>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        name: "Commontab",
        computed: {
          ...mapState({
              tags: state => state.tab.tabList
          })
        },
        data() {
            return {
                inputVisible: false,
                inputValue: ''
            };
        },
        methods: {
            // ...mapMutations({
            //    close: 'closeTab'
            // }),
            handleClose(tag) {
               // this.close(tag);
                this.$store.commit('closeTab', tag);
            },
            changeMenu(item) {
                this.$router.push(item.path);
                this.$store.commit('selectMenu', item);
            }
        }
    }
</script>

<style scoped lang="scss">
.tags{
    padding: 20px;
    .el-tag {
        margin-right: 15px;
    }
}
</style>