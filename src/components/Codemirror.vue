<template>
    <div class="code-wrapper">
        <codemirror v-model="code"
                    :options="options"
                    :hint="true"
                    ref="codemirror"
                    @changed="codeChange">
        </codemirror>
    </div>
</template>

<script type="text/ecmascript-6">
  let vm = {}
  export default {
    name: 'trick-codemirror',
    created () {
      vm = this;
    },
    components: {
      codemirror: (resolve) =>
      {
        require(['vue-codemirror/codemirror.vue'], (component) =>
        {
          resolve(component);
          vm.$emit("loaded")
        })
      }
    },
    props: {
      mode: {
        type: String,
        default: 'text/html'
      },
      theme: {
        type: String,
        default: ''
      },
      placehold: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        code: '',
        loading: false,
        options: {
          // 下面所有配置同Codemirror配置，均为可选
          tabSize: 2,
          lineNumbers: true,
          line: true,
          // sublime、emacs、vim三种键位模式，支持你的不同操作习惯
          keyMap: "sublime",
          // 按键映射，比如Ctrl键映射autocomplete，autocomplete是hint代码提示事件
          extraKeys: {"Ctrl": "autocomplete"},
          // 代码折叠
          foldGutter: true,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          // 选中文本自动高亮，及高亮方式
          styleSelectedText: true,
          highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true},
          // more codemirror config...
          // 如果有hint方面的配置，也应该出现在这里
        }
      }
    },
    methods: {
      codeChange(newCode){
        this.$emit("change", newCode)
      }
    },
    watch: {
      placehold(newCode){
        this.code = newCode
      }
    },
    mounted(){
      this.code          = this.placehold
      this.options.mode  = this.mode
      this.options.theme = this.theme
      this.$emit("change", this.code)
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .code-wrapper {
        flex: 1;
        & + .code-wrapper {
            border-left: 2px solid #eee;
        }
    }

    .CodeMirror {
        height: 100% !important;
        width: 100%;
    }
</style>


