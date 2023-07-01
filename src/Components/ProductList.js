import React from 'react'
import { useFilterContext } from '../Context/Filter_Context'
import ListView from './ListView'
import GridView from './GridView';
function ProductList() {
    const {filtered_products:Products,gridView} = useFilterContext();
    
   if(gridView === false){
    return <ListView Products={Products}/>
   }
  return (
    <GridView Products={Products}/>
      
  )
}

export default ProductList