import './App.css';
import { encouragementData } from './data';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [topic, setTopic] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const topicSet = new Set(encouragementData.map((encouragement) => encouragement.TOPIC));
  const topicList = Array.from(topicSet);

  const messages = encouragementData.filter((encouragement) => encouragement.TOPIC === topic);
  const randomMessage = messages[randomNumber];
  const handleChange = (event) => {
    setTopic(event.target.value)
  }

  const handleClick = () => {
    setRandomNumber(Math.floor(Math.random() * messages.length));
  }


  return (
    <Container>
      <Typography variant="h2" sx={{ my: 4 }}>
        Encouragement App
      </Typography>
      <FormControl fullWidth sx={{ my: 4 }}>
        <InputLabel id="demo-simple-select-label">Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={topic}
          label="Topic"
          onChange={handleChange}
        >
          {topicList.map((topic) => <MenuItem key={topic} value={topic}>{topic}</MenuItem>)}
        </Select>
      </FormControl>
      <Typography variant="h5" sx={{ my: 4 }}>
        You have picked the topic "{topic}"
      </Typography>

      <Button variant="contained" fullWidth onClick={handleClick} sx={{ my: 4 }}>
        New Quote
      </Button>

      <Typography variant="p" sx={{ my: 4 }}>
        {randomMessage?.MESSAGE}
      </Typography>
    </Container>
  );
}

export default App;
