import React, { Fragment } from "react";
import Particles from "react-particles-js";

export default ({ children }) => (
  <Fragment>
    <Particles
      style={{ position: "absolute", left: 0, zIndex: 0 }}
      params={{
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 500
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            speed: 1,
            out_mode: "out"
          },
          shape: {
            type: "circle",
            
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0.05,
            random: true,
            anim: {
              enable: true,
              speed: 0.01,
              opacity_min: 0.01,
              sync: false
            }
          },
          size: {
            value: 60,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false
            }
          }
        },
        retina_detect: false
      }}
    />
    {children}
  </Fragment>
);
