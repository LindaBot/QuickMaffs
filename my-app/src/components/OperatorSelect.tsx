import * as React from "react"
import OperatorButton from './OperatorButton'

interface IState{
    operator: string
}

export default class OperatorSelect extends React.Component<any, IState>{
    public constructor(props: any){
        super(props);
        this.state = {
            operator: ""
        }
    }

    public onClick = (e: any) => {
        alert(e);
        // this.props.onOperatorSelected(operatorSelected);
    }

    public render(){
        return(
            <div>
                <OperatorButton handleClick={this.onClick} operator="+">+</OperatorButton>
            </div>
        );
    }
} 