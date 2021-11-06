import {Heading} from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack , IconButton , useToast , useColorMode ,HStack ,Image} from "@chakra-ui/react";
import {useState , useEffect} from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import Logo from "./media/logo.png"
function App() {
  const toast = useToast()


  const initialTodos = JSON.parse(localStorage.getItem('todo')) || []

 
  const addTodoFn = (todo)=>{
    setTodos((todoList)=>{
      return [...todoList,todo]
    })
    
    toast({
      title : "work added",
      status : 'success',
      duration :2000,
      isClosable : 'true'
    })
  }
    

  const deleteTodo =(todoId)=> {
    let newTodo = todos.filter((todo)=>todo._id !==todoId);
    setTodos(newTodo)
    toast({
      title : "work removed",
      status : 'success',
      duration :2000,
      isClosable : 'true'
    })
  }

  const [todos ,setTodos] = useState(initialTodos)
  const {colorMode , toggleColorMode} = useColorMode()
  useEffect(()=>{
   (()=> localStorage.setItem('todo',JSON.stringify(todos)))()
  },[todos])
  return (
      <VStack p ={4}   >
        <HStack justifyContent="space-between" p ={4} w= "100%">
          <Image src= {Logo} boxSize={{base : '60px' , sm :"70px" , lg : "70px" , xl : "80px"}}/>
        <IconButton icon ={colorMode ==="light"?<FaSun />: <FaMoon/>} isRound = 'true' size = "lg"  onClick={()=>toggleColorMode()} />

        </HStack>
     
      <Heading mb ="8" fontWeight="extrabold" size ="2xl" bgGradient="linear(to-r,red.500,red.400,red.300)" bgClip ="text">Kaam Dhaam</Heading>
      <AddTodo addTodoFn ={addTodoFn} />
      <TodoList todos ={todos}  deleteTodo = {deleteTodo} />
      
      </VStack>
  );
}

export default App;
