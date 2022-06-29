import React, {useState, useEffect} from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/Provimet";    


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
    lendaid : '',
    kategoria : '',
    profesori : '',
    dataProvimit : '',
    kohaProvimit : ''
}

const ProvimetForm = ({ classes, ...props }) => {

    const validate =(fieldValues = values) =>{
        let temp={...errors}
        if('lendaid' in fieldValues)
        temp.lendaid = fieldValues.lenda?"":"This field is required."
        if('profesori' in fieldValues)
        temp.profesori = fieldValues.profesori?"":"This field is required."   
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
            props.createProvimet(values, ()=>{window.alert('inserted.')})
            else
            props.updateProvimet(props.currentId, values, () => {window.alert('updated.')})
        }
    }

    useEffect(()=>{
        if(props.currentId != 0)
        setValues({
            ...props.ProvimetList.find(x=> x.id==props.currentId)
        })
    },[props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <div>
                    <select
                     value={values.lendaid} 
                     onChange={handleInputChange}
                     name = "lendaid"
                     variant = "outlined"
                     label = "Lenda"
                     style = {{marginLeft:'8px', marginTop:'7px', width:'230px', height: '60px',borderRadius:'5px', color:'gray'}}
                     >
                        <option disabled={true} value="">
                        Lenda   
                        </option>
                        <option value="1">Shkenca Kompjuterike dhe Inxhinieri</option>
                        <option value="2">LAB 1</option>
                        <option value="3">Algoritme 1</option>
                        <option value="4">Shkrim Shkencor dhe Akademik</option>
                        <option value="5">Teknikat e zgjedhjes se problemeve</option>
                    </select>
                    </div>
                    <div>
                    <select
                     value={values.kategoria} 
                     onChange={handleInputChange}
                     name = "kategoria"
                     variant = "outlined"
                     label = "kategoria"
                     style = {{marginLeft:'8px', marginTop:'7px', width:'230px', height: '60px',borderRadius:'5px', color:'gray'}}
                     >
                        <option disabled={true} value="">
                        Kategoria
                        </option>
                        <option value="Obligative">Obligative</option>
                        <option value="Zgjedhore">Zgjedhore</option>
                    </select>
                    </div>
                    <div>
                    <select
                     value={values.profesori} 
                     onChange={handleInputChange}
                     name = "profesori"
                     variant = "outlined"
                     label = "profesori"
                     style = {{marginLeft:'8px', marginTop:'7px', width:'230px', height: '60px',borderRadius:'5px', color:'gray'}}
                     >
                        <option disabled={true} value="">
                        Profesori
                        </option>
                        <option value="1">Lavdim Menxhiqi</option>
                        <option value="2">Blerim Zylfiu</option>
                        <option value="3">Bertan Karahoda</option>
                        <option value="4">Krenare Pireva</option>
                        <option value="5">Ramiz Hoxha</option>
                    </select>
                    </div>
                    <TextField
                    name = "dataProvimit"
                    variant = "outlined"
                    label = "dataProvimit"
                    value={values.dataProvimit}
                    onChange={handleInputChange}
                    />
                    <TextField
                    name = "kohaProvimit"
                    variant = "outlined"
                    label = "kohaProvimit"
                    value={values.kohaProvimit}
                    onChange={handleInputChange}
                    />
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
        ProvimetList: state.Provimet.list
})

const mapActionToProps = {
    createProvimet : actions.create,
    updateProvimet : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ProvimetForm)); 