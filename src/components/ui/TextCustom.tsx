import { Text, View } from 'react-native';

interface ITextCustomProps {
    title: string;
    size?: string;
}

export const TextCustom = ({ title }: ITextCustomProps) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};
