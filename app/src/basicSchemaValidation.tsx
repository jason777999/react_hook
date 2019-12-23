import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

let renderCounter = 0;

const validationSchema = yup.object().shape(
  {
    firstName: yup.string().required(),
    lastName: yup
      .string()
      .max(5)
      .required(),
    min: yup.number().min(10),
    max: yup.number().max(20),
    minDate: yup.date().min('2019-08-01'),
    maxDate: yup.date().max('2019-08-01'),
    minLength: yup.string().min(2),
    minRequiredLength: yup
      .string()
      .min(2)
      .required(),
    selectNumber: yup.string().required(),
    pattern: yup.string().matches(/\d+/),
    radio: yup.string().required(),
    checkbox: yup.string().required(),
    exclusivelyRequiredOne: yup.string().when('exclusivelyRequiredTwo', {
      is: '',
      then: yup.string().required(),
      otherwise: yup.string().length(0),
    }),
    exclusivelyRequiredTwo: yup.string().when('exclusivelyRequiredOne', {
      is: '',
      then: yup.string().required(),
      otherwise: yup.string().length(0),
    }),
  },
  [['exclusivelyRequiredOne', 'exclusivelyRequiredTwo']],
);

const BasicSchemaValidation: React.FC = (props: any) => {
  const { register, handleSubmit, errors } = useForm<{
    firstName: string;
    lastName: string;
    min: string;
    max: string;
    minDate: string;
    maxDate: string;
    minLength: string;
    minRequiredLength: string;
    selectNumber: string;
    pattern: string;
    radio: string;
    checkbox: string;
    multiple: string;
    validate: string;
  }>({
    validationSchema,
    mode: props.match.params.mode,
  });
  const onSubmit = () => {};

  renderCounter++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} placeholder="firstName" />
      {errors.firstName && <p>firstName error</p>}
      <input name="lastName" ref={register} placeholder="lastName" />
      {errors.lastName && <p>lastName error</p>}
      <input type="number" name="min" ref={register} placeholder="min" />
      {errors.min && <p>min error</p>}
      <input type="number" name="max" ref={register} placeholder="max" />
      {errors.max && <p>max error</p>}
      <input type="date" name="minDate" ref={register} placeholder="minDate" />
      {errors.minDate && <p>minDate error</p>}
      <input type="date" name="maxDate" ref={register} placeholder="maxDate" />
      {errors.maxDate && <p>maxDate error</p>}
      <input name="minLength" ref={register} placeholder="minLength" />
      {errors.minLength && <p>minLength error</p>}
      <input
        name="minRequiredLength"
        ref={register}
        placeholder="minRequiredLength"
      />
      {errors.minRequiredLength && <p>minRequiredLength error</p>}
      <select name="selectNumber" ref={register}>
        <option value="">Select</option>
        <option value={1}>1</option>
        <option value={2}>1</option>
      </select>
      {errors.selectNumber && <p>selectNumber error</p>}
      <input name="pattern" ref={register} placeholder="pattern" />
      {errors.pattern && <p>pattern error</p>}
      Radio1
      <input type="radio" name="radio" ref={register} value="1" />
      Radio2
      <input type="radio" name="radio" ref={register} value="2" />
      Radio3
      <input type="radio" name="radio" ref={register} value="3" />
      {errors.radio && <p>radio error</p>}
      <input type="checkbox" name="checkbox" ref={register} />
      {errors.checkbox && <p>checkbox error</p>}
      <button>Submit</button>
      <div id="renderCount">{renderCounter}</div>
    </form>
  );
};

export default BasicSchemaValidation;
