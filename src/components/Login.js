import React from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import {useForm} from 'react-hook-form'


const Login = (props) => {
  console.log(props.data)


  const { token } = props.data.userData.data;
  console.log(token)
       localStorage.setItem("token", token); 
// 
  const {register,handleSubmit,formState:{errors}} =useForm();

  function loginData  (formData)  {
      
    // console.log(data, 'thiisdata')
    var data = JSON.stringify({
      "email":formData.email,
      "password":formData.password
    });
      props.loginfun(data)
}

  return (
    <div>
       
       <Form onSubmit={handleSubmit(loginData)}>
       <Container>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="name"
        {...register("email",{required:true})}
        />
        {errors?.email?.type === "required" &&(
          <span>This field is required</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        name="password" {...register("password",{required:true})}
        />
        {errors?.password?.type === "required" &&(
          <span>This field is required</span>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Container>
    </Form>
 
    </div>
  )
}

export default Login
