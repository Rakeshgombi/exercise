import React, { useState } from "react";

const InputComponent = () => {
  const [inputList, setInputList] = useState([{ reps: "", weights: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { reps: "", weights: "", rest: "" }]);
  };

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <div className="row">
            <div className="col-1" style={{ cursor: "pointer" }}>
              {inputList.length !== 1 && <p className="mx-2 fs-3"
                onClick={() => handleRemoveClick(i)}>X</p>}
            </div>
            <div className="col-5 row">
              <div class="mb-3 col-4">
                <label for="exampleInputEmail1" class="form-label">reps</label>
                <input
                  name="reps"
                  placeholder="Reps"
                  value={x.reps}
                  onChange={e => handleInputChange(e, i)}
                  className="form-control"
                />
              </div>

              <div class="mb-3 col-4">
                <label for="exampleInputEmail1" class="form-label">Weights</label>
                <input
                  className="form-control"
                  name="weights"
                  placeholder="Weights"
                  value={x.weights}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>

              <div class="mb-3 col-4">
                <label for="exampleInputEmail1" class="form-label">rest</label>
                <input
                  className="form-control"
                  name="rest"
                  placeholder="Rest"
                  value={x.rest}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                {inputList.length - 1 === i && <button onClick={handleAddClick}
                  className="btn btn-sm btn-outline-dark">Add New Set</button>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InputComponent
