import React from 'react'
import { Backdrop, Card, CardMedia } from '@mui/material'
const PromotionBanner = () => {
  const [open, setOpen] = React.useState(true)
  const handleClose = () => setOpen(false)

  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={handleClose}
    >
      <Card sx={{ width: '40vh', mb: 4 }}>
        <CardMedia
          component="img"
          image="src/assets/images/promoImage.webp"
          alt="Description of image"
        />
      </Card>
    </Backdrop>
  )
}

export default PromotionBanner
