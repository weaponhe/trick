<template>
    <nav>
        <div class="main-nav">
            <v-menu>
                <v-menu-item title="根目录" path="/"></v-menu-item>
                <v-menu-item title="css" path="css"></v-menu-item>
            </v-menu>
        </div>
        <div class="sub-nav">
            <v-menu>
                <v-menu-item title="根目录" path="/"></v-menu-item>
                <v-menu-item title="css" path="css"></v-menu-item>
            </v-menu>
        </div>
    </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'trick-nav'
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    nav {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
        width: 400px;

        display: flex;

        .main-nav {
            overflow-y: scroll;
            border-right: 1px solid #555;
            flex: 1;
        }

        .sub-nav {
            overflow-y: scroll;
            border-right: 1px solid #555;
            flex: 1;
        }
    }
</style>
