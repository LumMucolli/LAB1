import React, {useState, useEffect} from "react";
import { Grid, TextField, withStyles, Button, Select, OutlinedInput, MenuItem } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/Profesori";    

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    emriMbiemri: '',
    email: '',
    lendaid: '',
    departamentiid: '',
}

const ProfesoriForm = ({ classes, ...props }) => {

    const validate =(fieldValues = values) =>{
        let temp={...errors}
        if('emriMbiemri' in fieldValues)
        temp.emriMbiemri = fieldValues.emriMbiemri ? "" :"This field is required."
        if('email' in fieldValues)
        temp.email = (/^$|.+@.+..+/).test(fieldValues.email)?"":"This field is required."
        if('lendaid' in fieldValues)
        temp.lendaid = fieldValues.lendaid?"":"This field is required."
        if('departamentiid' in fieldValues)
        temp.departamentiid = fieldValues.departamentiid?"":"This field is required."
        setErrors({
            ...temp
        })

        if(fieldValues === values)
        return Object.values(temp).every(x=> x==="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues, validate)    

    const handleSubmit = e =>{
        e.preventDefault()
        if(validate())
        {
            if(props.currentId==0)
            props.createProfesori(values, ()=>{window.alert('inserted.')})
            else
            props.updateProfesori(props.currentId, values, () => {window.alert('updated.')})
        }
    }

    useEffect(()=>{
        if(props.currentId != 0)
        setValues({
            ...props.ProfesoriList.find(x=> x.id==props.currentId)
        })
    },[props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name = "emriMbiemri"
                    variant = "outlined"
                    label = "Emri Mbiemri"
                    value={values.emriMbiemri}
                    onChange={handleInputChange}
                    {...(errors.emriMbiemri && {error:true, helperText:errors.emriMbiemri})}
                    />
                    <TextField
                    name = "email"
                    variant = "outlined"
                    label = "Email"
                    value={values.email}
                    onChange={handleInputChange}
                    {...(errors.email && {error:true, helperText:errors.email})}
                    />
                    <TextField
                    name = "lendaid"
                    variant = "outlined"
                    label = "Lenda"
                    value={values.lendaid}
                    onChange={handleInputChange}
                    />
                    <TextField
                    name = "departamentiid"
                    variant = "outlined"
                    label = "Departamenti"
                    value={values.departamentiid}
                    onChange={handleInputChange}
                    />
                    <div>
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
    );
}

const mapStateToProps = state=>({
        ProfesoriList: state.Profesori.list
})

const mapActionToProps = {
    createProfesori : actions.create,
    updateProfesori : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ProfesoriForm)); 