import React from "react";
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business, index) => {
          return <Business business={business} key={index}/>
        })}
      </div>
    );
  }
}

export default BusinessList;