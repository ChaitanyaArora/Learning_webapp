import React, { useState } from 'react';
import { Grid, Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const DataUploadPage = () => {
    const [namespace, setNamespace] = useState('');

    const handleSave = () => {
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


            <Grid item xs={12} sm={7} md={8} lg={9} xl={10} style={{ backgroundColor: '#FAFAFA' }}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                >
                   
                </Box>
            </Grid>
        </Grid>
    );
};

export default DataUploadPage;