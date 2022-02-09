import { FunctionComponent, useState } from 'react';
import { HiCog, HiCurrencyDollar, HiLogout } from 'react-icons/hi';
import { styled } from '@nextui-org/react';
import { FaAngleDown } from 'react-icons/fa';

export const ProfileContainer = styled('div', {
  '&:hover': {
    cursor: 'pointer',
  },
});

export const MainProfileArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  padding: '0.5em 1em',
  borderRadius: '14px',
  boxShadow: '0px 6px 58px rgba(196, 203, 214, 0.103611)',
});

export const ProfilePic = styled('img', {
  maxWidth: '2em',
  borderRadius: '5em',
});

export const ProfileName = styled('div', {
  marginTop: '2px',
  fontSize: '0.9em',
  fontWeight: '700',
});

export const ProfileRole = styled('div', {
  fontSize: '0.75em',
});

export const DropdownButton = styled(FaAngleDown, {
  '&:hover': {
    cursor: 'pointer',
  },
});

export const Dropdown = styled('div', {
  position: 'absolute',
  right: '10em',
  marginTop: '0.5em',
  background: '#fff',
  alignItems: 'start',
  zIndex: '995',
});

export const DropdownContent = styled('div', {
  position: 'absolute',
  padding: '0.5em 0',
  borderRadius: '14px',
  paddingBottom: '0.5em',
  backgroundColor: '#fff',
  minWidth: '145.52px',
  zIndex: '1',
  boxShadow: '$sm',
});

export const DropLink = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75em',
  color: '#000',
  padding: '0.5em 0 0.5em 1.5em',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: '#4f9da6',
  },
});

interface Props {}

const ProfileDropdown: FunctionComponent<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    return setIsOpen(!isOpen);
  }
  return (
    <>
      <ProfileContainer>
        <MainProfileArea onClick={toggleDropdown}>
          <ProfilePic src="photo.png" alt="profile picture" />
          <DropdownButton />
        </MainProfileArea>
        {isOpen && (
          <Dropdown>
            <DropdownContent>
              <DropLink>
                <HiCog />
                Settings
              </DropLink>
              <DropLink>
                <HiCurrencyDollar />
                Billing
              </DropLink>
              <DropLink>
                <HiLogout />
                Logout
              </DropLink>
            </DropdownContent>
          </Dropdown>
        )}
      </ProfileContainer>
    </>
  );
};

export default ProfileDropdown;
