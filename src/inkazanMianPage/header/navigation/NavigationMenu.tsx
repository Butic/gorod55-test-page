import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Icons from './icons/Icons';
import { IconsEnums } from '../../../enums/icon.enums';
import NavLabel from './labels/NavLabel';

const tabsStyle = {
  display: "flex",
  alignItems: "flex-start",
  padding: 0,
  position: "absolute",
  width: "420px",
  left: "calc(50% - 420px/2)",
  top: 0,
};

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavigationMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ margin: 0, padding: 0, width: '100%' }}>
      <Tabs sx={tabsStyle} value={value} onChange={handleChange} TabIndicatorProps={{style: {backgroundColor: '#FFFFFF'}}} aria-label="nav-tabs-example">
        <Tab icon={<Icons icon={IconsEnums.HOME_ICON} targeted={value===0}/>} iconPosition="start" label={<NavLabel text={"главное"} targeted={value===0}/>} />
        <Tab icon={<Icons icon={IconsEnums.NEWS_ICON} targeted={value===1}/>} iconPosition="start" label={<NavLabel text={"новости"} targeted={value===1}/>}/>
        <Tab icon={<Icons icon={IconsEnums.VIDEO_ICON} targeted={value===2}/>} iconPosition="start" label={<NavLabel text={"видео"} targeted={value===2}/>}/>
      </Tabs>
    </Box>
  );
};

export default NavigationMenu;
