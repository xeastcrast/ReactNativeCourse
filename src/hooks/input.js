import { useState } from 'react'

export const useInput = (initialValue="") => {
  const [value, setValue] = useState(initialValue);
  const onChangeText = (text) => {
    setValue(text);
  }
  return {
    getValue: () => value,
    setValue,
    events: {
      onChangeText,
    }
  }
}