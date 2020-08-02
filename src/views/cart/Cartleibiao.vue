<template>
        <div class="cartt">
            <div class="cartxuanzhong" :class="{cxz:cartList.xz}" @click="xzz"></div>
            <div class="cartleibiaoimg">
                <img :src="cartList.img">
            </div>
            <div class="cartleibiaoxq">
                <p>{{cartList.title}}</p>
                <p>{{cartList.desc}}</p>
                <p>{{cartList.price}}</p>
                <p>{{cartList.couet}}</p>
            </div>
        </div>
</template>

<script>


export default{
    name:"Cartleibiao",
    components:{
        
    },
    props:{
        cartList:{},
    },
    data(){
        return{
            xz:null
        }
    },
    mounted(){

    },
    methods:{
        xzz(){
            // console.log(this.cartList.price)
            this.cartList.xz=!this.cartList.xz
            if(this.cartList.xz){
                this.$emit('xzz',this.cartList.price*this.cartList.couet)
            }else{
                this.$emit('xzz',-this.cartList.price*this.cartList.couet)
            }
            
        }
    }
}
</script>

<style scoped>
    .cartt{
        display: flex;
        border: 1px solid rgb(97, 176, 221);
        border-radius: 3px 3px 3px 3px;
        margin: 10px;
    }
    .cartxuanzhong{
        width: 40px;
        
    }
    .cartleibiaoimg img{
        width: 100%;
    }
    .cartleibiaoimg{
        width: 100px;
        height: 100px;
        overflow: hidden;
        margin: 5px;
    }
    .cartleibiaoxq{
        width: 50%;
        margin-left: 30px;
    }
    .cartleibiaoxq :nth-child(3){
        color: teal;
        margin: 5px;

    }
    .cartleibiaoxq :nth-child(4){
        text-align: right;
    }
    .cxz{
        background: cornflowerblue;
    }
</style>
