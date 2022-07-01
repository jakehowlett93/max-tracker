import setLifts from '../features/lift-tracking/business/actions/setLifts';

// eslint-disable-next-line import/prefer-default-export
export async function fetchAllLifts() {
  try {
      const response = await fetch('http://localhost:8080/lifts');
      const data = await response.json();
      setLifts(data);
      return data;
  } catch (error) {
      return [];
  }
}
