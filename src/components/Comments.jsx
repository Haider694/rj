import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Stack, Typography } from "@mui/material";
import { BsFillSendFill } from "react-icons/bs";
import CommentTextLoder from "./CommentTextLoder";

const CommentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [comment, setComment] = useState([]);
  const onSubmit = (data) => {
    setComment([...comment, data.comment]);
    reset();
  };

  return (
    <Box width="100%" height="auto">
      <Box width="auto">
        <Typography variant="h6" color="#fdd835">
          <b>All Comments</b>
        </Typography>
      </Box>
      <Box width="100%">{comment && <CommentTextLoder mess={comment} />}</Box>
      <Box mt={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="row">
            <Box width={5 / 6}>
              <TextField
                multiline
                label="Leave a comment"
                {...register("comment", { required: true })}
                sx={{
                  ".MuiOutlinedInput-root": { borderRadius: 10, width: "100%" },
                }}
              />
            </Box>

            <Box width={1 / 5}>
              <Button
                type="submit"
                endIcon={<BsFillSendFill size={40} />}
              ></Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default CommentForm;
