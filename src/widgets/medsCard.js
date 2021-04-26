import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';  


function MedsCard(props) {   

  const meds = props.data.fields["meds-name"].split("");

  var allMeds = [
    {value: 'Remdesivir (Veklury)', key: '1'},
    {value: 'Dexamethasone', key: '2'},
    {value: 'Hydroxychloroquine', key: '3'},
    {value: 'Azithromycin', key: '4'},
    {value: 'Tocilizumab (Actemra)', key: '4'}
];

  console.log(allMeds.filter(({
    key
  }) => meds.includes(key)))

    const medsName = allMeds.filter(({
      key
    }) => meds.includes(key)).map(e => e.value).join(', ');

  console.log(meds)
    
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
             Medicine in {props.data.fields["region"]} | {props.data.fields["verified"] && "Verified"} {!props.data.fields["verified"] && "Not Verified"}
            </Typography>
            <Typography variant="h5" component="h2">
            {props.data.fields["contact"]}
            </Typography>
            <Typography 
                style={{
                    marginBottom: 3,
                    marginTop: 5
                }} 
                color="textSecondary"
            >  
            <p>
              <b> AVAILABLE MEDS </b>
            </p>
            <p>
                {
                  medsName
                }
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

export default MedsCard;