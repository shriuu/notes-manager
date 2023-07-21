import React,{useState} from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import { Form,Button,Container } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies=new Cookies();
const styles={
    heading1: {
        color:"blue"
    }
}
function Insertnotes(){
    const [enteredNotes,setNotes]=useState('');
    const notesChangeHandler=(event)=>{
        setNotes(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        setNotes('');
        fetch('http://127.0.0.1:2000/insertnotes?'+'notes='+enteredNotes+'&owner='+cookies.get('username'))
        .then(
            (response) => (response.json())
        ).then((response)=>{
            if (response.status==='success') {
                document.getElementById('res').innerHTML='notes inserted successfully';
                document.getElementById('err').innerHTML='';
            } else {
                document.getElementById('err').innerHTML='notes failure';
                document.getElementById('res').innerHTML='';
            }
        });
    }
    return(
        <div>
            <DashboardNavbar/>
            <Container className='col-sm-3'>
                <h1 style={styles.heading1}>Insert Notes</h1><br/>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control as="textarea" value={enteredNotes} onChange={notesChangeHandler} cols={1000} rows={4} type="text" placeholder='enter notes'/>
                    </Form.Group><br/>
                    <Button type='submit'>Insert</Button>
                </Form><br/>
                <span style={{color:"red"}} id="err"></span>
                <span style={{color:"green"}} id="res"></span>
            </Container>
        </div>
    )
}
export default Insertnotes;