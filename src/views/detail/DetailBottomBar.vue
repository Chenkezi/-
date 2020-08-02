<template>
    <div class="detail-bottom-bar" @click="tianjia">
        <p>添加喜欢</p>
    </div>
</template>

<script>
export default{
    name:"DetailBottomBar",
    methods:{
        tianjia(){
            this.$emit('tianjia')
        }
    }
}
</script>

<style scoped>
    .detail-bottom-bar{
        height: 40px;
        background: rgb(255, 255, 255);
        text-align: center;
        font-size: 25px;
        color: steelblue;
        line-height: 40px;
    }
</style>
