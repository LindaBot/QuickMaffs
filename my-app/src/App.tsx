import * as React from 'react';
import './App.css';
import './components/QuestionField'
import QuestionField from './components/QuestionField';



class App extends React.Component{
  public render() {
    return(
    <div>
      <QuestionField />
    </div>
    );
  }
}

export default App;
