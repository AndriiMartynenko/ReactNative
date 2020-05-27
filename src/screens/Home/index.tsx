import React, { FC } from 'react';
import { Button, View, Image, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';
import Header from '../../components/Header';

const WelcomeText = styled.Text`
		padding: 30px;
    font-size: 18px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 200px;
		height: 200px;
		margin: 20px auto;
    borderRadius: 100px;
`;

interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
	return (
		<ScrollView stickyHeaderIndices={[0]}>
			<Header title="TodoApp" />
			<View>
				<CustomImage
					source={require('../../assets/logo.png')}
				/>
				<WelcomeText>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque cum impedit animi, dolorem unde cupiditate odio ullam ipsam placeat iure totam tempora error aliquid nulla autem nesciunt vitae facilis dolor.
					Optio rem, quibusdam ex nihil, sapiente ratione, doloribus voluptatibus autem cupiditate repellat cumque odio voluptatem reiciendis iure doloremque maxime molestiae enim quod eaque. Ipsam molestias ea fuga mollitia, quisquam commodi.
					Non consectetur tempore deleniti debitis rem dolore eveniet praesentium adipisci sequi quasi vitae error, enim, sed nulla rerum quo aspernatur soluta quam! Ad asperiores eligendi officiis similique beatae quia illum!
					Dolores illo quae perspiciatis magnam. Dolorem id soluta quod illo cumque! Exercitationem eaque qui corporis maiores nesciunt dignissimos dicta, omnis minus a perspiciatis tempore cumque perferendis, doloremque quam? Molestiae, et!
					Magnam maiores adipisci nam commodi perspiciatis blanditiis veniam ullam libero omnis ex nisi esse pariatur, sint distinctio debitis, illum obcaecati vitae soluta rerum fugit. Odit alias laudantium debitis ad corporis?
					Dolor iste, in odio laudantium atque magnam ipsum accusantium laborum, officia quisquam sit ratione hic labore beatae. Autem voluptatum quas perspiciatis, ducimus mollitia inventore ullam quia dicta excepturi doloremque amet.
					Culpa reprehenderit cupiditate, ducimus officiis voluptatem quis, ea laudantium, molestias nesciunt incidunt maiores veniam vitae ratione iste! Soluta voluptatibus porro cum quidem ut quisquam consectetur cupiditate. Tenetur unde fugit molestias!
					Ex earum repellat excepturi. Nostrum, hic, iure molestiae quis expedita, pariatur deserunt repudiandae provident consectetur possimus officia at dignissimos? Ipsam aliquam nulla repellendus quod dolore odit, quo harum tempore libero.
					Exercitationem qui rerum aliquam excepturi alias possimus nesciunt nihil, accusantium est placeat corporis voluptatibus consequuntur saepe fugiat dignissimos id libero quasi quaerat. Iusto necessitatibus voluptates nemo, unde ipsam mollitia a!
					Magni atque, molestiae adipisci quis ipsa ab eveniet, dolores eaque ex commodi, dolore iusto recusandae. Pariatur ad porro voluptatibus architecto consectetur accusamus quis eos? Neque omnis vel blanditiis recusandae quidem.
          </WelcomeText>
			</View>
		</ScrollView>
	);
};

export default Home;