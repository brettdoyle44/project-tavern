import { FunctionComponent } from 'react';
import {
  styled,
  Input,
  Textarea,
  Grid,
  Text,
  Checkbox,
  Button,
} from '@nextui-org/react';

interface Props {}

const CampaignForm: FunctionComponent<Props> = () => {
  return (
    <>
      <Grid.Container gap={3}>
        <Grid justify="center" xs={12}>
          <Input label="Campaign Name" css={{ width: '40vw' }} />
        </Grid>
        <Grid justify="center" xs={12}>
          <Textarea label="Campaign Details" css={{ width: '40vw' }} />
        </Grid>
        <Grid justify="center" xs={12}>
          <Text>Choose your channels</Text>
        </Grid>
        <Grid justify="center" xs={12}>
          <Checkbox.Group size="sm" color="success" value={['']} row>
            <Checkbox color="gradient" value="1">
              Email
            </Checkbox>
            <Checkbox color="gradient" value="2">
              Blog Post
            </Checkbox>
            <Checkbox color="gradient" value="3">
              Facebook
            </Checkbox>
            <Checkbox color="gradient" value="4">
              Twitter
            </Checkbox>
          </Checkbox.Group>
        </Grid>
        <Grid justify="center" xs={12}>
          <Button color="primary" css={{ width: '40vw' }}>
            Continue
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default CampaignForm;
