import React from 'react';
import PropTypes from 'prop-types';

const AwesomCustomRadio = ({ name, checked, onChange, value, children, disabled }) => {
	return <label className={'awesome-radio-wrapper'}>
		<input
			className={'awesome-radio-input'}
			type={'radio'}
			name={name}
			checked={checked}
			value={value}
			disabled={disabled}
			onChange={onChange}
		/>
		<span className={'awesome-radio-label'}>{children}</span>
	</label>;
};

AwesomCustomRadio.propTypes = {
	name: PropTypes.any,
	checked: PropTypes.any,
	onChange: PropTypes.any,
	value: PropTypes.any,
	children: PropTypes.any,
	disabled: PropTypes.any,
};

export default AwesomCustomRadio;
