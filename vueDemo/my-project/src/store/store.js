import Vue from "Vue";
import Vuex from "vuex";


// 引入  axios
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state:{
        test01:{
            name:'Wise Wrong'
        },
        test02:{
            tel1:'12345678'
        },
    },
    actions:{
    // 封装一个 ajax 方法
        saveFrom (context) {
            axios({
                // method: 'post',
                url:'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json',
                // data:context.state.test02,

            }).then(function (res) {
                console.log(res)
            }).catch(function (err) {
                console.log(err)
            })
        }
    }

})


export default store;