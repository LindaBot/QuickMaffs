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

    public onClick = (operator: any) => {
        this.props.onOperatorSelected(operator);
    }

    public render(){
        return(
            <div>
                {/* Using () => {} instead of creating a new component would impact on performance
                    because it creates a new function every time render function is called  */}
                <OperatorButton handleClick={this.onClick} operator="+">+</OperatorButton>
                <OperatorButton handleClick={this.onClick} operator="-">-</OperatorButton>
                <OperatorButton handleClick={this.onClick} operator="*">*</OperatorButton>
                <OperatorButton handleClick={this.onClick} operator="/">/</OperatorButton>
            </div>
        );
    }
} 