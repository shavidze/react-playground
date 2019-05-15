import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "loremOfficia officia nulla pariatur velit non laborum. "
      },
      {
        icon: <FaHiking />,
        title: "free hiking",
        info: "loremOfficia officia nulla pariatur velit non laborum. "
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "loremOfficia officia nulla pariatur velit non laborum. "
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info: "loremOfficia officia nulla pariatur velit non laborum. "
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
