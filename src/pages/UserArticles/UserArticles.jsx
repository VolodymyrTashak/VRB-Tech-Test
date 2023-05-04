import { UserForm } from '../../components/UserForm/UserForm';
import { UserList } from '../../components/UserList/UserList';
import { Filter } from '../../components/Filter/Filter';

import { Text } from './UserArticles.styled';

export const UserArticles = () => {
  return (
    <div>
      <Text> Users Articles</Text>
      <UserForm/>
      <Filter />
      <UserList/>
      
    </div>
  );
};

export default UserArticles;