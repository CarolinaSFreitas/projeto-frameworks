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
    padding: 25,
    width: '85%',
    maxHeight: '75%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.68,
    elevation: 11,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  modalDate: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  modalProfessional: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  modalSubject: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  modalNotes: {
    fontSize: 16,
    marginBottom: 15,
    color: '#212121',
    lineHeight: 22,
  },
  modalTextContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  modalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  modalValueBelow: {
    fontSize: 14,
    color: '#212121',
    textAlign: 'left',
    marginTop: 5,
  },
  modalValue: {
    fontSize: 14,
  },
  closeButton: {
    backgroundColor: '#36c9d1',
    padding: 12,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },

});

export default styles;
