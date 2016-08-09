import React, { Component, PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import './OffersComponent.scss';

export class OffersComponent extends Component {

  static propTypes = {
    actions: PropTypes.object,
  };


  render() {
    return (
      <div className="OffersComponent">
        <GridList cols={4} cellHeight={200} padding={1}>
          <GridTile className="ribbon-wrapper-green" style={{ backgroundColor: '#bdbdbd' }}>
            <div className="ribbon-green">elem1</div>
          </GridTile>
          <GridTile className="ribbon-wrapper-green" style={{ backgroundColor: '#bdbdbd' }}>
            <div className="ribbon-green">elem2</div>
          </GridTile>
          <GridTile style={{ backgroundColor: '#bdbdbd' }}>
            <div>elem3</div>
          </GridTile>
          <GridTile className="ribbon-wrapper-green" style={{ backgroundColor: '#bdbdbd' }}>
            <div className="ribbon-green">elem4</div>
          </GridTile>
          <GridTile style={{ backgroundColor: '#bdbdbd' }}>
            <div>elem5</div>
          </GridTile>
          <GridTile className="ribbon-wrapper-green" style={{ backgroundColor: '#bdbdbd' }}>
            <div className="ribbon-green">elem6</div>
          </GridTile>
          <GridTile className="ribbon-wrapper-green" style={{ backgroundColor: '#bdbdbd' }}>
            <div className="ribbon-green">elem7</div>
          </GridTile>
          <GridTile className="ribbon-wrapper-green" style={{ backgroundColor: '#bdbdbd' }}>
            <div className="ribbon-green">elem8</div>
          </GridTile>
        </GridList>
      </div>
    );
  }
}
export default OffersComponent;
