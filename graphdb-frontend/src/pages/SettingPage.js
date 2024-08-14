import React, { useState, useRef } from 'react';
import { Grid, Box, List, ListItem, ListItemText, Typography, Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, MenuItem, Select } from '@mui/material';

const SettingPage = () => {
    const [namespace, setNamespace] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    const fileInputRef = useRef(null);

    const handleSave = () => {

    };

    const handleFileUploadClick = () => {

        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleRowSelection = (event, index) => {
        const selectedIndex = selectedRows.indexOf(index);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedRows, index);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedRows.slice(1));
        } else if (selectedIndex === selectedRows.length - 1) {
            newSelected = newSelected.concat(selectedRows.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedRows.slice(0, selectedIndex),
                selectedRows.slice(selectedIndex + 1)
            );
        }

        setSelectedRows(newSelected);
    };

    const handleImport = () => {
        alert('Importing selected files: ' + selectedRows);
    };

    return (
        <Grid container style={{ height: '100vh' }}>

            <Grid
                item
                xs={12}
                sm={5}
                md={4}
                lg={3}
                xl={2}
                style={{
                    backgroundColor: '#363740',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0'
                }}
            >

                <Box style={{ width: '100%' }}>
                    <ListItem>
                        <ListItemText primary="Hike Lab." style={{ color: 'white', textAlign: 'center' }} />
                    </ListItem>
                </Box>

                <Box style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemText primary="설정" style={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Namespace" style={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="데이터 업로드" style={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="SPARQL" style={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="통계" style={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="그래프 탐색" style={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="나의 프로세스" style={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                    </List>
                </Box>
            </Grid>


            <Grid item xs={12} sm={7} md={8} lg={9} xl={10} style={{ backgroundColor: '#FAFAFA', padding: '20px', position: 'relative' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="20px">
                    <Typography variant="h5" style={{ color: 'black' }}>
                        데이터 업로드 한국어
                    </Typography>


                    <Box
                        style={{
                            color: 'black',
                        }}
                    >
                        Username
                    </Box>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="flex-start" marginBottom="20px">
                    <Box display="flex" flexDirection="column" alignItems="flex-start" marginTop="20px">

                        <Button
                            variant="outlined"
                            onClick={handleFileUploadClick}
                            style={{ padding: '20px', borderRadius: '8px', textTransform: 'none', width: '200px', marginBottom: '20px' }}
                        >
                            File Upload
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleImport}
                            style={{ backgroundColor: '#007bff', color: 'white', width: '200px' }}
                        >
                            Import
                        </Button>
                    </Box>
                </Box>

                <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: 'none' }}
                    multiple
                    onChange={handleFileChange}
                />

                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell>File</TableCell>
                                <TableCell>Named Graph ID</TableCell>
                                <TableCell>File Size</TableCell>
                                <TableCell>Delete</TableCell>
                                <TableCell>Import</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[0, 1].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedRows.indexOf(index) !== -1}
                                            onChange={(event) => handleRowSelection(event, index)}
                                        />
                                    </TableCell>
                                    <TableCell>address-triples-data{index + 3}.ttl</TableCell>
                                    <TableCell>
                                        <Select
                                            defaultValue="graph1"
                                            style={{ minWidth: 120 }}
                                        >
                                            <MenuItem value="graph1">graph1</MenuItem>
                                            <MenuItem value="graph2">graph2</MenuItem>
                                            <MenuItem value="None">None</MenuItem>
                                            <MenuItem value="추가">추가</MenuItem>
                                        </Select>
                                    </TableCell>
                                    <TableCell>100MB</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="secondary">Delete</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="primary">Import</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Box
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            backgroundColor: 'white',
                            border: '2px solid #000',
                            boxShadow: 24,
                            padding: '16px 32px 24px'
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Upload File
                        </Typography>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Select File
                            <input
                                type="file"
                                hidden
                                multiple
                                onChange={handleFileChange}
                            />
                        </Button>
                    </Box>
                </Modal>
            </Grid>
        </Grid>
    );
};

export default SettingPage;