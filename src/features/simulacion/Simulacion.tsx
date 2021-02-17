import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ProductsLoader } from './products-loader.jsx';
import Breadcrums from '../common/Breadcrums.jsx';
import Card from '@material-ui/core/Card';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Box from '@material-ui/core/Box';
import { Checkbox } from '@progress/kendo-react-inputs';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export function Simulacion(props) {

    const dispatch = useDispatch();
    const [products, setProducts] = useState({ data: [], total: 0 });
    const [dataState, setDataState] = useState({ take: 10, skip: 0 });
     const history = useHistory();
    const baseurl = 'http://localhost:3000';
    const [id, setId] = useState(props.match.params.id)
    const [breadcrumbsList, setBreadcrumList] = useState([
        {
            name : 'Simulaciones',
            link : '/',
        },
        {
            name : '#' + id,
            active :true
        }
    ]);

    
    const dataRecieved = (res:any) => {
        setProducts(res)
    };

    const dataStateChange = (res:any) => {
        setDataState(res.dataState)
    };

    const rowClick = (event:any) => {
        history.push("/simulaciones/" + id +"/" + event.dataItem.ProductID);
    };

    return (
        <div style={{padding:10}}>
        <Breadcrums lista={breadcrumbsList}></Breadcrums>
            <Card style={{marginTop:10, marginBottom:10}}>
                <Box display="flex" flexDirection="row" m={1} bgcolor="background.paper">
                    <Box p={1} width="20%" >
                        <p style={{textAlign:'left'}}>
                          <small>Fecha Índices</small><br/>
                          <label>00/00/0000</label>
                        </p>
                        <p style={{textAlign:'left'}}>
                          <small>Estado</small><br/>
                          <label>Finalizado</label>
                        </p>
                    </Box>
                    <Box p={1} width="20%">
                        <p style={{textAlign:'left'}}>
                          <small>Fecha Implementación Tarifas</small><br/>
                          <label>00/00/0000</label>
                        </p>
                        <p style={{textAlign:'left'}}>
                          <small>Fecha simulación</small><br/>
                          <label>00/00/0000 hh:mm:ss</label>
                        </p>
                    </Box>
                    <Box p={1} width="20%">
                        <p style={{textAlign:'left'}}>
                          <Checkbox defaultChecked={true} label={'Ajuste automático'}/>
                        </p>
                        <p style={{textAlign:'left'}}>
                          <small>Tipo</small><br/>
                          <label>tipo</label>
                        </p>
                    </Box>
                    <Box p={1} width="40%">
                        <p style={{textAlign:'left'}}>
                          <small>Descripción</small><br/>
                          <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit</label>
                        </p>
                        <p style={{textAlign:'left'}}>
                          <small>Última actualización</small><br/>
                          <label>00/00/0000 hh:mm:ss</label>
                        </p>
                    </Box>
              </Box>
            </Card>
            <div style={{textAlign:'left'}}>
                <Button variant="contained" color="default" style={{margin:10}}>
                    Action 1
                </Button>
                <Button variant="contained" color="default" style={{margin:10}}>
                    Action 2
                </Button>
            </div>
            <Grid
                onRowClick={rowClick}
                filterable={true}
                sortable={true}
                pageable={true}
                {...dataState}
                {...products}
                onDataStateChange={dataStateChange}
                >
                <Column 
                   field="ProductID" 
                   title="ID" 
                   cell={ (props) => 
                    <td>
                        <a href={baseurl + "/simulaciones/"+ id + "/" + props.dataItem.ProductID} style={{textDecorationLine: "underline", color:'blue'}}>
                            { props.dataItem.ProductID}
                        </a>
                    </td>
                   }
                /> 
                <Column field="UnitPrice" title="Número" />
                <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Descripción" />
                <Column field="ProductName" title="Identificación" />
                <Column field="ProductName" title="Moneda" />
                <Column field="ProductName" title="Coef.Anterior" />
                <Column field="ProductName" title="Coef.Nuevo" />
                <Column
                    field="Gatillo contrato"
                    cell={props => (
                        <td>
                            <input disabled type="checkbox" checked={false  } />
                        </td>
                    )}
                />
                <Column
                    field="Plazo revisión"
                    cell={props => (
                        <td>
                            <input disabled type="checkbox" checked={true} />
                        </td>
                    )}
                />
                <Column
                    field="EC Confirmada"
                    cell={props => (
                        <td>
                            <input disabled type="checkbox" checked={false} />
                        </td>
                    )}
                />
                <Column
                    field="Coef.Exportado"
                    cell={props => (
                        <td>
                            <input disabled type="checkbox" checked={false} />
                        </td>
                    )}
                />
            </Grid>
            <ProductsLoader
                dataState={dataState}
                onDataRecieved={dataRecieved}
            />
        </div>
    );
}
