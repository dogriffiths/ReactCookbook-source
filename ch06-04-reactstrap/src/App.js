import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import ResponsiveDialog from './ResponsiveDialog'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'

import gallery from './gallery.json'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  galleryGrid: {
    paddingTop: theme.spacing(4),
  },
  galleryItem: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // maxWidth: '200px'
  },
  galleryImage: {
    paddingTop: '54%',
  },
  galleryItemDescription: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}))

function App() {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedImage, setSelectedImage] = useState()
  const classes = useStyles()

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
          >
            Material-UI Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.galleryGrid}>
          <Grid container spacing="4">
            {gallery.map((item, i) => {
              return (
                <Grid item key={`photo-${i}`} xs={12} sm={3} lg={2}>
                  <Card className={classes.galleryItem}>
                    <CardMedia
                      image={item.image}
                      className={classes.galleryImage}
                      title="A photo"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                      >
                        Image
                      </Typography>
                      <Typography
                        className={classes.galleryItemDescription}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          setSelectedImage(item)
                          setShowDetails(true)
                        }}
                        color="primary"
                      >
                        <ImageSearchIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
      <ResponsiveDialog
        open={showDetails}
        title="Details"
        onClose={() => setShowDetails(false)}
      >
        <img
          src={selectedImage && selectedImage.image}
          alt="From PicSum"
        />
        <Typography>
          {selectedImage && selectedImage.description}
        </Typography>
      </ResponsiveDialog>
    </div>
  )
}

export default App
