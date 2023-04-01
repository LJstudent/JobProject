import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    Main: undefined;
    UserOptions: undefined;
  };

export type Props = StackScreenProps<RootStackParamList, 'Main', 'UserOption'>;

export type RootBottomParamList = {
  UserProfile: undefined;
  UserSettings: undefined;
  JobApplyings: undefined;
}

export type BottomProps = BottomTabScreenProps<RootBottomParamList, 'UserProfile'>;

export type ListProps = StackScreenProps<RootBottomParamList, 'UserProfile'>;