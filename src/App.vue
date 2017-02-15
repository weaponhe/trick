<template>
    <div id="app">
        <trick-nav></trick-nav>
        <div class="content">
            <preview></preview>
            <editor></editor>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    body {
        margin: 0;
        padding: 0;
    }

    #app {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;

        display: flex;
        flex-flow: row nowrap;

        .content {
            flex: 1;
            display: flex;
            flex-flow: column nowrap;
        }

    }
</style>
