import { FunctionComponent } from 'react';
// import { HiClock } from 'react-icons/hi';
// import { FaEnvelope, FaFacebookF, FaTwitter } from 'react-icons/fa';
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
} from '@nextui-org/react';

const CampaignCard = styled(Card, {
  color: '#fff',
});

interface CampaignsProps {}

const Campaigns: FunctionComponent<CampaignsProps> = () => {
  const { setVisible, bindings } = useModal();

  return (
    <>
      <Grid.Container gap={2} justify="center">
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
          <Card clickable>
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Body css={{ py: '$10' }}>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Row justify="flex-end">
                <Button light>Cancel</Button>
                <Button>Agree</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card>
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Body css={{ py: '$10' }}>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Row justify="flex-end">
                <Button light>Cancel</Button>
                <Button>Agree</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card>
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Body css={{ py: '$10' }}>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Row justify="flex-end">
                <Button light>Cancel</Button>
                <Button>Agree</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card>
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Body css={{ py: '$10' }}>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Row justify="flex-end">
                <Button light>Cancel</Button>
                <Button>Agree</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card>
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Body css={{ py: '$10' }}>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Row justify="flex-end">
                <Button light>Cancel</Button>
                <Button>Agree</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card>
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Body css={{ py: '$10' }}>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Row justify="flex-end">
                <Button light>Cancel</Button>
                <Button>Agree</Button>
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
