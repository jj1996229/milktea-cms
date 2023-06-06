<template>
    <el-row>
        <el-col v-for="(o, index) in 4" :key="0" :span="4" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
                <img src="https://img.zcool.cn/community/01f0ce5bd47d57a801213dea1481e2.jpg@1280w_1l_2o_100sh.jpg"
                    class="image" />
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">{{ currentDate }}</time>
                        <el-button text class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style lang="scss" scoped>
.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}
</style>