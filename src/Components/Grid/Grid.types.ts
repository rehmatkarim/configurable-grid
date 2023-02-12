export interface gridPropTypes {
    columns: columnTypes[];
    api: string;
  }
export interface columnTypes {
    label: string;
    key: string;
    type: string;
}