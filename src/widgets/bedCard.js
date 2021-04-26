import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';  


function BedCard(props) {   
    
    
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
             Beds in {props.data.fields["region"]} | {props.data.fields["bed-type"]}
            </Typography>
            <Typography variant="h5" component="h2">
            {props.data.fields["contact"]}
            </Typography>
            <Typography 
                style={{
                    marginBottom: 12,
                }} 
                color="textSecondary"
            >
            <p>
             Number of beds : 
            </p>  
            <p>
            {props.data.fields["hospital-name"]}
            </p>
            <p>
            {props.data.fields["address"]}
             </p>
            </Typography>
            <Typography variant="body2" component="p">
            {props.data.fields["info"]}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Copy to clipboard</Button>
          </CardActions>
        </Card>
      );
}

export default BedCard;