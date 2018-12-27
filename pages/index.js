import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Link from 'next/link'
import { QuestionCalifornia, QuestionName, QuestionHaveCaliforniaBirthCertificate, QuestionNewCaliforniaBirthCertificate } from '../lib/questions';

class GoToDownload extends Component {
  render() {
    return (
      <Link href="/download">
        <Button>go to download</Button>
      </Link>
    )
  }
}

class Index extends Component {
  static mapStateToProps(state) {
    return {answers: {...state.answers}}
  }

  constructor(props) {
    super(props)

    this.questions = Array(4).fill(null)
    this.questions[0] = <QuestionCalifornia />
    this.questions[1] = <QuestionName />
    this.questions[2] = <QuestionHaveCaliforniaBirthCertificate />
    this.questions[3] = <QuestionNewCaliforniaBirthCertificate />
    this.questions[4] = <GoToDownload />

  }

  getInitialProps(props) {
    console.log(props)
    return {}
  }

  render() {
    var answers = []

    for (var answer in this.props.answers) {
      answers.push(<li>{answer}: {this.props.answers[answer].toString()}</li>)
    }

    var question = this.props.currentQuestion;

    if (question === undefined) {
      question = 0
    }

    return (
      <div>
        <div>
          {this.questions[question]}
          <ul>
            {answers}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(Index.mapStateToProps)(Index);
