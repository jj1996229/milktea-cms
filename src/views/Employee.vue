<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <img src="https://img0.baidu.com/it/u=1622302095,871955617&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt=""
          class="logo">
        <el-menu active-text-color="#ffd04b" background-color="#FFF0F5" :default-active="active"
          text-color="#000000" @open="handleOpen" @close="handleClose" router>
          <el-menu-item index="/employee">
            <el-icon>
              <User />
            </el-icon>
            <span>员工管理</span>
          </el-menu-item>
          <el-menu-item index="/employee/category">
            <el-icon>
              <Setting />
            </el-icon>
            <span>分类管理</span>
          </el-menu-item>
          <el-menu-item index="/employee/drink">
            <el-icon>
              <MilkTea />
            </el-icon>
            <span>奶茶管理</span>
          </el-menu-item>
          <el-menu-item index="/employee/combo">
            <el-icon>
              <Present />
            </el-icon>
            <span>套餐管理</span>
          </el-menu-item>
          <el-menu-item index="/employee/orders">
            <el-icon>
              <Document />
            </el-icon>
            <span>订单明细</span>
          </el-menu-item>
          <el-menu-item index="/employee/stats">
            <el-icon>
              <Coin />
            </el-icon>
            <span>统计分析</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <h3>员工管理</h3>
          <div class="user">
            <span>管理员</span>
            <el-icon class="quit">
              <SwitchButton />
            </el-icon>
          </div>
        </el-header>
        <el-main>
          <Router-View />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const active = ref( route.path )
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  background: #FFF0F5;
  align-items: center;
}

.user span {
  margin-right: 10px;
}

.user el-icon {
  cursor: pointer;
}

.quit {
  cursor: pointer;
  font-size: 20px;
}

.logo {
  height: 200px;
  vertical-align: middle;
}

.el-menu {
  height: calc(100vh - 200px);
}

.is-active {
  color: black !important;
  background-color: #FFD700;
}</style>