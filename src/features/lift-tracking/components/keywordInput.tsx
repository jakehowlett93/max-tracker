import React from 'react';
import { InputGroup } from 'react-bootstrap';
import Select from 'react-select';

type Option = {
  label: string;
  value: string;
};
export const toOptions = (arr: string[]): Option[] =>
  arr.map((term) => ({ value: term, label: term }));

type Props = {
  label: string;
  placeholder: string;
  options: Option[];
  value: Option[];
  // eslint-disable-next-line no-unused-vars
  onChange: (value: readonly Option[]) => void;
};

const KeywordInput = ({
  label,
  placeholder,
  options,
  value,
  onChange,
}: Props) => (
  <InputGroup>
    <InputGroup.Text>{label}</InputGroup.Text>
    <Select
      className="form-control p-0 "
      date-testid="keyword-input-label"
      classNamePrefix="form-control"
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={(input) => onChange(input)}
      isMulti
    />
  </InputGroup>
);

export default KeywordInput;
