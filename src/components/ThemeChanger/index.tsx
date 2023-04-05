import React from "react";
import List from "./list";

const ThemeChanger: React.FC = () => {
  const [number, setNumber] = React.useState(0);
  const [isDark, setDark] = React.useState(false);

  const getItems = React.useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: isDark ? "#333" : "#FFF",
    color: isDark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) =>
          setNumber(
            isNaN(parseInt(e?.target?.value)) ? 0 : parseInt(e.target.value)
          )
        }
      />
      <button onClick={() => setDark(!isDark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default ThemeChanger;
