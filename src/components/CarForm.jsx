import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";
function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.form.name;
  });

  const handleChangeName = (event) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className="carForm panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="lable">Name</label>
            <input
              className="is-expanded"
              value={name}
              onChange={handleChangeName}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default CarForm;
