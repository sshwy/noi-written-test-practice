import { createStore } from 'vuex'
import data from "../data/data.yaml";

function array_shuffle(arr) {
  console.log(arr)
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var idx = Math.floor(Math.random() * (len - 1));
    var temp = arr[idx];
    arr[idx] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  return arr;
}
const converted = data.map((o, idx) => {
  return {
    id: idx,
    content: o.Q,
    type: o.A instanceof Array ? 'multiselect' : 'select',
    choices: o.C,
    answer: o.A,
  }
})

const store = createStore({
  state: {
    data: [...converted],
    qlist: array_shuffle(converted),
    wrong: [],
  },
  mutations: {
    shuffle(state) {
      state.qlist = array_shuffle(state.qlist);
    },
    addwrong(state, data) {
      if (state.wrong.some(e => e.id === data.id)) return;
      state.wrong.push(data);
    },
  },
})

export default store