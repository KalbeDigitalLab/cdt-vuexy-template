import { Link } from 'react-router-dom';

import { FooterIllustrations } from '@components/illustrations/footer-illustrations.js';
import type { BoxProps } from '@components/material.js';
import { Box, Button, styled, Typography } from '@components/material.js';

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}));

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(20)
  }
}));

const Error500 = () => {
  return (
    <Box className="content-center">
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography sx={{ mb: 1.5 }} variant="h2">
            Oops, something went wrong!
          </Typography>
          <Typography sx={{ mb: 6, color: 'text.secondary' }}>
            There was an error with the internal server. Please contact your site administrator.
          </Typography>
          <Button component={Link} to="/" variant="contained">
            Back to Home
          </Button>
        </BoxWrapper>
        <Img alt="error-illustration" height="500" src="https://demos.pixinvent.com/vuexy-nextjs-admin-template/demo-1/images/pages/404.png" />
      </Box>
      <FooterIllustrations />
    </Box>
  );
};

Error500.layout = 'blank';

Error500.displayName = 'Error500';

export default Error500;
