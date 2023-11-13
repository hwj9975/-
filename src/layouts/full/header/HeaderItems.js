import { Box, List } from '@mui/material';
import { useLocation } from 'react-router';
import Menuitems from './MenuItems';
import NavGroup from './NavGroup/NavGroup';
import NavItem from './NavItem';

const HeaderItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 3, width: '100%' }}>
      <List
        sx={{
          width: '100%',
          pt: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.children) {
            return <NavGroup item={item} key={item.id} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return <NavItem item={item} key={item.id} pathDirect={pathDirect} />;
          }
        })}
      </List>
    </Box>
  );
};
export default HeaderItems;
