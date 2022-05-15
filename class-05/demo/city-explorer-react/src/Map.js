/**
 * @file Map.js
 * @author Code Fellows
 */
import React from "react";

class Map extends React.Component {
  render() {
    console.log("Map.render() map:" + this.props.map);
    return (
      <div id="map">
        <h3>Map of {this.props.location.search_query}</h3>
        {this.props.map && <img src={this.props.map || ""} alt="map" />}
      </div>
    );
  }
}

export default Map;
