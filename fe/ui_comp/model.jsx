import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router";
export function Modal_cust({msg,show,setshow}){
    const nav=useNavigate()
    function handleClose(e){

        if(e.target.value=="sign"){
            nav("/signin")
            return
        }
        setshow(false)
    }

    return(

        <Modal show={show}>
    <Modal.Header >
      <Modal.Title>Authentication Required</Modal.Title>
    </Modal.Header>
    <Modal.Body>{msg}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button value={"sign"} style={{background:"#5F63B0"}} onClick={handleClose}>
        Signin
      </Button>
    </Modal.Footer>
  </Modal>
)
}