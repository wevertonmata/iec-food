import { Picker } from '@react-native-picker/picker'; // Instale: expo install @react-native-picker/picker
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from './styles';

export default function HomeScreen() {
  const [selectedRestaurant, setSelectedRestaurant] = useState('1');

  const restaurants = [
    { id: '1', name: 'Restaurante Sabor Brasil' },
    { id: '2', name: 'Delícias do Nordeste' }
  ];

  const menuItems = [
    {
      id: '1',
      restaurantId: '1',
      name: 'Feijoada',
      description: 'Feijão preto com carnes variadas, servido com arroz.',
      price: 'R$ 25,00',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=80&q=80'
    },
    {
      id: '2',
      restaurantId: '1',
      name: 'Moqueca',
      description: 'Peixe cozido com leite de coco, azeite de dendê e temperos.',
      price: 'R$ 30,00',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=80&q=80'
    },
    {
      id: '3',
      restaurantId: '2',
      name: 'Escondidinho',
      description: 'Purê de mandioca com carne seca desfiada.',
      price: 'R$ 22,00',
      image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?auto=format&fit=crop&w=80&q=80'
    }
  ];

  const filteredItems = menuItems.filter(item => item.restaurantId === selectedRestaurant);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedRestaurant}
        onValueChange={setSelectedRestaurant}
        style={{ marginBottom: 16, borderColor: '#000', borderWidth: 2, borderRadius: 8 }}
      >
        {restaurants.map(rest => (
          <Picker.Item key={rest.id} label={rest.name} value={rest.id} />
        ))}
      </Picker>

      <ScrollView>
        {filteredItems.map(item => (
          <View key={item.id} style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Image
                source={{ uri: item.image }}
                style={styles.menuItemImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemName}>{item.name}</Text>
              <Text style={styles.menuItemDescription}>{item.description}</Text>
              <Text style={styles.menuItemPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
        <View style={styles.TextPadding}>
          <TouchableOpacity
              style={styles.ButtomBlack}
              onPress={() => { /* ação de adicionar produto */ }}
          >
              <Text style={styles.ButtomTitleBlack}>Adicionar Produto</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
