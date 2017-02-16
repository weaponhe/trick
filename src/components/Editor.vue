<template>
    <div class="wrapper">
        <trick-codemirror mode="text/html"
                          theme="neo"
                          placehold="<div>Hello trick!</div>"></trick-codemirror>
        <trick-codemirror mode="text/css"
                          theme="neo"
                          placehold="div{color:red}">
        </trick-codemirror>
    </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'editor'
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .wrapper {
        flex: 1;
        display: flex;
    }
</style>
