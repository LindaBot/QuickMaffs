import * as React from 'react';
import OperatorSelect from './components/OperatorSelect';
import QuestionField from './components/QuestionField';

import './App.css';
import './style.css'





interface IState{
  operator: string,
  operatorSelected: boolean
}

class App extends React.Component<any, IState>{
  public constructor(){
    super({});
    this.state = {
      operator: '+',
      operatorSelected: false
    }
  }

  public onOperatorSelected = (operatorReceived: string) =>{
    this.setState({
      operator: operatorReceived,
      operatorSelected: true
    });
  }



  public render() {
    const operatorSelected = this.state.operatorSelected
    if (operatorSelected){
      return(
        <div>
          
          <div className="questionFieldContainer">
            <QuestionField operator={this.state.operator}/>
          </div>

        </div>
      );
    } else {
      return(
        <OperatorSelect onOperatorSelected={this.onOperatorSelected}/>
      )
    }
  }
}

export default App;
