import { FunctionComponent } from 'react';
import { HiClock } from 'react-icons/hi';
import { FaEnvelope, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import {
  Card,
  Text,
  Button,
  Modal,
  Row,
  useModal,
  Grid,
  styled,
  Avatar,
} from '@nextui-org/react';

const CampaignCard = styled(Card, {
  color: '#fff',
});

interface CampaignsProps {}

const Campaigns: FunctionComponent<CampaignsProps> = () => {
  const { setVisible, bindings } = useModal();

  return (
    <>
      <Grid.Container gap={2}>
        <Grid xs={12} alignItems="center" justify="space-between">
          <Text h1 size={40} weight="bold">
            Campaigns
          </Text>
          <Button onClick={() => setVisible(true)}>
            <HiPlus style={{ color: '#fff', marginRight: '5px' }} /> New
            Campaign
          </Button>
        </Grid>
        <Grid xs={12} md={4}>
          <Card>
            <Card.Body css={{ py: '$10' }}>
              <Text css={{ py: '$5' }} weight="bold">
                Sesame Partnership
              </Text>
              <Text color="$gray500">
                Some quick example text to build on the card title and make up
                the bulk of the cards content...
              </Text>
              <Text weight="bold" css={{ py: '$5' }}>
                Channels
              </Text>
              <Grid.Container>
                <Grid xs={12}>
                  <Avatar.Group>
                    <Avatar
                      rounded
                      color="gradient"
                      icon={<FaEnvelope size={15} fill="#fff" />}
                    />
                    <Avatar
                      rounded
                      color="gradient"
                      icon={<FaFacebookF size={15} fill="#fff" />}
                    />
                    <Avatar
                      rounded
                      color="gradient"
                      icon={<FaTwitter size={15} fill="#fff" />}
                    />
                  </Avatar.Group>
                </Grid>
              </Grid.Container>
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <Button auto color="warning" clickable={false} rounded flat>
                  <HiClock
                    style={{
                      fontSize: '1.25em',
                      marginRight: '5px',
                    }}
                  />
                  Mar 20th
                </Button>
                <Button auto color="warning" clickable={false} rounded light>
                  In Progress
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>Hello</Modal.Body>
        <Modal.Footer>
          <Button flat auto color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button onClick={() => setVisible(false)}>Agree</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Campaigns;
