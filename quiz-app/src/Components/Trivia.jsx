import {Component} from "react";
import question from './Question';
import Result from './Answerbox';

class Quiz extends Component {
constructor() {
	super();
	this.state = {
	questionBank: [],
	score: 0,
	responses: 0
	};
}

// Function to get question from ./question
getQuestions = () => {
	question().then(question => {
	this.setState({questionBank: question});
	});
};

// Set state back to default and call function
playAgain = () => {
	this.getQuestions();
	this.setState({score: 0, responses: 0});
};

// Function to compute scores
computeAnswer = (answer, correctAns) => {
	if (answer === correctAns) {
	this.setState({
		score: this.state.score + 1
	});
	}
	this.setState({
	responses: this.state.responses < 10
		? this.state.responses + 1
		: 10
	});
};

// componentDidMount function to get question
componentDidMount() {
	this.getQuestions();
}

render() {
	return (<div className="container">
	<div className="title">
		QuizOn
	</div>

	{this.state.questionBank.length > 0 &&
	this.state.responses < 10 &&
	this.state.questionBank.map(({question, answers,
    correct, questionId }) => <question question=
      {question} options={answers} key={questionId}
      selected={answer => this.computeAnswer(answer, correct)} playAgain={this.playAgain}
    score={this.state.score} responses={this.state.responses}
    />)}

	{/* {
		this.state.responses === 10
        ? (<Result score={this.state.score}
          playAgain={this.playAgain}/>)
		: null
	} */}

	</div>)
}
}



