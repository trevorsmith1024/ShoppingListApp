import React, { useState, useCallback } from 'react';

import { Typography, Box, Button, FormControl, TextField, InputLabel, Select, MenuItem, InputAdornment } from '@mui/material';

export default function ShoppingListItemForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(initialData || {
    name: '', description: '', count: ''
  }) 

  const updateField = (fieldName, e) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    })
  }

  const handleNameChange = (e) => updateField('name', e);
  const handleDescChange = (e) => updateField('description', e);
  const handleCountChange = useCallback(e => updateField('count', e));

  const validInput = formData.name && formData.description && formData.count;

  const operationName = initialData ? 'Edit' : 'Add';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 2}}>
      <div>
        <Typography variant='subtitle1'>
          {operationName} an Item
        </Typography>
        <Typography variant='subtitle2'>
          {operationName} your {!initialData && 'new'} item below
        </Typography>
      </div>
      <TextField label='Name' onChange={handleNameChange} value={formData.name}/>
      <TextField multiline
        rows={5}
        inputProps={{
          maxLength: 100,
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end" sx={{
            position: 'absolute',
            padding: 'inherit',
            bottom: 0,
            right: 0,
          }}>
            {formData.description.length}/100
          </InputAdornment>,
        }}
        label='Description'
        onChange={handleDescChange}
        value={formData.description}/>
      <FormControl>
        <InputLabel id="shoppinglist-count-input-label">Count</InputLabel>
        <Select
          labelId="shoppinglist-count-input-label"
          id="shoppinglist-count-input"
          value={formData.count}
          label="Count"
          onChange={handleCountChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: 'auto'}}>
        <Button onClick={onCancel}>
          Cancel
        </Button>
        <Button disabled={!validInput} variant='contained' onClick={() => onSubmit(formData)}>
          Send
        </Button>
      </Box>
    </Box>
  )
}
