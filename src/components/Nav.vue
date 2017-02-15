<template>
    <nav class="wrapper">
        <nav class="main-nav">
            <v-menu>
                <v-menu-item title="根目录" path="/"></v-menu-item>
                <v-menu-item title="css" path="css"></v-menu-item>
            </v-menu>
        </nav>
        <nav class="sub-nav">
            <v-menu>
                <v-menu-item title="根目录" path="/"></v-menu-item>
                <v-menu-item title="css" path="css"></v-menu-item>
            </v-menu>
        </nav>
    </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'trick-nav'
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

            & .main-nav {

            }
            & .sub-nav {

            }
        }
    }
</style>
