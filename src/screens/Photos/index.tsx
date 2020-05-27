import React, { FC } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from '../../components/Header';

const styles = StyleSheet.create({
	text: { flex: 2, marginTop: -35, textAlign: "justify" },
	vue_new: { width: 150, height: 100, marginLeft: 10, marginTop: -35 },
	angular: { flex: 2, width: 150, height: 130, marginTop: -35, marginRight: 10 },
	react_new: { width: "100%", height: 200, borderRadius: 50 },
	row: {
		flexDirection: "row",
		paddingVertical: 30,
		paddingHorizontal: 20
	},
});

interface IPhotos { }

const Photos: FC<IPhotos> = (props) => {
	return (
		<ScrollView stickyHeaderIndices={[0]}>
			<Header title="TodoApp" />
			<View>
				<View>
					<View style={styles.row}>
						<Image
							source={require('../../assets/react_new.png')}
							style={styles.react_new}
						/>
					</View>
					<View style={styles.row}>
						<Image
							source={require('../../assets/angular.png')}
							style={styles.angular}
						/>
						<Text style={styles.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex distinctio porro praesentium corrupti a! Doloremque impedit blanditiis dolorem nihil!
          </Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maiores est incidunt atque necessitatibus enim, delectus doloremque ullam esse, aliquam aperiam quas obcaecati exercitationem mollitia. Incidunt adipisci quasi inventore.
          </Text>
						<Image
							source={require('../../assets/vue.png')}
							style={styles.vue_new}
						/>
					</View>
					<View style={styles.row}>
						<Text style={styles.text}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fuga aut quaerat fugit consequuntur necessitatibus odio deserunt blanditiis, iste molestias laudantium assumenda debitis placeat quidem dolore qui, consequatur, modi aliquam mollitia? Optio dicta recusandae non corrupti veniam veritatis facilis! Quae fugiat minus illum commodi, optio alias unde recusandae repellat sint impedit nulla eligendi, ea, consectetur beatae saepe a ex corrupti odio fugit provident? Dignissimos, minus, unde, quibusdam rem ex doloribus nulla maxime veritatis vitae repellendus maiores qui eos sint ratione rerum! Fuga qui cumque ipsa repudiandae exercitationem molestiae? Nulla cumque blanditiis sunt repudiandae soluta eius tenetur culpa provident maxime maiores!
          </Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Photos;