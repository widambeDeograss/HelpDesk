const classes = useStyles();
return (
  <Container>
    <ButtonGroup color="primary" variant="contained">
      <Button>
        <AcUnitOutlined></AcUnitOutlined>
      </Button>
      <Button>
        delete
        <Delete />
      </Button>
      <Button className={classes.btn}>three</Button>
    </ButtonGroup>
    <Typography className={classes.btn} variant="h6">
      ocay anyway nomater how ths must be done
    </Typography>

    <form>
      <TextField
        label="name"
        variant="outlined"
        fullWidth
        required
      ></TextField>
      <br />
      <br />
      <br />
      <TextField
        label="content dsc"
        variant="outlined"
        fullWidth
        rows={5}
        required
      ></TextField>
    </form>
  </Container>