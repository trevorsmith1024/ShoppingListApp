import React, { useState } from 'react';

export default function ShoppingListItemForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(initialData || {}) 

  const updateField = (fieldName, e) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    })
  }

  const handleNameChange = (e) => updateField('name', e);
  const handleDescChange = (e) => updateField('description', e);

  return (
    <form onSubmit={() => onSubmit(formData)}>
      <input type='text' onChange={handleNameChange} value={formData.name}/>
      <input type='text' onChange={handleDescChange} value={formData.description}/>
      <input type='submit'/>
    </form>
  )
}
