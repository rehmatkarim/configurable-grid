export interface gridPropTypes {
    columns: columnTypes[];
    api: string;
    ListTitleColumn?: string;
    ListSubTitleColumn?: string;
  }
export interface columnTypes {
    label: string;
    key: string;
    type: string;
}