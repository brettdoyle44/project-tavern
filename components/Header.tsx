import { FunctionComponent } from 'react';
import { styled, Input, Grid, Text } from '@nextui-org/react';
import Dropdown from './Dropdown';
import { HiSearch } from 'react-icons/hi';

interface Props {
  title: string;
}

const Header: FunctionComponent<Props> = ({ title }) => {
  return (
    <>
      <Grid.Container
        css={{ gridArea: 'header', px: '$7', py: '$4' }}
        justify="space-between"
        alignItems="center"
      >
        <Grid xs={6}>
          <Text h3 weight="bold">
            {title}
          </Text>
        </Grid>
        <Grid xs={6} direction="row" alignItems="center" justify="flex-end">
          <Input
            placeholder="Search"
            type="search"
            width="15em"
            contentLeft={<HiSearch />}
          />
          <Dropdown />
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Header;
