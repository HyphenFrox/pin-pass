import { styled } from "@mui/system";
import { Checkbox } from "@mui/material";

const SettingCheckBox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
}));

export default SettingCheckBox;
