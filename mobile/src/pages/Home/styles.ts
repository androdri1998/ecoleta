import { StyleSheet } from "react-native";

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#607d8b",
    paddingRight: 30,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#607d8b",
    paddingRight: 30,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: "#b0bec5",
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});
