<template>
    <el-container style="height:100%;">
        <el-aside width="auto">
            <CommonAside></CommonAside>
        </el-aside>
        <el-container>
            <el-header>
                <CommonHeader></CommonHeader>
            </el-header>
            <Commontab></Commontab>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonHeader from "../components/CommonHeader";
    import CommonAside from "../components/CommonAside";
    import Commontab from "../components/Commontab";
    export default {
        components: {
            CommonAside,
            CommonHeader,
            Commontab
        },
        name: "Main"
    }
</script>

<style scoped>
.el-header {
    background-color: #333;
}
.el-main {
    padding-top: 0;
}
</style>