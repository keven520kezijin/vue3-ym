const get = createGetter()
const set = createSetter()

function createGetter() {
  console.log('createGetter')
  return function get(target, key, receiver) { // proxy + reflect
    console.log(target, key, receiver)
    const res = Reflect.get(target, key, receiver); // target[key]

    // todo..

    console.log('用户对这个对象取值了', target, key)
    return res
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver); // target[key] = value
    // todo..

    console.log('用户对这个对象设置值了', target, key)
    return res
  }
}
// 拦截普通对象和数组的处理
export const mutableHandler = {
  get,
  set
}