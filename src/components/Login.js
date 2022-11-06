import React from "react";
 import * as Components from './Components';
import MainNavbar from "./MainNavbar";
import axios from "axios"

 function Login() {
     const [signIn, toggle] = React.useState(true);
     const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: ""
     });
     const [loginUser,setLoginUser] = React.useState({
        email: "",
        password:""

     })

     const handleChange = (e) => {
        const {name, value} = e.target;
       setUser({
        ...user,
        [name]: value
       })
      
     }
     const clicked = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/user/validate',user).then((response) => {console.log(response);});

        // console.log( console.log(user))
     }
     const handleChangeSignIn = (e) => {
        const {name, value} = e.target;
       setLoginUser({
        ...loginUser,
        [name]: value
       })
      
     }
     const clickedSignIn = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/user/login',loginUser).then((response) => {console.log(response);});

        // console.log( console.log(loginUser))
     }
      return(
          <div>
        <MainNavbar />
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn} >
                  <Components.Form onClick={clicked} > 
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Name' name="name" value={user.name} onChange={handleChange} />
                      <Components.Input type='email' placeholder='Email' name="email" value={user.email} onChange={handleChange} />
                      <Components.Input type='password' placeholder='Password' name="password" value={user.password} onChange={handleChange} />
                      <Components.Button type="submit">Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={clickedSignIn}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email' name="email" value={loginUser.email} onChange={handleChangeSignIn} />
                       <Components.Input type='password' placeholder='Password' name="password" value={loginUser.password} onChange={handleChangeSignIn} />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button type="submit">Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          </div>
      )
 }

 export default Login;