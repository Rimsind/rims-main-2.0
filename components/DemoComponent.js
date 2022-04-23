import React from "react";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        <h1>This content needs to be printed</h1>
      </div>
    </div>
  );
});
