import {FiberManualRecord} from '@mui/icons-material';
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';

const Rightbar = () => {
  return (
    <Box flex="2" p={1} sx={{display: {xs: 'none', sm: 'block'}}}>
      <Box sx={{position: 'fixed'}}>
        <Typography
          variant="h6"
          component={'div'}
          fontWeight={100}
          display="flex"
          alignItems={'center'}
        >
          Online Friends <FiberManualRecord color="success" />
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://www.looper.com/img/gallery/the-most-powerful-avatar-the-last-airbender-characters-ranked/l-intro-1642110066.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://www.fortressofsolitude.co.za/wp-content/uploads/2021/06/5-Most-Popular-Anime-Characters-of-All-Time.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRT2zPBpcRLogVniuvWiv43Q5MSKjAZKFMw63axHPgP7khjBVssZL898LB1nlLAK3qiM4&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQI2BrJdpBvQR7YkfQCs9f_Igzplk6FOaeKA&usqp=CAU"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography
          variant="h6"
          component={'div'}
          fontWeight={100}
          display="flex"
          alignItems={'center'}
        >
          Latest Images
        </Typography>

        <ImageList>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRT2zPBpcRLogVniuvWiv43Q5MSKjAZKFMw63axHPgP7khjBVssZL898LB1nlLAK3qiM4&usqp=CAU"
              alt={''}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.fortressofsolitude.co.za/wp-content/uploads/2021/06/5-Most-Popular-Anime-Characters-of-All-Time.jpg"
              alt={''}
            />
          </ImageListItem>{' '}
          <ImageListItem>
            <img
              src="https://nextluxury.com/wp-content/uploads/The-24-Strongest-Anime-Characters-of-All-Time.jpg"
              alt={''}
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
