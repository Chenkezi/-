<template>
    <div class="cart">
        <nav-bar>
            <div slot="center">喜欢({{cartLength}})</div>
        </nav-bar>

        <scroll ref="scroll" class="scr">
            <cartleibiao v-for="(item,i) in cartList" :key="i" :cartList="cartList[i]" @xzz="xzz"/>
        </scroll>

        <cartiesuan class="iesuan" :zj="zj" @quanxuan="quanxuan"/>
    </div>
</template>

<script>

import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import Cartleibiao from './Cartleibiao'
import Cartiesuan from './Cartiesuan'

export default{
    name:"Cart",
    components:{
        NavBar,
        Cartleibiao,
        Scroll,
        Cartiesuan
    },
    data(){
        return {
            cartList:[],
            xzgs:0,
            zj:0
        }
    },
    created(){
        this.cartList=this.$store.state.cartList

        
    },
    activated(){
        this.$refs.scroll.refresh()

        this.zj=0
        this.cartList.forEach(item =>{
            if(item.xz){
                this.zj+=item.price*item.couet
            }
            
        })
    },
    computed:{//计算函数
        cartLength(){
            return this.$store.state.cartList.length
        }
    },
    methods:{
        quanxuan(){
            this.zj=0
        this.cartList.forEach(item =>{
            if(item.xz){
                this.zj+=item.price*item.couet
            }
            
        })
        },
        xzz(aa){
            this.zj+=aa
        }
        
    }
} 

</script>

<style scoped>
    .cart{
        height: 100vh;
    }
    .nav-bar{
        position: relative;

        background: rgb(94, 170, 233);
        z-index: 2;
    }
    .nav-bar div{
        color: white;
    }
    
    .scr{
        height: calc(100% - 121px);
        overflow: hidden;
    }
    .iesuan{
        position :relative
    }
</style> 