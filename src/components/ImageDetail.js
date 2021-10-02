import * as React from "react";
import { useSelector } from "react-redux";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Modal,
} from "@mui/material";
import Typography from '@mui/material/Typography';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImageDetail(props) {
  const image = useSelector((state) => state?.filter?.modalImg?.[0]);
  const { open, handleClose } = props;

  React.useEffect(() => {
    //reload
  }, [image]);
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardActionArea>
              {image?.img && (
                <CardMedia
                  component="img"
                  image={image?.img}
                  alt={image?.title}
                />
              )}
              <CardContent>
                <Typography variant="h4" color="text.secondary">
                  {image?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${image?.description}
                </Typography>
                <br />
                <span>{`Downvotes: ${image?.downvotes || 0}`}</span>
                <br />
                <span>{`Score: ${image?.score || 0}`}</span>
                <br />
                <span>{`Upvotes: ${image?.upvotes || 0}`}</span>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
