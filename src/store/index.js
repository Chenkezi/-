import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建Store对象
const store =new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        // addCounter(state,pay){
        //     pay.count++
        // },
        // addToCart(state,pay){
        //     state.cartList.push(pay)
        // }
        addCart(state,payload){
            let old=state.cartList.find(item=>item.id===payload.id)
            if(old){
                old.couet+=1
            }
            else{
                payload.couet=1
                payload.xz=true
                state.cartList.push(payload)

            }
        },
    },
    actions:{
        // addCart(context,payload){
        //     let old=state.cartList.find(item=>item.id===payload.id)
        //     if(old){
        //         // old.count+=1
        //         context.commit('addCounter',old)
        //     }
        //     else{
        //         payload.count=1
        //         // state.cartList.push(payload)
        //         context.commit('addToCart',payload)

        //     }
        // }
    }
})

//挂载导出
export default store