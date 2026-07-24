import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChanges";

export const iconMapper = {
  dashboard: DashboardRoundedIcon,

  people: PeopleRoundedIcon,

  payments: PaymentsRoundedIcon,

  settings: SettingsRoundedIcon,

  description: DescriptionRoundedIcon,

  inventory: InventoryRoundedIcon,

  track_changes: TrackChangesRoundedIcon,
} as const;

//const Icon = iconMapper[item.icon];    later gonna uncommented this after im getting resss from api
