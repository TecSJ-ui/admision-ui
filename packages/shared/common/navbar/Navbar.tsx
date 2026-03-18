import { Box, Container, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

export default function ButtonAppBar() {
    return (
        <Box>
            <AppBar position="fixed" color="primary">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            LOGO
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}