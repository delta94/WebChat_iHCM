import React, { ChangeEvent } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { ICustomInput } from '../Models/CustomInput';
import './CustomInputScreen.css';

const icondelete = require("../../../Icons/icondelete.svg").default;

function CustomInputScreen(props : ICustomInput) {
  const [value , setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement >(null);

  const changeValue = (e: any) =>{
    const value = e.target.value;
    setValue(value);
    if(props.isMultiline){
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
  }

  const changeValue2 = (e: any) =>{
    props.onChange && props.onChange(e);
    const value = e.target.value;
    setValue(value);
  }

  const clearText = (e: any) =>{
    props.onChange && props.onChange(e);
    setValue("");
  }


  return (
    <div className={ "custominput-container " + props.class}>
      {
        props.isTextArea ?
        <input type="text" multiple={true} placeholder={ props.placeHolder } value={ value } onClick={ props.onClick } onChange={ (e: ChangeEvent<any>) => changeValue2(e) }style={ props.style }/> :
        <textarea placeholder={ props.placeHolder } style={ props.style } ref={textAreaRef} rows={1} onChange={ (e: ChangeEvent<Element>) => changeValue(e)}></textarea>
      }
      {
        (props.hasClearText && value) && (
          <img src={ icondelete } alt="" onClick={ (e:any) =>{ clearText(e)} } className="custominput-icon-cleartext"/>
        )
      }
    </div>
  );
}

export default CustomInputScreen;
