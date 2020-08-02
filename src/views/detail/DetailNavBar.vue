
<template>
    <div >
        <nav-bar>
        <div slot="left" @click="backClick"><img src="~assets/img/tabbar/添加.png" class="left"></div>
        <div slot="center" class="titles">
            <div v-for="(itme,i) in titles" :key="i" class="titles-item" :class="{active:i==currentIndex}" @click="titleClick(i)">{{itme}}</div>
        </div>
        </nav-bar>
        
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default{
    name:"DetailNavBar",
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        NavBar,
        
    },
    data(){
        return {
            titles:['商品','详情','推荐'],
            
            currentIndex:0
        }
    },
    methods:{
        titleClick(i){
            this.currentIndex=i
            this.$emit('titleClick',i)
        },
        backClick(){
            this.$router.back()//路由返回

        }
    }
}
</script>

<style scoped>
    .titles{
        display: flex;
        font-size: 13px;
    }
    .titles-item{
        flex: 1;
    }
    .active{
        color: royalblue;
    }
    .left{
        width:13px;
        height: 13px;
        margin-top: 10px;
    }
    /* .imgx{
        width: 100%;
    } */
    /* .fimg{
        height: 500px;
        overflow:scroll;
    } */
</style>