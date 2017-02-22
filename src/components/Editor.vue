<template>
    <div class="wrapper">
        <transition name="fade">
            <div class="spinner-wrapper" v-if="loading">
                <div class="spinner-content">loading...</div>
            </div>
        </transition>

        <div class="editor-wrapper">
            <trick-codemirror mode="text/html"
                              theme="neo"
                              :placehold="html"
                              @change="onHTMLChange"
                              @loaded="test">
            </trick-codemirror>
            <trick-codemirror mode="text/css"
                              theme="neo"
                              :placehold="css"
                              @change="onCSSChange"
                              @loaded="test">
            </trick-codemirror>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'editor',
    data(){
      return {
        loading: true
      }
    },
    props: {
      html: {
        type: String,
        default: '<div>Hello trick!</div>'
      },
      css: {
        type: String,
        default: 'div{color:red}'
      }
    },
    methods: {
      onHTMLChange(code){
        this.$emit('html_change', code)
      },
      onCSSChange(code){
        this.$emit('css_change', code)
      },
      test(){
        this.loading = false
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .wrapper {
        flex: 1;
        .spinner-wrapper {
            /*position: relative;*/
            width: 100%;
            height: 100%;
            /*background: #000;*/
        }
        .editor-wrapper {
            /*flex: 1;*/
            /*position: relative;*/
            width: 100%;
            height: 100%;
            display: flex;

        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s ease;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
        /*transform: scale();*/
    }
</style>
