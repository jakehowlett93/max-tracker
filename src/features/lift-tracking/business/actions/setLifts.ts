import { action } from 'mobx';
import { Lift } from '../../state';
import state from '../../../state';

export default action((lifts: Lift[]): void => {
  state.previousLifts = lifts;
});
