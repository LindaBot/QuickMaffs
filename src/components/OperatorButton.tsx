import Button from '@material-ui/core/Button'
import * as React from "react"
import "../style.css"


export default class extends React.Component<any>{
    public constructor(props: any){
        super(props);
    }

    public handleClick = () => {
        this.props.handleClick(this.props.operator);
    }

    public render(){
        return(
            <Button onClick={this.handleClick}>{this.props.operator}</Button>
        )
    }
}