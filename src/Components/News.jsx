import React from "react";
import Event from "./Event";
import crew from "../imgs/crew.jpg";
import starvation from "../imgs/starvation.jpeg";
import "../Sass/news.css";
const News = () => {
  return (
    <div className="news">
      <h2>Latest News</h2>
      <Event
        title="globel warming"
        description="this is a description !! this is a description !! this is a description !! this is a description !! this is a description !! this is a description !! this is a description !! this is a description !! "
        src={`${crew}`}
        categorys={["weather", "danger"]}
      />
      <Event
        title="About Hunger"
        description="this is a description !! this is a description !! this is a description !! this is a description !! this is a description !! this is a description !! this is a description !! this is a description !! "
        src={starvation}
        categorys={["food", "health"]}
      />
    </div>
  );
};

export default News;
