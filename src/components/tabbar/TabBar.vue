<template>
     <div id="tab-bar">
       <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style scoped>
     #tab-bar{
    display:flex;
    background-color: azure;

    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;

    box-shadow:0 -1px 1px rgba(100,100,100,0.2);
  }
</style>