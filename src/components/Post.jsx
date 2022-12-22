import React from 'react'
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import posts from '../posts'

const Post = () => {
  return (
    <>
    {posts.map((post) => (
      <Card sx={{margin:5}}>
              <CardHeader
                avatar={
                  <Avatar alt={post.avatar_alt} src={post.avatar_img} />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.account_name}
                subheader={post.fecha}
              />
              <CardMedia
                component="img"
                height="20%"
                image={post.post_img}
                alt={post.post_img_alt}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.descripcion}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder  />} checkedIcon={<Favorite />} />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
    ))}
    </>
  )}


export default Post