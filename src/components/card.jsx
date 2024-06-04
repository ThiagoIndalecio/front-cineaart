import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MultiActionAreaCard({ name, ageGroup, id, category }) {
  const [image, setImage] = useState(null);

  const ageClass = {
    "10": "container-blue",
    "12": "container-yellow",
    "14": "container-orange",
    "16": "container-red",
    "18": "container-black"
  }

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(`http://localhost:8080/api/cinema/movies/get-image/${id}`, {
          responseType: 'blob'
        });
        const imageUrl = URL.createObjectURL(response.data);
        setImage(imageUrl);
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
      }
    }

    fetchImage();
  }, [id]);

  return (
    <Link to={`/movie/${id}`}>
      <Card sx={{ maxWidth: 400, maxHeight: 700, minWidth: 300, boxSizing: 'border-box', margin: 1, backgroundColor: "#90FF9F", borderRadius: 4 }}>
        <CardActionArea>
          {image && (
            <CardMedia
              component="img"
              height="auto"
              image={image}
              alt={`${name} image`}
              sx={{
                minHeight: 520,
                objectFit: 'cover',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
              }}
            />
          )}
          <CardContent sx={{ minHeight: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography fontFamily="Poppins, sans-serif" variant='h7'>
              {name}
            </Typography>
            <div style={{ marginTop: 'auto' }}>
              <Typography fontFamily="Poppins, sans-serif" fontSize="20px" alignItems="flex-end" color="black" display="flex" justifyContent="space-between">
                {category}
                <div id="age" className={ageClass[ageGroup]}>
                  <div className="age">
                    {ageGroup}
                  </div>
                </div>
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
