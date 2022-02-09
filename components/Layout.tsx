import { FunctionComponent } from 'react';
import { styled } from '@nextui-org/react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const CoreLayout = styled('div', {
  display: 'grid',
  grid: `
          [row2-start]'main' 1fr [row2-end] / 
          1fr
    `,
  '@md': {
    grid: `
    [row2-start]'sidenav main' 100% [row2-end] / 
    225px 1fr
  `,
  },
});

const MainArea = styled('div', {
  gridArea: 'main',
  '@md': {
    padding: '0.5em 0.5em',
  },
});

interface Props {
  children: any;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <CoreLayout>
        <NavBar />
        {/* <Header /> */}
        <MainArea>{children}</MainArea>
      </CoreLayout>
    </>
  );
};

export default Layout;
