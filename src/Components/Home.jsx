import React from 'react'
import Header from './Header'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';



const Home = () => {
  return (
    <>
    <Header/>
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0  }}
    >
       <Card component="li" sx={{ minWidth: 300, flexGrow: 1 ,marginTop:10 , height:500}}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster=""
          >
            <source
              src={require('../assets/production ID_4065921.mp4')}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Secure, smart, and easy to use email
            <br></br>
            Stay connected and get organized
          </Typography>
        </CardContent>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 ,marginTop:10 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster=""
          >
            <source
              src={require('../assets/production ID_4065924.mp4')}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 30 }}
          >
            Email that's secure, private, and puts you in control.
            <br></br>
            Get started with a more powerful mail system
          </Typography>
        </CardContent>
      </Card>
    </Box>
  

   
    </>
  )
}

export default Home