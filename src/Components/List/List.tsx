import React from 'react'
import { getDisplayableDateString, isTimestamp } from '../../utils/utils';
import { listProps } from './List.types';
import "./List.css";
const List: React.FC<listProps> = ({title, subTitle, data}) => {
    const renderItem = ( item: any ) =>{
        if (isTimestamp(item)){
            return getDisplayableDateString(item);
        }
        return item;
    }
  return (
    <div>
        {data.map((item, index) => (
            <div key={index} className="list-item">
            <h3>{title ? renderItem(item[title]): renderItem(Object.values(item)[0])}</h3>
            <p>{subTitle ? renderItem(item[subTitle]): renderItem(Object.values(item)[1])}</p>
            </div>
        ))}
    </div>
  )
}

export default List;
