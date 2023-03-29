import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import PropTypes from 'prop-types';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  FormWrapper,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [inputName, setInputName] = useState('');

  const handleInputChange = event => setInputName(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (inputName.trim() === '') {
      toast.warn('Search query can`t be empty!!!');
      return;
    }

    onSubmit(inputName);

    setInputName('');
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            <MdOutlineScreenSearchDesktop />
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies "
          value={inputName}
          onChange={handleInputChange}
        />
      </Form>
    </FormWrapper>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
