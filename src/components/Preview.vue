<template>
    <div class="wrapper -scoped-less-prefix-" ref="root">
        <div class="preview" v-html="html"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  var less = require('less');


  export default {
    name: 'Preview',
    props: {
      html: String,
      css: String
    },
    computed: {
      root(){
        return this.$refs.root
      }
    },
    watch: {
      css(){
        if (this.root.lastChild.nodeName === 'style') {
          this.root.removeChild(this.root.lastChild)
        }
        this.updateStyle()
      }
    },
    mounted(){
      this.updateStyle()

    },
    methods: {
      updateStyle(){
        let sheet       = document.createElement("style");
        let scoped_code = `
        .-scoped-less-prefix-{
            ${this.css}
        }`
        try {
          less.render(scoped_code, (e, {css}) =>
          {
            sheet.innerHTML = css;
            if (this.root.lastChild.nodeName.toUpperCase() === 'STYLE') {
              this.root.replaceChild(sheet, this.root.lastChild)
            } else {
              this.root.appendChild(sheet)
            }
          });
        }
        catch (e) {
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .wrapper {
        flex: 1;
        border-bottom: 2px solid #eee;
        padding: 1em;
        overflow: auto;

        position: relative;
        .preview {
            position: absolute;
            overflow: auto;
        }
    }
</style>
