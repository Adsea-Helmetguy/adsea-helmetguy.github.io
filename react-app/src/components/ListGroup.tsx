import { Fragment, useState } from "react"; //Replacement of div
// import type { MouseEvent } from "react";

interface Props {
  items: string[]; //array of strings
  heading: string; //a string
  onSelectitem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectitem }: Props) {
  //stateHook
  const [selectedIndex, setSelectedIndex] = useState(-1); //returns an array
  //   arr[0]; //variable (selectedIndex)
  //   arr[1]; //updater function

  return (
    //<h1>A component cannot return more than one element</h1>, so either <div> or <Fragment>
    //You can only put html elements or other react components
    //With the exception of braces {}
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectitem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  ); //1 && 3*
}

export default ListGroup;

//
/* 1*)
encountered error for this:
Each child in a list should have a unique "key" prop.
Check the render method of `ListGroup`. See https://react.dev/link/warning-keys for more information.
Code at this point looks like this:

------------------------------------------------------------------------------------
import { Fragment } from "react"; //Replacement of div

function ListGroup() {
  const items = ["Japan", "Tokyo", "London", "Paris", "Singapore"];

  //Converting them all to an <li> Element "30:52".
  // items.map(item => <li>{item}</li>);

  return (
    //<h1>A component cannot return more than one element</h1>
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>          <-----------------------------
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
------------------------------------------------------------------------------------

It is bascially saying that each list item <li> should have a key property or key item,
to be able to identify that item, like a unique ID. It's for react to use to keep track
of items, to know which part of pages to be updated.
So each item needs a unique key.
*/
//

//
/* 2*) reference: "https://javascript.info/arrow-functions-basics"
    if (items.length === 0)
      return (
        <Fragment>
          <h1>List</h1>
          <p>No item found.</p>
        </Fragment>
      );
Mosh didn't like this implementation because it has a duplicate "<h1>List</h1>"" when the return()
also has it. so he changed it to be placed in the return() section with:
"{items.length === 0 ? <p>No item found.</p> : null}". But mosh thinks it can be further improved.
So he went ahead and first create a new const message and copied the expression to become:
	1) const message = items.length === 0 ? <p>No item found.</p> : null;
		|or with a function instead|->
	2) const getMessage = () =>


**Note, the classic way:
"function getMessage() {
	return ("hello");
}"
Works, it's just that this method is react related and works well with callbacks and
components, most react users use it. Maybe u will figure it out eventually.
*/

//3*) instead of doing if/else/"? value : null", you can use "&&" instead so that u don't need a null.
// Returns the value or false. {items.length === 0 && <p>No Item Found</p>}
