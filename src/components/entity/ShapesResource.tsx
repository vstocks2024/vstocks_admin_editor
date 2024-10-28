import { StoreContext } from '@/store';
import { observable } from 'mobx'
import React from 'react'
type ShapesResourceProps={
  shapetype:string;
  index:number;
}
const ShapesResource = observable(({shapetype,index}:ShapesResourceProps) => {
  const store = React.useContext(StoreContext);
  return (
    <div>
      
    </div>
  )
});

export default ShapesResource
