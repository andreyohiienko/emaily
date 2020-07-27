// SurveyForm shows a form for a user to app input
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="test" name="title" component={SurveyField} />
      </div>
    )
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <Field type="text" name="surveyTitle" component="input" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyForm)
