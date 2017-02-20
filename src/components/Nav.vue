<template>
    <nav class="wrapper">
        <template v-if="folderList">
            <nav class="main-nav">
                <v-menu>
                    <v-menu-item v-for="(folder,index) in folderList"
                                 :class="{'active-menu':index === selectedFolderIndex}"
                                 :title="folder.name"
                                 :path="{query:{folder:index,file:0}}"
                                 :autoActive="false"
                                 @click.native="changeFolder(index)">
                    </v-menu-item>
                </v-menu>
            </nav>
            <nav class="sub-nav">
                <v-menu>
                    <v-menu-item v-for="(file,index) in fileList"
                                 :class="{'active-menu':index === selectedFileIndex}"
                                 :title="file.name"
                                 :path="{query:{folder:selectedFolderIndex,file:index}}"
                                 :autoActive="false"
                                 @click.native="changeFile(index)">
                    </v-menu-item>
                </v-menu>
            </nav>
        </template>
        <div v-else>
            loading...
        </div>
    </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'trick-nav',
    props: {
      folderList: {
        type: Array,
        default: []
      }
    },
    data(){
      return {
        selectedFolderIndex: 0,
        selectedFileIndex: 0
      }
    },
    computed: {
      fileList(){
        return this.folderList[this.selectedFolderIndex].files || []
      }
    },
    methods: {
      changeFolder(index){
        this.selectedFolderIndex = index
        this.selectedFileIndex   = 0
      },
      changeFile(index){
        this.selectedFileIndex = index
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    nav.wrapper {
        flex-basis: 500px;
        display: flex;

        nav {
            overflow-y: scroll;
            border-right: 2px solid #eee;
            flex: 1;

            .active-menu {
                border-color: #4fc08d;
                color: #4fc08d;
            }
        }
    }
</style>
