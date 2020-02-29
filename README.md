# Reactive programming logic

This is an implementation of reactive programming (also known as event-driven architecture), where things happen in the app in response to actions, which are attached to a system of listeners. Once an action has been detected by the listener, the thing can happen.

For example I may set up a listener to write the contents of a form into the database. When the form is submitted, an action is dispatched (using redux). Then an 'epic' listening for an action of that type is triggered, and writes the contents of the form into the database.

## 1. Hook up redux

## 2. Write the epic

## 3. Combine epics as middleware

