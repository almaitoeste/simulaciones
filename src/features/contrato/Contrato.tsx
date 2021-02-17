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
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import Select from '@material-ui/core/Select';

export function Contrato(props) {

    const dispatch = useDispatch();
    const [products, setProducts] = useState({ data: [], total: 0 });
    const [dataState, setDataState] = useState({ take: 10, skip: 0 });
    const baseurl = 'http://localhost:3000';
    const [simulacionId, seSimulaciontId] = useState(props.match.params.simulacion_id)
    const [id, setId] = useState(props.match.params.id)
    const [selectedTab, setSelectedTab] = useState(0);
    const [breadcrumbsList, setBreadcrumList] = useState([
        {
            name : 'Simulaciones',
            link : '/',
        },
        {
            name : '#' + simulacionId,
            link : '/simulaciones/' + simulacionId,
        },
        {
            name : 'Contrato ' + id,
            active :true
        }
    ]);

    const handleSelect = (e:any) => {
        setSelectedTab(e.selected);
    }
    const dataRecieved = (res:any) => {
        setProducts(res)
    };

    const dataStateChange = (res:any) => {
        setDataState(res.dataState)
    };

    return (
        <div style={{padding:10}}>
            <Breadcrums lista={breadcrumbsList}></Breadcrums>
            <div style={{textAlign:'right'}}>
                <Button variant="contained" color="default" style={{margin:10}}>
                    Action 1
                </Button>
                <Button variant="contained" color="default" style={{margin:10}}>
                    Action 2
                </Button>
            </div>
            <TabStrip selected={selectedTab} onSelect={handleSelect}>
                <TabStripTab title="AJUSTE TEÓRICO">
                    <Box display="flex" flexDirection="row" >
                        <Box p={1} width="12%" >
                            <p style={{textAlign:'left'}}>
                              <small>Tipo de cambio</small><br/>
                              <label>1234,67</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Checkbox defaultChecked={true} label={'Impacto Gatillo'}/>
                            </p>
                        </Box>
                        <Box p={1} width="15%">
                            <p style={{textAlign:'left'}}>
                              <small>Fecha Tipo de Cambio</small><br/>
                              <label>00/00/0000</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Checkbox defaultChecked={true} label={'Impacto Plazo Revisión'}/>
                            </p>
                        </Box>
                        <Box p={1} width="18%">
                            <p style={{textAlign:'left'}}>
                              <small>% Gatillo Contrato</small><br/>
                              <label>5.4%</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Checkbox defaultChecked={true} label={'Impacto Indices Disparadores'}/>
                            </p>
                        </Box>
                        <Box p={1} width="10%">
                            <p style={{textAlign:'left'}}>
                              <small>Plazo Revisión</small><br/>
                              <label>6 meses</label>
                            </p>
                        </Box>
                        <Box p={1} width="15%">
                            <p style={{textAlign:'left'}}>
                              <small>Fecha Índices Contrato</small><br/>
                              <label>00/00/0000</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Select
                                  native
                                  value={10}
                                >
                                  <option aria-label="None" value="" />
                                  <option value={10}>Indices</option>
                                  <option value={20}>Indices 2</option>
                                </Select>
                            </p>
                        </Box>
                        <Box p={1} width="20%" >
                            <p style={{textAlign:'left'}}>
                              <small>Fecha Índices Simulación</small><br/>
                              <label>00/00/0000</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Checkbox defaultChecked={true} label={'Disparador Mano de oBra detallada'}/>
                            </p>
                        </Box>
                  </Box>
                </TabStripTab>
                <TabStripTab title="AJUSTE APLICADO">
                    <Box display="flex" flexDirection="row" >
                        <Box p={1} width="12%" >
                            <p style={{textAlign:'left'}}>
                              <small>Tipo de cambio</small><br/>
                              <label>1234,67</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Checkbox defaultChecked={true} label={'Impacto Gatillo'}/>
                            </p>
                        </Box>
                        <Box p={1} width="15%">
                            <p style={{textAlign:'left'}}>
                              <small>Fecha Tipo de Cambio</small><br/>
                              <label>00/00/0000</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Checkbox defaultChecked={true} label={'Impacto Plazo Revisión'}/>
                            </p>
                        </Box>
                        <Box p={1} width="18%">
                            <p style={{textAlign:'left'}}>
                              <small>% Gatillo Contrato</small><br/>
                              <label>5.4%</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Checkbox defaultChecked={true} label={'Impacto Indices Disparadores'}/>
                            </p>
                        </Box>
                        <Box p={1} width="10%">
                            <p style={{textAlign:'left'}}>
                              <small>Plazo Revisión</small><br/>
                              <label>6 meses</label>
                            </p>
                        </Box>
                        <Box p={1} width="15%">
                            <p style={{textAlign:'left'}}>
                              <small>Fecha Índices Contrato</small><br/>
                              <label>00/00/0000</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Select
                                  native
                                  value={10}
                                >
                                  <option aria-label="None" value="" />
                                  <option value={10}>Indices</option>
                                  <option value={20}>Indices 2</option>
                                </Select>
                            </p>
                        </Box>
                        <Box p={1} width="20%" >
                            <p style={{textAlign:'left'}}>
                              <small>Fecha Índices Simulación</small><br/>
                              <label>00/00/0000</label>
                            </p>
                            <p style={{textAlign:'left'}}>
                              <Checkbox defaultChecked={true} label={'Disparador Mano de oBra detallada'}/>
                            </p>
                        </Box>
                  </Box>
                </TabStripTab>
            </TabStrip>
            <Grid
                filterable={true}
                sortable={true}
                pageable={true}
                {...dataState}
                {...products}
                onDataStateChange={dataStateChange}
                >

                <Column field="ProductName" title="Nombre" />
                <Column title="EC Base" >
                    <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Monto" />
                    <Column field="UnitPrice" title="%" format="{0}%" />
                </Column>
                <Column field="UnitPrice" title="Ajuste" />
                <Column title="EC Ajustado" >
                    <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Monto" />
                    <Column field="UnitPrice" title="%"  format="{0}%" />
                </Column>
                <Column
                    field="Índices"
                    cell={props => (
                        <td>
                            <Select
                                native
                                value={10}
                                >
                                <option value={10}>I CAC Mano de Obra</option>
                                <option value={10}>I CAC Mano de Obra2</option>
                            </Select>
                        </td>
                    )}
                />
                <Column title="Índice Base" >
                    <Column field="UnitPrice" filter="numeric" title="Valor" />
                    <Column field="UnitPrice" title="Fecha"  />
                </Column>
                <Column title="Índice Teórico" >
                    <Column field="UnitPrice" filter="numeric" title="Valor" />
                    <Column field="UnitPrice" title="Fecha"  />
                </Column>
            </Grid>
            <ProductsLoader
                dataState={dataState}
                onDataRecieved={dataRecieved}
            />
        </div>
    );
}
