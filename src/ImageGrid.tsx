import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { images } from './constants';

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

const getMetadata = (img: string) => {
  const base = 'https://sumcho-dot-com-images.s3-eu-west-1.amazonaws.com/images/';
  const items = ((img.split(base)[1]).split('.jpeg')[0]).split('_');
  return {
    id: items[0],
    place: items[1],
    country: items[2],
    region: items[3],
    tags: [items[1], items[2], items[3]]
  };
};

const calculateColsRows = (width: any, index: number): { cols: any, rows: number } => {
  if (isWidthDown('sm', width)) {
    return { cols: 12, rows: 5 };
  }
  const last_digit = index % 10;
  switch (last_digit) {
    case 1:
    case 2:
    case 8:
    case 9:
      return { cols: 6, rows: 8 };
    case 4:
    case 5:
    case 6:
      return { cols: 4, rows: 6 };
    default:
      return { cols: 12, rows: 15 };
  }
};

function AdvancedGridList(props: {width: any}) {
  const classes = useStyles();
  const {width} = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={50} cols={12} spacing={1} className={classes.gridList}>
        {images.map((tile: {img: string}, index: number) => {
          const { cols, rows } = calculateColsRows(width, index);
          const details = getMetadata(tile.img);
          return (
            <GridListTile className={classes.tile} key={`${index}_${tile.img}`} cols={cols} rows={rows}>
              <img src={tile.img} alt={`${details.id}_${details.tags.join('_')}`} />
              <GridListTileBar
                title={details.id}
                subtitle={details.tags.map((tag: string, tag_index: number) => <span key={`${tag}_${tag_index}`} > #{tag} </span>)}
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