import React from 'react';
import PropTypes from 'prop-types';

import { RadioGroupContext } from './GroupContext';

class Radio extends React.Component {

	static propTypes = {
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]).isRequired,
		children: PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.func,
		]),
	};

	render() {
		const { value, children, ...rest } = this.props;
		return (
			<RadioGroupContext.Consumer>
				{({ selectedValue, onChange, name }) => {
					const checked = selectedValue === value;
					const boundOnChange = onChange.bind(null, value);
					if (typeof children === 'function') {
						return children({ name, checked, onChange: boundOnChange });
					} else if (typeof children === 'object') {
						const child = React.Children.only(children);
						return React.cloneElement(child, { name, checked, onChange: boundOnChange });
					} else {
						return <input
							role={'radio'}
							type={'radio'}
							name={name}
							aria-checked={checked}
							checked={checked}
							value={value}
							onChange={() => onChange(value)}
							{...rest}
						/>;
					}
				}}
			</RadioGroupContext.Consumer>
		);
	}
}

export default Radio;
