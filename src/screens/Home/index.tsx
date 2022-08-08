import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { TaskCard } from "../../components/TaskCard";

import LogoSvg from '../../assets/logo.svg';

export interface Task {
    id: string;
    title: string;
    done: boolean;
}

export function Home() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskTitle, setTaskTitle] = useState('');

    const [ doneTasksCount, setDoneTasksCount ]= useState(0);

    useEffect(() => {

        function handleDoneTasks() {

            const filterDoneTasks = tasks.filter(task => task.done === true);

            setDoneTasksCount(filterDoneTasks.length);
        }

        handleDoneTasks();
    }, [tasks])

    function handleAddNewTask() {

        const newTask: Task = {
            id: new Date().toISOString(),
            title: taskTitle,
            done: false
        }

        const taskAlreadyExists = tasks.find(task => task.title === taskTitle);

        if (taskAlreadyExists) {

            return Alert.alert("Task existente!", `A task ${taskTitle} já foi adicionada a lista!`)
        }

        setTasks([...tasks, newTask]);
        setTaskTitle('');
    }

    function handleRemoveTask(id: string) {

        const updateTasks = tasks.filter(task => task.id !== id);
        const task = tasks.find(taskToDelete => taskToDelete.id === id)

        Alert.alert("Remover task", `Tem certeza que deseja remover a task ${task?.title}?`, [
            {
                text: 'Sim',
                onPress: () => {

                    setTasks(updateTasks);
                    Alert.alert("Deletado!", `A task ${task?.title} foi deletada com sucesso!`);
                }
            },

            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    function handleToggleTaskDone(id: string) {
    
        const updateTasks = tasks.map(task => task.id === id ? {
          ...task, done: !task.done
        } : task)
    
        setTasks(updateTasks);
      }

    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa...'
                    placeholderTextColor='#6b6b6b'
                    value={taskTitle}
                    onChangeText={(e) => setTaskTitle(e)}
                />

                <TouchableOpacity onPress={handleAddNewTask} style={styles.addButton}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.topContainer}>
                <Text style={styles.tasksCreatedCount}>Criadas {tasks.length}</Text>

                <Text style={styles.finishedTasksCount}>Concluídas {doneTasksCount}</Text>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item.title}
                renderItem={({ item }) => (
                    <TaskCard
                        task={item}
                        removeTask={() => handleRemoveTask(item.id)}
                        toggleTaskDone={() => handleToggleTaskDone(item.id)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmpty}>
                        <Text style={styles.listEmptyText}>
                            Ainda não existem tasks na lista? Comece a adicionar agora mesmo
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}