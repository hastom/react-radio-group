import React from 'react';
import PropTypes from 'prop-types';

import { RadioGroupContext } from './GroupContext';

class RadioGroup extends React.Component {

	static propTypes = {
		selectedValue: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		onChange: PropTypes.func,
		children: PropTypes.node,
		name: PropTypes.string,
		component: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.func,
			PropTypes.object,
		]),
	};

	static defaultProps = {
		name: '',
		component: 'div',
	};

	render() {
		const { component: Component, selectedValue, onChange, name, children, ...rest } = this.props;
		return (
			<Component role={'radiogroup'} {...rest}>
				<RadioGroupContext.Provider value={{ selectedValue, onChange, name }}>
					{children}
				</RadioGroupContext.Provider>
			</Component>
		);
	}
}

export default RadioGroup;
