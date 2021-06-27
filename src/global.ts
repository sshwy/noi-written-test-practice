namespace Ques {
  interface Basic {
    type: string;
    id: string;
    content: string;
  }
  interface Select extends Basic {
    type: "select";
    choices: string[];
    answer: number;
  }
  interface MultiSelect extends Basic {
    type: "multiselect";
    choices: string[];
    answer: number[];
  }
  export type Question = Select | MultiSelect;
}

type Question = Ques.Question;
export { Question };
