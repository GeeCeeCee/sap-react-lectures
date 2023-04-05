import React from "react";

interface Props {
  position: number | null;
}

const ScrollHeading: React.FC<Props> = ({ position }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    setScrollPosition(position ?? 0);
  }, [position]);

  return (
    <p style={{ position: "sticky", top: "0" }}>
      Current scroll position: {scrollPosition}px
    </p>
  );
};

export default ScrollHeading;
