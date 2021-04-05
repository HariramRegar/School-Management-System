import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

function EditDetailsPage() {
  const classes = useStyles();
  const [userdata, setUserdata] = React.useState({});
  const handleChange = (event) => {
    setUserdata(event.target.key=event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h2>Edit My details</h2>
      <div>
        <TextField
          id="outlined-name"
          label="First Name"
          value={userdata.first_name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-name"
          label="Last Name"
          value={userdata.last_name}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-name"
          label="About"
          value={userdata.about}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
    </form>
  );
}

export default EditDetailsPage;