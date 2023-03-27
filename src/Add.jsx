import {
  AddTask,
  EmojiEmotions,
  InsertPhoto,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Button,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {Box, Stack} from '@mui/system';
import React, {useState} from 'react';
import {styled} from '@mui/system';

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const Add = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Tooltip
        sx={{
          position: 'fixed',
          bottom: '20px',
          left: {xs: 'calc(50% - 28px)', md: '20px'},
        }}
      >
        <Fab onClick={handleOpen} aria-label="like" color="success">
          <AddTask />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          width={400}
          height={280}
          borderRadius={5}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={5}
        >
          <Typography
            variant="h6"
            fontWeight={500}
            color="gray"
            textAlign="center"
          >
            Create Post
          </Typography>
          <Box display={'flex'} alignItems="center">
            <Avatar
              alt="Rami Mohammed"
              src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
            />
            <Typography
              variant="h6"
              color={'rgba(0, 0, 0, .7)'}
              fontSize={18}
              p={1}
            >
              Rami Moahmmed
            </Typography>
          </Box>
          <TextField
            placeholder="what's in your main ?"
            sx={{width: '100%'}}
            multiline
            rows={3}
            variant="standard"
          ></TextField>
          <Stack direction={'row'} gap={1} mt={1}>
            <EmojiEmotions color="warning" />
            <InsertPhoto color="success" />
            <VideoCameraBack color="secondary" />
            <PersonAdd color="error" />
          </Stack>
          <Button variant="contained" sx={{width: '100%', marginTop: '40px'}}>
            Post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
