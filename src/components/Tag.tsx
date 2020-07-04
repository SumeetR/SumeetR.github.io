import React from 'react';
import Button from '@material-ui/core/Button';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
  },
});

interface Props {
  selected?: string;
  tag: string;
  onClick: (tag?: string) => void;
}
const Tag = (props: Props) => {
  const { selected, tag, onClick } = props;
  const isSelected = selected === tag;
  const color =  'primary';
  const variant = isSelected ? 'contained' : undefined;
  const value = !isSelected ? tag : '';
  return (
    <ThemeProvider theme={theme}>
      <Button size="small" color={color} variant={variant} onClick={() => onClick(value)} disableElevation > #{tag} </Button>
    </ThemeProvider>
  );
};

export default Tag; 