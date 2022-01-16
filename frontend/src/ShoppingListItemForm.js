import React, { useState } from 'react';

import { Typography, Container, Box, Button, Modal } from '@mui/material';

export default function ShoppingListItemForm({ initialData, onSubmit, onCancel }) {
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
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
      <input type='text' onChange={handleNameChange} value={formData.name}/>
      <input type='text' onChange={handleDescChange} value={formData.description}/>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: 'auto'}}>
        <Button onClick={onCancel}>
          Cancel
        </Button>
        <Button variant='contained' onClick={() => onSubmit(formData)}>
          Send
        </Button>
      </Box>
    </Box>
  )
}
