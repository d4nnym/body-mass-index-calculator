import { useState } from "react";
import RadioButton from "../../common/RadioButton";

export default function Calculator() {

  const options = [
    {value:"Metric", id:"metric"},
    {value:"Imperial", id:"imperial"}
  ]

  const listOptions = options.map((option) => {
    return (
      <div className="column is-half is-half is-flex is-align-items-center ">
        <RadioButton
          value={option.value}
          id={option.id}
          name="units"
          defaultChecked={true}
        />
      </div>
    )
  })
  

  const [isCheck, setIsCheck] = useState(null);

  return (
    <div className="card">
      <div className="p-4">
        <h3>Enter your details below</h3>
      </div>
      <div className="columns is-mobile p-4 ">
        <div className="column is-half is-flex is-align-items-center">
          <RadioButton
            value="Metric"
            id="metric"
            name="units"
            defaultChecked={true}
          />
        </div>
        <div className="column is-half is-half is-flex is-align-items-center ">
          <RadioButton
            value="Imperial"
            id="imperial"
            name="units"
            defaultChecked={false}
          />
        </div>
      </div>
      <div className="columns is-mobile p-4 ">
        <div className="column is-half"></div>
        <div className="column is-half"></div>
        <div className="column is-half"></div>
        <div className="column is-half"></div>
      </div>
    </div>
  );
}
