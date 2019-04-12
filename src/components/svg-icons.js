import React from "react";


class ContainerIconSVG extends React.Component {
  render() {
    return (
      <svg
        style={{
          height: "32px",
          width: "32px",
          stroke: "none"
        }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 32 32"
      >
        {this.props.children}
      </svg>
    );
  }
}

class AddIconSVG extends React.Component {
  render() {
    return (
      <ContainerIconSVG>
        <path d="M 7,15 C 6.45,15 6,15.44 6,16 6,16.55 6.45,17 7,17 L 15,17 15,25 C 15,25.55 15.44,26 16,26 16.55,26 17,25.55 17,25 L 17,17 25,17 C 25.55,17 26,16.56 26,16 26,15.45 25.55,15 25,15 L 17,15 17,7 C 17,6.45 16.56,6 16,6 15.45,6 15,6.45 15,7 L 15,15 7,15 Z M 7,15" />
      </ContainerIconSVG>
    );
  }
}

class ChatIconSVG extends React.Component {
  render() {
    return (
      <ContainerIconSVG>
        <path d="M 6.07,23.39 C 5.82,23.99 6.26,24.65 6.91,24.65 L 12.05,24.63 C 13.56,25.52 15.28,26 17.07,26 22.55,26 27,21.52 27,16 27,10.48 22.55,6 17.07,6 11.59,6 7.14,10.48 7.14,16 7.14,17.18 7.34,18.33 7.73,19.41 L 6.07,23.39 Z M 6.07,23.39" />
      </ContainerIconSVG>
    );
  }
}

export { AddIconSVG, ChatIconSVG };
