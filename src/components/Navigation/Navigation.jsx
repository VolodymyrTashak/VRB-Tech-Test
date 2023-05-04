import { NavItem } from './Navigation.styled';

export const Navigation = () => {

  return (
    <nav>
      <NavItem to="/">Home</NavItem>
       <NavItem to="/userArticles">UserArticles</NavItem>
       <NavItem to="/topNews">TopNews</NavItem>
    </nav>
  );
};