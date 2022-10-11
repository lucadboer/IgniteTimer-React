import { Cycle } from '../../contexts/CyclesContext'

export enum ActionTypes {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPTED_CYCLE = 'INTERRUPTED_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHIED = 'MARK_CURRENT_CYCLE_AS_FINISHIED',
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptedCycleAction() {
  return {
    type: ActionTypes.INTERRUPTED_CYCLE,
  }
}

export function markCurrentCycleAsFinishiedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHIED,
  }
}
