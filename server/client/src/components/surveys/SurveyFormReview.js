// SurveyFormReview shows users their form inputs for review
import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'

const SurveyFormReview = ({
  onCancel,
  formValues: { title, subject, body },
}) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div>{title}</div>
        </div>
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  }
}

export default connect(mapStateToProps)(SurveyFormReview)
