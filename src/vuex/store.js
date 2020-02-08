import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        msg:'第一周'
        ,
        score:0
        ,
        dataList:[
            {
                next_id:0,
                top_anwser:"题目1",
                center_anwser:"题目一",
                anwserList:{
                    anwserOne:'答案1',
                    anwserTwo:'aaaaa',
                    anwserThree:{
                        rightAnwserText:'正确答案',
                        rightAnwserCode:1
                    },
                    anwserFour:'ccccc'
                }
                    
            },
            {
                next_id:1,
                top_anwser:"题目2",
                center_anwser:"题目二",
                anwserList:{
                    anwserOne:'fdafdafdasfdas',
                    anwserTwo:'aafdsaaaa',
                    anwserThree:{
                        rightAnwserText:'正确答案',
                        rightAnwserCode:1
                    },
                    anwserFour:'cfdafdsacccc'
                }

            },
            {
                next_id:2,
                top_anwser:"题目3",
                center_anwser:"题目三",
                anwserList:{
                    anwserOne:'答gdasgdas1',
                    anwserTwo:'aaaaa',
                    anwserThree:{
                        rightAnwserText:'正确答案',
                        rightAnwserCode:1
                    },
                    anwserFour:'ccccc'
                }
            },
            {
                next_id:3,
                top_anwser:"题目4",
                center_anwser:"题目四",
                anwserList:{
                    anwserOne:'答案gda1',
                    anwserTwo:'aaaaa',
                    anwserThree:{
                        rightAnwserText:'正确答案',
                        rightAnwserCode:1
                    },
                    anwserFour:'fdsafdafds'
                }
            }

        ]
    },

})