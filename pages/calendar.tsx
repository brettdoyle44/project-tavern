import { FunctionComponent } from 'react';
import FullCalendar from '../components/FullCalendar';
import { Grid, Button, Text } from '@nextui-org/react';
import { HiPlus } from 'react-icons/hi';

interface Props {}

const Calendar: FunctionComponent<Props> = () => {
  return (
    <>
      <Grid.Container gap={2}>
        <Grid xs={12} alignItems="center" justify="space-between">
          <Text h1 size={40} weight="bold">
            Calendar
          </Text>
          <Button>
            <HiPlus style={{ color: '#fff', marginRight: '5px' }} /> Add Event
          </Button>
        </Grid>
        <Grid xs={12}>
          <FullCalendar />
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Calendar;
