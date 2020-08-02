<template>
    <div>
    <img :key="i" v-for="(item,i) in io" :src="item" class="imgx" @load="imgLoad">
    </div>
</template>

<script>
export default{
    name:"DetailXiangqin",
    props:{
        io:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            counter:0
        }
    },
    methods:{
        imgLoad(){
            this.$emit("imgLoad")
        }
    }
}
</script>

<style scoped>
.imgx{
        width: 100%;
    }
</style>
