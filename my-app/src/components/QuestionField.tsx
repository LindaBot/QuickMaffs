import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import '../style.css'

interface IState{
    answer: number,
    hidden: boolean,
    num1: number,
    num2: number,
    points: number,
    userAnswer: string
}

export default class QuestionField extends React.Component<any, IState>{
   public constructor(props: any){
        super(props);
        this.state = {
            answer: 0,
            hidden: true,
            num1: Math.round(Math.random()*500),
            num2: Math.round(Math.random()*500),
            points: 0,
            userAnswer: ""
        }
    }

    public newQuestion = () =>{
        this.setState({
            num1: Math.round(Math.random()*500),
            num2: Math.round(Math.random()*500),
            userAnswer: ""
        });
    } 

    public submitAnswer = () =>{
        let ans = 0;
        switch (this.props.operator){
            case '+':
                ans = this.state.num1 + this.state.num2;
                break
            case '-':
                ans = this.state.num1 - this.state.num2;
                break
            case '*':
                ans = this.state.num1 * this.state.num2;
                break
            case '/':
                ans = this.state.num1 / this.state.num2;
                break
            default: 
                ans = this.state.num1 + this.state.num2;
        }
        this.setState({answer: ans}, () =>{
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

    public inputKeyPress = (e: any) =>{
        if (e.key === "Enter"){
            this.submitAnswer();
        }
    }

    public render(){
        return (
        <div>
            <div>
            <p>
                Current points: {this.state.points}<br/>
            </p>
            <p id="question">
                {this.state.num1} {this.props.operator} {this.state.num2}
            </p>
            </div>
            <div>
            <TextField
                required={true}
                id="outlined-required"
                label="Answer"
                margin="normal"
                variant="outlined"
                onChange={this.changeAnswer}
                value={this.state.userAnswer}
                onKeyPress={this.inputKeyPress}
                autoFocus={true} 
                type="number"
            />
            {/* <Button onClick={this.submitAnswer}> Submit </Button> */}
            </div>
        </div>
        );
    }
}