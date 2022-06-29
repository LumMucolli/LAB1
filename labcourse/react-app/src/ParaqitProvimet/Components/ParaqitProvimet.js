import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/ParaqitProvimet";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, Button, ButtonGroup } from "@material-ui/core";
import ParaqitProvimetForm from "./ParaqitProvimetForm";
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

const ParaqitProvimet = ({classes,...props}) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(()=>{
        props.fetchAllParaqitProvimet()
    })

const onDelete = id =>{
    if(window.confirm('Are you sure to delete?'))
    props.deleteParaqitProvimet(id)
}

    return(
        <Paper className={classes.paper} elevation={4}> 
            <Grid container>
                <Grid item xs={6}>
                    <ParaqitProvimetForm {...({ currentId, setCurrentId})}/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Lenda ID</TableCell>
                                    <TableCell>Lenda e Paraqitur</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.ParaqitProvimetList.map((record, index)=>{
                                        return(<TableRow key={index} hover>
                                            <TableCell>{record.lenda.id}</TableCell>
                                            <TableCell>{record.lenda.emriLendes}</TableCell>
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
        ParaqitProvimetList: state.ParaqitProvimet.list
})

const mapActionToProps = {
    fetchAllParaqitProvimet: actions.fetchAll,
    deleteParaqitProvimet: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ParaqitProvimet));