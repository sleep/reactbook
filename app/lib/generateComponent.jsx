import React from "react";
import Illiterate from "react-illiterate";

export default function(src, classes) {
  return React.createClass({
    render() {
      return (<div> Hello World!!</div>);

      // return (
      //     <Illiterate src={src}
      //                 classes={classes}/>
      // );
    }
  });
}