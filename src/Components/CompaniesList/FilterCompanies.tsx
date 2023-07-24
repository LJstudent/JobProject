import { Center } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

interface IOuterProps {
    jobTitle: string[];
};


export default function FilterCompanies(props: IOuterProps) {
    const { jobTitle } = props;
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleQueryChange = (text: string) => {
        setQuery(text);
        if (text.trim() === '') {
            // Clear suggestions when query is empty
            setSuggestions([]);
        } else {
            // Perform data filtering based on the query
            const filteredData = jobTitle.filter((item) =>
                item.toLowerCase().includes(text.toLowerCase())
            );
            // Update the filtered suggestions
            setSuggestions(filteredData);
            // Clear the suggestions when query changes
            if (filteredData.length === 1 && filteredData[0] === text) {
                setSuggestions([]);
            }
        }
    };

    return (
        <Center mt={5} mb={16}>
            <Autocomplete
                autoCorrect={false}
                value={query}
                data={suggestions}
                onChangeText={handleQueryChange}
                flatListProps={{
                    keyboardShouldPersistTaps: 'always',
                    keyExtractor: (item) => item,
                    renderItem: (({ item, index }) => (
                        <TouchableOpacity key={index} onPress={() => {
                            setQuery(item);
                            setSuggestions([]); // Clear suggestions after selecting an item
                        }}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    ))
                }}
            />
        </Center>
    );
} 