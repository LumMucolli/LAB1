import React, {useState, useEffect} from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/Lenda";    

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
    emriLendes : '',
    ects : ''
}

const LendaForm = ({ classes, ...props }) => {

    const validate =(fieldValues = values) =>{
        let temp={...errors}
        if('emriLendes' in fieldValues)
        temp.emriLendes = fieldValues.emriLendes?"":"This field is required."
        if('ects' in fieldValues)
        temp.ects = fieldValues.ects?"":"This field is required."   
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
            props.createLenda(values, ()=>{window.alert('inserted.')})
            else
            props.updateLenda(props.currentId, values, () => {window.alert('updated.')})
        }
    }

    useEffect(()=>{
        if(props.currentId != 0)
        setValues({
            ...props.LendaList.find(x=> x.id==props.currentId)
        })
    },[props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name = "emriLendes"
                    variant = "outlined"
                    label = "Emri i Lendes"
                    value={values.emriLendes}
                    onChange={handleInputChange}
                    />
                    <TextField
                    name = "ects"
                    variant = "outlined"
                    label = "ECTS"
                    value={values.ects}
                    onChange={handleInputChange}
                    {...(errors.emriLendes && {error:true, helperText:errors.lendetid})}
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
        LendaList: state.Lenda.list
})

const mapActionToProps = {
    createLenda : actions.create,
    updateLenda : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(LendaForm)); 