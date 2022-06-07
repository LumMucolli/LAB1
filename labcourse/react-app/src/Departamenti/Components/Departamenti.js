import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Departamenti";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, Button, ButtonGroup } from "@material-ui/core";
import DepartamentiForm from "./DepartamentiForm";
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

const Departamenti = ({classes,...props}) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(()=>{
        props.fetchAllDepartamenti()
    })

const onDelete = id =>{
    if(window.confirm('Are you sure to delete?'))
    props.deleteDepartamenti(id)
}

    return(
        <Paper className={classes.paper} elevation={4}> 
            <Grid container>
                <Grid item xs={6}>
                    <DepartamentiForm {...({ currentId, setCurrentId})}/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Departamenti</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.DepartamentiList.map((record, index)=>{
                                        return(<TableRow key={index} hover>
                                            <TableCell>{record.emriDepartamenti}</TableCell>
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
        DepartamentiList: state.Departamenti.list
})

const mapActionToProps = {
    fetchAllDepartamenti: actions.fetchAll,
    deleteDepartamenti: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Departamenti));