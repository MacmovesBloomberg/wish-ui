import React from "react";
import { Tabs } from "./Tabs";
import { TabList } from "./TabList";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";

export default { title: "Components/Navigation/Tabs" };

export const Default = () => (
  <Tabs defaultValue="account">
    <TabList>
      <Tab value="account">Account</Tab>
      <Tab value="password">Password</Tab>
      <Tab value="settings" disabled>Settings</Tab>
    </TabList>
    <TabPanel value="account">Manage your account settings here.</TabPanel>
    <TabPanel value="password">Change your password here.</TabPanel>
  </Tabs>
);

export const Vertical = () => (
  <Tabs defaultValue="tab1" orientation="vertical">
    <TabList>
      <Tab value="tab1">General</Tab>
      <Tab value="tab2">Security</Tab>
      <Tab value="tab3">Notifications</Tab>
    </TabList>
    <div style={{ paddingLeft: "20px" }}>
      <TabPanel value="tab1">General content</TabPanel>
      <TabPanel value="tab2">Security settings</TabPanel>
      <TabPanel value="tab3">Notification preferences</TabPanel>
    </div>
  </Tabs>
);