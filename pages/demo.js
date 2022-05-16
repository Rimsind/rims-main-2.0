import { useState } from "react";

const Demo = () => {
  const array1 = [
    { Name: "Amit Mahapatra", Age: "22" },
    { Name: "Arya Jana", Age: "35" },
  ];
  const array2 = [
    { Name: "Prasenjit Kamila", Age: "21" },
    { Name: "Rabindranath Mandal", Age: "50" },
  ];
  const [list, setList] = useState(array1.concat(array2));

  const Delete = (index) => {
    const id = index;
    setList((oldItems) => {
      return oldItems.filter((items, index) => {
        return index !== id;
      });
    });
  };

  const concate = () => {
    const payload = {
      data: list,
    };
    console.log(payload);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={concate}>
        Add
      </button>
      <ul>
        {list.map((items, index) => (
          <li key={index} className="mt-3 border border-bottom">
            <span>Name : {items.Name}</span>
            <span>Age: {items?.Age}</span>
            <button className="ms-2" onClick={() => Delete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Demo;
