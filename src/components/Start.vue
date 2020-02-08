<template>
    <div>
        <img id="imgTop" src="../assets/WechatIMG2.png">
        <img id="imgContent" src="../assets/1-2.png">
        <router-link to="/item"><img @click="demo" id="imgStart" src="../assets/1-4.png"></router-link>
         <div id="TopText">
           {{ msg }}
        </div>
    </div>
</template>

<script>
import store from '../vuex/store'
export default {
    data(){
        return {

        }
    },
    computed:{
        msg(){
            return store.state.msg
        }
    },
    methods:{
        demo(){
            console.log('sss');
        }
    }
}
</script>

<style scoped>
    div{
        width:100%;
        height: 100%;
        /* background-image: url(../assets/WechatIMG2.png); */
        background-size: 100% 100%;
        /* background-color: pink; */
        position:relative;
        /* left: 70%; */
        text-align: center;
    }
    div #imgTop{
        position:fixed;
        width: 20%;
        height: 25%;
        display: block;
        left: 70%;
        
    }
    div #imgContent {
        position:fixed;
        width: 80%;
        height: 41%;
        display: block;
        top: 22%;
        left: 10%;
    }
    div #imgStart {
        position:fixed;
        width: 27%;
        height: 8%;
        display: block;
        top: 62%;
        left: 35%;
        z-index: 1;
    }
    div #TopText {
        position:fixed;
        width: 27%;
        height: 8%;
        display: block;
        top: 19%;
        left: 67%;
        color: rgb(235, 0, 215);
        font-size: 13px;
        font-weight: bold;
        text-align: center

    }
</style>
