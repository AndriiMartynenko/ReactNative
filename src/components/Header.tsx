import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

interface IHeaderProps {
	title: string;
}

const Header: FC<IHeaderProps> = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{props.title}</Text>
		</View >
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 120,
		paddingTop: 20,
		color: "#fff",
		backgroundColor: "rgba(0,0,0, 0.9)",
		fontWeight: "bold",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
		fontSize: 24
	}
});
export default Header;