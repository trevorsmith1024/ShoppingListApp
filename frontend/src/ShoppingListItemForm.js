import React, { useState, useCallback } from 'react';

import { Typography, Box, Button, FormControl, FormControlLabel, TextField, InputLabel, Select, MenuItem, InputAdornment, Checkbox } from '@mui/material';
import { PrimaryButton, TextButton } from './Utils'

export default function ShoppingListItemForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(initialData || {
    name: '', description: '', count: '', purchased: false
  }) 

  const updateField = (fieldName, value) =>
    setFormData({ ...formData, [fieldName]: value })

  const handleNameChange = useCallback(e => updateField('name', e.target.value));
  const handleDescChange = useCallback(e => updateField('description', e.target.value));
  const handleCountChange = useCallback(e => updateField('count', e.target.value));
  const handlePurchasedChange = useCallback(e => updateField('purchased', e.target.checked))

  const validInput = formData.name && formData.description && formData.count;

  const operationName = initialData ? 'Edit' : 'Add';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 2}}>
      <div>
        <Typography variant='strong1'>
          {operationName} an Item
        </Typography>
        <Typography variant='subtitle1' sx={{color: 'text.secondary'}}>
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
      { initialData && (
        <FormControlLabel
          control={<Checkbox checked={formData.purchased} onChange={handlePurchasedChange} />}
          label="Purchased" />
      )}
      <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 1, marginTop: 'auto'}}>
        <TextButton onClick={onCancel}>
          Cancel
        </TextButton>
        <PrimaryButton disabled={!validInput} variant='contained' onClick={() => onSubmit(formData)}>
          Send
        </PrimaryButton>
      </Box>
    </Box>
  )
}
