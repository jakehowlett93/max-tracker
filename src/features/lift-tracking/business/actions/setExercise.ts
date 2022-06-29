import { action } from 'mobx';
import state from '../../../state';

export default action((exercise: string): void => {
  state.lift.exercise = exercise;
});
