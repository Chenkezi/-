<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

        <tab-control class="tab-control tab-c" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"/>

        <scroll class="content" ref="scroll" :probe-type='3' @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
            <recommend-view :recommends="recommends"></recommend-view>
            <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"/>
            <goods-list :goods="goods[currentType].list"/>
        </scroll>

        <back-top @click.native="backClick" v-show="is"></back-top>
    </div>
</template>

<script>
//.native 组件可以点击
import RecommendView from './childComps/RecommendView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home'




export default {
    name:"Home",
    components:{
        NavBar,
        RecommendView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentType:'pop',
            is:false,
            tabOffsetTop:0,
            isTabFixed:false,
            saver:0,
        }
    },
    created(){
        //请求数据
        this.getHomeMultidata()

        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
         
        
    },
    activated(){//生命周期函数
        this.$refs.scroll.scrollTo(0,this.saver)//返回设置滚动距离
        this.$refs.scroll.refresh()//刷新长度
    },
    deactivated(){//生命周期函数
        this.saver=this.$refs.scroll.getScrollY()//离开获取滚动距离
    },
    mounted(){//生命周期函数
        //item图片加载
        const refresh=this.debounce(this.$refs.scroll.refresh,500)

        this.$bus.$on('itemImageLoad',()=>{
            refresh()
        })


        
    },
    methods:{
        //网络请求方法
        getHomeMultidata(){
            getHomeMultidata().then((res)=>{
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
            // console.log(res.data.recommend.list) 
            }) 
        },
        getHomeGoods(type){
            const page=this.goods[type].page+1;
            getHomeGoods(type,page).then((res)=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1
            // console.log(res.data) 

            this.$refs.scroll.finishPullUp()
            })
        },
        //事件监听
        tabClick(i){
            switch(i){
                case 0:
                    this.currentType='pop' 
                    break
                case 1:
                    this.currentType='new' 
                    break
                case 2:
                    this.currentType='sell' 
                    break
            }
            this.$refs.tabControl.currentIndex=this.$refs.tabControl1.currentIndex=i
        },
        backClick(){
            this.$refs.scroll.scrollTo(0,0,600)
        },
        contentScroll(position){
            //返回顶部显示
            this.is=(-position.y)>1000
            //吸顶
            this.isTabFixed=(-position.y)>this.tabOffsetTop
        },
        loadMore(){
            this.getHomeGoods(this.currentType)
        },
        debounce(func,delay){//延时/节流/防抖动
            let timer=null;
            return  (...args)=>{
                if(timer) clearTimeout (timer)
                timer=setTimeout(()=>{
                    func.apply(this,args)
                    this.tabOffsetTop= this.$refs.tabControl.$el.offsetTop//$el组件的元素
                },delay)
            }
        }
    }
}
</script>

<style scoped>
    /* #home{
        padding-top: 44px;
        height: 100vh;
    } */
    .home-nav{
        background-color: cornflowerblue;
        color: cornsilk;

        /* position:fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 5; */
    }
    /* .tab-control{
        position: sticky;
        top: 44px;
    } */
    .content{
        overflow: hidden;

        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;

        /* background-color: ghostwhite; */

        /* height: calc(100%-93px);
        overflow: hidden; */
    }
    .tab-c{
        position: relative;
        top: -1px;
        z-index: 3;
    }
    /* .fixed{
        position :fixed;
        left: 0;
        right: 0;
        top: 44px;
    } */
</style>