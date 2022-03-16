/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
/**
 *     SIGN IN / Login page
 */
//--------------------------------------------------------------------
import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {login} from '../../../../api/user.api';
import {setLocalStorage} from '../../../../utils/Storage';
import GoogleLogin from 'react-google-login';
import {setCookie} from '../../../../utils/Cookies';
import config from '../../../../constants/config';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'; 
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import GoogleIcon from '@mui/icons-material/Google';
import { blue, red} from '@mui/material/colors';
import AMBackdrop from '../../../layouts/feedbacks/AMBackdrop';
import AMAlert from '../../../layouts/feedbacks/AMAlert';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';

const Login = props =>{
  let navigate = useNavigate();
  let location = useLocation();
  const [error, setError] = React.useState("");
  const [errorColor, setErrorColor] = React.useState('error');
  const [open, setOpen] = React.useState(false);
  const [required, setRequired] = React.useState({
    email: false,
    password: false,
  })
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * 
   * LOCAL LOGIN
   */
  const handleLocalLogin = async (e) => {
  setError('');
  setAlertOpen(true);
  setOpen(true);
  setRequired({
    ...required,
    email: false,
  });
  setRequired({
    ...required, 
    password: false,
  });
  e.preventDefault();
  if(!(values.email && values.password)){
    let isEmail, isPassword;
    if(!values.email){
      isEmail = true;
    }
    if(!values.password){
      isPassword = true;
    }
    setRequired({
      ...required,
      email: isEmail,
      password: isPassword,
    });
    setOpen(false)
    return;
  }

  await login.local(values.email, values.password).then((res)=>{
    const {data} = res;
    if (data.status) {
      setError("Success, redirecting ...");
      setErrorColor('success');
      window.localStorage.removeItem('access');
      window.localStorage.removeItem('user');
      setLocalStorage("access", data.access);
      let profileData = data.data?data.data[0]: [];
       setLocalStorage('user', profileData);
      setCookie('refresh', data.refresh, 7)
      setTimeout(()=>{
        setOpen(false)
        let from = location.state?.from?.pathname || "/user";
        navigate(from, { replace: true });
      },500)   
    }
    else{
      setTimeout(()=>{
        setOpen(false)
        navigate('/auth/notification/1') // notify to verify email address if not verified
      },500)
    }
    }).catch(err=>{
      setOpen(false)

      if(err.message === 'Request failed with status code 404'){
        setError('User is not exist!');
        setErrorColor('error');
      }
      else{
        setError('Error, Please try later!');
        setErrorColor('error');
      }
  });
      
       
  }
/**
   * 
   * GOOGLE LOGIN
   */
  const handleGoogleLogin = async(response) => {
    setOpen(true);
      let email = response.profileObj && response.profileObj.email;
      let firstName = response.profileObj && response.profileObj.givenName;
      let lastName = response.profileObj && response.profileObj.familyName;
      let imageUrl = response.profileObj && response.profileObj.imageUrl;
      
      await login.google(email, firstName, lastName, imageUrl).then((res)=>{
        const {data} = res;
        if (data.status) {
          setError("Success, redirecting ...");
          setErrorColor('success');
          window.localStorage.removeItem('access');
          window.localStorage.removeItem('user');
          setLocalStorage("access", data.access);
          let profileData = data.data?data.data[0]: [];
          setLocalStorage('user', profileData);
          setCookie('refresh', data.refresh, 7)
          setTimeout(()=>{
            setOpen(false)
            let from = location.state?.from?.pathname || "/user"; 
            navigate(from, { replace: true });
          },500);
        } 
    }).catch(err=>{
      setOpen(false);
      
    });
    setError("You're offline.");
    setErrorColor('error');
  }

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setRequired({
      ...required,
      [prop]: false
    });
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [alertOpen, setAlertOpen] = React.useState(true);
  return(
   <>
    <AMBackdrop
    open={open}
    />
    
    <Grid
    container
    direction="row"
    justifyContent="center"
    sx={{
     backgroundColor: '#212121',
     height: `100%`
    }}
    >
        <Grid item md={2} sx={{p:3, mt:2}}>
         <Box
         sx={{
             display: 'flex',
             justifyContent: {md: 'left', sm: 'center'}
         }}
         >
          <ChatRoundedIcon sx={{fontSize: 30}} color="warning" /> <Typography variant="h4"  color="warning.light"> &nbsp;AM Chat</Typography>
         </Box>
         <Box
         sx={{textAlign: {md: 'left', sm: 'center'}}}
         >
          <Typography variant="h6" color="secondary">Responsive Material UI Chat</Typography>
         </Box>
        </Grid>
        <Grid item md={10} xs={12}>
        <Box component="form" onSubmit={handleLocalLogin} noValidate sx={{ p:4 }}>
            <Grid 
            container
            justifyContent='center'
            alignItem="center"
            columnGap={1}
            spacing={0}
            sx={{
            backgroundColor: `#ffffff`,
            borderRadius: 2,
            border: 1, 
            height: 600
            }}
            >
            <Grid item md={5} xs={10} sx={{mt:4, mb:4}}>
                <Box
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    mt:3
                }}
                >
                <LockOutlinedIcon sx={{fontSize: 30}} color="warning" /> <Typography variant="h4" sx={{fontWeight: 600}} color="warning.light"> &nbsp;Sign In</Typography>
                </Box>
                {
                error?
                <>
                <AMAlert
                alertTextColor={errorColor}
                alertText={error}
                />
                </>
                :
                <>
                
                </>
                }
                <FormControl sx={{width: '100%', mt:2 }} variant="outlined"
                color={required.email?'error': 'secondary'} focused={required.email?true: false}
                >
                <InputLabel htmlFor="outlined-adornment-email" sx={{fontSize:12}}>{required.email? '* Required': 'Email'}</InputLabel>
                <OutlinedInput
                type={`email`}
                value={values.email}
                onChange={handleChange('email')}
                sx={{fontSize:12}}
                id="email"
                label="Email Address" 
                name="email"
                />
                </FormControl>
                <FormControl sx={{width: '100%', mt:2 }} variant="outlined"
                color={required.password?'error': 'secondary'} focused={required.password?true: false}
                >
                <InputLabel htmlFor="outlined-adornment-password" sx={{fontSize:12}}>{required.password? '* Required': 'Password'}</InputLabel>
                <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                sx={{fontSize:12}}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                }
                label="Password"
                />
            </FormControl>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color={`secondary`}
            sx={{ mt: 3, mb: 1, height: 41 }}
            >
            Sign In
            </Button>
            <Box
             sx={{
                 display: 'flex',
                 justifyContent: 'space-between'
             }}
            >
               <Link href="/auth/forgot-password" variant="body2" sx={{fontSize: 12, color: blue[600], fontWeight: 700}}>
                <Typography variant="h6">
                    Forgot password?
                </Typography>
                </Link>
                <Link href="/auth/register" variant="body2" sx={{fontSize: 12, color: red[600], fontWeight: 600}}>
                <Typography variant="h6" color="info">
                    Not Registered? <b style={{color: blue[600]}}>Sign Up</b>
                </Typography>
                </Link> 
            </Box>
            </Grid>

            </Grid>
          </Box>
        </Grid>
    </Grid>
   </>
  )
};
export default Login;