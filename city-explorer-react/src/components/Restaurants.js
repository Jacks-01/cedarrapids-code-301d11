/**
 * @file Restaurants.js
 * @author Code Fellows
 */
 import React, { Component } from 'react';

 class Restaurants extends Component {
     state = {};
     render() {
         return (
             <section id="Restaurants">
                 <h3>Resaurants in {this.props.location.search_query}</h3>
                 <ul>
                     {this.props.restaurants &&
                     this.props.restaurants.map((place, idx) => {
                         return(
                         <li key={idx}>
                             <p>Name : {place.restaurant}</p>
                             <p>
                                {place.restaurant} serves {place.cuisine}
                            </p>
                         </li>)
                     })};
                 </ul>
                 
             </section>
         );
     }
 }
 
 export default Restaurants;
 