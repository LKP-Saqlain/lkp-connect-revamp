import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  isCollapsed: boolean;
  isMobileOpen: boolean;
}

const initialState: SidebarState = {
  isCollapsed: false,
  isMobileOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",

  initialState,

  reducers: {
    toggleSidebar(state) {
      state.isCollapsed = !state.isCollapsed;
    },

    collapseSidebar(state) {
      state.isCollapsed = true;
    },

    expandSidebar(state) {
      state.isCollapsed = false;
    },

    openMobileSidebar(state) {
      state.isMobileOpen = true;
    },

    closeMobileSidebar(state) {
      state.isMobileOpen = false;
    },

    setMobileSidebar(state, action: PayloadAction<boolean>) {
      state.isMobileOpen = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  collapseSidebar,
  expandSidebar,
  openMobileSidebar,
  closeMobileSidebar,
  setMobileSidebar,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
