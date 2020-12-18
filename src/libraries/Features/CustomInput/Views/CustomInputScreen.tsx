import React, { ChangeEvent } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { ICustomInput } from '../Models/CustomInput';
import './CustomInputScreen.css';

function CustomInputScreen(props : ICustomInput) {
  const [value , setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement >(null);

  const changeValue = (e: any) =>{
    const value = e.target.value;
    setValue(value);
    const lineNum = e.target.value.split("\n").length;
    if(textAreaRef.current){
      if(lineNum > 1){
        textAreaRef.current.rows = 3;
        props.setIsMultiline(true);
      } else{
        textAreaRef.current.rows = 1;
        props.setIsMultiline(false);
      }
    }

  }
  return (
    <div className={ "custominput-container " + props.class}>
      {/* <input type="text" multiple={true} placeholder={ props.placeHolder } onChange={ (e: ChangeEvent<Element>) => changeValue(e)} style={ props.style }/> */}
      <textarea placeholder={ props.placeHolder } style={ props.style } ref={textAreaRef} rows={1} onChange={ (e: ChangeEvent<Element>) => changeValue(e)}></textarea>
    </div>
  );
}

export default CustomInputScreen;
