<template>
    <div class="recommend">
        <div :key="i" v-for="(item, i) in recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
export default{
    name:"RecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;

        border-bottom: 8px solid #eee;
        padding: 10px 0 10px;
        background-color: rgb(255, 255, 255);
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
    .recommend-item a{
        text-decoration:none;
        color: cornflowerblue;
    }
</style>
