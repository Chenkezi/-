<template>
    <div class="tab-control">
        <div v-for="(item,i) in titles" :key="i" class="tab-control-item" :class="{active:i==currentIndex}" @click="itemClick(i)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script lang="ts">
export default{
    name:"Tabontrol",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(i){
            this.currentIndex=i;
            this.$emit('tabClick',i)//子组件传父组件
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        background-color: rgb(255, 255, 255);
        z-index: 2;
    }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item span{
        padding: 3px;
    }
    .active span{
        border-bottom: 2px solid cornflowerblue;
    }
    .active{
        color: cornflowerblue;
    }
</style>
