import React from "react";

interface ListType {
  getItems: Array<number>;
}

const List: React.FC<ListType> = ({ getItems }) => {
  const [items, setItems] = React.useState<Array<number>>([]);

  React.useEffect(() => {
    setItems(getItems);
    console.log("Updating list");
  }, [getItems]);

  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};

export default List;
