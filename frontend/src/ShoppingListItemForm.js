import React, { useState } from 'react';

export default function ShoppingListItemForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(initialData || {
    name: '', description: '', count: 1
  }) 

  const updateField = (fieldName, e) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    })
  }

  const handleNameChange = (e) => updateField('name', e);
  const handleDescChange = (e) => updateField('description', e);

  return (
    <div>
      <input type='text' onChange={handleNameChange} value={formData.name}/>
      <input type='text' onChange={handleDescChange} value={formData.description}/>
      <button onClick={() => onSubmit(formData)}>
        Send
      </button>
    </div>
  )
}
