import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Profesori";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, Button, ButtonGroup } from "@material-ui/core";
import ProfesoriForm from "./ProfesoriForm";
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

const Profesoret = ({classes,...props}) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(()=>{
        props.fetchAllProfesoret()
    })

const onDelete = id =>{
    if(window.confirm('Are you sure to delete?'))
    props.deleteProfesori(id)
}

    return(
        <Paper className={classes.paper} elevation={4}> 
            <Grid container>
                <Grid item xs={6}>
                    <ProfesoriForm {...({ currentId, setCurrentId})}/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Emri Mbiemri</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>ID Lenda</TableCell>
                                    <TableCell>ID Departamenti</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.ProfesoriList.map((record, index)=>{
                                        return(<TableRow key={index} hover>
                                            <TableCell>{record.emriMbiemri}</TableCell>
                                            <TableCell>{record.email}</TableCell>
                                            <TableCell>{record.lendaid}</TableCell>
                                            <TableCell>{record.departamentiid}</TableCell>
                                            <TableCell>{record.emriLendes}</TableCell>
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
        ProfesoriList: state.Profesori.list
})

const mapActionToProps = {
    fetchAllProfesoret: actions.fetchAll,
    deleteProfesori: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Profesoret));