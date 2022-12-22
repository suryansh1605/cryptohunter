import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    margin:'6rem 0',
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#eebc1d",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontSize:'1.2rem',
              fontWeight:'bold'
            }}
          >
           ~ : By : ~
          </Typography>
          <Typography variant="subtitle2"
            style={{
              color: "#eebc1d",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontSize:'1.2rem',
            }}>
              
            </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;