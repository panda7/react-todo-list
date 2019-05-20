import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

//액션타입 정의
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

//액션 생성 함수
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

//리듀서의 기본상태 정의
const initialState = List([
  Map({
    id: 0,
    text: "리액트 공부하기",
    done: true
  }),
  Map({
    id: 1,
    text: "컴포넌트 스타일링 해보기",
    done: false
  })
]);

//핸들 액션 생성
export default handleActions(
  {
    [INSERT]: (state, action) => {
      const { id, text, done } = action.payload;
      return state.push(
        Map({
          id,
          text,
          done
        })
      );
    },
    [TOGGLE]: (state, action) => {
      const { payload: id } = action;
      const index = state.findIndex((todo) => todo.get("id") === id);
      return state.updateIn([index, "done"], (done) => !done);
    },
    [REMOVE]: (state, action) => {
      const { payload: id } = action;
      const index = state.findIndex((todo) => todo.get("id") === id);
      return state.delete(index);
    }
  },
  initialState
);
