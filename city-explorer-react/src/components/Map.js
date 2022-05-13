/**
 * @file Map.js
 * @author Code Fellows
 */
 import React, { Component } from 'react';

 class Map extends Component {

     render() {
         console.log('map.render() map:', this.props.map);
         return (
             <div id="Map">
                 <h3>Map of {this.props.location.search_query}</h3>
                 {this.props.map && <img src={this.props.map || ''} alt='map' />}
                 
             </div>
         );
     }
 }
 
 export default Map;
 