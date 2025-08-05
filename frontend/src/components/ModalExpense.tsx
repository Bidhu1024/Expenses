import {
  Box,
  Modal,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";

import { useState, type FC } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
type Modal = {
  open: boolean;
  setOpen: (val: boolean) => void;
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 0.6,
};

const ModalExpense: FC<Modal> = ({ open, setOpen }) => {
  const [category, setCategory] = useState<string>("No Category");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>Expense List</h2>
        <Typography>Title</Typography>
        <TextField
          name="title"
          placeholder="Enter title"
          size="small"
          fullWidth
        />
        <Typography>Amount</Typography>
        <TextField
          name="amount"
          placeholder="Enter Amount"
          size="small"
          fullWidth
        />
        <Typography>Category</Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              size="small"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography>Date</Typography>

        <Typography>Notes</Typography>
        <TextareaAutosize name="title" placeholder="Enter title" />
        <Button>Cancel</Button>
        <Button>Save</Button>
      </Box>
    </Modal>
  );
};

export default ModalExpense;
