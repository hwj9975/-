import PropTypes from 'prop-types';
// mui imports
import {
  Button,
  Fade,
  List,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const NavGroup = ({ item, level }) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [selected, setSelected] = useState(false);

  const navigate = useNavigate();

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setSelected(true);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <>
      <List component="li" disablePadding key={item.id}>
        <Button
          sx={{
            whiteSpace: 'nowrap',
            marginBottom: '2px',
            marginLeft: '20px',
            padding: '8px 10px',
            borderRadius: '8px',
            backgroundColor: selected ? theme.palette.primary.main : 'inherit',
            color: theme.palette.text.secondary,
            paddingLeft: '10px',
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.main,
            },
            '&.Mui-selected': {
              color: 'white',
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: 'white',
              },
            },
          }}
          color="inherit"
          disabled={item.disabled}
          onClick={handleOpen}
        >
          <ListItemIcon
            sx={{
              minWidth: '36px',
              p: '3px 0',
              color: 'inherit',
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText>
            <>{item.title}</>
          </ListItemText>
        </Button>
      </List>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
        {item.children.map((child) => (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              navigate(child.href);
            }}
          >
            {child.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;
