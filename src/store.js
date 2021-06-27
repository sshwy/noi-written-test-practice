import { createStore } from 'vuex'
import data from "../data/d.json";

function array_shuffle (arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var idx = Math.floor(Math.random() * (len - 1));
    var temp = arr[idx];
    arr[idx] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  return arr;
}

const store = createStore({
  state: {
    qlist: array_shuffle(data.map((e, idx) => ({ ...e, id: idx.toString() }))),
    wrong: [],
  },
  mutations: {
    shuffle (state) {
      state.qlist = array_shuffle(state.qlist);
    },
    addwrong (state, data) {
      if (state.wrong.some(e => e.id === data.id)) return;
      state.wrong.push(data);
    },
  },
})

export default store