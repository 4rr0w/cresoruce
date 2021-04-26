import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';  


function OxyCard(props) {   
    
   
      const bull = <span 
                        style={{ 
                            display: 'inline-block',
                            margin: '0 2px',
                            transform: 'scale(0.8)'
                        }}
                    >
                        •
                    </span>;
    
      return (
        <Card style={{
            minWidth: "250px",
            width: "30%",
            margin: "auto",
            padding: "2px",

          }}>
          <CardContent>
            <Typography 
                style={{
                    fontSize: 14,
                }} 
                color="textSecondary" 
                gutterBottom
            >
              Region | Refill or Machine
            </Typography>
            <Typography variant="h5" component="h2">
                Contact
            </Typography>
            <Typography 
                style={{
                    marginBottom: 12,
                }} 
                color="textSecondary"
            >
             
            </Typography>
            <Typography variant="body2" component="p">
            additional info
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Copy to clipboard</Button>
          </CardActions>
        </Card>
      );
}

export default OxyCard;