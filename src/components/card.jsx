import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function MultiActionAreaCard({name, ageGroup}) {

  
const ageClass = {
  "10": "container-blue",
  "12": "container-yellow",
  "14": "container-orange",
  "16": "container-red",
  "18": "container-black"
}



  return (
    <Card sx={{ maxWidth: 400, minWidth: 300, margin:1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image= 'https://i.imgur.com/YD0elDF.jpg'
          alt="green iguana"    
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" display="flex" justifyContent="space-between" >
            {name}
                     
            <div id="age" className={ageClass[ageGroup]}>
              <div className="age">
                {ageGroup}  
              </div>
              
            </div>
          </Typography>
  
          <Typography variant="body2" color="text.secondary">
            aadsdasda
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" color="primary">
          Ver sessões disponiveis
        </Button>
      </CardActions>
    </Card>
  );
}