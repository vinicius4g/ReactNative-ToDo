import React from 'react';
import { 
  FlatList, 
  TouchableOpacity, 
  View, 
  Text, 
  StyleSheet, 
  FlatListProps 
} from 'react-native';

function FlatListHeaderComponent({...props}) {
  return (
    <View>
      <Text style={[styles.header, props.darkMode ?styles.headerDark : styles.headerLight ]}>
        Minhas tasks
      </Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkMode: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkMode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[
              item.done ? styles.taskButtonDone : styles.taskButton,
              item.done && darkMode === true ? styles.taskButtonDoneDark : styles.taskButton
            ]}
          >
            <View 
              testID={`marker-${index}`}
              style={[
                styles.taskMarker, 
                item.done && styles.taskMarkerDone,
                darkMode && styles.taskMarkerDark,
                (darkMode && item.done) && styles.taskMarkerDoneDark
              ]}
            />
            <Text 
              style={[
                //item.done ? styles.taskTextDone : styles.taskText
                styles.taskText, 
                item.done && styles.taskTextDone,
                darkMode && styles.taskTextDark,
                (darkMode && item.done) && styles.taskTextDoneDark
              ]}  
              
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkMode={darkMode} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  ) 
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerLight: {
    color: '#3D3D4D',
  },
  headerDark: {
    color: '#BF4AD4',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#12A952',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#fff',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: '#222222',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#12A952',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneDark: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})