import { FunctionComponent } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      The current theme is: {type}
      <Switch
        initialChecked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      {console.log(isDark)}
    </div>
  );
};

export default HomePage;
