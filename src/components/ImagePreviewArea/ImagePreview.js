import React from 'react';
import * as Cloudbnb from './CloudbnbComponents';

var ImagePreview = React.createClass({
  render: function() {
    return (
      <div className="ImagePreview" style={{'backgroundImage': 'url('+ this.props.image +')'}}>
        <div className="CloudbnbOverview">
          <Cloudbnb.Information name="Renting Space, Portland OR" price={this.props.price} duration="1" />
          <Cloudbnb.Meta people={this.props.people} />
        </div>
      </div>
    );
  }
});
export default ImagePreview;
