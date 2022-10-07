import { useContext } from 'react'
import { FormContainer, TaskInput, TaskMinutesAmount } from './styles'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        placeholder="Dê um nome para seu projeto"
        list="task-suggetions"
        {...register('task')}
        disabled={!!activeCycle}
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
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
