<template>
    <div id="father">
        <div id="imgTop">
            <div id="hander">
                {{mgs}}分
            </div>
            <div id="foot">
                {{demo}}
            </div>
        </div>
    </div>
</template>

<script>
import store from '../vuex/store'
export default {
    data(){
        return {
            mgs:store.state.score,
            scoreInfo:''
        }
    },
    computed:{
        demo(){
            if(store.state.score<=40){
                this.scoreInfo = '你的知识点还掌握不牢哦'
            }else if(store.state.score>40&&store.state.score<=60){
                this.scoreInfo = '不错不错，还要继续加油'
            }else{
                 this.scoreInfo = '请继续保持'
            }
            return this.scoreInfo;
        }
    }
}
</script>

<style scoped>
    #father{
        width:100%;
        height: 100%;
        background-image: url(../assets/4-1.jpg); 
        background-size: 100% 100%;
        /* background-color: pink; */
        position:relative;
        /* left: 70%; */
        text-align: center;
    }
    div #imgTop{
        position:fixed;
        width: 60%;
        height: 30%;
        background-image: url(../assets/4-2.png); 
        background-size: 100% 100%;
        display: block;
        left: 18%;
        top: 11%;
        
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
        position: relative;
        width: 27%;
        height: 8%;
        display: block;
        top: 62%;
        left: 35%;
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
    #hander {
        width: 92%;
        height: 16%;
        border: 1px solid pink;
        position: absolute;
        top: 51%;
        left: 7%;
    }
    #foot{
        width: 92%;
        height: 17%;
        border: 1px solid pink;
        position: absolute;
        top: 74%;
        left: 7%;
    }
</style>
