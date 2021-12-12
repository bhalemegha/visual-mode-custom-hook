const { useState } = require("react");

///  Replace this code with your version of useVisualMode

const useVisualMode = function(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace = false) {
  };

  const back = function() {
  };

  // Don't forget this!  history is needed here
  return { mode, transition, back, history };
};

export default useVisualMode;