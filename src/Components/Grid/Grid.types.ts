export interface gridPropTypes {
    columns: columnTypes[];
    api: string;
    ListTitleColumn?: string;
    ListSubTitleColumn?: string;
    positiveColor?: string;
    negativeColor?: string;
  }
export interface columnTypes {
    label: string;
    key: string;
    type: string;
}