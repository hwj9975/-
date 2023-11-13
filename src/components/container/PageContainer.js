import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageContainer = ({ title, description, children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box maxWidth="800px">{children}</Box>
    </LocalizationProvider>
  </Box>
);

PageContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default PageContainer;
