import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  // State để lưu trữ giá trị nhập liệu
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.checkoutLeft}>
        <Image
          source={require('./assets/Checkout.png')} 
          style={styles.checkoutImage}
        />
      </View>

      <View style={styles.checkoutRight}>
        <Image
          source={require('./assets/₹ 1,527.png')} 
          style={styles.checkoutImage}
        />
      </View>

      <View style={styles.rectangle}>
        {/* Phần Credit card */}
        <View style={styles.creditCardSection}>
          <Image
            source={require('./assets/credit.png')} 
            style={styles.icon}
          />
          <Text style={styles.creditCardText}>Credit card</Text>
        </View>

        <View style={styles.applePaySection}>
          <Image
            source={require('./assets/Apple icon.png')} 
            style={styles.icon}
          />
          <Text style={styles.applePayText}>Apple Pay</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Card number</Text>
        <View style={styles.cardNumberContainer}>
          <TextInput
            style={styles.cardNumberInput}
            placeholder="Enter card number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
          {/* Hai icon bên trong ô nhập số series card */}
          <View style={styles.cardIcons}>
            <Image
              source={require('./assets/Master Card Logo.png')} 
              style={styles.cardIcon}
            />
            <Image
              source={require('./assets/Card Icon.png')} 
              style={styles.cardIcon}
            />
          </View>
        </View>
      </View>

      {/* Ô nhập tên chủ thẻ */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Cardholder name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter cardholder name"
          value={cardholderName}
          onChangeText={setCardholderName}
        />
      </View>

      {/* Ô nhập ngày hết hạn và CVV/CVC */}
      <View style={styles.row}>
        <View style={styles.halfInputContainer}>
          <Text style={styles.inputLabel}>Expiry date</Text>
          <TextInput
            style={styles.input}
            placeholder="MM / YY"
            value={expiryDate}
            onChangeText={setExpiryDate}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.halfInputContainer}>
          <Text style={styles.inputLabel}>CVV / CVC</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter CVV"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            secureTextEntry // Ẩn số CVV/CVC
          />
        </View>
      </View>

      {/* Thay thế nút "Pay for the order" bằng ảnh */}
      <TouchableOpacity onPress={() => navigation.navigate('Success')}>
        <Image
          source={require('./assets/Pay4order.png')} // Đường dẫn đến ảnh nút Pay
          style={styles.payButtonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60, // Tạo khoảng trống phía trên để ảnh không bị chồng lên nội dung
  },
  // Ảnh Checkout góc trên bên trái
  checkoutLeft: {
    position: 'absolute', 
    top: 10, 
    left: 10, 
    width: 100, 
    height: 50, 
  },
  // Ảnh tương tự góc trên bên phải
  checkoutRight: {
    position: 'absolute', 
    top: 10, 
    right: 10, 
    width: 100, 
    height: 50, 
  },
  // Style cho ảnh Checkout
  checkoutImage: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain', // Đảm bảo ảnh không bị méo
  },
  // Rectangle chứa Credit card và Apple Pay
  rectangle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row', // Sắp xếp các phần tử theo chiều ngang
    justifyContent: 'space-between', // Căn đều khoảng cách giữa các phần tử
    alignItems: 'center', // Căn giữa theo chiều dọc
  },
  // Phần Credit card
  creditCardSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Phần Apple Pay
  applePaySection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Icon (ảnh credit card và logo Apple)
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  // Text cho Credit card
  creditCardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Text cho Apple Pay
  applePayText: {
    fontSize: 16,
    color: '#000',
  },
  // Container cho mỗi ô nhập liệu
  inputContainer: {
    marginBottom: 15,
  },
  // Label cho ô nhập liệu
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  // Container cho Card number và các icon
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  // Input cho Card number
  cardNumberInput: {
    flex: 1,
    borderWidth: 0, // Loại bỏ viền của TextInput
  },
  // Container cho các icon bên trong ô nhập số series card
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    width: '48%',
  },
  
  payButtonImage: {
    width: '100%', 
    height: 50, 
    resizeMode: 'contain', // Đảm bảo ảnh không bị méo
  },
});

export default PaymentScreen;