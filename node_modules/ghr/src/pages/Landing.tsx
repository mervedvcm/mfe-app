import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container, Link } from '@mui/material';
import Box from '@mui/material/Box';
import MaterialLink from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Landing() {
  return (
    <React.Fragment>
      <main>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
              Home Page
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Link component={RouterLink} to='/pricing'>
                    <Button variant='contained' color='primary'>
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Container sx={{ pt: 8, pb: 8 }} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia sx={{ pt: '56.25%' }} image='https://source.unsplash.com/random' title='Image title' />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Heading
                    </Typography>
                    <Typography>This is a media card. You can use this section to describe the content.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Box sx={{ backgroundColor: 'background.paper', p: 6 }}>
          <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <MaterialLink component={RouterLink} to='/' color='inherit'>
              Your Website
            </MaterialLink>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </footer>
    </React.Fragment>
  );
}