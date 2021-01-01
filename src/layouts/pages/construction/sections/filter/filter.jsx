import React from "react";
import "./filter.css";
export default class Filter extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            cat:false,
            size:false,
            sort:false,
            color:false
        }
    }
  render(props) {
    return (
      <div className="filter">
        <h5 className="title">filters</h5>
        <div className="filter-item">
          <h2 className="filter-heading" onClick={()=>{
              this.setState({
                  cat:!this.state.cat
              })
          }}>
        
            category <i className="fas fa-caret-down" id={this.state.cat?'rotate':""}></i>
          </h2>
          <div className={this.state.cat ? "filter-options":"close"}>
            <input type='button' value="T-Shirt" onClick={(e)=>{
                this.props.filter(e.target.value)
            }}></input>
             <input type='button' value="jackets" onClick={(e)=>{
                console.log(e.target.value)
                this.props.filter(e.target.value)

            }}></input>
             <input type='button' value="hoodies" onClick={(e)=>{
                console.log(e.target.value)
                this.props.filter(e.target.value)

            }}></input>
             <input type='button' value="Shirt" onClick={(e)=>{
                console.log(e.target.value)
                this.props.filter(e.target.value)

            }}></input>
             <input type='button' value="kurta" onClick={(e)=>{
                console.log(e.target.value)
                this.props.filter(e.target.value)

            }}></input>
          </div>
        </div>
        <div className="filter-item">
          <h2 className="filter-heading"onClick={()=>{
              this.setState({
                  size:!this.state.size
              })
          }}>
            sizes <i className="fas fa-caret-down"id={this.state.size?'rotate':""}></i>
          </h2>
          <div className={this.state.size ? "filter-options":"close"}>

          <input type='button' value="s" onClick={(e)=>{
                console.log(e.target.value)
                this.props.sizeFilter(e.target.value)


            }}></input>
             <input type='button' value="m" onClick={(e)=>{
                console.log(e.target.value)
                this.props.sizeFilter(e.target.value)

            }}></input>
             <input type='button' value="l" onClick={(e)=>{
                console.log(e.target.value)
                this.props.sizeFilter(e.target.value)

            }}></input>
             <input type='button' value="xL" onClick={(e)=>{
                console.log(e.target.value)
                this.props.sizeFilter(e.target.value)

            }}></input>
            <input type='button' value="xXL" onClick={(e)=>{
                console.log(e.target.value)
                this.props.sizeFilter(e.target.value)

            }}></input>
          </div>
        </div>
        <div className="filter-item">
          <h2 className="filter-heading"onClick={()=>{
              this.setState({
                  color:!this.state.color
              })
          }}>
            colors <i className="fas fa-caret-down"id={this.state.color?'rotate':""}></i>
          </h2>
          <div className={this.state.color ? "color-options":"close"}>

           <input type='button' className="color-picker red" name="red" onClick={(e)=>{
             console.log(e.target.name)
             this.props.colorFilter(e.target.name)
           }}></input>
           <input type='button' className="color-picker black" name="black" onClick={(e)=>{
             console.log(e.target.name)
             this.props.colorFilter(e.target.name)
           }}></input>
          <input type='button' className="color-picker gray" name="gray" onClick={(e)=>{
             console.log(e.target.name)
             this.props.colorFilter(e.target.name)
           }}></input>
           <input type='button' className="color-picker green" name="green" onClick={(e)=>{
             console.log(e.target.name)
             this.props.colorFilter(e.target.name)
           }}></input>
          </div>
        </div>
        <div className="filter-item">
          <h2 className="filter-heading"onClick={()=>{
              this.setState({
                  sort:!this.state.sort
              })
          }}>
            sort <i className="fas fa-caret-down"id={this.state.sort?'rotate':""}></i>
          </h2>
          <div className={this.state.sort ? "filter-options":"close"}>
            <input type='button' onClick={(e)=>{
              console.log(e.target.value)
              this.props.sort()
            }} value="price:high to low"></input>
            <h5>low to high</h5>
          </div>
        </div>
      </div>
    );
  }
}
