import { Meta, StoryObj } from "@storybook/react";
import DialogComponent from ".";
import { Edit, Edit2, MoreVertical, Trash } from "lucide-react";
import { Button } from "../button";

const meta = {
  title: "dialog",
  component: DialogComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DialogComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EditDialog: Story = {
  args: {
    title: "Edit directory name",
    dialogtype: "edit",
    children: <Edit size={20} className="cursor-pointer" />,
  },
};

export const CreateDialog: Story = {
  args: {
    title: "create directory name",
    dialogtype: "create",
    children: <Button>New</Button>,
  },
};

export const DeleteDialog: Story = {
  args: {
    title: "Are you sure?",
    description: "This task will be deleted permanetly",
    dialogtype: "delete",
    children: <Trash size={20} className="cursor-pointer" />,
  },
};
