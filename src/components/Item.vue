<template>
    <div>
        <img id="imgTop" src="../assets/WechatIMG2.png">
        <img id="imgContent" src="../assets/2-1.png"> 
        <img id="imgNext" :src="imgUrl" @click="getInfo()">
        <div id="TopText" >
           {{dataList.top_anwser}}
        </div>
        <ul id="anwserList">
            <li><input type='radio' v-model='radio' :value="dataList.anwserList.anwserOne" name="anwser" @click="setChecked()">{{dataList.anwserList.anwserOne}}</li>
            <li><input type='radio' v-model='radio' :value="dataList.anwserList.anwserTwo" name="anwser" @click="setChecked()">{{dataList.anwserList.anwserTwo}}</li>
            <li><input type='radio' v-model='radio' :value="dataList.anwserList.anwserThree.rightAnwserCode" name="anwser" @click="setChecked()">{{dataList.anwserList.anwserThree.rightAnwserText}}</li>
            <li><input type='radio' v-model='radio' :value="dataList.anwserList.anwserFour" name="anwser" @click="setChecked()">{{dataList.anwserList.anwserFour}}</li>
        </ul>
    </div>
</template>

<script>
import store from '../vuex/store'
export default {
    data(){
        return {
            'dataList':store.state.dataList[0],
            'thisChecked':false,
            radio:'',
            imgUrl:require('../assets/2-2.png')
        }
    },
    computed:{
        msg(){
            return store.state.msg
        }
    },
    methods:{
        getInfo(next_id){
            if(!this.thisChecked){
                alert('请填写你想好的答案');
                return;
            }
            //对选项进行清空
            this.thisChecked = false;
            //判断是否答对正确题目
            if(this.radio === 1){
                store.state.score +=20;
                this.radio = '';
            }
            //判断是否是最后一题并进行图标替换
            if(
                this.dataList.next_id === 2){
                this.imgUrl = require('../assets/3-1.png');
            }
            //判断是否是最后一题
            if(this.dataList.next_id === 3){
                // alert('gameOver'+ store.state.score)
                //进行页面跳转,跳转到分数页
                this.$router.push({
                    path: '/score',
                })
                return;
            }
            this.dataList = store.state.dataList[this.dataList.next_id+1]
            
        },
        setChecked(){
            this.thisChecked= true;
        }
    },
    watch:{
        radio:function(){
            console.log(this.radio);
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
        position:absolute;
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
    div #imgNext {
        position:fixed;
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
    div #anwserList{
        position:fixed;
        display: block;
        width: 50%;
        height: 30%;
        top: 26%;
        left: 25%;
        list-style: none
    }
    div #anwserList li {
        margin-top: 8%;
        display: block;
        text-align: left
    }
</style>
