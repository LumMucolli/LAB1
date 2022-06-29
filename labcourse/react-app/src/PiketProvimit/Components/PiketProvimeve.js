import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/PiketProvimit";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, Button, ButtonGroup } from "@material-ui/core";
import PiketProvimitForm from "./PiketProvimitForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme =>({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.2rem"
        }
    },
    paper : {
         margin: theme.spacing(2),
         padding: theme.spacing(2)
    }
})

const PiketProvimeve = ({classes,...props}) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(()=>{
        props.fetchAllPiketProvimeve()
    })

const onDelete = id =>{
    if(window.confirm('Are you sure to delete?'))
    props.deletePiketProvimeve(id)
}

    return(
        <Paper className={classes.paper} elevation={4}> 
            <Grid container>
                <Grid item xs={6}>
                    <PiketProvimitForm {...({ currentId, setCurrentId})}/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>ID Studenti</TableCell>
                                    <TableCell>Piket e Provimit</TableCell>
                                    <TableCell>Lenda</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.PiketProvimitList.map((record, index)=>{
                                        return(<TableRow key={index} hover>
                                            <TableCell>{record.studentiid}</TableCell>
                                            <TableCell>{record.piket}</TableCell>
                                            <TableCell>{record.lenda.emriLendes}</TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell>
                                                <ButtonGroup>
                                                    <Button><EditIcon color="primary" onClick={()=>{setCurrentId(record.id)}}/></Button>
                                                    <Button><DeleteIcon color="secondary" onClick={()=>onDelete(record.id)}/></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state=>({
        PiketProvimitList: state.PiketProvimit.list
})

const mapActionToProps = {
    fetchAllPiketProvimeve: actions.fetchAll,
    deletePiketProvimeve: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PiketProvimeve));