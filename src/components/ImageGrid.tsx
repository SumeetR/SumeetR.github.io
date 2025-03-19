import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Tag from './Tag';
import { getImages, ImageMeta } from '../helpers';

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

interface Block {
  cols: number;
  rows: number;
}
interface BlockMatrix {
  [key: number]: Block[];
}
const SINGLE_BLOCK_SMALL: Block = { cols: 12, rows: 2};
const SINGLE_BLOCK: Block = { cols: 12, rows: 4 };
const DOUBLE_BLOCK: Block = { cols: 6, rows: 3 };
const TRIPLE_BLOCK: Block = { cols: 4, rows: 2 };
const BLOCK_MATRIX: BlockMatrix = {
  0: [SINGLE_BLOCK, DOUBLE_BLOCK, DOUBLE_BLOCK, SINGLE_BLOCK, TRIPLE_BLOCK, TRIPLE_BLOCK, TRIPLE_BLOCK],
  1: [SINGLE_BLOCK],
  2: [DOUBLE_BLOCK, DOUBLE_BLOCK],
  3: [SINGLE_BLOCK, DOUBLE_BLOCK, DOUBLE_BLOCK], 
  4: [SINGLE_BLOCK, DOUBLE_BLOCK, DOUBLE_BLOCK, SINGLE_BLOCK],
  5: [DOUBLE_BLOCK, DOUBLE_BLOCK, TRIPLE_BLOCK, TRIPLE_BLOCK, TRIPLE_BLOCK],
  6: [SINGLE_BLOCK, DOUBLE_BLOCK, DOUBLE_BLOCK, TRIPLE_BLOCK, TRIPLE_BLOCK, TRIPLE_BLOCK]
};

const getBlock = (width: any, index: number, total: number): Block => {
  if (isWidthDown('sm', width)) {
    return SINGLE_BLOCK_SMALL;
  }
  const fullBlocks = Math.floor(total / 7);
  const position = index % 7;
  let remainder = 0;
  // NOTE: Only change remainder for extra blocks
  if (index >= fullBlocks * 7) {
    remainder = total % 7;
  } 
  const block = BLOCK_MATRIX[remainder][position];
  return block;
};

function AdvancedGridList(props: Props) {
  const classes = useStyles();
  const {width, setTag, tag} = props;
  const images = getImages(tag);
  return (
    <div className={classes.root}>
      <GridList cols={12} spacing={1} className={classes.gridList}>
        {images.map((tile: ImageMeta, index: number) => {
          const { cols, rows } = getBlock(width, index, images.length);
          return (
            <GridListTile className={classes.tile} key={`${index}_${tile.img}`} cols={cols} rows={rows}>
              <img src={tile.img} alt={`${tile.id}_${tile.tags.join('_')}`} />
              <GridListTileBar
                title={tile.id}
                subtitle={tile.tags.map((text: string, tag_index: number) => <Tag key={`${tag}_${tag_index}`} tag={text} selected={tag} onClick={setTag} />)}
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