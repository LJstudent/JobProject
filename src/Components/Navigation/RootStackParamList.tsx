import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    Main: undefined;
    UserOptions: undefined;
  };

export type Props = StackScreenProps<RootStackParamList, 'Main', 'UserOption'>;