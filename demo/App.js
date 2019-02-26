import React from 'react';
import { Radio, RadioGroup } from '../src';
import './style.css';
import AwesomCustomRadio from './AwesomeCustomRadio';

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
				className={'radio-group'}
				selectedValue={this.state.value}
				onChange={this.onChangeValue}
			>
				<label className={'radio-option'}><Radio value={1} className={'radio-checkmark'}/>One</label>
				<label className={'radio-option'}><Radio value={2} className={'radio-checkmark'}/>Two</label>
				<label className={'radio-option'}><Radio value={3} className={'radio-checkmark'}/>Three</label>
				<label className={'radio-option'}><Radio value={4} className={'radio-checkmark'} disabled/>Disabled</label>
			</RadioGroup>
			<h1>Custom input component</h1>

			<RadioGroup
				className={'radio-group'}
				selectedValue={this.state.value}
				onChange={this.onChangeValue}
			>
				<Radio value={1} className={'radio-checkmark'}><AwesomCustomRadio>One</AwesomCustomRadio></Radio>
				<Radio value={2} className={'radio-checkmark'}><AwesomCustomRadio>Two</AwesomCustomRadio></Radio>
				<Radio value={3} className={'radio-checkmark'}><AwesomCustomRadio>Three</AwesomCustomRadio></Radio>
				<Radio value={4} className={'radio-checkmark'}><AwesomCustomRadio disabled>Disabled</AwesomCustomRadio></Radio>
			</RadioGroup>

			<h1>Render functions</h1>
			<RadioGroup
				className={'radio-group'}
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

export default App;
