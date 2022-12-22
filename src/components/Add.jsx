import { Box, Fab, Modal, Tooltip, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { useState } from 'react'


const Add = () => {
    const [open, setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    })

    const UserBox = styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        marginBottom:"20px",
    })

  return (
    <>
        <Tooltip
        onClick={e=> setOpen(true)} title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50%)", md:30}}}>
            <Fab color="primary" aria-label="add"><AddIcon /></Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=> setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
            <UserBox>
                <Avatar
                    src="https://i.imgur.com/b6KMbDR.png"
                    sx={{ width: 30, height: 30}}
                />
                <Typography fontWeight={500} variant="span">Travis Howard</Typography>
            </UserBox>
            <TextField
                sx={{width:"100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind"
                variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotionsIcon color='warning'/>
                <ImageIcon color='primary'/>
                <VideocamIcon color='error'/>
                <PersonAddAlt1Icon color='success'/>
            </Stack>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                <Button >Post</Button>
                <Button sx={{width:"100px"}}><CalendarMonthIcon/></Button>
            </ButtonGroup>

        </Box>
        </StyledModal>
    </>
  )
}

export default Add