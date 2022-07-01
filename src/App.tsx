import React, { useEffect } from 'react';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import {
  Card,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import KeywordInput, { toOptions } from './features/lift-tracking/components/KeywordInput';
import TextInput from './features/lift-tracking/components/TextInput';
import getExercise from './features/lift-tracking/business/selectors/getExercise';
import setExercise from './features/lift-tracking/business/actions/setExercise';
import getWeight from './features/lift-tracking/business/selectors/getWeight';
import setWeight from './features/lift-tracking/business/actions/setWeight';
import getLifts from './features/lift-tracking/business/selectors/getLifts';
import { fetchAllLifts } from './services/liftService';

export const App = observer(() => {
  useEffect(() => { fetchAllLifts(); }, []);
  const exercise = computed(() =>
    toOptions(getExercise())).get();
  const weight = getWeight();
  const previousLifts = getLifts();
  const tempOptions = [
  { label: 'Benchpress', value: 'Benchpress' },
  { label: 'Deadlift', value: 'Deadlift' },
  { label: 'Squat', value: 'Squat' },
  ];

  return (
    <Card>
      <Container>
        <Row>
          <Col xs={5}>
            <KeywordInput value={exercise} label="Exercise" placeholder="Choose an exercise" options={tempOptions} onChange={setExercise} />
          </Col>
          <Col xs={2}>
            <TextInput value={weight.toString()} label="Weight (kg)" placeholder="kg" onChange={setWeight} />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            {previousLifts.map((lift) => <div>{lift.exercise}</div>)}
          </Col>
        </Row>
      </Container>
    </Card>
  );
});

export default App;
