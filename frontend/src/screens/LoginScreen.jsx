import React, {useState} from 'react'
import {Container, Form, Col, Button, Modal} from 'react-bootstrap'
import {Link , useHistory} from 'react-router-dom'
import axios from 'axios'



const LoginScreen = () => {
    
   const history = useHistory() 

    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })

    const handleChange = (event)=>{
        const {name, value} = event.target

        setLoginData((prevs)=>{
            return{
            ...prevs,
            [name] : value
            }
        })
    }

    const handleSubmit = (e)=>{
       
        axios.post('/api/users/login', loginData)
        .then(response => {
            console.log(response.data)
            if(response.status === 200){
                alert(`Successfully Logged In ${response.data.result} , close this alert box and you will be redirected to homepage in 2 second`)
                return(
                    setTimeout(()=>{
                        history.push('/')
                          }, 2000)
                )
            }
            

        })
        .catch(error =>{
            console.log(error.message)
        })
        e.preventDefault()

        setLoginData({
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

                <h3>Login </h3>
                <p>Student</p>

                </div>


  <Form onSubmit={handleSubmit}>
           <Form.Row className="m-3">
             <Col>
              <Form.Control 
              placeholder="Email"
              type="email"
              name="email"
              value={loginData.email} 
              onChange={handleChange}/>
             </Col>
             </Form.Row>
             <Form.Row className="mx-3">
             <Col>
              <Form.Control 
              placeholder="Password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              />
             </Col>
           </Form.Row>
           <Form.Row className="m-3">
           <Col>
           <Button type="submit"
            style={{borderRadius:'27px', backgroundColor:'#7ECB20', borderStyle:'none', padding:'10px 30px'}}
            > Login </Button>
           </Col>
         </Form.Row>
           
           </Form>
           <Link to='/signup'><p className="mx-4">New to MyWays? Please Signup here</p></Link>
           </div>
   
  </Modal.Body>

 
</Modal.Dialog>



           

        </Container>
    )
}

export default LoginScreen
