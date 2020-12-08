import React from 'react'
import {Jumbotron,Button, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const HomeScreen = () => {
    return (
        <Container>
            <Jumbotron style={{backgroundColor: '#ffffff' , textAlign:'center', marginTop:'50px' }}>
                <h1 style={{fontSize:'41px'}}>Apply and hear back every time</h1>
                <p style={{fontSize:'28px', margin:'30px'}}>Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.
                </p>

      <LinkContainer to='/signup' style={{borderRadius:'27px', backgroundColor:'#7ECB20', borderStyle:'none', padding:'10px 30px', margin:'20px'}}>
    <Button size='lg' > Get Started </Button>
    </LinkContainer>
  
</Jumbotron>
        </Container>
    )
}

export default HomeScreen
