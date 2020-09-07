import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

function useStorage<T>(key: string, initialState: any): Response<T> {
  const [state, setstate] = useState(()=>{
    const storage =  localStorage.getItem(key);

    return storage ? (JSON.parse(storage)):(initialState);

  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(state))
  },[key, state])

  return [state, setstate]
}

export default useStorage;