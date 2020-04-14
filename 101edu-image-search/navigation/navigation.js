
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ImageApp from '../app/app';
import DetailsPage from '../components/DetailsPage';

const screens = {
	ImageApp: {
		screen: ImageApp
	},
	DetailsPage: {
		screen: DetailsPage
	}
};

const AppContainer = createStackNavigator(screens);

export default createAppContainer(AppContainer);