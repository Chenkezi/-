<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="sxt"/>

        <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
            
            <detailshangpin :topImages="topImages"/>
            <p>--------</p>
            <detail-xiangqin :io="io" @imgLoad="imgLoad" ref="xiangqin"/>
            <p>--------</p>
            <goods-list :goods="getRecommend" ref="tuijian"/>
        </scroll>
        
        <detail-bottom-bar @tianjia='tianjia'/>

        <back-top @click.native="backClick" v-show="is"></back-top>
    </div>
</template>

<script>
import DetailNavBar from './DetailNavBar'
import Detailshangpin from './Detailshangpin'
import DetailXiangqin from './DetailXiangqin'
import DetailBottomBar from './DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop'


import {getDetail,Goods,getRecommend} from 'network/detail'
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'


export default{
    name:"Detail",
    components:{
        DetailNavBar,
        Detailshangpin,
        DetailXiangqin,
        DetailBottomBar,
        Scroll,
        GoodsList,
        BackTop

    },
    data(){
        return {
            id:null,
            topImages:[],
            goods:null,
            detailInfo:{},
            counter:0,
            io:[],
            getRecommend:[],
            themeTopYs:[],
            is:false
        }
    },
    created(){
        this.id=this.$route.params.id//接受路由传过来的值
        // $route.query.iid  //接受值方式二

        //获取商品图片
        getDetail(this.id).then(res=>{

            this.topImages=res.result.itemInfo.topImages
        

        //获取商品信息
        this.goods= new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        // console.log(this.goods);

        //获取商品详情页
        this.detailInfo=res.result.detailInfo
        // console.log(this.detailInfo)
        this.io=this.detailInfo.detailImage[0].list
        })
        
        //请求推荐数据
        getRecommend().then(res=>{
            this.getRecommend=res.data.list
        })

        this.$nextTick(()=>{//数据加载完回调这个函数（但图片不一定渲染完）
            // this.themeTopYs=[]
            // this.themeTopYs.push(0)
            // this.themeTopYs.push(this.$refs.xiangqin.$el.offsetTop)//$el组件的元素
            // this.themeTopYs.push(this.$refs.tuijian.$el.offsetTop)
        })

    },
    mounted(){
    },
    methods:{
        //添加喜欢
        tianjia(){
            const product ={}
            product.img=this.io[0]
            product.title='-----------'
            product.desc='---------'
            product.price=Math.ceil(Math.random()*100)
            product.id=this.id
            product.couet=0

            //将数据添加到Vuex
            this.$store.commit("addCart",product)
            
            // this.$store.dispatch("addCart",product)
        },
        imgLoad(){
            if(++this.counter==this.detailInfo.detailImage[0].list.length){
                //图片加载完刷新scroll的高度
                this.$refs.scroll.refresh()

                //获取页面各部分的长度
                this.themeTopYs=[]
                this.themeTopYs.push(0)
                this.themeTopYs.push(this.$refs.xiangqin.$el.offsetTop-120)//$el组件的元素
                this.themeTopYs.push(this.$refs.tuijian.$el.offsetTop-120)
            }
        },
        titleClick(i){
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[i],1000)
        },
        contentScroll(Y){
            // console.log(-Y)
                // console.log(this.themeTopYs[1])
            const y=-Y.y//获取滚动距离

            if(y<this.themeTopYs[1]){
                this.$refs.sxt.currentIndex=0
            }else if(y<this.themeTopYs[2]){
                this.$refs.sxt.currentIndex=1
            }else{
                this.$refs.sxt.currentIndex=2
            }

            //返回顶部显示
            this.is= y>1000
        },
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
        }
    }
}
</script>

<style scoped>
    #detail{
        height: 100vh;
        position: relative;
        z-index: 9;
        background-color: rgb(252, 252, 252);
    }
    
    
    .content{
        height: calc(100% - 84px);
        overflow: hidden;
    }
    .detail-nav{
        position: relative;
        z-index: 9;
        background-color: rgb(250, 250, 250);
    }
    p{
        text-align:center;
        font-size: 100px;
        color: slateblue;
    }
</style>
