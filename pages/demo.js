import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} />
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
export default Example;

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="">
        <h1>This content needs to be printed</h1>
        <h2>fgfjg</h2>
      </div>
    </div>
  );
});
