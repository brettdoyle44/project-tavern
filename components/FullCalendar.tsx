import { FunctionComponent } from 'react';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Card } from '@nextui-org/react';

interface Props {}

const FullCalendar: FunctionComponent<Props> = () => {
  return (
    <>
      <Card>
        <Card.Body css={{ p: '$15' }}>
          <Calendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek,dayGridDay',
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default FullCalendar;
