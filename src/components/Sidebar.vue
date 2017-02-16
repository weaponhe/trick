<template>
    <div class="wrapper" :class="{closed}">
        <div class="toggle" @click="closed = !closed">
            <icon name="sorting" :size="20"></icon>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'sidebar',
    data(){
      return {closed: true}
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .wrapper {
        position: absolute;
        right: 0;
        width: 250px;
        height: 100%;
        background-color: #333;
        transition: margin-right .3s ease;
        &.closed {
            margin-right: -250px;
        }
        .toggle {
            position: absolute;
            top: 10px;
            left: -70px;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.05);
            cursor: pointer;
            border-radius: 50%;
            color: #ccc;
            font-weight: 900;
            transform: rotate(90deg);
            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
                color: #555;
            }
        }
    }
</style>
