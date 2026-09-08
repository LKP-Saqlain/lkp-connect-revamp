import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

import type { CADSlab } from "../../types/incentive.types";

interface Props {
  slabs: CADSlab[];
  progressLabel: string;
  progressPercent: number;
  progressCurrentText: string;
}

const IncentiveSlabsCard = ({
  slabs,
  //   progressLabel,
  //   progressPercent,
  //   progressCurrentText,
}: Props) => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        border: "1px solid #E4E7EC",
        borderRadius: "12px",
        p: 2.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 2 }}>
        <GridViewOutlinedIcon sx={{ fontSize: 16, color: "#185FA5" }} />
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#101828" }}>
          Incentive slabs
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          mb: 2.5,
        }}
      >
        {slabs.map((slab) => (
          <Box
            key={slab.id}
            sx={{
              border: slab.active ? "2px solid #185FA5" : "1px solid #E4E7EC",
              backgroundColor: slab.active ? "#EAF3FD" : "#FFFFFF",
              borderRadius: "10px",
              textAlign: "center",
              py: 2,
            }}
          >
            <Typography sx={{ fontSize: 11.5, color: "#667085", mb: 0.8 }}>
              {slab.range}
            </Typography>
            <Typography
              sx={{ fontSize: 22, fontWeight: 700, color: "#101828" }}
            >
              ₹{slab.rate}
            </Typography>
            <Typography sx={{ fontSize: 11, color: "#98A2B3", mt: 0.3 }}>
              per account
            </Typography>
          </Box>
        ))}
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 0.8,
          border: "1px solid black",
        }}
      >
        <Typography sx={{ fontSize: 12, color: "#185FA5", fontWeight: 500 }}>
          {progressLabel}
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#667085" }}>
          {progressCurrentText}
        </Typography>
      </Box> */}

      {/* <Box
        sx={{
          height: 8,
          borderRadius: "999px",
          backgroundColor: "#E5E7EB",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: `${progressPercent}%`,
            height: "100%",
            backgroundColor: "#185FA5",
          }}
        />
      </Box> */}
    </Box>
  );
};

export default IncentiveSlabsCard;
