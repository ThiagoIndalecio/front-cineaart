import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { Link } from "react-router-dom";



export default function MultiActionAreaCard({ name, ageGroup, id }) {


  const ageClass = {
    "10": "container-blue",
    "12": "container-yellow",
    "14": "container-orange",
    "16": "container-red",
    "18": "container-black"
  }



  return (
    <Link to={`/movie/${id}`}>
    <Card sx={{ height: 600 ,maxWidth: 400, minWidth: 300, boxSizing: 'border-box', margin: 1, backgroundColor: "#90FF9F", borderRadius: 4 }}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image='https://i.imgur.com/YD0elDF.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" display="flex" justifyContent="space-between"  >
            {name}

            
          </Typography>

          <Typography variant="body2" color="text.secondary" display="flex" justifyContent="space-between">
            aadsdasda
            <div id="age" className={ageClass[ageGroup]}>
              <div className="age">
                {ageGroup}
              </div>

            </div>
          </Typography>
        </CardContent>
      </CardActionArea >
      
    </Card>
    </Link>
  );
}