import { useCallback, useEffect } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {

  const callAPI = () => {
    console.log('...callAPI');
  };

  const callRandApi = (randNum) => {
    console.log('callRandApi ' + randNum);
  };

  const stableCallApi = useCallback(callAPI, [])

  useEffect(() => {
    console.log('useEffect called');
    callRandApi()
  }, []);

  // useEffect(() => {
  //   console.log('...callAPI');
  // }, []);

  return (
    <h1>Use callback demo</h1>
  );
}

export default App;
