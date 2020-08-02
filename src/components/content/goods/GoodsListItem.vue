<template>
<div class="goods-item" @click="itmeClick">
    <img :src="showImage" @load="imageLoad">
    <div class="goods-info">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span class="collect">{{goodsitem.cfav}}</span>
    </div>
</div>
</template>

<script>
export default{
    name:"GoodsListItem",
    props:{
        goodsitem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showImage(){
            return this.goodsitem.image || this.goodsitem.show.img
        }
    },
    methods:{
        imageLoad(){
            this.$bus.$emit('itemImageLoad')
        },
        itmeClick(){
            this.$router.push('/detail'+this.goodsitem.iid)//replace不可返回，push可返回。动态路由传递
            // this.$router.push({
            //     path:'/detail',
            //     query:{
            //         iid:this.product.iid   //传值方式2
            //     }
            // })
        }
    }
}
</script>

<style scoped>
    .goods-item{
        width: 48%;
        padding-bottom: 40px;
        position: relative;
    }
    .goods-item img{
        width: 100%;
        border-radius: 5px;
    }
    .goods-info{
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow:hidden;
        text-align: center;
    }
    .goods-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .price{
        color: dodgerblue;
        margin-right: 20px;
    }
    .collect{
        position:relative;
    }
    .collect::before{
        content: '';
        position: absolute;
        left: -15px;
        top: 1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/tabbar/添加.png") 0 0/14px 14px;
    }
</style>