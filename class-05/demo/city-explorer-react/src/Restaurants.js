/**
 * @file Restaurants.js
 * @author Code Fellows
 */
import React from "react";

class Restaurants extends React.Component {
  render() {
    console.log(
      "Restaurants.render() restaurants.length" + this.props.restaurants.length
    );
    return (
      <section id="restaurants">
        <h3>Restaurants in {this.props.location.search_query}</h3>
        <ul>
          {this.props.restaurants &&
            this.props.restaurants.map((place, idx) => {
              return (
                <li key={idx}>
                  <p>Name: {place.restaurant}</p>
                  <p>
                    {place.restaurant} serves {place.cuisines} at{" "}
                    {place.locality}
                  </p>
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

export default Restaurants;
