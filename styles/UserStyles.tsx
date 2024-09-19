import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#C98EE7', 
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    backgroundColor: '#C98EE7',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  userGeo: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-Light',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  editButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#36c9d1',
    padding: 10,
    borderRadius: 50,
    zIndex: 1, 
  },
  attendanceContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 1, 
  },
  attendanceTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
  },
  attendanceItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 1, 
  },
  attendanceDate: {
    fontSize: 14,
    color: '#666',
  },
  attendanceProfessional: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginVertical: 5,
  },
  attendanceSubject: {
    fontSize: 14,
    color: '#333',
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
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'poppins-medium',
    marginBottom: 10,
  },
  modalDate: {
    fontSize: 14,
    marginBottom: 5,
  },
  modalProfessional: {
    fontSize: 14,
    marginBottom: 5,
  },
  modalSubject: {
    fontSize: 14,
    marginBottom: 5,
  },
  modalNotes: {
    fontSize: 14,
    marginBottom: 10,
    color: '#212121',
  },
  closeButton: {
    backgroundColor: '#36c9d1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
