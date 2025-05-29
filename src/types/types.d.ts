export type Directory = {
  id: string;
  name: string;
  userId: string;
};

export type Task ={
  id: string;
  title: string;
  description: string | null;
  dueDate: string | Date;
  completed: boolean;
  important: boolean;
  directoryId: string | null ;
  directoryName?: string | null;
}