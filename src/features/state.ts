import { observable } from 'mobx';
import { Lift } from './lift-tracking/state';

export type State = {
  lift: Lift,
  previousLifts: Lift[]
};

const AppState: State = observable<State>({
  lift: {
    exercise: '',
    weight: 0,
    date: '',
  },
  previousLifts: [],
});

export default AppState;
