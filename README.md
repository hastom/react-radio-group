# React-radio-group

Tiny component to manage radio-inputs groups, built with new React.Context API

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```
$ npm i @hastom/react-radio-group
$ yarn add @hastom/react-radio-group
```

## API

`<RadioGroup>`

Props:
- `name: String`: name to pass to input component
- `selectedValue: String | Number`: currently selected value
- `onChange: Function`: takes new selected value as the only argument
- `children: Node`: any children
- `component: String | Component`: component to render as a container, default - `<div>`

Any prop not listed above will be passed to component container

`<Radio>`

Props:
- `value: String | Number`: input value
- `children: Node | Function`: If no children specified `<Radio/>` will render default `<input/>`.
If child is React component, it will be cloned and populated with `checked`, `name` and `onChange` props.
If child if function, it will be called with `{checked, name, onChange}` as an argument.

## Examples

```jsx harmony
import React from 'react';
import { Radio, RadioGroup } from '@hastom/react-radio-group';
import './style.css';
import AwesomCustomRadio from 'some-custom-radio-input';

class App extends React.Component {

  state = {
    value: undefined,
  };

  onChangeValue = (value) => {
    this.setState({ value });
  };

  render() {
    return <div>
    
      <h1>Regular inputs</h1>
      
      <RadioGroup
        selectedValue={this.state.value}
        onChange={this.onChangeValue}
      >
        <label><Radio value={1}/>One</label>
        <label><Radio value={2}/>Two</label>
        <label><Radio value={3}/>Three</label>
        <label><Radio value={4} disabled/>Disabled</label>
      </RadioGroup>
      
      <h1>Custom input component</h1>

      <RadioGroup
        selectedValue={this.state.value}
        onChange={this.onChangeValue}
      >
        <Radio value={1}><AwesomCustomRadio>One</AwesomCustomRadio></Radio>
        <Radio value={2}><AwesomCustomRadio>Two</AwesomCustomRadio></Radio>
        <Radio value={3}><AwesomCustomRadio>Three</AwesomCustomRadio></Radio>
        <Radio value={4}><AwesomCustomRadio disabled>Disabled</AwesomCustomRadio></Radio>
      </RadioGroup>

      <h1>Render functions</h1>
      
      <RadioGroup
        selectedValue={this.state.value}
        onChange={this.onChangeValue}
      >
        <Radio value={1}>{({ checked, onChange, name }) => {
          return <button onClick={onChange}>One {checked && 'checked!'}</button>;
        }}</Radio>
        <Radio value={2}>{({ checked, onChange, name }) => {
          return <button onClick={onChange}>Two {checked && 'checked!'}</button>;
        }}</Radio>
        <Radio value={3}>{({ checked, onChange, name }) => {
          return <button onClick={onChange}>Three {checked && 'checked!'}</button>;
        }}</Radio>
        <Radio value={4}>{({ checked, onChange, name }) => {
          return <button disabled onClick={onChange}>Disabled</button>;
        }}</Radio>
      </RadioGroup>
    </div>;
  }
}


```
## License

[MIT](./LICENSE)
