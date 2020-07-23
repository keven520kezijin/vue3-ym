import {reactive, effect, computed, ref} from './reactivity'

// console.log(reactive, effect, computed, ref)

// proxy 进行代理了 （拦截）

const state = reactive({name:'kv', age: 18})
console.log(state)

state.name;
state.age;

state.name = '柯文万岁'

// return;


// effect(() => {
//   console.log(state.name)
// })

// state.name = 'kvv'