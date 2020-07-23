import {isObject} from "../shared/utils"
import {mutableHandler} from './baseHandlers'
import { from } from "_array-flatten@2.1.2@array-flatten";


export function reactive(target) {
  // 创建一个相应式的对象， 目标对象可能不一定是数组或者对象，可能还有 set map

  // 高阶函数
  return createReactiveObject(target, mutableHandler)
  
}

function createReactiveObject(target, baseHandler) {
  if(!isObject(target)) { // 不是对象直接返回即可
    return target;
  }

  const observed = new Proxy(target, baseHandler)
  return observed;
}