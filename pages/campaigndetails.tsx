import { FunctionComponent } from 'react';
import {
  Grid,
  Card,
  Text,
  Button,
  Avatar,
  Divider,
  styled,
} from '@nextui-org/react';
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaTasks,
  FaTh,
  FaTiktok,
  FaSnapchatGhost,
  FaBell,
  FaEllipsisV,
} from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import Header from '../components/Header';

const ListFilterIcon = styled(FaTasks, {
  fontSize: '1.25em',
  color: '$primary',
  marginRight: '1em',
  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
  },
  '&:active': {
    color: '$primary',
  },
});

const KanbanFilterIcon = styled(FaTh, {
  fontSize: '1.25em',
  '&:hover': {
    color: '$primaryLight',
    cursor: 'pointer',
  },
  '&:active': {
    color: '$primary',
  },
});

interface Props {}

const CampaignDetails: FunctionComponent<Props> = () => {
  return (
    <>
      <Header title="Sesame Partnership" />
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Card>
            <Card.Body css={{ padding: '$5 $12' }}>
              <Grid.Container justify="space-between">
                <Grid>
                  <Text weight="bold" css={{ py: '$5' }}>
                    Owner
                  </Text>
                  <Grid.Container alignItems="center">
                    <Grid css={{ pr: '0.5em' }}>
                      <Avatar src="photo.png" />
                    </Grid>
                    <Grid>
                      <Text>Brett D.</Text>
                    </Grid>
                  </Grid.Container>
                </Grid>
                <Grid>
                  <Grid.Container>
                    <Grid xs={12}>
                      <Text weight="bold" css={{ py: '$5' }}>
                        Target Launch Date
                      </Text>
                    </Grid>
                    <Grid xs={12} css={{ py: '$4' }}>
                      <Text>Feb 6th, 2022</Text>
                    </Grid>
                  </Grid.Container>
                </Grid>
                <Grid>
                  <Text weight="bold" css={{ py: '$5' }}>
                    Watchers
                  </Text>
                  <Grid.Container>
                    <Grid xs={12}>
                      <Avatar.Group>
                        <Avatar src="photo.png" />
                        <Avatar src="photo.png" />
                        <Avatar src="photo.png" />
                        <Avatar src="photo.png" />
                        <Avatar src="photo.png" />
                      </Avatar.Group>
                    </Grid>
                  </Grid.Container>
                </Grid>
                <Grid>
                  <Text weight="bold" css={{ py: '$5' }}>
                    Channels
                  </Text>
                  <Grid.Container>
                    <Grid xs={12}>
                      <Avatar.Group count={12}>
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
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaSnapchatGhost size={15} fill="#fff" />}
                        />
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaTiktok size={15} fill="#fff" />}
                        />
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaBell size={15} fill="#fff" />}
                        />
                      </Avatar.Group>
                    </Grid>
                  </Grid.Container>
                </Grid>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12}>
          <Grid.Container gap={2}>
            <Grid xs={12} alignItems="center">
              <Grid xs={4} justify="flex-start">
                <Text h3 weight="bold">
                  Campaign Tasks
                </Text>
              </Grid>
              <Grid xs={4} justify="center">
                <ListFilterIcon />
                <KanbanFilterIcon />
              </Grid>
              <Grid xs={4} justify="flex-end">
                <Button>
                  <HiPlus style={{ color: '#fff', marginRight: '5px' }} /> New
                  Section
                </Button>
              </Grid>
            </Grid>
            {/* <Grid
              xs={12}
              css={{ background: '$gray100', br: '$lg', height: '50px' }}
              justify="center"
            >
              <Text weight="bold">Done</Text>
            </Grid> */}

            <Grid xs={12}>
              <Card>
                <Grid.Container alignItems="center" gap={1}>
                  <Grid xs={12}>
                    <Grid.Container justify="space-between">
                      <Grid>
                        <Text h3>Active</Text>
                      </Grid>
                      <Grid>
                        <Button auto icon={<HiPlus fill="currentColor" />} />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Divider />
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container alignItems="center">
                      <Grid xs={4} md={2}>
                        <Text>Channel</Text>
                      </Grid>
                      <Grid xs={7} md={3}>
                        <Text>Task Name</Text>
                      </Grid>
                      <Grid xs={0} md={3}>
                        <Text>Assingee</Text>
                      </Grid>
                      <Grid xs={0} md={2}>
                        <Text>Due Date</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Divider />
                  </Grid>

                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={4} md={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={7} md={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={0} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={0} md={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={4} md={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={7} md={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={0} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={0} md={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={4} md={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={7} md={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={0} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={0} md={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                </Grid.Container>
              </Card>
            </Grid>

            <Grid xs={12}>
              <Card>
                <Grid.Container alignItems="center" gap={1}>
                  <Grid xs={12}>
                    <Text h3>Active</Text>
                  </Grid>
                  <Grid xs={12}>
                    <Divider />
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container alignItems="center">
                      <Grid xs={2}>
                        <Text>Channel</Text>
                      </Grid>
                      <Grid xs={3}>
                        <Text>Task Name</Text>
                      </Grid>
                      <Grid xs={4} md={3}>
                        <Text>Assingee</Text>
                      </Grid>
                      <Grid xs={2}>
                        <Text>Due Date</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Divider />
                  </Grid>

                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={4} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={4} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={4} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                </Grid.Container>
              </Card>
            </Grid>

            <Grid xs={12}>
              <Card>
                <Grid.Container alignItems="center" gap={1}>
                  <Grid xs={12}>
                    <Text h3>Active</Text>
                  </Grid>
                  <Grid xs={12}>
                    <Divider />
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container alignItems="center">
                      <Grid xs={2}>
                        <Text>Channel</Text>
                      </Grid>
                      <Grid xs={3}>
                        <Text>Task Name</Text>
                      </Grid>
                      <Grid xs={4} md={3}>
                        <Text>Assingee</Text>
                      </Grid>
                      <Grid xs={2}>
                        <Text>Due Date</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Divider />
                  </Grid>

                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={4} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={4} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                  <Grid xs={12}>
                    <Grid.Container
                      alignItems="center"
                      css={{ pt: '1em' }}
                      justify="flex-start"
                    >
                      <Grid xs={2}>
                        <Avatar
                          rounded
                          color="gradient"
                          icon={<FaFacebookF size={15} fill="#fff" />}
                        />
                      </Grid>
                      <Grid xs={3}>
                        <Text>Organic Post #1</Text>
                      </Grid>

                      <Grid xs={4} md={3}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar src="photo.png" />{' '}
                          <Text css={{ ml: '0.5em' }}>Andrew B.</Text>
                        </div>
                      </Grid>
                      <Grid xs={2}>
                        <Text>Mar. 20th</Text>
                      </Grid>
                      <Grid xs={1} md={2} justify="flex-end">
                        <FaEllipsisV />
                      </Grid>
                    </Grid.Container>
                  </Grid>
                </Grid.Container>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default CampaignDetails;
