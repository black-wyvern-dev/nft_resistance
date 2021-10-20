import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import Character1 from '../assets/Images/character1.png';
import Character2 from '../assets/Images/character2.png';
import Character3 from '../assets/Images/character3.png';
import Character4 from '../assets/Images/character4.png';
import Character5 from '../assets/Images/character5.png';

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 20,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character1}
          alt="1"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character2}
          alt="2"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character3}
          alt="3"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character4}
          alt="4"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character5}
          alt="5"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character2}
          alt="6"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character3}
          alt="7"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character4}
          alt="7"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character3}
          alt="7"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img
          width="70%"
          src={Character5}
          alt="8"
          style={{boxShadow: '0px 10px 10px'}}
        />
      )
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "50%", margin: "0 auto", position: "absolute", right: '10%', left: '10%', height: '300px' }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
        //   showNavigation={this.state.showNavigation}
          autoplay={true}
          animationConfig={this.state.config}
        />
        {/* <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={(e) => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}
