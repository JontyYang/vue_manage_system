<template>
    <el-menu
            :collapse="collapse"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item  v-for="item in noChildren" :key="item.path"  :index="item.path" @click="clickMenu(item)">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
            <template slot="title" >
                <i :class="'el-icon-' + item.icon"></i>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group>

                <el-menu-item :index="item1.path" v-for="(item1,index) in item.children" :key="index" @click="clickMenu(item1)">
                    <i :class="'el-icon-' + item1.icon"></i>
                    <span>{{item1.label}}</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "CommonAside",
        methods: {
            buttonClick() {
                this.$router.push('/path')
            },
            clickMenu(item) {
                this.$router.push(item.path);
                this.$store.commit('selectMenu', item);
            }
        },
        computed: {
            noChildren() {
                return this.asideMenu.filter(item => !item.children)
                // return this.menu.filter(item => !item.children);
            },
            hasChildren() {
                return this.asideMenu.filter(item => item.children)
                // return this.menu.filter(item => item.children);
            },
            ...mapState({
                collapse: state => state.tab.isCollapse
            }),
            // menu() {
            //     return this.$store.state.tab.menu;
            // }
        },
        data() {
            return {
                asideMenu: [
                  {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home'
                  },
                  {
                    path: '/video',
                    label: '视频管理',
                    icon: 'video-play'
                  },
                    {
                        path: '/user',
                        label: '用户管理',
                        icon: 'user'
                    },
                    {
                        label: '其他',
                        icon: 'video-play',
                        children: [
                            {
                                path: '/page1',
                                label: '页面一',
                                icon: 'setting'
                            },
                            {
                                path: '/page2',
                                label: '页面二',
                                icon: 'setting'
                            }
                        ],
                    },

                ]
            }
        }
    }
</script>

<style scoped>
.el-menu {
    height: 100%;
    border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 300px;
}
</style>