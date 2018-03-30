import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/scroll';
import registerServiceWorker from './registerServiceWorker';

import p1 from "./lib/1.png"
import p2 from "./lib/2.png"
import p3 from "./lib/3.png"
import p4 from "./lib/4.png"
import p5 from "./lib/5.png"
import p6 from "./lib/6.png"


let list = {
        row:[
            {title:'234234234改革创新潮涌动激活发展新引擎',icon:p1},
            {title:'现行宪法具有划时代意义的一次与时俱进',icon:p2},
            {title:'最高人民法院工作报告',icon:p3},
            {title:'把中朝传统友谊不断传承下去发展得更好',icon:p4},
            {title:'加快推进校外培训机构治理该停业的停业',icon:p5},
            {title:'5月1日起，这部法规将改变你的生活！',icon:p6},
            {title:'加快推进校外培训机构治理该停业的停业',icon:p5},
            {title:'5月1日起，这部法规将改变你的生活！',icon:p6},
            {title:'加快推进校外培训机构治理该停业的停业',icon:p5},
        ],
        speed:30,
    }
    

ReactDOM.render(<App data={list} onclickItem={(v,k)=>{alert(k)}}/>, document.getElementById('root'));
registerServiceWorker();
