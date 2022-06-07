import React, {useState, useEffect} from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/Departamenti";    

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
    emriDepartamenti : '',
}

const DepartamentiForm = ({ classes, ...props }) => {

    const validate =(fieldValues = values) =>{
        let temp={...errors}
        if('emriDepartamenti' in fieldValues)
        temp.emriDepartamenti = fieldValues.emriDepartamenti?"":"This field is required."   
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
            props.createDepartamenti(values, ()=>{window.alert('inserted.')})
            else
            props.updateDepartamenti(props.currentId, values, () => {window.alert('updated.')})
        }
    }

    useEffect(()=>{
        if(props.currentId != 0)
        setValues({
            ...props.DepartamentiList.find(x=> x.id==props.currentId)
        })
    },[props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name = "emriDepartamenti"
                    variant = "outlined"
                    label = "Departamenti"
                    value={values.emriDepartamenti}
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
        DepartamentiList: state.Departamenti.list
})

const mapActionToProps = {
    createDepartamenti : actions.create,
    updateDepartamenti : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DepartamentiForm)); 