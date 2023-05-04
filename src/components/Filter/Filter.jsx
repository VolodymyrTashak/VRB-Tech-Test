import { useDispatch } from 'react-redux';

import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';
import { filterByTitle } from 'redux/slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterByTitle = e => {
    dispatch(filterByTitle(e.currentTarget.value));
  };

  return (
    <FilterBox>
    <FilterLabel>
      Find articles by title
      <FilterInput type="text" name="filter" onChange={onFilterByTitle} />
    </FilterLabel>
    </FilterBox>
  );
};