import { createContext, ReactNode, useReducer, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface Cycle {
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
  const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
    if (action.type === 'CREATE_NEW_CYCLE') {
      return [...state, action.payload.newCycle]
    }

    return state
  }, [])
  const [activeCycleId, setactiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutes: data.minutesAmount,
      startDate: new Date(),
    }

    // setCycles((state) => [...state, newCycle])

    dispatch({
      type: 'CREATE_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })

    setactiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  function setPassedSeconds(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function InterruptedCycle() {
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, interruptedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )

    dispatch({
      type: 'INTERRUPTED_CYCLE',
      payload: { activeCycleId },
    })

    setactiveCycleId(null)
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

    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHIED',
      payload: { activeCycleId },
    })
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
