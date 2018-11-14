import * as React from 'react'

interface IState{
    answer: number,
    num1: number,
    num2: number,
    points: number,
    userAnswer: string 
}

export default class QuestionField extends React.Component<{}, IState>{
   public constructor(props: any){
        super(props);
        this.state = {
            answer: 0,
            num1: Math.round(Math.random()*500),
            num2: Math.round(Math.random()*500),
            points: 0,
            userAnswer: ""
        }
        this.newQuestion();
    }

    public newQuestion = () =>{
        this.setState({
            num1: Math.round(Math.random()*500),
            num2: Math.round(Math.random()*500)
        })
    } 

    public submitAnswer = () =>{
        this.setState({answer: this.state.num1 + this.state.num2}, () =>{
            if (parseInt(this.state.userAnswer, 10) === this.state.answer){
                this.onCorrectAnswer();
            } else {
                this.onWrongAnswer();
            }
        });
      }

    public onCorrectAnswer = () =>{
        this.setState({points: this.state.points + 1});
        this.newQuestion();
    }

    public onWrongAnswer = () =>{
        this.setState({points: this.state.points + 0});
        window.alert("you are wrong");
    }

    public changeAnswer = (e: any) =>{
        this.setState({userAnswer: e.target.value});
    }

    public render(){
        return (
        <div>
            <div>
            <p>
                Current points: {this.state.points}
                UserAnswer: {this.state.userAnswer}
                Answer: {this.state.answer}
            </p>
            <p>
                {this.state.num1} + {this.state.num2} = ?
            </p>
            </div>
            <div>
            <input onChange={this.changeAnswer} value={this.state.userAnswer} type="number"/>
            <button onClick={this.submitAnswer}> Submit </button>
            </div>
        </div>
        );
    }
}