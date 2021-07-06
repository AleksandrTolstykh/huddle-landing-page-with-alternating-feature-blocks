import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Feature from './Feature';
import CallToAction from './CallToAction';
import Contacts from './Contacts';
import Footer from './Footer';

function App() {
  return (
    <Box>
      <Header />
      <Feature
        title='Grow Together'
        text='Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.'
        image='images/illustration-grow-together.svg'
      />
      <Feature
        title='Flowing Conversations'
        text='You wouldn`t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.'
        image='images/illustration-flowing-conversation.svg'
        reverseContent='true'
      />
      <Feature
        title='Your Users'
        text='It takes no time at all to integrate Huddle with your app`s authentication solution. This means, once signed in to your app, your users can start chatting immediately.'
        image='images/illustration-your-users.svg'
      />
      <CallToAction />
      <Contacts />
      <Grid container justify='center'>
        <Footer />
      </Grid>
    </Box>
  );
}

export default App;
