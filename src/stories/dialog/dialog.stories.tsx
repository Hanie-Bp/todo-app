import { Meta, StoryObj } from "@storybook/react";
import DialogComponent from ".";

const meta = {
  title: "dialog",
  component: DialogComponent,
  parameters:{
    layout: "centered",
  }
} satisfies Meta<typeof DialogComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EditDialog: Story = {
    args:{
        title:"Edit directory name",
        dialogtype:"edit"
    }
};

export const CreateDialog: Story = {
    args:{
        title:"create directory name",
        dialogtype:"create"
    }
};

export const DeleteDialog: Story = {
    args:{
        title:"Are you sure?",
        description:"some description",
        dialogtype:"delete"
    }
};