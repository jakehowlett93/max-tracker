import React from 'react';
import { observer } from 'mobx-react';
import keywordInput from './features/lift-tracking/components/keywordInput';
import getExercise from './features/lift-tracking/business/selectors/getExercise';

export const App = observer(() => {
  const exercise = getExercise();

  return (
  <div>
    <div>hi</div>
  </div>
  );
});

export default App;
