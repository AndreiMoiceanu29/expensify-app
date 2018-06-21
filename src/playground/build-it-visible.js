// let buttonText="show details"
// let detailsEnabled=false;
// const onShowDetails=()=>{
//     if(!detailsEnabled){
//     detailsEnabled=true;
//     buttonText="Hide details"
//     }
//     else
//     {
//         detailsEnabled=false;
//         buttonText="Show details"
//     }
//     render()
// }
// const render =()=>{
//     const content =(
//      <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onShowDetails}>{buttonText}</button>
//       {detailsEnabled&&<p>There are some details</p>}
//      </div>
//     );
//     ReactDOM.render(content,appRoot)
// }
// const appRoot=document.getElementById('app')
// render()

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.onShowDetails=this.onShowDetails.bind(this)
        this.state={
            visibility:false
        }
    }
    onShowDetails()
    {
        if(!this.state.visibility)
        {
            this.setState(()=>{
                return{
                    visibility:true
                }
            })
            
        }
        else
        {
            this.setState(()=>{
                return{
                    visibility:false
                }
            })
           
        }
    }
    render()
    {
        
        return(
            <div>
        <h1>Visibility Toggle</h1>
       <button onClick={this.onShowDetails}>{this.state.visibility?'Hide details':'Show details'}</button>
       {this.state.visibility&&<p>There are some details</p>}
      </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))