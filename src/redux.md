/**
* jsbin.com 으로 이동해 javascript 탭에 붙여넣으면 됩니다.
* 리덕스 규칙 3가지
* 1. 스토어는 단 1개
* 2. state 는 읽기 전용. 언제나 새 상태 객체를 만들어서 넣어 주어야 합니다.
* 3. 변화는 순수 함수로 구성. 
*/

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const MULTIPLY = 'MULTIPLY';

const increment = (diff) => ({
  type: INCREMENT,
  diff: diff
})

const decrement = (diff) => ({
  type: DECREMENT,
  diff: diff
})

const multiply = (diff) => ({
  type: MULTIPLY,
  diff: diff
})

/**
* 변화를 일으키는 함수, 리듀서
*/
const initialState = {
  number: 1,
  foo: 'bar',
  baz: 'qux'
}

function counter(state=initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        number:state.number+action.diff
      });
     
    case DECREMENT:
      return Object.assign({}, state, {
        number:state.number- action.diff
      });
      
    case MULTIPLY:
      return Object.assign({}, state, {
        number:state.number* action.diff
      });
      
    default:
      return state;
  }
}


console.log(counter(undefined, increment(1)));

/**
* 리덕스 스토어 생성
*/
const {createStore} = Redux;

const store = createStore(counter);

/**
* 구독. 리덕스 스토어의 상태가 바뀔 때마다 특정함수 실행 
*/
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(increment(1));
store.dispatch(decrement(5));
store.dispatch(increment(10));
store.dispatch(multiply(10));









