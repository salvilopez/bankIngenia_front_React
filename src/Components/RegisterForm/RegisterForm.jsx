import React from "react";
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LoginPage from "../../Pages/Login/LoginPage";
const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    classes,
  } = props;
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        required
        fullWidth
        autoFocus
        id="email"
        label="Email"
        margin="normal"
        autoComplete="email"
        variant="outlined"
        name="email"
        type="text"
        placeholder="Email/Usuario"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email && "error"}
      ></TextField>
      {errors.email && touched.email && (
        <div className="error">{errors.email}</div>
      )}

      <TextField
        required
        fullWidth
        autoFocus
        id="password"
        type="password"
        label="Password"
        name="password"
        margin="normal"
        autoComplete="current-password"
        variant="outlined"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password && "error"}
      ></TextField>
      {errors.password && touched.password && (
        <div className="error">{errors.password}</div>
      )}
      <FormControlLabel
        control={<Checkbox value="remenber" color="secondary" />}
        label="Recordad datos"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        className={classes.submit}
      >
        Registrarse
      </Button>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Link variant="body2" to="/login">
            {"Ya tengo Cuenta"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
