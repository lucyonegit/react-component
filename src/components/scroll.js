import React from 'react';
import './scroll.css';

class Scroll extends React.Component{
    constructor(props){ 
        super(props);
        this.state={
            
        }
        this.timer = 0;
        this.moveup = this.moveup.bind(this);
        this.stopmove = this.stopmove.bind(this);
        this.startmove = this.startmove.bind(this);
    }
    moveup(){
        var ul = document.getElementById('scroll-ul-container');
       
        if(ul.scrollTop>=ul.offsetHeight){
            ul.scrollTop =0;
        }
        else{
            ul.scrollTop+=1;
        }
    }
    stopmove(){
        clearInterval(this.timer);
    }
    startmove(){
        this.timer = setInterval(this.moveup,30);
    }
    clickItem(v,k){
       this.props.onclickItem(v,k);
    }
    componentDidMount(){
        var ul = document.getElementById('scroll-ul-container');
        ul.style.height = this.props.data.row.length*30+"px";
        let func = this.moveup;
        if(this.props.data.length < 6){
            //列表长度小于6不滚动
        }
        else{
            this.timer = setInterval(func,this.props.data.speed);
            ul.addEventListener('mousemove',this.stopmove);
            ul.addEventListener('mouseout',this.startmove);
        }
    }
    componentWillUnmount(){
        clearInterval(this.timer); //组件销毁时清除定时器
    }
    render(){
        return(    
                <div className="scroll-static">
                    <div className="scroll-container" id="scroll-ul-container">
                        <ul className="scroll-list-ul">
                        {  
                            this.props.data.row.map((val,key)=>{
                                return(
                                    <li key={key}><span  className="contenta" onClick={()=>this.clickItem(val,key)}><span className="scroll-icon"><img src={val.icon} alt="icon"/></span>{val.title}</span><span className="checkbotton" onClick={()=>this.clickItem(val,key)}>查看</span></li>
                                )
                            })  
                        }
                        </ul>
                        <ul className="scroll-list-ul">
                            {
                                this.props.data.row.map((val,key)=>{
                                    return(
                                        <li key={key}><span className="contenta" onClick={()=>this.clickItem(val,key)}><span className="scroll-icon"><img src={val.icon} alt="icon"/></span>{val.title}</span><span className="checkbotton" onClick={()=>this.clickItem(val,key)}>查看</span></li>
                                    )
                                }) 
                            }
                        </ul>
                    </div>
                </div>
        )
    }
}

export default Scroll;

