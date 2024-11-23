import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CriarConta = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState([]);
  const [setValue, setSetValue] = useState(null);

  const handleOpenModal = (type) => {
    let data = [];
    if (type === 'gender') {
      data = ['Masculino', 'Feminino', 'Outro'];
      setSetValue(() => setSelectedGender);
    } else if (type === 'day') {
      data = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
      setSetValue(() => setSelectedDay);
    } else if (type === 'month') {
      data = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ];
      setSetValue(() => setSelectedMonth);
    } else if (type === 'year') {
      data = Array.from({ length: 100 }, (_, i) => `${2024 - i}`);
      setSetValue(() => setSelectedYear);
    }
    setOptions(data);
    setModalVisible(true);
  };

  const handleSelectOption = (item) => {
    setValue(item);
    setModalVisible(false);
  };

  return (
    <LinearGradient
      colors={['#5a7d5a', '#89ad88']}
      start={{ x: 3, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Criar Nova Conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#000"
          secureTextEntry={true}
        />

        <Text style={styles.label}>Gênero:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => handleOpenModal('gender')}
        >
          <Text style={styles.placeholder}>
            {selectedGender || 'Selecione o Gênero'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Data de Nascimento:</Text>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => handleOpenModal('day')}
          >
            <Text style={styles.placeholder}>
              {selectedDay || 'Dia'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => handleOpenModal('month')}
          >
            <Text style={styles.placeholder}>
              {selectedMonth || 'Mês'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => handleOpenModal('year')}
          >
            <Text style={styles.placeholder}>
              {selectedYear || 'Ano'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => handleSelectOption(item)}
                  >
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#a3c6a8',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  placeholder: {
    color: '#aaa',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    maxHeight: '50%',
    padding: 20,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default CriarConta;
