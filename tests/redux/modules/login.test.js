import reducer, { defaultState } from 'redux/modules/login';
import deepFreeze from 'deep-freeze';

describe('(Redux) login', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
