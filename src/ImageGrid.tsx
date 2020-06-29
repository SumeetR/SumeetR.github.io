import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { getImages, ImageMeta} from './helpers';

interface Props {
  setTag: (tag?: string) => void;
  tag?: string;
  width: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'strech',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    tile: {
      height: '200px'
    },
    icon: {
      color: 'white',
    },
  }),
);

const calculateColsRows = (width: any, index: number): { cols: any, rows: number } => {
  if (isWidthDown('sm', width)) {
    return { cols: 12, rows: 2 };
  }
  const last_digit = index % 10;
  switch (last_digit) {
    case 1:
    case 2:
    case 8:
    case 9:
      return { cols: 6, rows: 3 };
    case 4:
    case 5:
    case 6:
      return { cols: 4, rows: 2 };
    default:
      return { cols: 12, rows: 4 };
  }
};


const Tag = (props: { tag: string, onClick: (tag: string) => void}) => {
  const { tag, onClick} = props;
  return <span onClick={() => onClick(tag)}> #{tag} </span>;
};

function AdvancedGridList(props: Props) {
  const classes = useStyles();
  const {width, setTag, tag} = props;
  const images = getImages(tag);
  return (
    <div className={classes.root}>
      <GridList cols={12} spacing={1} className={classes.gridList}>
        {images.map((tile: ImageMeta, index: number) => {
          const { cols, rows } = calculateColsRows(width, index);
          return (
            <GridListTile className={classes.tile} key={`${index}_${tile.img}`} cols={cols} rows={rows}>
              <img src={tile.img} alt={`${tile.id}_${tile.tags.join('_')}`} />
              <GridListTileBar
                title={tile.id}
                subtitle={tile.tags.map((tag: string, tag_index: number) => <Tag key={`${tag}_${tag_index}`} tag={tag} onClick={setTag} />)}
                titlePosition="top"
                className={classes.titleBar}
              />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
}

export default withWidth()(AdvancedGridList);