import { createStore } from 'redux';

// 创建根reducer函数
const rootReducer = (state, action) => {
  // 根据action类型更新状态
  return state;
};

// 创建Redux的store
const store = createStore(rootReducer);
export default store;