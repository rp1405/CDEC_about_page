import React,{ useState } from "react";
import "./profs.css";
function Professor(props) {
    const [isMousedOver,setMouseOver]=useState(false);
    function handleMouseOver(){
        // console.log(isMousedOver);
        setMouseOver(true);
    }
    function handleMouseOut(){
        // console.log(isMousedOver);
        setMouseOver(false);
    }
    //const imgAddress='url('+prof.img+')';
    //console.log(imgAddress);
    const prof = props.prof;
    // const style1={
    //     backgroundImage:'url('+{p}+')'
    // }
    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="pprop1">
            <img src={prof.img} className={isMousedOver? "image1":"image2"}/>
            <div className={isMousedOver? "pdata1":"pdata2"}>
                <h3>{prof.post}</h3>
                <h2>{prof.name}</h2>
                <h3>{prof.des}</h3>
                <h3>{prof.dept}</h3>
            </div>
        </div>
    );
}
function Profs(){
    
    const professors = [
        {
            post:"Faculty Coordinator",
            name: "Prof. Vijay Janyani",
            des:"Proffessor",
            dept:"Department of ECE",
            img:'../../vj.png'
        },
        {
            post:"Convener",
            name: "Dr. Deepak Verma",
            des:"Assistant Proffessor",
            dept:"Department of Management Studies",
            img:'../../dv.png'
        },
        {
            post:"Member",
            name: "Dr Amit Joshi",
            des:"Assistant Proffessor",
            dept:"Department of ECE",
            img:'../../aj.png'
        },
        {
            post:"Member",
            name: "Dr. Priyanka Harjule",
            des:"Assistant Proffessor",
            dept:"Department of Mathematics",
            img:'../../ph.png'
        },
        {
            post:"Member",
            name: "Dr. Ashish Tripathi",
            des:"Assistant Proffessor",
            dept:"Department of CSE",
            img:'../../at.png'
        }
    ]
    return(
        <div className="pfull">
            <div className="psmall">
                <p>Our Proffessors</p>
            </div>
            <div className="profprops">
                {professors.map(e => <Professor prof={e}/>)}
            </div>
        </div>
    );
}
export default Profs;