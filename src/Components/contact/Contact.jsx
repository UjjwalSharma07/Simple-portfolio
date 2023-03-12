import React from 'react'
import style from './Contact.module.css'
const Contact = () => {
  return (
    <div className={style.Contact}>
        <h2 className={style.heading}>GET IN TOUCH</h2>
        <div className={style.line}></div>
        <form className={style.contactFrom}>
            <div className={style.inputFormat}>
                <input className={style.input1} placeholder='Name' type="text" />
                <input className={style.input1} placeholder='Email' type="Email" />
            </div>
            <input className={style.input2} placeholder='Subject' type="text" />
            <textarea className={style.input2} placeholder='Message' name="textarea" cols="30" rows="20"></textarea>
            <button className={style.btn} type='submit'>SEND MESSAGE</button>
        </form>
    </div>
  )
}

export default Contact
