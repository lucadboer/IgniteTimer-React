import { Play } from 'phosphor-react'
import { useState } from 'react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StarterCountdown,
  TaskInput,
  TaskMinutesAmount,
} from './styles'

export function Home() {

  const [task, setTask] = useState('')

  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para seu projeto"
            list="task-suggetions"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <datalist id="task-suggetions">
            <option value="Projeto-1" />
            <option value="Projeto-2" />
            <option value="Projeto-3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <TaskMinutesAmount
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StarterCountdown type="submit" disabled={!task}>
          <Play size={24} /> Começar
        </StarterCountdown>
      </form>
    </HomeContainer>
  )
}
