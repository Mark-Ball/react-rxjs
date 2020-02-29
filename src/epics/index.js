import { combineEpics, ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

const userEmailEpic = action$ => (
    action$.pipe(
        ofType('USER_EMAIL'),
        tap(() => console.log('user email epic ran')),
        ignoreElements()
    )
);

export default combineEpics(
    userEmailEpic
);