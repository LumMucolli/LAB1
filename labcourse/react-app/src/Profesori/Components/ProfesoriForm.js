import React, {useState, useEffect} from "react";
import { Grid, TextField, withStyles, Button, Select} from "@material-ui/core";
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

    //per emertimin e inputit Select
    const [selected, setSelected] = useState('');
    const handleChange = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setSelected(event.target.value); 
  };


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
                        <option value="1">LAB 1</option>
                        <option value="2">Algoritme 1</option>
                        <option value="3">Algoritme 2</option>
                        <option value="4">Inxhinieri Softuerike</option>
                        <option value="5">Sistemet Operative</option>
                    </select>
                    </div>

                    <div>
                    <select
                     value={values.departamentiid} 
                     onChange={handleInputChange}
                     name = "departamentiid"
                     variant = "outlined"
                     label = "Departamenti"
                     style = {{marginLeft:'8px', marginTop:'14px', width:'230px', height: '60px', borderRadius:'5px', color:'gray'}}
                     >
                        <option disabled={true} value="">
                        Departamenti
                        </option>
                        <option value="1">Juridik</option>
                        <option value="2">Shkenca Kompjuterike</option>
                        <option value="3">Ekonomik</option>
                        <option value="4">Shkenca politike</option>
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
        ProfesoriList: state.Profesori.list
})

const mapActionToProps = {
    createProfesori : actions.create,
    updateProfesori : actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ProfesoriForm)); 