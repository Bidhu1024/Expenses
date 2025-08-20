import { type FC } from "react";
import { FcBullish } from "react-icons/fc";
import { Box, Stack, Typography, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteExpense, getExpenses } from "../../api/expense";
interface Card {
  dataz: any;
}

const ExpenseCard: FC<Card> = ({ dataz }) => {
  const handleDelete = async (id: string) => {
 try {
  await deleteExpense(id)
await getExpenses()
 } catch (error) {
  console.log(error)
 }
  };
  return (
    <Box
      sx={{
        height: "15rem",
        width: "20rem",
        bgcolor: "#2E3944",
        borderRadius: "16px",
        p: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        position: "relative",
      }}
      key={dataz?._id}
    >
      {/* Top section with Icon + Title */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <FcBullish size={32} />
        <Typography variant="h6" fontWeight="bold">
          {dataz?.title}
        </Typography>
      </Stack>

      {/* Middle Section */}
      <Stack spacing={1} mt={1}>
        <Chip
          label={dataz?.category}
          sx={{
            bgcolor: "#00ADB5",
            color: "white",
            fontWeight: "bold",
            alignSelf: "flex-start",
          }}
          size="small"
        />

        <Typography variant="h5" fontWeight="bold" color="#FFD369">
          ₹ {dataz?.amount}
        </Typography>
      </Stack>

      {/* Notes Section */}
      <Box
        sx={{
          mt: 0.4,
          p: 1.5,
          bgcolor: "rgba(255,255,255,0.05)",
          borderRadius: "8px",
        }}
      >
        <Typography variant="body2" color="gray">
          {dataz?.notes || "No additional notes"}
        </Typography>
      </Box>
      <DeleteIcon onClick={() => handleDelete(dataz?._id)} sx={{alignSelf:"end", color:"red"}} />
    </Box>
  );
};

export default ExpenseCard;
