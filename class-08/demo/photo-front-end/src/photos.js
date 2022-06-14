/**
 * @file photos.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description Displays a collection of photo objects
 * 
 */
'use strict';

import React from 'react';

class Photos extends React.Component {

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      this.props.photos.map((photo, idx) => (
        <div key={idx}>
          {photo.img_url &&
            <a href={photo.original_image}><img alt={this.props.searchQuery} width={200} src={photo.img_url} /></a>
          }
          <span>photo by: {photo.photographer} from unsplash</span>
        </div>
      ))
    )
  }
}

export default Photos;