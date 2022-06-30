import React from 'react';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import KeywordInput, { toOptions } from './features/lift-tracking/components/KeywordInput';
import getExercise from './features/lift-tracking/business/selectors/getExercise';
import setExercise from './features/lift-tracking/business/actions/setExercise';

export const App = observer(() => {
  const exercise = computed(() =>
    toOptions(getExercise())).get();
  const tempOptions = [
  { label: 'Benchpress', value: 'Benchpress' },
  { label: 'Deadlift', value: 'Deadlift' },
  { label: 'Squat', value: 'Squat' },
  ];

  return (
  <div>
    <div>hello</div>
    <div>
      {exercise.value}
    </div>
    <KeywordInput value={exercise} label="Exercise" placeholder="Choose an exercise" options={tempOptions} onChange={setExercise} />
  </div>
  );
});

export default App;
