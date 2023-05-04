import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addArticles} from 'redux/slices/articlesSlice';
import { getArticles } from 'redux/selectors';

import { FormLabelTitle, FormLabelDescription, FormInputTitle, FormInputDescription, FormBtn, Form } from './UserForm.styled';

export const UserForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getArticles);

  const onFormSubmit = e => {
    e.preventDefault();
    const filters = contacts.map(filter => filter.title);
    if (filters.includes(title)) {
      alert(`The post with the title ${title} has already been created`);
    }
    dispatch(addArticles( title, description));
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
  };

  const onInputChange = e => {
    switch (e.currentTarget.name) {
      case 'title':
        setTitle(e.currentTarget.value);
        break;
      case 'description':
        setDescription(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  

  return (
    <Form onSubmit={onFormSubmit}>
      <FormLabelTitle>
        Title
        <FormInputTitle
          type="text"
          name="title"
          title="Title"
          required
          value={title}
          onChange={onInputChange}
        />
      </FormLabelTitle>
      <FormLabelDescription>
        Description
        <FormInputDescription
          type="text"
          name="description"
          title="Description"
          required
          value={description}
          onChange={onInputChange}
        />
      </FormLabelDescription>

      <FormBtn type="submit">Add Articles</FormBtn>
    </Form>
  );
};