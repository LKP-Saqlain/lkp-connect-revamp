import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchNewClientBusiness } from "@/redux/slices/incentivePeriod/incentivePeriod.thunks";

interface Props {
  empCode: any;
}

const formatINR = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

const extractClientCount = (totalCount: string): string => {
  // "Total (4 clients)" -> "4"
  const match = totalCount.match(/\((\d+)/);
  return match ? match[1] : "0";
};

const NewClientBusiness = ({ empCode }: Props) => {
  const dispatch = useAppDispatch();
  const { newClientBusiness } = useAppSelector(
    (state) => state.incentivePeriod,
  );

  useEffect(() => {
    if (!empCode) return;
    dispatch(fetchNewClientBusiness({ empCode, financialYear: "2026-27" }));
  }, [dispatch, empCode]);

  const clients = newClientBusiness?.data?.newclientDetails ?? [];
  const total = newClientBusiness?.data?.total;

  const summaryCards = [
    {
      id: "new-clients",
      title: "New clients acquired (FY)",
      value: total ? extractClientCount(total.totalCount) : "0",
      icon: (
        <PersonAddAltOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3" }} />
      ),
      color: "#101828",
    },
    {
      id: "broking-revenue",
      title: "Broking revenue",
      value: formatINR(total?.totalBrokingRevenue ?? 0),
      icon: <TrendingUpOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3" }} />,
      color: "#2F80ED",
    },
    {
      id: "non-broking-revenue",
      title: "Non-broking revenue",
      value: formatINR(total?.totalNonBrokingRevenue ?? 0),
      icon: (
        <AccountBalanceOutlinedIcon sx={{ fontSize: 14, color: "#98A2B3" }} />
      ),
      color: "#27AE60",
    },
  ];

  return (
    <Box
      sx={{ mt: 3, mb: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      {/* Summary cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {summaryCards.map((card) => (
          <Box
            key={card.id}
            sx={{
              background: "#FFFFFF",
              border: "1px solid #E4E7EC",
              borderRadius: "12px",
              p: 2,
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 1 }}
            >
              {card.icon}
              <Typography sx={{ fontSize: 12, color: "#667085" }}>
                {card.title}
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: 24, fontWeight: 700, color: card.color }}
            >
              {card.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Table */}
      <Box
        sx={{
          background: "#FFFFFF",
          border: "1px solid #E4E7EC",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
            borderBottom: "1px solid #EAECF0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
            <PersonAddAltOutlinedIcon sx={{ color: "#185FA5", fontSize: 16 }} />
            <Typography
              sx={{ fontSize: 13, fontWeight: 600, color: "#101828" }}
            >
              New client business (FY)
            </Typography>
          </Box>
          {total && (
            <Typography sx={{ fontSize: 11, color: "#667085" }}>
              {total.totalCount}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "0.4fr 2fr 1.4fr 1.4fr 1.4fr 1.4fr",
            px: 2,
            py: 1,
            borderBottom: "1px solid #EAECF0",
          }}
        >
          <Typography sx={{ fontSize: 11, color: "#667085" }}>#</Typography>
          <Typography sx={{ fontSize: 11, color: "#667085" }}>
            Account
          </Typography>
          <Typography sx={{ fontSize: 11, color: "#667085" }}>
            Activation date
          </Typography>
          <Typography sx={{ fontSize: 11, color: "#667085" }}>
            Broking revenue
          </Typography>
          <Typography sx={{ fontSize: 11, color: "#667085" }}>
            Non-broking revenue
          </Typography>
          <Typography
            sx={{ fontSize: 11, color: "#667085", textAlign: "right" }}
          >
            Total revenue
          </Typography>
        </Box>

        <Box sx={{ maxHeight: 420, overflowY: "auto" }}>
          {clients.map((client, index) => (
            <Box
              key={client.clientCode}
              sx={{
                display: "grid",
                gridTemplateColumns: "0.4fr 2fr 1.4fr 1.4fr 1.4fr 1.4fr",
                alignItems: "center",
                px: 2,
                py: 1.2,
                borderBottom: "1px solid #F2F4F7",
              }}
            >
              <Typography sx={{ fontSize: 11, color: "#98A2B3" }}>
                {index + 1}
              </Typography>
              <Typography
                sx={{ fontSize: 12.5, fontWeight: 500, color: "#101828" }}
              >
                {client.clientName}
              </Typography>
              <Typography sx={{ fontSize: 12, color: "#344054" }}>
                {client.activationOpeningDate}
              </Typography>
              <Typography sx={{ fontSize: 12.5, color: "#2F80ED" }}>
                {formatINR(client.brokingRevenue)}
              </Typography>
              <Typography sx={{ fontSize: 12.5, color: "#27AE60" }}>
                {formatINR(client.nonBrokingRevenue)}
              </Typography>
              <Typography
                sx={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "#101828",
                  textAlign: "right",
                }}
              >
                {formatINR(client.totalRevenue)}
              </Typography>
            </Box>
          ))}
        </Box>

        {total && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "0.4fr 2fr 1.4fr 1.4fr 1.4fr 1.4fr",
              alignItems: "center",
              px: 2,
              py: 1.4,
              backgroundColor: "#F8FAFC",
              borderTop: "1px solid #EAECF0",
            }}
          >
            <Typography />
            <Typography
              sx={{ fontSize: 12.5, fontWeight: 700, color: "#101828" }}
            >
              Total
            </Typography>
            <Typography />
            <Typography
              sx={{ fontSize: 12.5, fontWeight: 700, color: "#2F80ED" }}
            >
              {formatINR(total.totalBrokingRevenue)}
            </Typography>
            <Typography
              sx={{ fontSize: 12.5, fontWeight: 700, color: "#27AE60" }}
            >
              {formatINR(total.totalNonBrokingRevenue)}
            </Typography>
            <Typography
              sx={{
                fontSize: 12.5,
                fontWeight: 700,
                color: "#101828",
                textAlign: "right",
              }}
            >
              {formatINR(
                total.totalBrokingRevenue + total.totalNonBrokingRevenue,
              )}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NewClientBusiness;
