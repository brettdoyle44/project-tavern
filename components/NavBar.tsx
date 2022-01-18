import { FunctionComponent } from 'react';
import { styled, Text } from '@nextui-org/react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
// import logo from '../public/vercel.svg';
import {
  HiLightningBolt,
  HiViewBoards,
  HiHome,
  HiCalendar,
} from 'react-icons/hi';

const SideNav = styled('div', {
  gridArea: 'sidenav',
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5em 1.5em 0 1.5em',
  height: '100%',
  borderRadius: '24px',
  width: '240px',
  position: 'fixed',
  overflowY: 'auto',
  zIndex: '2',
  textAlign: 'left',
  transition: 'all 0.6s ease-in-out',
  boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)',
  '@md': {
    position: 'fixed',
    transform: 'translateX(0)',
    boxShadow: 'none',
  },
});

const SideNavClose = styled('div', {
  position: 'absolute',
  visibility: 'visible',
  top: '8px',
  right: '12px',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#ddd',
  '@md': {
    visibility: 'hidden',
  },
});

const LogoContainer = styled('div', {
  padding: '0.5em 2.25em',
});

const Logo = styled('img', {
  width: '9em',
});

const LinkContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0.9em',
  fontWeight: '500',
  listStyle: 'none',
  margin: '0',
  paddingLeft: '1.25em',
  width: '100%',
});

const LinkWrapper = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1em',
  padding: '1em 0em 0em 1.25em',
  borderTopLeftRadius: '14px',
  borderBottomLeftRadius: '14px',
  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
  },
});

const NavLink = styled(Link, {
  color: '#595967',
  display: 'block',
  textDecoration: 'none',
});

interface Props {}

const NavBar: FunctionComponent<Props> = () => {
  return (
    <>
      <SideNav>
        <SideNavClose>
          <FaTimes />
        </SideNavClose>
        <LogoContainer>
          <Text
            h1
            size={45}
            css={{
              textGradient: '45deg, $primary -20%, $secondary 50%',
            }}
            weight="black"
          >
            tavern
          </Text>
        </LogoContainer>
        <div>
          <LinkContainer>
            <NavLink href="/home">
              <LinkWrapper>
                <HiHome /> Home
              </LinkWrapper>
            </NavLink>
            <NavLink href="/campaigns">
              <LinkWrapper>
                <HiLightningBolt /> Campaigns
              </LinkWrapper>
            </NavLink>
            <NavLink href="/calendar">
              <LinkWrapper>
                <HiCalendar />
                Calendar
              </LinkWrapper>
            </NavLink>
          </LinkContainer>
        </div>
      </SideNav>
    </>
  );
};

export default NavBar;
