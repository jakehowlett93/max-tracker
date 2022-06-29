import React from 'react';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import keywordInput, { toOptions } from './features/lift-tracking/components/keywordInput';
import getExercise from './features/lift-tracking/business/selectors/getExercise';

export const App = observer(() => {
  const exerciseOptions = computed(() => toOptions(getExercise())).get();

  return (
  <div>
    <div>hi</div>
  </div>
  );
});

export default App;
