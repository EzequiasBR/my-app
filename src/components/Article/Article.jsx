import React from "react";

import "./style.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={this.props.thumbnail} alt={this.props.title} />
        <div className="article-infos">
          <h1>{this.props.title}</h1>
          <h3>{this.props.provider}</h3>

          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}
