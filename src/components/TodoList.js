import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import React from "react";

function TodoList({todos , deleteTodo}) {
  
  return (
      <>
    {todos.length?
    <VStack 
    divider={<StackDivider />} 
    borderColor="gray.400"
    borderWidth="2px"
    borderRadius ="lg"
    w="100%"
    maxW ={{base : '90vw' , sm :"80vw" , lg : "50vw" , xl : "40vw"}}
    p="4"
    alignItems ="stretch">
      {todos.map((todo) => {
        return (
          <HStack key={todo._id} >
            <Text>{todo.body}</Text>
            <Spacer/>
            <IconButton icon={<FaTrash />} isRound="true"  onClick={()=>deleteTodo(todo._id)}/>
          </HStack>
        );
      })}
    </VStack>:<Badge colorScheme ="green" p ="4" m="4" borderRadius="lg">
        Empty list
    </Badge>}
    </>
  );
}

export default TodoList;
