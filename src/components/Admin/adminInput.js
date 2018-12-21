import React, { Fragment } from "react";

const InputPage = () => {
  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="example1">Large input</label>
        <input type="text" id="example1" className="form-control form-control-md" />
      </div>
      <div className="form-group">
        <label htmlFor="example2">Medium input</label>
        <input type="text" id="example2" className="form-control form-control-md" />
      </div>
      <div className="form-group">
        <label htmlFor="example3">Small input</label>
        <input type="text" id="example3" className="form-control form-control-md" />
      </div>
    </Fragment>

  );
}

export default InputPage;