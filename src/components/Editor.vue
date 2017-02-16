<template>
    <div class="wrapper">
        <trick-codemirror mode="text/html"
                          theme="neo"
                          placehold="<div>Hello trick!</div>"
                          @change="onHTMLChange">
        </trick-codemirror>
        <trick-codemirror mode="text/css"
                          theme="neo"
                          placehold="div{color:red}"
                          @change="onCSSChange">

        </trick-codemirror>
    </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'editor',
    methods: {
      onHTMLChange(code){
        this.$emit('html_change', code)
      },
      onCSSChange(code){
        this.$emit('css_change', code)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .wrapper {
        flex: 1;
        display: flex;
    }
</style>
