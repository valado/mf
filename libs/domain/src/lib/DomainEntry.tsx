import { Box, Button, MenuItem, Stack, TextField } from '@mui/material';
import { FC, useState } from 'react';

export const DomainEntry: FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Box>
      <Stack spacing={3}>
        <h1>Welcome to Atruvia Tech Days!</h1>
        <Stack direction="row" justifyContent={'center'}>
          <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
          <Box sx={{ m: 'auto' }}>Count: {counter}</Box>
        </Stack>
        <TextField label="Example Input" />
        <TextField label="Example Select" select>
          <MenuItem value={0}>{'First'}</MenuItem>
          <MenuItem value={1}>{'Second'}</MenuItem>
          <MenuItem value={2}>{'Third'}</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
};

export default DomainEntry;
