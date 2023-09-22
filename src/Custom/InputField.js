import { useState } from "react";

function useInputField(Initialval) {
  const [Value, setValue] = useState(Initialval);
  const Fieldchange = (e) => {
    setValue(e.target.value);
  };
  const Reset = () => {
    setValue(Initialval);
  };
  return [Value, Fieldchange, Reset];
}

export default useInputField;
