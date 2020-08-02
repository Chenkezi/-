<template>
<div>
    <img :key="ii" v-for="(item,ii) in topImages" :src="item" class="imgx">
</div> 
</template>

<script>
export default{
    name:"Detailshangpin",
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>

<style scoped>
.imgx{
        width: 100%;
    }
</style>
