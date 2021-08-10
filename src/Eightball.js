import React, { useState } from "react";
import { getRandom } from "./random";
import "./Eightball.css";

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]

/** Eightball 
 * 
 * Props:
 * - answers: array of obj containing msg and color
 * 
 * States:
 * - msg: string of message
 * - color: string of color
*/

function Eightball(props) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const [grnCount, setGrnCount] = useState(0);
  const [goldCount, setGoldCount] = useState(0);
  const [redCount, setRedCount] = useState(0);

  function handleClick() {

    let randomNum = getRandom(props.answers.length);
    let newColor = props.answers[randomNum].color
    setMsg(props.answers[randomNum].msg);
    setColor(newColor);

    if (newColor === "green") {
      setGrnCount(grnCount + 1);
    };
    if (newColor === "goldenrod") {
      setGoldCount(goldCount + 1);
    };
    if (newColor === "red") {
      setRedCount(redCount + 1);
    };
  };

  let colors = {
    backgroundColor: color
  };

  function handleReset() {
    setMsg("Think of a Question");
    setColor("black");
    setGoldCount(0);
    setGrnCount(0);
    setRedCount(0);
  }

  return (
    <div className="eightball">
      <div className="ball" onClick={handleClick} style={colors}>
        <p className="msg"><b>{msg}</b></p>
      </div>
      <span>Green: {grnCount} </span>
      <span>Goldenrod: {goldCount} </span>
      <span>Red: {redCount} </span>
      <br></br>
      <button className="reset" onClick={handleReset}> Reset </button>
    </div>
  );

};

Eightball.defaultProps = { answers };

export default Eightball;