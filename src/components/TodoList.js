import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Image
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import React from "react";
import EmptyList from "../media/emptyList.png"

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
    </VStack>:<Image boxSize = "160px"  src={EmptyList}/>}
    </>
  );
}

export default TodoList;
