import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    <div>
      <>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <b>My Alert</b>
          </Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
      </>
    </div>
  );
}

export default App;
