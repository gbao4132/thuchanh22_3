import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Ảnh Success to hơn gấp 3 lần */}
      <Image
        source={require('./assets/Success.png')} // Đường dẫn đến ảnh Success
        style={styles.image}
      />

      {/* Tiêu đề và thông báo */}
      <Text style={styles.header}>Payment Success, Yay!</Text>
      <Text style={styles.message}>
        We will send order details and invoice in your contact no. and registered email.
      </Text>

      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Dowload Invoice</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => {}}> {/* Thêm chức năng tải invoice tại đây */}
        <View style={styles.downloadInvoiceContainer}>
          <Image
            source={require('./assets/blue.png')} // Đường dẫn đến ảnh hình chữ nhật màu xanh
            style={styles.downloadInvoiceImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // Ảnh Success to hơn gấp 3 lần
  image: {
    width: 300, // Tăng kích thước gấp 3 lần (giả sử kích thước ban đầu là 100)
    height: 300, // Tăng kích thước gấp 3 lần
    resizeMode: 'contain', // Đảm bảo ảnh không bị méo
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  // Nút Check Details
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Container cho ảnh và chữ Download Invoice
  downloadInvoiceContainer: {
    position: 'relative', // Để chữ có thể đè lên ảnh
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Chiều rộng bằng với container
  },
  // Style cho ảnh hình chữ nhật màu xanh
  downloadInvoiceImage: {
    width: '100%', // Chiều rộng 100%
    height: 50, // Chiều cao của ảnh
    resizeMode: 'cover', // Đảm bảo ảnh không bị méo
  },
  // Style cho chữ "Download Invoice" đè lên ảnh
  downloadInvoiceText: {
    position: 'absolute', // Đặt vị trí tuyệt đối để chữ đè lên ảnh
    color: '#fff', // Màu chữ trắng
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;