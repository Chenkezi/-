<template>
 
    <tab-bar>
      <tab-bar-item path="/home" activeColor="cornflowerblue">
        <img slot="item-icon" src="../assets/img/tabbar/关闭.png">
        <img slot="item-icon-active" src="../assets/img/tabbar/添加.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor="cornflowerblue">
        <img slot="item-icon" src="../assets/img/tabbar/减少.png">
         <img slot="item-icon-active" src="../assets/img/tabbar/添加.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/cart" activeColor="cornflowerblue">
        <img slot="item-icon" src="../assets/img/tabbar/禁止.png">
         <img slot="item-icon-active" src="../assets/img/tabbar/添加.png">
        <div slot="item-text">喜欢</div>
      </tab-bar-item>
      
      <tab-bar-item path="profile" activeColor="cornflowerblue">
        <img slot="item-icon" src="../assets/img/tabbar/警告.png">
         <img slot="item-icon-active" src="../assets/img/tabbar/添加.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    
</template>

<script>
import TabBar from '../components/tabbar/TabBar'
import TabBarItem from '../components/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
 
</style>
