import React from 'react'
import pluralize from 'pluralize'

function Information(props){
    var duration = pluralize('day',props.duration);

    return (
      <div className="CloudbnbInformation">
        <div className="CloudbnbName">{props.name}</div>
        <div className="CloudbnbPrice">
          <div className="Price">{props.price} $USD</div>
          <div className="Duration">/ {duration}</div>
        </div>
      </div>
    );
}


function Meta(props){
    var people = pluralize('person',props.people);

    return (
      <div className="CloudbnbMeta">
        <div className="Description">Entire place for <strong>{people}</strong></div>
        <div className="Dates"><strong>Mon, Aug 22, 2017</strong> to <strong>Fri, Aug 29, 2017</strong></div>
      </div>
    );
}

export { Information, Meta }
