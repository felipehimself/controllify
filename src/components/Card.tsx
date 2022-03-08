import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
interface Props {
  item: string;
  Icon: React.FC;
}

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const BasicCard: React.FC<Props> = ({ item, Icon }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Icon />
        <p style={{fontSize: '0.5rem'}}>{item}</p>
      </CardContent>
    </Card>
  );
};



export default BasicCard;
// interface Props {
//   item: string;
//   Icon: React.FC;
// }

// const Card: React.FC<Props> = ({ item, Icon }) => {
//   return (
//     <>
//       <span>{item}</span>
//       <Icon />
//     </>
//   );
// };
// export default Card;
