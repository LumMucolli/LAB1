import React, {useState, useEffect} from "react";
import { Grid, TextField, withStyles, Button, Select} from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/Semestri";    


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
    lokacioni: '',
    semestrat: '',
    orari: ''
}

const SemestriForm = ({ classes, ...props }) => {

    //per emertimin e inputit Select
    const [selected, setSelected] = useState('');
    const handleChange = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setSelected(event.target.value); 
  };


    const validate =(fieldValues = values) =>{
        let temp={...errors}
        if('lokacioni' in fieldValues)
        temp.lokacioni = fieldValues.lokacioni ? "" :"This field is required."
        if('orari' in fieldValues)
        temp.orari = fieldValues.orari?"":"This field is required."
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
            props.createSemestri(values, ()=>{window.alert('inserted.')})
            else
            props.updateSemestri(props.currentId, values, () => {window.alert('updated.')})
        }
    }

    useEffect(()=>{
        if(props.currentId != 0)
        setValues({
            ...props.SemestriList.find(x=> x.id==props.currentId)
        })
    },[props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <div>
                    <select
                     value={values.lokacioni} 
                     onChange={handleInputChange}
                     name = "lokacioni"
                     variant = "outlined"
                     label = "Lokacioni"
                     style = {{marginLeft:'8px', marginTop:'7px', width:'230px', height: '60px',borderRadius:'5px', color:'gray'}}
                     >
                        <option disabled={true} value="">
                        Lokacioni
                        </option>
                        <option value="UBT - Prishtine">UBT - Prishtine</option>
                        <option value="UBT - Peje">UBT - Peje</option>
                        <option value="UBT - Ferizaj">UBT - Ferizaj</option>                     
                    </select>
                    </div>
                    <div>
                    <select
                     value={values.semestrat} 
                     onChange={handleInputChange}
                     name = "semestrat"
                     variant = "outlined"
                     label = "Semestri"
                     style = {{marginLeft:'8px', marginTop:'7px', width:'230px', height: '60px',borderRadius:'5px', color:'gray'}}
                     >
                        <option disabled={true} value="">
                        Semestri
                        </option>
                        <option value="Semestri 1">Semestri 1</option>
                        <option value="Semestri 2">Semestri 2</option>
                        <option value="Semestri 3">Semestri 3</option>
                        <option value="Semestri 4">Semestri 4</option>
                        <option value="Semestri 5">Semestri 5</option>
                        <option value="Semestri 6">Semestri 6</option>                        
                    </select>
                    </div>
                    <div>
                    <select
                     value={values.orari} 
                     onChange={handleInputChange}
                     name = "orari"
                     variant = "outlined"
                     label = "Orari"
                     style = {{marginLeft:'8px', marginTop:'7px', width:'230px', height: '60px',borderRadius:'5px', color:'gray'}}
                     >
                        <option disabled={true} value="">
                        Orari
                        </option>
                        <option value="Paradite">Paradite</option>
                        <option value="Pasdite">Pasdite</option>
                    </select>
                    </div>

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
        SemestriList: state.Semestri.list
})

const mapActionToProps = {
    createSemestri : actions.create,
    updateSemestri : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(SemestriForm)); 