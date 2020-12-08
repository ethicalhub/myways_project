import React , {useState} from 'react'
import {Container, Modal , Form, Col, Button} from 'react-bootstrap'
import axios from 'axios'

const SignupScreen = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName:'',
        email:'',
        password:''
    })


    const handleChange = (event)=>{

        const {name, value}= event.target
        setData((prevs)=>{
            return{
                ...prevs,
                [name] : value
            }
        }) 


    }

    const handleSubmit = (e)=>{
        
        console.log(data)

        axios.post('/api/users/signup', data)
        .then(response => {
            console.log(response.data)
            if(response.status === 200){
                return(
                    alert(`Succesfully Registered, Welcome to MyWays. Login to enjoy all new Services`)
                )
            }
            

        })
        .catch(error =>{
            console.log(error)
        })
        e.preventDefault()

        setData({
            firstName: '',
            lastName:'',
            email:'',
            password:''
        })

    }


    return (
        <Container>
            <Modal.Dialog>

  <Modal.Body>

  <div className="py-3">
                <div style={{textAlign: "center"}}>

                <h3>SignUp </h3>
                <p>It's Quick and Easy</p>

                </div>
                
            <Form onSubmit={handleSubmit}>
                <Form.Row className="m-3">
                    <Col>
                    <Form.Control 
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange} />
                    </Col>
                    <Col>
                    <Form.Control 
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}/>
                    </Col>
                </Form.Row>
                <Form.Row className="mx-3">
                    <Col>
                    <Form.Control 
                     placeholder="Email"
                     type="email"
                     name="email"
                     value={data.email}
                     onChange={handleChange} />
                    </Col>
                </Form.Row>
                <Form.Row className="m-3">
                    <Col>
                    <Form.Control
                     placeholder="Password"
                     type="password"
                     name="password"
                     value={data.password}
                     onChange={handleChange} />
                    </Col>
                </Form.Row>
                <Form.Row className="m-3">
                    <Col >
                    <Button type="submit"  
                     style={{borderRadius:'27px', backgroundColor:'#7ECB20', borderStyle:'none', padding:'10px 30px'}}
                    >Sign Up</Button>
                    </Col>
                </Form.Row>
                
            </Form>
            </div>
   
  </Modal.Body>

</Modal.Dialog>

            
        </Container>
    )
}

export default SignupScreen
