import React from "react";
import "../Sass/event.css";
const Event = (props) => {
  console.log(props.categorys);
  return (
    <>
      <div className="event" name={props.id}>
        <img src={props.src} alt="" />
        <div className="caption">
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
          <div className="categories">
            {props.categorys.map((category, ind) => {
              return (
                <span className="category" key={ind}>
                  {category}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Event;
