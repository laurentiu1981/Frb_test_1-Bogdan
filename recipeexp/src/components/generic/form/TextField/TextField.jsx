import cls from 'classnames';
import PropTypes from 'prop-types';

TextField.propTypes = {
  formMethods: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  validatePattern: PropTypes.exact({
    pattern: PropTypes.string,
    errorMessage: PropTypes.string,
  }),
  minLength: PropTypes.number,
  inputAttributes: PropTypes.exact({
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.oneOf(['number', 'text', 'email', 'password']),
    className: PropTypes.string,
  }),
};

TextField.defaultProps = {
  name: '',
  label: '',
  formMethods: null,
  validatePattern: {
    pattern: '',
    errorMessage: 'Invalid input',
  },
  minLength: 0,
  inputAttributes: {
    placeholder: '',
    required: false,
    type: 'text',
    className: '',
  },
};

export default function TextField({ formMethods, name, minLength, validatePattern, label, inputAttributes }) {
  const {
    register,
    formState: { errors },
  } = formMethods;

  const hasError = errors && !!errors[name];
  const { required, className, ...rest } = inputAttributes;

  let inputClasses = cls(
    'border-b-2 w-full border-black text-xl focus:outline-none bg-white',
    hasError && 'border-red-600',
    className
  );
  let labelClasses = cls('text-lg text-left w-full text-xl border-none !bg-transparent', className, {
    'text-red-600': hasError,
  });
  const errorsClasses = 'text-red-600 text-sm text-left inline';
  let divClasses = cls('w-full', { 'pb-6': !hasError });

  let options = {};
  options.validate = (v) => {
    if (required && !v.length) {
      return 'Required';
    }
    if (minLength > v.length) {
      return 'Input must have at least ' + minLength + ' characters';
    }
    if (validatePattern.pattern) {
      const regex = RegExp(validatePattern.pattern);
      return regex.test(v) || validatePattern.errorMessage;
    }
  };

  return (
    <div className={divClasses}>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...register(name, options)} {...rest} autoComplete="true" />
      {hasError && <p className={errorsClasses}>{errors[name].message || ''}</p>}
    </div>
  );
}
