import { StyleSheet } from "@react-pdf/renderer";

export default StyleSheet.create({
  view: {
    position: "relative",
    display: "flex",
    flexDirection: 'row',
    backgroundColor: "white",
    padding: 15,
  },

  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  contentContainer: {
    width: "65%",
  },
  imageContainer: {
    width: "35%",
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },

  position: {
    letterSpacing: 1.5,
    bottom: 5,
  },

  positionColor: {
    color: "#ffb400",
  },

  primaryTitle: {
    letterSpacing: 0.75,
    lineHeight: 1.5,
  },

  content: {
    fontSize: 10,
    color: "#767676",
    lineHeight: 1.5,
  },
});
