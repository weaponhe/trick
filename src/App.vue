<template>
    <div id="app">
        <trick-nav :folderList="folderList"></trick-nav>
        <div class="content">
            <preview :html="html" :css="css"></preview>
            <editor :html="html" :css="css" @html_change="onHTMLChange" @css_change="onCSSChange"></editor>
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
    watch: {
      '$route.query': function ()
      {
        let trick = this.folderList[this.$route.query.folder].files[this.$route.query.file].content
        let re    = /<style>(.*)<\/style>/
        let css   = re.exec(trick)
        this.css  = css && css[1]
        this.html = trick.replace(re, '')
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
              name: "prety_text.html",
              content: "<div>prety_text</div><style>div{color:red;}</style>"
            }, {
              name: "shadow_text.html",
              content: "<div>shadow_text</div><style>div{color:blue;}</style>"
            }]
          },
          {
            name: "font",
            files: [{
              name: "prety_font.html",
              content: "<div>prety_font</div><style>div{color:green;}</style>"
            }, {
              name: "shadow_font.html",
              content: "<div>shadow_font</div><style>div{color:yellow;}</style>"
            }]
          }
        ]
      }
    },
    mounted(){
//      //请求数据，数据格式为{folder:"text",files:[{filename:"prety_text.md",content:"```<div></div><style></style>```"},{...}]}
      setTimeout(() =>
      {
        this.folderList = this.fake()
      }, 0)
//
//      this.$http.get('/data').then(response =>
//      {
//        this.folderList = response.body
//
//      }, response =>
//      {
//        console.log(response)
//      });
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
