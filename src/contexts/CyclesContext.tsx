import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  createNewCycleAction,
  interruptedCycleAction,
} from '../reducers/cycles/actions'
import { cyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

export interface Cycle {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishiedDate?: Date
}

interface CyclesContextProviderProps {
  children: ReactNode
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinishied: () => void
  setPassedSeconds: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  InterruptedCycle: () => void
}

export const CyclesContext = createContext({} as CycleContextType)

export function CycleContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      const time = differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate),
      )

      if (time === 0) {
        return 0
      } else {
        return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
      }
    }

    return 0
  })

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(createNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function setPassedSeconds(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function InterruptedCycle() {
    dispatch(interruptedCycleAction())
  }

  function markCurrentCycleAsFinishied() {
    //   setCycles((state) =>
    //     state.map((cycle) => {
    //       if (cycle.id === activeCycleId) {
    //         return { ...cycle, finishiedDate: new Date() }
    //       } else {
    //         return cycle
    //       }
    //     }),
    //   )
    //

    dispatch(markCurrentCycleAsFinishied())
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinishied,
        amountSecondsPassed,
        setPassedSeconds,
        InterruptedCycle,
        createNewCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
