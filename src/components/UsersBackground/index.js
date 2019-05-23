import React, { Fragment } from 'react';
import Particles from 'react-particles-js';

export default ({ users, children }) => (
  <Fragment>
    <Particles
      params={{
        particles: {
          number: {
            value: users.length,
            density: {
              enable: true,
              value_area: 800
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            speed: 1,
            out_mode: 'out'
          },
          shape: {
            type: 'circle',
            images: users.map(user => ({ src: user.avatar_url, height: 20, width: 20 }))
          },
          color: {
            value: '#ffffff'
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
