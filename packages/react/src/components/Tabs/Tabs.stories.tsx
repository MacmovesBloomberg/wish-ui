import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";
import { TabList } from "./TabList";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";

const meta: Meta<typeof Tabs> = {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["line", "enclosed"],
      description: "The visual style of the tabs",
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The layout orientation of the tabs",
    },
  },
  args: {
    variant: "line",
    orientation: "horizontal",
    defaultValue: "account",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    variant: "line",
    orientation: "horizontal",
    defaultValue: "account",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab value="account">Account</Tab>
        <Tab value="password">Password</Tab>
        <Tab value="settings" disabled>Settings</Tab>
      </TabList>
      <TabPanel value="account">Manage your account settings here.</TabPanel>
      <TabPanel value="password">Change your password here.</TabPanel>
      <TabPanel value="settings">Settings are disabled.</TabPanel>
    </Tabs>
  ),
};

export const Enclosed: Story = {
  args: {
    variant: "enclosed",
    defaultValue: "overview",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab value="overview">Overview</Tab>
        <Tab value="analytics">Analytics</Tab>
        <Tab value="reports">Reports</Tab>
      </TabList>
      <TabPanel value="overview">Overview content.</TabPanel>
      <TabPanel value="analytics">Analytics content.</TabPanel>
      <TabPanel value="reports">Reports content.</TabPanel>
    </Tabs>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    defaultValue: "general",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab value="general">General</Tab>
        <Tab value="security">Security</Tab>
        <Tab value="notifications">Notifications</Tab>
      </TabList>
      <div style={{ paddingLeft: "20px" }}>
        <TabPanel value="general">General settings.</TabPanel>
        <TabPanel value="security">Security settings.</TabPanel>
        <TabPanel value="notifications">Notification preferences.</TabPanel>
      </div>
    </Tabs>
  ),
};
