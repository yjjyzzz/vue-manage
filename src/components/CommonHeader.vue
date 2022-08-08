<template>
    <header>
        <div class="l-content">
            <el-button plain icon="el-icon-menu" size="mini"></el-button>
            <h3 style="color: #fff">首页</h3>
        </div>
        <div class="r-content">
            <el-dropdown triger="click" size="mini">
                <span>
                    <img src="userImg" alt="">
                </span>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    name: 'CommonHeader',
    data() {
        return {
            userImg: require('../assets/images/user.png')
        }
    }
}

</script>
<style scoped>
</style>