import React, {useState, useEffect} from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/PiketProvimit";    

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
    piket: '',
    studentiid: '',
    lendaid: ""
}

const PiketProvimitForm = ({ classes, ...props }) => {

    const validate =(fieldValues = values) =>{
        let temp={...errors}
        if('piket' in fieldValues)
        temp.piket = fieldValues.piket?"":"This field is required."
        if('studentiid' in fieldValues)
        temp.studentiid = fieldValues.studentiid?"":"This field is required."   
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
            props.createPiketProvimit(values, ()=>{window.alert('inserted.')})
            else
            props.updatePiketProvimit(props.currentId, values, () => {window.alert('updated.')})
        }
    }

    useEffect(()=>{
        if(props.currentId != 0)
        setValues({
            ...props.PiketProvimitList.find(x=> x.id==props.currentId)
        })
    },[props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name = "piket"
                    variant = "outlined"
                    label = "Piket"
                    value={values.piket}
                    onChange={handleInputChange}
                    />
                    <TextField
                    name = "studentiid"
                    variant = "outlined"
                    label = "Studenti id"
                    value={values.studentiid}
                    onChange={handleInputChange}
                    />
                    <TextField
                    name="lendaid"
                    variant="outlined"
                    label="Lenda id"
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
        PiketProvimitList: state.PiketProvimit.list
})

const mapActionToProps = {
    createPiketProvimit : actions.create,
    updatePiketProvimit : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PiketProvimitForm)); 