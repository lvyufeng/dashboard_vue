<template>
    <section class="real-app">
        <input type="text" class="add-input" autofocus="autofocus"
        placeholder="查询语句"
        @keyup = "doQuery">
        <item :todo="todo"></item>
        <tabs :filter="filter"></tabs>
    </section>
</template>

<script>

    import Tabs from './tabs.vue'
    import Item from './item.vue'
    export default {
        data(){
            return {
                todo:{
                    id:0,
                    content:'this is todo',
                    completed:false,
                },
                filter:'all',
            }
        },
        name: "board",
        methods:{
            doQuery(){}
        },
        components:{
            Item,
            Tabs
        }
    }
</script>

<style lang="stylus" scoped>
    .real-app{
        width 600px
        margin  0 auto
        box-shadow 0 0 5px #666
    }
    .add-input{
        position relative
        width 100%
        font-size 24px
        font-family inherit
        font-weight inherit
        line-height 1.4em
        /*border 0*/
        outline none
        color inherit
        /*padding  6px*/
        border  1px soild #999
        box-shadow inset 0 -1px 5px 0 rgba(0,0,0,0.9)
        box-sizing border-box
        font-smoothing antialiased
        padding 16px 16px 16px 60px
    }
</style>