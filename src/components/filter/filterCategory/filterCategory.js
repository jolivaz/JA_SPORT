import React from 'react'
import { filterCategoryProductsAction } from '../../../actions/productsActions'
import { useDispatch } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function FilterCategory({itemCategory, index, setCategory, category}) {
    //dispatch filter
    const dispatch = useDispatch();
    const agregarBusqueda = (filter) => dispatch( filterCategoryProductsAction(filter) );

  const handleChangeCategory = (e,index) => {
    e.preventDefault()
    let newCategory = category
    let categoryActive = []
    newCategory[index].active  = !newCategory[index].active
    setCategory(newCategory)
    newCategory.map(category =>
      category.active && categoryActive.push(category.name) 
    )
    agregarBusqueda(categoryActive)
  };

  return (
    <div>
        <FormControlLabel 
            control={<Checkbox checked={itemCategory.active} 
            value={itemCategory.name} 
            onChange={e => handleChangeCategory(e,index)} />} 
            label={itemCategory.name} />
    </div>

  );
}

export default FilterCategory;
