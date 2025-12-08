import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Japan", "Tokyo", "London", "Paris", "Singapore"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="-Cities List-"
        onSelectitem={handleSelectItem}
      />
    </div>
  );
}

export default App;
