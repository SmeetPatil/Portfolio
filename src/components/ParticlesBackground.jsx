import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = ({ theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const isLight = theme === 'light';

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "parallax",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10
            }
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#FF3B30", "#FF6B00", "#FFD60A", "#34C759", "#007AFF", "#BF5AF2", "#00D4FF"],
        },
        links: {
          color: isLight ? "#0A0A0A" : "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: isLight ? 0.15 : 0.6,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 3, max: 8 },
        },
      },
      detectRetina: true,
    }),
    [isLight],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        key={theme}
        options={options}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none"
        }}
      />
    );
  }

  return null;
};

export default ParticlesBackground;
