import React,{ useState } from "react";
import "./team.css";
function Person(props){
    const prof = props.prof;
    return (
        <div className="tprop">
            <div className="tdata">
                <h2>{prof.name}</h2>
                <p>{prof.post}</p>
            </div>
        </div>
    );
}
function Team(){
    const members = [
    {
        name: "Ansh Jhanwar",
        post:"President"
    },
    {
        name: "Swapnil Singh",
        post:"Vice-President"
    },
    {
        name: "Ayush Sharma",
        post:"Secretary"
    },
    {
        name: "Vaibhav Bansal",
        post:"General Secretary"
    },
    {
        name: "Jaydeep Jangid",
        post:"UI/UX Designer"
    },
    {
        name: "Grahil Singhal",
        post:"Technical Head"
    }
    ]
    const members2 = [
    {
        name: "Sajia Ali",
        post:"Design Team Head"
    },
    {
        name: "Shikha Mishra",
        post:"Podcast Team Head"
    },
    {
        name: "Chandragupt",
        post:"PR Head"
    },
    {
        name: "Harsh Singh",
        post:"PR Head"
    },
    {
        name: "Saurabh",
        post:"Video Editing Head"
    },
    {
        name:"Harshita Jain",
        post:"Content Writing Head"
    }
]
    return(
        <div className="tfull">
            <div className="tsmall">
                <p>Team CDEC</p>
            </div>
            <div className="teamprops">
                {members.map(e => <Person prof={e}/>)}
            </div>
            <div className="teamprops">
                {members2.map(e => <Person prof={e}/>)}
            </div>
        </div>
    );
}
export default Team;

