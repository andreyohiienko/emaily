// SurveyField contains logic to render a single
// label and text input
import React from 'react'

export default ({ input }) => {
  console.log('props', props)
  return (
    <div>
      <input {...input} type="text" />
    </div>
  )
}
