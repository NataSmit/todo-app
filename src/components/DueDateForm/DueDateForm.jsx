import React, { useState } from 'react'

export default function DueDateForm() {
  const [date, setDate] = useState()
  function handleDateChange(e) {
    setDate(e.target.value)
  }
  console.log('date', date)
  return (
    <form>
      <input value={date} onChange={handleDateChange} type='date'/>
    </form>
  )
}
