import CompaniesInfo from './Components/CompaniesInfo/CompaniesInfo';
import { Text } from 'native-base';
import * as React from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { NavigationState, SceneMap, SceneRendererProps, TabBar, TabView } from 'react-native-tab-view';
import CompaniesList from './Components/CompaniesList/CompaniesList';

type State = NavigationState<{
    key: string;
    title: string;
}>;

export default function Main() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Companies' },
        { key: 'second', title: 'Info' },
    ]);

    const renderTabBar = (props: SceneRendererProps & { navigationState: State }) => (
        <TabBar
            {...props}
            renderLabel={({ route }) => (
                <Text style={{ margin: 5 }}>
                    {route.title}
                </Text>
            )}
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            labelStyle={styles.label}
        />
    );

    return (
        <TabView
            navigationState={{
                index,
                routes
            }}
            renderScene={SceneMap({
                first: CompaniesInfo,
                second: CompaniesList,
            })}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#fff'
    },
    indicator: {
        backgroundColor: '#8b5cf6',
    },
    label: {
        fontWeight: '400',
        color: '#1f2937'
    },
});