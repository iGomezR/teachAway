import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import FilterBox from "./FilterBox";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { loadingGallery, showItemOnModal } from "../ducks/filter";
import Typography from '@mui/material/Typography';
import ImageDetail from './ImageDetail';

export default function TitlebarImageList() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.filter.images);

  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    dispatch(showItemOnModal(id));
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(loadingGallery());
  }, [dispatch]);

  const getImage = () => {
    return images?.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item?.title}
          subtitle={item?.description}
          onClick={() => handleOpen(item.id)}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={"Open Image"}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    ))
  }
  return (
    <>
      <Typography variant="h3" component="h4">
        Gallery
      </Typography>
      <FilterBox />
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {getImage()}
      </ImageList>
      <ImageDetail {...{ open, handleOpen, handleClose}}/>
    </>
  );
}
