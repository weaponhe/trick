<template>
    <div id="app">
        <trick-nav :folderList="folderList"></trick-nav>
        <div class="content">
            <preview :html="html" :css="css"></preview>
            <editor @html_change="onHTMLChange" @css_change="onCSSChange"></editor>
        </div>
        <sidebar></sidebar>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        html: '',
        css: '',
        folderList: null
      }
    },
    methods: {
      onHTMLChange(code){
        this.html = code
      },
      onCSSChange(code){
        this.css = code
      },
      fake(){
        return [
          {
            name: "text",
            files: [{
              name: "prety_text",
              content: "<div>prety_text</div>"
            }, {
              name: "shadow_text",
              content: "<div>shadow_text</div>"
            }]
          },
          {
            name: "font",
            files: [{
              name: "prety_font",
              content: "<div>prety_font</div>"
            }, {
              name: "shadow_font",
              content: "<div>shadow_font</div>"
            }]
          }
        ]
      }
    },
    mounted(){
      //请求数据，数据格式为{folder:"text",files:[{filename:"prety_text.md",content:"```<div></div><style></style>```"},{...}]}
      setTimeout(() =>
      {
        this.folderList = this.fake()
      }, 2000)
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
