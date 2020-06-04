// reduer n个函数 返回状态的纯函数 唯一的返回值
// 初始状态是state=0
// 状态是会改变的
// 在那一刻，一定有唯一的状态对应我们的组件
// action是改变状态的动作,页面会通过ajax,事件,action(类别)
export default (state = 0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}