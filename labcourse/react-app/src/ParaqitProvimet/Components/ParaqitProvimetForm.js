import React, {useState, useEffect} from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/ParaqitProvimet";    

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
    lendaid: ""
}

const ParaqitProvimetForm = ({ classes, ...props }) => {

    const validate =(fieldValues = values) =>{
        let temp={...errors}  
        if('lendaid' in fieldValues)
        temp.lendaid = fieldValues.lendaid ? "" :"This field is required."
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
            props.createParaqitProvimet(values, ()=>{window.alert('inserted.')})
            else
            props.updateParaqitProvimet(props.currentId, values, () => {window.alert('updated.')})
        }
    }

    useEffect(()=>{
        if(props.currentId != 0)
        setValues({
            ...props.ParaqitProvimetList.find(x=> x.id==props.currentId)
        })
    },[props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name="lendaid"
                    variant="outlined"
                    label="lendaid"
                    value={values.lendaid}
                    helperText={errors.lendaid}
                    onChange={handleInputChange}
                    {...(errors.lendaid && { error: true, helperText: errors.lendaid })}/>
                    <div>
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick = {() => window.location.reload(false)}
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
        ParaqitProvimetList: state.ParaqitProvimet.list
})

const mapActionToProps = {
    createParaqitProvimet : actions.create,
    updateParaqitProvimet : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ParaqitProvimetForm)); 