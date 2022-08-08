import { Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

import Icon from 'react-native-vector-icons/Feather';

export interface TaskItemProps {
    task: {
        id: string;
        title: string;
        done: boolean;
    }
    toggleTaskDone: (id: string) => void;
    removeTask: (id: string) => void;
}


export function TaskCard({ task, toggleTaskDone, removeTask }: TaskItemProps) {

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => toggleTaskDone(task.id)}
                style={task.done ? styles.taskMarkerDone : styles.taskMarker}
            >
                {task.done && (
                    <Icon
                        name="check"
                        size={12}
                        color="#FFF"
                    />
                )}
            </TouchableOpacity>

            <Text style={task.done ? styles.taskTextDone : styles.taskName}>{task.title}</Text>

            <TouchableOpacity onPress={() => removeTask(task.id)}>
                <FontAwesome name="trash" size={24} color='#808080' />
            </TouchableOpacity>
        </View>
    )
}