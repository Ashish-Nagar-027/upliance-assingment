import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";

export const Counter = () => {
  const [count, setCount] = useState(
    () => Number(localStorage.getItem("counter")) || 0
  );

  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  const hue = Math.abs(count) * 10;

  const { backgroundColor } = useSpring({
    backgroundColor: `hsl(${hue}, 70%, 85%)`,
    config: { tension: 200, friction: 30 },
  });

  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/`);
  }, []);

  return (
    <animated.div
      style={{
        backgroundColor,
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          // height: "100vh",
        }}
      >
        <Typography variant="h1" sx={{}}>
          {count}
        </Typography>
        <Container
          sx={{
            justifyContent: "center",
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button onClick={() => setCount(count - 1)} variant="contained">
            decrease
          </Button>
          <Button onClick={() => setCount(0)} variant="contained">
            reset
          </Button>
          <Button onClick={() => setCount(count + 1)} variant="contained">
            increase
          </Button>
        </Container>
      </Container>
    </animated.div>
  );
};
