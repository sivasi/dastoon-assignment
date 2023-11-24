import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@mui/material/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#250736", // Set the background color here
  },
  form: {
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    backgroundColor: "#250736",
    color: "#fff",
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(2),
    "& .MuiInputBase-input": {
      color: "#fff",
      fontSize: "14px",
      padding: "10px",
    },
    "& .MuiFormLabel-root": {
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: "14px",
      marginTop: "-8px",
      transition: "margin-top 0.2s",
    },
    "& .MuiInputBase-input:focus + .MuiFormLabel-root": {
      marginTop: "-4px",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#fff",
      opacity: 0.7,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
  },
  submitButton: {
    backgroundColor: "#430470",
    color: "#fff",
  },
}));

const MyForm = ({ setUrl, setUrl1, setUrl2, setUrl3, setUrl4, setUrl5, setUrl6, setUrl7, setUrl8, setUrl9 }) => {
  const classes = useStyles();
  async function query(data) {
    setLoading(true);
    const response = await fetch("https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud", {
      headers: {
        Accept: "image/png",
        Authorization: "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await response.blob();
    setLoading(false);
    return result;
  }

  const [comicText, setComicText] = useState(Array(10).fill(""));
  const [loading, setLoading] = useState(false);
  const urls = [setUrl, setUrl1, setUrl2, setUrl3, setUrl4, setUrl5, setUrl6, setUrl7, setUrl8, setUrl9];

  const handleInputChange = (index, value) => {
    const newText = [...comicText];
    newText[index] = value;
    setComicText(newText);
  };

  const handleClick = (e) => {
    e.preventDefault();
    for (let i = 0; i < urls.length; i++) {
      const setUrlFunction = urls[i];
      if (setUrlFunction) {
        setUrlFunction("");
      } else {
        console.error(`Error: setUrl${i} is not defined.`);
      }
    }
    //Funtion for getting all the input and calling of API using vaious user-defined inputs.
    comicText.map(async (text, i) => {
      const data = { inputs: text };
      query(data)
        .then((res) => {
          const imageUrl = URL.createObjectURL(res); //Creating image url from big large object (blob).
          const setUrlFunction = urls[i];
          if (setUrlFunction) {
            setUrlFunction(imageUrl);
          } else {
            console.error(`Error: setUrl${i} is not defined.`);
          }
        })
        .catch((err) => {
          //Handling errors
          console.error("Error fetching image:", err);
        });
    });
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.form}>
        <form>
          <Grid container spacing={1}>
            {/* Add 10 input fields */}
            {comicText.map((text, index) => (
              <Grid item xs={12} key={index}>
                <TextField label={`Panel ${index + 1}`} variant="outlined" className={classes.textField} value={text} onChange={(e) => handleInputChange(index, e.target.value)} />
              </Grid>
            ))}

            {/* Add a submit button */}
            <Grid item xs={12}>
              {!loading ? (
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth className={classes.submitButton} onClick={(e) => handleClick(e)}>
                  Submit
                </Button>
              ) : (
                <CircularProgress />
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default MyForm;
