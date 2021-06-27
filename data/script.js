const fs = require('fs');
const path = require('path');
const jsyaml = require('js-yaml');

const data = jsyaml.load(fs.readFileSync(path.resolve(__dirname, 'data.yaml')));

const filtered_data = data.map(d => {
  if (d.A instanceof Array) {
    return {
      id: 'id',
      content: d.Q,
      type: 'multiselect',
      choices: d.C,
      answer: d.A,
    }
  }
  return {
    id: 'id',
    content: d.Q,
    type: 'select',
    choices: d.C,
    answer: d.A,
  }
})

fs.writeFileSync(path.resolve(__dirname, './d.json'), JSON.stringify(filtered_data), 'utf-8');
