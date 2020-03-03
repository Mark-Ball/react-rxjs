import { combineEpics, ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';
import { delay, mapTo } from 'rxjs/operators';

import { closePopup } from '../actions';

const userEmailEpic = action$ => (
    action$.pipe(
        ofType('USER_EMAIL'),
        tap(() => console.log('user email epic ran')),
        ignoreElements()
    )
);

const popupEpic = action$ => (
    action$.pipe(
        ofType('SHOW_POPUP'),
        delay(3000),
        mapTo(closePopup())
    )
)

export default combineEpics(
    userEmailEpic,
    popupEpic
);