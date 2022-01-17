import { FunctionComponent } from 'react';
import { styled, Input } from '@nextui-org/react';
import Dropdown from './Dropdown';
import { HiSearch } from 'react-icons/hi';

const HeaderArea = styled('div', {
  gridArea: 'header',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1.5em 0',
  padding: '0 3em',
  alignItems: 'center',
});

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <>
      <HeaderArea>
        <Input
          placeholder="Search"
          type="search"
          width="30em"
          contentLeft={<HiSearch />}
        />
        <Dropdown />
      </HeaderArea>
    </>
  );
};

export default Header;
