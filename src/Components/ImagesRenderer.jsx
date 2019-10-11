import React, { Component } from "react";
import { connect } from "react-redux";
import { getImages } from "../Redux/Actions/ImagesActions";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class ImagesRenderer extends Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    const { loading, images } = this.props;
    if (loading) return <p>loading...</p>;
    return (
      <div className="masonry">
        {images.map(function(imageData) {
          return (
            <div
             
              key={imageData._attributes.id}
              className="item"
            >
              <img
               style={{
                height: `${Math.floor(
                  Math.random() * (600 - 100 + 1) + 100
                )}px`,
                width: "300px"
              }}
                src={`https://farm${imageData._attributes.farm}.staticflickr.com/${imageData._attributes.server}/${imageData._attributes.id}_${imageData._attributes.secret}.jpg`}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.imagesRed.imagesArray,
    loading: state.imagesRed.loading
  };
}

export default connect(
  mapStateToProps,
  { getImages }
)(ImagesRenderer);
