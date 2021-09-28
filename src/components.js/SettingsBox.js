import { styled, Box } from "@mui/system";

const SettingsBox = styled(Box)(({ theme }) => ({
  padding: "0.5em",
  display: "flex",
  alignItems: "center",
  gap: "0.5em",
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
}));

export default SettingsBox;
