<template>
    <div class="Cartiesuan">
        <div :class="{jiesuan:qx}"  @click="quanxuan" class="quanxuan">全选</div>
        <div class="zonge">{{zj}}</div>
        <div class="jiesuan">结算</div>
    </div>
</template>

<script>
export default{
    name:"Cartiesuan",
    props:{
        zj:0
    },
    data(){
        return{
            
        }
    },
    computed:{
        qx(){
            if(this.$store.state.cartList.length==0)return false
            return !this.$store.state.cartList.find(item=> !item.xz)
        }
    },
    methods:{
        quanxuan(){
            if(this.qx){
                this.$store.state.cartList.forEach(item=> {
                    item.xz=false
                })
            }else{
                this.$store.state.cartList.forEach(item=> item.xz=true)
            }
            this.$emit('quanxuan')
        }
    }
}
</script>

<style scoped>
    .Cartiesuan{
        display: flex;
        height: 30px;
        line-height: 30px;
    }
    .quanxuan,.zonge,.jiesuan{
        flex: 1;
        border:1px solid rgb(200, 221, 235);
        text-align: center;
    }
    .zonge{
        text-align: left;
    }
    .jiesuan{
        background: cornflowerblue;
    }
</style>
